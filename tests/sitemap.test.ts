import { describe, expect, it } from 'vitest';
import { pathFor, readPage, exclusion, toXml, validate, day } from '../scripts/sitemap.mjs';

const page = (head: string, body = '') => `<html><head>${head}</head><body><main>${body}</main></body></html>`;

describe('sitemap', () => {
  it('maps dist files to clean paths', () => {
    expect(pathFor('index.html')).toBe('/');
    expect(pathFor('blog/x.html')).toBe('/blog/x');
    expect(pathFor('blog/index.html')).toBe('/blog');
  });
  it('leaves out noindex, missing or foreign canonicals', () => {
    const ok = readPage(page('<link rel="canonical" href="https://lunacam.app/demo">'), '/demo');
    expect(exclusion(ok)).toBeNull();
    expect(exclusion(readPage(page('<link rel="canonical" href="https://lunacam.app/demo"><meta name="robots" content="noindex, follow">'), '/demo'))).toBe('noindex');
    expect(exclusion(readPage(page(''), '/demo'))).toBe('no canonical');
    expect(exclusion(readPage(page('<link rel="canonical" href="https://lunacam.app/other">'), '/demo'))).toMatch(/canonical points/);
    expect(exclusion(readPage(page('<link rel="canonical" href="https://lunacam.app/404">'), '/404'))).toBe('not a page');
  });
  it('collects absolute on-site images only', () => {
    const p = readPage(page('<meta property="og:image" content="https://lunacam.app/og/a.png">', '<img src="/assets/a.webp"><img src="https://cdn.x/b.png"><img src="data:x">'), '/a');
    expect(p.images).toEqual(['https://lunacam.app/og/a.png', 'https://lunacam.app/assets/a.webp']);
  });
  it('escapes XML and rejects bad entries', () => {
    expect(toXml([{ loc: 'https://lunacam.app/a&b', lastmod: '2026-10-01', images: [] }])).toContain('a&amp;b');
    const bad = [
      { loc: 'https://lunacam.app/x/', lastmod: '2026-1-1', images: ['https://lunacam.app/gone.png'] },
      { loc: 'https://lunacam.app/x/', lastmod: '2999-01-01', images: [] },
      { loc: 'http://other.com/Y?q', lastmod: null, images: [] },
    ];
    const errs = validate(bad, '', () => false).join('\n');
    for (const m of ['duplicate', 'trailing slash', 'bad lastmod', 'future lastmod', 'missing image', 'foreign', 'query', 'uppercase', 'home page missing']) expect(errs).toContain(m);
  });
  it('dates are day precision', () => expect(day('2026-10-08T12:00:00Z')).toBe('2026-10-08'));
});
