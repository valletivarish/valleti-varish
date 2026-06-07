import styles from "./ConcurrencyDiagram.module.css";

const REQS = ["req A", "req B", "req C", "req D"];

export default function ConcurrencyDiagram({ caption }: { caption: string }) {
  return (
    <figure className={styles.wrap}>
      <div className={styles.diagram}>
        <div className={styles.col}>
          {REQS.map((r) => (
            <span key={r} className={styles.req}>
              {r}
            </span>
          ))}
        </div>
        <div className={styles.arrow} aria-hidden="true">
          →
        </div>
        <div className={styles.lock}>
          <span className={styles.lockTitle}>seat #42</span>
          <span className={styles.mutex}>mutex / lock</span>
        </div>
        <div className={styles.arrow} aria-hidden="true">
          →
        </div>
        <div className={styles.col}>
          <span className={styles.ok}>✓ A reserved</span>
          <span className={styles.rej}>✗ B rejected</span>
          <span className={styles.rej}>✗ C rejected</span>
          <span className={styles.rej}>✗ D rejected</span>
        </div>
      </div>
      <figcaption className={styles.cap}>{caption}</figcaption>
    </figure>
  );
}
