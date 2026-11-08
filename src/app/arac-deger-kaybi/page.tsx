import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { LongForm, RelatedLinks, tocFromHeadings } from "@/components/layout/LongForm";
import { AnswerBox } from "@/components/content/AnswerBox";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FaqSection } from "@/components/content/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/JsonLd";
import type { ContentBlock } from "@/content/types";
import { faqs } from "@/content/faq";
import { requiredDocuments } from "@/content/process";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Araç Değer Kaybı Nedir? Şartları, Hesaplama, Zamanaşımı ve Süreç",
  description:
    "Araç değer kaybı nedir, kimler alabilir, nasıl hesaplanır, zamanaşımı kaç yıl? Sigorta başvurusu, Sigorta Tahkim Komisyonu ve dava sürecini tek sayfada anlatan kapsamlı rehber.",
  path: "/arac-deger-kaybi",
  keywords: ["araç değer kaybı", "araç değer kaybı nedir", "değer kaybı şartları", "değer kaybı tazminatı"],
});

const pillarFaqs = faqs.filter((f) =>
  [
    "Araç değer kaybı nedir?",
    "Değer kaybını kim öder?",
    "Kusurlu olan taraf değer kaybı alabilir mi?",
    "Yüksek kilometreli veya eski araçlar değer kaybı alabilir mi?",
    "Tramer kaydı değer kaybı ile aynı şey mi?",
    "Değer kaybı tazminatı ne kadar sürede alınır?",
  ].includes(f.question),
);

const headings = [
  "Araç değer kaybı nedir?",
  "Kimler değer kaybı alabilir?",
  "Değer kaybı şartları",
  "Değer kaybı nasıl hesaplanır?",
  "Zamanaşımı süresi",
  "Gerekli belgeler",
  "Süreç nasıl işler?",
];

const section1: ContentBlock[] = [
  { type: "h2", text: headings[0] },
  {
    type: "p",
    text: "**Araç değer kaybı**, trafik kazası geçiren bir aracın hasarı tamamen giderilse dahi ikinci el piyasa değerinde yaşanan düşüştür. Alıcılar hasar kayıtlı araçlara, aynı model ve yaştaki hasarsız araçlardan daha düşük fiyat teklif eder; bu fark aracın malikinin uğradığı gerçek bir zarardır.",
  },
  {
    type: "p",
    text: "Hukuki dayanağı 2918 sayılı Karayolları Trafik Kanunu'nun işleten ve sigortacının sorumluluğuna ilişkin hükümleri ile 6098 sayılı Türk Borçlar Kanunu'nun haksız fiil (m. 49 vd.) kurallarıdır. Zorunlu trafik sigortası, kusurlu işletenin üçüncü kişilere verdiği maddi zararı poliçe limitine kadar karşılar; değer kaybı bu maddi zararın bir parçasıdır.",
  },
  {
    type: "callout",
    tone: "info",
    title: "Değer kaybı ≠ onarım bedeli",
    text: "Onarım bedeli aracın tamir masrafıdır ve genellikle sigorta tarafından doğrudan servise ödenir. Değer kaybı ise onarımdan sonra bile kalan piyasa değeri düşüşüdür ve ayrıca talep edilmesi gerekir. Birçok araç sahibi bu ikinci hakkını bilmediği için talep etmez.",
  },
  { type: "h2", text: headings[1] },
  {
    type: "p",
    text: "Kazada **%100 kusurlu olmayan her araç maliki** değer kaybı talep edebilir. Bu kapsamda bireysel araç sahipleri, şirket araçları, filo ve kiralama şirketleri, ticari taksi ve servis araçları da yer alır. Talep hakkı aracı kullanan sürücüye değil, ruhsat sahibine aittir.",
  },
  {
    type: "table",
    head: ["Durum", "Değer kaybı hakkı"],
    rows: [
      ["Kusursuz araç sahibi", "Değer kaybının tamamı"],
      ["Kısmen kusurlu araç sahibi (ör. %30)", "Değer kaybının kusur oranı düşülmüş kısmı (%70)"],
      ["%100 kusurlu araç sahibi", "Karşı sigortadan talep hakkı yok"],
      ["Tek taraflı kaza", "Karşı taraf olmadığından talep yok; kasko kural olarak kapsamaz"],
      ["Kusurlu aracın sigortası yok", "Güvence Hesabı veya kusurlu sürücü/işletene karşı talep değerlendirilir"],
    ],
  },
  { type: "h2", text: headings[2] },
  {
    type: "ol",
    items: [
      "**Kusur şartı:** Araç sahibi kazada tamamen kusurlu olmamalıdır.",
      "**Hasar ve onarım şartı:** Araç gerçekten hasar görmüş ve onarılmış olmalı; hasar kaydı oluşmalıdır. Yalnızca lokal boya veya plastik parça değişimi genellikle değer kaybı doğurmaz.",
      "**Geçerli trafik sigortası:** Kusurlu aracın kaza tarihinde geçerli zorunlu trafik sigortası bulunmalıdır.",
      "**Zamanaşımı:** Kaza tarihinden itibaren 2 yıl içinde başvurulmalıdır.",
      "**Pert olmama:** Araç pert (tam hasar) işlemi görmemiş olmalıdır; pert bedeli ödenen araç için ayrıca değer kaybı doğmaz.",
    ],
  },
  {
    type: "p",
    text: "Geçmişte Trafik Sigortası Genel Şartları'nda yer alan kilometre (165.000 km) ve araç yaşı sınırlamaları, Anayasa Mahkemesi ve Yargıtay kararları sonrasında mutlak bir engel olmaktan çıkmıştır. Yüksek kilometreli ve yaşlı araçlar için de talep mümkündür; tutar aracın gerçek piyasa değerine göre belirlenir. Ayrıntılar için [Hangi durumlarda değer kaybı alınamaz?](/rehber/hangi-durumlarda-deger-kaybi-alinamaz) rehberine bakın.",
  },
  { type: "h2", text: headings[3] },
  {
    type: "p",
    text: "Değer kaybı, **aracın kaza öncesi piyasa değeri ile onarım sonrası değeri arasındaki fark** olarak hesaplanır. Hesaplamayı Sigorta Tahkim Komisyonu veya mahkemenin görevlendirdiği bağımsız bilirkişi yapar. Dikkate alınan başlıca kriterler:",
  },
  {
    type: "ul",
    items: [
      "Aracın marka, model, yaş ve kilometresi; kaza tarihindeki rayiç değeri",
      "Hasarın bölgesi (şasi ve taşıyıcı parçalar en yüksek kaybı doğurur)",
      "Değişen ve onarılan parçaların sayısı ve niteliği",
      "Onarım kalitesi (orijinal parça, yetkili servis)",
      "Önceki hasar kayıtları",
      "Araç sahibinin kusur oranı",
    ],
  },
  {
    type: "p",
    text: "Sigorta şirketlerinin ilk teklifleri çoğunlukla bilirkişi raporlarının altında kalır. Hesaplama yöntemi ve örnekler için [Araç değer kaybı hesaplama](/rehber/arac-deger-kaybi-hesaplama) rehberini inceleyin.",
  },
  { type: "h2", text: headings[4] },
  {
    type: "table",
    caption: "KTK m. 109 uyarınca değer kaybı zamanaşımı süreleri",
    head: ["Durum", "Süre", "Başlangıç"],
    rows: [
      ["Genel kural", "2 yıl", "Zararın ve sorumlunun öğrenildiği tarih (uygulamada kaza tarihi)"],
      ["Mutlak üst sınır", "10 yıl", "Kaza tarihi"],
      ["Kaza suç teşkil ediyorsa", "Uzamış ceza zamanaşımı", "Kaza tarihi"],
    ],
  },
  {
    type: "p",
    text: "Sigorta şirketine yazılı başvuru, tahkim başvurusu ve dava zamanaşımını keser. Ayrıntılı açıklama için [Araç değer kaybı zamanaşımı](/rehber/arac-deger-kaybi-zamanasimi) yazısına bakın.",
  },
  { type: "h2", text: headings[5] },
  {
    type: "table",
    head: ["Belge", "Açıklama", "Durum"],
    rows: requiredDocuments.map((d) => [d.document, d.note, d.required]),
  },
];

