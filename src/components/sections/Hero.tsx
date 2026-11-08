import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const facts = [
  { label: "Zamanaşımı", value: "2 yıl", note: "kaza tarihinden itibaren" },
  { label: "Sigorta cevap süresi", value: "15 gün", note: "yazılı başvuru sonrası" },
  { label: "Tahkim süreci", value: "4–6 ay", note: "ortalama karar süresi" },
];

const bullets = [
  "Kusursuz veya kısmen kusurlu araç sahipleri için",
  "Sigorta başvurusundan tahsilata kadar tek elden takip",
  "Bağımsız bilirkişi raporuyla gerçek zarar tespiti",
];

export function Hero() {
  return (
    <section className="bg-glow relative overflow-hidden bg-navy-950 text-white" aria-labelledby="hero-baslik">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-32 top-10 h-[32rem] w-[32rem] rounded-full border border-gold-500/20"
        aria-hidden="true"
      />
      <div
        className="absolute -right-10 top-32 h-[20rem] w-[20rem] rounded-full border border-gold-500/10"
        aria-hidden="true"
      />
      <Container size="wide" className="relative grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-400">
            Araç değer kaybı tazminatı
          </p>
          <h1 id="hero-baslik" className="font-serif text-[2.6rem] leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Kaza sonrası aracınızın kaybettiği değeri{" "}
            <span className="text-gold-400">sigortadan geri alın.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Aracınız onarılsa bile ikinci el değeri düştü. Bu kayıp, kusurlu tarafın trafik sigortasından talep
            edebileceğiniz yasal bir hak. {site.name}, sigorta başvurusundan Sigorta Tahkim Komisyonu ve dava
            aşamasına kadar süreci sizin adınıza yürütür.
          </p>
          <ul className="mt-7 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[0.97rem] text-white/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                  <CheckIcon size={13} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/iletisim" size="lg">
              Ücretsiz Ön Değerlendirme
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" size="lg">
              <WhatsAppIcon /> WhatsApp
            </Button>
            <Button href={telUrl} variant="outline-light" size="lg" ariaLabel={`Arayın: ${site.contact.phoneDisplay}`}>
              <PhoneIcon /> Hemen Arayın
            </Button>
          </div>
          <p className="mt-5 text-xs text-white/50">
            Ön değerlendirme ücretsizdir ve herhangi bir taahhüt gerektirmez. Sonuç ve tutar dosyaya göre değişir.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-lift backdrop-blur-sm">
            <div className="rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Bilmeniz gereken 3 süre</p>
              <dl className="mt-6 divide-y divide-white/10">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <dt className="text-sm font-semibold text-white">{f.label}</dt>
                      <dd className="text-xs text-white/55">{f.note}</dd>
                    </div>
                    <dd className="font-serif text-3xl text-gold-400">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-white/75">
                <strong className="text-white">Değer kaybı nedir?</strong> Kaza geçiren bir aracın, tamamen onarılsa dahi
                hasar kaydı nedeniyle ikinci el piyasa değerinde yaşanan düşüştür.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
