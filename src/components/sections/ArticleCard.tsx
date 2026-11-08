import Link from "next/link";
import type { Article } from "@/content/types";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { formatDateTr } from "@/lib/text";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-lift">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-gold-600">
        <span>{article.category}</span>
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-300" />
        <span className="text-ink-500 normal-case tracking-normal">{article.readingMinutes} dk okuma</span>
      </div>
      <h3 className={`mt-4 font-serif leading-snug text-navy-900 ${featured ? "text-2xl" : "text-xl"}`}>
        <Link href={`/rehber/${article.slug}`} className="after:absolute after:inset-0 relative">
          {article.seoTitle}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-500">{article.description}</p>
      <div className="mt-5 flex items-center justify-between text-sm">
        <time dateTime={article.dateModified} className="text-ink-500">
          Güncelleme: {formatDateTr(article.dateModified)}
        </time>
        <span className="inline-flex items-center gap-1.5 font-semibold text-navy-900">
          Oku <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
