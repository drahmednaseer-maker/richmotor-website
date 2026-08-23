# Rich Motor Company — richmotor.com

A complete redesign of richmotor.com, rebuilt as a zero-dependency static site.

Rich Motor Company (RMC) manufactures, supplies and operates diesel generators
and power generation systems across the UAE, the Middle East and Africa.

## Why it's fast

- **No framework, no runtime.** Pages are generated at build time by a plain
  Node script. The browser receives HTML, one small CSS block and 4.5 kB of JS.
- **CSS is inlined** into every page, so the first paint costs zero extra
  round-trips. It compresses to a few kB over the wire.
- **Self-hosted Inter** (48 kB, latin subset, variable weight 400–800),
  preloaded — no third-party font connection.
- **Every image is WebP**, resized to the widths the layout actually uses and
  served through `srcset`/`sizes`. Below-the-fold images are lazy-loaded, and
  every `<img>` carries intrinsic dimensions so nothing shifts on load.
- **`content-visibility: auto`** on below-the-fold sections keeps the initial
  render cheap on long pages.
- Immutable one-year cache headers on `/img`, `/fonts`.

## Structure

```
build.mjs          Static site generator (no dependencies)
serve.mjs          Local preview server
src/
  layout.mjs       Page shell, header, footer, shared sections
  site.mjs         Contact details, navigation, partners
  icons.mjs        Inline SVG icon set
  styles.css       Design system
  app.js           Nav, accordion, hero slideshow, reveals, contact form
  pages/*.mjs      One module per page (content + metadata + JSON-LD)
public/
  img/             Optimised WebP assets
  fonts/           Inter (latin subset)
  docs/            Amperage chart & tower light brochure PDFs
```

Every page is a module exporting `meta` (path, title, description), `body`
(HTML) and optionally `schema` (JSON-LD). Adding a file to `src/pages/`
adds it to the build and the sitemap.

## Commands

```bash
npm run build   # generate dist/
npm run dev     # build, then serve on http://localhost:4321
```

## Pages

Home · Profile · Services · Projects · Diesel Generators UAE · Kubota ·
Cummins G-Drive · John Deere · Sound Proof Canopy · Mobile Lighting Towers ·
Low Voltage Panels · Aftersale Support · Amperage Chart · Sizing a Generator ·
Testing & Inspection · Voltage Configuration · FAQ · Contact Us

Same 18 pages and same URLs as the original site — nothing added, nothing lost.

## Deployment

Vercel builds with `node build.mjs` and serves `dist/` as static files.
`vercel.json` carries the cache and security headers.

Canonical URLs, Open Graph URLs and the sitemap all use `https://richmotor.com`
— the domain this is meant to serve. Set a `SITE_URL` environment variable in
the Vercel project to point them somewhere else while testing.

## Contact form

The site is fully static, so the enquiry form composes a pre-filled email to
`sales@richmotor.com` in the visitor's mail client. WhatsApp and click-to-call
are offered alongside it. To switch to a hosted form endpoint later, change the
`form[data-mailto]` handler in `src/app.js`.

## Visual QA helper

`qa.mjs` writes static snapshots of a built page shifted to a given scroll
offset, with reveal animations and lazy loading disabled — useful for
screenshotting below-the-fold sections in headless environments.

```bash
node build.mjs && node qa.mjs index 0 900 1750   # -> dist/__qa/index-*.html
```

Snapshots land in `dist/__qa/` and are wiped by the next build, so they never
ship.
