// Smoke test for the motion system: loops run on screen, pause on the visitor's choice (showing the finished,
// signed state), stay paused after a reload, and nothing runs under prefers-reduced-motion.
//   bun tools/motion-check.mjs site/index.html
import puppeteer from "puppeteer-core";
import { resolve } from "node:path";

const url = "file://" + resolve(process.argv[2] || "site/index.html");
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const errors = [];

async function open(opts = {}) {
  const page = await browser.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewport({ width: 1440, height: 900 });
  if (opts.still) await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.goto(url, { waitUntil: "networkidle0" });
  return page;
}
const state = (page) => page.evaluate(() => {
  const op = (sel) => Math.round(parseFloat(getComputedStyle(document.querySelector(sel)).opacity) * 100) / 100;
  return {
    paused: document.documentElement.classList.contains("motion-paused"),
    stored: localStorage.getItem("rose-motion"),
    toggleText: document.querySelector(".site-foot [data-motion-text]").textContent,
    followupLive: document.querySelector('[data-loop="followup"]').classList.contains("is-live"),
    slot: op('[data-loop="followup"] [data-part="slot"]'),
    stamp: op('[data-loop="followup"] .stamp'),
    envelope: document.querySelectorAll(".env-front").length,
  };
});

// 1. normal: scroll the follow-up sample into view and catch it mid-loop
const page = await open();
await page.evaluate(() => localStorage.removeItem("rose-motion"));
await page.evaluate(() => document.querySelector('[data-loop="followup"]').scrollIntoView({ block: "center", behavior: "instant" }));
await wait(1200);
const running = await state(page);
// 2. pause from the header control: the sample jumps to its finished, signed state and stays there
await page.click(".site-head [data-motion-toggle]");
await wait(300);
const paused = await state(page);
await wait(1500);
const stillPaused = await state(page);
// 3. reload: the choice is remembered and the letter is not delivered
await page.reload({ waitUntil: "networkidle0" });
await wait(800);
const reloaded = await state(page);
await page.evaluate(() => localStorage.removeItem("rose-motion"));
await page.close();
// 4. reduced motion: nothing is built, everything is finished
const still = await open({ still: true });
await still.evaluate(() => document.querySelector('[data-loop="followup"]').scrollIntoView({ block: "center", behavior: "instant" }));
await wait(1500);
const reduced = await state(still);

console.log(JSON.stringify({ running, paused, stillPaused, reloaded, reduced, errors }, null, 1));
await browser.close();
