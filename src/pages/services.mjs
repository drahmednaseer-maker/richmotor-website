import { icon, img, pageHero, partnersSection, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Services' }];

export const meta = {
  path: '/services/',
  title: 'Generator Maintenance & Repair Services UAE | RMC',
  description: 'End-to-end generator services in the UAE — genset assembly, LV & synchronising panels, soundproof canopies, Genpac spare parts, maintenance and custom power solutions.',
  priority: 0.9
};

export const schema = [crumbSchema('/services/', crumbs)];

const canopies = [
  { name: 'Silent canopies', text: 'Standard noise reduction with excellent ventilation and service accessibility — the workhorse enclosure for industrial and construction sites.', img: 'silent-canopy', w: 1072, h: 599 },
  { name: 'Super silent canopies', text: 'Enhanced acoustic insulation for environments that demand lower operational noise, such as commercial and residential areas.', img: 'super-silent', w: 1600, h: 900 },
  { name: 'Ultra silent canopies', text: 'Maximum noise reduction for sensitive locations including hospitals, hotels and dense urban installations.', img: 'ultra-silent', w: 1600, h: 747 }
];

const blocks = [
  {
    eyebrow: 'Manufacturing',
    title: 'Generator assembly &amp; manufacturing',
    text: 'RMC operates a modern generator assembly line equipped to build high-quality diesel generator sets tailored to client requirements. Every generator is assembled under strict quality control procedures to ensure reliability, safety and optimal performance.',
    items: ['Diesel generator assembly up to large capacity ranges', 'Prime and standby power solutions', 'Industrial and commercial generator packages', 'Factory testing and load testing', 'Integration with control and synchronisation systems'],
    img: 'assembly-line', widths: [1000, 1600], w: 1600, h: 573, alt: 'RMC generator assembly line in Sharjah, UAE'
  },
  {
    eyebrow: 'Electrical engineering',
    title: 'Low voltage &amp; synchronising panels',
    text: 'Our electrical engineering division designs and assembles Low Voltage (LV) panels and generator synchronising panels for efficient power management and system reliability.',
    items: ['Automatic Transfer Switch (ATS) panels', 'Main Distribution Boards (MDB)', 'Synchronising and load-sharing panels', 'PLC-based control systems', 'Generator paralleling systems', 'Custom-built control panels'],
    img: 'low-voltage-panels', widths: [800, 1280], w: 1280, h: 960, alt: 'Low voltage and synchronising panels built by RMC',
    reverse: true,
    link: { href: '/low-voltage-panels/', label: 'Low voltage panels' }
  },
  {
    eyebrow: 'Spare parts',
    title: 'Generator spare parts &amp; the Genpac brand',
    text: 'RMC supplies a complete range of generator spare parts to ensure reliability, performance and long equipment life. We provide original manufacturer spare parts as well as our own trusted brand, Genpac — developed to meet international quality standards and approved by leading engine manufacturers.',
    items: ['Original manufacturer spare parts', 'Genpac branded spare parts', 'Engine and alternator components', 'Filters, electrical components and service kits', 'Fast availability and technical support'],
    img: 'genpac-parts', widths: [600, 1000], w: 1000, h: 1163, alt: 'Genpac approved generator spare parts range'
  },
  {
    eyebrow: 'Service & maintenance',
    title: 'Keeping your power on, for the life of the asset',
    text: 'RMC provides comprehensive generator service and maintenance programmes to ensure continuous operation and extended equipment life — from scheduled servicing to emergency breakdown response.',
    items: ['Preventive maintenance contracts', 'Emergency breakdown support', 'Mechanical and electrical troubleshooting', 'Load testing and performance checks', 'Spare parts supply', 'System upgrades and retrofits'],
    img: 'our-services', widths: [800, 1280], w: 1280, h: 720, alt: 'RMC service technicians maintaining a diesel generator',
    reverse: true,
    link: { href: '/aftersale-support/', label: 'Aftersale support' }
  },
  {
    eyebrow: 'Engineering',
    title: 'Customised power solutions',
    text: 'Our engineering team works closely with clients to design customised power solutions tailored to specific operational, environmental and space constraints — including hybrid systems and project-based engineering support.',
    items: ['Custom generator configurations', 'Special canopy designs', 'Integrated synchronisation systems', 'Hybrid and specialised power solutions', 'Project-based engineering support'],
    img: 'bi10', widths: [800, 1200], w: 1200, h: 800, alt: 'Custom-engineered RMC power solution on site'
  }
];

const why = [
  'Modern assembly and manufacturing facilities in the UAE',
  'Experienced engineering and technical teams',
  'High-quality manufacturing standards',
  'Customised solutions for every project',
  'Reliable after-sales service and support',
  'Trusted supplier across the UAE and Middle East'
];

export const body = `
${pageHero({
  eyebrow: 'Services',
  title: 'Complete power solutions — engineering, manufacturing, installation &amp; support',
  text: 'At Rich Motor Company we provide end-to-end power solutions designed to meet the demands of industrial, commercial and infrastructure projects across the UAE and the Middle East.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Request a service quote' }, { href: '/aftersale-support/', label: 'Aftersale support' }]
})}

${blocks.map((b, i) => `<section class="section ${i % 2 === 1 ? 'section--mist' : ''} ${i > 0 ? 'deferred' : ''}">
  <div class="container split${b.reverse ? ' split--reverse' : ''}">
    ${b.reverse ? `<div class="media-frame media-frame--wide" data-reveal>${img({ name: b.img, widths: b.widths, w: b.w, h: b.h, alt: b.alt, sizes: '(max-width: 860px) 100vw, 50vw' })}</div>` : ''}
    <div data-reveal>
      <span class="eyebrow">${b.eyebrow}</span>
      <h2 class="h-1">${b.title}</h2>
      <p class="lede" style="margin-top:1rem">${b.text}</p>
      <ul class="ticks" style="margin-top:1.75rem">${b.items.map((it) => `<li>${it}</li>`).join('')}</ul>
      ${b.link ? `<a class="link-arrow" style="margin-top:1.5rem" href="${b.link.href}">${b.link.label}${icon.arrow}</a>` : ''}
    </div>
    ${!b.reverse ? `<div class="media-frame media-frame--wide" data-reveal>${img({ name: b.img, widths: b.widths, w: b.w, h: b.h, alt: b.alt, sizes: '(max-width: 860px) 100vw, 50vw' })}</div>` : ''}
  </div>
</section>`).join('\n')}

<section class="section section--dark deferred">
  <div class="container split split--reverse">
    <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'spare-parts', widths: [600, 1000], w: 1000, h: 1211, alt: 'Genpac approved generator spare parts', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    <div data-reveal>
      <span class="eyebrow">Genpac</span>
      <h2 class="h-1">Approved generator spare parts</h2>
      <p style="margin-top:1rem">Genpac is RMC's dedicated spare parts brand, developed to support reliable generator operation across industrial and commercial applications. Designed in accordance with international standards, Genpac spare parts are approved by engine manufacturers and tested to ensure long-term performance under demanding operating conditions.</p>
      <p style="margin-top:1rem">With a strong focus on quality, availability and cost efficiency, Genpac provides a dependable alternative for generator owners seeking high-quality parts without compromising performance. Our inventory supports a wide range of engine and alternator brands commonly used across the UAE and Middle East markets.</p>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/contact-us/">Enquire about spare parts${icon.arrow}</a>
        <a class="btn btn--glass" href="/aftersale-support/">Aftersale support</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <span class="eyebrow">Acoustics</span>
      <h2 class="h-1">Soundproof canopies, manufactured in-house</h2>
      <p class="lede">RMC designs and manufactures high-performance soundproof generator canopies engineered for durability, safety and noise reduction.</p>
    </div>
    <div class="grid grid--3">
      ${canopies.map((c, i) => `<article class="pcard" data-reveal style="transition-delay:${i * 80}ms">
        <div class="pcard__media">${img({ name: c.img, widths: c.w > 1100 ? [1000, c.w] : [c.w], w: c.w, h: c.h, alt: c.name + ' manufactured by RMC', sizes: '(max-width: 700px) 100vw, 33vw' })}</div>
        <div class="pcard__body"><h3>${c.name}</h3><p>${c.text}</p></div>
      </article>`).join('\n      ')}
    </div>
    <div class="center" style="margin-top:2.5rem" data-reveal>
      <a class="btn btn--primary" href="/sound-proof-canopy-uae/">Explore soundproof canopies${icon.arrow}</a>
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container split">
    <div data-reveal>
      <span class="eyebrow">Why RMC</span>
      <h2 class="h-1">Why choose Rich Motor Company?</h2>
      <p class="lede" style="margin-top:1rem">With advanced assembly facilities and an experienced engineering team, we deliver reliable, efficient and customised power systems built to perform in demanding environments.</p>
      <ul class="ticks" style="margin-top:1.75rem">${why.map((w) => `<li>${w}</li>`).join('')}</ul>
    </div>
    <div class="media-stack" data-reveal>
      <div class="media-frame">${img({ name: 'why-choose-2', widths: [700, 1196], w: 1196, h: 2560, alt: 'RMC generator sets ready for despatch', sizes: '(max-width: 860px) 50vw, 25vw' })}</div>
      <div class="media-frame">${img({ name: 'why-choose-1', widths: [600, 897], w: 897, h: 1920, alt: 'RMC engineer inspecting a generator installation', sizes: '(max-width: 860px) 50vw, 25vw' })}</div>
      <div class="media-frame">${img({ name: 'service-kit', widths: [600, 1000], w: 1000, h: 982, alt: 'Generator service kits and filters', sizes: '(max-width: 860px) 50vw, 25vw' })}</div>
    </div>
  </div>
</section>

${partnersSection()}
${ctaBand({ title: 'Need a maintenance contract or an urgent repair?', text: 'Preventive maintenance, emergency breakdown support and 24/7 call-out — tell us what is on site and we will respond.' })}
${contactSection()}
`;
