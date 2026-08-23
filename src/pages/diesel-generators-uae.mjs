import { icon, img, pageHero, partnersSection, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'Diesel Generators UAE' }];

export const meta = {
  path: '/diesel-generators-uae/',
  title: 'Diesel Generator for Sale UAE | Prime & Standby Power',
  description: 'Buy diesel generators UAE from Rich Motor Company. Prime, standby and mobile generator sets delivering clean, dependable power in the harshest conditions.',
  priority: 0.9
};

export const schema = [
  crumbSchema('/diesel-generators-uae/', crumbs),
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'RMC Diesel Generator Sets',
    brand: { '@type': 'Brand', name: 'RMC Genset' },
    description: 'Prime and standby diesel generator sets from 3 kW to 3 MW, powered by Kubota, John Deere and Cummins G-Drive engines.',
    category: 'Diesel generators'
  }
];

const pillars = [
  { icon: icon.gauge, title: 'Tested to 110% of rated load', text: 'All major components are tested individually. Once assembled, the entire unit is tested at 110% of rated load for safety and operation.' },
  { icon: icon.layers, title: 'Ready-to-run packages', text: 'Complete packages arrive commissioned and configurable, with optional equipment specified around your application.' },
  { icon: icon.headset, title: 'Support for the life of the set', text: 'Prompt delivery, installation and ongoing technical support from RMC dealers throughout the life of the generator set.' },
  { icon: icon.bolt, title: 'Prime or standby duty', text: 'Dependable, clean, economic power — configured for continuous prime duty or as emergency standby backup.' }
];

const applications = [
  ['Construction sites', 'Prime power where no grid exists, sized for tower cranes, batching plants and site accommodation.'],
  ['Oil &amp; gas', 'Zone 2 hazardous area generators and DCC-compliant systems for regulated environments.'],
  ['Data centres', 'Black start and standby configurations with synchronising panels and automatic transfer.'],
  ['Infrastructure &amp; utilities', 'Base-load and back-up sets for water, power and transport infrastructure.'],
  ['Logistics &amp; cold chain', 'Reefer gensets and containerised power for ports, yards and distribution hubs.'],
  ['Commercial buildings', 'Emergency backup for towers, malls, hotels and hospitals with load-sharing panels.']
];

export const body = `
${pageHero({
  eyebrow: 'Diesel generators UAE',
  title: 'Never be left in the dark',
  text: 'Prime power or standby, RMC diesel generator sets deliver dependable, clean, economic power — even in the harshest conditions — and are available in a wide range of configurations with optional equipment.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Request a quotation' }, { href: '/amperage-chart/', label: 'kVA / amperage chart' }]
})}

<section class="section">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">Engineered for performance</span>
      <h2 class="h-1 mt-0">Designed, engineered and manufactured for optimal performance</h2>
      <p>RMC generator sets are designed, engineered and manufactured for optimal performance. All major components are tested individually; once assembled, the entire unit is tested at <strong>110% of the rated load</strong> for safety and operation.</p>
      <p>These complete, ready-to-run packages carry another distinct advantage: they all come with the comprehensive service and support of RMC dealers — beginning with prompt delivery and continuing throughout the life of the generator set.</p>
      <p>RMC is positioned as a <strong>value brand</strong>. It gives dealers the option to offer a lower-priced, simpler, yet quality product for price-sensitive markets and applications. The main differentiator of the RMC brand is its parts and service support.</p>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--dark" href="/sizing-a-generator/">How to size a generator${icon.arrow}</a>
        <a class="btn btn--ghost" href="/voltage-configuration/">Voltage configuration</a>
      </div>
    </div>
    <div class="media-frame media-frame--wide" data-reveal>
      ${img({ name: 'diesel-hero', widths: [700, 1000], w: 1000, h: 600, alt: 'RMC diesel generator supplier in Dubai — soundproof genset on site', sizes: '(max-width: 860px) 100vw, 50vw' })}
      <div class="badge-float"><i>${icon.bolt}</i><span><b>3 kW&ndash;3 MW</b><span>Capacity range</span></span></div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <span class="eyebrow">Why RMC gensets</span>
      <h2 class="h-1">Quality you can hold to a load bank</h2>
    </div>
    <div class="grid grid--4">
      ${pillars.map((p, i) => `<article class="card" data-reveal style="transition-delay:${i * 70}ms">
        <span class="card__icon">${p.icon}</span><h3>${p.title}</h3><p>${p.text}</p>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Engine platforms</span>
      <h2 class="h-1">Choose the engine that fits the duty</h2>
      <p class="lede">Every RMC genset is built on a globally supported engine platform, paired with Leroy-Somer alternators and Deep Sea Electronics control.</p>
    </div>
    <div class="grid grid--3">
      ${[
        { n: 'Kubota', d: 'Compact, fuel-efficient sets and purpose-built reefer gensets with 1,000-hour service intervals.', h: '/kubota-generator-and-genset/', i: 'gen-1', w: 1200, hh: 800 },
        { n: 'John Deere', d: 'Heavy-duty industrial engines for high-load, long-run construction and infrastructure duty.', h: '/john-deere-generator-and-genset/', i: 'gen-2', w: 1200, hh: 800 },
        { n: 'Cummins G-Drive', d: 'Our broadest capacity range with self-service, self-start digital control panels.', h: '/cummins-generator-and-genset/', i: 'bi10', w: 1200, hh: 800 }
      ].map((e, i) => `<a class="pcard" href="${e.h}" data-reveal style="transition-delay:${i * 80}ms">
        <div class="pcard__media">${img({ name: e.i, widths: [800, e.w], w: e.w, h: e.hh, alt: `${e.n} powered RMC generator set`, sizes: '(max-width: 700px) 100vw, 33vw' })}</div>
        <div class="pcard__body"><h3>RMC Genset powered by ${e.n}</h3><p>${e.d}</p><span class="link-arrow">View range${icon.arrow}</span></div>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Applications</span>
      <h2 class="h-1">Where our gensets work</h2>
    </div>
    <div class="specs" style="background:rgba(255,255,255,.09);border-color:rgba(255,255,255,.1)" data-reveal>
      ${applications.map(([t, d]) => `<div class="spec" style="background:var(--ink-800)"><dt>${t}</dt><dd style="color:#96a5ba">${d}</dd></div>`).join('')}
    </div>
  </div>
</section>

${partnersSection()}
${ctaBand({ title: 'Get a diesel generator quotation today', text: 'Tell us the kVA, the duty and the site — we will confirm availability, price and delivery.' })}
${contactSection()}
`;
