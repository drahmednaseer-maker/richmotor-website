import { icon, img, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Products', href: '/diesel-generators-uae/' }, { label: 'Low Voltage Panels' }];

export const meta = {
  path: '/low-voltage-panels/',
  title: 'Low Voltage Panels UAE | Synchronisation & ATS Panels',
  description: 'Rich Motor Company supplies low voltage panels UAE — generator synchronisation, ATS, distribution and motor control panels with manual and automatic control.',
  priority: 0.8
};

export const schema = [crumbSchema('/low-voltage-panels/', crumbs)];

const range = [
  'Totalising panels', 'Dummy loads', 'Bus-tie / load sharing', 'Distribution panels',
  'Motor control panels', 'Motor control centres', 'Automation panels',
  'Automatic transfer switches', 'Manual transfer switches'
];

const hv = [
  'High voltage / low voltage generating sets',
  'High voltage switchgear',
  'Synchronising and load-sharing panels',
  'Step-up and step-down transformers'
];

export const body = `
${pageHero({
  eyebrow: 'Low voltage panels',
  title: 'Synchronisation and control panels, engineered to your power system',
  text: 'Synchronisation panels are designed and used to meet power system requirements — providing manual as well as automatic synchronising for one or more generator breakers.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Discuss a panel design' }, { href: '/services/', label: 'Engineering services' }]
})}

<section class="section">
  <div class="container split">
    <div class="prose" data-reveal>
      <span class="eyebrow">Overview</span>
      <h2 class="h-1 mt-0">Programmable microprocessor control, built in-house</h2>
      <p>Synchronisation panels are widely used for synchronising generators and offering multiplexing solutions. RMC specialises in designing and manufacturing a wide range of LV control panels using the latest technological advances in programmable microprocessor control units.</p>
      <p>By its vision based on innovation, quality and partnership, RMC Generators has expanded its areas of expertise into the <strong>high voltage arena</strong> — proving its readiness to deliver high voltage power stations as complete turnkey projects.</p>
      <h3>Synchronising &amp; paralleling systems</h3>
      <ul class="ticks" style="margin-top:1rem">${range.map((r) => `<li>${r}</li>`).join('')}</ul>
    </div>
    <div data-reveal>
      <div class="media-frame media-frame--wide">${img({ name: 'lv-panels', widths: [565], w: 565, h: 500, alt: 'Generator synchronising panel manufactured by RMC', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
      <div class="media-frame media-frame--wide" style="margin-top:1.25rem">${img({ name: 'low-voltage-panels', widths: [800, 1280], w: 1280, h: 960, alt: 'Low voltage distribution panels built at the RMC workshop', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Panel gallery</span>
      <h2 class="h-1">Panels we build</h2>
    </div>
    <div class="grid grid--4">
      ${[
        { i: 'lv-1', w: 576, h: 317, a: 'Generator control panel front view' },
        { i: 'lv-2', w: 558, h: 334, a: 'Synchronising panel internal wiring' },
        { i: 'lv-3', w: 407, h: 244, a: 'Automatic transfer switch panel' },
        { i: 'lv-4', w: 555, h: 362, a: 'Main distribution board' },
        { i: 'lv-inner', w: 562, h: 495, a: 'Low voltage panel assembly' },
        { i: 'lv-hv', w: 565, h: 424, a: 'High voltage power station equipment' }
      ].map((g, n) => `<div class="media-frame media-frame--wide" data-reveal style="transition-delay:${(n % 4) * 60}ms">${img({ name: g.i, widths: [g.w], w: g.w, h: g.h, alt: g.a, sizes: '(max-width: 700px) 50vw, 25vw' })}</div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container split split--reverse">
    <div class="media-frame media-frame--wide" data-reveal>${img({ name: 'lv-hv', widths: [565], w: 565, h: 424, alt: 'High voltage power station turnkey project', sizes: '(max-width: 860px) 100vw, 50vw' })}</div>
    <div data-reveal>
      <span class="eyebrow">High voltage</span>
      <h2 class="h-1">Complete turnkey high voltage power stations</h2>
      <p style="margin-top:1rem">High voltage power stations delivered by RMC comprise:</p>
      <ul class="ticks" style="margin-top:1.5rem">${hv.map((h) => `<li>${h}</li>`).join('')}</ul>
      <div class="btn-row" style="margin-top:2rem">
        <a class="btn btn--primary" href="/contact-us/">Talk to our electrical team${icon.arrow}</a>
        <a class="btn btn--glass" href="/voltage-configuration/">Voltage configuration guide</a>
      </div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Need panels designed around your single-line diagram?', text: 'Send us the SLD and generator schedule — we will design, build and factory-test the panels to match.' })}
${contactSection()}
`;
