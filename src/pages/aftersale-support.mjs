import { icon, img, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'Aftersale Support' }];

export const meta = {
  path: '/aftersale-support/',
  title: 'Generator O&M Services & Spare Parts UAE | Aftersale Support',
  description: 'Rich Motor Company offers trusted generator after-sales support in the UAE — service, spare parts, maintenance and O&M for diesel generators and gensets.',
  priority: 0.8
};

export const schema = [crumbSchema('/aftersale-support/', crumbs)];

const credibility = [
  'We own what we sell',
  'We do not broker other dealers’ inventory',
  'We do not outsource services',
  'All labour is completed at our 20,000 sq facility in Hamriyah, Sharjah Phase II'
];

const customisations = [
  'Modifications to accommodate standby, prime or continuous operation',
  'Tight-spaced installations', 'Special applications',
  'Ventilation and exhaust outputs', 'Working to fit specific building specifications',
  'Enclosure housing', 'Weatherproofing', 'Sound attenuating',
  'Shipping container mounting', 'Trailer mounting', 'Fuel tank options', 'Skid mounting'
];

export const body = `
${pageHero({
  eyebrow: 'After-sale support',
  title: 'We guarantee your generator starts and runs as specified',
  text: 'Rich Motor Company sale support is the most trusted route to gensets, diesel generators, power and O&M services in the UAE, the Middle East and Africa.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Book a service call' }, { href: '/services/', label: 'All services' }]
})}

<section class="section">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">The standard</span>
      <h2 class="h-1 mt-0">When you need your generator to work, it works</h2>
      <p>RMC has set the standard for dependability. We know that when you need your generator to work, you need it to work correctly from start-up to shut-down. Our regular check and inspection programme gives you the assurance that your generator will run when you need it most.</p>
      <p>We know you don’t cut corners in your business, and neither do we. We are confident we can provide your business with the utmost service, quality, dependability and satisfaction.</p>
      <p>Our experienced diesel professionals include electricians and field mechanics who handle service, installations, in-house load bank and testing. Our staff has been responsible for the professional installation of multiple units <strong>up to 2.2 megawatts</strong> in the UAE, Qatar, KSA, Oman, Yemen, Afghanistan, Pakistan, Nigeria, Chad, Côte d’Ivoire and countless other African and Middle Eastern countries.</p>
    </div>
    <div class="media-frame media-frame--wide" data-reveal>
      ${img({ name: 'aftersale-3', widths: [700, 1024], w: 1024, h: 1536, alt: 'RMC field technician servicing a diesel generator', sizes: '(max-width: 860px) 100vw, 50vw' })}
      <div class="badge-float"><i>${icon.headset}</i><span><b>24/7</b><span>Call-out support</span></span></div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="grid grid--3">
      <article class="card" data-reveal>
        <span class="card__icon">${icon.award}</span>
        <h3>Experience</h3>
        <p>Our diesel engineers and technicians are among the most skilled in the industry, with over <strong>30 years of combined professional experience</strong>.</p>
        <a class="link-arrow" href="/services/">Check our services${icon.arrow}</a>
      </article>
      <article class="card" data-reveal style="transition-delay:80ms">
        <span class="card__icon">${icon.shield}</span>
        <h3>Credibility</h3>
        <p>Many companies represent themselves as diesel experts, only for customers to discover they are dealing with a broker who does not own the inventory. We inspect and test every generator we sell.</p>
        <ul class="ticks" style="margin-top:1rem;font-size:.9rem">${credibility.map((c) => `<li>${c}</li>`).join('')}</ul>
      </article>
      <article class="card" data-reveal style="transition-delay:160ms">
        <span class="card__icon">${icon.wrench}</span>
        <h3>Manufacturer-specific inspection</h3>
        <p>Since 2005, RMC has developed relationships with the most respected generator manufacturers in the industry — keeping us current on inspection processes critical to optimal performance.</p>
        <a class="link-arrow" href="/testing-and-inspection-process/">Check inspection process${icon.arrow}</a>
      </article>
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split split--reverse">
    <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'aftersale-2', widths: [700, 1086], w: 1086, h: 1536, alt: 'RMC fabrication department customising a generator installation', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    <div data-reveal>
      <span class="eyebrow">Fully customisable</span>
      <h2 class="h-1">One size does not fit all in the generator industry</h2>
      <p style="margin-top:1rem">Getting the right fit for your generator installation is crucial for long-term performance and reliability. We believe in doing the job right the first time, so we have developed a fully capable fabrication department to customise any generator to your facility’s needs.</p>
      <ul class="ticks ticks--2" style="margin-top:1.75rem">${customisations.map((c) => `<li>${c}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container split">
    <div data-reveal>
      <span class="eyebrow">Our service guarantee</span>
      <h2 class="h-1">Real service, not a promise on a page</h2>
      <p class="lede" style="margin-top:1rem">We follow RMC, Lister Petter and other leading manufacturers’ internal inspection processes. We service all makes and models within the industry, and we service diesel fuel types.</p>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/contact-us/">Request emergency support${icon.arrow}</a>
        <a class="btn btn--ghost" href="/services/">Maintenance contracts</a>
      </div>
    </div>
    <div class="media-frame media-frame--square" data-reveal style="max-width:420px;margin-inline:auto">${img({ name: 'aftersale-1', widths: [840], w: 840, h: 754, alt: 'Rich Motor Company service guarantee', sizes: '(max-width: 860px) 100vw, 420px' })}</div>
  </div>
</section>

${ctaBand({ title: 'Generator down? Call us now.', text: 'Emergency call-out support, guaranteed parts availability and instant delivery — so a fault never becomes a stoppage.', primary: { href: 'tel:+971528466669', label: 'Call +971 52 846 6669' } })}
${contactSection()}
`;
