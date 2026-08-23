import { icon, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Tools', href: '/amperage-chart/' }, { label: 'Sizing a Generator' }];

export const meta = {
  path: '/sizing-a-generator/',
  title: 'How to Size a Generator | Generator Sizing Guide UAE',
  description: 'Learn how to size a generator. Rich Motor Company’s generator sizing guide explains kVA, kW, load types and power factors so you choose the right genset.',
  priority: 0.8
};

export const schema = [crumbSchema('/sizing-a-generator/', crumbs)];

const benefits = [
  'Chances of system failure are less or none',
  'Minimal chance of system shutdown due to capacity overload',
  'Increased life of the power generator',
  'Optimum performance from the generator',
  'Cheaper and easier maintenance',
  'Increased life of the connected equipment',
  'Personal safety for the user',
  'Minimal chance of system damage'
];

export const body = `
${pageHero({
  eyebrow: 'Sizing a power generator',
  title: 'How to size a generator properly',
  text: 'Getting the size right is the single most important decision in a generator purchase. Under-size it and it will not do the job — and may damage the equipment it powers.',
  crumbs,
  actions: [{ href: '/contact-us/', label: 'Get a sizing recommendation' }, { href: '/amperage-chart/', label: 'Amperage chart' }]
})}

<section class="section">
  <div class="container">
    <div class="callout" data-reveal style="margin-bottom:2.5rem">
      <p>Note that the information and suggestions here are a general guide, not the advice of a certified engineer or electrician for your specific site. Always speak to a professional before finalising a generator purchase — our engineers are happy to review your load schedule.</p>
    </div>

    <div class="split">
      <div class="prose" data-reveal>
        <span class="eyebrow">Start here</span>
        <h2 class="h-1 mt-0">The three things to establish first</h2>
        <ol class="steps" style="margin-top:1.5rem">
          <li><b>List every item to be powered</b>Everything the generator will supply, including anything that may be added later.</li>
          <li><b>List the operating voltages</b>Record the operating voltage of each item — mixed-voltage sites need a changeover switch, a dual-voltage set or a transformer.</li>
          <li><b>Calculate the power in kVA and kW</b>Both figures matter: kW is real power, kVA is apparent power. Without a stated power factor, 0.8 is the usual approximation.</li>
        </ol>
      </div>
      <div data-reveal>
        <span class="eyebrow">Generators by size</span>
        <h2 class="h-2">Which class of machine do you need?</h2>
        <p class="muted" style="margin-top:1rem">With progress in the industry you can now buy anything from a portable unit to a full power house for an entire building.</p>
        <div class="specs" style="margin-top:1.5rem">
          <div class="spec"><dt>5 kW &ndash; 50 kW</dt><dd>Home generators. Houses and RVs, mid-size offices.</dd></div>
          <div class="spec"><dt>50 kW &ndash; 3 MW</dt><dd>Industrial generators. Large business entities, data centres and buildings, production plants and industrial buildings.</dd></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Deciding the size</span>
      <h2 class="h-1">Starting power vs running power</h2>
      <p class="lede">If the power supplied by your generator is less than required it has no use — and can damage your equipment, raising costs further.</p>
    </div>
    <div class="split">
      <div class="prose" data-reveal>
        <h3 class="mt-0">Calculating starting and running requirements</h3>
        <p>List the starting <em>and</em> running power requirements for every piece of equipment to be powered. Do the calculations early to avoid damage. The required information can be found in three places:</p>
        <ul>
          <li>Identification plates on the equipment</li>
          <li>The owner’s manual supplied with the equipment</li>
          <li>The manufacturer’s website product page</li>
        </ul>
        <h3>Converting amperes into watts</h3>
        <p>Equipment consumption is usually given in amperes. Converting to wattage is straightforward:</p>
        <div class="callout"><p><strong>Resistive load:</strong> Wattage = Amperes × Volts<br><strong>Reactive load:</strong> Wattage = Load factor × (Amperes × Volts)</p></div>
      </div>
      <div class="prose" data-reveal>
        <h3 class="mt-0">Do not size to the standby myth</h3>
        <p>People often buy a small-capacity generator because it is “only” a standby source and does not run all the time. This is the most commonly mis-made decision in generator sizing. Buying without estimating the workload can destroy a new generator, damage the equipment it powers, or limit productivity.</p>
        <p>The saying <strong>“more is always better than less”</strong> also fails here — an oversized set running lightly loaded develops its own problems. Size to the actual duty.</p>
        <h3>Parameters for power calculation</h3>
        <ul>
          <li>Single running motor</li>
          <li>Multiple motors running at the same time</li>
          <li>No electric motor</li>
        </ul>
        <h3>Factors for calculation</h3>
        <ul>
          <li>Type of generator</li>
          <li>Number of appliances powered by the generator</li>
          <li>Schedule for utilising or running the generator</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section deferred">
  <div class="container split">
    <div data-reveal>
      <span class="eyebrow">Generator types</span>
      <h2 class="h-1">Know what you are choosing between</h2>
      <p class="lede" style="margin-top:1rem">Deciding between these can leave a buyer startled — each is rated and specified differently.</p>
      <ul class="ticks ticks--2" style="margin-top:1.75rem">
        <li>Single phase power generator</li>
        <li>Three phase power generator</li>
        <li>kW rated</li>
        <li>kVA rated</li>
        <li>Welder</li>
        <li>Standby</li>
        <li>Motor starting</li>
      </ul>
      <a class="link-arrow" style="margin-top:1.5rem" href="/faq/">What is the difference between kW and kVA?${icon.arrow}</a>
    </div>
    <div data-reveal>
      <span class="eyebrow">The payoff</span>
      <h2 class="h-2">Benefits of buying the right-sized generator</h2>
      <ul class="ticks" style="margin-top:1.5rem">${benefits.map((b) => `<li>${b}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Buying well</span>
      <h2 class="h-1">Purchasing from certified dealers and service providers</h2>
      <p class="lede">A generator is a company asset that maintains fade-free power in emergencies — and is sometimes the primary source of electrical energy. This is the final critical factor, and it deserves to be taken seriously.</p>
    </div>
    <div class="grid grid--2">
      <article class="card card--dark" data-reveal>
        <span class="card__icon">${icon.shield}</span>
        <h3>Full-service dealer vs commissioned broker</h3>
        <p>A full-service dealer owns and tests its inventory. A commissioned broker resells someone else’s. No matter which way you go, confirm what happens after the sale.</p>
      </article>
      <article class="card card--dark" data-reveal style="transition-delay:80ms">
        <span class="card__icon">${icon.wrench}</span>
        <h3>What your dealer must provide</h3>
        <ul class="ticks" style="margin-top:.75rem">
          <li>Full service with various ports</li>
          <li>Qualified mechanics and professionals</li>
          <li>Accurate testing equipment and trained technicians</li>
        </ul>
      </article>
    </div>
  </div>
</section>

${ctaBand({ title: 'Send us your load list', text: 'We will convert it to a kVA requirement, allow for motor starting and recommend a set — no obligation.' })}
${contactSection()}
`;
