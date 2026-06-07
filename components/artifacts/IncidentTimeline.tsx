import styles from "./IncidentTimeline.module.css";

export default function IncidentTimeline({
  caption,
  lines,
}: {
  caption: string;
  lines: string[];
}) {
  return (
    <figure className={styles.wrap}>
      <ol className={styles.steps}>
        {lines.map((l, i) => {
          const parts = l.split("▸");
          const head = (parts[0] ?? "").trim();
          const rest = parts.slice(1).join("▸").trim();
          return (
            <li key={i} className={styles.step}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.k}>{head}</span>
              <span className={styles.v}>{rest}</span>
            </li>
          );
        })}
      </ol>
      <figcaption className={styles.cap}>{caption}</figcaption>
    </figure>
  );
}
