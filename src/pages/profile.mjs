import { icon, site, img, pageHero, partnersSection, ctaBand, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Profile' }];

export const meta = {
  path: '/profile/',
  title: 'Diesel Generator Supplier UAE | About Rich Motor Company',
  description: 'Rich Motor Company is a leading diesel generator supplier UAE — manufacturing, supplying and operating diesel generators and power systems region-wide.',
  priority: 0.9
};

export const schema = [crumbSchema('/profile/', crumbs)];

const capabilities = [
  { icon: icon.factory, title: 'Manufacturing', text: 'A 20,000 m² facility in Hamriyah Free Zone, Sharjah — genset assembly, canopy fabrication and LV panel build under one roof.' },
  { icon: icon.gauge, title: '3 kW to 3 MW', text: 'Generator sets across the full capacity band, configured for prime power, standby, base-load, black start and data centre duty.' },
  { icon: icon.layers, title: 'Turnkey delivery', text: 'Engineering, procurement, manufacturing, installation, commissioning and long-term maintenance handled by one team.' },
  { icon: icon.globe, title: '50+ countries', text: 'Supplied, shipped, installed and serviced from the UAE to Saudi Arabia, Iraq, Eritrea, Sierra Leone, Burundi, Sudan, Chad and Tanzania.' }
];

export const body = `
${pageHero({
  eyebrow: 'About our company',
  title: 'RMC Genset — diesel generator manufacturer &amp; power solutions provider in the UAE',
  text: 'A division of Rich Motor Company, RMC Genset is a UAE-based manufacturer, supplier and operator of diesel generators and power generation systems across the UAE, the Middle East and emerging markets worldwide.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Talk to our engineers' }, { href: '/projects/', label: 'View projects' }]
})}

<section class="section">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">Who we are</span>
      <h2 class="h-1 mt-0">Reliable, fuel-efficient and customised power — backed by professional O&amp;M</h2>
      <p>As an independent generator manufacturer in the UAE, RMC designs and builds diesel generator sets ranging from <strong>3 kW to 3 MW</strong>, serving industries that require dependable prime power, emergency backup and critical power solutions. Our generators are widely used across construction, oil &amp; gas, infrastructure, logistics, industrial facilities and remote site operations.</p>
      <p>RMC Genset provides complete <strong>turnkey power solutions</strong> — including engineering, procurement, manufacturing, installation, commissioning and long-term maintenance support. Whether the requirement is base-load power, black start systems or data centres, our team delivers solutions engineered for performance and reliability.</p>
      <p>With experienced technicians operating globally, RMC supplies, ships, installs and services diesel generators in the UAE, Saudi Arabia, Iraq, Eritrea, Sierra Leone, Burundi, Sudan, Chad, Tanzania and over 50 countries worldwide. Our ability to support projects in remote and demanding environments makes us a trusted partner for international power generation projects.</p>
      <div class="callout"><p><strong>Our commitment:</strong> high-quality diesel generators and power systems built to international standards — ensuring long-term reliability, efficiency and operational continuity.</p></div>
    </div>
    <div class="media-frame media-frame--tall" data-reveal style="max-width:460px;margin-inline:auto">
      ${img({ name: 'profile-hero', widths: [496], w: 496, h: 578, alt: 'RMC containerised diesel generator set manufactured in the UAE', sizes: '(max-width: 860px) 90vw, 440px' })}
      <div class="badge-float"><i>${icon.award}</i><span><b>Since 2007</b><span>Power providers</span></span></div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <span class="eyebrow">Capabilities</span>
      <h2 class="h-1">We build, ship, install and service diesel generators worldwide</h2>
    </div>
    <div class="grid grid--4">
      ${capabilities.map((c, i) => `<article class="card" data-reveal style="transition-delay:${i * 70}ms">
        <span class="card__icon">${c.icon}</span>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split split--reverse">
    <div class="media-frame media-frame--wide" data-reveal>
      ${img({ name: 'facility', widths: [900, 1374], w: 1374, h: 529, alt: 'Rich Motor Company factory and yard, Hamriyah Free Zone Phase II, Sharjah', sizes: '(max-width: 860px) 100vw, 50vw' })}
    </div>
    <div data-reveal>
      <span class="eyebrow">The facility</span>
      <h2 class="h-1">One of the largest modern canopy manufacturing facilities in the UAE</h2>
      <p style="margin-top:1rem">Our 20,000 m² site in Hamriyah Free Zone Phase II houses genset assembly lines, an acoustic canopy fabrication shop, an LV panel workshop and an in-house load bank — so quality is controlled from raw steel to commissioned unit.</p>
      <ul class="ticks ticks--2" style="margin-top:1.75rem">
        <li>Strict international quality control standards</li>
        <li>All major components tested before assembly</li>
        <li>Full load testing at up to 110% of rated capacity</li>
        <li>Custom canopies, containers and trailer mounting</li>
        <li>Highly skilled technicians available globally</li>
        <li>Zone 2 and DCC-compliant configurations</li>
      </ul>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/services/">Our services${icon.arrow}</a>
        <a class="btn btn--glass" href="/testing-and-inspection-process/">Testing &amp; inspection</a>
      </div>
    </div>
  </div>
</section>

${partnersSection()}
${ctaBand({ title: 'Let’s size the right solution for your site', text: 'Send us your load profile — we will come back with a specification, capacity recommendation and delivery schedule.' })}
`;
