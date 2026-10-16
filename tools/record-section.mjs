// Record a looping section: scroll a selector into the middle of the viewport, then record it as video.
//   bun tools/record-section.mjs <file|url> <selector> <out.webm> [ms=10000] [width=1440]
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

const [target, selector, out, ms = "10000", w = "1440"] = process.argv.slice(2);
const url = existsSync(target) ? "file://" + resolve(target) : target;
const width = Number(w), height = width < 600 ? 844 : 900;
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--allow-file-access-from-files", "--use-angle=metal", "--enable-gpu-rasterization", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate((sel) => {
  const el = document.querySelector(sel);
  const r = el.getBoundingClientRect();
  window.scrollTo({ top: window.scrollY + r.top + r.height / 2 - innerHeight / 2, behavior: "instant" });
}, selector);
const rec = await page.screencast({ path: out, fps: 30 });
await new Promise((r) => setTimeout(r, Number(ms)));
await rec.stop();
await browser.close();
console.log(out);
