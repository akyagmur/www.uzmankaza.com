import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/** İç sayfalar için koyu üst alan: breadcrumb, H1 ve kısa açıklama. */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  description,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-glow relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <Container size="wide" className="relative py-14 lg:py-20">
        <Breadcrumbs items={crumbs} light />
        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">{eyebrow}</p>
          )}
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 text-lg leading-relaxed text-white/75">{description}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}
