import Reveal from "@/components/motion/Reveal";
import { profile } from "@/content/profile";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <footer id="contact" className={styles.section}>
      <div className="container">
        <p className="label">05 — contact</p>
        <Reveal>
          <h2 className={styles.big}>
            Let&rsquo;s build something{" "}
            <span className={styles.accent}>good.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <a href={`mailto:${profile.email}`} className={styles.email}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.row}>
            <div className={styles.links}>
              {profile.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className={styles.link}
                >
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className={styles.meta}>
              <span>
                <i className={styles.dot} aria-hidden="true" />
                {profile.availability}
              </span>
              <span>
                {profile.location} · {profile.timezone}
              </span>
            </div>
          </div>
        </Reveal>

        <div className={styles.colophon}>
          <span>© 2026 Varish Valleti</span>
          <span>Hyderabad, India</span>
        </div>
      </div>
    </footer>
  );
}
