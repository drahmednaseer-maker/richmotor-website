import { icon, img, pageHero, partnersSection, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'Kubota Generator & Genset' }];

export const meta = {
  path: '/kubota-generator-and-genset/',
  title: 'Kubota Generator for Sale UAE | Reefer Genset Supplier',
  description: 'Find a Kubota generator for sale in the UAE. Rich Motor Company is your trusted dealer for Kubota diesel generators, reefer gensets and genuine spare parts.',
  priority: 0.8
};

export const schema = [
  crumbSchema('/kubota-generator-and-genset/', crumbs),
  {
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'RMC Genset powered by Kubota',
    brand: { '@type': 'Brand', name: 'RMC Genset' },
    description: 'Reefer generator and compact diesel gensets powered by genuine Kubota Japan engines with Leroy-Somer alternators.'
  }
];

const features = [
  { t: 'Valve timing control', d: 'Kubota’s steady front-gear design needs no maintenance, and delivers unmatched heavy-duty valve timing control compared with belt or chain designs.' },
  { t: 'Water-proof ignition system', d: 'State-of-the-art water-resistant connectors and a push-start system keep moisture out of start-up — improving service life and battery life.' },
  { t: 'Premium cast iron cylinder head', d: 'Alloy exhaust valves for high-temperature tolerance, seated in a full cast iron cylinder head for reliable engine life at 15–18 hours of daily running.' },
  { t: 'Engine knock protection', d: 'A knock sensor automatically corrects spark advance damage caused by detonation when throttle varies under dynamic power load.' },
  { t: 'Coil-on-plug ignition', d: 'The coil surrounds the plug rather than routing through traditional spark plug wires — increasing reliability and lowering maintenance cost.' },
  { t: 'Single-side maintenance', d: 'All service points are reachable from one side, making maintenance hassle-free and improving operational convenience and safety.' }
];

const parts = [
  { t: 'Air filters', d: 'Construction sites across Dubai, Sharjah and Abu Dhabi are dusty. Kubota specifies thicker filter paper in a larger housing for improved air suction and protection.' },
  { t: 'Oil filters', d: 'Industrial engines run long hours in severe conditions. Genuine Kubota filters offer internal corrosion protection, a larger filtration area and robust fabrication.' },
  { t: 'Maintenance tools & kits', d: 'Hydraulic testers, splitting systems, compression tester kits, digital pressure gauges (0–5000 psi/bar), oil filter cutters and valve guide kits.' }
];

