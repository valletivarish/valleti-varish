import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/styles/tokens.css";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { profile } from "@/content/profile";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});
const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://valleti-varish.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Varish Valleti — Full-Stack Software Engineer",
    template: "%s — Varish Valleti",
  },
  description: profile.positioning,
  keywords: [
    "Varish Valleti",
    "full-stack software engineer",
    "software engineer",
    "React",
    "Java",
    "Spring Boot",
    "AWS",
    "Hyderabad",
    "developer portfolio",
  ],
  authors: [{ name: "Varish Valleti", url: "https://github.com/valletivarish" }],
  creator: "Varish Valleti",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Varish Valleti",
    title: "Varish Valleti — Full-Stack Software Engineer",
    description: profile.positioning,
  },
  twitter: {
    card: "summary_large_image",
    title: "Varish Valleti — Full-Stack Software Engineer",
    description: profile.positioning,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.roleLong,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Monocept" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Anurag University" },
  sameAs: profile.links.map((l) => l.href),
  knowsAbout: [
    "Full-Stack Development",
    "React",
    "Java",
    "Spring Boot",
    "AWS",
    "Distributed Systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
