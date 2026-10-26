// What the site-kit package reads from this site beyond the constants in
// config/site.ts: header, footer, share cards, llms.txt and blog wording.
import type { SiteKit } from '@ninjainfosys/site-kit/contract';
import fontGeist from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url';
import fontManrope from '@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?url';
import { products } from '../data/products';
import { solutions } from '../data/solutions';
import { footerColumns } from '../data/nav';
import { APP_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, SITE_URL } from './site';

export const kit: SiteKit = {
  blog: {
    label: 'Insights',
    name: 'LunaCam blog',
    description: 'Guides on CCTV cameras, DVRs, recordings and evidence in Nepal: remote viewing, alerts, the Privacy Act, 2075 and running sites at scale.',
    rssDescription: 'Guides on CCTV cameras, DVRs, recordings and evidence in Nepal.',
    pageDescription: (n, last) => `Older LunaCam guides on CCTV cameras, DVRs and recordings in Nepal. Page ${n} of ${last}.`,
    tagDescription: (label) => `LunaCam articles about ${label.toLowerCase()}: practical guides on CCTV cameras, DVRs and recordings in Nepal.`,
    about: 'CCTV and video surveillance in Nepal',
    imageCredit: 'LunaCam',
  },
  seo: {
    hreflang: 'en-np',
    ogLocale: 'en_US',
    logo: '/brand/lunacam-mark.png',
    contactPoint: { contactType: 'sales', areaServed: 'NP', availableLanguage: ['en', 'ne'] },
  },
  head: {
    preloadFonts: [fontGeist, fontManrope],
    icons: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    manifest: '/manifest.json',
  },
  header: {
    homeLabel: 'LunaCam home',
    logo: { light: '/brand/lunacam-lockup.svg', dark: '/brand/lunacam-lockup-light.svg', alt: '', width: 46, height: 43, text: 'lunacam' },
    utility: {
      lead: { href: CONTACT_PHONE_TEL, text: 'Questions? ', mono: CONTACT_PHONE_DISPLAY },
      links: [
        { href: '/resellers', label: 'Installers' },
        { href: '/contact', label: 'Contact' },
        { href: `${APP_URL}/login`, label: 'Sign in' },
      ],
    },
    groups: [
      {
        id: 'products',
        label: 'Products',
        base: '/products',
        links: products.map((p) => ({ href: `/products/${p.slug}`, label: p.name })),
        feature: { title: 'See it on your own cameras', href: '/demo', cta: 'Book a walkthrough' },
      },
      {
        id: 'solutions',
        label: 'Solutions',
        base: '/solutions',
        links: solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.name })),
        feature: { title: 'Install LunaCam for your customers', href: '/resellers', cta: 'Become an installer partner' },
      },
    ],
    plain: [
      { href: '/blog', label: 'Insights' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
    ],
    action: { href: '/demo', label: 'Book a walkthrough' },
    mobileLinks: [
      { href: '/resellers', label: 'Installers' },
      { href: `${APP_URL}/login`, label: 'Sign in' },
    ],
    mobileCall: { href: CONTACT_PHONE_TEL, label: 'Call us' },
  },
  footer: {
    mark: { src: '/brand/lunacam-mark.svg', width: 60, height: 56, text: 'lunacam' },
    legal: 'company',
    columns: footerColumns,
  },
  cta: {
    heading: 'See it on your own cameras',
    actions: [
      { href: '/demo', label: 'Book a walkthrough', class: 'btn-lime' },
      { href: CONTACT_PHONE_TEL, label: `Call ${CONTACT_PHONE_DISPLAY}`, class: 'btn-secondary' },
    ],
  },
  og: {
    background: '#FFFFFF',
    ink: '#0A0A0A',
    muted: '#262626',
    font: { family: 'Inter', package: 'inter' },
    name: { text: 'lunacam', size: 52, weight: 700 },
    mark: { file: 'brand/lunacam-mark.svg', width: 96, height: 90 },
    pages: () => [
      { slug: 'index', title: 'Your cameras. Your footage. Your country.' },
      { slug: 'demo', title: 'Book a walkthrough' },
      { slug: 'resellers', title: 'Install LunaCam for your customers' },
      { slug: 'contact', title: 'Contact LunaCam' },
      { slug: 'pricing', title: 'Start free. Pay for what you add.' },
      { slug: 'thanks', title: 'Thanks, we have your details' },
      { slug: 'blog', title: 'LunaCam blog' },
      { slug: 'terms', title: 'Terms of service' },
      { slug: 'privacy', title: 'Privacy policy' },
      { slug: 'delete-account', title: 'Delete your account' },
      { slug: '404', title: 'Page not found' },
      ...products.map((p) => ({ slug: `products/${p.slug}`, title: p.headline })),
      ...solutions.map((s) => ({ slug: `solutions/${s.slug}`, title: s.headline })),
    ],
  },
  glossary: {
    name: 'LunaCam glossary of CCTV and camera terms',
    ogTitle: 'CCTV and camera glossary',
    indexTitle: 'Glossary: DVR, NVR, ONVIF, RTSP and CCTV terms explained',
    indexDescription: 'Plain definitions of the CCTV terms people meet when choosing a camera system: DVR, NVR, ONVIF, RTSP, port forwarding, CGNAT, PTZ and retention.',
  },
  llms: {
    description: 'LunaCam is a Nepal-hosted camera platform. It lets homes, shops, banks and municipalities watch any Hikvision, Dahua, ONVIF or RTSP camera and DVR from a phone, with video, passwords and recordings kept in Nepal. It includes alerts, playback, evidence export and a developer platform.',
    facts: [
      `- Contact: ${CONTACT_EMAIL}, ${CONTACT_PHONE_DISPLAY}`,
      '- Pricing: live view and DVR playback are free to start; paid plans are priced by camera count and retention, ask for a quote',
    ],
    before: () => [
      { title: 'Products', items: products.map((p) => `- [${p.name}](${SITE_URL}/products/${p.slug}): ${p.short}`) },
      { title: 'Solutions', items: solutions.map((s) => `- [${s.name}](${SITE_URL}/solutions/${s.slug}): ${s.short}`) },
    ],
    after: () => [
      {
        title: 'Company',
        items: [
          `- [Book a walkthrough](${SITE_URL}/demo)`,
          `- [Installers](${SITE_URL}/resellers)`,
          `- [Contact](${SITE_URL}/contact)`,
          `- [Privacy](${SITE_URL}/privacy)`,
          `- [Terms](${SITE_URL}/terms)`,
        ],
      },
    ],
  },
};
