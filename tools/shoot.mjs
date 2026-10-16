// Screenshot a URL or local HTML file with headless Chrome.
// Scrolls the full page first so scroll-triggered reveals have fired.
//   bun tools/shoot.mjs <url|file> <out.png> [width=1440] [full|fold|HEIGHT] [scale=1]
//   STILL=1 emulates prefers-reduced-motion, so every loop shows its finished state (for layout review).
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

const [target, out, w = "1440", mode = "full", scale = "1"] = process.argv.slice(2);
const url = existsSync(target) ? "file://" + resolve(target) : target;
const width = Number(w);
const foldHeight = width < 600 ? 844 : 900;

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--allow-file-access-from-files"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: foldHeight, deviceScaleFactor: Number(scale) });
if (process.env.STILL) await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);

if (mode === "fold") {
  await new Promise((r) => setTimeout(r, 2500));
  await page.screenshot({ path: out });
} else {
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 1500));
  if (mode === "full") await page.screenshot({ path: out, fullPage: true });
  else await page.screenshot({ path: out, clip: { x: 0, y: 0, width, height: Number(mode) } });
}
const h = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(`${out} ${width}px wide, document ${h}px tall`);
await browser.close();
