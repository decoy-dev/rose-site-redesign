import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
const p = await b.newPage(); await p.setViewport({ width: 390, height: 844 });
await p.goto("file://" + process.cwd() + "/site/index.html", { waitUntil: "networkidle0" });
const r = await p.evaluate(() => {
  const W = document.documentElement.clientWidth;
  const out = [];
  document.querySelectorAll("body *").forEach((el) => { const b = el.getBoundingClientRect(); if (b.right > W + 1 && b.width > 0) out.push([el.tagName + "." + el.className.toString().slice(0, 40), Math.round(b.right)]); });
  return { W, sw: document.documentElement.scrollWidth, out: out.slice(0, 15) };
});
console.log(JSON.stringify(r, null, 1)); await b.close();
