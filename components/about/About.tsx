import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/motion/Reveal";
import styles from "./About.module.css";

const FACTS = [
  { k: "Based in", v: "Hyderabad, India · IST" },
  { k: "Now", v: "Software Engineer @ Monocept" },
  { k: "Education", v: "B.Tech, Artificial Intelligence — CGPA 7.9" },
  { k: "Recognition", v: "Excellence Award, FY25–26" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <SectionHeader
          index="02"
          label="about"
          title="The engineer behind the work."
        />
        <div className={styles.grid}>
          <Reveal className={styles.media}>
            <figure className={styles.figure}>
              <img
                src="/about-ceremony.jpg"
                alt="Varish Valleti receiving the Excellence Award (FY25–26) at Axis Max Life Insurance"
                className={styles.photo}
                width={920}
                height={1255}
                loading="lazy"
              />
              <figcaption className={styles.cap}>
                Excellence Award, FY25–26 — Axis Max Life Insurance
              </figcaption>
            </figure>
          </Reveal>

          <div className={styles.body}>
            <Reveal>
              <p className={styles.lead}>
                I&rsquo;m a full-stack software engineer based in Hyderabad. I
                joined Monocept as an intern in 2024 and moved to software
                engineer within six months — building and shipping features on
                Axis Max Life Insurance&rsquo;s MPro platform.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className={styles.para}>
                I like the whole stack: a clean React flow on the front, and the
                Spring Boot services, queries and AWS plumbing that make it fast
                and reliable on the back. The work I&rsquo;m proudest of is the
                unglamorous kind — turning a 15-second request into a 3-second
                one, or a 3&nbsp;a.m. incident into a clean fix.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className={styles.facts}>
                {FACTS.map((f) => (
                  <div key={f.k} className={styles.fact}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