export default function DegerKaybiPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/arac-deger-kaybi",
            name: "Araç Değer Kaybı Nedir? Şartları, Hesaplama, Zamanaşımı ve Süreç",
            description:
              "Araç değer kaybı tazminatına ilişkin tanım, şartlar, hesaplama, zamanaşımı ve süreç rehberi.",
            dateModified: site.lastContentUpdate,
          }),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Araç Değer Kaybı", path: "/arac-deger-kaybi" }]}
        eyebrow="Kapsamlı rehber"
        title="Araç Değer Kaybı: Nedir, Kimler Alabilir, Nasıl Hesaplanır?"
        description="Değer kaybı tazminatının tanımı, şartları, hesaplama mantığı, zamanaşımı süreleri ve başvuru süreci — tek sayfada."
      />

      <LongForm
        toc={tocFromHeadings([...headings, "Sık sorulan sorular"])}
        aside={
          <RelatedLinks
            links={[
              { href: "/rehber/arac-deger-kaybi-nasil-alinir", label: "Araç değer kaybı nasıl alınır?" },
              { href: "/rehber/arac-deger-kaybi-hesaplama", label: "Değer kaybı hesaplama" },
              { href: "/rehber/arac-deger-kaybi-zamanasimi", label: "Zamanaşımı süreleri" },
              { href: "/rehber/sigorta-sirketi-deger-kaybi-odemiyor", label: "Sigorta şirketi ödemiyorsa" },
            ]}
          />
        }
      >
        <AnswerBox text="Araç değer kaybı, kaza geçiren bir aracın onarılsa bile ikinci el piyasa değerinde yaşanan düşüştür. Kazada %100 kusurlu olmayan araç sahibi bu kaybı, kusurlu tarafın zorunlu trafik sigortasından kaza tarihinden itibaren 2 yıl içinde talep edebilir. Sigorta şirketi 15 gün içinde ödemezse Sigorta Tahkim Komisyonu'na başvurulur; tutar bağımsız bilirkişi raporuyla belirlenir." />

        <div className="prose-legal mt-10">
          <ContentBlocks blocks={section1} />

          <h2 id="surec-nasil-isler" className="scroll-mt-28">
            {headings[6]}
          </h2>
          <p>
            Kanun belirli bir sırayı zorunlu kılar: önce sigorta şirketine yazılı başvuru, ardından gerekirse Sigorta
            Tahkim Komisyonu veya dava. Her adımın ayrıntısı için{" "}
            <Link href="/surec">süreç sayfamıza</Link> bakabilirsiniz.
          </p>
        </div>
        <div className="mt-8">
          <ProcessSteps />
        </div>

        <div className="mt-16" id="sik-sorulan-sorular">
          <FaqSection faqs={pillarFaqs} compact title="Sık sorulan sorular" />
        </div>
      </LongForm>

      <CtaBanner />
    </>
  );
}
