// Computer-vision parity check: screenshots the original static site and the new
// React build at matching routes/viewports, then pixel-diffs them with pixelmatch.
//
// Usage: ORIG_URL=http://127.0.0.1:8090 REACT_URL=http://127.0.0.1:4173 \
//        node scripts/visual-compare.mjs
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import fs from "fs";
import path from "path";

const ORIG_URL = process.env.ORIG_URL || "http://127.0.0.1:8090";
const REACT_URL = process.env.REACT_URL || "http://127.0.0.1:4173";
const OUT = process.env.OUT_DIR || "/opt/cursor/artifacts/visual";

// [name, originalPath, reactPath]
const ROUTES = [
  ["home", "/index.html", "/"],
  ["business", "/business.html", "/business"],
  ["corporate", "/corporate.html", "/corporate"],
  ["credit-cards", "/credit-cards.html", "/credit-cards"],
  ["refinancing", "/refinancing.html", "/refinancing"],
  ["insurance", "/insurance.html", "/insurance"],
  ["sitemap", "/sitemap.html", "/sitemap"],
  ["internet-banking", "/internet-banking.html", "/internet-banking"],
  ["find-us", "/find-us.html", "/find-us"],
];

const VIEWPORTS = [
  ["desktop", 1440, 900],
  ["bp880", 880, 1000],
  ["mobile", 390, 844],
];

function readPNG(file) {
  return PNG.sync.read(fs.readFileSync(file));
}

async function shot(page, url, file, w, h) {
  await page.setViewportSize({ width: w, height: h });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: file, fullPage: true });
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  const results = [];
  for (const [name, oPath, rPath] of ROUTES) {
    for (const [vp, w, h] of VIEWPORTS) {
      const base = path.join(OUT, `${name}-${vp}`);
      const oFile = `${base}-orig.png`;
      const rFile = `${base}-react.png`;
      const dFile = `${base}-diff.png`;
      await shot(page, ORIG_URL + oPath, oFile, w, h);
      await shot(page, REACT_URL + rPath, rFile, w, h);

      const a = readPNG(oFile);
      const b = readPNG(rFile);
      const width = Math.min(a.width, b.width);
      const height = Math.min(a.height, b.height);
      // Normalise to common size for diffing.
      const ca = cropTo(a, width, height);
      const cb = cropTo(b, width, height);
      const diff = new PNG({ width, height });
      const mismatch = pixelmatch(ca.data, cb.data, diff.data, width, height, {
        threshold: 0.1,
      });
      fs.writeFileSync(dFile, PNG.sync.write(diff));
      const total = width * height;
      const pct = ((mismatch / total) * 100).toFixed(3);
      results.push({
        page: name,
        viewport: vp,
        sizeOrig: `${a.width}x${a.height}`,
        sizeReact: `${b.width}x${b.height}`,
        mismatchPx: mismatch,
        pct: Number(pct),
      });
      console.log(
        `${name.padEnd(18)} ${vp.padEnd(8)} orig=${a.width}x${a.height} react=${b.width}x${b.height} diff=${pct}% (${mismatch}px)`
      );
    }
  }

  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(results, null, 2));
  await browser.close();

  const worst = [...results].sort((x, y) => y.pct - x.pct).slice(0, 8);
  console.log("\nWorst pages by diff %:");
  worst.forEach((r) => console.log(`  ${r.page}/${r.viewport}: ${r.pct}% (orig ${r.sizeOrig} vs react ${r.sizeReact})`));
}

function cropTo(png, w, h) {
  if (png.width === w && png.height === h) return png;
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (png.width * y + x) << 2;
      const j = (w * y + x) << 2;
      out.data[j] = png.data[i];
      out.data[j + 1] = png.data[i + 1];
      out.data[j + 2] = png.data[i + 2];
      out.data[j + 3] = png.data[i + 3];
    }
  }
  return out;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
