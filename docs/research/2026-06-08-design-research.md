# Design Research Report: Varish Valleti Portfolio
**Date:** 2026-06-08  
**Subject:** Backend / Distributed-Systems Engineer — Java, Spring Boot, MySQL/MongoDB/Redis, AWS, Microservices  
**Specialties:** Latency optimization, indexing, concurrency/parallelism, config-driven systems, observability  
**Purpose:** Pre-design research — identify creative direction, deconstruct tropes, survey references, catalog techniques

---

## 1. ANTI-TROPE DECONSTRUCTION

The six overused portfolio tropes below are not inherently bad. They are bad because they communicate *template* rather than *author*. A backend engineer has particular reason to avoid them: they were designed for visual/product portfolios and import the wrong signals entirely.

---

### 1a. The 3-Column Project Card Grid

**What it looks like:** Three equal-width cards per row. Each card has a project thumbnail, a title, 2–3 tags, a short blurb, and a "View Project" button. Cards are often rounded. Shadow or border separates them.

**Where it is used:** Every Webflow, Framer, and GitHub Pages template. Colorlib's roundup of "best developer portfolios" shows this layout in roughly 70% of featured sites. It saturates every portfolio-builder marketplace.

**Why it's overused:** It requires no structural thinking. Any CMS or template engine generates it from a list. Developers adopt it because it's "done" — a solved problem that lets them focus on content rather than form.

**The emotional weakness:** Cards flatten all projects to equal visual weight. Nothing is surprising; every entry competes equally. The experience communicates *volume* rather than *depth*. For a viewer hiring a senior engineer, volume is not interesting — judgment is.

**Why it reads as a template:** The grid is resolution-insensitive and content-insensitive. A 3-column card looks the same whether the project is a weekend side project or a system handling 10 million requests per day.

**What should replace it for a backend engineer:** A *weighted index* — projects with unequal visual emphasis based on actual complexity or impact. Or a *case-study list* where each entry is a single block of rich text with a key performance metric as the lead (e.g., "p95 latency cut from 340ms → 28ms"). Depth should precede breadth.

---

### 1b. The Bento Grid

**What it looks like:** An irregular mosaic of rectangles, evoking Apple's WWDC marketing and Linear's homepage. Cards of varying sizes hold icons, short text, subtle gradients, and glassmorphic borders. Usually arranged with a 12-column CSS grid.

