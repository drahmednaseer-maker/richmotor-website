import { icon, img, pageHero, partnersSection, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'John Deere Generator & Genset' }];

export const meta = {
  path: '/john-deere-generator-and-genset/',
  title: 'John Deere Generator UAE | Diesel Genset Supplier',
  description: 'Buy a John Deere generator in the UAE from Rich Motor Company. Reliable John Deere diesel gensets with full installation, service and spare parts support.',
  priority: 0.8
};

export const schema = [
  crumbSchema('/john-deere-generator-and-genset/', crumbs),
  {
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'RMC Genset powered by John Deere',
    brand: { '@type': 'Brand', name: 'RMC Genset' },
    description: 'Heavy-duty diesel generator sets powered by John Deere industrial engines for prime and standby power across the UAE and Middle East.'
  }
];

const variants = [
  ['4-pole, single &amp; three phase', 'Single phase 11.2 – 24.0 kVA<br>Three phase 14.0 – 35.0 kVA'],
  ['2-pole, single phase', 'Single phase 5.5 – 10.0 kVA'],
  ['4-pole, single &amp; three phase', 'Single phase 10.0 – 19.6 kVA<br>Three phase 10.0 – 24.0 kVA'],
  ['2-pole, single &amp; three phase', 'Single phase 5.5 – 23.5 kVA<br>Three phase 8.0 – 23.5 kVA']
];

const features = [
  { t: 'Valve timing control', d: 'A steady front-gear standard that needs no maintenance and delivers unmatched heavy-duty valve timing control over belt or chain designs.' },
  { t: 'Water-proof ignition system', d: 'Water-resistant connectors and a push-start system stop moisture from disturbing start-up, improving service life and battery life.' },
  { t: 'Premium cast iron cylinder head', d: 'High-temperature-tolerant alloy exhaust valves seated in a full cast iron head — built for 15–18 hours of daily running.' },
  { t: 'Engine knock protection', d: 'A knock sensor automatically corrects spark advance damage caused by detonation when throttle varies under dynamic load.' },
  { t: 'Coil-on-plug ignition', d: 'Current flows through a coil surrounding the plug rather than traditional spark plug wires, increasing reliability and lowering maintenance costs.' },
  { t: 'LOWBOY compact range', d: 'Designed with the lowest possible height and a SUPER MINI engine — lightweight and requiring less space for operation.' }
];

export const body = `
${pageHero({
  eyebrow: 'John Deere generator and genset',
  title: 'John Deere generator UAE — power that stays on',
  text: 'John Deere is a leading generator brand across the UAE, Dubai, Sharjah, Abu Dhabi and the wider Middle East. Rich Motors supplies complete gensets, spare parts, generator mounts and soundproof canopies.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Enquire about John Deere' }, { href: '/diesel-generators-uae/', label: 'All diesel generators' }]
})}

<section class="section">
  <div class="container">
    <div class="media-frame media-frame--wide" style="aspect-ratio:2048/521" data-reveal>
      ${img({ name: 'johndeere-1', widths: [1000, 1600], w: 1600, h: 407, alt: 'John Deere powered generator sets supplied by Rich Motor Company', sizes: '100vw' })}
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">Overview</span>
      <h2 class="h-1 mt-0">The highest-selling item in the heavy generator category</h2>
      <p>John Deere diesel generators and gensets are engineered for high-end power generation in the field. Power generation units are designed for diesel fuel because of their heavy load and optimum <strong>15–20 hour running capacity</strong>.</p>
      <p>We deal in all variants designed to take a heavy load, used extensively in the construction industry where uninterrupted power is required. Despite the physical size of the machine, we also supply spare parts, generator mounts and soundproof canopies — all built by experienced teams of engineers.</p>
      <p>John Deere is not only an engine manufacturer; it is one of the top engine manufacturers in the world, built with a promise of excellent reliability and service life.</p>
    </div>
    <div data-reveal>
      <div class="media-frame media-frame--wide">${img({ name: 'johndeere-2', widths: [764], w: 764, h: 358, alt: 'John Deere industrial diesel engine', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
      <div class="media-frame media-frame--wide" style="margin-top:1.25rem">${img({ name: 'johndeere-3', widths: [450], w: 450, h: 300, alt: 'John Deere generator set control detail', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Popular variants</span>
      <h2 class="h-1">Output ranges at a glance</h2>
    </div>
    <div class="specs" data-reveal>
      ${variants.map(([t, d]) => `<div class="spec"><dt>${t}</dt><dd>${d}</dd></div>`).join('')}
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Salient features</span>
      <h2 class="h-1">Built for heavy, continuous duty</h2>
    </div>
    <div class="grid grid--3">
      ${features.map((f, i) => `<article class="card" data-reveal style="transition-delay:${(i % 3) * 70}ms">
        <span class="card__icon">${icon.wrench}</span><h3>${f.t}</h3><p>${f.d}</p>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split">
    <div data-reveal>
      <span class="eyebrow">Control panel</span>
      <h2 class="h-1">Every operation, one interface</h2>
      <p style="margin-top:1rem">The automatic control panel handles self-start timing after a mains disconnection, temperature, thermostat and water levels, fuel level and emergency shutdown. Its microprocessor interfaces with the engine over CAN bus, so the panel is fully configurable to the installation.</p>
      <h3 class="h-3" style="margin-top:2rem">Maintenance essentials</h3>
      <ul class="ticks ticks--2" style="margin-top:1rem">
        <li>Thicker, larger air filters for dusty Gulf sites</li>
        <li>Oil filters with internal corrosion protection</li>
        <li>Larger filtration area and compact design</li>
        <li>Robust fabrication designed for John Deere engines</li>
        <li>Compression tester kits and digital pressure gauges</li>
        <li>Splitting systems, jacks and valve guide kits</li>
      </ul>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/services/">Spare parts &amp; service${icon.arrow}</a>
        <a class="btn btn--glass" href="/kubota-generator-and-genset/">Kubota range</a>
      </div>
    </div>
    <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'gen-1', widths: [800, 1200], w: 1200, h: 800, alt: 'John Deere powered generator set installed on site', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
  </div>
</section>

${partnersSection()}
${ctaBand({ title: 'Need John Deere power on site?', text: 'Send your load list and running hours — we will size the set, quote the canopy and confirm parts availability.' })}
${contactSection()}
`;
