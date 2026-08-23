import { icon, img, pageHero, partnersSection, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'Cummins Generator & Genset' }];

export const meta = {
  path: '/cummins-generator-and-genset/',
  title: 'Cummins Generator for Sale UAE | Dealer & Distributor',
  description: 'Looking for a Cummins generator for sale in the UAE? Rich Motor Company is your trusted dealer for Cummins G-Drive diesel generators and standby gensets.',
  priority: 0.8
};

export const schema = [
  crumbSchema('/cummins-generator-and-genset/', crumbs),
  {
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'RMC Genset powered by Cummins G-Drive',
    brand: { '@type': 'Brand', name: 'RMC Genset' },
    description: 'Diesel generator sets powered by Cummins G-Drive engines, supplied and serviced across the UAE and Middle East.'
  }
];

const variants = [
  ['4-pole, single &amp; three phase', 'Single phase 11.2 – 24.0 kVA<br>Three phase 14.0 – 35.0 kVA'],
  ['2-pole, single phase', 'Single phase 5.5 – 10.0 kVA'],
  ['4-pole, single &amp; three phase', 'Single phase 10.0 – 19.6 kVA<br>Three phase 10.0 – 24.0 kVA'],
  ['2-pole, single &amp; three phase', 'Single phase 5.5 – 23.5 kVA<br>Three phase 8.0 – 23.5 kVA']
];

export const body = `
${pageHero({
  eyebrow: 'RMC Genset powered by Cummins G-Drive',
  title: 'Cummins G-Drive power, built and supported in the UAE',
  text: 'We are dealers for RMC Gensets powered by Cummins G-Drive engines across the Middle East — supplying complete sets, spare parts, generator mounts and soundproof canopies.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Request Cummins pricing' }, { href: '/diesel-generators-uae/', label: 'All diesel generators' }]
})}

<section class="section">
  <div class="container">
    <div class="media-frame media-frame--wide" style="aspect-ratio:1536/400" data-reveal>
      ${img({ name: 'cummins-genset', widths: [1000, 1536], w: 1536, h: 400, alt: 'RMC genset powered by Cummins G-Drive engine', sizes: '100vw' })}
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">Overview</span>
      <h2 class="h-1 mt-0">Every operating parameter on one automatic digital panel</h2>
      <p>We provide many variants across diesel and petrol engines powered by Cummins G-Drive. Despite the machines’ physical size, we also deal in spare parts, generator mounts and soundproof canopies. Our products are manufactured by highly experienced teams of engineers.</p>
      <p>RMC generators powered by Cummins G-Drive are equipped with a <strong>self-service and self-start panel</strong>, so the genset can display every operating parameter on the automatic digital panel. Rich Motor is the largest distributor of RMC Gensets powered by Cummins G-Drive engines in the Middle East.</p>
    </div>
    <div data-reveal>
      <span class="eyebrow">Warranty &amp; support</span>
      <h2 class="h-2">Commissioned properly, maintained properly</h2>
      <p class="muted" style="margin-top:1rem">We recommend that customers read the operating manual carefully before starting the genset, and that installation is carried out by our authorised after-sales teams.</p>
      <ul class="ticks" style="margin-top:1.5rem">
        <li><strong>2 years or 1,000 operating hours</strong> guarantee, subject to the operating and maintenance manuals</li>
        <li>Periodical maintenance agreements with 24-hour maintenance cover</li>
        <li>Expected product lifetime of 10 years under correct maintenance</li>
        <li>Authorised installation and commissioning teams</li>
      </ul>
      <a class="link-arrow" style="margin-top:1.5rem" href="/aftersale-support/">Aftersale support${icon.arrow}</a>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Popular variants</span>
      <h2 class="h-1">Output ranges at a glance</h2>
      <p class="lede">Alternator configurations commonly specified on RMC gensets powered by Cummins G-Drive engines.</p>
    </div>
    <div class="specs" data-reveal>
      ${variants.map(([t, d]) => `<div class="spec"><dt>${t}</dt><dd>${d}</dd></div>`).join('')}
    </div>
    <p class="table-note" data-reveal>Larger capacities up to 3 MW are available as custom-engineered packages. <a href="/contact-us/">Ask our engineers</a> for a specification against your load schedule.</p>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split split--reverse">
    <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'gen-2', widths: [800, 1200], w: 1200, h: 800, alt: 'Cummins G-Drive powered generator set in a soundproof canopy', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    <div data-reveal>
      <span class="eyebrow">Compact design</span>
      <h2 class="h-1">Next-generation engines, up-to-date power generation</h2>
      <p style="margin-top:1rem">We work with many Cummins suppliers in the UAE and deal in top-of-the-line compact design models alongside standard models. Our sets are equipped with next-generation engines and current power generation technology.</p>
      <ul class="ticks ticks--2" style="margin-top:1.75rem">
        <li>Self-start automatic digital panel</li>
        <li>Generator mounts and anti-vibration</li>
        <li>Soundproof canopy options</li>
        <li>Full spare parts availability</li>
      </ul>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/sound-proof-canopy-uae/">Soundproof canopies${icon.arrow}</a>
        <a class="btn btn--glass" href="/services/">Service &amp; maintenance</a>
      </div>
    </div>
  </div>
</section>

${partnersSection()}
${ctaBand({ title: 'Specify a Cummins G-Drive genset', text: 'Send us the kVA, phase and duty and we will confirm the variant, canopy option and delivery date.' })}
${contactSection()}
`;
