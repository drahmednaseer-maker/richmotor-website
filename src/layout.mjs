import { site, nav, partners } from './site.mjs';
import { icon } from './icons.mjs';

/* ---------- image helpers ---------- */
export function img({ name, widths, alt = '', w, h, sizes = '100vw', loading = 'lazy', cls = '', fetchpriority }) {
  const list = [].concat(widths);
  const largest = list[list.length - 1];
  const srcset = list.map((x) => `/img/${name}-${x}w.webp ${x}w`).join(', ');
  return `<img src="/img/${name}-${largest}w.webp"${list.length > 1 ? ` srcset="${srcset}" sizes="${sizes}"` : ''} alt="${esc(alt)}" width="${w}" height="${h}" loading="${loading}"${loading === 'eager' ? '' : ' decoding="async"'}${fetchpriority ? ` fetchpriority="${fetchpriority}"` : ''}${cls ? ` class="${cls}"` : ''}>`;
}

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- nav ---------- */
const isCurrent = (href, path) => (href === path ? ' aria-current="page"' : '');

function desktopNav(path) {
  return nav.map((item) => {
    if (!item.children) {
      return `<li class="nav__item"><a class="nav__link" href="${item.href}"${isCurrent(item.href, path)}>${item.label}</a></li>`;
    }
    const active = item.children.some((c) => c.href === path);
    return `<li class="nav__item">
      <a class="nav__link" href="${item.children[0].href}"${active ? ' aria-current="true"' : ''}>${item.label}${icon.chevron}</a>
      <ul class="dropdown">${item.children.map((c) => `<li><a href="${c.href}"${isCurrent(c.href, path)}>${c.label}</a></li>`).join('')}</ul>
    </li>`;
  }).join('');
}

function drawerNav(path) {
  return nav.map((item, i) => {
    if (!item.children) {
      return `<li><a class="drawer__link" href="${item.href}"${isCurrent(item.href, path)}>${item.label}</a></li>`;
    }
    const id = `dsub-${i}`;
    const open = item.children.some((c) => c.href === path);
    return `<li>
      <button class="drawer__toggle" aria-expanded="${open}" aria-controls="${id}">${item.label}${icon.chevron}</button>
      <ul class="drawer__sub${open ? ' is-open' : ''}" id="${id}">${item.children.map((c) => `<li><a href="${c.href}"${isCurrent(c.href, path)}>${c.label}</a></li>`).join('')}</ul>
    </li>`;
  }).join('');
}

/* ---------- header ---------- */
function header(path) {
  return `<div class="topbar">
  <div class="container topbar__in">
    <div class="topbar__group">
      <a href="${site.phone1Href}">${icon.phone}<span>${site.phone1}</span></a>
      <a href="mailto:${site.email}">${icon.mail}<span>${site.email}</span></a>
    </div>
    <div class="topbar__group">
      <span style="display:inline-flex;align-items:center;gap:.4rem">${icon.pin}${site.addressShort}</span>
      <div class="topbar__socials">
        <a href="${site.social.linkedin}" target="_blank" rel="noopener" aria-label="RMC on LinkedIn">${icon.linkedin}</a>
        <a href="${site.social.facebook}" target="_blank" rel="noopener" aria-label="RMC on Facebook">${icon.facebook}</a>
        <a href="${site.social.instagram}" target="_blank" rel="noopener" aria-label="RMC on Instagram">${icon.instagram}</a>
      </div>
    </div>
  </div>
</div>
<header class="site-header">
  <nav class="container nav" aria-label="Main">
    <a class="brand" href="/" aria-label="Rich Motor Company — home">
      <img src="/img/logo.webp" alt="Rich Motor Company" width="152" height="59" fetchpriority="high">
    </a>
    <ul class="nav__menu">${desktopNav(path)}</ul>
    <div class="nav__cta">
      <a class="btn btn--primary btn--sm" href="/contact-us/">Speak with Us${icon.arrow}</a>
      <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><span></span></button>
    </div>
  </nav>
</header>
<div class="drawer" id="drawer">
  <div class="container">
    <ul class="drawer__list">${drawerNav(path)}</ul>
    <div class="drawer__foot">
      <a class="btn btn--primary btn--block" href="/contact-us/">Speak with Us${icon.arrow}</a>
      <a class="btn btn--ghost btn--block" href="${site.whatsapp}" target="_blank" rel="noopener">${icon.whatsapp}WhatsApp</a>
    </div>
    <div class="drawer__contact">
      <a href="${site.phone1Href}">${icon.phone}${site.phone1}</a>
      <a href="${site.phone2Href}">${icon.phone}${site.phone2}</a>
      <a href="mailto:${site.email}">${icon.mail}${site.email}</a>
    </div>
  </div>
</div>`;
}

