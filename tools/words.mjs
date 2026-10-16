// Visible word counts: whole page, and above the fold (first 900px at 1440, 844px at 390).
//   bun tools/words.mjs <url|file> [width=1440]
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
import { existsSync } from "node:fs";
const [target, w = "1440"] = process.argv.slice(2);
const url = existsSync(target) ? "file://" + resolve(target) : target;
const width = Number(w), fold = width < 600 ? 844 : 900;
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
const p = await b.newPage();
await p.setViewport({ width, height: fold });
await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await p.goto(url, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 4000));
const out = await p.evaluate((fold) => {
  const words = (s) => (s.match(/[A-Za-z0-9$][\w'’,.$+%-]*/g) || []).length;
  // "prose" is copy a visitor reads; "views" is text inside decorative product mock-ups (aria-hidden), the
  // "Sample" cards on both sites. Product views read as pictures, so the prose number is the one that matters.
  let all = 0, above = 0, views = 0;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode, el = n.parentElement;
    if (!el || !n.textContent.trim()) continue;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || el.closest("[hidden],script,style,noscript")) continue;
    const range = document.createRange(); range.selectNodeContents(n);
    const rects = [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0);
    if (!rects.length) continue;
    const c = words(n.textContent);
    all += c;
    if (el.closest("[aria-hidden='true'], .screen, .sample, [class*='-visual']")) views += c;
    if (rects[0].top < fold && rects[0].bottom > 0) above += c;
  }
  return { all, prose: all - views, views, above, height: document.documentElement.scrollHeight };
}, fold);
console.log(JSON.stringify({ target, width, ...out }));
await b.close();
