// Captures interactive-state screenshots + Adobe Client Data Layer (ACDL) event
// state on BOTH the original static site and the React build, so we can verify
// behavioural + analytics parity.
import { chromium } from "/workspace/node_modules/playwright/index.mjs";
import fs from "fs";

const ORIG = process.env.ORIG_URL || "http://127.0.0.1:8090";
const REACT = process.env.REACT_URL || "http://127.0.0.1:4173";
const OUT = "/opt/cursor/artifacts/interactions";
fs.mkdirSync(OUT, { recursive: true });

const homeOf = (base) => (base === ORIG ? base + "/index.html" : base + "/");

async function dlSummary(page) {
  return page.evaluate(() => {
    const dl = window.adobeDataLayer || [];
    const arr = Array.isArray(dl) ? dl : [];
    const events = arr.filter((x) => x && x.event).map((x) => ({
      event: x.event,
      path: x.eventInfo && x.eventInfo.path,
      id: x.component && x.component.id,
    }));
    return { length: arr.length, events };
  });
}

async function run(label, base) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const out = {};

  // Home load → cmp:show
  await page.goto(homeOf(base), { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  out.onLoad = await dlSummary(page);

  // Mega menu: hover "Bank"
  await page.getByRole("button", { name: "Bank" }).first().hover();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/${label}-mega.png` });
  out.afterMega = await dlSummary(page);

  // Move away, open Login
  await page.mouse.move(700, 400);
  await page.waitForTimeout(200);
  await page.getByRole("button", { name: "Login" }).first().click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${label}-login.png` });
  out.afterLogin = await dlSummary(page);
  await page.keyboard.press("Escape");

  // Open Search
  await page.getByRole("button", { name: "Search" }).first().click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${label}-search.png` });
  out.afterSearch = await dlSummary(page);
  await page.keyboard.press("Escape");

  // Accordion (home only) — click first accordion button
  const acc = page.getByRole("button", { name: /Interpreters available/i });
  if (await acc.count()) {
    await acc.first().scrollIntoViewIfNeeded();
    await acc.first().click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/${label}-accordion.png` });
    out.afterAccordion = await dlSummary(page);
  }

  // Mobile menu at 390px
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(homeOf(base), { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  await page.getByRole("button", { name: "Menu" }).first().click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/${label}-mobile.png` });
  out.afterMobile = await dlSummary(page);

  await browser.close();
  return out;
}

const o = await run("orig", ORIG);
const r = await run("react", REACT);
fs.writeFileSync(`${OUT}/acdl.json`, JSON.stringify({ orig: o, react: r }, null, 2));

const fmt = (s) => s.events.map((e) => e.event + (e.id ? `(${e.id})` : "")).join(", ");
for (const stage of ["onLoad", "afterMega", "afterLogin", "afterSearch", "afterAccordion", "afterMobile"]) {
  console.log(`\n== ${stage} ==`);
  console.log("  ORIG :", o[stage] ? `${o[stage].length} events -> ${fmt(o[stage])}` : "(n/a)");
  console.log("  REACT:", r[stage] ? `${r[stage].length} events -> ${fmt(r[stage])}` : "(n/a)");
}
