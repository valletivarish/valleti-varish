import type { ExperienceItem } from "./types";

/** Career as a short editorial history — narrative, not a résumé bullet list. */
export const experience: ExperienceItem[] = [
  {
    org: "Monocept",
    role: "Software Engineer",
    when: "Nov 2024 — Present",
    where: "Hyderabad, India",
    kind: "work",
    client: "Axis Max Life Insurance",
    project: "MPro",
    summary:
      "Building and operating the MPro insurance platform end to end — config-driven product onboarding across a dozen products, production ownership and hotfixes, and the performance and reliability work detailed in the projects above.",
  },
  {
    org: "Monocept",
    role: "Software Intern",
    when: "May 2024 — Nov 2024",
    where: "Hyderabad, India",
    kind: "work",
    summary:
      "Where I started on the full stack — Spring Boot, React, MySQL and Redis — building core policy, claims and payment flows behind JWT-secured, role-based access.",
  },
  {
    org: "Anurag University",
    role: "B.Tech, Artificial Intelligence",
    when: "2020 — 2024",
    where: "Hyderabad, India",
    kind: "edu",
    summary:
      "B.Tech in Artificial Intelligence, graduated at 7.9 CGPA — where the curiosity for how systems behave under real load began.",
  },
];
