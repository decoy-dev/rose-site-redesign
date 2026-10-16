// Smoke test: form error and success, the letter's envelope cleaned up, the mobile menu, no console errors.
//   bun tools/interact.mjs [site/index.html]
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";
const url = "file://" + resolve(process.argv[2] || "site/index.html");
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900 });
const errs = []; p.on("pageerror", (e) => errs.push(e.message)); p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
await p.goto(url, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 3500));
await p.type("#hero-email", "dr.lee@");
await p.click("#hero-form button[type=submit]");
const err1 = await p.$eval("#hero-email-err", (e) => [e.hidden, e.textContent, document.querySelector("#hero-email").getAttribute("aria-invalid")]);
await p.type("#hero-email", "brightsmiles.com");
await p.click("#hero-form button[type=submit]");
const ok = await p.evaluate(() => [document.querySelector("#hero-form").hidden, document.querySelector("#hero-done").hidden, document.activeElement.id]);
await p.screenshot({ path: "shots/states/hero-submitted.png", clip: { x: 0, y: 104, width: 760, height: 700 } });
// envelope pieces removed after delivery?
const left = await p.evaluate(() => [document.querySelectorAll(".env-front,.env-strip,.env-shadow").length, document.querySelector(".note-rig").getAttribute("style")]);
const m = await b.newPage(); await m.setViewport({ width: 390, height: 844 });
await m.goto(url, { waitUntil: "networkidle0" });
await m.click(".nav-toggle"); await new Promise((r) => setTimeout(r, 400));
const nav = await m.evaluate(() => [document.documentElement.classList.contains("nav-open"), getComputedStyle(document.querySelector(".nav")).visibility, document.querySelector(".nav-toggle").getAttribute("aria-expanded")]);
await m.screenshot({ path: "shots/states/mobile-nav.png" });
console.log(JSON.stringify({ err1, ok, left, nav, errs }));
await b.close();
