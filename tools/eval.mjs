// Load a page in headless Chrome and print the JSON result of a JavaScript expression evaluated in it.
//   bun tools/eval.mjs <url|file> <width> "<expression>"      e.g. "document.querySelector('h1').getClientRects().length"
//   bun tools/eval.mjs <url|file> <width> @script.js           the file's contents are the expression (may be an async IIFE)
// STILL=1 emulates prefers-reduced-motion. Third-party analytics and the chat widget are blocked.
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
import { existsSync, readFileSync } from "node:fs";

const [target, w = "1440", exprArg] = process.argv.slice(2);
const url = existsSync(target) ? "file://" + resolve(target) : target;
const expr = exprArg?.startsWith("@") ? readFileSync(exprArg.slice(1), "utf8") : exprArg;
const width = Number(w);
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: width < 600 ? 844 : 900 });
if (process.env.STILL) await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.setRequestInterception(true);
page.on("request", (r) => (/googletagmanager|clarity\.ms|leadconnectorhq/.test(r.url()) ? r.abort("blockedbyclient") : r.continue()));
page.on("pageerror", (e) => console.error("pageerror", e.message));
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
const out = await page.evaluate(expr);
console.log(JSON.stringify(out, null, 2));
await browser.close();
