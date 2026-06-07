"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Animates the numeric part of a string from 0 to its value when scrolled into
 * view, preserving any prefix/suffix (e.g. "−80%", "3,000+"). Renders the final
 * value for SSR / no-JS / reduced-motion.
 */
export default function CountUp({
  value,
  startDelay = 0,
  className,
}: {
  value: string;
  startDelay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)([\d,]+)(.*)$/);
    if (!match) return; // no number to animate; leave the static value

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const prefix = match[1] ?? "";
    const suffix = match[3] ?? "";
    const target = parseInt(match[2].replace(/,/g, ""), 10);

    el.textContent = prefix + "0" + suffix;
    const obj = { n: 0 };
    let tween: gsap.core.Tween | null = null;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !tween) {
            tween = gsap.to(obj, {
              n: target,
              duration: 1.1,
              delay: startDelay,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent =
                  prefix + Math.round(obj.n).toLocaleString("en-US") + suffix;
              },
            });
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      tween?.kill();
    };
  }, [value, startDelay]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
