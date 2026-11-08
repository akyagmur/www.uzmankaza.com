import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnswerBox } from "@/components/content/AnswerBox";
import { JsonLd } from "@/components/JsonLd";
import { articles } from "@/content/articles";
import { absoluteUrl, site } from "@/lib/site";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Araç Değer Kaybı Rehberi: Hesaplama, Zamanaşımı, Tahkim ve Daha Fazlası",
  description:
    "Araç değer kaybı hakkında kapsamlı rehber yazıları: nasıl alınır, hesaplama, zamanaşımı, sigorta ödemezse ne yapılır, kusur oranı, Sigorta Tahkim Komisyonu başvurusu ve gerekli belgeler.",
  path: "/rehber",
  keywords: ["araç değer kaybı rehberi", "değer kaybı blog", "değer kaybı makaleleri"],
});

export default function RehberPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/rehber",
            name: "Araç Değer Kaybı Rehberi",
            description: "Araç değer kaybı hakkında rehber yazıları.",
            type: "CollectionPage",
            dateModified: site.lastContentUpdate,
          }),
          {
            "@type": "ItemList",
            itemListElement: articles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(`/rehber/${a.slug}`),
              name: a.title,
            })),
          },
        )}
      />
      <PageHeader
        crumbs={[{ name: "Rehber", path: "/rehber" }]}
        eyebrow="Rehber"
        title="Araç Değer Kaybı Rehberi"
        description="Araç sahiplerinin en çok sorduğu konuları, hukuken dikkatli ve uygulamaya dönük biçimde ele alan yazılar."
      />
      <Container size="wide" className="py-14 lg:py-20">
        <AnswerBox
          label="Bu bölümde"
          text="Değer kaybının nasıl alındığı, nasıl hesaplandığı, zamanaşımı süreleri, sigorta şirketinin ödememesi hâlinde yapılacaklar, kusur oranının etkisi, Sigorta Tahkim Komisyonu başvurusu, gerekli belgeler ve değer kaybının alınamadığı durumlar hakkında sekiz ayrıntılı rehber."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <ArticleCard key={a.slug} article={a} featured={i === 0} />
          ))}
        </div>
      </Container>
      <CtaBanner />
    </>
  );
}
