import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnswerBox } from "@/components/content/AnswerBox";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/content/services";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Hizmetlerimiz: Değer Kaybı Tazminatı, Sigorta Tahkim ve Dava",
  description:
    "Uzman Kaza'nın hizmetleri: araç değer kaybı tazminatı, Sigorta Tahkim Komisyonu başvurusu, değer kaybı davası ve icra takibi, kaza sonrası hukuki danışmanlık.",
  path: "/hizmetler",
  keywords: ["değer kaybı avukatı", "sigorta tahkim avukatı", "değer kaybı davası avukatı"],
});

export default function HizmetlerPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/hizmetler",
            name: "Hizmetlerimiz",
            description: "Uzman Kaza'nın araç değer kaybı odaklı hukuki hizmetleri.",
            type: "CollectionPage",
            dateModified: site.lastContentUpdate,
          }),
          ...services.map((s) => serviceSchema({ name: s.title, description: s.description, path: `/hizmetler/${s.slug}` })),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Hizmetler", path: "/hizmetler" }]}
        eyebrow="Hizmetlerimiz"
        title="Araç Değer Kaybına Odaklanmış Hukuki Hizmetler"
        description="Tek bir alanda derinleşiyoruz: trafik kazası sonrası değer kaybı tazminatı ve bağlı sigorta uyuşmazlıkları."
      />
      <Container size="wide" className="py-14 lg:py-20">
        <AnswerBox
          label="Özet"
          text="Uzman Kaza; araç değer kaybı tazminatının sigorta şirketinden tahsili, Sigorta Tahkim Komisyonu başvuruları, değer kaybı davaları ve icra takibi ile kaza sonrası hukuki danışmanlık hizmetleri sunar. Süreç ücretsiz ön değerlendirme ile başlar; ücret ve masraflar ilk görüşmede yazılı olarak paylaşılır."
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </Container>
      <CtaBanner />
    </>
  );
}
