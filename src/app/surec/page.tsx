import { PageHeader } from "@/components/layout/PageHeader";
import { LongForm, RelatedLinks } from "@/components/layout/LongForm";
import { AnswerBox } from "@/components/content/AnswerBox";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FaqSection } from "@/components/content/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/JsonLd";
import type { ContentBlock } from "@/content/types";
import { faqs } from "@/content/faq";
import { processSteps, requiredDocuments } from "@/content/process";
import { graph, howToSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Değer Kaybı Süreci: Sigorta Başvurusu, Tahkim ve Dava Adım Adım",
  description:
    "Araç değer kaybı tazminatı süreci nasıl işler? Sigorta şirketine yazılı başvuru, 15 günlük süre, Sigorta Tahkim Komisyonu, dava ve tahsilat aşamaları; süreler ve gerekli belgeler.",
  path: "/surec",
  keywords: ["değer kaybı süreci", "değer kaybı başvurusu nasıl yapılır", "sigorta tahkim süreci", "değer kaybı davası süreci"],
});

const surecFaqs = faqs.filter((f) =>
  [
    "Sigorta Tahkim Komisyonu'na nasıl başvurulur?",
    "Sigorta şirketi değer kaybını ödemiyorsa ne yapılır?",
    "Değer kaybı tazminatı ne kadar sürede alınır?",
    "Değer kaybı için hangi belgeler gerekir?",
    "Kaza tutanağı tutulmadıysa değer kaybı alınabilir mi?",
  ].includes(f.question),
);

const intro: ContentBlock[] = [
  {
    type: "p",
    text: "Değer kaybı sürecinin iskeletini kanun belirler: 2918 sayılı Karayolları Trafik Kanunu m. 97, dava veya tahkim yoluna gitmeden önce **sigorta şirketine yazılı başvuruyu zorunlu** kılar. Bu nedenle süreç her zaman sigorta başvurusuyla başlar; sigorta şirketinin tutumuna göre Sigorta Tahkim Komisyonu veya mahkeme aşamasına geçilir.",
  },
  {
    type: "table",
    caption: "Değer kaybı sürecinin aşamaları ve tipik süreleri",
    head: ["Aşama", "Yasal dayanak", "Süre"],
    rows: [
      ["Sigorta şirketine yazılı başvuru", "KTK m. 97", "Cevap için 15 gün"],
      ["Sigorta Tahkim Komisyonu", "Sigortacılık Kanunu m. 30", "Ortalama 4–6 ay"],
      ["Asliye Ticaret Mahkemesi'nde dava", "KTK m. 97, HMK", "12–24 ay"],
      ["İcra takibi (gerekirse)", "İİK", "Karar sonrası 2–4 hafta"],
    ],
  },
];

const afterSteps: ContentBlock[] = [
  { type: "h2", text: "Tahkim mi, dava mı?" },
  {
    type: "p",
    text: "Dosyaların büyük çoğunluğunda **Sigorta Tahkim Komisyonu** tercih edilir: daha hızlıdır, maliyeti düşüktür ve hakemler sigorta hukukunda uzmandır. Dava yolu; kusurun yoğun biçimde tartışmalı olduğu, sigorta şirketi dışında sürücü ve işletene de başvurulması gereken veya değer kaybıyla birlikte başka zararların talep edildiği dosyalarda öne çıkar.",
  },
  { type: "h2", text: "Gerekli belgeler" },
  {
    type: "table",
    head: ["Belge", "Açıklama", "Durum"],
    rows: requiredDocuments.map((d) => [d.document, d.note, d.required]),
  },
  { type: "h2", text: "Süreçte sık yapılan hatalar" },
  {
    type: "ul",
    items: [
      "Sigorta şirketinin ilk (düşük) teklifini ibraname imzalayarak kabul etmek",
      "Başvuruyu teslim tarihi ispatlanamayan bir yolla yapmak",
      "Hasar fotoğraflarını ve onarım belgelerini saklamamak",
      "Kusur oranına süresi içinde itiraz etmemek",
      "Zamanaşımı süresini kaza tarihinden değil başka bir tarihten hesaplamak",
    ],
  },
  {
    type: "callout",
    tone: "info",
    title: "Hukuki uyarı",
    text: "Süreler ve ücretler mevzuat değişiklikleriyle güncellenebilir; sonuç ve tutar her dosyada bağımsız bilirkişi ve hakem/mahkeme kararına bağlıdır. Bu sayfa genel bilgilendirme amaçlıdır.",
  },
];

export default function SurecPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/surec",
            name: "Değer Kaybı Süreci: Sigorta Başvurusu, Tahkim ve Dava",
            description: "Araç değer kaybı tazminatı sürecinin adımları, süreleri ve belgeleri.",
            dateModified: site.lastContentUpdate,
          }),
          howToSchema(processSteps, {
            name: "Araç değer kaybı tazminatı nasıl alınır?",
            description:
              "Kusurlu tarafın trafik sigortasından araç değer kaybı tazminatı almak için izlenen adımlar: belge toplama, sigorta başvurusu, Sigorta Tahkim Komisyonu ve tahsilat.",
            path: "/surec",
          }),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Süreç", path: "/surec" }]}
        eyebrow="Adım adım"
        title="Değer Kaybı Süreci Nasıl İşler?"
        description="Sigorta başvurusundan Sigorta Tahkim Komisyonu'na, gerektiğinde davadan tahsilata kadar izlenen yol ve her adımın süresi."
      />
      <LongForm
        toc={[
          { id: "adimlar", label: "Beş adımda süreç" },
          { id: "tahkim-mi-dava-mi", label: "Tahkim mi, dava mı?" },
          { id: "gerekli-belgeler", label: "Gerekli belgeler" },
          { id: "surecte-sik-yapilan-hatalar", label: "Sık yapılan hatalar" },
          { id: "sss-baslik", label: "Sık sorulan sorular" },
        ]}
        aside={
          <RelatedLinks
            links={[
              { href: "/rehber/sigorta-tahkim-komisyonu-deger-kaybi-basvurusu", label: "Tahkim başvurusu rehberi" },
              { href: "/rehber/sigorta-sirketi-deger-kaybi-odemiyor", label: "Sigorta şirketi ödemiyorsa" },
              { href: "/rehber/deger-kaybi-icin-gerekli-belgeler", label: "Gerekli belgeler listesi" },
              { href: "/hizmetler/deger-kaybi-davasi", label: "Değer kaybı davası" },
            ]}
          />
        }
      >
        <AnswerBox text="Araç değer kaybı süreci beş adımda ilerler: (1) belgelerin toplanması ve ön değerlendirme, (2) kusurlu tarafın trafik sigortasına yazılı başvuru, (3) 15 günlük cevap süresi, (4) ödeme yapılmazsa Sigorta Tahkim Komisyonu'na başvuru ve bilirkişi incelemesi, (5) karar ve faiziyle tahsilat. Tahkim süreci ortalama 4–6 ay sürer; gerekirse Asliye Ticaret Mahkemesi'nde dava açılır." />
        <div className="prose-legal mt-10">
          <ContentBlocks blocks={intro} />
          <h2 id="adimlar" className="scroll-mt-28">
            Beş adımda süreç
          </h2>
        </div>
        <div className="mt-6">
          <ProcessSteps detailed />
        </div>
        <div className="prose-legal mt-10">
          <ContentBlocks blocks={afterSteps} />
        </div>
        <div className="mt-16">
          <FaqSection faqs={surecFaqs} compact title="Süreçle ilgili sık sorulan sorular" />
        </div>
      </LongForm>
      <CtaBanner />
    </>
  );
}
