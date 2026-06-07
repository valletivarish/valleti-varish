# System Trace — Design Doc

**Subject:** Varish Valleti — backend & distributed-systems engineer.
**Inputs:** [Research report](../research/2026-06-08-design-research.md) · [Content model](../content/content-model.md) · `Varish_Valleti_Resume.pdf`
**Status:** ⚠️ SUPERSEDED. This early "System Trace" concept (dark observability /
terminal aesthetic) was set aside once the brief sharpened to a **designer-grade
editorial aesthetic carrying developer content, positioned full-stack** (not
backend-only). The shipped direction is **"Warm Signal"** — warm editorial light
theme, Fraunces serif display, a numbered typographic work index. See the
[README](../../README.md) and the [designer-direction research](../research/2026-06-08-designer-direction.md).
The anti-trope analysis and technique catalog below still informed the final build.

---

## 1. Concept

- **Name:** *System Trace*.
- **One sentence:** A personal portfolio organized as a live distributed-systems **trace** — where each span of the trace is a domain of Varish's engineering, and opening a span reveals the case-file behind the metric.
- **Visual metaphor:** an observability surface (trace waterfall, latency curves, log stream, query plans) rendered with editorial restraint — *not* a Grafana clone.
- **Interaction metaphor:** you're an operator inspecting a healthy system. You read its vitals, follow a trace, expand a span, read the incident behind it.
- **Layout philosophy:** time and causality, not a grid. Spans are placed on a timeline; weight is earned by impact, not equalized by a card.
- **Motion philosophy:** motion reveals *meaning* (a span expanding into its story, a latency bar collapsing from 15s to 3s) — never decoration.
- **Typography philosophy:** monospace is the system's voice (data, labels, traces); a grotesque display carries the editorial headlines; a clean grotesque carries readable prose.
- **Content hierarchy (dual-audience):** every screen is skimmable by a non-technical hiring manager (name, role, big metrics, plain-language outcomes) with technical depth one interaction away for engineers.

**Why this beats cards:** the *structure itself explains the work*. A trace waterfall authored by someone who cut p-worst latency 80% is itself evidence of systems literacy. Cards would flatten cause-and-effect into equal rectangles; a trace preserves it.

---

## 2. Why this direction (research-backed)

From the research synthesis, *System Trace* scored highest across uniqueness, memorability, storytelling, and feasibility because **form and content are inseparable**. Guardrails the research surfaced, now baked in:

- The "dev-tool aesthetic" (dark + mono) is now itself a template → **differentiate structurally** with a real trace waterfall and domain spans, not just a dark theme.
- Avoid Grafana-clone literalism → **editorial intent**: every data artifact is chosen to *communicate one idea*, with generous whitespace and typographic hierarchy.
- Closest precedent: Darkroom Engineering's live activity log → validates a **live log stream** as a design element.
- Reduced-motion is non-negotiable → every animation has a static fallback.

---

## 3. Design principles (applied)

1. **Text is architecture.** Headlines and labels build the space; the trace is typographic before it is graphic.
2. **Motion reveals meaning.** Each animation maps to a real idea (latency dropping, a span opening, a request flowing). No ambient fades.
3. **Projects are artifacts, not cards.** Spans, case-files, query plans, config blocks — never rectangles in a grid.
4. **Exploratory but never confusing.** The trace is the map; an always-present span rail + skip links keep orientation. A hiring manager never has to "figure it out."
5. **Every layout has a spatial reason.** Horizontal = time; vertical depth = drill-down; indentation = causality.
6. **Curated minimalism.** Restraint reads as confidence: one accent, lots of black, precise type.
7. **Interaction rewards curiosity** but never hides essentials behind hover-only gates (tap/focus parity).
8. **Mobile preserves the concept.** The waterfall becomes a vertical trace; spans stack as expandable rows — still a trace, not generic cards.
9. **Performance is luxury.** SVG/DOM over WebGL; GSAP over heavy libs; static export; 60fps target.
10. **Accessibility is non-negotiable.** Semantic HTML, keyboard-complete, AA+ contrast, reduced-motion, real focus states.

---

## 4. Information architecture — the trace

Single-page primary experience (`/`) + static case-study routes (`/work/[slug]/`) for depth, SEO and shareable links.

**The root trace:** `GET /varish-valleti` → child spans (the domains, drawn from real work):

