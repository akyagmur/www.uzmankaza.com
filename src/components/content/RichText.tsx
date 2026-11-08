import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Çok hafif satır içi biçimlendirme: **kalın** ve [metin](/yol) bağlantıları.
 * Markdown bağımlılığı eklemeden içerik dosyalarında vurgulama yapılmasını sağlar.
 */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<strong key={i++}>{m[1]}</strong>);
    } else {
      const href = m[3];
      parts.push(
        href.startsWith("/") ? (
          <Link key={i++} href={href}>
            {m[2]}
          </Link>
        ) : (
          <a key={i++} href={href} rel="noopener noreferrer" target="_blank">
            {m[2]}
          </a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Düz metin sürümü (llms.txt vb. için). */
export function plainText(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}
