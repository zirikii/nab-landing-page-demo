const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function createElement() {
  const attributes = new Map();

  return {
    classList: {
      contains: () => false,
      remove: () => {},
      toggle: () => {},
    },
    hidden: false,
    nextElementSibling: null,
    style: {},
    textContent: "",
    addEventListener: () => {},
    contains: () => false,
    getAttribute: (name) => attributes.get(name) || "",
    querySelector: () => null,
    setAttribute: (name, value) => {
      attributes.set(name, value);
    },
  };
}

test("sets the footer copyright year from the current date", () => {
  const script = fs.readFileSync(path.join(__dirname, "..", "js", "main.js"), "utf8");
  const copyrightYear = createElement();
  const elements = new Map([
    ["copyrightYear", copyrightYear],
    ["siteHeader", createElement()],
  ]);

  const document = {
    body: { style: {} },
    addEventListener: () => {},
    getElementById: (id) => elements.get(id) || null,
    querySelectorAll: () => [],
  };
  const window = {
    addEventListener: () => {},
    matchMedia: () => ({ matches: false }),
  };

  vm.runInNewContext(script, { document, window });

  const currentYear = String(new Date().getFullYear());
  assert.equal(copyrightYear.textContent, currentYear);
  assert.equal(copyrightYear.getAttribute("datetime"), currentYear);
});
