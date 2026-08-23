/* Shared site data: nav, contact details, partners */

export const site = {
  name: 'Rich Motor Company',
  short: 'RMC',
  domain: 'https://richmotor.com',
  tagline: 'Diesel generator manufacturer & power solutions provider — UAE, Middle East & Africa',
  phone1: '+971 6 526 9111',
  phone1Href: 'tel:+97165269111',
  phone2: '+971 52 846 6669',
  phone2Href: 'tel:+971528466669',
  whatsapp: 'https://wa.me/971528466669',
  email: 'sales@richmotor.com',
  address: 'Rich Motor Company (FZE), Hamriyah Free Zone (Phase II), Sharjah — United Arab Emirates',
  addressShort: 'Hamriyah Free Zone Phase II, Sharjah, UAE',
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

export const partners = [
  { name: 'Cummins', img: 'partner-cummins', w: 300, h: 130 },
  { name: 'Kubota', img: 'partner-kubota', w: 300, h: 130 },
  { name: 'John Deere', img: 'partner-johndeere', w: 300, h: 130 },
  { name: 'Leroy-Somer', img: 'partner-leroysomer', w: 300, h: 130 },
  { name: 'Genpac', img: 'partner-genpac', w: 300, h: 130 },
  { name: 'Deep Sea Electronics', img: 'partner-dse', w: 450, h: 150 }
];
