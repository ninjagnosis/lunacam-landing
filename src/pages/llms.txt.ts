import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { products } from '../data/products';
import { solutions } from '../data/solutions';
import { published } from '../lib/blog';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_URL } from '../config/site';

// Generated from the same data as the pages, so it never drifts.
export async function GET(_: APIContext) {
  const posts = published(await getCollection('blog'));
  const out = [
    '# LunaCam',
    '',
    '> LunaCam is a Nepal-hosted camera platform. It lets homes, shops, banks and municipalities watch any Hikvision, Dahua, ONVIF or RTSP camera and DVR from a phone, with video, passwords and recordings kept in Nepal. It includes alerts, playback, evidence export and a developer platform.',
    '',
    `- Contact: ${CONTACT_EMAIL}, ${CONTACT_PHONE_DISPLAY}`,
    '- Pricing: live view and DVR playback are free to start; paid plans are priced by camera count and retention, ask for a quote',
    '',
    '## Products',
    '',
    ...products.map((p) => `- [${p.name}](${SITE_URL}/products/${p.slug}): ${p.short}`),
    '',
    '## Solutions',
    '',
    ...solutions.map((s) => `- [${s.name}](${SITE_URL}/solutions/${s.slug}): ${s.short}`),
    '',
    '## Blog',
    '',
    ...(posts.length ? posts.map((p) => `- [${p.data.title}](${SITE_URL}/blog/${p.id}): ${p.data.description}`) : ['- No posts yet']),
    '',
    '## Company',
    '',
    `- [Book a walkthrough](${SITE_URL}/demo)`,
    `- [Installers](${SITE_URL}/resellers)`,
    `- [Contact](${SITE_URL}/contact)`,
    `- [Privacy](${SITE_URL}/privacy)`,
    `- [Terms](${SITE_URL}/terms)`,
    '',
  ];
  return new Response(out.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
