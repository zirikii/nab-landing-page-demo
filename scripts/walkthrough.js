"use strict";

const { chromium } = require("playwright");
const { spawn } = require("child_process");
const http = require("http");
const net = require("net");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const shotsDir = path.join(root, "shots");
const videoDir = path.join(shotsDir, "walkthrough");

const SERVER_HOST = "127.0.0.1";
const SERVER_STARTUP_TIMEOUT_MS = 15000;
const SERVER_POLL_INTERVAL_MS = 100;

function getAvailablePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, SERVER_HOST, () => {
      const port = server.address().port;
      server.close((err) => (err ? reject(err) : resolve(port)));
    });
    server.on("error", reject);
  });
}

function waitForServer(url, timeoutMs) {
  const started = Date.now();
  const { hostname, port } = new URL(url);

  return new Promise((resolve, reject) => {
    const tryConnect = () => {
      const req = http.get(
        { hostname, port: Number(port), path: "/", timeout: 1000 },
        (res) => {
          res.resume();
          resolve();
        }
      );

      const retryOrFail = () => {
        if (Date.now() - started >= timeoutMs) {
          reject(
            new Error(
              `HTTP server did not become ready at ${url} within ${timeoutMs}ms`
            )
          );
          return;
        }
        setTimeout(tryConnect, SERVER_POLL_INTERVAL_MS);
      };

      req.on("error", retryOrFail);
      req.on("timeout", () => {
        req.destroy();
        retryOrFail();
      });
    };

    tryConnect();
  });
}

async function startServer() {
  const port = await getAvailablePort();
  const url = `http://${SERVER_HOST}:${port}`;

  return new Promise((resolve, reject) => {
    let settled = false;
    let stderr = "";

    const proc = spawn("python3", ["-m", "http.server", String(port), "--bind", SERVER_HOST], {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
    });

    const fail = (err) => {
      if (settled) return;
      settled = true;
      try {
        proc.kill();
      } catch {
        // Process may already be gone.
      }
      reject(err);
    };

    proc.on("error", (err) => {
      fail(new Error(`Failed to start HTTP server: ${err.message}`));
    });

    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    proc.on("exit", (code, signal) => {
      if (settled) return;
      const details = stderr.trim();
      fail(
        new Error(
          `HTTP server exited before becoming ready (code ${code ?? "null"}, signal ${signal ?? "null"})${
            details ? `: ${details}` : ""
          }`
        )
      );
    });

    waitForServer(url, SERVER_STARTUP_TIMEOUT_MS)
      .then(() => {
        if (settled) return;
        if (proc.exitCode !== null) {
          const details = stderr.trim();
          fail(
            new Error(
              `HTTP server exited before becoming ready (code ${proc.exitCode})${
                details ? `: ${details}` : ""
              }`
            )
          );
          return;
        }
        settled = true;
        resolve({ proc, url });
      })
      .catch(fail);
  });
}

async function pause(page, ms) {
  await page.waitForTimeout(ms);
}

