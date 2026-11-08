import { WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappUrl } from "@/lib/site";

/** Mobilde sabit WhatsApp butonu; sayfanın içeriğini kapatmayacak şekilde konumlanır. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden yazın"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 lg:bottom-8 lg:right-8"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
