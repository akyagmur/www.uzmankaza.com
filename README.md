# www.uzmankaza.com

Uzman Kaza — araç değer kaybı tazminatı odaklı hukuk bürosu web sitesi.
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · tamamen statik üretim · SEO + AI arama (GEO) optimizasyonu.

## Hızlı başlangıç

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # üretim derlemesi (tüm sayfalar statik üretilir)
npm run start      # üretim sunucusu
npm run lint       # ESLint
```

Node 20+ önerilir (geliştirme Node 22 ile yapıldı).

## Yayına almadan önce değiştirilmesi gereken yer tutucular

Tüm iletişim ve kurum bilgileri tek dosyada toplanmıştır: **`src/lib/site.ts`**

| Alan | Dosya | Açıklama |
|---|---|---|
| Telefon (`phoneDisplay`, `phoneE164`) | `src/lib/site.ts` | Şu an `+90 (5XX) XXX XX XX` |
| WhatsApp (`whatsappNumber`) | `src/lib/site.ts` | Ülke koduyla, yalnızca rakam |
| E-posta, adres, çalışma saatleri | `src/lib/site.ts` | |
| Avukat adları, baro ve sicil bilgileri (`team`) | `src/lib/site.ts` | Hakkımızda sayfasında görünür |
| Sosyal medya hesapları (`social`) | `src/lib/site.ts` | Organization şemasındaki `sameAs` |
| Kuruluş yılı (`foundingYear`) | `src/lib/site.ts` | |
| Müvekkil görüşleri | `src/components/sections/Testimonials.tsx` | Temsili metinler; TBB Reklam Yasağı Yönetmeliği açısından değerlendirilmeli |
| Logo / favicon / OG görseli | `src/components/layout/Logo.tsx`, `src/app/icon.tsx`, `src/app/apple-icon.tsx`, `src/app/opengraph-image.tsx` | Şu an kod ile üretilen "U" monogramı |
| Google Search Console doğrulaması | `src/app/layout.tsx` → `metadata.other` | Yorum satırı olarak hazır |
| KVKK metni kurum bilgileri | `src/app/kvkk-aydinlatma-metni/page.tsx` | Unvan, adres, vergi/baro bilgileri |
| İletişim formu backend'i | `src/app/api/iletisim/route.ts` | Stub; `CONTACT_WEBHOOK_URL` tanımlanırsa oraya POST eder |

## Dağıtım (Vercel)

1. Depoyu Vercel'e bağlayın; framework otomatik olarak Next.js algılanır, ek ayar gerekmez.
2. Ortam değişkeni (isteğe bağlı): `CONTACT_WEBHOOK_URL` — form gönderimlerinin iletileceği webhook (Zapier, Make, Resend vb.).
3. Alan adı: `www.uzmankaza.com` ekleyin; `uzmankaza.com` → `www` yönlendirmesini Vercel'de "Redirect" olarak ayarlayın. Canonical URL'ler `https://www.uzmankaza.com` olarak sabitlenmiştir (`src/lib/site.ts` → `SITE_URL`).
4. Yayın sonrası `https://www.uzmankaza.com/sitemap.xml` adresini Google Search Console ve Bing Webmaster Tools'a gönderin.

Başka bir barındırmada: `npm run build && npm run start` (Node sunucusu) yeterlidir.

## Proje yapısı

```
src/
  app/                      Rotalar (App Router)
    page.tsx                Ana sayfa
    arac-deger-kaybi/       Pillar sayfa (tanım, şartlar, hesaplama, zamanaşımı, süreç)
    surec/                  Süreç sayfası (HowTo şeması)
    hizmetler/[slug]/       Hizmet detayları
    rehber/[slug]/          Rehber makaleleri (BlogPosting şeması)
    sikca-sorulan-sorular/  SSS (FAQPage şeması)
    hakkimizda/, iletisim/, gizlilik-politikasi/, kvkk-aydinlatma-metni/
    robots.ts, sitemap.ts, manifest.ts, opengraph-image.tsx, icon.tsx
    llms.txt/, llms-full.txt/   LLM tarayıcıları için özet ve tam içerik
    api/iletisim/           Form stub
  content/                  Tüm metin içerik (makaleler, SSS, hizmetler, süreç)
  components/               UI bileşenleri (yalnızca MobileNav ve ContactForm client component)
  lib/                      site sabitleri, metadata, JSON-LD, llms üreticisi
  assets/fonts/             Yalnızca OG görseli için TTF (OFL lisanslı)
```

## İçerik ekleme

- **Yeni makale:** `src/content/articles/` altına yeni dosya ekleyip `index.ts` dizisine dahil edin. Sayfa, sitemap, llms.txt ve JSON-LD otomatik üretilir.
- **Yeni SSS:** `src/content/faq.ts` dizisine ekleyin; kategori anahtarıyla SSS sayfasında gruplanır.
- **Hizmet:** `src/content/services.ts`.
- İçerik güncellendiğinde `src/lib/site.ts` → `lastContentUpdate` ve ilgili makalenin `dateModified` alanını güncelleyin.

## SEO / AI görünürlüğü özeti

- Sayfa bazlı `title`, `description`, canonical, Open Graph ve Twitter kartları (`src/lib/seo.ts`)
- JSON-LD: `LegalService`+`Organization`, `WebSite`, `BreadcrumbList`, `FAQPage`, `HowTo`, `BlogPosting`, `Service`, `WebPage`
- `robots.txt`: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Bytespider ve diğer AI tarayıcılarına açık izin
- `/llms.txt` ve `/llms-full.txt`
- Her makale ve sayfa "kısa cevap" kutusuyla açılır; süreler ve belgeler tablo hâlinde verilir
- `lang="tr"`, tek H1, semantik başlık hiyerarşisi, breadcrumb, iç linkleme

## Hukuki not

Site içeriği genel bilgilendirme amaçlıdır. Yayın öncesi metinlerin 1136 sayılı Avukatlık Kanunu ve TBB Reklam Yasağı Yönetmeliği açısından sorumlu avukat tarafından gözden geçirilmesi önerilir (özellikle "ücretsiz ön değerlendirme" ifadeleri ve müvekkil görüşleri bölümü).
