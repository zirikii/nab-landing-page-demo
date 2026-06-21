const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

test("main script populates footer copyright year at runtime", () => {
  const script = fs.readFileSync(path.join(__dirname, "..", "js", "main.js"), "utf8");
  const copyrightYear = createElement();

  class FixedDate extends Date {
    constructor(...args) {
      super(...(args.length ? args : ["2034-06-21T00:00:00Z"]));
    }
  }

  const sandbox = {
    Date: FixedDate,
    document: {
      body: { style: {} },
      addEventListener() {},
      getElementById(id) {
        if (id === "copyrightYear") return copyrightYear;
        return createElement();
      },
      querySelectorAll() {
        return [];
      }
    },
    window: {
      addEventListener() {},
      matchMedia() {
        return { matches: false };
      }
    }
  };

  vm.runInNewContext(script, sandbox);

  assert.equal(copyrightYear.textContent, "2034");
});

function createElement() {
  return {
    classList: {
      contains() {
        return false;
      },
      remove() {},
      toggle() {}
    },
    style: {},
    addEventListener() {},
    contains() {
      return false;
    },
    getAttribute() {
      return "";
    },
    querySelector() {
      return createElement();
    },
    setAttribute() {}
  };
}
