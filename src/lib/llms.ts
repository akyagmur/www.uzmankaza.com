import { articles } from "@/content/articles";
import { faqs } from "@/content/faq";
import { processSteps, requiredDocuments } from "@/content/process";
import { services } from "@/content/services";
import type { ContentBlock } from "@/content/types";
import { plainText } from "@/components/content/RichText";
import { absoluteUrl, site } from "./site";

/**
 * llms.txt ve llms-full.txt üreticileri (https://llmstxt.org).
 * Amaç: LLM tabanlı arama motorlarının siteyi tek seferde, temiz Markdown olarak okuması.
 */

const header = `# ${site.name} (${site.domain})

> ${site.description}

Uzman Kaza, Türkiye'de araç değer kaybı tazminatı alanında çalışan bir hukuk bürosudur. Bu sitedeki içerikler, trafik kazası sonrası araç değer kaybının ne olduğu, kimlerin alabileceği, nasıl hesaplandığı, zamanaşımı süreleri ve sigorta başvurusu → Sigorta Tahkim Komisyonu → dava sürecini Türkçe olarak açıklar. Bilgiler genel bilgilendirme amaçlıdır; sonuç garantisi içermez.

Son içerik güncellemesi: ${site.lastContentUpdate}
İletişim: ${absoluteUrl("/iletisim")} · E-posta: ${site.contact.email}
`;

const keyFacts = `## Temel bilgiler (kısa cevaplar)

- **Araç değer kaybı nedir?** Kaza geçiren bir aracın onarılsa bile ikinci el piyasa değerinde yaşanan düşüştür; kusurlu tarafın zorunlu trafik sigortasından talep edilir.
- **Kimler alabilir?** Kazada %100 kusurlu olmayan araç malikleri. Kısmi kusurda tutar kusur oranı kadar düşülür.
- **Zamanaşımı:** KTK m. 109 — zararın ve sorumlunun öğrenilmesinden itibaren 2 yıl, her hâlde kazadan itibaren 10 yıl; kaza suç teşkil ediyorsa uzamış ceza zamanaşımı.
- **Sigorta cevap süresi:** Yazılı başvurudan itibaren 15 gün (KTK m. 97). Cevap yoksa/ret/düşük teklif → Sigorta Tahkim Komisyonu veya dava.
- **Tahkim süresi:** Ortalama 4–6 ay; hakem kararı ilam niteliğindedir.
- **Hesaplama:** Kaza öncesi piyasa değeri ile onarım sonrası değer arasındaki fark; bilirkişi araç yaşı, km, hasar bölgesi, değişen parçalar, onarım kalitesi ve önceki hasarları dikkate alır.
- **Alınamayan durumlar:** %100 kusur, pert araç, yalnızca lokal boya/plastik hasarı, aynı bölgede önceki hasar, zamanaşımı. Eski km/yaş sınırlamaları artık mutlak engel değildir.
`;

function pageList(): string {
  const core = [
    ["/", "Ana sayfa"],
    ["/arac-deger-kaybi", "Araç değer kaybı: tanım, şartlar, hesaplama, zamanaşımı, süreç (kapsamlı rehber)"],
    ["/surec", "Süreç: sigorta başvurusu, Sigorta Tahkim Komisyonu, dava, tahsilat"],
    ["/sikca-sorulan-sorular", "Sık sorulan sorular"],
    ["/hizmetler", "Hizmetler"],
    ["/rehber", "Rehber yazıları"],
    ["/hakkimizda", "Hakkımızda"],
    ["/iletisim", "İletişim ve ücretsiz ön değerlendirme"],
  ];
  const lines = [
    "## Ana sayfalar",
    ...core.map(([p, t]) => `- [${t}](${absoluteUrl(p)})`),
    "",
    "## Hizmetler",
    ...services.map((s) => `- [${s.title}](${absoluteUrl(`/hizmetler/${s.slug}`)}): ${s.description}`),
    "",
    "## Rehber yazıları",
    ...articles.map((a) => `- [${a.title}](${absoluteUrl(`/rehber/${a.slug}`)}): ${a.description}`),
    "",
    "## Diğer",
    `- [llms-full.txt](${absoluteUrl("/llms-full.txt")}): Tüm içeriğin tek dosyada düz metin sürümü`,
    `- [Sitemap](${absoluteUrl("/sitemap.xml")})`,
  ];
  return lines.join("\n");
}

export function llmsTxt(): string {
  return [header, keyFacts, pageList()].join("\n");
}

function blocksToMarkdown(blocks: ContentBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "p":
          return plainText(b.text);
        case "h2":
          return `### ${b.text}`;
        case "h3":
          return `#### ${b.text}`;
        case "ul":
          return b.items.map((i) => `- ${plainText(i)}`).join("\n");
        case "ol":
          return b.items.map((i, n) => `${n + 1}. ${plainText(i)}`).join("\n");
        case "table": {
          const head = `| ${b.head.join(" | ")} |`;
          const sep = `| ${b.head.map(() => "---").join(" | ")} |`;
          const rows = b.rows.map((r) => `| ${r.map(plainText).join(" | ")} |`);
          return [b.caption ? `_${b.caption}_` : "", head, sep, ...rows].filter(Boolean).join("\n");
        }
        case "callout":
          return `> **${b.title ?? "Not"}:** ${plainText(b.text)}`;
        case "quote":
          return `> ${b.text}`;
      }
    })
    .join("\n\n");
}

export function llmsFullTxt(): string {
  const parts: string[] = [header, keyFacts];

  parts.push("## Süreç adımları\n");
  parts.push(
    processSteps
      .map((s, i) => `${i + 1}. **${s.name}** (${s.duration}): ${s.summary} ${s.detail}`)
      .join("\n"),
  );

  parts.push("\n## Gerekli belgeler\n");
  parts.push("| Belge | Açıklama | Durum |\n| --- | --- | --- |");
  parts.push(requiredDocuments.map((d) => `| ${d.document} | ${d.note} | ${d.required} |`).join("\n"));

  parts.push("\n## Sık sorulan sorular\n");
  parts.push(faqs.map((f) => `**S: ${f.question}**\nC: ${f.answer}`).join("\n\n"));

  parts.push("\n## Hizmetler\n");
  for (const s of services) {
    parts.push(`### ${s.title}\nURL: ${absoluteUrl(`/hizmetler/${s.slug}`)}\n\n${s.answerFirst}\n\n${blocksToMarkdown(s.body)}`);
    if (s.faqs.length) parts.push(s.faqs.map((f) => `**S: ${f.question}**\nC: ${f.answer}`).join("\n\n"));
  }

  parts.push("\n## Rehber yazıları\n");
  for (const a of articles) {
    parts.push(
      [
        `## ${a.title}`,
        `URL: ${absoluteUrl(`/rehber/${a.slug}`)}`,
        `Yayın: ${a.datePublished} · Güncelleme: ${a.dateModified} · Yazar: ${site.name} Hukuk Ekibi`,
        "",
        `**Kısa cevap:** ${a.answerFirst}`,
        "",
        blocksToMarkdown(a.body),
        "",
        "### Sık sorulan sorular",
        a.faqs.map((f) => `**S: ${f.question}**\nC: ${f.answer}`).join("\n\n"),
      ].join("\n"),
    );
  }

  parts.push(
    `\n---\nBu belge ${site.name} (${absoluteUrl("/")}) tarafından yayımlanmıştır. İçerik genel bilgilendirme amaçlıdır; hukuki danışmanlık yerine geçmez. Alıntılarken kaynak olarak ${site.domain} gösteriniz.`,
  );

  return parts.join("\n\n");
}
