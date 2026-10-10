# LunaCam landing site

lunacam.app marketing site. Astro, static output, built the same way as
airfone-landing-site and epahichan-public-landing: data files drive the product,
solution, glossary and blog pages, with a `pnpm check` audit and tests.

```sh
pnpm install
pnpm dev        # http://localhost:4361
pnpm build      # dist/ plus sitemap.xml
pnpm check      # audits dist/ (SEO, a11y, design tokens, copy rules)
pnpm test       # unit tests
pnpm qa         # test, build, check
```

## Where things are

- `src/data/`: products, solutions, plans, prices, glossary, feeds (demo content), nav, links.
- `src/content/blog/`: posts as Markdown; the schema is `src/lib/blog-schema.ts`.
- `src/components/demos/`: the camera grid, timeline and event-feed examples.
- `src/components/legal/`: privacy, terms, delete-account text.
- `DESIGN.md`: every colour, type and spacing value. Black and white, Inter.
- `scripts/redirects.mjs`: writes `public/_redirects` and `docs/nginx-redirects.conf`.

## Not set yet

- Prices: `src/data/prices.ts` is empty and `/pricing` shows plans only.
- Lead endpoint: set `PUBLIC_LEAD_API_URL`; until then the forms open an email.
- Social profiles: `SOCIAL_PROFILES` in `src/config/site.ts`.
- Legal text was written from `lunacam/docs/data-residency.md` and needs a lawyer's review.
- Testimonials: `src/data/testimonials.ts` stays empty until a customer approves a quote.
