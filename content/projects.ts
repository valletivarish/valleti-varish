import type { CaseStudy } from "./types";

/**
 * The spans of the root trace. Order = visual order in the waterfall.
 * `bar.offset` / `bar.width` are 0..1 positions on the trace timeline —
 * tuned so the spans read like real, overlapping distributed-trace spans.
 */
export const projects: CaseStudy[] = [
  {
    slug: "latency-optimization",
    span: "latency.optimize",
    domain: "Performance",
    index: 0,
    title: "The 15-second query",
    oneLiner:
      "Cut a critical high-volume API's worst-case latency by 80% — from 15s to under 3s.",
    metric: { label: "p-worst latency", value: "−80%", meaning: "15s → <3s", status: "ok" },
    bar: { offset: 0.0, width: 0.34 },
    role: "Software Engineer",
    when: "2024–2025",
    client: "Axis Max Life Insurance · MPro",
    stack: ["Java", "Spring Boot", "MongoDB", "CompletableFuture"],
    problem:
      "A high-volume data-retrieval API had a worst-case latency around 15 seconds, dragging down every downstream journey that depended on it.",
    diagnosis:
      "The hot path ran full-collection scans over nested documents and issued its reads sequentially — so latency grew with the data and blocked on I/O it could have overlapped.",
    fix: "Introduced nested-document indexing to eliminate the full-collection scans, then parallelized the independent reads with CompletableFuture so I/O overlapped instead of stacking.",
    impact:
      "Worst-case latency dropped from ~15s to under 3s — an 80% reduction — and the endpoint became predictable under load.",
    takeaway: "Finds the real bottleneck and ships a measurable, large win.",
    featured: true,
    artifact: {
      kind: "latency",
      beforeMs: 15000,
      afterMs: 3000,
      label: "worst-case latency",
    },
  },
  {
    slug: "config-driven-onboarding",
    span: "config.onboard",
    domain: "Platform / Config",
    index: 1,
    title: "Twelve products, zero code changes",
    oneLiner:
      "Built a config-driven onboarding system so new insurance products launch without code — across 12 products.",
    metric: {
      label: "products onboarded",
      value: "12",
      meaning: "0 code changes",
      status: "ok",
    },
    bar: { offset: 0.08, width: 0.5 },
    role: "Software Engineer",
    when: "2024–Present",
    client: "Axis Max Life Insurance · MPro",
    stack: ["Java", "Spring Boot", "AWS S3", "CloudFront", "Coherent Spark", "JSON"],
    problem:
      "Onboarding each of 12 insurance products meant bespoke code, and plan-code assignment cost 3–4 database calls on every policy.",
    diagnosis:
      "Product behavior was hard-coded and the hot path repeated the same lookups — every new product was an engineering project and every policy paid a DB tax.",
    fix: "Externalized product behavior into configuration (Coherent Spark → JSON on S3, delivered via CloudFront) and migrated plan-code assignment to a static plancode.json.",
    impact:
      "New products are configured, not coded; plan-code resolution dropped 3–4 DB calls per policy.",
    takeaway: "Thinks in platforms — turns repeated work into configuration.",
    featured: true,
    artifact: undefined,
  },
  {
    slug: "incident-recovery",
    span: "incident.recover",
    domain: "Reliability",
    index: 2,
    title: "The 3,000-policy incident",
    oneLiner:
      "Diagnosed and resolved a production data-mapping incident affecting 3,000+ policies, restoring end-to-end integrity.",
    metric: {
      label: "policies restored",
      value: "3,000+",
      meaning: "data integrity recovered",
      status: "ok",
    },
    bar: { offset: 0.34, width: 0.16 },
    role: "Software Engineer · production support",
    when: "2025",
    client: "Axis Max Life Insurance · MPro",
    stack: ["Java", "Spring Boot", "Kibana", "CloudWatch"],
    problem:
      "Production proposal data was being mapped incorrectly between systems, and 3,000+ policies were affected.",
    diagnosis:
      "Traced the discrepancy through Kibana and CloudWatch logs to a mapping defect between the source and target systems.",
    fix: "Corrected the mapping, shipped a hotfix, and reconciled the affected records end-to-end under hypercare.",
    impact:
      "All 3,000+ affected policies restored to full data integrity, with monitoring in place to confirm the fix held.",
    takeaway: "Calm under production pressure; owns incidents to resolution.",
    featured: true,
    artifact: {
      kind: "query",
      caption: "incident timeline",
      lines: [
        "detect   ▸ data parity alert (source ≠ target)",
        "trace    ▸ Kibana + CloudWatch → mapping defect",
        "hotfix   ▸ corrected mapping, deployed",
        "reconcile▸ 3,000+ policies → integrity restored",
        "hypercare▸ monitored, confirmed stable",
      ],
    },
  },
  {
    slug: "concurrency-safe-booking",
    span: "concurrency.safe",
    domain: "Concurrency",
    index: 3,
    title: "No double-booked seats",
    oneLiner:
      "Building an event-booking system whose seat reservation is concurrency-safe by design — double-booking is impossible.",
    metric: { label: "double-bookings", value: "0", meaning: "safe under contention", status: "ok" },
    bar: { offset: 0.46, width: 0.32 },
    role: "Solo project",
    when: "2026–Present",
    stack: ["Spring Boot", "MySQL", "Redis", "Docker", "AWS", "JWT", "Swagger"],
    problem:
      "When many buyers race for the same seat, a naive booking flow double-books it — a correctness failure, not just a bug.",
    diagnosis:
      "Classic concurrency hazard: unguarded read-modify-write on shared seat inventory under contention.",
    fix: "Designed a concurrency-safe reservation path, cached hot event data in Redis, secured the API with JWT + Spring Security, containerized with Docker, deployed on AWS, and documented the REST API with Swagger.",
    impact:
      "Correctness holds under contention (no double-booking) while reads stay fast via cache.",
    takeaway: "Self-directed; reasons about concurrency correctness, not just CRUD.",
    featured: true,
    artifact: { kind: "concurrency", caption: "seat reservation under contention" },
  },
  {
    slug: "prefilled-journey",
    span: "journey.prefill",
    domain: "Product Impact",
    index: 4,
    title: "A journey that fills itself in",
    oneLiner:
      "A retrieval flow that prefills 90% of a 6-stage customer journey, secured with Redis-based OTP.",
    metric: { label: "journey prefilled", value: "90%", meaning: "6 stages · Redis-OTP", status: "ok" },
    bar: { offset: 0.2, width: 0.24 },
    role: "Software Engineer",
    when: "2025",
    client: "Axis Max Life Insurance · MPro",
    stack: ["Java", "Spring Boot", "Redis"],
    problem:
      "Customers re-entered the same details across a 6-stage journey, adding friction and drop-off.",
    diagnosis:
      "The journey had no way to recognize a returning customer or hydrate known data safely.",
    fix: "Built a lookup accepting policy number, PAN, or phone + date of birth; prefilled 90% of the journey and gated access behind Redis-based OTP verification.",
    impact: "90% of a 6-stage journey arrives prefilled, secured by OTP.",
    takeaway: "Connects backend work to real user and business outcomes.",
    featured: true,
    artifact: undefined,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