export const body = `
${pageHero({
  eyebrow: 'Kubota generator and genset',
  title: 'RMC Genset powered by Kubota Japan',
  text: 'A purpose-built reefer generator engineered to provide reliable, efficient power for refrigerated containers — ensuring continuous cooling performance during transport and storage.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Enquire about Kubota gensets' }, { href: '/diesel-generators-uae/', label: 'All diesel generators' }]
})}

<section class="section">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">Reefer generator</span>
      <h2 class="h-1 mt-0">Built to hook straight onto reefer containers</h2>
      <p>The RMC Genset powered by Kubota Japan is specially designed for cold-chain logistics. Its purpose-built structural design allows the unit to be easily and securely hooked onto reefer containers, making it an ideal solution for port, yard and long-haul operations.</p>
      <p>Powered by a genuine <strong>Kubota Japan engine</strong> and equipped with a <strong>Leroy-Somer alternator</strong>, the generator delivers excellent fuel efficiency, durability and stable performance in demanding operating conditions. The engine is designed with extended service intervals of up to <strong>1,000 operating hours</strong>, reducing maintenance frequency and operational downtime.</p>
      <p>The single-side maintenance design allows easy access to all service points. Known for its reliability, efficiency and ease of operation, the RMC reefer genset ensures consistent temperature control while protecting valuable temperature-sensitive cargo.</p>
    </div>
    <div data-reveal>
      <div class="media-frame media-frame--wide">${img({ name: 'kubota-reefer', widths: [1000, 1600], w: 1600, h: 1000, alt: 'RMC reefer genset powered by a Kubota Japan engine', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
      <div class="media-frame media-frame--wide" style="margin-top:1.25rem">${img({ name: 'kubota-genset', widths: [800, 1280], w: 1280, h: 800, alt: 'Kubota powered generator set supplied by Rich Motor Company', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Salient features</span>
      <h2 class="h-1">Engineering that earns its service intervals</h2>
      <p class="lede">Kubota generators are equipped with next-generation engines and up-to-date power generation technology. The LOWBOY range is designed with the lowest possible height and SUPER MINI engines — compact, lightweight and easy to place.</p>
    </div>
    <div class="grid grid--3">
      ${features.map((f, i) => `<article class="card" data-reveal style="transition-delay:${(i % 3) * 70}ms">
        <span class="card__icon">${icon.cpu}</span><h3>${f.t}</h3><p>${f.d}</p>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split">
    <div data-reveal>
      <span class="eyebrow">Control</span>
      <h2 class="h-1">Automatic digital control panel</h2>
      <p style="margin-top:1rem">The automatic control panel gives the operator a single interface for every generator function — self-start timing after a mains disconnection, temperature, thermostat and water levels, fuel level and emergency shutdown.</p>
      <p style="margin-top:1rem">The panel is equipped with a microprocessor capable of interfacing with the engine over CAN bus, so it is fully configurable to the installation.</p>
      <ul class="ticks ticks--2" style="margin-top:1.75rem">
        <li>Self-service and self-start panel</li>
        <li>CAN bus engine interface</li>
        <li>Full operating data on one display</li>
        <li>Configurable protections and alarms</li>
      </ul>
      <a class="link-arrow" style="margin-top:1.5rem" href="/low-voltage-panels/">Low voltage &amp; synchronising panels${icon.arrow}</a>
    </div>
    <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'lv-panels', widths: [565], w: 565, h: 500, alt: 'Generator synchronising and control panel', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
  </div>
</section>

<section class="section deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Maintenance</span>
      <h2 class="h-1">Kubota performance needs Kubota parts</h2>
      <p class="lede">Kubota engine performance can only be achieved by choosing Kubota-manufactured standard parts and replacements — or the same factory equivalents — to ensure consistent performance.</p>
    </div>
    <div class="specs" data-reveal>
      ${parts.map((p) => `<div class="spec"><dt>${p.t}</dt><dd>${p.d}</dd></div>`).join('')}
    </div>
    <div class="callout" style="margin-top:2rem" data-reveal>
      <p><strong>Quality management.</strong> Kubota manufactures to CE norms and ISO 9001 quality management certification. Your generator set is subject to multiple tests and quality controls at every stage of production, and is delivered with Operation &amp; Maintenance Manuals for the diesel engine, alternator and generator set.</p>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <span class="eyebrow">Coverage</span>
      <h2 class="h-1">Kubota generator supplier &amp; distributor across the region</h2>
      <p class="lede">Rich Motors is a leading Kubota generator and genset distributor and supplier in the UAE and the Middle East.</p>
    </div>
    <div class="grid grid--4" data-reveal>
      ${['Kubota Generator UAE', 'Kubota Generator Dubai', 'Kubota Generator Sharjah', 'Kubota Generator Abu Dhabi', 'Kubota Generator Middle East', 'Kubota Generator Supplier', 'Kubota Generator Distributor', 'Genuine Kubota Spare Parts'].map((r) => `<div class="card" style="padding:1.15rem 1.35rem"><h3 style="font-size:.975rem;margin:0">${r}</h3></div>`).join('')}
    </div>
    <p class="center muted" style="margin-top:2rem">You can also review the <a class="link-arrow" href="/cummins-generator-and-genset/" style="display:inline-flex">RMC Genset powered by Cummins G-Drive${icon.arrow}</a></p>
  </div>
</section>

${partnersSection()}
${ctaBand({ title: 'Need a Kubota genset or reefer unit?', text: 'Tell us the container count, duty cycle and delivery port — we will confirm the right configuration and lead time.' })}
${contactSection()}
`;
