/* Shared site data: nav, contact details, partners */

export const site = {
  name: 'Rich Motor Company',
  short: 'RMC',
  /* Canonical/og/sitemap host. Defaults to the live domain; set SITE_URL in the
     Vercel project to point these at a different host (e.g. a staging URL). */
  domain: (process.env.SITE_URL || 'https://richmotor.com').replace(/\/$/, ''),
  tagline: 'Diesel generator manufacturer & power solutions provider — UAE, Middle East & Africa',
  phone1: '+971 6 526 9111',
  phone1Href: 'tel:+97165269111',
  phone2: '+971 52 846 6669',
  phone2Href: 'tel:+971528466669',
  whatsapp: 'https://wa.me/971528466669',
  email: 'sales@richmotor.com',
  address: 'Rich Motor Company (FZE), Hamriyah Free Zone (Phase II), Sharjah — United Arab Emirates',
  addressShort: 'Hamriyah Free Zone Phase II, Sharjah, UAE',
  /* Structured location for local SEO + schema. Coordinates are approximate to
     Hamriyah Free Zone Phase II — replace lat/lng with the exact pin from the
     company's Google Business Profile for best local-pack accuracy. */
  place: {
    street: 'Hamriyah Free Zone, Phase II',
    locality: 'Sharjah',
    region: 'Sharjah',        // emirate
    regionCode: 'AE-SH',      // ISO 3166-2 for Sharjah
    country: 'AE',
    countryName: 'United Arab Emirates',
    lat: 25.4715,
    lng: 55.4890
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=25.4715%2C55.4890',
  /* Emirates / cities targeted — used for schema areaServed */
  areasServed: ['Dubai', 'Sharjah', 'Abu Dhabi', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
  /* Opening hours. Days come from the site copy (Sunday–Thursday); CONFIRM the
     exact open/close times against the Google Business Profile before relying
     on them — wrong hours in search results send customers to a closed office. */
  hours: { days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '18:00' },
  social: {
    facebook: 'https://web.facebook.com/RICHMOTORCOMPANYFZE/',
    linkedin: 'https://www.linkedin.com/company/rich-motor-company-fze-uae/',
    instagram: 'https://www.instagram.com/richmotorcompanyfze/'
  }
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/profile/' },
  { label: 'Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  {
    label: 'Products', children: [
      { label: 'Diesel Generators UAE', href: '/diesel-generators-uae/' },
      { label: 'Kubota Generator & Genset', href: '/kubota-generator-and-genset/' },
      { label: 'Cummins Generator & Genset', href: '/cummins-generator-and-genset/' },
      { label: 'John Deere Generator & Genset', href: '/john-deere-generator-and-genset/' },
      { label: 'Sound Proof Canopy UAE', href: '/sound-proof-canopy-uae/' },
      { label: 'Mobile Lighting Towers', href: '/mobile-lighting-towers/' },
      { label: 'Low Voltage Panels', href: '/low-voltage-panels/' },
      { label: 'Aftersale Support', href: '/aftersale-support/' }
    ]
  },
  {
    label: 'Tools', children: [
      { label: 'Amperage Chart', href: '/amperage-chart/' },
      { label: 'Sizing a Generator', href: '/sizing-a-generator/' },
      { label: 'Testing & Inspection Process', href: '/testing-and-inspection-process/' },
      { label: 'Voltage Configuration', href: '/voltage-configuration/' },
      { label: 'FAQ', href: '/faq/' }
    ]
  }
];

/* Logos are auto-trimmed of their white padding and normalised to 120px tall,
   so widths differ. The strip caps both dimensions for even optical weight. */
export const partners = [
  { name: 'Cummins', img: 'partner-cummins', w: 188, h: 120 },
  { name: 'Kubota', img: 'partner-kubota', w: 477, h: 120 },
  { name: 'John Deere', img: 'partner-johndeere', w: 274, h: 120 },
  { name: 'Leroy-Somer', img: 'partner-leroysomer', w: 269, h: 120 },
  { name: 'Genpac', img: 'partner-genpac', w: 225, h: 120 },
  { name: 'Deep Sea Electronics', img: 'partner-dse', w: 120, h: 120 }
];
