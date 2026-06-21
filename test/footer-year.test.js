const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

class TestElement {
  constructor() {
    this.textContent = "";
  }

  addEventListener() {}

  classList = {
    contains: () => false,
    remove: () => {},
    toggle: () => {},
  };

  setAttribute() {}
}

test("main.js populates the footer copyright year at runtime", () => {
  const copyrightYear = new TestElement();
  const siteHeader = new TestElement();

  class FixedDate extends Date {
    constructor() {
      super("2037-01-01T00:00:00Z");
    }
  }

  const script = fs.readFileSync(path.join(__dirname, "..", "js", "main.js"), "utf8");

  vm.runInNewContext(script, {
    Date: FixedDate,
    document: {
      body: {
        style: {},
      },
      addEventListener() {},
      getElementById(id) {
        if (id === "copyrightYear") return copyrightYear;
        if (id === "siteHeader") return siteHeader;
        return null;
      },
      querySelectorAll() {
        return [];
      },
    },
    window: {
      addEventListener() {},
      matchMedia() {
        return { matches: false };
      },
    },
  });

  assert.equal(copyrightYear.textContent, "2037");
});