**Where it is used:** It exploded as a trend in 2024 and has since appeared on roughly 240% more Webflow and Framer templates than in 2023 (per Landdding's 2026 breakdown). It is now the default for "modern looking" SaaS landing pages and tech portfolios.

**Why it's overused:** Bento grids arrived with Apple's identity. They are borrowed prestige — the visual association with Apple and Linear implies the builder has taste, even if the content is unremarkable.

**The emotional weakness:** Flat, static boxes feel like spreadsheets. There is no narrative arc. The eye has no clear path. For a backend engineer, the medium contradicts the message: distributed systems are about *flow, causality, and sequence*, not isolated boxes.

**Why it reads as a template:** It is a template. Bentogrids.com, a curator of the format, lists hundreds of nearly identical examples. E-commerce category pages tested with bento layouts saw conversion drops of ~14% because variable card sizes interfere with comparison — a sign the format prioritizes aesthetics over communication.

**What should replace it for a backend engineer:** A *timeline of incidents* (systems narrative), a *log view* (sequenced events), or a *trace waterfall* (causally ordered spans). Any format that implies *time* and *causality* is more honest to the domain.

---

### 1c. The Generic "Hi, I'm a Developer" Centered Hero

**What it looks like:** A centered, full-viewport section. A greeting — "Hi, I'm [Name]" or "Hello, World!" — in large type. A subtitle like "Software Engineer | Java | Spring Boot | AWS." A two-button CTA: "View My Work" and "Contact Me." Usually a hero image or abstract blob.

**Where it is used:** Ubiquitous across all developer portfolio generators. GitHub's community list of developer portfolios shows this as the modal pattern. The "Hello, World" joke is especially endemic.

**Why it's overused:** It mimics marketing copy for a personal product. It's the fastest way to "have" a hero without deciding what the hero communicates. The centered layout is the browser default for people who want symmetry without designing it.

**The emotional weakness:** It tells the viewer nothing specific. "I'm a developer" is noise for a hiring manager reading their fifteenth portfolio. The emotional register is generic enthusiasm, which reads as junior.

**Why it reads as a template:** Centering with a role title and two CTAs is the literal structure of every portfolio template sold for $15 on Themeforest.

**What should replace it for a backend engineer:** The hero should contain something *true* and *specific* — a single claim stated with confidence. For Varish Valleti: "Systems built to hold under pressure" or a live rendering of a latency distribution curve. The opening should feel like a log line, not a LinkedIn summary. Consider a hero that starts mid-thought: the first visible element is a number, a metric, or a system diagram fragment — not a greeting.

---

### 1d. Floating 3D Icons / Glassmorphism Blobs

**What it looks like:** Animated 3D icons (React logo, Java logo, Docker whale) floating across a hero. Or translucent glass-card blobs drifting behind a hero section. Often implemented with Three.js particles or CSS backdrop-filter.

**Where it is used:** Very common in 2022–2024 developer portfolios, particularly in the "creative developer" niche. Templates on Framer still prominently feature this style in 2025.

**Why it's overused:** The technique was novel in 2020 when glassmorphism was a fresh Dribbble trend. It was then templated by 2022. By 2024, any developer with access to Framer could produce it in an afternoon.

**The emotional weakness:** Floating technology logos communicate *familiarity with tools*, not *mastery of systems*. Knowing that someone uses Docker is less interesting than knowing they reduced cold-start time for a containerized service from 4 seconds to 600ms.

**Why it reads as a template:** The tech-icon float is the portfolio equivalent of listing "proficient in Microsoft Word" on a CV. The visual register is novelty, but the novelty expired three years ago.

**What should replace it for a backend engineer:** Abstract system metaphors. Instead of a floating Spring Boot logo, render a *call graph* — nodes and edges that actually represent a microservices architecture. Or, use pure typography at scale. The tools are not interesting; the work the tools enabled is.

---

### 1e. Scroll Fade-In Everywhere

**What it looks like:** Every section, card, paragraph, and image fades in from 0 to 1 opacity (sometimes with a slight Y translate) as the user scrolls past it. Often implemented with Intersection Observer or AOS (Animate On Scroll) library. Every element participates equally.

**Where it is used:** It is the default animation for AOS, WOW.js, and ScrollReveal. Webflow's built-in interactions default to this behavior. It is universal.

**Why it's overused:** It requires one line of code per element in AOS and zero design judgment. The animation was borrowed from long-form marketing pages where it served a purpose: preventing information overload on very long scrolls. Applied everywhere, it loses that function.

**The emotional weakness:** When everything animates, nothing is meaningful. The user habituates within seconds. Worse, it introduces jank on mid-range mobile devices. The hidden cost is accessibility: many users with vestibular disorders require `prefers-reduced-motion: reduce`, which strips all animations and leaves an unstyled skeleton.

**Why it reads as a template:** AOS's default config (`data-aos="fade-up"`) is identical across thousands of sites. Interviewers at product companies who review dozens of portfolios weekly can recognize the default easing curve.

**What should replace it for a backend engineer:** *Purposeful* motion triggered by specific events, not scroll position. A latency sparkline that draws as you scroll to it. A code block that types itself in. A trace waterfall that populates left-to-right. Animation tied to *meaning*, not proximity.

---

### 1f. The Standard Resume Timeline with Icons

**What it looks like:** A vertical timeline on the left margin, with circular icons (company logo or a generic briefcase icon) at each node. Right of each node: company name, role, date range, 3 bullet points. The visual metaphor is a river of career history.

**Where it is used:** Bootstrap's timeline component, every dark-mode "developer resume" template, and nearly every developer portfolio that includes an "Experience" section.

**Why it's overused:** The timeline is a safe way to translate a resume into a page without thinking about structure. It is literal and linear: time flows down.

**The emotional weakness:** It is entirely retrospective. It tells a story of *where you have been*, not *what you can build*. For a senior backend engineer, the timeline implies that the most important thing is the sequence of employers, not the systems designed.

**Why it reads as a template:** The combination of a left-border dotted line, circular icon, and three bullet points is visually indistinguishable across thousands of sites.

**What should replace it for a backend engineer:** A *system changelog* — structured like a git log or release notes. Or a *case-file* approach: each role is a "case" with a problem statement, the approach, the observable outcome (numbers), and what it cost (tradeoffs). The change in format implies a change in how the engineer thinks about their own work — from biography to engineering artifact.

---

## 2. REFERENCE SURVEY

References verified via web search and direct URL fetch. Where site behavior could not be directly observed (behind JS rendering or authentication), descriptions are sourced from Awwwards case studies, Codrops features, and design publications.

---

### Category A: Typography-Driven / Editorial

**A1. Obys Agency — obys.agency**  
Concept-driven EU studio, Studio of the Year 2023 (Awwwards), 80+ international awards, Red Dot Best of the Best. Their AIM – AI Modernism of Kharkiv project won Site of the Month January 2024 on Awwwards.  
- **Core structural mechanic:** Modular project grid with strong typographic hierarchy. Project names and service descriptors (Architecture, Fashion, Technology) are the navigation scaffold, not thumbnails.  
- **Motion/interaction:** Hover states that reveal project categories; deliberate, restrained transitions that prioritize reading over spectacle.  
- **Why it feels premium:** Typography is treated as image. The grid is dense but scannable because the font work carries all the weight.  
- **Adaptable for backend portfolio:** The project-category tagging model (by service type, not just name) works well for organizing work by domain: "Latency Optimization," "Indexing," "Concurrency," "Observability."

**A2. Pentagram — pentagram.com**  
The world's largest independent design consultancy. Each partner has a distinct portfolio. Their case study writing is the benchmark for describing design decisions without vague superlatives — specific problems, specific decisions, specific outcomes.  
- **Core structural mechanic:** Project pages organized around a clear brief → approach → outcome structure. Homepage is an interactive entry point that dynamically highlights key work.  
- **Motion/interaction:** Restrained. Typography and image carry everything. Hover reveals and smooth page transitions.  
- **Why it feels premium:** Restraint at scale. Enormous quantity of work, zero visual noise.  
- **Adaptable for backend portfolio:** Their case study format (brief → approach → outcome in prose) is directly translatable to engineering problems. Replace "design decision" with "architecture decision."

**A3. Vercel — vercel.com**  
Developer infrastructure company. The site is a masterclass in "developer editorial" — pure blacks and whites, Geist typeface (their own, inspired by Swiss design movement), generous spacing, almost no decoration.  
- **Core structural mechanic:** Typography-first, dark canvas, section rhythm that prioritizes reading speed.  
- **Motion/interaction:** Subtle. Gradient accents on hover, smooth scroll, restrained microinteractions.  
- **Why it feels premium:** The confidence of pure restraint. Nothing muddy.  
- **Adaptable for backend portfolio:** The dark, monochromatic, Geist-style aesthetic is the natural register for a backend engineer. The design says "infrastructure" before a word is read.

**A4. Linear — linear.app**  
Product planning tool with a design philosophy documented by founder Karri Saarinen. Dark gray / Inter font / black backgrounds. "Linear design" has become a genre.  
- **Core structural mechanic:** Dark mode-first, tight typographic hierarchy, geometric sans-serif, one accent color.  
- **Motion/interaction:** Smooth, quick transitions. No gratuitous animation.  
- **Why it feels premium:** Communicates "professional" and "built by engineers who care about craft."  
- **Adaptable for backend portfolio:** The aesthetic directly aligns with Varish's domain. Risk: it has become its own template — use as foundation, not destination.

**A5. Grégory Lallé '24 — Awwwards SOTD December 2024**  
Personal portfolio by creative developer Grégory Lallé (with Thomas Monavon). Deliberately stripped back after earlier, more complex versions.  
- **Core structural mechanic:** Brutalist/minimalist. Grid layout, single accent color (#111111). Intentional elimination of WebGL and gratuitous animation.  
- **Motion/interaction:** Subtle video transitions, smooth page transitions. Non-intrusive.  
- **Why it feels premium:** Constraint as creative decision. The absence of effects communicates maturity.  
- **Adaptable for backend portfolio:** The "I chose not to do X" signal is powerful for a backend engineer. Restraint in the portfolio mirrors restraint in system design.

---

### Category B: Non-Linear / Spatial / Immersive Navigation

**B1. Active Theory — activetheory.net**  
Venice Beach creative studio, among the top WebGL studios globally. Portfolio v5 features a fully immersive 3D environment inspired by their LA and Amsterdam offices. Navigation is spatial: cursor, scroll, and drag navigate a 3D world. AI chat navigates the portfolio.  
- **Core structural mechanic:** 3D environment as navigation surface. Projects are objects in space, not list items.  
- **Motion/interaction:** Physics-based interactions, real-time particles, custom Hydra framework. Homepage rendered like a game.  
- **Why it feels premium:** The navigation IS the experience. Nothing passive.  
- **Adaptable for backend portfolio:** The full spatial navigation is high-maintenance and accessibility-hostile at scale. What is adaptable: the idea of *environment as context*, navigating through a system diagram rather than a 3D game world.

**B2. Bruno Simon — bruno-simon.com**  
Canonical example of game-as-portfolio. A remote-controlled car drives through a miniature 3D world. Projects are physical objects. Won Awwwards SOTD and FWA Site of the Month November 2019; still referenced as a benchmark.  
- **Core structural mechanic:** Three.js game world. Cannon.js physics. Projects are geographic destinations.  
- **Motion/interaction:** Real-time physics, camera follow, collision. Full game loop at 60fps.  
- **Why it feels premium:** It is genuinely original. Nobody else did it first, or better.  
- **Adaptable for backend portfolio:** Directly? No. The game metaphor doesn't suit backend work. Adaptable idea: the concept of *exploring* a system rather than *reading* a list. A trace visualization where spans are navigable is in the same spirit.

**B3. Lusion — lusion.co**  
Award-winning 3D and interactive web studio (Awwwards Site of the Month, FWA, CSSDA Website of the Year). Portfolio of Meta, Porsche, Devin AI work.  
- **Core structural mechanic:** Scroll-driven narrative journey. Content unfolds vertically like a cinematic take. "CONTINUE TO SCROLL" prompts choreograph the experience.  
- **Motion/interaction:** WebGL/Three.js immersive. Progressive disclosure, parallax, frame-by-frame reveals.  
- **Why it feels premium:** Client roster and technical quality reinforce each other. Every detail is considered.  
- **Adaptable for backend portfolio:** The scroll-as-cinema model is adaptable without WebGL. A scroll-driven trace waterfall — where each span appears as you scroll, building the full picture — uses the same principle.

**B4. Rauno Freiberg — rauno.me**  
Design engineer at Vercel. Portfolio structured around an OS metaphor: a dock, interface sounds, a side-scrolling feed of images representing projects, experiments, photography. Also runs "Devouring Details" — a studio / design analysis practice.  
- **Core structural mechanic:** Operating system metaphor. Navigation is task-bar-driven, not scroll-driven.  
- **Motion/interaction:** Interface sounds, dock interactions, OS-style window management concepts.  
- **Why it feels premium:** The metaphor is internally consistent and distinctive. Feels like a product, not a page.  
- **Adaptable for backend portfolio:** The OS metaphor can translate: terminal application, process manager, or observability dashboard as the navigation surface.

---

### Category C: Anti-Card Formats (Kinetic Lists, Split-Screen Reveals, Archive/File-System, Evidence Strips, Radial Indexes)

**C1. Darkroom Engineering — darkroom.engineering**  
The studio behind Lenis (smooth scroll library), Satus (Next.js framework). Their own site uses a modular, high-contrast black/white layout with geometric square decorative frames, an activity log (live iteration visible), curated client references, and direct language ("you've got a product that needs to be fast, polished, and built to last").  
- **Core structural mechanic:** Curated index + live activity log. Work is shown as entries in an ongoing record, not cards.  
- **Motion/interaction:** Restrained; the live activity log is the dynamic element.  
- **Why it feels premium:** The activity log demonstrates competence in real-time. The copy is direct without arrogance.  
- **Adaptable for backend portfolio:** The *live log* or *changelog* as an organizational metaphor is directly adaptable. "System changelog" for projects — structured like git log entries — is highly distinctive.

**C2. Joffrey Spitzer Portfolio — Awwwards feature, February 2026**  
Minimalist Astro + GSAP build. Uses reveals, GSAP Flip transitions, and subtle motion. Lenis for smooth scrolling.  
- **Core structural mechanic:** Text-first list with Flip-based transitions on page navigation. Work reveals as slides, not grid.  
- **Motion/interaction:** GSAP ScrollTrigger reveals, Flip for state transitions between list and detail view.  
- **Why it feels premium:** The reveal animations reward attention without demanding it.  
- **Adaptable for backend portfolio:** The list → detail Flip transition is clean and maintainable. Works as: project index (list view) → case study (detail view) with a spatial transition that reinforces the relationship.

**C3. Kinetic Typography Scroll (Codrops pattern — multiple examples, 2024–2025)**  
Codrops has catalogued multiple techniques: organic text distortion with sine/cosine waves reacting to scroll speed and direction (November 2024); 3D scroll-driven text animations with CSS and GSAP (November 2025); experimental SVG clip-path reveals (January 2024).  
- **Core structural mechanic:** Text as motion surface. Typography doesn't sit still; it responds to scroll velocity, cursor, or time.  
- **Motion/interaction:** GSAP SplitText + ScrollTrigger, CSS scroll-driven animations, SVG clip-paths.  
- **Why it feels premium:** When text moves with physical properties (inertia, spring, distortion), the reading experience becomes tactile.  
- **Adaptable for backend portfolio:** Section headers — "Latency," "Indexing," "Concurrency" — that distort, reveal, or assemble as scroll reaches them. The motion metaphor can mirror the domain: text that buffers and flushes like a message queue.

**C4. Split-Screen Scroll Reveal (Webflow/GSAP pattern)**  
A masked scroll animation splits the viewport: the left half reveals a visual (diagram, metric, code), the right half reveals text. The two sides have different scroll rates.  
- **Core structural mechanic:** Viewport divided; two tracks move at different speeds, synchronized by a shared scroll position.  
- **Motion/interaction:** GSAP ScrollTrigger with scrub, or CSS scroll-driven animations with dual timelines.  
- **Why it feels premium:** Binocular — the eye can look left or right, and the two panels complement each other.  
- **Adaptable for backend portfolio:** Left panel: a system diagram, flame graph, or query plan. Right panel: the engineering narrative. The split-screen enforces visual + textual balance that is natural for technical work.

**C5. Paco Coursey — paco.me**  
Developer at Linear. Portfolio is a personal manifesto/biography hybrid — organized by theme (Projects, Writing, Now) rather than chronology. Direct, conversational prose. No cards.  
- **Core structural mechanic:** Themed text index. The navigation is categorical, the content is prose.  
- **Motion/interaction:** Minimal; focus is entirely on content density and reading experience.  
- **Why it feels premium:** Confidence through reduction. The site trusts its content.  
- **Adaptable for backend portfolio:** The "Now" section — what system problems are currently being worked on — is a powerful signal of active engagement. The thematic (not chronological) organization suits a senior engineer whose work spans multiple domains.

---

### Category D: High-End Motion & Micro-Interactions

**D1. Active Theory / GSAP ScrollTrigger ecosystem**  
Industry standard for complex scroll-driven animation. Used by top agencies (Active Theory, Locomotive, Darkroom Engineering). The Awwwards GSAP collection contains hundreds of winners.  
- **Core structural mechanic:** Pinning, scrubbing, multi-timeline coordination, Flip for state transitions.  
- **Motion:** GPU-accelerated via transform/opacity. ~23KB gzipped core + modular plugins.  
- **Why it feels premium:** The control is granular enough to produce film-like choreography.  
- **Adaptable:** Every level of complexity, from subtle section reveals to full scroll-driven narratives.

**D2. Magnetic Button / Cursor-Reactive Interactions (GSAP pattern)**  
Cursor tracks proximity to elements, magnetic pull applied via GSAP quickTo or spring physics. Used by Locomotive, Obys, and high-end agency sites.  
- **Core structural mechanic:** Mouse position → element transform. Force increases as distance decreases.  
- **Motion:** Physics-based. Elastic easing on leave. ~5–10 lines of JS per element.  
- **Why it feels premium:** Makes the interface feel physically present.  
- **Adaptable:** Apply to key interactive elements only (project titles, navigation links). Avoid saturating every button.

**D3. Lenis + ScrollTrigger (Darkroom Engineering + GSAP)**  
The current best-practice pairing. Lenis (~3KB gzipped) provides smooth native-DOM scrolling; ScrollTrigger syncs to Lenis's scroll position for animations.  
- **Core structural mechanic:** Lenis normalizes scroll physics across browsers; ScrollTrigger provides animation triggers.  
- **Motion:** No jank, consistent easing. The scroll "feels" like butter.  
- **Why it feels premium:** The quality of the scroll itself is perceived as product quality.  
- **Adaptable:** The standard for any Next.js/React portfolio with scroll animation.

**D4. Page Transitions (Barba.js / GSAP Flip / Swup)**  
Seamless navigation between pages using Barba.js (router) + GSAP Flip (state animation). Clicked element becomes the hero of the next page — spatial continuity. Used in the Joffrey Spitzer portfolio and the Codrops WebGL Gallery tutorial.  
- **Core structural mechanic:** Project selected from list → project thumbnail expands to fill next page hero. No cut.  
- **Motion:** GSAP Flip calculates the transform between states and animates between them.  
- **Why it feels premium:** Spatial continuity. The user always knows where they are in the information architecture.  
- **Adaptable:** Project index → case study transitions. The thumbnail becomes the case study header.

**D5. CSS Scroll-Driven Animations (native, 2024)**  
As of 2024, supported in all major browsers. Runs on the compositor thread — no main thread blocking. `animation-timeline: scroll()` and `view()`. Zero JS dependency.  
- **Core structural mechanic:** CSS animation progress tied to scroll position or element visibility.  
- **Motion:** Guaranteed 60fps (compositor-thread). No GSAP dependency needed for simple effects.  
- **Why it feels premium:** Imperceptibly smooth. No scroll listener jank.  
- **Adaptable:** Use for simple reveals, progress indicators, sticky navigation state changes. Use GSAP for complex choreography that CSS can't express.

---

### Category E: Minimalist / CLI / Terminal / Database-Stark

**E1. Terminal Portfolio Pattern (GitHub ecosystem, 2024–2025)**  
Hundreds of open-source implementations on GitHub. Common stack: React + TypeScript + styled-components. jQuery Terminal library for interactive command parsing. The pattern: a black terminal window, green or amber monospace text, a command prompt the user types into.  
- **Core structural mechanic:** CLI interface. User types commands to navigate (e.g., `help`, `projects`, `contact`).  
- **Motion:** None, or cursor blink. ASCII art. Typewriter text.  
- **Why it feels premium:** When done well, it is genuinely surprising. It communicates technical identity at the interface layer.  
- **Adaptable:** The problem with pure CLI ports: they are inaccessible (no screen reader support), confusing to non-technical visitors, and increasingly templated (CLIfolio Framer template exists). The CLI *aesthetic* is adaptable; the CLI *interaction* is a risk.

**E2. Linear / Vercel / Raycast "Developer Tool" Aesthetic**  
The confluence of dark mode, Inter or Geist typeface, monospace accents, geometric grid patterns, pure black/white with one accent color. Documented as "Linear design" — popularized by Linear, Vercel, Raycast, and Stripe.  
- **Core structural mechanic:** Dark canvas, typographic hierarchy, one accent, grid discipline.  
- **Motion:** Restrained. Hover states, smooth transitions, no decorative animation.  
- **Why it feels premium:** The palette communicates precision. It has become the industry register for "serious infrastructure."  
- **Adaptable:** High — this is the natural home register for Varish's work. Risk: it has become its own template by 2025. Must be differentiated by structural innovation, not just palette adoption.

**E3. Darkroom Engineering — activity log / changelog aesthetic**  
Described above in C1. The live activity log as a design element is the closest thing to "observability made visible" in a portfolio context. The log communicates: *this person ships continuously*.  
- **Core structural mechanic:** Timestamped entry feed. Work is a record, not a showcase.  
- **Adaptable:** Directly — a feed of engineering "commits" (problems solved, systems improved) as the primary navigation surface.

**E4. "Technical Mono" / Code Brutalism (2026 emerging aesthetic)**  
Monospaced typography, command-line simplicity, high-contrast layouts echoing terminal windows and IBM mainframe UIs. Identified by design trend analysts as a reaction to overly-glossy UI. Paul Macgregor's site cited as an example.  
- **Core structural mechanic:** Monospace typeface + grid + high contrast. No decoration.  
- **Motion:** Minimal or none. Performance optimal.  
- **Why it feels premium:** The aesthetic has age and authority — it references computing history.  
- **Adaptable:** Strong for a backend engineer. The IBM/mainframe register pre-dates web design by decades and carries genuine technical credibility.

---

## 3. TECHNIQUE CATALOG

### GSAP (GreenSock Animation Platform)

**When it is the right tool:**
- Complex, multi-step, sequenced animations requiring precise timing control.
- Staggered element reveals with easing customization beyond CSS.
- Morphing, text splitting (SplitText), color animation, custom properties.
- When you need callbacks (`onComplete`, `onUpdate`) tied to animation progress.

**Performance characteristics:**
- Core library ~23KB gzipped. Plugins add 3–8KB each.
- Leverages GPU via transform/opacity. GSAP 3 forces will-change management automatically.
- Main-thread execution — heavy JS in the animation loop can still cause jank. Avoid computing layout (offsetHeight, getBoundingClientRect) during the animation tick.

**60fps / reduced-motion:**
- Wrap all GSAP timelines in a check: `const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
- For reduced motion: disable transform animations, keep opacity fades. Use `gsap.matchMedia()` — GSAP 3.12+ natively supports matchMedia contexts.

**Pitfalls:**
- SplitText on dynamic content breaks on resize without a custom ResizeObserver rebuild.
- ScrollTrigger + Lenis require explicit scroll proxy configuration: `ScrollTrigger.scrollerProxy(...)`.
- Overuse of `stagger` on large lists (100+ items) causes a perceptible initial render lag.

**Decision rubric — Use GSAP when:** you need pinning, scrubbing, multi-timeline coordination, Flip transitions, or physics-based interactions that CSS cannot express natively.

---

### GSAP ScrollTrigger

**When it is the right tool:**
- Section pinning (freeze scroll while animation plays).
- Scrub animations (animation progress tied 1:1 to scroll position).
- Horizontal scroll tracks within a vertical scroll container.
- On-scroll reveals that need to fire at precise viewport percentages.

**Performance:**
- Uses IntersectionObserver + scroll listener. The scroll listener is throttled but still runs on the main thread.
- Heavy scenes with many simultaneous ScrollTrigger instances (50+) can degrade. Batch and refresh carefully.

**60fps / reduced-motion:**
- Use `gsap.matchMedia()` to disable scrub animations for users who prefer reduced motion, keeping structural state changes (opacity reveals) active.

**Pitfalls:**
- Triggers don't re-calculate after font loading, image loading, or dynamic content insertion. Always call `ScrollTrigger.refresh()` after layout changes.
- Lenis integration requires `ScrollTrigger.scrollerProxy(lenisTarget, {...})` and a `lenis.on('scroll', ScrollTrigger.update)` binding.

**Decision rubric — Use ScrollTrigger when:** you want scroll position to control animation progress at any granularity — pinned sections, scrubbed timelines, or triggered one-shots.

---

### Lenis Smooth Scroll (Darkroom Engineering)

**When it is the right tool:**
- Any project where the scroll feel matters — which is all premium portfolios.
- Pairing with GSAP ScrollTrigger for scroll-synced animations.
- When native scroll on mobile feels too "rubber-banded" or inconsistent.

**Performance:**
- ~3KB gzipped. Extremely lightweight.
- Runs on `requestAnimationFrame`. Does not intercept native scroll — it normalizes and smooths it.
- No virtual scroll that breaks native scrollbar, screen reader scroll, or keyboard navigation.

**60fps / reduced-motion:**
- Lenis respects `prefers-reduced-motion` by default in v1.0+. When reduced motion is preferred, it disables the lerp smoothing and falls back to native scroll behavior.

**Pitfalls:**
- Must be initialized after DOM is ready. In Next.js, use a `useEffect` or a dedicated layout component.
- `ScrollTrigger.proxy` must be set if using both. The Lenis/ScrollTrigger integration requires syncing their tickers: `gsap.ticker.add((time) => lenis.raf(time * 1000))`.

**Decision rubric — Use Lenis when:** you want smooth scroll on any project with scroll-driven animation. Default choice over Locomotive Scroll (heavier, more opinionated) and GSAP ScrollSmoother (requires Club license).

---

### Framer Motion (Motion for React)

**When it is the right tool:**
- React/Next.js projects where animation is tied to component state (mount/unmount, route transitions, presence).
- `AnimatePresence` for exit animations on component removal.
- `useScroll` / `useTransform` for scroll-linked values without a separate library.
- Gesture animations (drag, tap, hover) that are component-scoped.
- Teams who prefer declarative animation syntax in JSX.

**Performance:**
- ~32KB gzipped (full package). Larger than GSAP for equivalent functionality.
- `useScroll` uses a passive scroll listener — same thread as GSAP ScrollTrigger.
- `layout` prop uses the FLIP technique internally for layout transitions.

**60fps / reduced-motion:**
- `useReducedMotion()` hook returns a boolean. Use it to conditionally apply transforms.
- `MotionConfig reducedMotion="user"` at app root: automatically disables transform/layout animations for users who prefer reduced motion, preserving opacity transitions.
- Best practice: design for opacity-only fallback first, add transforms second.

**Pitfalls:**
- `layout` prop on elements that re-render frequently (lists, real-time data) causes expensive layout calculations. Use `layoutId` only on specific shared elements.
- Does not match GSAP ScrollTrigger's pinning, scrub precision, or multi-timeline control.
- `AnimatePresence` requires `mode="wait"` for sequential enter/exit — omitting it causes overlap jank.

**Decision rubric — Use Framer Motion when:** your animation needs are component-state-driven (routing, presence, gesture), you're in a React context, and your scroll animations are simple enough for `useScroll`/`useTransform`. Use GSAP + Lenis for more complex scroll choreography.

---

### Three.js / React Three Fiber (R3F)

**When it is the right tool:**
- A single signature 3D element in the hero that communicates the domain (a trace graph, a node graph, a force-directed system diagram).
- Data visualization that benefits from 3D space (depth, rotation, real-time particle systems).
- When the 3D element is the differentiator and NOT decoration.

**Performance:**
- Three.js runs a 60fps game loop by default. On-demand rendering (`frameloop="demand"` in R3F) is critical for static scenes — eliminates idle GPU drain.
- Heavy GLB models crush performance. Compress with gltf-transform or Draco. Target < 500KB total geometry.
- Use `r3f-perf` in development to monitor FPS, draw calls, GPU memory.
- Disable antialiasing on mobile: `antialias: false`. Use DPR cap: `dpr={[1, 1.5]}`.

**60fps / reduced-motion:**
- R3F's `frameloop="demand"` only renders on explicit `invalidate()` calls — respects battery and reduced-motion by being idle when not needed.
- For users with `prefers-reduced-motion: reduce`: disable rotation and particle animations. Keep the 3D scene visible but static.

**Pitfalls:**
- Canvas elements fail Lighthouse accessibility audits unless ARIA labels and keyboard fallbacks are provided.
- WebGL context limits: browsers allow 8–16 active WebGL contexts. Multiple R3F canvases on one page exceeds the limit.
- Memory leaks if `dispose()` is not called on geometries, materials, and textures on unmount.

**Decision rubric — Use Three.js/R3F when:** you have a single, meaningful 3D element that communicates the domain (not decoration). Avoid for multi-section WebGL — it defeats performance and accessibility. Use for one signature moment.

---

### Plain CSS (Scroll-Driven Animations, Transitions, Custom Properties)

**When it is the right tool:**
- Simple reveals, progress bars, sticky state changes, navbar color transitions on scroll.
- Reduced-motion fallbacks (CSS handles `prefers-reduced-motion` natively with media queries).
- Any effect that can be expressed in CSS `animation-timeline: scroll()` or `view()`.
- Performance-sensitive contexts (low-end mobile, slow 4G connections).

**Performance:**
- CSS scroll-driven animations run on the compositor thread — the same thread as transforms and opacity. Cannot be janked by main-thread JavaScript.
- A minimalist terminal-style site scores 100/100 Lighthouse on all metrics on low-end mobile over slow 4G — CSS-only achieves this; JavaScript-heavy approaches cannot.

**60fps / reduced-motion:**
- Native. `@media (prefers-reduced-motion: reduce) { animation: none; }`.

**Pitfalls:**
- `animation-timeline: scroll()` and `view()` are not supported in Firefox as of mid-2025 without a flag. Use progressive enhancement with GSAP fallback.
- Complex orchestration (pinning, multi-element coordination) is not expressible in native CSS. Don't force CSS to do what GSAP does better.

**Decision rubric — Use plain CSS when:** the effect is simple enough to express declaratively and performance is a priority. Use GSAP for everything more complex.

---

### Decision Rubric Summary Table

| Scenario | Tool |
|---|---|
| Smooth scroll feel on any project | Lenis |
| Scroll-driven animation, pinning, scrub | GSAP + ScrollTrigger |
| Route transitions, mount/unmount animation | Framer Motion AnimatePresence |
| Component gesture and drag | Framer Motion |
| Flip/spatial continuity page transitions | GSAP Flip |
| Signature 3D domain visualization | Three.js / R3F |
| Simple scroll reveals, progress bars | CSS scroll-driven animations |
| Reduced-motion fallback | CSS media query + Lenis default + MotionConfig |

---

## 4. SPECIAL FOCUS — Developer/Backend/"Systems Made Visible"

### The Core Problem with Backend Portfolios

Frontend developers have an obvious portfolio medium: the site itself is the work. Backend engineers face a structural problem: their most important work (a query plan that cut latency by 90%, a Redis caching layer that eliminated database hammering, a concurrency model that scaled to 10x load) is invisible at the interface layer. Most backend portfolios solve this problem badly — they either describe the work in bullet points (underpowered) or screenshot a GitHub repo (wrong level of abstraction).

The opportunity is to *make the invisible visible* — to design an interface whose aesthetics, vocabulary, and information structure reference the actual artifacts of backend engineering: logs, traces, flame graphs, query plans, latency distributions, config files, thread dumps.

---

### Terminal / CLI Portfolio Aesthetic: What Works and What Doesn't

**What works:**
- The aesthetic immediately communicates domain expertise. A monospace interface with structured data signals: "this person thinks in systems."
- The vocabulary of the interface (commands, flags, output formatting) is familiar to the target audience (engineering managers, technical leads, SREs).
- Performance is near-perfect. A pure CSS/HTML terminal scores 100/100 Lighthouse.

**What doesn't work:**
- Pure interactive CLI (type commands to navigate): inaccessible, surprising to non-technical viewers, increasingly templated (CLIfolio Framer template exists).
- Green-on-black Matrix aesthetic: retro enough to read as costume rather than conviction.
- A terminal that merely displays text in a monospace font without structural meaning.

**The synthesis:** Use the *visual grammar* of terminal output — structured log lines, timestamps, severity levels, field=value pairs — as the typographic and compositional vocabulary of the site. Do not require the user to type commands. The terminal is the aesthetic metaphor, not the interaction model.

---

### Observability / Monitoring Aesthetics

Observability tools — Honeycomb, Grafana, Jaeger, Datadog — have developed a rich visual vocabulary that is both technically meaningful and visually distinctive:

**Trace waterfall diagrams:** Horizontal bars ordered by time, each representing a span. Parent–child relationships shown by indentation. Duration shown by bar width. This is a complete, self-describing data structure with spatial meaning.

**Latency distributions (p50/p95/p99):** Percentile sparklines or heatmaps. The shape of a latency distribution — whether it's tight or has a long tail — communicates more than a single number.

**Flame graphs:** A stacked bar chart showing the call stack profile. Width = time spent. Height = call depth. Visually stunning when rendered at scale; communicates the internal structure of a running system.

**Log streams:** Timestamped, structured. Color-coded by severity. Scannable. The density of a log stream is itself information.

**Service dependency graphs:** Node-edge graphs showing microservice call patterns. Directional arrows. Edge weight = call volume.

**How to use these as design primitives, not dashboard clones:**

The risk is building something that looks like a Grafana dashboard — functional but aesthetically generic. The key distinction is *editorial intent*: select one or two of these visual vocabularies and use them as composition devices, not data displays.

For example:
- A **trace waterfall** as a section header — where the spans spell out a project name or key metric, and hovering a span reveals the engineering detail behind it.
- A **latency sparkline** drawn as you scroll to a project — the animation of the line drawing is the reveal, not a generic fade-in.
- A **service graph** in the hero — not a real graph from a production system, but a stylized rendering of the microservices architecture of a signature project, interactive on hover.

The goal is to use the *shape language* of observability — horizontal spans, branching trees, density matrices — as the design language of the portfolio.

---

### Making Specific Backend Work Feel Premium and Editorial

**Latency optimization:**  
Rather than "reduced p95 latency from 340ms to 28ms" in a bullet point, render this as a before/after latency distribution curve. Two curves, different shapes. The visual shows the work better than the number alone.

**Database indexing:**  
A `EXPLAIN` query plan has a beautiful tree structure. Rendering a before/after query plan tree (with node costs as visual weights) communicates both the problem and the solution with a single image.

**Concurrency/parallelism:**  
Thread timelines — the Gantt chart of a concurrent execution — show where waiting happened and where parallelism eliminated it. This is visually distinctive and instantly legible to an engineering audience.

**Config-driven systems:**  
A YAML or JSON config file, typeset with syntax highlighting on a dark background, is visually striking when treated editorially. The key insight: the config *is* the architecture.

**Microservices architecture:**  
A force-directed graph of service dependencies, rendered in Three.js/R3F as the hero element, with each node interactive. Not a screenshot of a diagram tool — a designed visualization.

---

## 5. SYNTHESIS

### Comparison Matrix

| Reference | Category | Core Mechanic | Motion Tech | Premium Factor | Backend Adaptability |
|---|---|---|---|---|---|
| Obys Agency | A (Editorial) | Typographic project index | Hover reveals, page transitions | Typography as image | Project categorization by domain |
| Pentagram | A (Editorial) | Case study format, dynamic homepage | Minimal transitions | Restraint at scale | Case study prose structure |
| Vercel | A (Editorial) | Dark, type-first, section rhythm | Subtle hover, smooth scroll | Confidence through restraint | Natural register for backend |
| Linear | A (Editorial) | Dark canvas, one accent, geometric type | Quick transitions | "Built by engineers" aesthetic | Direct adoption risk: now a template |
| Grégory Lallé '24 | A (Editorial) | Brutalist/minimalist grid | Subtle video transitions | Constraint as maturity signal | Restraint mirroring system design judgment |
| Active Theory | B (Spatial) | 3D environment as navigation | WebGL, physics, AI chat | Navigation IS the experience | System diagram as environment |
| Bruno Simon | B (Spatial) | 3D game world, physics | Three.js, Cannon.js | Genuinely original | Exploration metaphor |
| Lusion | B (Spatial) | Scroll-driven cinematic journey | WebGL, progressive disclosure | Client roster + technical quality | Scroll-as-narrative for trace reveal |
| Rauno Freiberg | B (Spatial) | OS metaphor, dock navigation | Interface sounds, dock | Internally consistent product feel | Terminal/process-manager metaphor |
| Darkroom Engineering | C/E (Anti-card) | Curated index + live activity log | Minimal, live data | Competence in real-time | Changelog/log-stream metaphor |
| Joffrey Spitzer | C (Anti-card) | Text list + Flip transitions | GSAP Flip, Lenis | Reveals reward attention | List → case study spatial transition |
| Kinetic Typography (Codrops) | C/D (Motion) | Text as motion surface | GSAP SplitText, CSS scroll-driven | Tactile reading experience | Domain-vocabulary headers that animate |
| Split-Screen Scroll (GSAP pattern) | C (Anti-card) | Dual-track viewport | GSAP scrub | Binocular engagement | Diagram + narrative pairing |
| Paco Coursey | C/E (Minimal) | Thematic text index, manifesto hybrid | Minimal | Content confidence | "Now" section, thematic (not chrono) org |
| Magnetic Cursor (GSAP pattern) | D (Motion) | Physics-based cursor attraction | GSAP quickTo | Physical presence | Selective use on key elements |
| Lenis + ScrollTrigger | D (Motion) | Smooth scroll + animation sync | Lenis + GSAP | Scroll quality = product quality | Standard for any animated portfolio |
| Page Transitions (Barba+Flip) | D (Motion) | Spatial continuity on nav | GSAP Flip + Barba | No cuts between states | Project list → case study |
| CSS Scroll-Driven | D/E (Motion/Minimal) | Compositor-thread animation | Native CSS | 100/100 Lighthouse | Simple reveals, progress, fallbacks |
| Terminal Portfolio Pattern | E (CLI/Minimal) | CLI interaction | None / typewriter | Domain identity at interface | Aesthetic yes, interaction model no |
| Developer Tool Aesthetic (Linear/Vercel/Raycast) | E (Minimal) | Dark, monospace accents, one accent | Restrained hover | Infrastructure register | Foundation, not destination |

---

### Patterns to AVOID

1. **3-column project card grid** — flattens work, signals template, wrong register for backend.
2. **Bento grid** — borrowed Apple prestige; contradicts the causal, sequential nature of distributed systems.
3. **"Hi, I'm a developer" centered hero** — no information content, junior register.
4. **Floating 3D tech logos (React/Docker/AWS)** — communicates familiarity with tools, not mastery of systems.
5. **Scroll fade-in everywhere** — habituates the viewer in seconds, introduces jank, breaks reduced-motion.
6. **Resume timeline with circular icons** — retrospective, not systemic; reads as template.
7. **Pure interactive CLI** — inaccessible, increasingly templated (CLIfolio exists), confusing to non-engineers.
8. **Green-on-black Matrix terminal** — costume, not conviction.
9. **Generic "Linear aesthetic" without structural differentiation** — the dark/Inter/one-accent formula is itself a template by 2025.
10. **Grafana dashboard clone** — functional but aesthetically generic; data without editorial intent.
11. **Full WebGL environment as primary navigation** — maintenance burden, accessibility hostile, appropriate for creative studios not backend engineers.
12. **Technology icon clouds (Three.js particles with logos)** — 2022 aesthetic, now a template.

---

### Promising Directions

1. **System Trace as Navigation Surface** — the portfolio organized as a distributed trace. Each project is a span. Spans are ordered, nested, have durations. The user navigates by exploring spans, not scrolling a list.

2. **Engineering Changelog / Git-Log Aesthetic** — work presented as structured entries: timestamp, severity/type (PERFORMANCE, INDEXING, CONCURRENCY), one-line description, expandable detail. Feels like `git log --oneline` with depth.

3. **Incident Case-File Archive** — each project is a "case": problem statement (incident report style), root cause analysis, remediation (the engineering work), observable outcome (metrics). Formatted like a postmortem, designed like an editorial.

4. **Terminal × Editorial Hybrid** — monospace typography and structured data as the visual grammar, but standard scroll-based navigation. The terminal is the aesthetic, not the interaction model. Sections look like structured log output; reading experience is standard.

5. **Split-Screen Observability** — left panel: a rendering of an engineering artifact (flame graph, trace waterfall, query plan). Right panel: the narrative. Scroll-synced. The two panels reveal different aspects of the same system.

6. **Kinetic Typographic Index** — project titles and metrics rendered in large kinetic type. Scroll velocity distorts the text. Project titles are the system performance characteristics: "28ms p95 / Java + Redis + Spring Boot." The type IS the data.

7. **Force-Directed Service Graph Hero** — a live-rendered microservices graph as the hero. Nodes are services. Edges are calls. Each node is interactive. This is Three.js/R3F at its most meaningful — one signature 3D element that communicates domain expertise immediately.

---

### Final Recommendation

**Creative Direction: "System Trace / Observability Surface"**

The strongest single direction for Varish Valleti's portfolio is the **System Trace aesthetic** — organizing the entire portfolio experience around the visual grammar and structural metaphors of distributed tracing and observability.

**Core concept:** The portfolio is structured as a distributed trace. The hero is a stylized, interactive trace waterfall — not a real production trace, but a designed rendering whose spans represent Varish's areas of expertise (Latency, Indexing, Concurrency, Config, Observability). Each span is expandable. Expanding a span reveals the case studies, metrics, and engineering narrative for that domain. The navigation is not a menu — it is the trace diagram itself.

**Justification by criterion:**

| Criterion | Assessment |
|---|---|
| **Uniqueness** | No backend engineer portfolio currently uses a trace waterfall as its primary navigational metaphor. The form is domain-specific — it cannot be mistaken for a generic template. |
| **Memorability** | The "I navigated a system trace to learn about an engineer" framing is genuinely novel. Interviewers remember it because the medium reinforces the message. |
| **Scalability** | New projects can be added as new spans. New domains add new span tracks. The structure scales without redesign. |
| **Performance feasibility** | The trace waterfall is a CSS/SVG rendering problem, not a WebGL problem. Bars, lines, and text — all highly performant. Three.js is needed only for an optional hero enhancement (service graph). Core experience is CSS/GSAP. |
| **Animation potential** | Spans can draw left-to-right as you scroll (GSAP ScrollTrigger scrub). Hovering a span triggers magnetic/physical expansion. Latency distributions animate on reveal. The animation vocabulary is rich and domain-grounded. |
| **Storytelling strength** | The trace metaphor enforces causal narrative: first this happened, then this, then this, taking this long, costing this. That is precisely how engineering work should be described. |
| **Mobile adaptability** | The trace waterfall collapses to a vertical list on mobile — the same structural information, different geometric rendering. The domain vocabulary is preserved. |
| **Accessibility** | No WebGL required. Semantic HTML. Keyboard navigation maps naturally to span interaction. `prefers-reduced-motion` support: spans appear instantly rather than drawing. ARIA live regions for dynamic content. |
| **Maintainability** | Content is data-driven (a config file of projects, domains, metrics). Design is structural (CSS/GSAP). Adding a project means adding an entry to a data file, not redesigning a page. |

**Implementation structure:**
- **Hero:** A stylized trace waterfall diagram with 4–6 domain spans. Each span is labeled with the domain name and a key metric. Drawn left-to-right on load using GSAP (respects reduced-motion: static on preference). Cursor-reactive: hovering a span highlights its connections and previews the domain.
- **Navigation:** The trace diagram is the primary navigation. Clicking a span expands it to a full case-study view using GSAP Flip (spatial continuity, no page cut).
- **Case studies:** Each case study uses the "incident case-file" format — problem statement → approach → observable outcome (metrics with before/after visualization) → tradeoffs. Left panel: an artifact rendering (flame graph, query plan, or call graph). Right panel: the engineering narrative.
- **Typography:** Monospace for data (metrics, timestamps, field=value), geometric sans-serif for prose. Dark canvas. Single accent color for active/hover states.
- **Tech stack:** Next.js + Lenis + GSAP (ScrollTrigger, Flip, SplitText) + Framer Motion for component transitions + optional Three.js for one signature service-graph element. CSS scroll-driven animations for simple reveals and progress.
- **Motion philosophy:** Every animation earns its presence. Nothing fades in merely because it scrolled past. Animation is tied to domain meaning: spans draw because network calls have duration; latency curves reveal because performance unfolds over time.

**Why not the alternatives:**
- *Terminal × Editorial*: Strong aesthetic, but the CLI grammar limits narrative depth. Works as typographic vocabulary within the Trace direction, but not as the primary structure.
- *Incident Case-File Archive*: Excellent for case study formatting (and should be used as the case study format within the Trace direction), but as a primary structural metaphor it is more static — a list of files rather than a live system.
- *Kinetic Typographic Index*: Very strong as a section element (domain headers that animate) but insufficient as a complete information architecture. Should be incorporated as a component, not the overall direction.
- *Force-Directed Service Graph Hero*: High technical cost, mobile-hostile as primary navigation. Use as one signature R3F element within the hero, embedded in the Trace direction.

The System Trace direction is the only one whose form and content are inseparable: the structure of the portfolio explains what a distributed trace is while simultaneously demonstrating that its creator understands distributed systems. That coherence is what makes a portfolio feel authored rather than assembled.

---

## Appendix: Key URLs Referenced

- Active Theory: https://activetheory.net/
- Obys Agency: https://obys.agency/
- Lusion: https://lusion.co/
- Darkroom Engineering: https://darkroom.engineering/
- Lenis: https://lenis.darkroom.engineering/
- Rauno Freiberg: https://rauno.me/
- Paco Coursey: https://paco.me/
- Grégory Lallé case study: https://tympanus.net/codrops/2025/02/25/from-concept-to-code-inside-the-creative-process-of-thomas-monavon-gregory-lalle/
- Awwwards Portfolio Winners: https://www.awwwards.com/websites/portfolio/
- Codrops scroll typography: https://tympanus.net/codrops/tag/typography/
- Codrops OnScrollTypographyAnimations: https://github.com/codrops/OnScrollTypographyAnimations
- GSAP Docs: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Motion/Framer accessibility: https://motion.dev/docs/react-accessibility
- CSS Scroll-Driven Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
- Lenis + GSAP guide: https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap
- Magnetic cursor pattern: https://gsap.com/community/forums/topic/25319-magnetic-hover-interaction-with-cursor/
- Honeycomb trace UI: https://www.honeycomb.io/blog/data-facelift-honeycomb-data-visualization
- Vercel design guidelines: https://vercel.com/design/guidelines
- Linear design analysis: https://blog.logrocket.com/ux-design/linear-design/