async function runWalkthrough() {
  fs.mkdirSync(videoDir, { recursive: true });

  const { proc, url } = await startServer();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: videoDir, size: { width: 1440, height: 900 } },
  });
  const page = await context.newPage();

  try {
    console.log("Starting walkthrough at", url);

    async function scrollThrough(slug, scrolls = 2) {
      await page.goto(url + "/" + slug);
      await page.waitForLoadState("networkidle");
      await pause(page, 700);
      for (let i = 1; i <= scrolls; i++) {
        await page.evaluate(
          (f) => window.scrollTo({ top: document.body.scrollHeight * f, behavior: "smooth" }),
          (i / (scrolls + 1))
        );
        await pause(page, 900);
      }
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
      await pause(page, 500);
    }

    // Home page + mega menu (with by-the-numbers stats)
    await page.goto(url + "/index.html");
    await page.waitForLoadState("networkidle");
    await pause(page, 1000);
    await page.locator('.main-nav__item[data-menu="bank"] .main-nav__btn').hover();
    await pause(page, 900);
    await page.locator('#mega-bank a[href="savings-accounts.html"]').first().click();
    await page.waitForLoadState("networkidle");
    await pause(page, 700);

    // Savings accounts: product cards + rate tiers
    await scrollThrough("savings-accounts.html", 3);

    // Term deposits: rate table
    await scrollThrough("term-deposits.html", 2);

    // Home loans + refinancing comparison
    await scrollThrough("home-loans.html", 3);
    await scrollThrough("refinancing.html", 2);

    // Credit cards + latest offers + qantas comparison
    await scrollThrough("credit-cards.html", 3);
    await scrollThrough("latest-offers.html", 2);
    await scrollThrough("qantas-rewards-cards.html", 2);

    // Personal loans
    await scrollThrough("personal-loans.html", 2);

    // Interest rates & fees: multiple tables
    await scrollThrough("interest-rates-fees.html", 4);

    // FX calculator: rates table
    await scrollThrough("foreign-exchange-calculator.html", 2);

    // Insurance product cards
    await scrollThrough("travel-insurance.html", 2);
    await scrollThrough("car-insurance.html", 2);

    // Business loans & payments
    await scrollThrough("business-loans.html", 2);
    await scrollThrough("merchant-payments.html", 2);

    // Find us: branch list
    await scrollThrough("find-us.html", 3);

    // Newsroom: news list
    await scrollThrough("newsroom.html", 2);

    // Fraud alerts: alert list
    await scrollThrough("fraud-alerts.html", 2);

    // Careers: stats + jobs
    await scrollThrough("careers.html", 3);

    // Shareholder centre: share price + dividends
    await scrollThrough("shareholder-centre.html", 2);

    // Home page interactions: search, login, accordion
    await page.goto(url + "/index.html");
    await pause(page, 800);
    await page.locator("#searchToggle").click();
    await pause(page, 800);
    await page.keyboard.press("Escape");
    await pause(page, 400);
    await page.locator("#loginToggle").click();
    await pause(page, 800);
    await page.keyboard.press("Escape");
    await pause(page, 400);
    await page.locator(".accordion__btn").first().click();
    await pause(page, 800);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5));
    await pause(page, 600);

    // Mobile menu
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(url + "/index.html");
    await pause(page, 800);
    await page.locator("#hamburger").click();
    await pause(page, 1000);
    await page.locator(".mobile-acc__btn").first().click();
    await pause(page, 800);
    await page.locator("#mobileMenuClose").click();
    await pause(page, 600);

    // Sitemap + legal
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(url + "/sitemap.html");
    await pause(page, 1200);
    await page.goto(url + "/privacy.html");
    await pause(page, 1000);
    await page.goto(url + "/international.html");
    await pause(page, 1000);

    await page.screenshot({ path: path.join(shotsDir, "walkthrough-final.png"), fullPage: false });
    console.log("Walkthrough complete.");
  } finally {
    await context.close();
    await browser.close();
    proc.kill();

    const videos = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
    if (videos.length) {
      const src = path.join(videoDir, videos[videos.length - 1]);
      const dest = path.join(shotsDir, "walkthrough-demo.webm");
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      fs.renameSync(src, dest);
      console.log("Video saved to:", dest);

      try {
        const { execSync } = require("child_process");
        execSync(
          `ffmpeg -y -i "${dest}" -c:v libx264 -pix_fmt yuv420p "${path.join(shotsDir, "walkthrough-demo.mp4")}"`,
          { stdio: "pipe" }
        );
        console.log("MP4 saved to:", path.join(shotsDir, "walkthrough-demo.mp4"));
      } catch {
        console.log("ffmpeg not available; webm video retained.");
      }
    }
  }
}

runWalkthrough().catch((err) => {
  console.error(err);
  process.exit(1);
});
