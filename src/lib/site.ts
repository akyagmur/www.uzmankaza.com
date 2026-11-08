/**
 * Site genelinde kullanılan sabitler.
 * "PLACEHOLDER" ile işaretli değerler yayına almadan önce gerçek bilgilerle değiştirilmelidir.
 */
export const SITE_URL = "https://www.uzmankaza.com";

export const site = {
  name: "Uzman Kaza",
  legalName: "Uzman Kaza Hukuk Bürosu",
  domain: "uzmankaza.com",
  url: SITE_URL,
  tagline: "Araç Değer Kaybı Tazminatında Hukuki Destek",
  description:
    "Uzman Kaza, trafik kazası sonrası araç değer kaybı tazminatı almak isteyen araç sahiplerine sigorta başvurusu, Sigorta Tahkim Komisyonu ve dava süreçlerinde hukuki destek sunan bir hukuk bürosudur.",
  locale: "tr_TR",
  language: "tr",
  foundingYear: "2024", // PLACEHOLDER: gerçek kuruluş yılı
  copyrightYear: "2026",
  /** Sitemap ve şemalarda kullanılan son içerik güncelleme tarihi (ISO). */
  lastContentUpdate: "2026-11-08",
  contact: {
    // PLACEHOLDER: gerçek telefon numarası ile değiştirin (uluslararası format)
    phoneDisplay: "+90 (5XX) XXX XX XX",
    phoneE164: "+905XXXXXXXXX",
    // PLACEHOLDER: WhatsApp hattı (sadece rakamlar, başında ülke kodu)
    whatsappNumber: "905XXXXXXXXX",
    whatsappMessage:
      "Merhaba, araç değer kaybı konusunda ücretsiz ön değerlendirme almak istiyorum.",
    // PLACEHOLDER: gerçek e-posta adresi
    email: "info@uzmankaza.com",
    // PLACEHOLDER: büro adresi
    address: {
      streetAddress: "[Büro adresi – PLACEHOLDER]",
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      postalCode: "34000",
      addressCountry: "TR",
    },
    openingHours: "Mo-Fr 09:00-18:00",
  },
  // PLACEHOLDER: gerçek sosyal medya hesapları
  social: {
    instagram: "https://www.instagram.com/uzmankaza",
    linkedin: "https://www.linkedin.com/company/uzmankaza",
  },
  // PLACEHOLDER: sorumlu avukat bilgileri
  team: [
    {
      name: "Av. [Ad Soyad – PLACEHOLDER]",
      title: "Kurucu Avukat",
      bar: "[Baro adı] Barosu – Sicil No: [PLACEHOLDER]",
      bio: "Trafik kazası tazminatları, sigorta hukuku ve Sigorta Tahkim Komisyonu süreçleri alanında çalışmaktadır.",
    },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;

export const telUrl = `tel:${site.contact.phoneE164}`;

export const nav = [
  { href: "/arac-deger-kaybi", label: "Değer Kaybı" },
  { href: "/surec", label: "Süreç" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/rehber", label: "Rehber" },
  { href: "/sikca-sorulan-sorular", label: "SSS" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
