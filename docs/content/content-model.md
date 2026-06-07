# Content Model — Varish Valleti Portfolio

> Canonical content + copy. Design-independent (facts/words don't change with the visual skin).
> This becomes `content/*.json` during the build. Source of truth: `Varish_Valleti_Resume.pdf`.

## Dual-audience principle (locked)
Every piece of content has **two layers**:
- **Skim layer** — plain-language, metrics-forward, readable by a non-technical hiring manager in seconds.
- **Depth layer** — technical detail revealed on expand/scroll, credible to a senior backend engineer.

No screen requires technical knowledge *to navigate*. The systems aesthetic is the skin; the substance is always legible.

---

## 1. Identity
- **Name:** Varish Valleti
- **Role (primary):** Backend Developer
- **Role (positioning):** Backend & Distributed-Systems Engineer
- **Location:** Hyderabad, India · IST (UTC+5:30)
- **Status (placeholder — confirm/edit):** Open to backend & platform engineering roles

### Contact
- **Email:** varishvalleti52@gmail.com  *(from resume; NOTE: session profile shows chintakuntatarun@gmail.com — using resume value; flag to confirm)*
- **Phone:** +91 8919504427
- **LinkedIn:** https://linkedin.com/in/valletivarish
- **GitHub:** https://github.com/valletivarish
- **LeetCode:** https://leetcode.com/u/varishvalleti52

---

## 2. Headline / positioning
- **Primary headline (hero):** "I make slow systems fast and fragile systems reliable."
- **Sub / positioning line:** Backend & distributed-systems engineer. I cut a critical API's worst-case latency by **80%**, recovered a **3,000+ policy** data incident, and ship **config-driven** systems across **12 insurance products**.
- **Micro-tagline (nav / meta):** backend · distributed systems · performance · reliability

---

## 3. Hero "live system" stats (the observability skin, all real)
These render as the system's "vitals" — instantly skimmable proof.

| Metric | Value | Plain-language meaning |
|---|---|---|
| Worst-case latency | **15s → <3s (−80%)** | Made a critical API ~5× faster |
| Production exceptions | **−50%** | Halved prod errors (Kaizen) |
| Code-quality issues cleared | **600+** | SonarQube cleanup |
| Policies recovered in incident | **3,000+** | Restored data integrity end-to-end |
| Insurance products onboarded | **12** | Config-driven, no code changes |
| Recognition | **Excellence Award FY25–26** | Axis Max Life Insurance (MPro) |

---

## 4. Work — case studies (Case-File structure: Problem → Diagnosis → Fix → Impact)

### CS-1 — The 15-second query *(flagship)*
- **One-liner (skim):** Cut a critical high-volume API's worst-case latency by 80% (15s → under 3s).
- **Role:** Software Engineer · **When:** 2024–2025 · **Client:** Axis Max Life Insurance (Project MPro)
- **Stack:** Java, Spring Boot, MongoDB, `CompletableFuture`
- **Problem:** A high-volume data-retrieval API had worst-case latency of ~15s, hurting downstream journeys.
- **Diagnosis:** Full-collection scans on nested documents; sequential I/O blocking the request.
- **Fix:** Nested-document indexing to eliminate full scans + `CompletableFuture` parallelism to overlap I/O.
- **Impact:** Worst-case latency **15s → <3s (−80%)**.
- **Hiring-manager takeaway:** Finds the real bottleneck and ships a measurable, large win.

### CS-2 — Config-driven onboarding across 12 products
- **One-liner (skim):** Built a config-driven product onboarding system so new insurance products launch without code changes — across 12 products.
- **Role:** Software Engineer · **When:** 2024–Present · **Project:** MPro
- **Stack:** Java, Spring Boot, AWS S3, CloudFront, Coherent Spark, JSON
- **Problem:** Onboarding each of 12 insurance products required bespoke code; plan-code assignment cost 3–4 DB calls per policy.
- **Diagnosis:** Product logic hard-coded; repeated DB lookups on the hot path.
- **Fix:** Externalized product config (Coherent Spark → JSON on S3, delivered via CloudFront); migrated plan-code assignment to `plancode.json`.
- **Impact:** New products configured **without code changes**; **eliminated 3–4 DB calls per policy**.
- **Hiring-manager takeaway:** Thinks in platforms — turns repeated work into configuration.

### CS-3 — The 3,000-policy data incident *(incident recovery)*
- **One-liner (skim):** Diagnosed and resolved a production data-mapping incident affecting 3,000+ policies, restoring end-to-end integrity.
- **Role:** Software Engineer (production support / hotfix) · **When:** 2025
- **Stack:** Java, Spring Boot, Kibana, CloudWatch
- **Problem:** Production proposal data mapped incorrectly between systems; 3,000+ policies affected.
- **Diagnosis:** Traced via Kibana/CloudWatch logs to a mapping defect between source and target.
- **Fix:** Corrected the mapping, hot-fixed, and reconciled affected records end-to-end.
- **Impact:** **3,000+ policies** restored to full data integrity; hypercare-monitored.
- **Hiring-manager takeaway:** Calm under production pressure; owns incidents to resolution.

### CS-4 — TicketHub: no double-booked seats *(personal project)*
- **One-liner (skim):** Building an event-booking app with concurrency-safe seat reservation that makes double-booking impossible.
- **Role:** Solo · **When:** 2026–Present · **Repo:** github.com/valletivarish
- **Stack:** Spring Boot, MySQL, Redis, Docker, AWS, JWT, Spring Security, Swagger
- **Problem:** Concurrent buyers can race for the same seat → double-booking.
- **Diagnosis:** Classic concurrency hazard on a shared resource (seat inventory).
- **Fix:** Concurrency-safe reservation; Redis caching for hot event data; JWT/Spring Security auth; Dockerized, deployed on AWS; REST APIs documented via Swagger.
- **Impact:** Correctness under contention (no double-booking) + faster reads via cache.
- **Hiring-manager takeaway:** Self-directed; understands concurrency correctness, not just CRUD.

### CS-5 — 90%-prefilled policy journey (Redis-OTP)
- **One-liner (skim):** A retrieval flow that prefills 90% of a 6-stage customer journey, secured by Redis-based OTP.
- **Role:** Software Engineer · **Project:** MPro
- **Stack:** Java, Spring Boot, Redis
- **Problem:** Customers re-entered data across a 6-stage journey; friction + drop-off.
- **Fix:** Lookup by policy number, PAN, or phone+DOB; prefilled 90% of the journey; secured with Redis-based OTP verification.
- **Impact:** **90%** of a 6-stage journey prefilled; OTP-secured access.
- **Hiring-manager takeaway:** Connects backend work to real user/business outcomes.

### Supporting contributions (shorter entries, not full case studies)
- **Superannuation → Falcon migration:** Migrated group/business policy flow onto the Falcon track via config-driven APIs — product setup without code changes.
- **mSales ↔ MPro proposal mapping:** Ensured data parity between an external app and MPro across multiple products.
- **Benefit Illustration wrapper APIs:** Extended wrapper APIs for fintech & insurance-aggregator integrations.
- **Kaizen quality initiative:** −50% production exceptions; cleared 600+ SonarQube issues.
- **Ops ownership:** Production support, hotfix deploys, hypercare reporting; Kibana/CloudWatch monitoring; CI/CD in GitLab & Jenkins.
- **Internship full-stack modules:** Spring Boot + React + MySQL + Redis insurance modules; JWT auth + role-based access; REST APIs for policy/claims/payment; MySQL indexing for faster reporting.

---

## 5. Skills taxonomy (NOT icon cards — render as a "stack / runtime" map)
- **Languages:** Java, JavaScript, SQL, HTML, CSS
- **Backend:** Spring Boot, Spring Security, Microservices, JWT Authentication, JPA
- **Databases:** MySQL, MongoDB, Redis
- **Cloud (AWS):** EC2, S3, RDS, CloudFront, CloudWatch, IAM, Parameter Store
- **Frontend:** React
- **Tools & Practices:** Git, GitLab, Jenkins, Docker, Postman, Swagger, Kibana, Dynatrace, SonarQube, Jira, Agile, SOLID Principles

Depth (for emphasis): core strengths = performance/latency, reliability/observability, config-driven design, concurrency, AWS.

---

## 6. About / story (manifesto-style, hiring-manager-friendly)
- Backend engineer based in Hyderabad. B.Tech in Artificial Intelligence (Anurag University, CGPA 7.9, 2020–2024).
- Joined Monocept as an intern (May 2024) and moved to Software Engineer within ~6 months (Nov 2024), working on **MPro** for **Axis Max Life Insurance**.
- **What I care about:** measurable performance, reliability under load, and systems that scale through configuration instead of code. I like the part of the job where a 15-second request becomes a 3-second one, or a 3 a.m. incident becomes a clean post-mortem.
- **Recognition:** Excellence Award (FY25–26) for outstanding performance on MPro.

---

## 7. Experience / timeline (render as "deployment history / changelog")
- **Monocept — Software Engineer** · Nov 2024 – Present · Hyderabad · Client: Axis Max Life Insurance (MPro)
- **Monocept — Software Intern** · May 2024 – Nov 2024 · Hyderabad
- **Anurag University — B.Tech, Artificial Intelligence (CGPA 7.9)** · Nov 2020 – Jun 2024 · Hyderabad

---

## 8. Contact / CTA
- **Status:** Open to backend & platform engineering roles *(placeholder — confirm)*
- **Primary CTA:** Email → varishvalleti52@gmail.com
- **Links:** LinkedIn · GitHub · LeetCode
- **Location/timezone:** Hyderabad, India · IST (UTC+5:30)
- **Resume:** downloadable PDF (`/Varish_Valleti_Resume.pdf`)

---

## Open items to confirm with Varish (non-blocking; sensible defaults chosen)
1. **Email:** using `varishvalleti52@gmail.com` (resume) — confirm vs. session-profile email.
2. **Availability status:** "Open to backend & platform roles" placeholder — keep, edit, or remove.
3. **Headline voice:** confident first-person ("I make slow systems fast") — confirm tone is comfortable.
