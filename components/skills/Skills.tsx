import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/motion/Reveal";
import { skillGroups } from "@/content/skills";
import { cx } from "@/lib/format";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionHeader
          index="03"
          label="capabilities"
          title="The full stack."
          intro="Comfortable end to end — here's what I reach for, front to back."
        />
        <ul className={styles.groups}>
          {skillGroups.map((g) => (
            <li key={g.id} className={styles.group}>
              <Reveal className={styles.groupInner}>
                <span className={styles.groupLabel}>{g.label}</span>
                <p className={styles.items}>
                  {g.items.map((it, i) => (
                    <span key={it.name}>
                      <span
                        className={cx(
                          styles.item,
                          (it.weight ?? 0) >= 0.9 && styles.itemStrong,
                        )}
                      >
                        {it.name}
                      </span>
                      {i < g.items.length - 1 ? (
                        <span className={styles.comma}>,{" "}</span>
                      ) : null}
                    </span>
                  ))}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
