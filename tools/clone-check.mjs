// Load every page of a local clone and report anything it could not load.
//   bun tools/clone-check.mjs <siteDir> [base=http://127.0.0.1:4173] [compareOrigin] [outDir]
// Needs `bun tools/serve.mjs <siteDir>` running at <base>.
// Third-party analytics and the chat widget are blocked so a check never shows up in the live site's data.
// With compareOrigin (e.g. https://rosepracticesolutions.com) it also saves reduced-motion 1440px full-page
// screenshots of each page from both, as <outDir>/<slug>.{clone,live}.png, for tools/imgdiff.py.
import puppeteer from "puppeteer-core";
import { readdirSync, statSync, mkdirSync } from "node:fs";
import { join, relative } from "node:path";

const [siteDir = "clone/site", base = "http://127.0.0.1:4173", compareOrigin, outDir = "shots/clone-check"] = process.argv.slice(2);
const BLOCK = /googletagmanager|google-analytics|clarity\.ms|leadconnectorhq|msgsndr|doubleclick|facebook\.net/;

function pages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return pages(p);
    return name.endsWith(".html") ? [p] : [];
  });
}
const routes = pages(siteDir)
  .map((p) => "/" + relative(siteDir, p).replace(/(^|\/)index\.html$/, "").replace(/\.html$/, ""))
  .sort();

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars"],
});

async function visit(origin, route, shotPath) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setRequestInterception(true);
  const problems = [];
  page.on("request", (r) => (BLOCK.test(r.url()) ? r.abort("blockedbyclient") : r.continue()));
  page.on("requestfailed", (r) => {
    if (!r.failure()?.errorText.startsWith("net::ERR_BLOCKED_BY_CLIENT")) problems.push(`failed ${r.url()} ${r.failure()?.errorText}`);
  });
  page.on("response", (r) => {
    const u = new URL(r.url());
    const isRouteItself = u.pathname === route && route === "/404";
    if (u.origin === new URL(origin).origin && r.status() >= 400 && !isRouteItself) problems.push(`${r.status()} ${u.pathname}`);
  });
  page.on("pageerror", (e) => problems.push(`pageerror ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error" && !m.text().includes("ERR_BLOCKED_BY_CLIENT")) problems.push(`console ${m.text()}`);
  });
  await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  if (shotPath) {
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight / 2) {
        scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 100));
      }
      scrollTo({ top: 0, behavior: "instant" });
    });
    await new Promise((r) => setTimeout(r, 1200));
    // Full-page capture is taken from the current scroll state; make sure it is the top, after layout settles.
    await page.evaluate(async () => {
      scrollTo({ top: 0, behavior: "instant" });
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    });
    await page.screenshot({ path: shotPath, fullPage: true });
  }
  const title = await page.title();
  await page.close();
  return { title, problems };
}

if (compareOrigin) mkdirSync(outDir, { recursive: true });
let bad = 0;
for (const route of routes) {
  const slug = route === "/" ? "home" : route.slice(1).replaceAll("/", "__");
  const local = await visit(base, route, compareOrigin && join(outDir, `${slug}.clone.png`));
  if (compareOrigin) await visit(compareOrigin, route, join(outDir, `${slug}.live.png`));
  bad += local.problems.length;
  console.log(`${local.problems.length ? "FAIL" : "ok  "} ${route.padEnd(28)} ${local.title}`);
  for (const p of local.problems) console.log(`       ${p}`);
}
console.log(`${routes.length} pages, ${bad} problems`);
await browser.close();
process.exit(bad ? 1 : 0);
