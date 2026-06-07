import type { LogEntry } from "./types";

/** The live log stream — real achievements & contributions, newest-feeling first. */
export const logEntries: LogEntry[] = [
  { tag: "PERF", text: "Cut worst-case latency on a high-volume retrieval API 80% (15s → <3s)." },
  { tag: "RELIABILITY", text: "Reduced production exceptions 50% under a Kaizen initiative." },
  { tag: "QUALITY", text: "Cleared 600+ SonarQube issues." },
  { tag: "INCIDENT", text: "Recovered a data-mapping incident affecting 3,000+ policies." },
  { tag: "PLATFORM", text: "Onboarded 12 insurance products via configuration — no code changes." },
  { tag: "PLATFORM", text: "Migrated plan-code assignment to plancode.json; removed 3–4 DB calls/policy." },
  { tag: "MIGRATION", text: "Moved the superannuation flow onto the Falcon track via config-driven APIs." },
  { tag: "INTEGRATION", text: "Extended wrapper APIs with Benefit Illustration for fintech & aggregators." },
  { tag: "PRODUCT", text: "Prefilled 90% of a 6-stage journey; secured with Redis-based OTP." },
  { tag: "AWARD", text: "Excellence Award FY25–26 — Axis Max Life Insurance (MPro)." },
];
