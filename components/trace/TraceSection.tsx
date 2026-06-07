"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { featuredProjects } from "@/content/projects";
import Artifact from "@/components/artifacts/Artifact";
import SectionHeader from "@/components/ui/SectionHeader";
import { cx } from "@/lib/format";
import styles from "./TraceSection.module.css";

const ACCENT: Record<string, string> = {
  Performance: "var(--signal)",
  "Platform / Config": "var(--trace)",
  Reliability: "var(--warn)",
  Concurrency: "var(--ok)",
  "Product Impact": "var(--trace)",
};

const LEGEND = [
  { c: "var(--signal)", label: "performance" },
  { c: "var(--trace)", label: "platform / product" },
  { c: "var(--warn)", label: "reliability" },
  { c: "var(--ok)", label: "concurrency" },
];

export default function TraceSection() {
  const [open, setOpen] = useState<string | null>(
    featuredProjects[0]?.slug ?? null,
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray<HTMLElement>("[data-wbar]");
      gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.batch(bars, {
        start: "top 88%",
        onEnter: (els) =>
          gsap.to(els, {
            scaleX: 1,
            stagger: 0.07,
            duration: 0.6,
            ease: "power3.out",
          }),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className={styles.section} ref={sectionRef}>
      <div className="container">
        <SectionHeader
          index="02"
          label="trace"
          title="Selected work, read as a trace."
          intro="Each span is a domain of my work. Open one to read the case-file — problem, diagnosis, fix, and the measured result."
        />

        <div className={styles.legend} aria-hidden="true">
          {LEGEND.map((l) => (
            <span key={l.label} className={styles.legItem}>
              <i style={{ background: l.c }} />
              {l.label}
            </span>
          ))}
        </div>

        <ul className={styles.trace}>
          {featuredProjects.map((p, i) => {
            const isOpen = open === p.slug;
            const accent = ACCENT[p.domain] ?? "var(--trace)";
            return (
              <li
                key={p.slug}
                className={cx(styles.item, isOpen && styles.itemOpen)}
                style={{ "--accent": accent } as React.CSSProperties}
              >
                <button
                  type="button"
                  className={styles.row}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${p.slug}`}
                  onClick={() => setOpen(isOpen ? null : p.slug)}
                >
                  <span className={styles.idx}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.meta}>
                    <span className={styles.name}>{p.span}</span>
                    <span className={styles.domain}>{p.domain}</span>
                  </span>
                  <span className={styles.track}>
                    <span
                      className={styles.bar}
                      data-wbar
                      style={{
                        marginLeft: `${p.bar.offset * 100}%`,
                        width: `${p.bar.width * 100}%`,
                      }}
                    />
                  </span>
                  <span className={styles.metric}>{p.metric.value}</span>
                  <span className={styles.chev} data-open={isOpen} aria-hidden="true">
                    ▸
                  </span>
                </button>

                <div className={styles.panelWrap}>
                  <div
                    id={`panel-${p.slug}`}
                    className={styles.panel}
                    role="region"
                    aria-label={`${p.title} — preview`}
                    inert={!isOpen ? true : undefined}
                  >
                    <div className={styles.panelGrid}>
                      <div className={styles.panelText}>
                        <h3 className={styles.caseTitle}>{p.title}</h3>
                        <p className={styles.oneLiner}>{p.oneLiner}</p>
                        <dl className={styles.kv}>
                          <div>
                            <dt>problem</dt>
                            <dd>{p.problem}</dd>
                          </div>
                          <div>
                            <dt>fix</dt>
                            <dd>{p.fix}</dd>
                          </div>
                        </dl>
                        <ul className={styles.stack}>
                          {p.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                        <a className={styles.openLink} href={`/work/${p.slug}/`}>
                          open full case-file <span aria-hidden="true">▸</span>
                        </a>
                      </div>
                      <div className={styles.panelArt}>
                        {p.artifact ? (
                          <Artifact artifact={p.artifact} />
                        ) : (
                          <div className={styles.metricBig}>
                            <span>{p.metric.value}</span>
                            <small>{p.metric.label}</small>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
