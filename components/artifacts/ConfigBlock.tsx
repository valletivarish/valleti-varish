import styles from "./ConfigBlock.module.css";

function highlight(line: string): string {
  let s = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // trailing comment
  s = s.replace(/(#.*)$/, '<i class="c">$1</i>');
  // leading key:
  s = s.replace(/^(\s*-?\s*[\w]+)(:)/, '<i class="k">$1</i>$2');
  return s;
}

export default function ConfigBlock({
  caption,
  lines,
}: {
  caption: string;
  lines: string[];
}) {
  return (
    <figure className={styles.wrap}>
      <pre className={styles.pre}>
        <code>
          {lines.map((l, i) => (
            <span key={i} className={styles.line}>
              <span className={styles.ln}>{String(i + 1).padStart(2, "0")}</span>
              <span
                className={styles.code}
                dangerouslySetInnerHTML={{ __html: highlight(l) || "&nbsp;" }}
              />
            </span>
          ))}
        </code>
      </pre>
      <figcaption className={styles.cap}>{caption}</figcaption>
    </figure>
  );
}
