import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function CtaBanner({
  title = "Dosyanızı ücretsiz ön değerlendirmeye alalım",
  description = "Kaza tutanağınızı ve hasar fotoğraflarınızı gönderin; değer kaybı talebinizin hukuken mümkün olup olmadığını ve izlenecek yolu aynı gün paylaşalım.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="cta-baslik" className="py-6">
      <Container size="wide">
        <div className="bg-glow relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Ücretsiz ön değerlendirme</p>
              <h2 id="cta-baslik" className="font-serif text-3xl leading-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-white/75">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={whatsappUrl} variant="whatsapp" size="lg" className="w-full">
                <WhatsAppIcon /> WhatsApp ile yazın
              </Button>
              <Button href={telUrl} variant="outline-light" size="lg" className="w-full">
                <PhoneIcon /> {site.contact.phoneDisplay}
              </Button>
              <Button href="/iletisim" variant="primary" size="lg" className="w-full">
                Form ile başvurun
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
