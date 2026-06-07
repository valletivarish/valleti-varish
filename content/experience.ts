import type { ExperienceItem } from "./types";

/** Career as a deployment changelog — newest first. */
export const experience: ExperienceItem[] = [
  {
    org: "Monocept",
    role: "Software Engineer",
    when: "Nov 2024 — Present",
    where: "Hyderabad, India",
    kind: "work",
    client: "Axis Max Life Insurance",
    project: "MPro",
    tag: "v2.0 · prod",
    notes: [
      "Built a config-driven product onboarding system across 12 insurance products (Coherent Spark → JSON on S3 via CloudFront); migrated plan-code assignment to plancode.json, removing 3–4 DB calls per policy.",
      "Migrated the superannuation (group/business) flow onto the Falcon track via config-driven APIs — product setup without code changes.",
      "Implemented proposal data mapping between mSales and MPro, ensuring parity across products; extended wrapper APIs with Benefit Illustration for fintech & aggregator integrations.",
      "Built a policy-retrieval flow (policy no. / PAN / phone + DOB) prefilling 90% of a 6-stage journey, secured with Redis-based OTP.",
      "Owned production support, hotfix deploys, and hypercare; monitored via Kibana & CloudWatch; managed CI/CD in GitLab & Jenkins.",
    ],
  },
  {
    org: "Monocept",
    role: "Software Intern",
    when: "May 2024 — Nov 2024",
    where: "Hyderabad, India",
    kind: "work",
    tag: "v1.0",
    notes: [
      "Built full-stack modules for an insurance management system (Spring Boot, React, MySQL, Redis) covering core policy and customer flows.",
      "Implemented JWT authentication and Spring Security role-based access across multiple roles.",
      "Designed RESTful APIs for policy, claims, and payment workflows; tuned MySQL queries with indexing for faster reporting.",
    ],
  },
  {
    org: "Anurag University",
    role: "B.Tech, Artificial Intelligence",
    when: "Nov 2020 — Jun 2024",
    where: "Hyderabad, India",
    kind: "edu",
    tag: "CGPA 7.9",
    notes: ["Bachelor of Technology in Artificial Intelligence."],
  },
];
