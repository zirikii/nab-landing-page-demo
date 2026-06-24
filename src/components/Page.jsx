import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Sections from "./sections/Sections.jsx";
import AccessibilitySection from "./sections/AccessibilitySection.jsx";
import { pushPageLoad } from "../lib/datalayer.js";

// Renders a single page from the data model (mirrors build.js buildPage()).
export default function Page({ page }) {
  const isHome = page.file === "index.html";

  // Set document title + meta description, then fire the cmp:show page-load
  // event — ordered so dc:title matches, exactly like the original site.
  useEffect(() => {
    document.title = page.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", page.description || "");
    window.scrollTo(0, 0);
    pushPageLoad();
  }, [page]);

  return (
    <>
      <Header audience={page.audience || "personal"} />
      <main id="main">
        <Sections sections={page.sections} />
        {isHome && <AccessibilitySection />}
      </main>
      <Footer />
    </>
  );
}