| Span | Domain | Backing story | Headline metric |
|---|---|---|---|
| `latency.optimize` | **Performance** | The 15-second query (CS-1) | 15s → <3s (−80%) |
| `config.onboard` | **Config-driven systems** | 12-product onboarding (CS-2) | 12 products, 0 code changes |
| `incident.recover` | **Reliability / incidents** | 3,000-policy incident (CS-3) | 3,000+ policies restored |
| `concurrency.safe` | **Concurrency** | TicketHub seat reservation (CS-4) | no double-booking |
| `journey.prefill` | **Product impact** | 90% prefilled journey (CS-5) | 90% of 6 stages prefilled |

**Page order (one continuous surface):**
1. **Entry / Hero** — system vitals + the root trace (the spans, live).
2. **Work / Trace detail** — the spans as an interactive waterfall; selecting one expands (GSAP Flip) into a preview and links to the full case-file.
3. **Selected case study** — `/work/[slug]/`, the case-file editorial.
4. **About / Operator** — manifesto + treated photo + the real award artifact.
5. **Skills / Stack** — runtime/dependency map (no icon cards).
6. **Experience / Deploy log** — career as a changelog/deployment history.
7. **Contact / Status** — availability, links, resume, timezone.

Each section is addressable (`#work`, `#about`, …) with a minimal fixed **span rail** for navigation + a skip link.

---

## 5. Component system (the 5 non-card alternatives, mapped)

1. **Trace Waterfall** (replaces project grid) — horizontal spans on a timeline; each row: span name (mono), domain, duration bar (stylized, impact-weighted), status `✓`, latency/metric. Hover/focus lifts + shows a sparkline; click expands.
2. **Span → Case-File reveal** (replaces card click-through) — GSAP Flip morphs the selected span into a header; the case-file unfolds beneath: Problem → Diagnosis → Fix → Impact, with metadata rail.
3. **Latency / metric artifacts** (replaces stat icons) — before/after bars, a count-up to the metric, a tiny distribution curve. The data *is* the visual.
4. **Log Stream** (replaces "fade-in filler") — a quietly scrolling, real, human-readable log of achievements/contributions (Darkroom-style), pausable, reduced-motion-static.
5. **Stack/Runtime map** (replaces skill icon cards) — skills as a dependency graph / service list grouped by layer (languages, backend, data, cloud, ops), with emphasis weighting on core strengths.

Supporting: **Deploy-log timeline** (experience as changelog), **Config block** (YAML-styled editorial surface for the about/manifesto), **status chip** (online/availability).

---

## 6. Design tokens

### Typography (self-hosted via `next/font/google`, variable, swap)
- **Display — Bricolage Grotesque** (variable): hero name, section headers. Distinctive, editorial; avoids Inter/Helvetica generic.
- **Mono — JetBrains Mono** (variable): the system voice — labels, metadata, metrics, trace, nav, code, captions.
- **Body — Hanken Grotesk** (variable): readable prose (about, case-study body).

Fluid scale (clamp, viewport-aware):
`--fs-display` clamp(2.6rem, 8vw, 7.5rem) · `--fs-h1` clamp(2rem,5vw,4rem) · `--fs-h2` clamp(1.5rem,3.2vw,2.4rem) · `--fs-h3` 1.25rem · `--fs-body` clamp(1rem,1.1vw,1.125rem) · `--fs-mono` 0.8125rem · `--fs-micro` 0.6875rem (mono labels, tracked +0.08em, uppercase).

### Color (dark observability + one signal accent + semantic status)
```
--ink-900 #08090a   page          --text     #e6e8ea
--ink-850 #0c0e10                 --text-dim #9aa1a8
--ink-800 #111418   surface       --text-faint #646b72
--ink-700 #181c21   elevated      --line     #23282e (hairline)
                                  --line-bright #2f353c
--signal  #c5f74f   PRIMARY accent (used sparingly: hero metric, active span)
--trace   #66d2ff   sparklines, links, request flow
--ok      #46d39a   success/healthy     --warn #e3a84e   --err #e5484d
```
Contrast: body text and accents on `--ink-900` exceed WCAG AA (≥4.5:1); large display far exceeds. Optional light/high-contrast theme via the same CSS variables (stretch goal).

### Spacing & radius
4px base; editorial steps `--s-1..--s-12` (4,8,12,16,24,32,48,64,96,128,160,200). Asymmetric section padding (compression/expansion). Radii: 2px (chips/bars), 6px (panels) — tight, technical. Hairline borders everywhere.

