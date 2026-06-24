import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/Page.jsx";
import { pages } from "./data/pages.js";
import { fileToPath } from "./lib/routes.js";
import { pushClick, attachDataLayerLogger } from "./lib/datalayer.js";

export default function App() {
  // Global delegated click tracking, mirroring js/main.js: any click on a
  // [data-dl-id], .btn, .link-card__more or .article-card__link pushes cmp:click.
  useEffect(() => {
    attachDataLayerLogger();
    const handler = (e) => {
      const el =
        e.target.closest &&
        e.target.closest("[data-dl-id], .btn, .link-card__more, .article-card__link");
      if (!el) return;
      const id =
        el.getAttribute("data-dl-id") || (el.getAttribute("class") || "").split(" ")[0];
      if (!id) return;
      pushClick(id, (el.textContent || "").trim().slice(0, 60));
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <Routes>
      {pages.map((page) => (
        <Route key={page.file} path={fileToPath(page.file)} element={<Page page={page} />} />
      ))}
      {/* Unknown routes fall back to the home page (the original site had none). */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
