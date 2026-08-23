import { icon, img, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'Mobile Lighting Towers' }];

export const meta = {
  path: '/mobile-lighting-towers/',
  title: 'Mobile Lighting Tower UAE | For Sale & Rent',
  description: 'Mobile lighting towers from Rich Motor Company UAE — 30 ft masts, 360° rotation and 4×1000 W metal halide lamps for construction, events and roadside power.',
  priority: 0.8
};

export const schema = [
  crumbSchema('/mobile-lighting-towers/', crumbs),
  {
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'Lightning Pro II Mobile Lighting Tower',
    brand: { '@type': 'Brand', name: 'RMC Genset' },
    description: 'Trailer-mounted mobile lighting tower with a 30 ft three-section mast, four 1000 W metal halide lamps and a liquid-cooled diesel generator.'
  }
];

const specs = [
  { t: 'Power unit', d: 'RMC or Lister Petter 9–20 kVA, 1500 rpm liquid-cooled diesel, 12-volt electric start.' },
  { t: 'Trailer frame', d: 'Formed, welded steel heavy-duty enclosure with impact-resistant, rust-proof moulded poly lift doors for full-service access. Rotationally moulded dent- and rust-resistant fenders. Adjustable height, reversible combination 1″ ball / 3″ pintle towing hitch. Forklift pockets standard.' },
  { t: 'Stabilisers', d: 'Four-point outrigger design with the tower centre-mounted between two retractable side outriggers, plus rear jack and tongue jack. Remains operational in wind gusts up to 65 mph (104.59 kph).' },
  { t: 'Electrical', d: 'Leroy-Somer or Linz 7.5–20 kVA alternator, 50 Hz, single phase. Hard-wired electrical circuits. Easily serviceable, removable plug-in ballast assemblies. 220 volt, 20 amp duplex convenience outlet.' },
  { t: 'Lighting', d: 'Four 1000 watt metal halide SHO-HD lamps — a 5000 watt lighting system as standard, at 120,000 lumens per fixture.' },
  { t: 'Tower', d: 'Heavy-duty three-section tower assembly with self-lubricating nylon rollers, 360° rotatable from the ground.' },
  { t: 'Mast', d: 'Height when mast raised: 30 ft (9.1 m). Wheels and tyres: 13″.' }
];

export const body = `
${pageHero({
  eyebrow: 'Mobile lighting tower',
  title: 'Lightning Pro II — lighting the places nothing else reaches',
  text: 'For construction, road assistance and even recreational use, our top-of-the-line Lightning Pro tower lights never fail to amaze.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Enquire about lighting towers' }, { href: '/docs/tower-light-brochure.pdf', label: 'Download brochure' }]
})}

<section class="section">
  <div class="container split">
    <div data-reveal>
      <span class="eyebrow">Lightning Pro II</span>
      <h2 class="h-1">120,000 lumens per fixture, 30 feet in the air</h2>
      <p class="lede" style="margin-top:1rem">A trailer-mounted, self-powered lighting tower built to be towed onto site, levelled on four-point outriggers and raised in minutes — then rotated 360° from the ground to put light exactly where the work is.</p>
      <ul class="ticks ticks--2" style="margin-top:1.75rem">
        <li>4 × 1000 W metal halide lamps</li>
        <li>30 ft (9.1 m) three-section mast</li>
        <li>360° ground-level rotation</li>
        <li>Operational in gusts to 65 mph</li>
        <li>9–20 kVA liquid-cooled diesel</li>
        <li>Forklift pockets as standard</li>
      </ul>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/docs/tower-light-brochure.pdf" target="_blank" rel="noopener">${icon.download}Download tower light brochure</a>
        <a class="btn btn--ghost" href="/contact-us/">Request a price</a>
      </div>
    </div>
    <div class="media-frame media-frame--tall" data-reveal>
      ${img({ name: 'tower-lighting', widths: [800, 1200], w: 1200, h: 1087, alt: 'RMC Lightning Pro II mobile lighting tower illuminating a site at night', sizes: '(max-width: 860px) 100vw, 50vw' })}
      <div class="badge-float"><i>${icon.lightbulb}</i><span><b>120,000 lm</b><span>per fixture</span></span></div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Technical specification</span>
      <h2 class="h-1">Every detail, on the record</h2>
    </div>
    <div class="specs" data-reveal>
      ${specs.map((s) => `<div class="spec"><dt>${s.t}</dt><dd>${s.d}</dd></div>`).join('')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container">
    <div class="grid grid--2">
      <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'tower-trailer', widths: [800, 1200], w: 1200, h: 1600, alt: 'Welded steel trailer frame of the RMC mobile lighting tower', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
      <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'tower-light', widths: [597], w: 597, h: 585, alt: 'Four-lamp metal halide head on the RMC lighting tower', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Lighting towers for sale or hire', text: 'Tell us the site, the duration and the number of units — we will confirm availability and delivery across the UAE.' })}
${contactSection()}
`;
