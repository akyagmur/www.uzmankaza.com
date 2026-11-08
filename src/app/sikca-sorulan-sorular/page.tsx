import { PageHeader } from "@/components/layout/PageHeader";
import { LongForm, RelatedLinks } from "@/components/layout/LongForm";
import { AnswerBox } from "@/components/content/AnswerBox";
import { FaqList } from "@/components/content/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { faqCategories, faqs } from "@/content/faq";
import { faqSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Araç Değer Kaybı Sık Sorulan Sorular (SSS)",
  description:
    "Araç değer kaybı hakkında en çok sorulan sorular ve kısa cevapları: kimler alabilir, nasıl hesaplanır, zamanaşımı, sigorta ödemezse ne olur, belgeler ve avukatlık ücreti.",
  path: "/sikca-sorulan-sorular",
  keywords: ["araç değer kaybı sss", "değer kaybı soruları", "değer kaybı hakkında merak edilenler"],
});

export default function SssPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/sikca-sorulan-sorular",
            name: "Araç Değer Kaybı Sık Sorulan Sorular",
            description: "Araç değer kaybı tazminatı hakkında sık sorulan sorular ve cevapları.",
            dateModified: site.lastContentUpdate,
          }),
          faqSchema(faqs),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Sık Sorulan Sorular", path: "/sikca-sorulan-sorular" }]}
        eyebrow="SSS"
        title="Araç Değer Kaybı Hakkında Sık Sorulan Sorular"
        description="Kısa, doğrudan ve hukuken dikkatli cevaplar. Dosyanıza özgü sorular için bize ulaşabilirsiniz."
      />
      <LongForm
        toc={faqCategories.map((c) => ({ id: `kategori-${c.key}`, label: c.label }))}
        aside={
          <RelatedLinks
            links={[
              { href: "/arac-deger-kaybi", label: "Araç değer kaybı rehberi" },
              { href: "/surec", label: "Süreç nasıl işler?" },
              { href: "/rehber", label: "Tüm rehber yazıları" },
            ]}
          />
        }
      >
        <AnswerBox
          label="Özet"
          text="Araç değer kaybı, kusurlu tarafın trafik sigortasından kaza tarihinden itibaren 2 yıl içinde talep edilebilen, aracın onarım sonrası piyasa değerindeki düşüşü karşılayan tazminattır. Sigorta şirketi 15 gün içinde ödemezse Sigorta Tahkim Komisyonu'na başvurulur; tutar bağımsız bilirkişi tarafından belirlenir ve kusur oranı kadar düşülür."
        />
        <div className="mt-10 space-y-12">
          {faqCategories.map((cat) => {
            const items = faqs.filter((f) => f.category === cat.key);
            if (items.length === 0) return null;
            return (
              <section key={cat.key} id={`kategori-${cat.key}`} className="scroll-mt-28" aria-labelledby={`baslik-${cat.key}`}>
                <h2 id={`baslik-${cat.key}`} className="mb-5 font-serif text-2xl text-navy-900">
                  {cat.label}
                </h2>
                <FaqList faqs={items} />
              </section>
            );
          })}
        </div>
      </LongForm>
      <CtaBanner title="Sorunuz burada yok mu?" description="Dosyanıza özgü sorularınızı WhatsApp veya telefonla iletin; ücretsiz ön değerlendirme ile birlikte cevaplayalım." />
    </>
  );
}
