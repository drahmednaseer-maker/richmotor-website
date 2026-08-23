import { icon, img, pageHero, partnersSection, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'Sound Proof Canopy UAE' }];

export const meta = {
  path: '/sound-proof-canopy-uae/',
  title: 'Silent Diesel Generator UAE | Soundproof Canopy Supplier',
  description: 'Soundproof canopy gensets from Rich Motor Company UAE — acoustic enclosures from 5 kVA to 2000 kVA engineered for quiet, low-noise power on any site.',
  priority: 0.8
};

export const schema = [crumbSchema('/sound-proof-canopy-uae/', crumbs)];

const types = [
  { t: 'Acoustic generator canopies', d: 'Functionally efficient enclosures acclaimed for silent operation, durable standards and dimensional accuracy — designed and produced to set quality norms, with AMC services available across the range.' },
  { t: 'Sheet metal generator canopies', d: 'Dimensionally accurate, functionally productive enclosures fabricated to strict quality measures, tested on well-defined parameters before despatch.' },
  { t: 'Genset canopies', d: 'Engineered with the latest techniques for industrial and commercial installations, with panel viewing windows and side-opening access doors.' }
];

const features = [
  'Heavy-level acoustic treatment: 65 dB at 1 metre from all directions on location',
  'Integral suppressor mounted inside the enclosure',
  'Total design flexibility and enhanced durability',
  'Heavy-duty base frame in 10×5 cm steel U channels with 10 cm sound-absorbing insulation',
  'Body panels in 1.5, 2 and 3 mm sheet steel, sides and top',
  'Canopy walls and ceiling lined with sound-absorbing material',
  'Anti-scratch 100 micron powder coating cured at 120 °C',
  'Four lockable doors and four lifting points',
  'Oil and coolant drainage points',
  'Easy canopy disassembly for maintenance',
  'Full weather-proof enclosure',
  'Suitable for operation in extremely adverse weather conditions'
];

export const body = `
${pageHero({
  eyebrow: 'Sound canopy',
  title: 'Soundproof canopies engineered for quiet power',
  text: 'An acoustic canopy is a heavy enclosure lined with acoustic insulation and purpose-manufactured louvres for free-flow ventilation while reducing external sound levels. RMC manufactures the full range in-house.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Request canopy pricing' }, { href: '/services/', label: 'Manufacturing services' }]
})}

<section class="section">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">How it works</span>
      <h2 class="h-1 mt-0">From 5 kVA to 2000 kVA, drop-over or fully demountable</h2>
      <p>Sound sealing is achieved by lining every area of the acoustic canopy with thick insulation to absorb the noise produced when the generator engine is running. Without sound sealing, a generator is called an <strong>open set</strong> — no canopy, no compartment. The most common level of sound sealing is the EU standard of <strong>80 dB(A) at 1 metre</strong> in open field conditions.</p>
      <p>When a generator is to be permanently sited outdoors, it needs to be its own acoustic, weather-proof and lockable shelter. We offer a standard range of DG set acoustic enclosures from 5 kVA up to 2000 kVA, specified for different generators and specifically intended for diesel-engined generating sets.</p>
      <p>Most are of drop-over design — although a fully demountable option is available where installation space is constrained. The drop-over design has the advantage of low installation time, quick access to the set for major support, dependable weatherproofing, and the ability to be reused at alternative sites. Most enclosures are completed at our manufacturing plant and are ready to go straight into service.</p>
    </div>
    <div class="media-frame media-frame--wide" data-reveal>
      ${img({ name: 'silent-canopy', widths: [700, 1072], w: 1072, h: 599, alt: 'RMC soundproof generator canopy manufactured in Sharjah, UAE', sizes: '(max-width: 860px) 100vw, 50vw' })}
      <div class="badge-float"><i>${icon.volume}</i><span><b>65 dB(A)</b><span>at 1 metre</span></span></div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Types</span>
      <h2 class="h-1">Three canopy families, one manufacturing standard</h2>
      <p class="lede">We are a main manufacturer of generator enclosures, soundproof canopies, acoustic generator shelters, blower coverings and cable machine shelters.</p>
    </div>
    <div class="grid grid--3">
      ${types.map((t, i) => `<article class="card" data-reveal style="transition-delay:${i * 80}ms">
        <span class="card__icon">${icon.volume}</span><h3>${t.t}</h3><p>${t.d}</p>
      </article>`).join('\n      ')}
    </div>
    <div class="grid grid--3" style="margin-top:2rem">
      ${[
        { n: 'Silent', i: 'silent-canopy', w: 1072, h: 599, d: 'Standard noise reduction with excellent ventilation and accessibility.' },
        { n: 'Super silent', i: 'super-silent', w: 1600, h: 900, d: 'Enhanced acoustic insulation for commercial and residential areas.' },
        { n: 'Ultra silent', i: 'ultra-silent', w: 1600, h: 747, d: 'Maximum noise reduction for hospitals, hotels and urban sites.' }
      ].map((c, i) => `<article class="pcard" data-reveal style="transition-delay:${i * 80}ms">
        <div class="pcard__media">${img({ name: c.i, widths: c.w > 1100 ? [1000, c.w] : [c.w], w: c.w, h: c.h, alt: `${c.n} canopy by RMC`, sizes: '(max-width: 700px) 100vw, 33vw' })}</div>
        <div class="pcard__body"><h3>${c.n} canopy</h3><p>${c.d}</p></div>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split split--reverse">
    <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'super-silent', widths: [1000, 1600], w: 1600, h: 900, alt: 'Super silent generator canopy on a UAE site', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    <div data-reveal>
      <span class="eyebrow">Specification</span>
      <h2 class="h-1">Features of an RMC soundproof canopy</h2>
      <ul class="ticks" style="margin-top:1.75rem">${features.map((f) => `<li>${f}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">All-weather performance</span>
      <h2 class="h-1">Built to withstand full sunlight, extreme weather and harsh industry</h2>
    </div>
    <div class="prose prose--wide" data-reveal>
      <p>RMC all-weather soundproof canopies achieve high STC and NRC ratings, and are specifically designed to withstand outdoor exposure in full sunlight, extreme weather conditions and harsh industrial environments. All RMC canopies include an internal layer of FG sound isolation material plus a specifically engineered 2″ (50.8 mm) thick weatherproof sound-absorbing material.</p>
      <p>Canopies are suitable for indoor or outdoor use and may be assembled even by a beginner, as they are user-friendly and easy to identify. All isolating materials are covered by a galvanised perforated sheet that makes routine cleaning more efficient and protects the lifetime of the acoustic material.</p>
      <p>RMC soundproof canopies absorb the vast majority of transmitted sound, with performance ratings guaranteeing sound levels of no greater than <strong>65–78 dB(A) at 7 metres</strong> under free field conditions. Our systems are based on a modular concept and can be effectively segregated. Our enclosures incorporate a ventilation system that enables heat dissipation and efficiently cools the enclosed gensets. We also make residential-grade acoustic cabinets with enhanced sound attenuation.</p>
      <p>Rich Motor employs highly skilled engineers, technicians and assembly personnel to provide full service from initial project concept through completion and follow-up support. We develop equipment collaboratively with our customers and, where necessary, build prototypes to demonstrate or validate difficult concepts and confirm potential solutions.</p>
    </div>
  </div>
</section>

${partnersSection()}
${ctaBand({ title: 'Need a canopy to a noise limit?', text: 'Give us the genset make, kVA and the dB(A) limit at distance — we will engineer the enclosure to meet it.' })}
${contactSection()}
`;
