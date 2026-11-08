import { LegalPage } from "@/components/layout/LegalPage";
import type { ContentBlock } from "@/content/types";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description: "uzmankaza.com gizlilik politikası: çerezler, toplanan veriler ve kullanım amaçları.",
  path: "/gizlilik-politikasi",
});

const blocks: ContentBlock[] = [
  {
    type: "p",
    text: `${site.domain} ("Site"), ${site.legalName} tarafından işletilmektedir. Bu politika, Site'yi ziyaret ettiğinizde hangi verilerin toplandığını ve nasıl kullanıldığını açıklar.`,
  },
  { type: "h2", text: "Toplanan veriler" },
  {
    type: "ul",
    items: [
      "İletişim formu aracılığıyla gönüllü olarak paylaştığınız bilgiler",
      "Sunucu günlükleri (IP adresi, istek zamanı, tarayıcı türü) — güvenlik ve hata ayıklama amacıyla",
      "Çerezler: Site, zorunlu olmayan izleme çerezi kullanmaz. [PLACEHOLDER: Analitik araç eklenirse burada belirtilecek ve çerez onayı alınacaktır.]",
    ],
  },
  { type: "h2", text: "Kullanım amaçları" },
  {
    type: "p",
    text: "Veriler yalnızca talebinizi yanıtlamak, hizmet sunmak ve Site'nin güvenliğini sağlamak amacıyla kullanılır; üçüncü kişilere pazarlama amacıyla satılmaz veya kiralanmaz.",
  },
  { type: "h2", text: "Üçüncü taraf bağlantılar" },
  {
    type: "p",
    text: "Site, WhatsApp gibi üçüncü taraf hizmetlere bağlantılar içerir. Bu hizmetlerin gizlilik uygulamaları kendi politikalarına tabidir.",
  },
  { type: "h2", text: "Güvenlik" },
  {
    type: "p",
    text: "Veriler, şifreli bağlantı (HTTPS) üzerinden iletilir ve yetkisiz erişime karşı makul teknik ve idari tedbirlerle korunur.",
  },
  { type: "h2", text: "İletişim" },
  {
    type: "p",
    text: `Gizlilikle ilgili sorularınız için ${site.contact.email} adresine yazabilirsiniz. Kişisel verilerinizin işlenmesine ilişkin ayrıntılar için [KVKK Aydınlatma Metni](/kvkk-aydinlatma-metni) sayfasına bakın.`,
  },
];

export default function GizlilikPage() {
  return (
    <LegalPage
      path="/gizlilik-politikasi"
      title="Gizlilik Politikası"
      description="Site ziyaretinizde hangi verilerin toplandığı ve nasıl kullanıldığı."
      blocks={blocks}
    />
  );
}
