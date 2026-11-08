import Link from "next/link";
import { services } from "@/content/services";
import { ArrowRightIcon, iconMap } from "@/components/ui/Icons";

export function ServicesGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {services.map((s) => {
        const Icon = iconMap[s.icon];
        return (
          <li key={s.slug}>
            <Link
              href={`/hizmetler/${s.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-lift"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <Icon size={24} />
              </span>
              <h3 className="font-serif text-xl text-navy-900">{s.title}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-500">{s.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                Detaylı bilgi
                <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
