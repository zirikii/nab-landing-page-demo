# NAB Landing Page Rebuild — React + Tailwind

A pixel-faithful recreation of the [nab.com.au](https://www.nab.com.au/) homepage
and public-facing site pages, built as a modern **React 18 + Vite + Tailwind CSS**
single-page application. The original is rendered by Adobe Experience Manager (AEM)
and instrumented with the Adobe Client Data Layer (ACDL); this rebuild mirrors the
layout and wires up the genuine ACDL library for analytics-event parity.

> Educational / non-commercial recreation only. NAB, the NAB logo, and all imagery
> are trademarks and copyright of National Australia Bank Limited. This project is
> not affiliated with or endorsed by NAB and must not be deployed publicly.

This is a rewrite of the original static HTML/CSS/JS site into React + Tailwind.
The 73 pages are still generated from a single content model, now rendered by React
components and styled with Tailwind utilities that reproduce the original design
exactly (verified with an automated pixel-diff; see _Visual parity_ below).

## Run it

```bash
npm install
npm run dev        # Vite dev server (http://localhost:5173)
```

Production build / preview:

```bash
npm run build      # outputs to dist/
npm run preview    # serves the build (http://localhost:4173)
```

## Structure

```
index.html                 Vite entry (mounts the React app)
public/assets/             Images and logos (served at /assets/...)
src/
  main.jsx                 App bootstrap (BrowserRouter)
  App.jsx                  Routes built from the page data + global click tracking
  index.css                Tailwind layers + base element styles ported from the original
  data/
    pages.js               Page content model (73 pages, 11 section types)
    site.js                Header / mega menu / mobile menu / footer content
  lib/
    routes.js              file <-> route mapping ("savings-accounts.html" -> "/savings-accounts")
    datalayer.js           Adobe Client Data Layer integration (cmp:show / cmp:click)
    useMediaQuery.js       Breakpoint hook
  components/
    Page.jsx               Page shell (header, sections, footer; fires page-load event)
    Header.jsx             Sticky header, mega menus, search, login
    MobileMenu.jsx         Slide-in mobile navigation (<= 880px)
    Footer.jsx             Footer
    Button.jsx, SmartLink.jsx, Chevron.jsx, Container.jsx
    sections/              One component per section type + dispatcher
tailwind.config.js         Brand tokens (colours, fonts, radius, shadows)
scripts/
  walkthrough.js           Playwright navigation demo (records video)
  visual-compare.mjs       Pixel-diff the React build vs a reference of the original
  interactions-check.mjs   Capture interactive states + assert ACDL event parity
shots/                     Walkthrough video + screenshots
```

## Routing

The content model uses the original `*.html` hrefs. `SmartLink` maps these to clean
client-side routes (`index.html` → `/`, `savings-accounts.html` → `/savings-accounts`).
All 73 pages are registered in `App.jsx` from the `pages` data.

## Data layer

`window.adobeDataLayer` is initialised in `index.html` before the app loads.
`src/lib/datalayer.js` uses the genuine `@adobe/adobe-client-data-layer` library.
`pushPageLoad()` fires a `cmp:show` page event on each route change, and UI
interactions fire `cmp:click` component events. Open the browser console to watch
events (`[adobeDataLayer] ...`).

## Visual parity

The rewrite is verified pixel-for-pixel against the original markup. `scripts/visual-compare.mjs`
screenshots both versions across multiple pages and viewports (desktop / 880 / mobile)
and diffs them with `pixelmatch`; `scripts/interactions-check.mjs` captures the
interactive states (mega menu, mobile menu, search, login, accordion) and asserts
the Adobe Client Data Layer events match.

## Walkthrough demo

```bash
npm run build
npm run test:walkthrough          # spawns its own preview server
# or reuse a running server:
PREVIEW_URL=http://localhost:4173 npm run test:walkthrough
```

Output: `shots/walkthrough-demo.webm` (and `.mp4` if ffmpeg is available).

## Notes

- Brand red gradient (`#ED0000` -> `#C80000`) is taken directly from the official NAB logo SVG.
- Typography uses the Helvetica Neue / Arial system stack matching NAB's brand fallback.
- Fully responsive: desktop mega-menu collapses into an off-canvas mobile menu under 880px.
- All navigation links route to static public pages — no backend functionality.
```
