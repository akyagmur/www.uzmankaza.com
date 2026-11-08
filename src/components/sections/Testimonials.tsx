import { QuoteIcon } from "@/components/ui/Icons";

/**
 * PLACEHOLDER: Gerçek müvekkil görüşleri eklenmeden önce içerik ve yayınlanma uygunluğu
 * (TBB Reklam Yasağı Yönetmeliği) açısından değerlendirilmelidir. Temsili metinlerdir.
 */
const testimonials = [
  {
    quote:
      "Sigorta şirketi önce çok düşük bir teklif vermişti. Süreç baştan sona bize anlatıldı, tahkim sonucunda tutar bilirkişi raporuyla belirlendi.",
    name: "[Müvekkil adı – PLACEHOLDER]",
    detail: "Binek araç, İstanbul",
  },
  {
    quote:
      "Kazanın üzerinden bir yıl geçmişti; değer kaybı hakkım olduğunu bilmiyordum. Zamanaşımı dolmadan başvuru yapıldı ve dosya sonuçlandı.",
    name: "[Müvekkil adı – PLACEHOLDER]",
    detail: "Ticari araç, Ankara",
  },
  {
    quote:
      "Belgeleri WhatsApp'tan gönderdim, aynı gün dönüş aldım. Her aşamada ne olduğunu yazılı olarak bildirdiler.",
    name: "[Müvekkil adı – PLACEHOLDER]",
    detail: "Binek araç, İzmir",
  },
];

export function Testimonials() {
  return (
    <ul className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <li key={i} className="flex flex-col rounded-2xl border border-cream-200 bg-white p-7 shadow-soft">
          <QuoteIcon className="text-gold-500" size={28} />
          <blockquote className="mt-4 flex-1 leading-relaxed text-ink-700">
            <p>“{t.quote}”</p>
          </blockquote>
          <footer className="mt-6 border-t border-cream-200 pt-4 text-sm">
            <p className="font-semibold text-navy-900">{t.name}</p>
            <p className="text-ink-500">{t.detail}</p>
          </footer>
        </li>
      ))}
    </ul>
  );
}
