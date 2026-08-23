import { icon, img, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Tools', href: '/amperage-chart/' }, { label: 'Voltage Configuration' }];

export const meta = {
  path: '/voltage-configuration/',
  title: 'Generator Voltage Configuration Guide | Rich Motor UAE',
  description: 'Understand generator voltage configuration — phases, common commercial voltages, de-rating, reconnectable generator ends and how to calculate what you need.',
  priority: 0.8
};

export const schema = [crumbSchema('/voltage-configuration/', crumbs)];

const components = [
  { t: 'Gauge replacements', d: 'We usually replace a number of gauges when altering voltage on an older generator so they read the new output levels. Newer digital control panels can normally be reprogrammed instead — a significant advantage.' },
  { t: 'Circuit breakers', d: 'Breakers are regularly changed to accommodate amperage requirements. The breaker is attached to the generator end and protects the unit by ensuring the rated amperage is not exceeded — for example one 1200 A breaker or two 600 A units.' },
  { t: 'Voltage regulator', d: 'Sensing wires running to the regulator or control panel must be adjusted carefully when reconnecting leads to a different voltage — get this wrong and you can burn out the board. Modern sets integrate regulation into the control panel.' },
  { t: 'Transformer', d: 'If your system uses a transformer, some of the wiring may need to be reconfigured to accommodate the new voltage.' },
  { t: 'Automatic transfer switch (ATS)', d: 'Required amperage must be determined, because the ATS is the component that lets your genset take over automatically during a utility outage — and shut down automatically when power returns.' }
];

export const body = `
${pageHero({
  eyebrow: 'Voltage configuration',
  title: 'Getting the electrical configuration right',
  text: 'The major concern in choosing a generator is the electrical configuration — the phase, voltage, kW and hertz best suited to your application.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Ask our engineers' }, { href: '/amperage-chart/', label: 'Amperage chart' }]
})}

<section class="section">
  <div class="container">
    <div class="prose prose--wide" data-reveal>
      <p class="lede">A generator set — commonly known as a genset — consists of two major components: an industrial engine (typically diesel, natural gas or propane) and a generator end. The engine produces horsepower and RPM; the end converts it into electricity.</p>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Explaining phases</span>
      <h2 class="h-1">Single-phase, three-phase, and what changes between them</h2>
    </div>
    <div class="grid grid--3">
      <article class="card" data-reveal>
        <div class="media-frame media-frame--wide" style="margin:-1.5rem -1.5rem 1.5rem;border-radius:0">${img({ name: 'volt-1', widths: [600], w: 600, h: 390, alt: 'Single-phase generator configuration diagram', sizes: '(max-width: 700px) 100vw, 33vw' })}</div>
        <h3>Single-phase generators</h3>
        <p>Used for smaller single-phase loads. These gensets typically do not go above <strong>40 kW</strong>. They are common in residential environments and have a power factor of <strong>1.0</strong>.</p>
      </article>
      <article class="card" data-reveal style="transition-delay:80ms">
        <div class="media-frame media-frame--wide" style="margin:-1.5rem -1.5rem 1.5rem;border-radius:0">${img({ name: 'volt-2', widths: [600], w: 600, h: 390, alt: 'Three-phase generator configuration diagram', sizes: '(max-width: 700px) 100vw, 33vw' })}</div>
        <h3>3-phase generators</h3>
        <p>Used mainly for large-scale industrial power generation. They can provide both single and 3-phase power for operating industrial motors with much higher horsepower, branch power out to separate lines, and are generally more flexible. Power factor <strong>0.8</strong>.</p>
      </article>
      <article class="card" data-reveal style="transition-delay:160ms">
        <div class="media-frame media-frame--wide" style="margin:-1.5rem -1.5rem 1.5rem;border-radius:0">${img({ name: 'volt-3', widths: [600], w: 600, h: 390, alt: 'Generator voltage conversion diagram', sizes: '(max-width: 700px) 100vw, 33vw' })}</div>
        <h3>Increasing output rating</h3>
        <p>Converting single-phase to 3-phase power gains approximately <strong>20–30% kW</strong> output rating. The end must be re-connectable, and you must account for load balance and other variables.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">De-rating</span>
      <h2 class="h-1 mt-0">Converting from 3-phase to single-phase</h2>
      <p>De-rating typically reduces your kW output rating by around <strong>30%</strong>. For instance, a 100 kW 3-phase generator would drop to about 70 kW when converted to single-phase.</p>
      <ul>
        <li>To calculate adjusted power accurately, de-rate from the <strong>kVA rating</strong> rather than the kW rating. The formula is <strong>2/3 kVA</strong> — convert to kilowatts afterwards if required.</li>
        <li>To de-rate a genset, the generator end must have 12 or 10 leads that can be reconnected. Single-phase loads do not affect the load on the engine itself, provided you do not exceed the rated amperes on an individual line.</li>
        <li>The genset is rated and limited by the electrical capacity of the generator end — it has little to do with the engine.</li>
      </ul>
    </div>
    <div data-reveal>
      <span class="eyebrow">Common voltages</span>
      <h2 class="h-2">On commercial generator sets</h2>
      <div class="specs" style="margin-top:1.5rem">
        <div class="spec"><dt>Single-phase</dt><dd>120 V &middot; 240 V &middot; 120/240 V</dd></div>
        <div class="spec"><dt>3-phase</dt><dd>208 V &middot; 120/208 V &middot; 240 V &middot; 480 V (industrial standard) &middot; 277/480 V &middot; 600 V &middot; 4160 V</dd></div>
        <div class="spec"><dt>Other options</dt><dd>220, 440, 2400, 3300, 6900, 11500 and 13500 V</dd></div>
      </div>
      <p class="table-note">Voltage requirements vary greatly with location and equipment type. UAE and most of the region operate at 50 Hz.</p>
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Calculating</span>
      <h2 class="h-1">How to calculate your required voltage</h2>
      <p class="lede">Always consult an electrician or electrical contractor to evaluate your environment and determine the work-loads specific to your facility. These are the key factors to take into account.</p>
    </div>
    <ol class="steps" data-reveal>
      <li><b>Determine required voltage and power</b>Establish what must be supplied to your facility in total.</li>
      <li><b>Calculate maximum amperage</b>Work out the maximum current your equipment needs to perform optimally. If unknown, alternator amperes for 3-phase alternators can usually be found on reference charts — and determine the size of circuit breaker you need.</li>
      <li><b>Account for motor starting</b>Several motors run on modest kW but demand far more at start-up. A 90 kW average running load may need 200 kW or more at start. Evaluate electric motor horsepower; some motors include soft-starter technology that controls acceleration by applying voltage gradually.</li>
      <li><b>Confirm utility frequency</b>The US and parts of Asia operate at 60 Hz; most of the world, including the UAE, at 50 Hz. Aircraft and large ships use 400 Hz. Frequency converters exist, but some generators need additional parts and customisation.</li>
    </ol>
    <div class="btn-row" style="margin-top:2.5rem" data-reveal>
      <a class="btn btn--primary" href="/amperage-chart/">Open the amperage chart${icon.arrow}</a>
      <a class="btn btn--ghost" href="/sizing-a-generator/">Sizing guide</a>
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Configuring voltage</span>
      <h2 class="h-1">Reconfiguring a generator’s voltage</h2>
      <p class="lede">Adjusting voltage is a technical electrical procedure that involves reconfiguring the leads on the generator end — typically 10 or 12 leads on a 3-phase genset.</p>
    </div>
    <div class="prose prose--wide" data-reveal style="color:#a9b6c9">
      <p style="color:#a9b6c9">These leads are rearranged and reconnected to reroute to the control panel and elsewhere. Wires are well insulated, sensing wires are configured where required, and further changes are made as needed. This is where dogleg, double delta (zig-zag) and Y-configuration wiring schemes are referenced. The adjustable range on a 3-phase genset runs from 208 V to 480 V, from 480 V to 240 V, and many other combinations — as long as the generator end is re-connectable.</p>
      <p style="color:#a9b6c9">The primary component determining how a generator reacts to a phase or voltage change is the generator end. Altering voltage should not harm or strain the unit if done properly. Having two or more system voltages available from a standby genset is crucial for many customers — electric motors at 480 V, production equipment at 208 V, smaller loads and power tools at 240 V. This can be achieved with a 3-phase generator using a changeover switch, or a purpose-built dual voltage generator. Note that a single generator cannot output multiple voltages simultaneously; the output must be switched manually, or a transformer used.</p>
      <p style="color:#a9b6c9"><strong style="color:#fff">Limitations.</strong> High voltage or specialised gensets are not suitable for voltage alteration. Voltage can be changed from 600 V to 480 V but not the other way. Some 3-phase gensets have flexible conduit, awkwardly placed panel doors or tight enclosures that make access difficult — and some generator ends are simply not re-connectable, which limits the available wiring schemes.</p>
    </div>
    <div class="specs" style="margin-top:2.5rem;background:rgba(255,255,255,.09);border-color:rgba(255,255,255,.1)" data-reveal>
      ${components.map((c) => `<div class="spec" style="background:var(--ink-800)"><dt>${c.t}</dt><dd style="color:#96a5ba">${c.d}</dd></div>`).join('')}
    </div>
  </div>
</section>

${ctaBand({ title: 'Need help determining the best option for your site?', text: 'Phase and voltage conversions can be an involved process. Ask our generator technicians to assess your specific environment.' })}
${contactSection()}
`;
