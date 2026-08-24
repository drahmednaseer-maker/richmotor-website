import { icon, site, img, pageHero, partnersSection, crumbSchema, localBusinessSchema } from '../layout.mjs';

const crumbs = [{ label: 'Contact Us' }];

export const meta = {
  path: '/contact-us/',
  title: 'Contact Rich Motor Company | Generator Supplier Sharjah UAE',
  description: 'Contact Rich Motor Company in Hamriyah Free Zone, Sharjah UAE. Call +971 6 526 9111, WhatsApp +971 52 846 6669 or email sales@richmotor.com for generators and O&M.',
  priority: 0.9
};

export const schema = [
  crumbSchema('/contact-us/', crumbs),
  localBusinessSchema()
];

const channels = [
  { i: icon.phone, b: 'Office', v: site.phone1, h: site.phone1Href, note: 'Sunday to Thursday, business hours (GST)' },
  { i: icon.whatsapp, b: 'Mobile / WhatsApp', v: site.phone2, h: site.whatsapp, note: 'Fastest route for urgent enquiries' },
  { i: icon.mail, b: 'Email', v: site.email, h: 'mailto:' + site.email, note: 'Send drawings, load lists or specifications' }
];

export const body = `
${pageHero({
  eyebrow: 'Contact us',
  title: 'Speak with us',
  text: 'Whether you are ready to buy, planning an O&M contract or just have a technical question — we are here to help at every step.',
  crumbs,
  actions: [{ href: site.whatsapp, label: 'Message us on WhatsApp' }, { href: site.phone1Href, label: 'Call the office' }]
})}

<section class="section">
  <div class="container">
    <div class="grid grid--3" style="margin-bottom:clamp(2.5rem,5vw,4rem)">
      ${channels.map((c, i) => `<a class="card" href="${c.h}"${c.h.startsWith('http') ? ' target="_blank" rel="noopener"' : ''} data-reveal style="transition-delay:${i * 80}ms">
        <span class="card__icon">${c.i}</span>
        <h2 style="font-size:1.05rem">${c.v}</h2>
        <p style="margin-top:.35rem">${c.b} &middot; ${c.note}</p>
      </a>`).join('\n      ')}
    </div>

    <div class="contact-grid">
      <div data-reveal>
        <span class="eyebrow">Send an enquiry</span>
        <h2 class="h-1">Tell us what you need powered</h2>
        <p class="lede" style="margin-top:1rem">Include the capacity (kVA), the application, the site location and your timeline — the more detail you give, the faster we can come back with a costed answer.</p>
        <form class="form" data-mailto="${site.email}" style="margin-top:2rem" novalidate>
          <div class="form__row">
            <div class="field"><label for="c-first">First name</label><input id="c-first" name="first" type="text" autocomplete="given-name" placeholder="Ahmed" required></div>
            <div class="field"><label for="c-last">Last name</label><input id="c-last" name="last" type="text" autocomplete="family-name" placeholder="Al Mansoori"></div>
          </div>
          <div class="form__row">
            <div class="field"><label for="c-email">Email</label><input id="c-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required></div>
            <div class="field"><label for="c-phone">Phone</label><input id="c-phone" name="phone" type="tel" autocomplete="tel" placeholder="+971 50 000 0000"></div>
          </div>
          <div class="field">
            <label for="c-subject">What do you need?</label>
            <select id="c-subject" name="subject">
              <option value="Diesel generator enquiry">Diesel generator enquiry</option>
              <option value="Soundproof canopy">Soundproof canopy</option>
              <option value="Low voltage / synchronising panels">Low voltage / synchronising panels</option>
              <option value="Mobile lighting tower">Mobile lighting tower</option>
              <option value="Spare parts (Genpac)">Spare parts (Genpac)</option>
              <option value="Service, maintenance &amp; O&amp;M">Service, maintenance &amp; O&amp;M</option>
              <option value="Emergency breakdown">Emergency breakdown</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="field"><label for="c-message">Message</label><textarea id="c-message" name="message" placeholder="Capacity required (kVA), application, site location, timeline…"></textarea></div>
          <button class="btn btn--primary btn--block" type="submit">Send message${icon.arrow}</button>
          <p class="form__note form__status">Your message opens in your email app addressed to ${site.email}. Prefer instant? <a href="${site.whatsapp}" target="_blank" rel="noopener">Message us on WhatsApp</a>.</p>
        </form>
      </div>

      <div data-reveal>
        <div class="media-frame media-frame--wide">
          ${img({ name: 'facility', widths: [900, 1374], w: 1374, h: 529, alt: 'Rich Motor Company head office and factory, Hamriyah Free Zone Phase II, Sharjah', sizes: '(max-width: 860px) 100vw, 50vw' })}
        </div>
        <div style="margin-top:2rem">
          <span class="eyebrow">Head office &amp; factory</span>
          <h2 class="h-2">Hamriyah Free Zone, Sharjah</h2>
          <p class="muted" style="margin-top:1rem">${site.address}</p>
          <ul class="contact-list" style="margin-top:1.5rem">
            <li><a href="${site.phone1Href}"><i>${icon.phone}</i><span><b>Office</b><span>${site.phone1}</span></span></a></li>
            <li><a href="${site.phone2Href}"><i>${icon.phone}</i><span><b>Mobile</b><span>${site.phone2}</span></span></a></li>
            <li><a href="mailto:${site.email}"><i>${icon.mail}</i><span><b>Email</b><span>${site.email}</span></span></a></li>
            <li><div><i>${icon.clock}</i><span><b>Working days</b><span>Sunday &ndash; Thursday</span></span></div></li>
          </ul>
          <div class="btn-row" style="margin-top:1.5rem">
            <a class="btn btn--dark" href="${site.whatsapp}" target="_blank" rel="noopener">${icon.whatsapp}WhatsApp us</a>
            <a class="btn btn--ghost" href="${site.social.linkedin}" target="_blank" rel="noopener">${icon.linkedin}LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark deferred">
  <div class="container">
    <div class="section-head section-head--center" data-reveal>
      <span class="eyebrow">Where we work</span>
      <h2 class="h-1">Supplying, shipping, installing and servicing in 50+ countries</h2>
      <p class="lede">From the UAE we deliver to Saudi Arabia, Iraq, Oman, Qatar, Yemen, Eritrea, Sierra Leone, Burundi, Sudan, Chad, Tanzania, Djibouti and beyond.</p>
    </div>
    <div class="grid grid--4" data-reveal>
      ${[
        { t: 'Sales & specification', d: 'Sizing, quotations and technical submittals for consultants and contractors.', i: icon.file },
        { t: 'Installation & commissioning', d: 'Delivery, positioning, cabling, synchronising and load testing on site.', i: icon.truck },
        { t: 'Service & O&M', d: 'Preventive maintenance contracts and 24/7 emergency call-out cover.', i: icon.headset },
        { t: 'Spare parts', d: 'Original and Genpac parts held in stock for instant delivery.', i: icon.wrench }
      ].map((c) => `<article class="card card--dark"><span class="card__icon">${c.i}</span><h3>${c.t}</h3><p>${c.d}</p></article>`).join('\n      ')}
    </div>
  </div>
</section>

${partnersSection()}
`;