### Motion tokens
Durations: `--d-fast .2s · --d-base .42s · --d-slow .8s · --d-cine 1.1s`.
Easings (CSS): `--e-out cubic-bezier(.22,1,.36,1)` (expo-out), `--e-inout cubic-bezier(.65,.05,.36,1)`. GSAP: `power3.out`, `expo.out`, `power2.inOut`.

---

## 7. Motion spec

| Animation | Purpose | Trigger | Tech | Duration/ease | Reduced-motion fallback |
|---|---|---|---|---|---|
| Boot/handshake intro | establish "system coming online" | load | GSAP timeline | ~1.1s expo.out | instant render, no sequence |
| Vitals count-up | make metrics land | in-view | GSAP + ScrollTrigger | .8s power2.out | final value shown |
| Trace span draw-in | reveal the waterfall as a trace | in-view | GSAP stagger | .6s, stagger .06 | bars shown static |
| Span hover/focus lift + sparkline | invite drill-down | hover/focus | CSS + GSAP | .2s | static highlight on focus |
| Span → case-file (Flip) | spatial continuity, no cut | click/Enter | GSAP **Flip** | .6s power3.out | crossfade/instant |
| Latency 15s→3s bar collapse | show the win viscerally | in-view | GSAP | .9s expo.out | both bars shown |
| Log stream scroll | ambient "liveness" | always (pausable) | rAF/GSAP | linear, slow | static list |
| Section reveals | hierarchy, not filler | ScrollTrigger | GSAP | .5s | visible immediately |
| Smooth scroll | premium feel | Lenis | Lenis | — | Lenis off; native scroll |
| Magnetic CTA / cursor | micro-delight | pointer | GSAP | .3s | disabled; no custom cursor |

Global: wrap all non-essential motion in `prefers-reduced-motion: reduce` guards; Lenis disabled and ScrollTriggers set to final state when reduced.

---

## 8. Tech architecture

- **Next.js 16** (App Router, `output: 'export'`) · **TypeScript** · **CSS Modules** (no Tailwind → no generic utility look) · **GSAP** (ScrollTrigger, Flip) · **Lenis**. No Framer Motion, no Three.js (perf/a11y; structural uniqueness comes from the trace, not WebGL).
- **Content:** typed TS modules in `content/` (type-safe, static) generated from the content model.
- **File structure:**
  ```
  app/            layout, page (/), work/[slug]/page, not-found, sitemap, robots
  components/     hero/, trace/, casefile/, about/, skills/, experience/, contact/, ui/, motion/
  content/        profile.ts, projects.ts, skills.ts, experience.ts, types.ts
  lib/            useLenis, gsap (registerPlugins), useReducedMotion, format
  styles/         tokens.css (imported by globals)
  public/         resume.pdf, og.png, images (treated)
  ```
- **Performance strategy:** static export; self-hosted subset fonts (preload mono+display); SVG/DOM visuals; lazy-init heavy ScrollTriggers; pre-sized images (`unoptimized`); minimal JS; no layout shift (reserve space, `size-adjust` fonts).
- **Accessibility strategy:** landmarks + headings order; the trace is a real `<nav>`/list with buttons (keyboard + ARIA); focus-visible rings in `--signal`; tap/focus parity for all hover content; reduced-motion; AA contrast; `<title>`/meta/OG per page; `prefers-reduced-motion` honored.
- **SEO:** per-route metadata, Open Graph image, JSON-LD `Person`, sitemap/robots.

---

## 9. Build order

1. Tokens + fonts + layout shell + Lenis + GSAP setup + reduced-motion hook.
2. Content modules (from content model).
3. Hero (vitals + root trace).
4. Trace waterfall (work) + span interactions (Flip).
5. Case-file route(s).
6. About (manifesto + treated photo + award artifact), Skills (stack map), Experience (deploy log), Contact (status).
7. Motion polish pass + reduced-motion verification.
8. Responsive pass (1440→360) + Playwright visual QA.
9. Lighthouse + axe; fix to targets (Perf 90+, A11y 95+, BP 90+, SEO 90+).
10. Deploy to Vercel; deliver docs.

---

## 10. Hard-rules compliance

No card grid · no bento · no equal rectangles · no generic centered hero · no icon rows · no floating 3D logos · no pointless fade-ins · no template section-stacking (sections are trace/log/case-file/changelog) · no gradient blobs · glassmorphism only if justified (not planned) · no lorem ipsum (all real resume content) · references adapted, not copied.
