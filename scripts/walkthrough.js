// Records a Playwright walkthrough video of the React app. Builds the app (if
// needed), serves the production build with `vite preview`, then navigates the
// site exercising the mega menu, search, login, accordion and mobile menu.

import { chromium } from "playwright";
import { spawn, execSync } from "child_process";
import http from "http";
import net from "net";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const shotsDir = path.join(root, "shots");
const videoDir = path.join(shotsDir, "walkthrough");

const SERVER_HOST = "127.0.0.1";
const SERVER_STARTUP_TIMEOUT_MS = 30000;
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
      const req = http.get({ hostname, port: Number(port), path: "/", timeout: 1000 }, (res) => {
        res.resume();
        resolve();
      });
      const retryOrFail = () => {
        if (Date.now() - started >= timeoutMs) {
          reject(new Error(`Preview server not ready at ${url} within ${timeoutMs}ms`));
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
  // Reuse an already-running preview server if PREVIEW_URL is provided.
  if (process.env.PREVIEW_URL) {
    await waitForServer(process.env.PREVIEW_URL, SERVER_STARTUP_TIMEOUT_MS);
    return { proc: null, url: process.env.PREVIEW_URL };
  }
  if (!fs.existsSync(path.join(root, "dist", "index.html"))) {
    console.log("dist/ not found — building…");
    execSync("npm run build", { cwd: root, stdio: "inherit" });
  }
  const port = await getAvailablePort();
  const url = `http://${SERVER_HOST}:${port}`;
  const proc = spawn(
    "npx",
    ["vite", "preview", "--port", String(port), "--host", SERVER_HOST],
    { cwd: root, stdio: ["ignore", "pipe", "pipe"] }
  );
  await waitForServer(url, SERVER_STARTUP_TIMEOUT_MS);
  return { proc, url };
}

const pause = (page, ms) => page.waitForTimeout(ms);

async function runWalkthrough() {
  fs.mkdirSync(videoDir, { recursive: true });
  const { proc, url } = await startServer();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: videoDir, size: { width: 1440, height: 900 } },
  });
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  page.setDefaultNavigationTimeout(20000);

  try {
    console.log("Starting walkthrough at", url);

    // Home + mega menu
    await page.goto(url + "/", { waitUntil: "load" });
    await pause(page, 1200);
    await page.getByRole("button", { name: "Bank" }).first().hover();
    await pause(page, 1000);
    await page.getByRole("link", { name: "Savings accounts" }).first().click();
    await pause(page, 1200);

    // Credit cards hub
    await page.goto(url + "/credit-cards");
    await pause(page, 1000);
    await page.getByRole("button", { name: "Credit cards" }).first().hover();
    await pause(page, 800);
    await page.goto(url + "/latest-offers");
    await pause(page, 1000);

    // Home loans + refinancing
    await page.goto(url + "/home-loans");
    await pause(page, 1000);
    await page.goto(url + "/refinancing");
    await pause(page, 1000);

    // Business
    await page.goto(url + "/business");
    await pause(page, 1000);
    await page.goto(url + "/business-accounts");
    await pause(page, 1000);

    // Corporate + insurance
    await page.goto(url + "/corporate");
    await pause(page, 1000);
    await page.goto(url + "/insurance");
    await pause(page, 1000);
    await page.goto(url + "/travel-insurance");
    await pause(page, 1000);

    // Help, contact, find us
    await page.goto(url + "/help-support");
    await pause(page, 1000);
    await page.goto(url + "/contact-us");
    await pause(page, 1000);
    await page.goto(url + "/find-us");
    await pause(page, 1000);

    // Home interactions: search, login, accordion
    await page.goto(url + "/");
    await pause(page, 800);
    await page.getByRole("button", { name: "Search" }).first().click();
    await pause(page, 800);
    await page.keyboard.press("Escape");
    await pause(page, 400);
    await page.getByRole("button", { name: "Login" }).first().click();
    await pause(page, 800);
    await page.keyboard.press("Escape");
    await pause(page, 400);
    await page.getByRole("button", { name: /Interpreters available/i }).first().scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: /Interpreters available/i }).first().click();
    await pause(page, 800);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5));
    await pause(page, 600);

    // Mobile menu
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(url + "/");
    await pause(page, 800);
    await page.getByRole("button", { name: "Menu" }).first().click();
    await pause(page, 1000);
    await page.getByRole("button", { name: "Personal" }).first().click();
    await pause(page, 800);
    await page.getByRole("button", { name: "Close menu" }).first().click();
    await pause(page, 600);

    // Sitemap + legal + international
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(url + "/sitemap");
    await pause(page, 1200);
    await page.goto(url + "/privacy");
    await pause(page, 1000);
    await page.goto(url + "/international");
    await pause(page, 1000);

    await page.screenshot({ path: path.join(shotsDir, "walkthrough-final.png"), fullPage: false });
    console.log("Walkthrough complete.");
  } finally {
    await context.close();
    await browser.close();
    if (proc) proc.kill();

    const videos = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm"));
    if (videos.length) {
      const src = path.join(videoDir, videos[videos.length - 1]);
      const dest = path.join(shotsDir, "walkthrough-demo.webm");
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      fs.renameSync(src, dest);
      console.log("Video saved to:", dest);
      try {
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
