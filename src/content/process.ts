export type ProcessStep = {
  name: string;
  summary: string;
  detail: string;
  duration: string;
};

/** Değer kaybı tazminatı sürecinin adımları — HowTo şeması ve süreç sayfası için tek kaynak. */
export const processSteps: ProcessStep[] = [
  {
    name: "Ücretsiz ön değerlendirme",
    summary:
      "Kaza tespit tutanağı, hasar fotoğrafları ve ruhsat bilgilerinizi iletin; dosyanızın değer kaybına uygun olup olmadığını değerlendirelim.",
    detail:
      "Kazadaki kusur durumu, aracın hasar bölgeleri, model yılı ve kilometresi incelenir. Talebin hukuken mümkün görünüp görünmediği ve yaklaşık süreç size açıkça anlatılır. Bu aşama herhangi bir ücret veya taahhüt gerektirmez.",
    duration: "Aynı gün",
  },
  {
    name: "Belgelerin toplanması ve vekâlet",
    summary:
      "Gerekli belgeler listelenir, eksikler tamamlanır ve noterden avukat vekâletnamesi düzenlenir.",
    detail:
      "Kaza tespit tutanağı veya polis raporu, hasar ekspertiz raporu, onarım faturası, araç ruhsatı, karşı tarafın trafik sigortası poliçe bilgileri ve IBAN bilgileri dosyaya eklenir. Vekâletname ile süreç sizin adınıza yürütülür.",
    duration: "1–3 gün",
  },
  {
    name: "Sigorta şirketine yazılı başvuru",
    summary:
      "Kusurlu tarafın trafik sigortası şirketine, 2918 sayılı Karayolları Trafik Kanunu m. 97 uyarınca yazılı değer kaybı başvurusu yapılır.",
    detail:
      "Sigorta şirketinin başvuruya 15 gün içinde yazılı cevap vermesi gerekir. Şirket bu sürede hiç cevap vermezse ya da teklifi gerçek zararı karşılamazsa Sigorta Tahkim Komisyonu veya dava yolu açılır. Bu başvuru, tahkim ve dava için zorunlu bir ön şarttır.",
    duration: "15 gün",
  },
  {
    name: "Sigorta Tahkim Komisyonu başvurusu",
    summary:
      "Sigorta şirketi ödemezse veya eksik öderse, dosya Sigorta Tahkim Komisyonu'na taşınır; bağımsız sigorta hakemi değer kaybı tutarını bilirkişi raporuyla belirler.",
    detail:
      "Tahkim, mahkemeye göre daha hızlı ve genellikle daha düşük masraflı bir yoldur. Hakem heyeti dosya üzerinden bilirkişi incelemesi yaptırır; bilirkişi aracın piyasa değerini, hasar niteliğini ve onarım kalitesini dikkate alarak değer kaybı tutarını hesaplar. Karar, belirli tutarın üzerindeki uyuşmazlıklarda itiraza açıktır.",
    duration: "Ortalama 4–6 ay",
  },
  {
    name: "Karar, tahsilat ve ödeme",
    summary:
      "Lehe karar kesinleştiğinde değer kaybı tutarı, yasal faizi ve yargılama giderleriyle birlikte sigorta şirketinden tahsil edilir ve hesabınıza aktarılır.",
    detail:
      "Sigorta şirketi karara rağmen ödeme yapmazsa icra takibi başlatılır. Tahkim yolunun uygun olmadığı istisnai durumlarda Asliye Ticaret Mahkemesi'nde dava açılması da değerlendirilir.",
    duration: "Karar sonrası 2–4 hafta",
  },
];

export const requiredDocuments: { document: string; note: string; required: "Zorunlu" | "Varsa" }[] = [
  {
    document: "Kaza tespit tutanağı veya polis/jandarma kaza raporu",
    note: "Kusur durumunun belirlenmesinde temel belgedir.",
    required: "Zorunlu",
  },
  {
    document: "Hasar fotoğrafları",
    note: "Kaza yerinde ve servis öncesi çekilmiş fotoğraflar hasarın niteliğini ispatlar.",
    required: "Zorunlu",
  },
  {
    document: "Araç ruhsatı (tescil belgesi)",
    note: "Araç sahipliğini ve araç bilgilerini gösterir.",
    required: "Zorunlu",
  },
  {
    document: "Karşı tarafın trafik sigortası poliçe bilgileri",
    note: "Tutanakta yer alır; eksikse plaka üzerinden sorgulanabilir.",
    required: "Zorunlu",
  },
  {
    document: "Hasar ekspertiz raporu ve onarım faturası",
    note: "Değişen/onarılan parçaları ve işçiliği belgeler; hesaplamanın temelidir.",
    required: "Varsa",
  },
  {
    document: "Kimlik fotokopisi ve IBAN",
    note: "Ödemenin araç sahibine yapılabilmesi için gerekir.",
    required: "Zorunlu",
  },
  {
    document: "Noter vekâletnamesi",
    note: "Sürecin avukat aracılığıyla yürütülmesi için düzenlenir.",
    required: "Zorunlu",
  },
];
