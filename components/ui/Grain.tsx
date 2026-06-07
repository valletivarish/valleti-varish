import styles from "./Grain.module.css";

/** Fixed film-grain + vignette overlay for atmosphere. Purely decorative. */
export default function Grain() {
  return (
    <>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
    </>
  );
}
