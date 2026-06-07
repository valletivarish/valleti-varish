"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { profile } from "@/content/profile";
import styles from "./Hero.module.css";

const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "AWS",
  "MongoDB",
  "Redis",
  "Docker",
  "Microservices",
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);
    const lines = q("[data-line]");
    const reveals = q("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(lines, { yPercent: 0 });
      gsap.set(reveals, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(lines, { yPercent: 116 });
      gsap.set(reveals, { opacity: 0, y: 20 });
      const tl = gsap.timeline({ delay: 0.12 });
      tl.to(lines, {
        yPercent: 0,
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.1,
      });
      tl.to(
        reveals,
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.09 },
        "-=0.62",
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <header className={styles.hero} id="top" ref={root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.topline} data-reveal>
          <span>{profile.roleLong}</span>
          <span className={styles.spark} aria-hidden="true">
            ✳
          </span>
          <span className={styles.spacer} aria-hidden="true" />
          <span>Portfolio — 2026</span>
        </div>

        <h1 className={styles.name}>
          <span className={styles.line}>
            <span className={styles.lineInner} data-line>
              Varish
            </span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner} data-line>
              Valleti<span className={styles.dot}>.</span>
            </span>
          </span>
        </h1>

        <div className={styles.below}>
          <div className={styles.leftcol}>
            <p className={styles.statement} data-reveal>
              Full-stack engineer building <em>fast</em>, <em>reliable</em>{" "}
              products — front to back.
            </p>
            <div className={styles.cta} data-reveal>
              <a href="#work" className={styles.btnPrimary}>
                Selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener"
                className={styles.btnGhost}
              >
                Résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.metrics} data-reveal>
            <div className={styles.metric}>
              <span className={styles.metricVal}>
                <em>−80%</em>
              </span>
              <span className={styles.metricLabel}>worst-case latency</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricVal}>3,000+</span>
              <span className={styles.metricLabel}>records recovered</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricVal}>12</span>
              <span className={styles.metricLabel}>products shipped</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE, ...MARQUEE].map((k, i) => (
            <span key={i} className={styles.mItem}>
              {k}
              <span className={styles.sep}>✳</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
