/** Tiny className combiner (no dependency). */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Format milliseconds as a human latency string: 15000 -> "15s", 2800 -> "2.8s". */
export function ms(value: number): string {
  if (value >= 1000) {
    const s = value / 1000;
    return `${s % 1 === 0 ? s.toFixed(0) : s.toFixed(1)}s`;
  }
  return `${value}ms`;
}
