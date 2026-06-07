"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects } from "@/content/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./WorkIndex.module.css";

export default function WorkIndex() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-row]");
      gsap.set(rows, { opacity: 0, y: 26 });
      ScrollTrigger.batch(rows, {
        start: "top 90%",
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
          }),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className={styles.section} ref={ref}>
      <div className="container">
        <SectionHeader
          index="01"
          label="selected work"
          title="Things I've shipped."
          intro="Five problems worth solving — the approach and the measured result for each. Open one for the full story."
        />

        <ul className={styles.list}>
          {projects.map((p, i) => (
            <li key={p.slug} className={styles.row} data-row>
              <a
                href={`/work/${p.slug}/`}
                className={styles.link}
                aria-label={`${p.title} — open case study`}
              >
                <span className={styles.idx}>0{i + 1}</span>
                <span className={styles.main}>
                  <span className={styles.title}>{p.title}</span>
                  <span className={styles.oneLiner}>{p.oneLiner}</span>
                </span>
                <span className={styles.meta}>
                  <span className={styles.metric}>{p.metric.value}</span>
                  <span className={styles.year}>{p.when}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
