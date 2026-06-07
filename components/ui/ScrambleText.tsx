"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&$/<>*+=";

/**
 * Decodes text from random glyphs to the final string, left-to-right.
 * SSR / no-JS / reduced-motion render the final text directly.
 */
export default function ScrambleText({
  text,
  className,
  delay = 0,
  speed = 1,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = text;
      return;
    }

    const total = text.length;
    const dur = (420 + total * 48) * speed;
    let raf = 0;
    let startTime = 0;
    const startAt = performance.now() + delay * 1000;

    const tick = (now: number) => {
      if (now < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      if (!startTime) startTime = now;
      const t = Math.min(1, (now - startTime) / dur);
      const edge = t * total;
      let out = "";
      for (let i = 0; i < total; i++) {
        const ch = text[i];
        if (ch === " ") {
          out += " ";
        } else if (i < edge - 1) {
          out += ch;
        } else if (i < edge + 7) {
          out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
        } else {
          out += " ";
        }
      }
      el.textContent = out;
      if (t < 1) raf = requestAnimationFrame(tick);
      else el.textContent = text;
    };

    el.textContent = " ";
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delay, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text}
    </span>
  );
}
