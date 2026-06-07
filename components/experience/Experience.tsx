import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/motion/Reveal";
import { experience } from "@/content/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <SectionHeader
          index="04"
          label="experience"
          title="Where I've worked."
        />
        <ol className={styles.list}>
          {experience.map((e, i) => (
            <li key={i} className={styles.item}>
              <Reveal className={styles.itemInner}>
                <div className={styles.when}>{e.when}</div>
                <div className={styles.body}>
                  <h3 className={styles.role}>{e.role}</h3>
                  <p className={styles.sub}>
                    {e.kind === "work"
                      ? [e.org, e.client, e.project].filter(Boolean).join(" · ")
                      : `${e.org} · ${e.tag}`}
                  </p>
                  <ul className={styles.notes}>
                    {e.notes.map((n, j) => (
                      <li key={j}>{n}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
