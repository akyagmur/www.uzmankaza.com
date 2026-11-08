import type { Article } from "../types";

export const kusurOrani: Article = {
  slug: "kusur-orani-deger-kaybi",
  title: "Kusur Oranı Değer Kaybını Nasıl Etkiler? %50 Kusurlu Olan Değer Kaybı Alabilir mi?",
  seoTitle: "Kusur Oranı ve Değer Kaybı: Kusurlu Taraf Alabilir mi?",
  description:
    "Kusur oranı değer kaybı tazminatını nasıl etkiler? %100 kusur, %50-%50 kusur ve kusursuz durumlarda kimin ne alabileceği, kusura itiraz yolları ve örnek hesaplama.",
  answerFirst:
    "Kusur oranı, değer kaybı tazminatının tutarını doğrudan belirler: Hesaplanan değer kaybı, araç sahibinin kendi kusur oranı kadar düşülerek ödenir. Kazada %100 kusurlu olan taraf karşı tarafın trafik sigortasından değer kaybı alamaz; %50 kusurlu taraf değer kaybının %50'sini, kusursuz taraf tamamını talep edebilir. Kusur oranı kaza tespit tutanağına göre belirlenir ve bu orana itiraz edilebilir.",
  keywords: [
    "kusur oranı değer kaybı",
    "kusurlu taraf değer kaybı alabilir mi",
    "%50 kusur değer kaybı",
    "kusur oranına itiraz",
  ],
  datePublished: "2026-03-05",
  dateModified: "2026-11-08",
  readingMinutes: 6,
  category: "Hukuk",
  body: [
    {
      type: "p",
      text: "Değer kaybı taleplerinde en çok yanlış bilinen konu kusurun etkisidir. “Ben de kusurluyum, değer kaybı alamam” düşüncesi çoğu zaman haksız bir hak kaybına yol açar. Kısmi kusur, talebi ortadan kaldırmaz; yalnızca tutarı azaltır.",
    },
    { type: "h2", text: "Kusur oranına göre değer kaybı hakkı" },
    {
      type: "table",
      caption: "Araç sahibinin kusur oranına göre talep edilebilecek değer kaybı",
      head: ["Araç sahibinin kusuru", "Karşı tarafın sigortasından talep", "Açıklama"],
      rows: [
        ["%0 (kusursuz)", "Değer kaybının %100'ü", "Tam tazminat; en yaygın durum"],
        ["%25", "Değer kaybının %75'i", "Tazminat kusur oranında indirilir"],
        ["%50", "Değer kaybının %50'si", "Her iki taraf da birbirinin sigortasından kendi payını alabilir"],
        ["%75", "Değer kaybının %25'i", "Sınırlı ama var olan hak"],
        ["%100 (tam kusurlu)", "Talep hakkı yok", "Karşı taraf sizin trafik sigortanızdan değer kaybı alabilir"],
      ],
    },
    { type: "h2", text: "Kusur oranı nasıl belirlenir?" },
    {
      type: "p",
      text: "Maddi hasarlı kazalarda taraflarca doldurulan kaza tespit tutanağı, sigorta şirketlerinin oluşturduğu kusur değerlendirme komisyonunca incelenir ve Sigorta Bilgi ve Gözetim Merkezi (SBM) üzerinden kusur oranları belirlenir. Polis veya jandarmanın tuttuğu kazalarda ise resmî kaza raporu esas alınır. Tahkim ve dava aşamasında kusur, gerektiğinde trafik bilirkişisi tarafından yeniden değerlendirilir.",
    },
    { type: "h2", text: "Kusur oranına itiraz" },
    {
      type: "p",
      text: "Sigorta şirketlerinin belirlediği kusur oranı kesin değildir. Tutanak tarihinden itibaren belirli süre içinde SBM nezdinde itiraz edilebilir; ayrıca Sigorta Tahkim Komisyonu veya mahkeme aşamasında kusur yeniden incelenir. Kamera kayıtları, tanık beyanları, kaza yeri fotoğrafları ve araçların hasar bölgeleri kusur değerlendirmesinde belirleyici delillerdir.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Uygulama ipucu",
      text: "Kaza anında tutanağı imzalamadan önce krokiyi ve açıklamaları dikkatle kontrol edin. Tutanakta kabul edilen bir beyanın sonradan değiştirilmesi zordur.",
    },
    { type: "h2", text: "Örnek hesaplama" },
    {
      type: "p",
      text: "Bilirkişi, aracınızın değer kaybını 90.000 TL olarak belirledi. Kazada %30 kusurlu olduğunuza karar verildiyse karşı tarafın sigortasından talep edebileceğiniz tutar 90.000 × 0,70 = 63.000 TL'dir. Bu tutara faiz ve lehe karar hâlinde yargılama giderleri eklenir.",
    },
    { type: "h2", text: "Her iki taraf da kusurluysa" },
    {
      type: "p",
      text: "Örneğin %50–%50 kusurlu bir kazada her iki araç sahibi de karşı tarafın trafik sigortasından kendi aracının değer kaybının yarısını talep edebilir. Talepler birbirinden bağımsız dosyalarda yürütülür.",
    },
    { type: "h2", text: "Kusurlu sürücü ve araç sahibi farklıysa" },
    {
      type: "p",
      text: "Değer kaybını talep hakkı aracın malikine (ruhsat sahibine) aittir; aracı kullanan kişi farklı olsa bile talep ruhsat sahibi adına yapılır. Kusurlu araçta da sürücü ve işleten (araç sahibi) birlikte sorumludur; sigorta şirketi poliçe limitine kadar bu sorumluluğu üstlenir.",
    },
  ],
  faqs: [
    {
      question: "%100 kusurlu olan taraf değer kaybı alabilir mi?",
      answer:
        "Hayır. Kazada tamamen kusurlu olan taraf karşı tarafın trafik sigortasından değer kaybı talep edemez. Kendi kaskosu da, özel bir teminat yoksa, değer kaybını karşılamaz.",
    },
    {
      question: "Kusur oranı tutanakta yazmıyorsa ne olur?",
      answer:
        "Anlaşmalı kaza tespit tutanağında kusur oranı yer almaz; tutanak ve kroki üzerinden sigorta şirketlerinin kusur komisyonu oranı belirler. Bu oran SBM üzerinden sorgulanabilir ve gerekirse itiraz edilebilir.",
    },
    {
      question: "Kusur oranına itiraz süresi ne kadar?",
      answer:
        "SBM üzerinden yapılan kusur itirazları için belirlenen süre uygulamada kısadır ve tutanağın sisteme girişinden itibaren işler. Süre kaçırılsa bile tahkim veya dava aşamasında kusur bilirkişi incelemesiyle yeniden değerlendirilebilir.",
    },
  ],
  related: [
    "arac-deger-kaybi-hesaplama",
    "arac-deger-kaybi-nasil-alinir",
    "hangi-durumlarda-deger-kaybi-alinamaz",
  ],
};
