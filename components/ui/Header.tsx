"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/format";
import styles from "./Header.module.css";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <div className={cx("container", styles.bar)}>
        <a href="#top" className={styles.brand} aria-label="Varish Valleti — home">
          Varish Valleti<span className={styles.dot}>.</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} className={styles.link}>
              <span className={styles.linkIdx}>0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.avail}>
          <i />
          Available for work
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.menuIcon} data-open={open} />
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id="mobile-nav" className={cx(styles.mobile, open && styles.mobileOpen)}>
        <nav aria-label="Mobile">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className={styles.mlink}
              onClick={() => setOpen(false)}
            >
              <span className={styles.mindex}>0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
