import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnswerBox } from "@/components/content/AnswerBox";
import { JsonLd } from "@/components/JsonLd";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Hakkımızda: Değer Kaybı Odaklı Hukuk Bürosu",
  description:
    "Uzman Kaza, trafik kazası sonrası araç değer kaybı tazminatı ve sigorta uyuşmazlıklarına odaklanan bir hukuk bürosudur. Çalışma ilkelerimiz, ekibimiz ve yaklaşımımız.",
  path: "/hakkimizda",
});

const principles = [
  {
    title: "Tek alana odak",
    text: "Yalnızca trafik kazası sonrası değer kaybı ve bağlı sigorta uyuşmazlıklarıyla ilgileniyoruz. Bu odak, sigorta şirketlerinin tutumunu ve Tahkim uygulamasını yakından takip etmemizi sağlıyor.",
  },
  {
    title: "Dürüst ön değerlendirme",
    text: "Değer kaybı doğurmayan veya zamanaşımına uğramış dosyalarda bunu açıkça söylüyoruz. Başvuru ücreti ve zaman kaybetmenizi istemiyoruz.",
  },
  {
    title: "Yazılı ve şeffaf ücret",
    text: "Avukatlık ücreti ve olası masraflar ilk görüşmede yazılı olarak paylaşılır. Avukatlık Asgari Ücret Tarifesi'ne uygun çalışırız.",
  },
  {
    title: "Düzenli bilgilendirme",
    text: "Sigorta cevabı, bilirkişi raporu ve hakem kararı gibi her kritik aşamada size yazılı bilgi veririz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/hakkimizda",
            name: "Hakkımızda",
            description: "Uzman Kaza hukuk bürosu hakkında bilgi.",
            type: "AboutPage",
            dateModified: site.lastContentUpdate,
          }),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Hakkımızda", path: "/hakkimizda" }]}
        eyebrow="Hakkımızda"
        title="Araç Değer Kaybına Odaklanmış Bir Hukuk Bürosu"
        description="Kaza sonrası hakkını bilmeyen veya sigorta şirketi karşısında yalnız kalan araç sahipleri için çalışıyoruz."
      />

      <Container size="wide" className="py-14 lg:py-20">
        <AnswerBox
          label="Kısaca"
          text={`${site.name} (${site.domain}), trafik kazası geçiren araç sahiplerinin değer kaybı tazminatını kusurlu tarafın trafik sigortasından tahsil etmelerine yardımcı olan, sigorta hukuku alanında çalışan bir hukuk bürosudur. Türkiye genelinde dosya kabul eder; süreç ücretsiz ön değerlendirme ile başlar.`}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Neden varız?" title="Onarılan aracın kaybettiği değer, çoğu zaman talep edilmiyor" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                Türkiye&apos;de her yıl yüz binlerce maddi hasarlı trafik kazası yaşanıyor. Kusursuz araç sahiplerinin büyük
                bölümü onarım bedelini sigortadan alıyor; ancak aracın ikinci el değerindeki düşüşü talep etmiyor. Sigorta
                şirketleri bu hakkı kendiliğinden hatırlatmıyor, teklif verdiğinde ise çoğunlukla gerçek zararın altında
                kalıyor.
              </p>
              <p>
                {site.name}, bu boşluğu kapatmak için kuruldu. Dosyanızı inceliyor, hukuken mümkün olup olmadığını
                açıkça söylüyor ve mümkünse sigorta başvurusundan tahsilata kadar süreci sizin adınıza yürütüyoruz.
              </p>
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.title} className="rounded-2xl border border-cream-200 bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl text-navy-900">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <section className="bg-cream-100 py-16 lg:py-20" aria-labelledby="ekip-baslik">
        <Container size="wide">
          <SectionHeading eyebrow="Ekip" title={<span id="ekip-baslik">Dosyanızı yürüten avukatlar</span>} />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {site.team.map((m) => (
              <li key={m.name} className="rounded-2xl border border-cream-200 bg-white p-7 shadow-soft">
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 font-serif text-2xl text-gold-400"
                  aria-hidden="true"
                >
                  Av.
                </div>
                <h3 className="text-lg font-bold text-navy-900">{m.name}</h3>
                <p className="text-sm text-gold-600">{m.title}</p>
                <p className="mt-1 text-xs text-ink-500">{m.bar}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700">{m.bio}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-500">
            Ekip bilgileri yer tutucudur; yayın öncesi gerçek avukat isimleri, baro ve sicil bilgileri eklenecektir.
          </p>
        </Container>
      </section>

      <Container size="wide" className="py-14">
        <div className="rounded-2xl border border-gold-500/40 bg-gold-100/60 p-6 text-sm leading-relaxed text-navy-900">
          <strong>Mesleki not:</strong> Bu site, 1136 sayılı Avukatlık Kanunu ve Türkiye Barolar Birliği Reklam Yasağı
          Yönetmeliği çerçevesinde yalnızca bilgilendirme amacı taşır. Sonuç garantisi verilmez; her dosya kendi
          koşullarına göre değerlendirilir.
        </div>
      </Container>
      <CtaBanner />
    </>
  );
}
