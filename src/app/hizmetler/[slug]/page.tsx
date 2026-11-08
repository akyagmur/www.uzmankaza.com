import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { LongForm, RelatedLinks } from "@/components/layout/LongForm";
import { AnswerBox } from "@/components/content/AnswerBox";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FaqSection } from "@/components/content/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CheckIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { getService, services } from "@/content/services";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function HizmetPage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: `/hizmetler/${service.slug}`,
            name: service.title,
            description: service.description,
            dateModified: site.lastContentUpdate,
          }),
          serviceSchema({ name: service.title, description: service.description, path: `/hizmetler/${service.slug}` }),
        )}
      />
      <PageHeader
        crumbs={[
          { name: "Hizmetler", path: "/hizmetler" },
          { name: service.shortTitle, path: `/hizmetler/${service.slug}` },
        ]}
        eyebrow="Hizmet"
        title={service.title}
        description={service.description}
      />
      <LongForm
        aside={
          <RelatedLinks
            title="Diğer hizmetler"
            links={others.map((s) => ({ href: `/hizmetler/${s.slug}`, label: s.title }))}
          />
        }
      >
        <AnswerBox label="Özet" text={service.answerFirst} />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 rounded-xl border border-cream-200 bg-white px-4 py-3 text-[0.95rem] text-ink-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                <CheckIcon size={12} strokeWidth={3} />
              </span>
              {h}
            </li>
          ))}
        </ul>
        <div className="prose-legal mt-10">
          <ContentBlocks blocks={service.body} />
        </div>
        {service.faqs.length > 0 && (
          <div className="mt-16">
            <FaqSection faqs={service.faqs} compact title="Bu hizmetle ilgili sorular" />
          </div>
        )}
      </LongForm>
      <CtaBanner />
    </>
  );
}
