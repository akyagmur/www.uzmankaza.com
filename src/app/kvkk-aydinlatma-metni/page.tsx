import { LegalPage } from "@/components/layout/LegalPage";
import type { ContentBlock } from "@/content/types";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "Uzman Kaza kişisel verilerin korunması ve işlenmesine ilişkin aydınlatma metni.",
  path: "/kvkk-aydinlatma-metni",
});

const blocks: ContentBlock[] = [
  {
    type: "p",
    text: `Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) m. 10 uyarınca veri sorumlusu sıfatıyla ${site.legalName} (“Büro”) tarafından hazırlanmıştır. [PLACEHOLDER: Büro unvanı, adresi ve vergi/baro bilgileri eklenecektir.]`,
  },
  { type: "h2", text: "İşlenen kişisel veriler" },
  {
    type: "ul",
    items: [
      "Kimlik ve iletişim bilgileri (ad soyad, telefon, e-posta)",
      "Araç ve kaza bilgileri (plaka, kaza tarihi, kusur durumu, hasar belgeleri)",
      "Formda paylaştığınız açıklamalar ve ilettiğiniz belgeler",
      "Site kullanımına ilişkin teknik veriler (IP adresi, tarayıcı bilgisi) — yalnızca güvenlik ve istatistik amacıyla",
    ],
  },
  { type: "h2", text: "İşleme amaçları ve hukuki sebepler" },
  {
    type: "p",
    text: "Kişisel verileriniz; ön değerlendirme talebinizin karşılanması, sizinle iletişim kurulması, avukatlık hizmetinin sunulması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla KVKK m. 5/2 (c) sözleşmenin kurulması ve ifası, (ç) hukuki yükümlülük, (e) bir hakkın tesisi ve (f) meşru menfaat hukuki sebeplerine dayanılarak işlenir.",
  },
  { type: "h2", text: "Aktarım" },
  {
    type: "p",
    text: "Verileriniz, hizmetin gerektirdiği ölçüde sigorta şirketleri, Sigorta Tahkim Komisyonu, mahkemeler ve icra daireleri ile yasal zorunluluk hâlinde yetkili kamu kurumlarına; altyapı hizmeti aldığımız barındırma ve e-posta sağlayıcılarına (yurt dışı aktarım söz konusuysa KVKK m. 9 kapsamında) aktarılabilir.",
  },
  { type: "h2", text: "Saklama süresi" },
  {
    type: "p",
    text: "Veriler, işleme amacının gerektirdiği süre ve Avukatlık Kanunu ile ilgili mevzuatta öngörülen saklama yükümlülükleri boyunca muhafaza edilir; sürenin sonunda silinir, yok edilir veya anonim hâle getirilir.",
  },
  { type: "h2", text: "Haklarınız" },
  {
    type: "p",
    text: `KVKK m. 11 kapsamında; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, işlenme amacını öğrenme, aktarıldığı kişileri bilme, düzeltilmesini veya silinmesini isteme ve zararın giderilmesini talep etme haklarına sahipsiniz. Taleplerinizi ${site.contact.email} adresine iletebilirsiniz.`,
  },
];

export default function KvkkPage() {
  return (
    <LegalPage
      path="/kvkk-aydinlatma-metni"
      title="KVKK Aydınlatma Metni"
      description="Kişisel verilerinizin hangi amaçlarla, hangi hukuki sebeplerle işlendiği ve haklarınız."
      blocks={blocks}
    />
  );
}
