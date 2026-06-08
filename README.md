# Varish Valleti — Portfolio

A research-led, non-template personal portfolio for **Varish Valleti**, full-stack
software engineer. The brief: a **designer-grade aesthetic** carrying **developer
content**. Creative direction — **"Warm Signal"**: warm editorial light theme,
expressive serif display, a numbered typographic work index (no cards), and
intentional motion.

**Live:** _https://… (set after first Vercel deploy)_

---

## Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router, `output: 'export'`) | Static, portable, great SEO |
| Language | **TypeScript** | Type-safe content + components |
| Motion | **GSAP** (ScrollTrigger, Flip) + **Lenis** | Mask reveals, scroll reveals, smooth scroll |
| Styling | **CSS Modules** + design tokens | No utility framework → no generic look |
| Type | **Newsreader** (display) · **Hanken Grotesk** (body) · **JetBrains Mono** (labels) | Editorial, distinctive (self-hosted via `next/font`) |
| Content | Typed modules in `content/` | Single source of truth, edited in one place |

No Tailwind, no Three.js, no Framer Motion — kept deliberately lean for performance.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static export → ./out
npm run serve      # preview the production export at http://localhost:4173
```

## Deploy to Vercel

The project is a static export, so any static host works. For Vercel:

```bash
# one-time, if needed:
npx vercel login

# preview deploy:
npx vercel

# production deploy:
npx vercel --prod
```

Vercel auto-detects Next.js and serves the static `out/` build. After the first
deploy, set the live URL in `app/layout.tsx` (`SITE_URL`) and in this README, then
redeploy so Open Graph / canonical metadata point at the real domain.

Alternatively, connect the GitHub repo at vercel.com → New Project → Import.

## Editing content

All copy and data live in `content/`:

- `profile.ts` — name, role, headline, contact, hero metrics
- `projects.ts` — the five case studies (problem → diagnosis → fix → impact)
- `skills.ts` — full-stack capability map
- `experience.ts` — roles & education
- `log.ts` — achievement log entries

Update a value and the site updates everywhere it's used.

## Structure

```
app/                  routes (/, /work/[slug]) + layout, globals, metadata
components/
  hero/               editorial hero (mask reveal, marquee)
  work/               numbered project index
  about/ skills/      about (treated photo) + capability map
  experience/ contact/  timeline + contact footer
  ui/  motion/        header, section header, smooth scroll, reveal helpers
content/              typed content modules
styles/tokens.css     design tokens (color, type, spacing, motion)
docs/                 research reports + design docs
public/               résumé PDF, processed images
```

## Accessibility & performance

- Semantic landmarks, ordered headings, keyboard-complete navigation
- Visible focus states; smooth-scroll & all motion disabled under
  `prefers-reduced-motion`
- Real `alt` text; AA-contrast text on the warm paper background
- Static export + self-hosted subset fonts + pre-sized images for fast loads

---

Designed & built with Next.js, GSAP, and Newsreader. © 2026 Varish Valleti.
