import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/content/FaqSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { featuredArticles } from "@/content/articles";
import { homeFaqs } from "@/content/faq";
import { processSteps } from "@/content/process";
import { graph, howToSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${site.name} | Araç Değer Kaybı Tazminatı Avukatı`,
  description:
    "Trafik kazası sonrası araç değer kaybı tazminatınızı sigortadan alın. Ücretsiz ön değerlendirme, sigorta başvurusu, Sigorta Tahkim Komisyonu ve dava sürecinde hukuki destek. Türkiye geneli.",
  path: "/",
  keywords: ["araç değer kaybı", "değer kaybı tazminatı", "araç değer kaybı avukatı", "sigorta tahkim değer kaybı"],
});

const eligibility = [
  { ok: true, text: "Kazada kusursuz veya kısmen kusurlusunuz" },
  { ok: true, text: "Aracınız onarıldı ve hasar (tramer) kaydı oluştu" },
  { ok: true, text: "Kusurlu aracın geçerli trafik sigortası var" },
  { ok: true, text: "Kaza tarihinden itibaren 2 yıl geçmedi" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            name: `${site.name} | Araç Değer Kaybı Tazminatı`,
            description: site.description,
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

      <Hero />
      <TrustBar />

      {/* Tanım + uygunluk */}
      <section className="py-20 lg:py-24" aria-labelledby="nedir-baslik">
        <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Araç değer kaybı nedir?"
              title={<span id="nedir-baslik">Onarılan araç eski değerine dönmez; fark sizin hakkınızdır</span>}
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                <strong className="text-navy-900">Araç değer kaybı</strong>, trafik kazası geçiren bir aracın tamamen
                onarılsa bile ikinci el piyasa değerinde yaşanan düşüştür. Hasar kaydı bulunan araçlar, hasarsız
                emsallerinden daha düşük fiyata alıcı bulur.
              </p>
              <p>
                Bu fark, 2918 sayılı Karayolları Trafik Kanunu ve Türk Borçlar Kanunu uyarınca kusurlu tarafın{" "}
                <strong className="text-navy-900">zorunlu trafik sigortasından</strong> talep edilebilen gerçek bir
                maddi zarardır. Sigorta şirketi ödemezse Sigorta Tahkim Komisyonu ve dava yolu açıktır.
              </p>
            </div>
            <Link
              href="/arac-deger-kaybi"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-navy-900 underline decoration-gold-400 underline-offset-4 hover:text-navy-600"
            >
              Değer kaybı rehberinin tamamını okuyun <ArrowRightIcon size={18} />
            </Link>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft sm:p-10">
            <h3 className="font-serif text-2xl text-navy-900">Değer kaybı alabilir miyim?</h3>
            <p className="mt-2 text-ink-500">Aşağıdaki dört koşul sağlanıyorsa büyük olasılıkla evet.</p>
            <ul className="mt-6 space-y-4">
              {eligibility.map((e) => (
                <li key={e.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckIcon size={14} strokeWidth={3} />
                  </span>
                  <span className="text-ink-700">{e.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/iletisim" variant="secondary">
                Dosyamı değerlendirin
              </Button>
              <Button href="/rehber/hangi-durumlarda-deger-kaybi-alinamaz" variant="ghost">
                Alınamayan durumlar
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Süreç */}
      <section className="bg-cream-100 py-20 lg:py-24" aria-labelledby="surec-baslik">
        <Container size="wide">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Süreç nasıl işler?"
              title={<span id="surec-baslik">Başvurudan tahsilata beş adım</span>}
              description="Kanunla belirlenen sıra izlenir: önce sigorta şirketine yazılı başvuru, ardından gerekirse Sigorta Tahkim Komisyonu veya dava."
            />
            <Button href="/surec" variant="ghost" className="w-fit">
              Süreci ayrıntılı inceleyin <ArrowRightIcon size={16} />
            </Button>
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      {/* Hizmetler */}
      <section className="py-20 lg:py-24" aria-labelledby="hizmetler-baslik">
        <Container size="wide">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title={<span id="hizmetler-baslik">Değer kaybı odaklı, uçtan uca hukuki destek</span>}
            description="Tek bir alana odaklanıyoruz: trafik kazası sonrası araç değer kaybı ve bağlı sigorta uyuşmazlıkları."
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      <CtaBanner />

      {/* Görüşler */}
      <section className="py-20 lg:py-24" aria-labelledby="gorusler-baslik">
        <Container size="wide">
          <SectionHeading
            eyebrow="Müvekkil deneyimleri"
            title={<span id="gorusler-baslik">Süreci birlikte yürüttüğümüz araç sahipleri</span>}
            description="Aşağıdaki metinler temsili yer tutuculardır; gerçek görüşler onay alınarak eklenecektir."
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </Container>
      </section>

      {/* SSS */}
      <section className="bg-cream-100 py-20 lg:py-24">
        <Container>
          <FaqSection
            faqs={homeFaqs}
            title="Araç değer kaybı hakkında sık sorulan sorular"
            description="En çok merak edilen soruların kısa ve doğrudan cevapları. Tüm sorular için SSS sayfamızı ziyaret edin."
          />
          <div className="mt-8 text-center">
            <Button href="/sikca-sorulan-sorular" variant="ghost">
              Tüm soruları görün <ArrowRightIcon size={16} />
            </Button>
          </div>
        </Container>
      </section>

      {/* Rehber */}
      <section className="py-20 lg:py-24" aria-labelledby="rehber-baslik">
        <Container size="wide">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Rehber"
              title={<span id="rehber-baslik">Değer kaybı hakkında bilmeniz gerekenler</span>}
              description="Hesaplama, zamanaşımı, sigorta şirketinin ödememesi ve tahkim başvurusu üzerine ayrıntılı rehberler."
            />
            <Button href="/rehber" variant="ghost" className="w-fit">
              Tüm rehberler <ArrowRightIcon size={16} />
            </Button>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featuredArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
