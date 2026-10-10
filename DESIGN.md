# LunaCam design system

Single source of truth for every value used in `src/`. A value in the code
that isn't listed here is a bug: fix the code or extend this file. The site is
black and white (owner, 2026-10-10), with Inter for all text, as in the
LunaCam app. Photos stay in colour.

## No AI look

Every page is checked against the impeccable.style slop catalogue and the rules
in `~/.claude/CLAUDE.md`. No bylines: a heading goes straight into the content
it names, with no subtitle, tagline, eyebrow or intro sentence. `pnpm check`
enforces what can be checked by code.

## Colour tokens (`src/styles/tokens.css`)

| Token | Value | Use |
|---|---|---|
| `--canvas` | `#FFFFFF` | page background |
| `--surface` | `#F2F2F2` | soft panels, forms, footer |
| `--subtle` | `#E4E4E4` | quiet fills, hover |
| `--line` | `#B8B8B8` | 1px borders |
| `--ink` | `#0A0A0A` | text |
| `--ink-muted` | `#262626` | secondary text |
| `--brand` | `#0A0A0A` | primary buttons |
| `--on-brand` | `#FFFFFF` | text on brand |
| `--link` | `#0A0A0A` | links, focus ring, current page |
| `--lime` | `#FFFFFF` | accent on the dark stage |
| `--on-lime` | `#0A0A0A` | text on the accent |
| `--stage` | `#0A0A0A` | the dark sections |
| `--stage-ink` | `#FFFFFF` | text on stage |
| `--stage-muted` | `#E0E0E0` | secondary text on stage |
| `--stage-line` | `#5C5C5C` | borders on stage |
| `--error` | `#B3261E` | form errors |

Print only: `#FFFFFF` background, `#000000` text.
Theme colour meta: `#FFFFFF`. The site is light only.

## Type

- Inter (variable, self-hosted) for headings, body, buttons and navigation.
  Source Serif 4 for blog and legal reading text only.
- Display (home hero): `clamp(2.25rem, 1.2rem + 4.2vw, 4.5rem)`, line height 1.04.
- h1: `clamp(2.25rem, 1.5rem + 3vw, 3.5rem)`; h2: `clamp(1.75rem, 1.3rem + 1.8vw, 2.5rem)`; h3: 22px.
- Body 18px (16px under 480px), line height 1.5. Secondary 16px. Floor 14px.
- Headings weight 600, line height 1.12, `text-wrap: balance`. Letter spacing 0
  everywhere. Sentence case. No uppercase text.
- Long text measure: 680px.

## Space

Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px (`--space-1` to `--space-10`).
Sections: 96px vertical (64px on phones); tight sections 64px (48px).
Max width 1200px; gutter 16px, 32px from 768px.

## Shape

Radius 8px (controls), 12px (panels). Inline code 4px. Borders 1px. No
`box-shadow`, no gradients, no blur.

## Motion

- Colour, background and border transitions: 150ms, `cubic-bezier(0.2, 0, 0, 1)`.
- Section entrance: opacity plus 8px translate, 250ms, only for content below
  the first screen, never hides content without JS.
- Event lists reveal one line at a time when they scroll into view.
- No scroll-linked fading or dimming: content is at full strength once it is on screen.
- `prefers-reduced-motion: reduce` turns all of it off.

## Demos

The camera grid, timeline and event lists on product pages are examples of the
screens, labelled "Example". They are not customer data and carry no
testimonials.
