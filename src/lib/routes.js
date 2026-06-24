// Maps the legacy "*.html" file names used throughout the content data to clean
// client-side routes. index.html -> "/", "savings-accounts.html" -> "/savings-accounts".

export function fileToPath(file) {
  if (!file) return "/";
  if (file === "index.html") return "/";
  return "/" + file.replace(/\.html$/, "");
}

// Converts an href found in the content/nav data into a router path. Leaves
// external links, anchors and mailto/tel untouched.
export function isInternalHref(href) {
  if (!href) return false;
  if (/^(https?:)?\/\//i.test(href)) return false;
  if (/^(mailto:|tel:|#)/i.test(href)) return false;
  return true;
}

export function hrefToPath(href) {
  if (!isInternalHref(href)) return href;
  return fileToPath(href);
}
