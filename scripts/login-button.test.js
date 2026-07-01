"use strict";

const assert = require("assert/strict");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const root = path.join(__dirname, "..");

const expectedStates = {
  idle: { label: "Login", ariaBusy: "false", disabled: false },
  loading: { label: "Loading...", ariaBusy: "true", disabled: true },
  success: { label: "Login successful", ariaBusy: "false", disabled: false },
  error: { label: "Login error", ariaBusy: "false", disabled: false },
};

async function readLoginButton(page) {
  return page.locator("#loginToggle").evaluate((button) => ({
    text: button.textContent.trim(),
    state: button.dataset.state,
    ariaBusy: button.getAttribute("aria-busy"),
    disabled: button.disabled,
  }));
}

async function assertLoginState(page, state) {
  await page.evaluate((nextState) => {
    window.NabLoginButton.setState(nextState);
  }, state);

  const actual = await readLoginButton(page);
  const expected = expectedStates[state];

  assert.deepEqual(actual, {
    text: expected.label,
    state,
    ariaBusy: expected.ariaBusy,
    disabled: expected.disabled,
  });
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(pathToFileURL(path.join(root, "index.html")).href);
    await page.waitForFunction(() => window.NabLoginButton);

    for (const state of Object.keys(expectedStates)) {
      await assertLoginState(page, state);
      console.log(`LoginButton ${state} state passed.`);
    }
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
