import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "arac-deger-kaybi-tazminati",
    title: "Araç Değer Kaybı Tazminatı",
    shortTitle: "Değer Kaybı Tazminatı",
    icon: "shield",
    description:
      "Kaza sonrası aracınızın piyasa değerinde oluşan kaybın, kusurlu tarafın trafik sigortasından tahsili için uçtan uca hukuki destek.",
    answerFirst:
      "Araç değer kaybı tazminatı hizmeti, kazada kusursuz veya az kusurlu araç sahiplerinin onarım sonrası araçlarında oluşan piyasa değeri düşüşünü kusurlu tarafın trafik sigortasından tahsil etmesi için yürütülen hukuki süreçtir. Uzman Kaza; dosya değerlendirmesi, sigorta başvurusu, Sigorta Tahkim Komisyonu ve gerektiğinde dava aşamalarını araç sahibi adına yürütür.",
    highlights: [
      "Ücretsiz ön değerlendirme ve kusur analizi",
      "Sigorta şirketine usulüne uygun yazılı başvuru",
      "Bilirkişi raporu ile gerçek zarar tespiti",
      "Faiz ve yargılama giderleriyle birlikte tahsilat",
    ],
    body: [
      {
        type: "p",
        text: "Trafik kazası geçiren bir araç, en iyi serviste onarılsa bile ikinci el piyasasında “hasar kayıtlı” olarak değerlendirilir ve aynı model hasarsız araçlardan daha düşük fiyata alıcı bulur. Bu fark, 2918 sayılı Karayolları Trafik Kanunu ve Türk Borçlar Kanunu'nun haksız fiil hükümleri kapsamında tazmini gereken gerçek bir zarardır.",
      },
      { type: "h2", text: "Hizmet kapsamı" },
      {
        type: "ul",
        items: [
          "Kaza tutanağı ve hasar belgeleri üzerinden kusur ve değer kaybı ön analizi",
          "Kusurlu tarafın sigorta şirketine KTK m. 97 kapsamında yazılı başvurunun hazırlanması ve takibi",
          "Sigorta teklifinin gerçek zararla karşılaştırılması ve müzakere",
          "Sigorta Tahkim Komisyonu başvurusu, bilirkişi raporuna itiraz ve itiraz hakem heyeti süreçleri",
          "Gerekli hâllerde Asliye Ticaret Mahkemesi'nde dava ve icra takibi",
        ],
      },
      { type: "h2", text: "Kimler için uygundur?" },
      {
        type: "p",
        text: "Kazada kusuru %100 olmayan, aracı onarılmış ve hasar kaydı oluşmuş, kaza tarihinden itibaren 2 yıl geçmemiş araç sahipleri bu hizmetten yararlanabilir. Şirket araçları, filo araçları ve rent-a-car işletmeleri de kendi adlarına değer kaybı talep edebilir.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Hukuki not",
        text: "Değer kaybı tutarı her dosyada bağımsız bilirkişi tarafından belirlenir. Kesin bir tutar veya sonuç önceden garanti edilemez; ön değerlendirmemiz dosyanızın hukuki uygunluğunu ve yaklaşık süreci anlamanıza yardımcı olur.",
      },
    ],
    faqs: [
      {
        question: "Değer kaybı tazminatı için önce sigorta şirketine mi başvurmak gerekir?",
        answer:
          "Evet. 2918 sayılı KTK m. 97 gereği Sigorta Tahkim Komisyonu'na başvurmadan veya dava açmadan önce kusurlu tarafın trafik sigortası şirketine yazılı başvuru yapılması zorunludur. Şirket 15 gün içinde cevap vermezse veya talep karşılanmazsa tahkim ve dava yolu açılır.",
      },
      {
        question: "Onarım yapılmadan değer kaybı talep edilebilir mi?",
        answer:
          "Kural olarak değer kaybı, hasarın ve onarımın niteliğine göre hesaplandığı için onarım sonrası talep edilir. Onarım yaptırılmamış araçlarda ekspertiz raporu üzerinden değerlendirme yapılabilmesi dosyanın özelliğine bağlıdır.",
      },
    ],
  },
  {
    slug: "sigorta-tahkim-komisyonu-basvurusu",
    title: "Sigorta Tahkim Komisyonu Başvurusu",
    shortTitle: "Sigorta Tahkim",
    icon: "scale",
    description:
      "Sigorta şirketinin ödemediği veya eksik ödediği değer kaybı için Sigorta Tahkim Komisyonu nezdinde hızlı ve etkili başvuru yönetimi.",
    answerFirst:
      "Sigorta Tahkim Komisyonu, sigorta şirketleriyle sigortalılar veya zarar görenler arasındaki uyuşmazlıkları mahkemeye göre daha hızlı çözen bağımsız bir kuruldur. Değer kaybı talebi sigorta şirketince reddedildiğinde ya da düşük teklif verildiğinde, 15 günlük cevap süresinin ardından Komisyon'a başvurulur; bağımsız sigorta hakemi bilirkişi raporuyla gerçek değer kaybını belirler.",
    highlights: [
      "Başvuru dosyasının eksiksiz hazırlanması",
      "Bilirkişi raporuna karşı teknik itirazlar",
      "İtiraz hakem heyeti süreci takibi",
      "Karar sonrası tahsilat ve icra",
    ],
    body: [
      {
        type: "p",
        text: "5684 sayılı Sigortacılık Kanunu m. 30 ile kurulan Sigorta Tahkim Komisyonu, trafik sigortası kapsamındaki değer kaybı uyuşmazlıklarında en sık kullanılan çözüm yoludur. Komisyon'a başvuru için sigorta şirketine yapılan yazılı başvurunun reddedilmiş veya 15 gün içinde cevaplanmamış olması gerekir.",
      },
      { type: "h2", text: "Tahkim sürecinin aşamaları" },
      {
        type: "ol",
        items: [
          "Başvuru formu, sigorta şirketinin cevabı (veya cevapsızlık kanıtı), kaza ve hasar belgeleri ile başvuru ücreti dekontunun Komisyon'a sunulması",
          "Raportör ön incelemesi ve dosyanın sigorta hakemine veya hakem heyetine atanması",
          "Hakemin bilirkişi görevlendirmesi; bilirkişinin aracın piyasa değeri, hasar niteliği ve onarım kalitesine göre değer kaybı hesabı",
          "Bilirkişi raporuna tarafların itirazı ve ek rapor",
          "Hakem kararı; kanunda belirtilen tutarın üzerindeki kararlara karşı itiraz hakem heyetine başvuru imkânı",
        ],
      },
      { type: "h2", text: "Neden tahkim?" },
      {
        type: "table",
        head: ["Kriter", "Sigorta Tahkim Komisyonu", "Mahkeme"],
        rows: [
          ["Ortalama süre", "4–6 ay", "12–24 ay"],
          ["Başvuru maliyeti", "Talep tutarına göre kademeli başvuru ücreti", "Harç + bilirkişi ücreti"],
          ["Karar niteliği", "Hakem kararı, ilam niteliğinde", "Mahkeme ilamı"],
          ["Uygunluk", "Sigorta şirketine yöneltilen talepler", "Sigorta şirketi ve/veya kusurlu sürücü"],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Dikkat",
        text: "Başvuru ücreti ve itiraz sınırları her yıl güncellenmektedir. Güncel tutarlar Sigorta Tahkim Komisyonu'nun resmî duyurularından teyit edilmelidir.",
      },
    ],
    faqs: [
      {
        question: "Sigorta Tahkim Komisyonu kararı bağlayıcı mı?",
        answer:
          "Evet. Sigorta hakem kararları taraflar için bağlayıcıdır ve ilam niteliğinde belge sayılır. Kanunda öngörülen tutarın üzerindeki kararlara karşı itiraz hakem heyetine başvurulabilir; sigorta şirketi ödeme yapmazsa karar icra yoluyla tahsil edilir.",
      },
      {
        question: "Tahkim başvurusu için avukat zorunlu mu?",
        answer:
          "Zorunlu değildir; ancak bilirkişi raporuna teknik itiraz, faiz başlangıcı ve tutar hesabı gibi konularda hukuki destek sonucu önemli ölçüde etkileyebilir.",
      },
    ],
  },
  {
    slug: "deger-kaybi-davasi",
    title: "Değer Kaybı Davası ve İcra Takibi",
    shortTitle: "Dava ve İcra",
    icon: "gavel",
    description:
      "Tahkim yolunun uygun olmadığı veya karara rağmen ödeme yapılmayan dosyalarda Asliye Ticaret Mahkemesi'nde dava ve icra takibi.",
    answerFirst:
      "Değer kaybı davası, kusurlu tarafın trafik sigortası şirketine ve gerektiğinde kusurlu sürücü ile araç işletenine karşı Asliye Ticaret Mahkemesi'nde açılan maddi tazminat davasıdır. Sigorta şirketine yazılı başvuru ön şarttır; dava, bilirkişi raporuyla belirlenen değer kaybının yasal faiz ve yargılama giderleriyle birlikte tahsilini sağlar.",
    highlights: [
      "Dava şartlarının ve görevli mahkemenin doğru belirlenmesi",
      "Bilirkişi raporuna etkili itiraz",
      "Yasal faiz ve vekâlet ücretinin tahsili",
      "Kesinleşen karar ve tahkim kararlarının icrası",
    ],
    body: [
      {
        type: "p",
        text: "Dava yolu, özellikle kusur oranının tartışmalı olduğu, sigorta şirketi dışında sürücü veya işletene de başvurulması gereken ya da değer kaybıyla birlikte başka maddi zararların (örneğin kazanç kaybı) da talep edildiği dosyalarda tercih edilir.",
      },
      { type: "h2", text: "Dava süreci" },
      {
        type: "ol",
        items: [
          "Sigorta şirketine yazılı başvuru ve 15 günlük sürenin beklenmesi",
          "Dava dilekçesinin hazırlanması ve Asliye Ticaret Mahkemesi'nde açılması",
          "Ön inceleme ve tahkikat aşamaları; bilirkişi incelemesi",
          "Karar; istinaf ve temyiz yollarının değerlendirilmesi",
          "Kesinleşen kararın icra takibi ile tahsili",
        ],
      },
      {
        type: "callout",
        tone: "info",
        text: "Değer kaybı alacakları için, 7155 sayılı Kanun kapsamında ticari dava niteliğindeki para alacaklarında dava öncesi arabuluculuk şartı bulunup bulunmadığı somut dosyaya göre değerlendirilir.",
      },
    ],
    faqs: [
      {
        question: "Değer kaybı davası hangi mahkemede açılır?",
        answer:
          "Sigorta şirketine karşı açılan değer kaybı davaları ticari dava sayıldığından kural olarak Asliye Ticaret Mahkemesi görevlidir. Yetkili mahkeme kazanın gerçekleştiği yer, davalının yerleşim yeri veya sigorta şirketinin merkezinin bulunduğu yer mahkemesi olabilir.",
      },
    ],
  },
  {
    slug: "kaza-sonrasi-hukuki-danismanlik",
    title: "Kaza Sonrası Hukuki Danışmanlık",
    shortTitle: "Kaza Danışmanlığı",
    icon: "document",
    description:
      "Kaza tutanağı, kusur itirazı, pert ve hasar süreçleri ile ilgili doğru adımları atmanız için önleyici hukuki danışmanlık.",
    answerFirst:
      "Kaza sonrası hukuki danışmanlık, trafik kazası geçiren araç sahiplerinin tutanak düzenlenmesinden sigorta süreçlerine kadar haklarını korumak için ilk günden itibaren doğru adımları atmasını sağlayan hizmettir. Kusur oranına itiraz, pert işlemleri, hasar dosyası takibi ve değer kaybı hakkının korunması bu kapsamda değerlendirilir.",
    highlights: [
      "Kaza tutanağı ve kusur oranı değerlendirmesi",
      "Kusur oranına itiraz süreçleri",
      "Pert (tam hasar) ve sovtaj işlemlerinde haklar",
      "Zamanaşımı ve ispat açısından delil güvenliği",
    ],
    body: [
      {
        type: "p",
        text: "Kazanın hemen ardından atılan adımlar, değer kaybı dâhil tüm tazminat haklarını doğrudan etkiler. Eksik düzenlenen tutanak, fotoğraflanmayan hasar veya yanlış kabul edilen kusur oranı, sonradan telafisi güç hak kayıplarına yol açabilir.",
      },
      { type: "h2", text: "Kaza anında dikkat edilmesi gerekenler" },
      {
        type: "ul",
        items: [
          "Yaralanma yoksa ve taraflar anlaşıyorsa maddi hasarlı kaza tespit tutanağı eksiksiz doldurulmalı, krokisi çizilmelidir",
          "Araçların konumu, hasar bölgeleri ve plakalar fotoğraflanmalıdır",
          "Karşı tarafın ehliyet, ruhsat ve trafik sigortası bilgileri alınmalıdır",
          "Alkol, ehliyetsizlik veya kaçma şüphesi varsa mutlaka polis/jandarma çağrılmalıdır",
          "Sigorta şirketinin sunduğu ibraname veya düşük teklif, hukuki değerlendirme yapılmadan imzalanmamalıdır",
        ],
      },
    ],
    faqs: [
      {
        question: "Kusur oranına itiraz edilebilir mi?",
        answer:
          "Evet. Tutanağa göre sigorta şirketlerinin belirlediği kusur oranına Sigorta Bilgi ve Gözetim Merkezi (SBM) nezdinde itiraz edilebilir; tahkim veya dava aşamasında ise kusur bilirkişi raporuyla yeniden değerlendirilir.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
