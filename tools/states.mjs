// Fold screenshots of the hero in its fallback states: reduced motion, no JavaScript, and 300ms into a normal load.
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
const [file, outdir] = process.argv.slice(2);
const url = "file://" + resolve(file);
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
async function shot(name, setup, wait = 400) {
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await setup(p);
  await p.goto(url, { waitUntil: "load" });
  await new Promise((r) => setTimeout(r, wait));
  await p.screenshot({ path: `${outdir}/${name}.png` });
  const visible = await p.evaluate(() => { const r = document.querySelector(".note-rig"); const s = getComputedStyle(r); return { opacity: s.opacity, env: document.querySelectorAll(".env-front").length, cls: document.documentElement.className }; });
  console.log(name, JSON.stringify(visible));
  await p.close();
}
await shot("reduced-motion", (p) => p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]));
await shot("no-js", (p) => p.setJavaScriptEnabled(false));
await shot("gsap-blocked", (p) => p.setRequestInterception(true).then(() => p.on("request", (r) => r.url().includes("gsap") ? r.abort() : r.continue())), 2800);
await b.close();
