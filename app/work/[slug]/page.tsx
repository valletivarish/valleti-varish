import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import CountUp from "@/components/ui/CountUp";
import Header from "@/components/ui/Header";
import Grain from "@/components/ui/Grain";
import styles from "./case.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Case study" };
  return { title: p.title, description: p.oneLiner };
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <section className={styles.block}>
      <h2 className={styles.blockLabel}>{label}</h2>
      <p className={styles.blockText}>{text}</p>
    </section>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Grain />
      <Header />
      <main id="main" className={styles.wrap}>
        <article className="container">
          <Link href="/#work" className={styles.back}>
            <span aria-hidden="true">←</span> All work
          </Link>

          <p className={styles.domain}>{p.domain}</p>
          <h1 className={styles.title}>{p.title}</h1>
          <p className={styles.oneLiner}>{p.oneLiner}</p>

          <dl className={styles.meta}>
            <div className={styles.metaItem}>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            {p.client ? (
              <div className={styles.metaItem}>
                <dt>Context</dt>
                <dd>{p.client}</dd>
              </div>
            ) : null}
            <div className={styles.metaItem}>
              <dt>When</dt>
              <dd>{p.when}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>Stack</dt>
              <dd>{p.stack.join(", ")}</dd>
            </div>
          </dl>

          <div className={styles.callout}>
            <span className={styles.calloutVal}>
              <CountUp value={p.metric.value} />
            </span>
            <span className={styles.calloutLabel}>
              {p.metric.label}
              {p.metric.meaning ? ` — ${p.metric.meaning}` : ""}
            </span>
          </div>

          <div className={styles.story}>
            <Block label="Problem" text={p.problem} />
            <Block label="Diagnosis" text={p.diagnosis} />
            <Block label="Fix" text={p.fix} />
            <Block label="Impact" text={p.impact} />
          </div>

          <p className={styles.takeaway}>{p.takeaway}</p>

          <Link href={`/work/${next.slug}/`} className={styles.next}>
            <span className={styles.nextLabel}>Next project</span>
            <span className={styles.nextTitle}>
              {next.title} <span aria-hidden="true">→</span>
            </span>
          </Link>
        </article>
      </main>
    </>
  );
}
