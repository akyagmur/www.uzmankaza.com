import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

export type Crumb = { name: string; path: string };

/** Görsel breadcrumb + BreadcrumbList JSON-LD. İlk öğe her zaman Ana Sayfa'dır. */
export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const all: Crumb[] = [{ name: "Ana Sayfa", path: "/" }, ...items];
  const color = light ? "text-white/70" : "text-ink-500";
  const active = light ? "text-white" : "text-navy-900";
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(all))} />
      <nav aria-label="Sayfa yolu" className={`text-sm ${color}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={`font-medium ${active}`}>
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:underline underline-offset-4">
                    {c.name}
                  </Link>
                )}
                {!last && <span aria-hidden="true" className="opacity-50">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
