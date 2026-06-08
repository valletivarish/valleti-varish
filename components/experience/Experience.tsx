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
          title="A short history."
          intro="The detailed version is in the projects above — here's the shape of it."
        />
        <ol className={styles.list}>
          {experience.map((e, i) => (
            <li key={i} className={styles.item}>
              <Reveal className={styles.inner}>
                <div className={styles.left}>
                  <span className={styles.period}>{e.when}</span>
                  <span className={styles.where}>{e.where}</span>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.company}>{e.org}</h3>
                  <p className={styles.role}>
                    {e.role}
                    {e.kind === "work" && (e.client || e.project)
                      ? ` — ${[e.client, e.project].filter(Boolean).join(" · ")}`
                      : ""}
                  </p>
                  <p className={styles.summary}>{e.summary}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
