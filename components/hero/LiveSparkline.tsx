"use client";

import { useEffect, useRef } from "react";

function toRGBA(color: string, a: number): string {
  const m = color.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return color;
  return `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${a})`;
}

/** Continuously scrolling latency waveform (APM-style). Static under reduced motion. */
export default function LiveSparkline({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const N = 150;
    const data: number[] = new Array(N).fill(0.22);
    const stroke =
      getComputedStyle(canvas).color.trim() || "rgb(102, 210, 255)";

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      // baseline
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.6);
      ctx.lineTo(w, h * 0.6);
      ctx.stroke();

      const stepX = w / (N - 1);
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = i * stepX;
        const y = h - data[i] * h * 0.92 - h * 0.04;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      // area fill
      ctx.save();
      const fillPath = new Path2D();
      for (let i = 0; i < N; i++) {
        const x = i * stepX;
        const y = h - data[i] * h * 0.92 - h * 0.04;
        if (i === 0) fillPath.moveTo(x, y);
        else fillPath.lineTo(x, y);
      }
      fillPath.lineTo(w, h);
      fillPath.lineTo(0, h);
      fillPath.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, toRGBA(stroke, 0.22));
      grad.addColorStop(1, toRGBA(stroke, 0));
      ctx.fillStyle = grad;
      ctx.fill(fillPath);
      ctx.restore();
      // line
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = stroke;
      ctx.shadowBlur = 7;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (let i = 0; i < N; i++) {
        data[i] = 0.2 + (i % 19 === 0 ? 0.55 : 0) + Math.sin(i * 0.4) * 0.05;
      }
      render();
      return () => ro.disconnect();
    }

    let tick = 0;
    let cooldown = 0;
    const step = () => {
      let base = 0.2 + Math.sin(tick * 0.05) * 0.04 + (Math.random() - 0.5) * 0.06;
      if (cooldown <= 0 && Math.random() < 0.045) {
        base = 0.62 + Math.random() * 0.34;
        cooldown = 14 + Math.random() * 22;
      }
      cooldown--;
      tick++;
      data.push(Math.max(0.05, Math.min(0.98, base)));
      if (data.length > N) data.shift();
      render();
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ color: "var(--trace)" }}
    />
  );
}
