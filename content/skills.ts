import type { SkillGroup } from "./types";

/** Full-stack capability map, grouped by layer. weight = core-strength emphasis. */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", weight: 1 },
      { name: "JavaScript", weight: 0.9 },
      { name: "HTML", weight: 0.8 },
      { name: "CSS", weight: 0.8 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Java", weight: 1 },
      { name: "Spring Boot", weight: 1 },
      { name: "Spring Security", weight: 0.8 },
      { name: "Microservices", weight: 0.9 },
      { name: "REST APIs", weight: 0.9 },
      { name: "JWT Auth", weight: 0.7 },
      { name: "JPA", weight: 0.7 },
    ],
  },
  {
    id: "data",
    label: "Databases",
    items: [
      { name: "MySQL", weight: 0.9 },
      { name: "MongoDB", weight: 0.9 },
      { name: "Redis", weight: 0.9 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud · AWS",
    items: [
      { name: "EC2" },
      { name: "S3" },
      { name: "RDS" },
      { name: "CloudFront" },
      { name: "CloudWatch" },
      { name: "IAM" },
      { name: "Parameter Store" },
    ],
  },
  {
    id: "ops",
    label: "Tooling & Practices",
    items: [
      { name: "Git" },
      { name: "GitLab" },
      { name: "Jenkins" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Swagger" },
      { name: "Kibana" },
      { name: "SonarQube" },
      { name: "Jira" },
      { name: "Agile" },
      { name: "SOLID" },
    ],
  },
];
