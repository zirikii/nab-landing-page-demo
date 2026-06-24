# AGENTS.md

## Cursor Cloud specific instructions

This is a **React 18 + Vite + Tailwind CSS** single-page app (a rewrite of the
original static HTML/CSS/JS site). There is a build step (Vite).

- Install deps with `npm install`.
- Develop with `npm run dev` (Vite dev server, http://localhost:5173).
- Build with `npm run build` (outputs `dist/`); preview the build with
  `npm run preview` (http://localhost:4173). The preview server has SPA fallback,
  so deep routes like `/business` work on direct load.
- Dependencies of note: `react`, `react-dom`, `react-router-dom`,
  `@adobe/adobe-client-data-layer` (genuine ACDL library), and dev tooling
  `vite`, `tailwindcss`, `postcss`, `autoprefixer`, plus `playwright`,
  `pixelmatch`, `pngjs` for the visual/interaction tests.
- There is no unit-test framework. Verification is via:
  - `npm run test:visual` — `scripts/visual-compare.mjs` pixel-diffs the React
    build against a reference copy of the original site (set `ORIG_URL` /
    `REACT_URL`).
  - `node scripts/interactions-check.mjs` — captures interactive states and
    asserts Adobe Client Data Layer event parity.
  - `npm run test:walkthrough` — records a Playwright walkthrough video
    (`shots/walkthrough-demo.webm`). Set `PREVIEW_URL` to reuse a running server.
  - Playwright needs a browser: `npx playwright install chromium`.

- Core behavior to verify: the Adobe Client Data Layer (`window.adobeDataLayer`).
  `src/lib/datalayer.js` fires a `cmp:show` event on each route load and
  `cmp:click` events on UI interactions; watch the browser console
  (`[adobeDataLayer] ...`) to confirm event parity.

## Code layout

- Page content model: `src/data/pages.js` (73 pages, 11 section types).
- Header/footer/menu content: `src/data/site.js`.
- Section components: `src/components/sections/` (one per section type + `Sections.jsx` dispatcher).
- Styling: Tailwind utilities + brand tokens in `tailwind.config.js`; a few base
  element styles are in `src/index.css` (ported from the original to keep
  typography/spacing identical).
