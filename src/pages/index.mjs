import { icon, site, img, partnersSection, contactSection } from '../layout.mjs';

export const meta = {
  path: '/',
  title: 'Generator Supplier UAE | Diesel Generators for Sale — Rich Motor Company',
  description: 'Trusted diesel generator supplier in UAE. Buy Cummins, Kubota & John Deere gensets from 3kW to 3MW with O&M services across Dubai, Sharjah & Abu Dhabi.',
  preload: ['/img/hero-1-1280w.webp']
};

export const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rich Motor Company',
    alternateName: 'RMC Genset',
    url: site.domain,
    logo: site.domain + '/img/logo.png',
    description: 'Manufacturer, supplier and operator of diesel generators and power generation systems across the UAE, Middle East and Africa.',
    email: site.email,
    telephone: site.phone1,
    foundingDate: '2007',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hamriyah Free Zone (Phase II)',
      addressLocality: 'Sharjah',
      addressCountry: 'AE'
    },
    sameAs: [site.social.facebook, site.social.linkedin, site.social.instagram]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rich Motor Company',
    url: site.domain
  }
];

const services = [
  {
    icon: icon.headset,
    title: 'Emergency call-out support',
    text: 'Round-the-clock call-out cover keeps your power systems running when you need them most — anywhere our technicians can reach.',
    href: '/aftersale-support/'
  },
  {
    icon: icon.truck,
    title: 'Guaranteed parts availability',
    text: 'A deep stock of original and Genpac spare parts backed by instant delivery, so a failed component never becomes a stopped site.',
    href: '/services/'
  },
  {
    icon: icon.shield,
    title: 'Warranty terms & conditions',
    text: 'Every unit and part carries warranty in line with the manufacturer’s terms — 2 years or 1,000 operating hours on RMC gensets.',
    href: '/aftersale-support/'
  }
];

const products = [
  {
    tag: 'Kubota',
    name: 'RMC Genset powered by Kubota',
    text: 'Reefer gensets and compact diesel sets built on genuine Kubota Japan engines with Leroy-Somer alternators.',
    img: 'genset-kubota', widths: [700, 1200], w: 1200, h: 675,
    href: '/kubota-generator-and-genset/'
  },
  {
    tag: 'John Deere',
    name: 'RMC Genset powered by John Deere',
    text: 'Heavy-duty prime power for construction and industry, engineered for 15–20 hour duty cycles in Gulf conditions.',
    img: 'genset-johndeere', widths: [700, 1200], w: 1200, h: 898,
    href: '/john-deere-generator-and-genset/'
  },
  {
    tag: 'Cummins G-Drive',
    name: 'RMC Genset powered by Cummins G-Drive',
    text: 'Our widest capacity range with self-start digital control panels, supplied and serviced right across the region.',
    img: 'genset-cummins', widths: [700, 1200], w: 1200, h: 900,
    href: '/cummins-generator-and-genset/'
  },
  {
    tag: 'Lighting',
    name: 'Mobile lighting towers',
    text: '30 ft masts, 360° rotation and four 1000 W metal-halide lamps — for construction, road assistance and events.',
    img: 'lighting-tower', widths: [500, 777], w: 777, h: 1600,
    href: '/mobile-lighting-towers/'
  },
  {
    tag: 'Controls',
    name: 'Low voltage & synchronising panels',
    text: 'ATS, MDB, load-sharing and PLC-based control panels designed to meet the exact demands of your power system.',
    img: 'lv-panels', widths: [565], w: 565, h: 500,
    href: '/low-voltage-panels/'
  },
  {
    tag: 'Acoustics',
    name: 'Soundproof canopies',
    text: 'Silent, super-silent and ultra-silent canopies manufactured in-house — down to 65 dB(A) for noise-sensitive sites.',
    img: 'silent-canopy', widths: [700, 1072], w: 1072, h: 599,
    href: '/sound-proof-canopy-uae/'
  }
];

const marqueeItems = [
  'Diesel Generators', 'Power Solutions', 'O&amp;M Services', 'Lighting Towers',
  'Low Voltage Panels', 'DCC Generators', 'Prime Power', 'Emergency Backup'
];

const marqueeGroup = `<div class="marquee__group">${marqueeItems.map((t) => `<span>${t}</span>`).join('')}</div>`;

