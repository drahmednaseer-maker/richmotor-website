import { icon, img, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Projects' }];

export const meta = {
  path: '/projects/',
  title: 'Generator Projects UAE | Rich Motor Company Portfolio',
  description: 'Explore generator projects delivered by Rich Motor Company across the UAE, KSA, Oman, Yemen and Djibouti — synchronised installations, O&M and complete power systems.',
  priority: 0.9
};

export const schema = [crumbSchema('/projects/', crumbs)];

const projects = [
  { name: 'Corniche Towers', loc: 'Ajman, UAE', text: '7 units of 1500 kVA synchronised together. The towers comprise almost 650 flats, shops, offices and a mall.', img: 'proj-corniche-towers' },
  { name: 'Twin Towers', loc: 'Ajman, UAE', text: '4 units of 500 kVA and 3 units of 350 kVA synchronised together, serving around 500 flats, shops, offices and a gym centre.', img: 'proj-twin-towers' },
  { name: 'King Faisal Air Base', loc: 'Saudi Arabia', text: '4 units of 500 kVA and 3 units of 350 kVA synchronised together for base-wide power.', img: 'proj-king-faisal' },
  { name: 'Industrial Mall', loc: 'Ajman, UAE', text: '4 units of 400 kVA synchronised together were installed in this mall.', img: 'proj-industrial-mall' },
  { name: 'Al Serkal Complex', loc: 'Ajman, UAE', text: '3 units of 350 kVA synchronised together were installed in this complex.', img: 'proj-al-serkal' },
  { name: 'Batco Labour Camp', loc: 'Fujairah, UAE', text: 'Contractor of the Dubai–Fujairah Road Project. 3 units of 350 kVA synchronised together were installed in this camp.', img: 'proj-batco' },
  { name: 'Ministry of Health', loc: 'Djibouti', text: '2 units of 400 kVA synchronised together with a distribution panel installed in this building.', img: 'proj-ministry-health' },
  { name: 'Dawood Residential Building', loc: 'UAE', text: '4 units of 400 kVA synchronised together were installed in this building.', img: 'proj-dawood' },
  { name: 'Al Kanz Contracting', loc: 'Ajman, UAE', text: '1 unit of 200 kVA and 1 unit of 150 kVA synchronised together were installed in this building.', img: 'proj-al-kanz' },
  { name: 'Dream Palace Hotel', loc: 'Ajman, UAE', text: '3 units of 250 kVA synchronised together were installed in this hotel.', img: 'proj-dream-palace' },
  { name: 'Ajman Suites', loc: 'Ajman, UAE', text: '2 units of 250 kVA synchronised together were installed in this building.', img: 'proj-anman-suites' },
  { name: 'Al Durra Twin Building', loc: 'Ajman, UAE', text: '3 units of 200 kVA synchronised together were installed in this building.', img: 'proj-alburra' },
  { name: 'Ministry of Electricity', loc: 'Aden, Yemen', text: 'Power generation supply and installation for the Ministry of Electricity.', img: 'proj-ministry-electricity' },
  { name: 'Fish Packing Company', loc: 'Aden, Yemen', text: 'Continuous power for cold-chain and processing operations.', img: 'proj-fish-packing' },
  { name: 'Fouhoud Camp', loc: 'Oman', text: 'Phase 1 camp power supply, installation and commissioning.', img: 'proj-fouhoud' }
];

export const body = `
${pageHero({
  eyebrow: 'Our company successful projects',
  title: 'Synchronised power, delivered across the region',
  text: 'Towers, malls, hotels, ministries, air bases and labour camps — a selection of installations where RMC gensets keep the lights on.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Discuss your project' }, { href: '/services/', label: 'Our services' }]
})}

<section class="section section--tight">
  <div class="container">
    <div class="stats stats--wide" style="background:var(--line)">
      ${[['15+', 'Flagship installations'], ['1500 kVA', 'Largest synchronised set'], ['6', 'Countries in this portfolio'], ['24/7', 'O&amp;M cover']].map(([b, s]) => `<div class="stat" style="background:#fff"><b>${b}</b><span style="color:var(--slate)">${s}</span></div>`).join('')}
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Project highlights</span>
      <h2 class="h-1">Selected installations</h2>
      <p class="lede">Every project below was engineered, supplied, installed and commissioned by RMC — including generator synchronisation, distribution panels and site testing.</p>
    </div>
    <div class="grid grid--3">
      ${projects.map((p, i) => `<article class="projcard" data-reveal style="transition-delay:${(i % 3) * 70}ms" tabindex="0">
        ${img({ name: p.img, widths: [640, 1024], w: 1024, h: 768, alt: `${p.name} — ${p.loc} generator installation by Rich Motor Company`, sizes: '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw' })}
        <div class="projcard__body">
          <span class="projcard__loc">${icon.pin}${p.loc}</span>
          <h3>${p.name}</h3>
          <p>${p.text}</p>
        </div>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBand({ title: 'Planning a similar installation?', text: 'Share your single-line diagram or load schedule and we will propose a synchronised configuration, panel design and commissioning plan.' })}
${contactSection()}
`;
