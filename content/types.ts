export type Status = "ok" | "warn" | "err";

export interface Metric {
  label: string;
  value: string;
  meaning?: string;
  status?: Status;
}

export type Artifact =
  | { kind: "latency"; beforeMs: number; afterMs: number; label: string }
  | { kind: "config"; caption: string; lines: string[] }
  | { kind: "concurrency"; caption: string }
  | { kind: "query"; caption: string; lines: string[] };

export interface CaseStudy {
  slug: string;
  span: string; // mono span id, e.g. "latency.optimize"
  domain: string; // e.g. "Performance"
  index: number;
  title: string;
  oneLiner: string;
  metric: Metric; // headline metric
  bar: { offset: number; width: number }; // 0..1 placement on the trace timeline
  role: string;
  when: string;
  client?: string;
  stack: string[];
  problem: string;
  diagnosis: string;
  fix: string;
  impact: string;
  takeaway: string;
  featured: boolean;
  artifact?: Artifact;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Profile {
  name: string;
  role: string;
  roleLong: string;
  location: string;
  timezone: string;
  availability: string;
  headline: string;
  positioning: string;
  tagline: string;
  email: string;
  phone: string;
  resume: string;
  links: SocialLink[];
  vitals: Metric[];
}

export interface SkillItem {
  name: string;
  weight?: number; // 0..1 emphasis for core strengths
}

export interface SkillGroup {
  id: string;
  label: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  org: string;
  role: string;
  when: string;
  where: string;
  kind: "work" | "edu";
  client?: string;
  project?: string;
  summary: string;
}

export interface LogEntry {
  tag: string;
  text: string;
}
