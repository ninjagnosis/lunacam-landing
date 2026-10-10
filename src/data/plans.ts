// Plans shown on /pricing. Prices are not public yet: leave `price` unset and
// the card shows "Priced for your cameras". When prices are set, fill
// `price` and `per` (e.g. "a month").
export interface Plan {
  id: string;
  name: string;
  /** Who it is for, one line. */
  for: string;
  /** What you get, in a few words; the card's big line. */
  pitch: string;
  price?: string;
  per?: string;
  cta: { label: string; href: string };
  /** Plan this one builds on, shown as "Everything in X, plus". */
  builds?: string;
  features: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    for: 'Homes and small shops.',
    pitch: 'Live view and DVR playback at no cost',
    price: 'Free',
    cta: { label: 'Get started', href: '/contact' },
    features: ['Live view for any brand', 'Playback from your DVR', 'Alerts with a picture'],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    for: 'More cameras, and footage kept in the cloud.',
    pitch: 'Cloud retention and smart alerts',
    cta: { label: 'Get a quote', href: '/contact' },
    builds: 'Free',
    features: ['Cloud retention, 7 to 365 days', 'Priced by camera count', 'AI features as they roll out'],
    featured: true,
  },
  {
    id: 'institution',
    name: 'Institution',
    for: 'Banks, municipalities and multi-site operators.',
    pitch: 'Every site on one console',
    cta: { label: 'Book a walkthrough', href: '/demo' },
    builds: 'Cloud',
    features: ['Organisations, roles and audit log', 'Evidence and case management', 'API, webhooks and a named contact'],
  },
];

/** Extras any plan can add. */
export const addons = [
  { name: 'LunaCam Box', href: '/products/lunacam-box', what: 'Connects your cameras with no router settings.' },
  { name: 'Developer Platform', href: '/products/developer-platform', what: 'API, webhooks, embeddable player and SDKs.' },
  { name: 'Installer program', href: '/resellers', what: 'Dealer pricing and recurring revenue for installers.' },
];

export const pricingFaq = [
  { q: 'Is anything free?', a: 'Yes. Live view and DVR playback through LunaCam are free to start.' },
  { q: 'How are paid plans priced?', a: 'By camera count, cloud retention days and AI features. Tell us what you need and we quote it in Nepali rupees.' },
  { q: 'Do I need to buy hardware?', a: 'No. You can install the agent as software on a PC or NVR host. The LunaCam Box is a small box if you prefer one.' },
  { q: 'Do I need new cameras?', a: 'No. Hikvision, Dahua and any ONVIF or RTSP camera or recorder work.' },
  { q: 'Can I start small?', a: 'Yes. Start with live view on the free plan and add cloud retention for the cameras that matter.' },
  { q: 'Can I see it first?', a: 'Yes. Book a walkthrough and we show it on your own cameras.' },
];
