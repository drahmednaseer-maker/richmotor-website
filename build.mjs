import { readFile, writeFile, mkdir, rm, cp, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { layout } from './src/layout.mjs';
import { site } from './src/site.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(root, 'dist');

/* ---- tiny CSS minifier (safe subset) ---- */
function minifyCss(css) {
  // Conservative on purpose: strip comments and collapse whitespace, then tidy
  // ONLY around block/statement delimiters. Whitespace after `)` is significant
  // in shorthands like `background: var(--g) center / 11px no-repeat`, and
  // around `+`/`-` inside calc()/clamp(), so none of that is touched.
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

/* ---- tiny JS minifier (comments + indentation only — safe) ---- */
function minifyJs(js) {
  return js
    .split('\n')
    .map((l) => l.replace(/^\s+/, ''))
    .filter((l) => l && !/^\/\*/.test(l) && !/^\*/.test(l) && !/^\/\//.test(l))
    .join('\n')
    .replace(/\/\*[\s\S]*?\*\//g, '');
}

async function main() {
  const t0 = Date.now();
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const css = minifyCss(await readFile(path.join(root, 'src/styles.css'), 'utf8'));
  const js = minifyJs(await readFile(path.join(root, 'src/app.js'), 'utf8'));

  /* static assets */
  await cp(path.join(root, 'public'), OUT, { recursive: true });
  await writeFile(path.join(OUT, 'app.js'), js);

  /* pages */
  const files = (await readdir(path.join(root, 'src/pages'))).filter((f) => f.endsWith('.mjs')).sort();
  const built = [];

  for (const file of files) {
    const mod = await import(path.join(root, 'src/pages', file));
    const { meta, body, schema = [] } = mod;
    if (!meta || !meta.path) throw new Error(`Missing meta in ${file}`);

    const html = layout({
      path: meta.path,
      title: meta.title,
      description: meta.description,
      body,
      css,
      preload: meta.preload || [],
      schema
    });

    const dir = meta.path === '/' ? OUT : path.join(OUT, meta.path);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, 'index.html'), html);
    built.push({ path: meta.path, bytes: Buffer.byteLength(html), priority: meta.priority ?? (meta.path === '/' ? 1.0 : 0.8) });
  }

  /* sitemap + robots */
  const today = new Date().toISOString().slice(0, 10);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...built.map((p) => `  <url><loc>${site.domain}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.priority.toFixed(1)}</priority></url>`),
    '</urlset>'
  ].join('\n');
  await writeFile(path.join(OUT, 'sitemap.xml'), sitemap);
  await writeFile(
    path.join(OUT, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`
  );

  /* report */
  const total = built.reduce((a, p) => a + p.bytes, 0);
  console.log(`\n  Built ${built.length} pages in ${Date.now() - t0}ms  ·  CSS ${(css.length / 1024).toFixed(1)}kB  ·  JS ${(js.length / 1024).toFixed(1)}kB\n`);
  for (const p of built.sort((a, b) => b.bytes - a.bytes)) {
    console.log(`   ${String((p.bytes / 1024).toFixed(1)).padStart(7)} kB   ${p.path}`);
  }
  console.log(`\n   ${(total / 1024).toFixed(1)} kB total HTML\n`);
}

main().catch((e) => { console.error(e); process.exit(1); });
