import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { FaqSection } from "@/components/content/FaqSection";
import { Button } from "@/components/ui/Button";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/content/faq";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "İletişim: Ücretsiz Ön Değerlendirme",
  description:
    "Araç değer kaybı dosyanız için ücretsiz ön değerlendirme isteyin. WhatsApp, telefon veya form ile Uzman Kaza'ya ulaşın; aynı iş günü dönüş.",
  path: "/iletisim",
});

const iletisimFaqs = faqs.filter((f) =>
  [
    "Değer kaybı için hangi belgeler gerekir?",
    "Değer kaybı davası için avukata ne kadar ücret ödenir?",
    "Değer kaybı tazminatı ne kadar sürede alınır?",
  ].includes(f.question),
);

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/iletisim",
            name: "İletişim",
            description: "Uzman Kaza ile iletişime geçin; ücretsiz ön değerlendirme isteyin.",
            type: "ContactPage",
          }),
        )}
      />
      <PageHeader
        crumbs={[{ name: "İletişim", path: "/iletisim" }]}
        eyebrow="İletişim"
        title="Ücretsiz Ön Değerlendirme İsteyin"
        description="Kaza tutanağınızı ve hasar fotoğraflarınızı iletin; değer kaybı talebinizin hukuken mümkün olup olmadığını aynı iş günü paylaşalım."
      />
      <Container size="wide" className="grid gap-12 py-14 lg:grid-cols-[1fr_380px] lg:py-20">
        <section aria-labelledby="form-baslik" className="rounded-3xl border border-cream-200 bg-white p-7 shadow-soft sm:p-10">
          <h2 id="form-baslik" className="font-serif text-2xl text-navy-900">
            Başvuru formu
          </h2>
          <p className="mt-2 text-ink-500">Formu doldurun, dosyanızı inceleyip sizi arayalım.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-navy-900 p-7 text-white shadow-lift">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Hızlı iletişim</p>
            <div className="mt-5 space-y-3">
              <Button href={whatsappUrl} variant="whatsapp" size="lg" className="w-full">
                <WhatsAppIcon /> WhatsApp ile yazın
              </Button>
              <Button href={telUrl} variant="outline-light" size="lg" className="w-full">
                <PhoneIcon /> {site.contact.phoneDisplay}
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/55">
              Telefon ve WhatsApp numaraları yer tutucudur; yayın öncesi gerçek numaralarla değiştirilecektir.
            </p>
          </div>

          <address className="space-y-4 rounded-2xl border border-cream-200 bg-white p-7 text-sm not-italic shadow-soft">
            <h2 className="font-serif text-xl text-navy-900">Büro bilgileri</h2>
            <p className="flex items-start gap-3 text-ink-700">
              <MapPinIcon className="mt-0.5 shrink-0 text-gold-600" size={18} />
              <span>
                {site.legalName}
                <br />
                {site.contact.address.streetAddress}
                <br />
                {site.contact.address.addressLocality}, Türkiye
              </span>
            </p>
            <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 text-ink-700 hover:text-navy-900">
              <MailIcon className="mt-0.5 shrink-0 text-gold-600" size={18} />
              {site.contact.email}
            </a>
            <p className="flex items-start gap-3 text-ink-700">
              <ClockIcon className="mt-0.5 shrink-0 text-gold-600" size={18} />
              <span>Hafta içi 09:00 – 18:00. WhatsApp mesajlarına mesai dışında da en kısa sürede dönülür.</span>
            </p>
          </address>

          <div className="rounded-2xl border border-cream-200 bg-white p-7 text-sm shadow-soft">
            <h2 className="font-serif text-xl text-navy-900">Göndermeniz yeterli</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-ink-700">
              <li>Kaza tespit tutanağı veya polis raporu</li>
              <li>Hasar fotoğrafları</li>
              <li>Araç ruhsatı</li>
              <li>Varsa onarım faturası / ekspertiz raporu</li>
            </ul>
          </div>
        </aside>
      </Container>

      <section className="bg-cream-100 py-16">
        <Container>
          <FaqSection faqs={iletisimFaqs} compact title="Başvuru öncesi sık sorulanlar" withSchema={false} />
        </Container>
      </section>
    </>
  );
}
