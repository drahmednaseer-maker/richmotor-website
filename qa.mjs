import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
const [page, ...offs] = process.argv.slice(2);
const src = page === 'index' ? 'dist/index.html' : `dist/${page}/index.html`;
await mkdir('dist/__qa', { recursive: true });
const base = await readFile(src, 'utf8');
for (const off of offs) {
  const inject = `<style id="qa">
  html{scroll-behavior:auto!important}
  .deferred{content-visibility:visible!important}
  .js [data-reveal]{opacity:1!important;transform:none!important;transition:none!important}
  .site-header,.topbar,.actionbar,.wa-float{display:none!important}
  .hero__bg img{opacity:0}.hero__bg img:first-of-type{opacity:1!important}
  .acc-panel{grid-template-rows:1fr!important}
  body{margin-top:-${off}px!important}
</style>`;
  await writeFile(`dist/__qa/${page}-${off}.html`, base.replace('</head>', inject + '</head>').replaceAll(' loading="lazy"', ' loading="eager"'));
}
console.log('qa:', offs.map(o=>`/__qa/${page}-${o}.html`).join(' '));
