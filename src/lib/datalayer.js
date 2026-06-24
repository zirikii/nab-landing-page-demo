// Adobe Client Data Layer (ACDL) integration, ported from the original
// js/datalayer.js. The real nab.com.au is instrumented with the Adobe Client
// Data Layer (core.wcm.components.commons.datalayer); we mirror that here using
// the genuine @adobe/adobe-client-data-layer library.
import "@adobe/adobe-client-data-layer/dist/adobe-client-data-layer.min.js";

// ACDL reads any pre-existing array on window.adobeDataLayer (set in index.html),
// then augments it with push/getState/addEventListener once the library loads.
if (typeof window !== "undefined") {
  window.adobeDataLayer = window.adobeDataLayer || [];
}

function nowIso() {
  return new Date().toISOString();
}

// Page-load event mirroring the AEM page component data structure.
export function pushPageLoad() {
  if (typeof window === "undefined") return;
  window.adobeDataLayer.push({
    event: "cmp:show",
    eventInfo: { path: "page" },
    page: {
      "@type": "nab/components/page",
      "dc:title": document.title,
      "xdm:language": document.documentElement.lang || "en-AU",
      "repo:path": window.location.pathname,
      url: window.location.href,
      referrer: document.referrer || "",
      timestamp: nowIso(),
    },
  });
}

// Component click event mirroring cmp:click.
export function pushClick(id, label) {
  if (typeof window === "undefined") return;
  window.adobeDataLayer.push({
    event: "cmp:click",
    eventInfo: { path: "component." + id },
    component: {
      id: id,
      title: label || "",
      timestamp: nowIso(),
    },
  });
}

// Expose the same global helper the original site exposed.
if (typeof window !== "undefined") {
  window.NabDataLayer = { pushPageLoad, pushClick };
}

let loggerAttached = false;
// Dev aid: log every data layer event so parity can be verified in the console,
// matching the original js/datalayer.js behaviour.
export function attachDataLayerLogger() {
  if (typeof window === "undefined" || loggerAttached) return;
  const dl = window.adobeDataLayer;
  if (dl && typeof dl.addEventListener === "function") {
    loggerAttached = true;
    dl.addEventListener("adobeDataLayer:event", function (e) {
      // eslint-disable-next-line no-console
      console.debug("[adobeDataLayer]", e.eventInfo && e.eventInfo.path, e);
    });
  }
}
