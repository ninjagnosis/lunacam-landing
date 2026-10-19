// Settings for the `site-kit` commands (check, sitemap, indexnow, redirects).
// Single source for every redirect on lunacam.app. The site is English-only
// with no trailing slashes; auth lives in the app.
const SITE = 'https://lunacam.app';
const APP = 'https://app.lunacam.app';

const AUTH = ['login', 'register', 'forgot-password', 'reset-password'];

/** Old path (exact, as it was served) -> new target. */
const exact = (() => {
  const m = new Map();
  const both = (old, to) => {
    for (const prefix of ['', '/ne', '/en']) {
      const base = `${prefix}${old}`;
      m.set(base === '' ? '/' : base, to);
      if (base !== '' && !base.endsWith('/')) m.set(`${base}/`, to);
    }
  };
  // Locale roots.
  m.set('/ne', '/'); m.set('/ne/', '/');
  m.set('/en', '/'); m.set('/en/', '/');
  // Pages with a trailing slash or a locale prefix go to the plain page.
  for (const p of ['/pricing', '/contact', '/privacy', '/terms', '/demo', '/resellers']) both(p, p);
  // Sitemap names Astro integrations write.
  m.set('/sitemap-index.xml', '/sitemap.xml');
  m.set('/sitemap-0.xml', '/sitemap.xml');
  // Auth lives in the app.
  for (const a of AUTH) both(`/${a}`, `${APP}/${a}`);
  // The current site's own pages are never redirected to themselves.
  for (const [k, v] of m) if (k === v) m.delete(k);
  return m;
})();

export default {
  site: SITE,
  redirects: {
    exact,
    nginx: { share: ['', '# Share links keep their token.', `location ~ ^/(?:ne/|en/)?share/(.+)$ { return 301 ${APP}/share/$1; }`] },
    cloudflare: {
      tail: [
        `/share/* ${APP}/share/:splat 301`,
        `/en/share/* ${APP}/share/:splat 301`,
        `/ne/share/* ${APP}/share/:splat 301`,
        // `/en` and `/ne` were indexed by Google: every URL under them goes to the same page without the prefix.
        '/en/* /:splat 301',
        '/ne/* /:splat 301',
      ],
    },
  },
};
