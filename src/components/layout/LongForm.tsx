import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";
import { slugify } from "@/lib/text";

export type TocItem = { id: string; label: string };

export function tocFromHeadings(headings: string[]): TocItem[] {
  return headings.map((h) => ({ id: slugify(h), label: h }));
}

/** Uzun içerikler için iki sütunlu düzen: içerik + yapışkan "Bu sayfada" ve CTA kartı. */
export function LongForm({ children, toc, aside }: { children: ReactNode; toc?: TocItem[]; aside?: ReactNode }) {
  return (
    <Container size="wide" className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-20">
      <div className="min-w-0">{children}</div>
      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        {toc && toc.length > 0 && (
          <nav aria-label="Bu sayfada" className="rounded-2xl border border-cream-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Bu sayfada</p>
            <ol className="mt-4 space-y-2.5 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-ink-700 hover:text-navy-900 hover:underline underline-offset-4">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-lift">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Ücretsiz ön değerlendirme</p>
          <p className="mt-3 font-serif text-xl leading-snug">Dosyanız değer kaybına uygun mu? Aynı gün cevap verelim.</p>
          <div className="mt-5 space-y-2.5">
            <Button href={whatsappUrl} variant="whatsapp" className="w-full">
              <WhatsAppIcon /> WhatsApp
            </Button>
            <Button href={telUrl} variant="outline-light" className="w-full">
              <PhoneIcon /> {site.contact.phoneDisplay}
            </Button>
            <Button href="/iletisim" variant="primary" className="w-full">
              Form ile başvur
            </Button>
          </div>
        </div>
        {aside}
      </aside>
    </Container>
  );
}

export function RelatedLinks({ title = "İlgili sayfalar", links }: { title?: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title} className="rounded-2xl border border-cream-200 bg-white p-6 shadow-soft">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-700 hover:text-navy-900 hover:underline underline-offset-4">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
