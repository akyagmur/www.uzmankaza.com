import type { Faq } from "@/content/types";
import { ChevronDownIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, graph } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Sık sorulan sorular bloğu. Native <details> kullanır: JavaScript gerektirmez,
 * erişilebilirdir ve yanıt metni HTML'de açık olarak yer aldığından arama motorları
 * ve LLM tarayıcıları tarafından doğrudan okunur.
 */
export function FaqSection({
  faqs,
  title = "Sık Sorulan Sorular",
  eyebrow = "SSS",
  description,
  withSchema = true,
  headingLevel = "h2",
  compact = false,
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  description?: string;
  withSchema?: boolean;
  headingLevel?: "h2" | "h3";
  compact?: boolean;
}) {
  return (
    <section aria-labelledby="sss-baslik">
      {withSchema && <JsonLd data={graph(faqSchema(faqs))} />}
      {!compact && (
        <div className="mb-10" id="sss-baslik">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} as={headingLevel} />
        </div>
      )}
      {compact && (
        <h2 id="sss-baslik" className="mb-6 font-serif text-2xl text-navy-900">
          {title}
        </h2>
      )}
      <FaqList faqs={faqs} />
    </section>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-cream-200 rounded-2xl border border-cream-200 bg-white shadow-soft">
      {faqs.map((f, i) => (
        <details key={i} className="group" name="faq">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-left font-semibold text-navy-900 hover:bg-cream-50 [&::-webkit-details-marker]:hidden">
            <h3 className="text-base sm:text-[1.05rem] leading-snug">{f.question}</h3>
            <ChevronDownIcon className="faq-chevron mt-0.5 shrink-0 text-gold-600 transition-transform duration-200" />
          </summary>
          <div className="px-6 pb-6 -mt-1 text-[0.97rem] leading-relaxed text-ink-700">
            <p>{f.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
