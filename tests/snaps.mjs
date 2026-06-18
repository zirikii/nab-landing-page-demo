import { chromium } from "playwright";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", ".artifacts", "pr");
const BASE = process.env.BASE_URL || "http://localhost:8080";
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const b = await chromium.launch();

// Desktop mega-menu (viewport only)
const d = await b.newContext({ viewport: { width: 1366, height: 760 } });
const dp = await d.newPage();
await dp.goto(`${BASE}/index.html`, { waitUntil: "networkidle" });
await dp.waitForSelector(".main-nav__list");
await dp.hover('.main-nav__item[data-menu="bank"] .main-nav__btn');
await wait(500);
await dp.screenshot({ path: join(OUT, "vp-megamenu.png") });
await d.close();

// Mobile slide-in menu (viewport only)
const m = await b.newContext({ viewport: { width: 390, height: 800 } });
const mp = await m.newPage();
await mp.goto(`${BASE}/index.html`, { waitUntil: "networkidle" });
await mp.waitForSelector("#hamburger");
await mp.click("#hamburger");
await wait(500);
await mp.click(".mobile-acc__btn");
await wait(400);
await mp.screenshot({ path: join(OUT, "vp-mobile-menu.png") });
await m.close();

await b.close();
console.log("snaps written");
