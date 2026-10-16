// Record a slow scroll through the whole page with every loop running, as a review video.
//   bun tools/tour.mjs <file|url> <out.webm> [width=1440] [secondsPerScreen=4]
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

const [target, out, w = "1440", perScreen = "4"] = process.argv.slice(2);
const url = existsSync(target) ? "file://" + resolve(target) : target;
const width = Number(w), height = width < 600 ? 844 : 900;
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--allow-file-access-from-files", "--use-angle=metal", "--enable-gpu-rasterization", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 1 });
await page.goto("about:blank");
const rec = await page.screencast({ path: out, fps: 30 });
await page.goto(url, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 3600)); // the hero letter's delivery
// glide down one screen at a time, pausing on each so its loop can play
const total = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
const step = height * 0.75;
for (let y = step; y < total + step; y += step) {
  await page.evaluate((to) => window.scrollTo({ top: to, behavior: "smooth" }), Math.min(y, total));
  await new Promise((r) => setTimeout(r, Number(perScreen) * 1000));
}
await rec.stop();
await browser.close();
console.log(out);
