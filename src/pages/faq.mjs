import { icon, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Tools', href: '/amperage-chart/' }, { label: 'FAQ' }];

export const meta = {
  path: '/faq/',
  title: 'Generator FAQ | Diesel Generator Questions Answered UAE',
  description: 'Generator FAQ from Rich Motor Company UAE — kW vs kVA, standby vs prime power, voltage changes, automatic transfer switches, paralleling and 60 Hz to 50 Hz.',
  priority: 0.8
};

const faqs = [
  {
    q: 'What is the difference between kW and kVA?',
    a: [
      'The primary difference between kW (kilowatt) and kVA (kilovolt-ampere) is the power factor. kW is the unit of real power, and kVA is a unit of apparent power — real power plus reactive power. Unless it is defined and known, the power factor is an approximate value (typically 0.8), and the kVA value will always be higher than the value for kW.',
      'For industrial and commercial generators, kW is most commonly used in the United States and a few other countries that use 60 Hz. The majority of the world typically uses kVA as the primary value when referencing generator sets.',
      'The kW rating is essentially the resulting power output a generator can supply based on an engine’s horsepower — figured by the horsepower rating of the engine times 0.746. For example, a 500 horsepower engine has a kW rating of 373. The kilovolt-amperes (kVA) are the generator end capacity. Generator sets are usually shown with both ratings. To determine the ratio: 0.8 (pf) × 625 (kVA) = 500 kW.'
    ]
  },
  {
    q: 'What is the difference between standby, continuous and prime power ratings?',
    a: [
      'Standby power generators are most often used in emergencies, such as during a power outage. They are ideal for applications that have another reliable continuous power source, like utility power. Recommended usage is normally only for the duration of an outage, plus regular testing and maintenance.',
      'Prime power ratings can be defined as having an “unlimited run time” — a generator used as a primary power source rather than just standby or backup. A prime power rated generator can supply power where there is no utility source, as is often the case in mining or oil &amp; gas operations located in remote areas where the grid is not accessible.',
      'Continuous power is similar to prime power but has a base load rating. It can supply power continuously to a constant load, but cannot handle overload conditions or work as well with variable loads. The main difference is that prime power gen-sets have maximum power available at a variable load for an unlimited number of hours, and generally include around 10% overload capability for short durations.'
    ]
  },
  {
    q: 'If I am interested in a generator that is not the voltage I need, can the voltage be changed?',
    a: [
      'Generator ends are designed to be either reconnectable or non-reconnectable. If a generator is listed as reconnectable, the voltage can be changed. If it is non-reconnectable, the voltage is not changeable.',
      '12-lead reconnectable generator ends can be switched between three-phase and single-phase voltages — though a change from three-phase to single-phase will decrease the machine’s power output. Ten-lead reconnectable ends can be converted to three-phase voltages but not single phase.'
    ]
  },
  {
    q: 'What does an Automatic Transfer Switch do?',
    a: [
      'An automatic transfer switch (ATS) transfers power from a standard source, like a utility, to emergency power such as a generator, when the standard source fails. An ATS senses the power interruption on the line and, in turn, signals the engine panel to start.',
      'When the standard source is restored to normal power, the ATS transfers power back to the standard source and shuts the generator down. Automatic transfer switches are often used in high-availability environments such as data centres, manufacturing plants and telecommunication networks.'
    ]
  },
  {
    q: 'Can a generator I am looking at parallel with one I already own?',
    a: [
      'Generator sets can be paralleled for either redundancy or capacity requirements. Paralleling generators allows you to join them so their power output combines electrically.',
      'Paralleling identical generators will not be problematic, but some extensive thought should go into the overall design based on your system’s primary purpose. If you are trying to parallel unlike generators, the design and installation can be more complicated — keep in mind the effects of engine configuration, generator design and regulator design.'
    ]
  },
  {
    q: 'Can you convert a 60 Hz generator to 50 Hz?',
    a: [
      'In general, commercial generators can be converted from 60 Hz to 50 Hz. The general rule of thumb is that 60 Hz machines run at 1800 rpm, and 50 Hz generators run at 1500 rpm. With most generators, changing the frequency will only require turning down the rpm of the engine.',
      'In some cases parts may have to be replaced or further modifications made. Larger machines, or machines already set at low rpm, are different and should be evaluated case by case. We prefer to have our experienced technicians look at each generator in detail to determine the feasibility and what will be required.'
    ]
  },
  {
    q: 'How do I determine what size generator I need?',
    a: [
      'Getting a generator that can handle all your power generation needs is one of the most critical aspects of the purchasing decision. Whether you are interested in prime or standby power, if your new generator can’t meet your specific requirements it simply won’t do any good — it can put undue stress on the unit and even damage some of the devices connected to it.',
      'Determining exactly what size of generator to get is often difficult and involves several factors. Our <a href="/sizing-a-generator/">generator sizing guide</a> walks through the calculation, and the <a href="/amperage-chart/">amperage chart</a> converts kVA and voltage to full-load current.'
    ]
  }
];

export const schema = [
  crumbSchema('/faq/', crumbs),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q.replace(/&amp;/g, '&'),
      acceptedAnswer: { '@type': 'Answer', text: f.a.join(' ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&') }
    }))
  }
];

export const body = `
${pageHero({
  eyebrow: 'Industrial FAQ',
  title: 'Frequently asked questions',
  text: 'Our customers rely on us for accurate answers to electrical, engine and generator questions. Here are the ones we answer most often.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Ask your own question' }, { href: '/sizing-a-generator/', label: 'Sizing guide' }]
})}

<section class="section">
  <div class="container" style="max-width:900px">
    <p class="lede" data-reveal style="margin-bottom:2.5rem">At RMC, many of our customers rely upon us to provide accurate and informative answers to their electrical, engine and generator related questions. We plan to expand this section over time — if you have a question you would like to see here, <a href="/contact-us/">email us with your suggestion</a> and we will do our best to answer and include it.</p>

    <div class="accordion" data-reveal>
      ${faqs.map((f, i) => `<div class="acc-item">
        <h2><button class="acc-btn" id="faq-btn-${i}" aria-expanded="${i === 0}" aria-controls="faq-p-${i}">
          <span>${f.q}</span><i>${icon.plus}</i>
        </button></h2>
        <div class="acc-panel${i === 0 ? ' is-open' : ''}" id="faq-p-${i}" role="region" aria-labelledby="faq-btn-${i}">
          <div>${f.a.map((p) => `<p>${p}</p>`).join('')}</div>
        </div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <span class="eyebrow">Go deeper</span>
      <h2 class="h-1">Technical resources</h2>
    </div>
    <div class="grid grid--3">
      ${[
        { t: 'Amperage chart', d: 'kVA and kW to output amps across 208 V to 4160 V.', h: '/amperage-chart/', i: icon.gauge },
        { t: 'Sizing a generator', d: 'Starting vs running loads, kW vs kVA, and how to avoid under-sizing.', h: '/sizing-a-generator/', i: icon.cpu },
        { t: 'Voltage configuration', d: 'Phases, de-rating, reconnectable ends and common commercial voltages.', h: '/voltage-configuration/', i: icon.bolt }
      ].map((r, i) => `<a class="card" href="${r.h}" data-reveal style="transition-delay:${i * 80}ms">
        <span class="card__icon">${r.i}</span><h3>${r.t}</h3><p>${r.d}</p><span class="link-arrow">Open${icon.arrow}</span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBand({ title: 'Still have a question?', text: 'Our engineers answer technical questions every day — no obligation, no sales pressure.' })}
${contactSection()}
`;
