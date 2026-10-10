// One 1200x630 share image per page: the page's title on the LunaCam night
// blue with the moon mark. Built at build time with satori and resvg.
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import satori from 'satori';

// resvg is a native addon. Loading it with require at run time keeps Vite
// from trying to bundle its .node binary (which fails on Linux builders).
const { Resvg } = createRequire(import.meta.url)('@resvg/resvg-js') as typeof import('@resvg/resvg-js');
import { products } from '../../data/products';
import { solutions } from '../../data/solutions';
import { glossary } from '../../data/glossary';

const font = (w: number) => readFileSync(`node_modules/@fontsource/inter/files/inter-latin-${w}-normal.woff`);
const cloud = `data:image/svg+xml;base64,${Buffer.from(readFileSync('public/brand/lunacam-mark.svg', 'utf8')).toString('base64')}`;

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const pages: { slug: string; title: string }[] = [
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
    { slug: 'glossary', title: 'CCTV and camera glossary' },
    ...glossary.map((t) => ({ slug: `glossary/${t.slug}`, title: t.full ? `${t.term}: ${t.full}` : t.term })),
    ...posts.map((p) => ({ slug: `blog/${p.id}`, title: p.data.title })),
    ...[...new Set(posts.flatMap((p) => p.data.tags))].map((t) => ({ slug: `blog/tag/${t}`, title: `${t.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase())} articles` })),
  ];
  const n = Math.ceil(posts.length / 10);
  for (let i = 2; i <= n; i++) pages.push({ slug: `blog/page/${i}`, title: `LunaCam blog, page ${i}` });
  return pages.map((p) => ({ params: { slug: p.slug }, props: { title: p.title } }));
}

export async function GET({ props }: APIContext) {
  const { title } = props as { title: string };
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: { width: 1200, height: 630, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#0A0A0A', color: '#FFFFFF', fontFamily: 'Inter' },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 20 },
              children: [
                { type: 'img', props: { src: cloud, width: 72, height: 72 } },
                { type: 'div', props: { style: { fontSize: 40, fontWeight: 600 }, children: 'LunaCam' } },
              ],
            },
          },
          { type: 'div', props: { style: { fontSize: title.length > 40 ? 64 : 80, fontWeight: 600, lineHeight: 1.1, maxWidth: 1000 }, children: title } },
          { type: 'div', props: { style: { fontSize: 30, color: '#BFBFBF' }, children: 'lunacam.app' } },
        ],
      },
    },
    { width: 1200, height: 630, fonts: [{ name: 'Inter', data: font(400), weight: 400 }, { name: 'Inter', data: font(600), weight: 600 }] },
  );
  const png = new Resvg(svg).render().asPng();
  return new Response(png, { headers: { 'content-type': 'image/png' } });
}
