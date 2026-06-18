/* End-to-end click-through of the NAB landing rebuild.
   Records a video and per-page screenshots so reviewers can see the public
   pages and shared header/footer behaviour working together.

   Run:  node tests/clickthrough.mjs
   Requires a static server on http://localhost:8080 and Playwright chromium. */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdirSync, renameSync, readdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, ".artifacts");
const SHOTS = join(OUT, "screenshots");
const VIDEO = join(OUT, "video");
const BASE = process.env.BASE_URL || "http://localhost:8080";

mkdirSync(SHOTS, { recursive: true });
mkdirSync(VIDEO, { recursive: true });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function shot(page, name) {
  await page.screenshot({ path: join(SHOTS, `${name}.png`), fullPage: true });
  console.log(`  screenshot: ${name}.png`);
}

const run = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1366, height: 850 },
    recordVideo: { dir: VIDEO, size: { width: 1366, height: 850 } },
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error") errors.push(`console: ${m.text()}`); });

  const visit = async (path, name) => {
    const res = await page.goto(`${BASE}/${path}`, { waitUntil: "networkidle" });
    if (!res || !res.ok()) throw new Error(`Failed to load ${path}: ${res && res.status()}`);
    // Header and footer partials must have rendered (attached; the nav list is
    // intentionally hidden in the mobile breakpoint).
    await page.waitForSelector(".site-header .main-nav__list", { state: "attached", timeout: 5000 });
    await page.waitForSelector(".site-footer .footer-grid", { state: "attached", timeout: 5000 });
    await wait(400);
    console.log(`visited: ${path} (title: ${await page.title()})`);
    await shot(page, name);
  };

  // 1) Home page + header interactions
  await visit("index.html", "01-home");

  // Open each desktop mega-menu by hovering the nav items.
  for (const key of ["bank", "borrow", "cards", "insure"]) {
    await page.hover(`.main-nav__item[data-menu="${key}"] .main-nav__btn`);
    await wait(350);
  }
  await shot(page, "02-home-megamenu");
  await page.mouse.move(683, 700); // move away to close
  await wait(300);

  // Search panel
  await page.click("#searchToggle");
  await wait(300);
  await shot(page, "03-home-search");
  await page.keyboard.press("Escape");
  await wait(200);

  // Login dropdown
  await page.click("#loginToggle");
  await wait(300);
  await shot(page, "04-home-login");
  await page.keyboard.press("Escape");
  await wait(200);

  // Accordion on the home page
  await page.click("#accessAccordion .accordion__btn");
  await wait(300);
  await shot(page, "05-home-accordion");

  // 2) Click through every primary nav destination, exercising each page.
  await visit("bank.html", "06-bank");
  await visit("home-loans.html", "07-home-loans");
  await visit("credit-cards.html", "08-credit-cards");
  await visit("insurance.html", "09-insurance");
  await visit("international.html", "10-international");
  await visit("business.html", "11-business");
  await visit("about.html", "12-about");
  await visit("help-support.html", "13-help-support");

  // Exercise the FAQ accordion on the help page
  await page.click("#faqAccordion .accordion__btn");
  await wait(300);
  await shot(page, "13b-help-faq-open");

  await visit("contact.html", "14-contact");

  // 3) Verify real link navigation from the footer (home -> credit cards)
  await visit("index.html", "15-home-again");
  await page.click('.site-footer a[href="credit-cards.html"]');
  await page.waitForURL("**/credit-cards.html");
  await page.waitForSelector(".site-header .main-nav__list");
  await wait(300);
  console.log(`footer link navigation -> ${page.url()}`);
  await shot(page, "16-footer-nav-credit-cards");

  // 4) Mobile view: hamburger + slide-in menu
  await page.setViewportSize({ width: 390, height: 800 });
  await visit("index.html", "17-mobile-home");
  await page.click("#hamburger");
  await wait(400);
  await shot(page, "18-mobile-menu-open");
  await page.click(".mobile-acc__btn"); // expand first accordion (Personal)
  await wait(300);
  await shot(page, "19-mobile-menu-personal");

  await context.close(); // finalises the video file
  await browser.close();

  // Give the video a friendly name.
  const vids = readdirSync(VIDEO).filter((f) => f.endsWith(".webm"));
  if (vids.length) {
    renameSync(join(VIDEO, vids[0]), join(VIDEO, "clickthrough.webm"));
    console.log(`video: ${join(VIDEO, "clickthrough.webm")}`);
  }

  if (errors.length) {
    console.error("\nPage errors detected:\n" + errors.join("\n"));
    process.exit(1);
  }
  console.log("\nAll pages loaded and interactions completed with no console/page errors.");
};

run().catch((e) => { console.error(e); process.exit(1); });
