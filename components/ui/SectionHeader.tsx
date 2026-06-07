import { cx } from "@/lib/format";
import Reveal from "@/components/motion/Reveal";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className={styles.head}>
      <Reveal>
        <p className={cx("label", styles.kicker)}>
          <span className={styles.idx}>{index}</span>
          <span className={styles.rule} aria-hidden="true" />
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className={styles.title}>{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className={styles.intro}>{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
