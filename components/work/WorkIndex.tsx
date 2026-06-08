"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects } from "@/content/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import { cx } from "@/lib/format";
import styles from "./WorkIndex.module.css";

export default function WorkIndex() {
  const ref = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const lastShown = useRef(projects[0]);
  const [active, setActive] = useState<number | null>(null);

  // row reveal on scroll
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

  // cursor-following preview card
  useEffect(() => {
    const pv = previewRef.current;
    if (!pv) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    )
      return;

    const xTo = gsap.quickTo(pv, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(pv, "y", { duration: 0.5, ease: "power3.out" });
    const onMove = (e: MouseEvent) => {
      xTo(e.clientX + 26);
      yTo(e.clientY - 18);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const ap = active != null ? projects[active] : null;
  if (ap) lastShown.current = ap;
  const shown = lastShown.current;

  return (
    <section id="work" className={styles.section} ref={ref}>
      <div className="container">
        <SectionHeader
          index="01"
          label="selected work"
          title="Things I've shipped."
          intro="Five problems worth solving — the approach and the measured result for each. Open one for the full story."
        />

        <ul className={styles.list} onMouseLeave={() => setActive(null)}>
          {projects.map((p, i) => (
            <li
              key={p.slug}
              className={styles.row}
              data-row
              onMouseEnter={() => setActive(i)}
            >
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

      <div
        ref={previewRef}
        className={cx(styles.preview, ap && styles.previewOn)}
        aria-hidden="true"
      >
        <span className={styles.previewMetric}>{shown.metric.value}</span>
        <span className={styles.previewDomain}>{shown.domain}</span>
        <span className={styles.previewCue}>open case-file ↗</span>
      </div>
    </section>
  );
}