export const body = `
<section class="hero">
  <div class="hero__bg" aria-hidden="true">
    ${img({ name: 'hero-1', widths: [800, 1280, 1500], w: 1500, h: 1000, alt: '', loading: 'eager', fetchpriority: 'high', sizes: '100vw', cls: 'is-active' })}
    ${img({ name: 'hero-2', widths: [800, 1280, 1500], w: 1500, h: 992, alt: '', sizes: '100vw' })}
  </div>
  <div class="container hero__in">
    <span class="hero__badge"><b>SINCE 2007</b> UAE manufacturer &middot; 50+ countries served</span>
    <h1>Powering the future with <em>reliable energy</em></h1>
    <p>Rich Motor Company designs, builds, installs and services diesel generators and O&amp;M solutions from 3&nbsp;kW to 3&nbsp;MW — across the UAE, the Middle East and Africa.</p>
    <div class="btn-row">
      <a class="btn btn--primary" href="/contact-us/">Request a quote${icon.arrow}</a>
      <a class="btn btn--glass" href="/profile/">Company profile</a>
    </div>
    <div class="hero__stats">
      <div class="hero__stat"><b>3 kW&ndash;3 MW</b><span>Capacity range</span></div>
      <div class="hero__stat"><b>20,000 m&sup2;</b><span>Manufacturing facility</span></div>
      <div class="hero__stat"><b>50+</b><span>Countries served</span></div>
      <div class="hero__stat"><b>24/7</b><span>Call-out support</span></div>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true"><div class="marquee__track">${marqueeGroup}${marqueeGroup}</div></div>

<section class="section deferred">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <span class="eyebrow">What we offer</span>
      <h2 class="h-1">Comprehensive power services</h2>
      <p class="lede">From installation to after-sale support, we deliver end-to-end power solutions tailored to your industrial needs.</p>
    </div>
    <div class="grid grid--3">
      ${services.map((s, i) => `<article class="card" data-reveal style="transition-delay:${i * 80}ms">
        <span class="card__icon">${s.icon}</span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <a class="link-arrow" href="${s.href}">Explore service${icon.arrow}</a>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container split">
    <div data-reveal>
      <span class="eyebrow">Who we are</span>
      <h2 class="h-1">Power providers since 2007</h2>
      <p class="lede" style="margin-top:1rem">Rich Motor Company (RMC) is a trusted provider of gensets, diesel generator power solutions and operation &amp; maintenance services across the UAE, the Middle East and Africa.</p>
      <p style="margin-top:1rem;color:var(--slate)">We operate one of the largest modern canopy manufacturing facilities in the UAE — 20,000 square metres — producing under strict international quality control standards. Our engineers design, build, install and service power solutions with capacities of up to 2 megawatts, and our technicians work globally, however remote the site.</p>
      <ul class="ticks ticks--2" style="margin-top:1.75rem">
        <li>In-house genset assembly &amp; canopy manufacturing</li>
        <li>Full load testing at 110% of rated capacity</li>
        <li>Prime, standby, DCC and Zone 2 configurations</li>
        <li>Installed in 50+ countries worldwide</li>
      </ul>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--dark" href="/profile/">About RMC${icon.arrow}</a>
        <a class="btn btn--ghost" href="/projects/">See our projects</a>
      </div>
    </div>
    <div class="media-frame media-frame--wide" data-reveal>
      ${img({ name: 'facility', widths: [900, 1374], w: 1374, h: 529, alt: 'Aerial view of the Rich Motor Company manufacturing facility in Hamriyah Free Zone, Sharjah', sizes: '(max-width: 860px) 100vw, 50vw' })}
      <div class="badge-float"><i>${icon.factory}</i><span><b>20,000 m&sup2;</b><span>Sharjah, UAE facility</span></span></div>
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Our products</span>
      <h2 class="h-1">Industrial power equipment</h2>
      <p class="lede">RMC ships and installs emergency diesel generators and prime power solutions in the UAE, Saudi Arabia, Iraq, Eritrea, Sierra Leone, Burundi, Sudan, Chad, Tanzania and over 50 other countries.</p>
    </div>
    <div class="grid grid--3">
      ${products.map((p, i) => `<a class="pcard" href="${p.href}" data-reveal style="transition-delay:${(i % 3) * 80}ms">
        <div class="pcard__media">
          <span class="pcard__tag">${p.tag}</span>
          ${img({ name: p.img, widths: p.widths, w: p.w, h: p.h, alt: p.name, sizes: '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw' })}
        </div>
        <div class="pcard__body">
          <h3>${p.name}</h3>
          <p>${p.text}</p>
          <span class="link-arrow">View product${icon.arrow}</span>
        </div>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split split--reverse">
    <div class="media-frame media-frame--tall" data-reveal style="max-width:460px;margin-inline:auto">
      ${img({ name: 'products-hero', widths: [496], w: 496, h: 578, alt: '1000 kVA RMC containerised diesel generator set with Leroy-Somer alternator and Cummins G-Drive engine', sizes: '(max-width: 860px) 90vw, 440px' })}
    </div>
    <div data-reveal>
      <span class="eyebrow">Diesel generators</span>
      <h2 class="h-1">Engineered for maximum efficiency and durability</h2>
      <p style="margin-top:1rem">RMC supplies high-performance diesel generator sets across the UAE and MENA region, powered by globally trusted Kubota, John Deere and Cummins G-Drive engines. Our gensets deliver reliable, fuel-efficient and environmentally responsible power for industrial, commercial and emergency applications — even in harsh environmental conditions.</p>
      <p style="margin-top:1rem">All major components are individually tested before assembly. Every completed generator set then undergoes full load testing at up to 110% of rated capacity, guaranteeing operational safety and readiness before delivery. We also build for specialised and regulated applications, including Zone 2 hazardous area generators and DCC-compliant systems for oil &amp; gas, utilities and critical infrastructure.</p>
      <div class="stats" style="margin-top:2.25rem">
        <div class="stat"><b><span data-count="19">19</span>+</b><span>Years experience</span></div>
        <div class="stat"><b><span data-count="50">50</span>+</b><span>Countries served</span></div>
        <div class="stat"><b><span data-count="110">110</span>%</b><span>Load tested</span></div>
        <div class="stat"><b>24/7</b><span>Support available</span></div>
      </div>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/diesel-generators-uae/">Explore diesel generators${icon.arrow}</a>
        <a class="btn btn--glass" href="/amperage-chart/">kVA / amperage chart</a>
      </div>
    </div>
  </div>
</section>

${partnersSection()}
${contactSection()}
`;
