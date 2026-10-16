// Capture an animation as numbered frames (and a contact sheet via tools/sheet.py).
//   bun tools/filmstrip.mjs <url|file> <outdir> [ms=4000] [every=100] [width=1440] [clip=x,y,w,h]
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
import { existsSync, mkdirSync } from "node:fs";

const [target, outdir, ms = "4000", every = "100", w = "1440", clipArg] = process.argv.slice(2);
const url = existsSync(target) ? "file://" + resolve(target) : target;
const width = Number(w);
mkdirSync(outdir, { recursive: true });
const clip = clipArg ? Object.fromEntries(clipArg.split(",").map((v, i) => [["x", "y", "width", "height"][i], Number(v)])) : undefined;

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--allow-file-access-from-files"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: width < 600 ? 844 : 900, deviceScaleFactor: 1 });
// Hold animations until fonts are ready so frame 0 is the true start.
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
const t0 = Date.now();
let i = 0;
while (Date.now() - t0 < Number(ms)) {
  const t = Date.now() - t0;
  await page.screenshot({ path: `${outdir}/f${String(i).padStart(3, "0")}-${String(t).padStart(5, "0")}ms.png`, clip });
  i++;
  const next = t0 + i * Number(every);
  const wait = next - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
}
console.log(`${i} frames -> ${outdir}`);
await browser.close();
