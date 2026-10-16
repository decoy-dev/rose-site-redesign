// Record the first seconds of a page load as video (needs ffmpeg).
//   bun tools/record.mjs <file|url> <out.webm> [ms=3800] [width=1440] [crop=x,y,w,h]
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
import { existsSync } from "node:fs";
const [target, out, ms = "3800", w = "1440", crop] = process.argv.slice(2);
const url = existsSync(target) ? "file://" + resolve(target) : target;
const width = Number(w);
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files", "--use-angle=metal", "--enable-gpu-rasterization", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
await page.goto("about:blank");
const opts = { path: out, fps: 60 };
if (crop) { const [x, y, cw, ch] = crop.split(",").map(Number); opts.crop = { x, y, width: cw, height: ch }; }
const rec = await page.screencast(opts);
await page.goto(url, { waitUntil: "domcontentloaded" });
await new Promise((r) => setTimeout(r, Number(ms)));
await rec.stop();
await browser.close();
console.log(out);
