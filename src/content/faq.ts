import type { Faq } from "./types";

/**
 * Site genelinde kullanılan sık sorulan sorular.
 * Her cevap, arama motorları ve yapay zeka asistanlarının doğrudan alıntılayabileceği şekilde
 * kısa, tanım niteliğinde ve kendi başına anlaşılır yazılmıştır.
 */
export const faqs: Faq[] = [
  {
    category: "genel",
    question: "Araç değer kaybı nedir?",
    answer:
      "Araç değer kaybı, trafik kazası geçiren bir aracın tamamen onarılsa bile ikinci el piyasa değerinde yaşanan düşüştür. Hasar kaydı (tramer kaydı) olan araçlar hasarsız emsallerine göre daha düşük fiyata alıcı bulur; bu fark, kusurlu tarafın trafik sigortasından talep edilebilen gerçek bir maddi zarardır.",
  },
  {
    category: "sartlar",
    question: "Kimler araç değer kaybı tazminatı alabilir?",
    answer:
      "Kazada tamamen kusurlu olmayan (kusur oranı %100'den az) araç sahipleri değer kaybı tazminatı talep edebilir. Araç onarılmış ve hasar kaydı oluşmuş olmalı, kusurlu tarafın geçerli bir trafik sigortası bulunmalı ve zamanaşımı süresi dolmamış olmalıdır.",
  },
  {
    category: "sartlar",
    question: "Kusurlu olan taraf değer kaybı alabilir mi?",
    answer:
      "Kazada %100 kusurlu olan taraf karşı tarafın sigortasından değer kaybı alamaz. Kısmen kusurlu olan taraf ise değer kaybı tazminatını kendi kusur oranı düşülerek alabilir; örneğin %25 kusurlu bir sürücü hesaplanan değer kaybının %75'ini talep edebilir.",
  },
  {
    category: "genel",
    question: "Değer kaybını kim öder?",
    answer:
      "Araç değer kaybını kazada kusurlu olan tarafın Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası (trafik sigortası) şirketi öder. Kendi kasko poliçeniz, aksine özel bir teminat yoksa, değer kaybını karşılamaz.",
  },
  {
    category: "hesaplama",
    question: "Araç değer kaybı nasıl hesaplanır?",
    answer:
      "Değer kaybı, aracın kaza öncesi ikinci el piyasa değeri ile onarım sonrası değeri arasındaki fark esas alınarak hesaplanır. Bilirkişiler aracın marka-model ve yaşını, kilometresini, hasarın büyüklüğünü ve hangi parçaların değiştiğini veya onarıldığını, ayrıca önceki hasar kayıtlarını dikkate alır. Sonuç, kusur oranıyla orantılı olarak belirlenir.",
  },
  {
    category: "hesaplama",
    question: "Değer kaybı tazminatı ne kadar olur?",
    answer:
      "Değer kaybı tutarı araca ve hasara göre değişir; sabit bir oran yoktur. Uygulamada yaygın olarak onarım bedelinin belirli bir yüzdesi ile piyasa değerinin bir kısmı arasında şekillenir. Yüksek değerli, düşük kilometreli ve kaporta/şasi hasarı olan araçlarda tutar daha yüksek çıkar. Kesin tutarı sigorta hakemi veya mahkemenin atadığı bilirkişi belirler.",
  },
  {
    category: "sure",
    question: "Araç değer kaybında zamanaşımı süresi ne kadar?",
    answer:
      "Araç değer kaybı talebinde zamanaşımı, 2918 sayılı Karayolları Trafik Kanunu m. 109 gereği zararın ve sorumlunun öğrenildiği tarihten itibaren 2 yıl, her hâlde kaza tarihinden itibaren 10 yıldır. Kaza aynı zamanda suç teşkil ediyorsa daha uzun olan ceza zamanaşımı uygulanır.",
  },
  {
    category: "sure",
    question: "Değer kaybı tazminatı ne kadar sürede alınır?",
    answer:
      "Sigorta şirketi yazılı başvuruya 15 gün içinde cevap vermek zorundadır. Anlaşma sağlanamazsa Sigorta Tahkim Komisyonu süreci genellikle 4–6 ay içinde sonuçlanır. Mahkeme yolu tercih edildiğinde süre 1 yılı aşabilir. Toplamda çoğu dosya 4 ila 8 ay içinde tahsilatla tamamlanır.",
  },
  {
    category: "surec",
    question: "Sigorta şirketi değer kaybını ödemiyorsa ne yapılır?",
    answer:
      "Sigorta şirketi 15 gün içinde cevap vermez, talebi reddeder veya düşük teklif verirse Sigorta Tahkim Komisyonu'na başvurulur ya da Asliye Ticaret Mahkemesi'nde dava açılır. Tahkim yolu daha hızlıdır ve bağımsız hakem heyeti bilirkişi raporuyla gerçek değer kaybını belirler.",
  },
  {
    category: "surec",
    question: "Sigorta Tahkim Komisyonu'na nasıl başvurulur?",
    answer:
      "Önce kusurlu tarafın sigorta şirketine yazılı başvuru yapılır. 15 gün içinde olumlu cevap alınamazsa başvuru formu, sigorta şirketinin cevabı veya cevapsızlığa dair belge, kaza tutanağı, hasar belgeleri ve başvuru ücreti dekontu ile Sigorta Tahkim Komisyonu'na başvurulur. Başvuru e-Devlet veya avukat aracılığıyla yapılabilir.",
  },
  {
    category: "sartlar",
    question: "Hangi durumlarda değer kaybı alınamaz?",
    answer:
      "Kazada %100 kusurlu olunması, aracın pert (tam hasar) işlemi görmesi, hasarın yalnızca basit boya/plastik tampon gibi değer kaybı doğurmayan nitelikte olması, aynı bölgede daha önce hasar kaydı bulunması veya zamanaşımının dolmuş olması hâllerinde değer kaybı talebi reddedilebilir ya da sınırlı kalabilir.",
  },
  {
    category: "sartlar",
    question: "Yüksek kilometreli veya eski araçlar değer kaybı alabilir mi?",
    answer:
      "Evet, alabilir. Geçmişte uygulanan kilometre ve yaş sınırlamaları Anayasa Mahkemesi ve Yargıtay kararları sonrasında kategorik bir engel olmaktan çıkmıştır. Her dosya aracın gerçek piyasa değeri ve hasarın niteliğine göre bilirkişi tarafından ayrı ayrı değerlendirilir; yaşlı araçlarda tutar daha düşük hesaplanabilir.",
  },
  {
    category: "surec",
    question: "Değer kaybı için hangi belgeler gerekir?",
    answer:
      "Kaza tespit tutanağı veya polis raporu, hasar fotoğrafları, araç ruhsatı, karşı tarafın trafik sigortası poliçe bilgileri, hasar ekspertiz raporu veya onarım faturası, kimlik ve IBAN bilgileri ile avukat aracılığıyla ilerlenecekse noter vekâletnamesi gerekir.",
  },
  {
    category: "ucret",
    question: "Değer kaybı davası için avukata ne kadar ücret ödenir?",
    answer:
      "Ücretlendirme dosyaya göre belirlenir ve ilk görüşmede yazılı olarak bildirilir. Avukatlık Asgari Ücret Tarifesi'nin altında ücret kararlaştırılamaz. Dosyanın lehe sonuçlanması hâlinde karşı vekâlet ücreti ve yargılama giderleri kural olarak kusurlu tarafın sigorta şirketinden tahsil edilir.",
  },
  {
    category: "genel",
    question: "Tramer kaydı değer kaybı ile aynı şey mi?",
    answer:
      "Hayır. Tramer (hasar) kaydı, aracın kaza geçirdiğini ve onarım bedelini gösteren sigorta kaydıdır. Değer kaybı ise bu kaydın araç fiyatında yarattığı düşüştür. Tramer kaydı değer kaybını ispat eden belgelerden biridir, ancak tazminatın kendisi değildir.",
  },
  {
    category: "surec",
    question: "Kaza tutanağı tutulmadıysa değer kaybı alınabilir mi?",
    answer:
      "Tutanak yoksa kusur durumunu ispat etmek zorlaşır ancak talep tamamen kapanmaz. Kamera kayıtları, tanık beyanları, servis kayıtları ve karşı tarafın kabulü gibi delillerle kusur oranı belirlenebilir. Bu tür dosyaların hukuki değerlendirmesi ayrıca yapılmalıdır.",
  },
];

export const homeFaqs = faqs.filter((f) =>
  [
    "Araç değer kaybı nedir?",
    "Kimler araç değer kaybı tazminatı alabilir?",
    "Araç değer kaybında zamanaşımı süresi ne kadar?",
    "Değer kaybı tazminatı ne kadar sürede alınır?",
    "Sigorta şirketi değer kaybını ödemiyorsa ne yapılır?",
    "Değer kaybı davası için avukata ne kadar ücret ödenir?",
  ].includes(f.question),
);

export const faqCategories: { key: NonNullable<Faq["category"]>; label: string }[] = [
  { key: "genel", label: "Genel" },
  { key: "sartlar", label: "Şartlar" },
  { key: "hesaplama", label: "Hesaplama" },
  { key: "sure", label: "Süreler" },
  { key: "surec", label: "Süreç ve Belgeler" },
  { key: "ucret", label: "Ücret" },
];
