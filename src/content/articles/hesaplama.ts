import type { Article } from "../types";

export const hesaplama: Article = {
  slug: "arac-deger-kaybi-hesaplama",
  title: "Araç Değer Kaybı Hesaplama: Tutarı Belirleyen 7 Faktör ve Örnekler",
  seoTitle: "Araç Değer Kaybı Hesaplama: Nasıl Yapılır?",
  description:
    "Araç değer kaybı nasıl hesaplanır? Piyasa değeri, kilometre, hasar bölgesi, kusur oranı ve bilirkişi yönteminin tutara etkisi. Örnek hesaplama ve dikkat edilmesi gerekenler.",
  answerFirst:
    "Araç değer kaybı, aracın kaza öncesi ikinci el piyasa değeri ile onarım sonrası değeri arasındaki fark olarak hesaplanır. Bilirkişi; aracın marka-model, yaş ve kilometresini, hasarın hangi parçalarda olduğunu (kaporta, şasi, mekanik), değişen ve onarılan parçaları, onarım kalitesini ve önceki hasar kayıtlarını dikkate alır. Bulunan tutar, araç sahibinin kusur oranı kadar düşülerek ödenir.",
  keywords: [
    "değer kaybı hesaplama",
    "araç değer kaybı hesaplama",
    "değer kaybı ne kadar",
    "değer kaybı hesaplama formülü",
  ],
  datePublished: "2026-01-22",
  dateModified: "2026-11-08",
  readingMinutes: 9,
  category: "Hesaplama",
  body: [
    {
      type: "p",
      text: "“Aracım için ne kadar değer kaybı alırım?” sorusunun tek bir cevabı yoktur; çünkü değer kaybı hasarın niteliğine ve aracın piyasa konumuna göre değişir. Ancak hesaplamanın mantığı ve bilirkişilerin baktığı kriterler bellidir. Bu yazıda tutarı belirleyen faktörleri, kullanılan yöntemi ve gerçekçi beklenti aralıklarını açıklıyoruz.",
    },
    { type: "h2", text: "Değer kaybı hesaplamasının hukuki dayanağı" },
    {
      type: "p",
      text: "Türk hukukunda zarar görenin “gerçek zararının” tazmini esastır (TBK m. 49 vd.). Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası Genel Şartları'nda yer alan değer kaybı hesaplama esasları yıllar içinde Anayasa Mahkemesi ve Danıştay kararlarıyla şekillenmiş; Yargıtay içtihatları gerçek zarar ilkesini ön planda tutmuştur. Bu nedenle uygulamada bilirkişiler formülü mekanik biçimde uygulamak yerine aracın piyasa değerindeki gerçek düşüşü tespit etmeye çalışır.",
    },
    { type: "h2", text: "Tutarı belirleyen 7 faktör" },
    {
      type: "ol",
      items: [
        "**Aracın kaza tarihindeki piyasa (rayiç) değeri:** Değeri yüksek araçlarda aynı hasar daha büyük değer kaybı yaratır.",
        "**Araç yaşı ve kilometresi:** Yeni ve düşük kilometreli araçlarda değer kaybı oranı daha yüksektir.",
        "**Hasarın bulunduğu bölge:** Şasi, direk, tavan ve taşıyıcı kaporta parçalarındaki hasar; tampon, far veya ayna hasarından çok daha fazla değer kaybı doğurur.",
        "**Değişen ve onarılan parçalar:** Değişen parça sayısı ve kaynaklı/çektirmeli onarımlar değer kaybını artırır.",
        "**Onarım kalitesi:** Orijinal parça ve yetkili servis onarımı kaybı sınırlar; yan sanayi parça ve kötü boya kaybı artırır.",
        "**Önceki hasar kayıtları:** Aynı bölgede daha önce hasar varsa, yeni kazanın değer kaybına etkisi azalır.",
        "**Kusur oranı:** Hesaplanan tutar, araç sahibinin kusur oranı kadar düşülerek ödenir.",
      ],
    },
    { type: "h2", text: "Bilirkişi nasıl hesaplar?" },
    {
      type: "p",
      text: "Sigorta Tahkim Komisyonu ve mahkemelerde görevlendirilen bilirkişiler genellikle iki yaklaşımı birlikte kullanır: Birincisi, aracın hasarsız emsal ilanları ile hasar kayıtlı emsallerinin karşılaştırılmasına dayanan piyasa yöntemi; ikincisi, aracın rayiç değeri üzerinden hasar boyutu, kilometre ve yaş katsayılarının uygulandığı formül yöntemidir. Sonuç olarak hem piyasa gerçeğini hem de teknik kriterleri yansıtan bir tutar belirlenir.",
    },
    { type: "h2", text: "Örnek hesaplama" },
    {
      type: "table",
      caption: "Temsili örnek; gerçek dosyalarda tutar bilirkişi raporuyla belirlenir.",
      head: ["Senaryo", "Araç", "Hasar", "Kusur", "Temsili değer kaybı aralığı"],
      rows: [
        ["A", "3 yaşında, 45.000 km, piyasa değeri 1.200.000 TL", "Ön kaput, çamurluk ve far değişimi; ön panel onarımı", "%0", "Rayiç değerin yaklaşık %4–8'i"],
        ["B", "8 yaşında, 160.000 km, piyasa değeri 600.000 TL", "Arka tampon ve bagaj kapağı boyalı onarım", "%0", "Rayiç değerin yaklaşık %1–3'ü"],
        ["C", "A senaryosu ile aynı araç ve hasar", "Aynı hasar", "%50", "A'daki tutarın yarısı"],
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Önemli",
      text: "Yukarıdaki yüzdeler yalnızca mantığı göstermek içindir; hiçbir aracın değer kaybı önceden kesin olarak bilinemez. Sigorta şirketinin ilk teklifi ile bilirkişi raporu arasında ciddi farklar çıkması uygulamada sık görülür.",
    },
    { type: "h2", text: "Sigorta şirketinin teklifi neden düşük çıkar?" },
    {
      type: "p",
      text: "Sigorta şirketleri ilk aşamada kendi eksperlerinin raporuna dayanır ve çoğunlukla yalnızca onarım bedelinin küçük bir yüzdesini değer kaybı olarak sunar. Bağımsız bilirkişi incelemesi ise piyasa verilerini ve hasarın araç değerine gerçek etkisini dikkate aldığından tutar genellikle yükselir. Bu nedenle ilk teklifin kabul edilmesinden önce dosyanın değerlendirilmesi önemlidir.",
    },
    { type: "h2", text: "Değer kaybıyla birlikte talep edilebilecek diğer kalemler" },
    {
      type: "ul",
      items: [
        "Sigorta başvurusunun yapıldığı tarihten itibaren işleyen yasal faiz (sigorta şirketi yönünden temerrüt tarihi 15 günlük sürenin sonu olarak değerlendirilebilir)",
        "Lehe karar hâlinde yargılama giderleri ve karşı vekâlet ücreti",
        "Koşulları varsa araç mahrumiyeti (ikame araç) ve kazanç kaybı — bunlar ayrı değerlendirme gerektirir",
      ],
    },
  ],
  faqs: [
    {
      question: "Değer kaybı hesaplama için bir formül var mı?",
      answer:
        "Trafik Sigortası Genel Şartları'nda aracın rayiç değeri, kilometresi ve hasar boyutuna dayalı bir hesaplama yöntemi öngörülmüştür; ancak Yargıtay gerçek zarar ilkesini esas aldığından bilirkişiler piyasa verilerini de dikkate alır. Tek bir mekanik formül sonucu belirlemez.",
    },
    {
      question: "Değer kaybı onarım bedelinin yüzde kaçı olur?",
      answer:
        "Sabit bir yüzde yoktur. Sigorta şirketleri genellikle onarım bedelinin küçük bir kısmını teklif eder; bilirkişi raporlarında ise hasarın bölgesine ve aracın değerine göre bu oran önemli ölçüde değişir. Değer kaybı, onarım bedelinden bağımsız olarak aracın piyasa değerindeki düşüşe göre belirlenir.",
    },
    {
      question: "Boya hasarı için değer kaybı alınır mı?",
      answer:
        "Yalnızca lokal boya veya plastik tampon onarımı gibi hasarlar genellikle düşük ya da sıfır değer kaybı doğurur. Ancak boyanın birden fazla panelde yapılması veya değişen parça bulunması hâlinde değer kaybı talep edilebilir.",
    },
  ],
  related: [
    "kusur-orani-deger-kaybi",
    "sigorta-sirketi-deger-kaybi-odemiyor",
    "arac-deger-kaybi-nasil-alinir",
  ],
};