/* ---------- shared sections ---------- */
export function partnersSection(dark = false) {
  return `<section class="section section--tight ${dark ? 'section--dark' : 'section--mist'} deferred">
  <div class="container">
    <div class="section-head section-head--center" style="margin-bottom:2.25rem" data-reveal>
      <span class="eyebrow">Our partners</span>
      <h2 class="h-2">Built on world-class engine &amp; control platforms</h2>
    </div>
    <div class="partners" data-reveal>
      ${partners.map((p) => `<div class="partner"><img src="/img/${p.img}.webp" alt="${p.name}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async"></div>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

export function contactSection() {
  return `<section class="section section--dark deferred" id="contact">
  <div class="container">
    <div class="contact-grid">
      <div data-reveal>
        <span class="eyebrow">Get in touch</span>
        <h2 class="h-1">Tell us about your power requirement</h2>
        <p class="lede" style="margin-top:1rem">Whether you are specifying a new genset, planning an O&amp;M contract or need parts fast — our engineers will come back to you with a clear, costed answer.</p>
        <ul class="contact-list" style="margin-top:2rem">
          <li><a href="${site.phone1Href}"><i>${icon.phone}</i><span><b>Office</b><span>${site.phone1}</span></span></a></li>
          <li><a href="${site.phone2Href}"><i>${icon.phone}</i><span><b>Mobile / WhatsApp</b><span>${site.phone2}</span></span></a></li>
          <li><a href="mailto:${site.email}"><i>${icon.mail}</i><span><b>Email</b><span>${site.email}</span></span></a></li>
          <li><div><i>${icon.pin}</i><span><b>Head office &amp; factory</b><span>${site.address}</span></span></div></li>
        </ul>
      </div>
      <div data-reveal>
        <form class="form" data-mailto="${site.email}" novalidate>
          <div class="form__row">
            <div class="field"><label for="f-first">First name</label><input id="f-first" name="first" type="text" autocomplete="given-name" placeholder="Ahmed" required></div>
            <div class="field"><label for="f-last">Last name</label><input id="f-last" name="last" type="text" autocomplete="family-name" placeholder="Al Mansoori"></div>
          </div>
          <div class="form__row">
            <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required></div>
            <div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="+971 50 000 0000"></div>
          </div>
          <div class="field">
            <label for="f-subject">What do you need?</label>
            <select id="f-subject" name="subject">
              <option value="Diesel generator enquiry">Diesel generator enquiry</option>
              <option value="Soundproof canopy">Soundproof canopy</option>
              <option value="Low voltage / synchronising panels">Low voltage / synchronising panels</option>
              <option value="Mobile lighting tower">Mobile lighting tower</option>
              <option value="Spare parts (Genpac)">Spare parts (Genpac)</option>
              <option value="Service, maintenance &amp; O&amp;M">Service, maintenance &amp; O&amp;M</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="field"><label for="f-message">Message</label><textarea id="f-message" name="message" placeholder="Capacity required (kVA), application, site location, timeline…"></textarea></div>
          <button class="btn btn--primary btn--block" type="submit">Send message${icon.arrow}</button>
          <p class="form__note form__status">Your message opens in your email app addressed to ${site.email}. Prefer instant? <a href="${site.whatsapp}" target="_blank" rel="noopener" style="color:var(--cyan)">Message us on WhatsApp</a>.</p>
        </form>
      </div>
    </div>
  </div>
</section>`;
}

export function ctaBand({ title = 'Ready to specify the right genset?', text = 'Send us your load list or single-line diagram — our engineers will size, quote and schedule delivery.', primary = { href: '/contact-us/', label: 'Request a quote' }, secondary = { href: site.whatsapp, label: 'WhatsApp us' } } = {}) {
  return `<section class="section deferred"><div class="container">
  <div class="cta-band" data-reveal>
    <div class="cta-band__in">
      <div><h2>${title}</h2><p>${text}</p></div>
      <div class="btn-row">
        <a class="btn btn--primary" href="${primary.href}">${primary.label}${icon.arrow}</a>
        <a class="btn btn--glass" href="${secondary.href}"${secondary.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${secondary.label}</a>
      </div>
    </div>
  </div>
</div></section>`;
}

/* ---------- footer ---------- */
function footer() {
  const products = nav.find((n) => n.label === 'Products').children;
  const tools = nav.find((n) => n.label === 'Tools').children;
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/img/logo.webp" alt="Rich Motor Company" width="168" height="65" loading="lazy" decoding="async">
        <p>Rich Motor Company (RMC) manufactures, supplies and operates diesel generators powered by Kubota, John Deere and Cummins G-Drive engines — with O&amp;M services across the UAE, the Middle East and Africa.</p>
        <div class="socials">
          <a href="${site.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon.linkedin}</a>
          <a href="${site.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon.facebook}</a>
          <a href="${site.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon.instagram}</a>
          <a href="${site.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon.whatsapp}</a>
        </div>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/profile/">Profile</a></li>
          <li><a href="/services/">Services</a></li>
          <li><a href="/projects/">Projects</a></li>
          <li><a href="/aftersale-support/">Aftersale Support</a></li>
          <li><a href="/contact-us/">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4>Products</h4>
        <ul>${products.slice(0, 6).map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>${tools.map((t) => `<li><a href="${t.href}">${t.label}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="${site.phone1Href}">${site.phone1}</a></li>
          <li><a href="${site.phone2Href}">${site.phone2}</a></li>
          <li><a href="mailto:${site.email}">${site.email}</a></li>
          <li style="margin-top:.35rem;line-height:1.6">${site.address}</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span data-year>2026</span> Rich Motor Company (FZE). All rights reserved.</span>
      <span>Gensets · Canopies · LV Panels · Lighting Towers · O&amp;M</span>
    </div>
  </div>
</footer>
<div class="actionbar">
  <a href="${site.phone2Href}">${icon.phone}<span>Call</span></a>
  <a href="${site.whatsapp}" class="is-accent" target="_blank" rel="noopener">${icon.whatsapp}<span>WhatsApp</span></a>
  <a href="mailto:${site.email}">${icon.mail}<span>Email</span></a>
</div>
<a class="wa-float" href="${site.whatsapp}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${icon.whatsapp}</a>`;
}

/* ---------- page shell ---------- */
export function layout({ path, title, description, body, css, preload = [], schema = [] }) {
  const canonical = site.domain + path;
  const preloads = preload.map((p) => `<link rel="preload" as="image" href="${p}" fetchpriority="high">`).join('\n  ');
  const jsonld = schema.length
    ? `<script type="application/ld+json">${JSON.stringify(schema.length === 1 ? schema[0] : schema)}</script>`
    : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#070b12">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Rich Motor Company">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.domain}/img/facility-1374w.webp">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.domain}/img/facility-1374w.webp">
<link rel="icon" href="/img/favicon.png" sizes="32x32">
<link rel="apple-touch-icon" href="/img/logo.png">
<link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin.woff2" crossorigin>
${preloads}
<style>${css}</style>
<script>document.documentElement.className='js'</script>
${jsonld}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script src="/app.js" defer></script>
</body>
</html>`;
}

export { icon, site, nav, partners };

/* ---------- inner page hero ---------- */
export function pageHero({ eyebrow, title, text, crumbs = [], actions = [] }) {
  const trail = [{ label: 'Home', href: '/' }, ...crumbs];
  return `<section class="pagehero">
  <div class="container pagehero__in">
    <nav class="crumbs" aria-label="Breadcrumb">
      ${trail.map((c, i) => (c.href && i < trail.length - 1
        ? `<a href="${c.href}">${c.label}</a>${icon.chevronRight}`
        : `<span aria-current="page">${c.label}</span>`)).join('')}
    </nav>
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
    <h1>${title}</h1>
    ${text ? `<p>${text}</p>` : ''}
    ${actions.length ? `<div class="btn-row">${actions.map((a, i) => `<a class="btn ${i === 0 ? 'btn--primary' : 'btn--glass'}" href="${a.href}"${a.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${a.label}${i === 0 ? icon.arrow : ''}</a>`).join('')}</div>` : ''}
  </div>
</section>`;
}

/* ---------- breadcrumb schema ---------- */
export function crumbSchema(path, crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', item: site.domain + '/' }, ...crumbs.map((c) => ({ name: c.label, item: site.domain + (c.href || path) }))]
      .map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item }))
  };
}
