import { icon, img, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Tools', href: '/amperage-chart/' }, { label: 'Testing & Inspection Process' }];

export const meta = {
  path: '/testing-and-inspection-process/',
  title: 'Generator Testing and Inspection Process | Rich Motor UAE',
  description: 'Inside the RMC generator testing and inspection process — a 31-point standard check plus full load bank testing on every diesel generator we supply.',
  priority: 0.8
};

export const schema = [crumbSchema('/testing-and-inspection-process/', crumbs)];

const standardChecks = [
  'Grease gen bearing', 'Tighten hose clamps', 'Check oil & condition', 'Check coolant',
  'Turn engine for 2 full rounds', 'Removal of remote wires', 'Checking barrel leads for insulation',
  'Checking voltages & fan belts', 'Missing belts & blocked heaters', 'Remote start & battery voltage',
  'Cold water leaks & fuel rack', 'Checking battery cables', 'Checking battery chargers'
];

const loadBankChecks = [
  'Checking temperature with heat gun', 'Coolant leaks', 'Oil leaks', 'Full rating tests',
  'Gauge compliance test', 'Gauge adjustment test', 'Accurate temperature gauge test',
  'Engine alternate test', 'Pro alarm verification', 'Shut down verification', 'Auto start test & tag verification'
];

const expertise = [
  'Engine management systems and accessories', 'Fluid, power and electrical systems',
  'Power trains', 'After-treatment and induction exhaust systems',
  'Heavy duty torque conversions', 'Diesel engine frequency conversions (60 to 50 Hz)'
];

const customisation = [
  'Enclosure housing', 'Waterproofing', 'Sound attenuating', 'Shipping container mounting',
  'Trailer mounting', 'Fuel tank options', 'Skid mounting', 'Modifications to accommodate standby',
  'Tight spaced installations', 'Special applications', 'Ventilation and exhaust outputs',
  'Working to fit specific building specifications'
];

export const body = `
${pageHero({
  eyebrow: 'Testing and inspection',
  title: 'The RMC certified generator seal of approval',
  text: 'Every unit we supply goes through a thorough check and a rigorous inspection programme to ensure the safety of our customers and their equipment — so it runs flawlessly when needed.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Request an inspection report' }, { href: '/aftersale-support/', label: 'Aftersale support' }]
})}

<section class="section">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">The standard</span>
      <h2 class="h-1 mt-0">More than a decade of setting reliability standards</h2>
      <p>RMC has set standards for reliability in electrical power generation for the better part of more than 10 years. We are aware of our customers’ needs and provide the right generators for the job. All our equipment undergoes a thorough, careful check and a rigorous inspection programme.</p>
      <p>We ensure the quality of our products so they run flawlessly when needed. We know you leave no stone unturned when it comes to business — and so do we.</p>
      <h3>Experience</h3>
      <p>The qualified team of engineers and trained technicians at Rich Motor bring more than <strong>15 years</strong> of working experience. Their academic and training achievements cover:</p>
      <ul class="ticks" style="margin-top:1rem">${expertise.map((e) => `<li>${e}</li>`).join('')}</ul>
    </div>
    <div data-reveal>
      <div class="media-frame media-frame--wide">${img({ name: 'testing-1', widths: [761], w: 761, h: 889, alt: 'RMC technician carrying out generator inspection', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
      <div class="media-frame media-frame--wide" style="margin-top:1.25rem">${img({ name: 'testing-2', widths: [267], w: 267, h: 180, alt: 'Generator load bank testing equipment', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">31-point inspection</span>
      <h2 class="h-1">The Rich Motor 31-point inspection process</h2>
      <p class="lede">We follow the manufacturer’s inspection guidelines and add our own procedures on top, so customers get the best generator for their money.</p>
    </div>
    <div class="grid grid--2">
      <article class="card" data-reveal>
        <span class="card__icon">${icon.check}</span>
        <h3>Standard checks</h3>
        <ul class="ticks" style="margin-top:1rem">${standardChecks.map((c) => `<li>${c}</li>`).join('')}</ul>
      </article>
      <article class="card" data-reveal style="transition-delay:80ms">
        <span class="card__icon">${icon.gauge}</span>
        <h3>Load bank checks</h3>
        <ul class="ticks" style="margin-top:1rem">${loadBankChecks.map((c) => `<li>${c}</li>`).join('')}</ul>
      </article>
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container">
    <div class="grid grid--3">
      <article class="card card--dark" data-reveal>
        <span class="card__icon">${icon.shield}</span>
        <h3>Credibility</h3>
        <p>A lot of companies claim to be the best in diesel engines and generators, and customers often find out too late that they were not. At RMC, every generator is checked rigorously before it is made available for purchase.</p>
        <ul class="ticks" style="margin-top:1rem;font-size:.9rem">
          <li>We own what we sell</li>
          <li>We do not deal in other brokers’ inventories</li>
          <li>Our work is not outsourced</li>
          <li>All labour is completed at our UAE facility</li>
        </ul>
      </article>
      <article class="card card--dark" data-reveal style="transition-delay:80ms">
        <span class="card__icon">${icon.factory}</span>
        <h3>Inspection process by manufacturer</h3>
        <p>Long-standing relationships with major generator manufacturers keep Rich Motor up to date with the latest inspection processes.</p>
        <ul class="ticks" style="margin-top:1rem;font-size:.9rem">
          <li>We follow leading manufacturers’ internal inspection processes</li>
          <li>We provide services for all types of models in the industry</li>
          <li>We service diesel, natural gas and turbine generators</li>
        </ul>
      </article>
      <article class="card card--dark" data-reveal style="transition-delay:160ms">
        <span class="card__icon">${icon.wrench}</span>
        <h3>Customisation</h3>
        <p>Generators come in several sizes and power factors — one size does not fit all. Our fabrication department modifies and configures your generator to your requirements.</p>
        <ul class="ticks" style="margin-top:1rem;font-size:.9rem">${customisation.slice(0, 7).map((c) => `<li>${c}</li>`).join('')}</ul>
      </article>
    </div>
  </div>
</section>

${ctaBand({ title: 'Want the inspection report before you buy?', text: 'Ask for the load bank results and 31-point checklist on the unit you are considering.' })}
${contactSection()}
`;
