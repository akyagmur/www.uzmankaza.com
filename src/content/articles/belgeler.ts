import type { Article } from "../types";

export const belgeler: Article = {
  slug: "deger-kaybi-icin-gerekli-belgeler",
  title: "Değer Kaybı İçin Gerekli Belgeler: Eksiksiz Başvuru Kontrol Listesi",
  seoTitle: "Değer Kaybı İçin Gerekli Belgeler (Kontrol Listesi)",
  description:
    "Araç değer kaybı başvurusu için gerekli belgeler nelerdir? Kaza tutanağı, hasar fotoğrafları, ekspertiz raporu, ruhsat ve diğer belgelerin tam listesi ve nereden temin edileceği.",
  answerFirst:
    "Araç değer kaybı başvurusu için gerekli belgeler şunlardır: kaza tespit tutanağı veya polis raporu, hasar fotoğrafları, araç ruhsatı, karşı tarafın trafik sigortası poliçe bilgileri, hasar ekspertiz raporu veya onarım faturası, kimlik fotokopisi, IBAN ve avukatla ilerleniyorsa noter vekâletnamesi. Belgeler hem sigorta şirketine başvuruda hem de Sigorta Tahkim Komisyonu aşamasında kullanılır.",
  keywords: [
    "değer kaybı için gerekli belgeler",
    "değer kaybı başvurusu belgeler",
    "değer kaybı evrakları",
    "kaza tespit tutanağı değer kaybı",
  ],
  datePublished: "2026-04-02",
  dateModified: "2026-11-08",
  readingMinutes: 5,
  category: "Rehber",
  body: [
    {
      type: "p",
      text: "Değer kaybı dosyalarında gecikmelerin ve düşük tutarların en yaygın sebebi eksik veya zayıf belgedir. Belgeler kusuru, hasarı ve aracın durumunu ispat eder; bilirkişi hesabını bu belgeler üzerinden yapar. Aşağıdaki kontrol listesi başvurunuzu ilk seferde eksiksiz yapmanızı sağlar.",
    },
    { type: "h2", text: "Belge kontrol listesi" },
    {
      type: "table",
      caption: "Değer kaybı başvurusu için belgeler",
      head: ["Belge", "Ne işe yarar?", "Nereden alınır?", "Durum"],
      rows: [
        ["Kaza tespit tutanağı / polis raporu", "Kusur durumunu ispatlar", "Kaza anında taraflarca düzenlenir; resmî raporlar emniyet/jandarmadan", "Zorunlu"],
        ["Hasar fotoğrafları", "Hasarın bölgesini ve boyutunu gösterir", "Kaza yeri ve servis öncesi", "Zorunlu"],
        ["Araç ruhsatı (tescil belgesi)", "Malik ve araç bilgileri", "Araç sahibi", "Zorunlu"],
        ["Karşı taraf sigorta poliçe bilgileri", "Başvurulacak şirketi belirler", "Tutanak; eksikse plakadan SBM sorgusu", "Zorunlu"],
        ["Hasar ekspertiz raporu", "Değişen/onarılan parçalar ve tutarlar", "Sigorta eksperi / servis", "Varsa"],
        ["Onarım faturası / servis iş emri", "Onarımın kapsamı ve kalitesi", "Servis", "Varsa"],
        ["Tramer (hasar) kaydı sorgusu", "Hasar bedelini ve önceki kayıtları gösterir", "e-Devlet / SBM", "Önerilir"],
        ["Kimlik fotokopisi ve IBAN", "Ödemenin yapılması", "Araç sahibi", "Zorunlu"],
        ["Noter vekâletnamesi", "Avukatın sizin adınıza işlem yapması", "Noter", "Avukatla ilerleniyorsa"],
      ],
    },
    { type: "h2", text: "Kaza tespit tutanağı hakkında bilinmesi gerekenler" },
    {
      type: "p",
      text: "Yalnızca maddi hasarlı kazalarda, taraflar anlaşırsa polis beklemeden “Maddi Hasarlı Trafik Kazası Tespit Tutanağı” doldurulabilir. Tutanakta her iki aracın plakası, sürücü ve sigorta bilgileri, kaza krokisi ve tarafların beyanı yer alır. Tutanak eksik ya da çelişkili doldurulursa kusur belirlemesi aleyhe sonuçlanabilir. Sürücülerden biri alkollü, ehliyetsiz ise veya kamu malına zarar verilmişse mutlaka polis/jandarma çağrılmalıdır.",
    },
    { type: "h2", text: "Fotoğraf çekerken dikkat edilecekler" },
    {
      type: "ul",
      items: [
        "Araçların kaza anındaki konumu, yol çizgileri ve trafik işaretleri",
        "Her iki aracın hasar bölgeleri yakın ve uzak plan",
        "Plakaların okunur olduğu geniş açılı kareler",
        "Servis öncesi aracın genel durumu (sonradan oluşan hasar iddialarını önler)",
  ],
    },
    { type: "h2", text: "Belgeler eksikse ne olur?" },
    {
      type: "p",
      text: "Sigorta şirketleri eksik belgeyi başvuruyu sürüncemede bırakmak için kullanabilir. Tutanak yoksa kamera kayıtları, tanık beyanları ve servis kayıtlarıyla kusur ispatı mümkün olabilir; ekspertiz raporu yoksa Tramer kaydı ve servis faturası üzerinden değerlendirme yapılabilir. Eksik belgeli dosyaların başvuru öncesinde hukuki olarak değerlendirilmesi önerilir.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Pratik öneri",
      text: "Tüm belgeleri tek bir PDF klasöründe tarih sırasıyla saklayın. Uzman Kaza'ya ön değerlendirme için ilettiğinizde dosyanız aynı gün incelenir.",
    },
  ],
  faqs: [
    {
      question: "Ekspertiz raporu olmadan değer kaybı başvurusu yapılabilir mi?",
      answer:
        "Evet. Ekspertiz raporu hesaplamayı kolaylaştırır ancak zorunlu değildir. Tramer hasar kaydı, onarım faturası ve fotoğraflar üzerinden bilirkişi değerlendirme yapabilir.",
    },
    {
      question: "Karşı tarafın sigorta şirketini nasıl öğrenirim?",
      answer:
        "Kaza tespit tutanağında karşı aracın poliçe bilgileri yer alır. Eksikse, plaka üzerinden Sigorta Bilgi ve Gözetim Merkezi (SBM) sorgusu ile kaza tarihindeki trafik sigortası şirketi öğrenilebilir.",
    },
    {
      question: "Tramer kaydı nereden alınır?",
      answer:
        "Tramer (hasar) kaydı, e-Devlet üzerinden 'Araç Hasar Sorgulama' hizmeti veya SBM'nin ilgili sorgu kanalları ile plaka ve ruhsat bilgileriyle alınabilir.",
    },
  ],
  related: [
    "arac-deger-kaybi-nasil-alinir",
    "sigorta-tahkim-komisyonu-deger-kaybi-basvurusu",
    "kusur-orani-deger-kaybi",
  ],
};
