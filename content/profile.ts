import type { Profile } from "./types";

export const profile: Profile = {
  name: "Varish Valleti",
  role: "Full-Stack Software Engineer",
  roleLong: "Full-Stack Software Engineer",
  location: "Hyderabad, India",
  timezone: "IST · UTC+5:30",
  availability: "Open to full-stack & software engineering roles",
  headline: "I build full-stack products that ship fast and stay reliable.",
  positioning:
    "Full-stack software engineer. I build products end to end — React on the front; Java, Spring Boot and AWS on the back — and make them fast and reliable. −80% worst-case API latency, a 3,000+ record incident recovered, 12 products shipped.",
  tagline: "full-stack engineer · react · spring boot · aws",
  email: "varishvalleti52@gmail.com",
  phone: "+91 8919504427",
  resume: "/Varish_Valleti_Resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/valletivarish", handle: "valletivarish" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/valletivarish",
      handle: "in/valletivarish",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/varishvalleti52",
      handle: "varishvalleti52",
    },
  ],
  vitals: [
    {
      label: "p-worst latency",
      value: "−80%",
      meaning: "15s → <3s on a critical API",
      status: "ok",
    },
    {
      label: "prod exceptions",
      value: "−50%",
      meaning: "Kaizen reliability initiative",
      status: "ok",
    },
    {
      label: "policies recovered",
      value: "3,000+",
      meaning: "data-mapping incident, resolved",
      status: "ok",
    },
    {
      label: "products onboarded",
      value: "12",
      meaning: "config-driven, no code changes",
      status: "ok",
    },
    {
      label: "recognition",
      value: "Excellence Award",
      meaning: "FY25–26 · Axis Max Life",
      status: "ok",
    },
  ],
};
