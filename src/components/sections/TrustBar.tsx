import { Container } from "@/components/ui/Container";
import { ClockIcon, DocumentIcon, ScaleIcon, ShieldIcon } from "@/components/ui/Icons";

const items = [
  {
    icon: ShieldIcon,
    title: "Baroya kayıtlı avukatlar",
    text: "Süreç, sigorta hukuku alanında çalışan avukatlar tarafından yürütülür.",
  },
  {
    icon: ScaleIcon,
    title: "Şeffaf ücretlendirme",
    text: "Ücret ve masraflar ilk görüşmede yazılı olarak paylaşılır; sürpriz yoktur.",
  },
  {
    icon: DocumentIcon,
    title: "Belge odaklı dosya",
    text: "Her talep, bilirkişinin esas alacağı belgelerle eksiksiz hazırlanır.",
  },
  {
    icon: ClockIcon,
    title: "Düzenli bilgilendirme",
    text: "Dosyanızın her aşamasında yazılı olarak bilgilendirilirsiniz.",
  },
];

export function TrustBar() {
  return (
    <section aria-label="Güven unsurları" className="border-b border-cream-200 bg-white">
      <Container size="wide">
        <ul className="grid divide-y divide-cream-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 px-2 py-7 lg:px-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-900">
                <Icon size={22} />
              </span>
              <div>
                <h2 className="text-sm font-bold text-navy-900">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
