"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ms } from "@/lib/format";
import styles from "./LatencyBars.module.css";

export default function LatencyBars({
  beforeMs,
  afterMs,
  label,
}: {
  beforeMs: number;
  afterMs: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const afterPct = Math.max(6, Math.round((afterMs / beforeMs) * 100));
  const deltaPct = Math.round((1 - afterMs / beforeMs) * 100);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const before = el.querySelector("[data-before]");
    const after = el.querySelector("[data-after]");
    if (!before || !after) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([before, after], { scaleX: 1 });
      return;
    }

    gsap.set([before, after], { scaleX: 0, transformOrigin: "left center" });
    let played = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !played) {
            played = true;
            gsap.to(before, { scaleX: 1, duration: 0.7, ease: "power3.out" });
            gsap.to(after, { scaleX: 1, duration: 0.95, ease: "expo.out", delay: 0.15 });
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.wrap} ref={ref}>
      <div className={styles.row}>
        <span className={styles.tag}>before</span>
        <span className={styles.track}>
          <span className={styles.barBefore} data-before />
        </span>
        <span className={styles.val}>{ms(beforeMs)}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.tag}>after</span>
        <span className={styles.track}>
          <span
            className={styles.barAfter}
            data-after
            style={{ width: `${afterPct}%` }}
          />
        </span>
        <span className={styles.valOk}>&lt;{ms(afterMs)}</span>
      </div>
      <div className={styles.delta}>
        <span className={styles.deltaVal}>−{deltaPct}%</span>
        <span className={styles.deltaLabel}>{label}</span>
      </div>
    </div>
  );
}
