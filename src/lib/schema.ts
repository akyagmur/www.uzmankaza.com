import type { Article, Faq } from "@/content/types";
import type { ProcessStep } from "@/content/process";
import { absoluteUrl, site, SITE_URL } from "./site";

/** Schema.org JSON-LD yapıları. Tüm şemalar aynı @id'lerle birbirine bağlanır. */

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/opengraph-image`;

export type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@type": ["LegalService", "Organization"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: "uzmankaza.com",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: LOGO_URL, width: 1200, height: 630 },
    image: LOGO_URL,
    description: site.description,
    slogan: site.tagline,
    foundingDate: site.foundingYear,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      ...site.contact.address,
    },
    areaServed: { "@type": "Country", name: "Türkiye" },
    availableLanguage: ["tr"],
    priceRange: "$$",
    openingHours: site.contact.openingHours,
    knowsAbout: [
      "Araç değer kaybı tazminatı",
      "Trafik kazası tazminatı",
      "Sigorta Tahkim Komisyonu başvurusu",
      "Zorunlu trafik sigortası uyuşmazlıkları",
      "Sigorta hukuku",
    ],
    serviceType: [
      "Araç değer kaybı tazminatı",
      "Sigorta Tahkim Komisyonu başvurusu",
      "Değer kaybı davası",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.contact.phoneE164,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
    ],
    sameAs: Object.values(site.social),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    inLanguage: "tr-TR",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function howToSchema(steps: ProcessStep[], opts: { name: string; description: string; path: string }): JsonLd {
  return {
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    inLanguage: "tr-TR",
    totalTime: "P6M",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: `${s.summary} ${s.detail}`,
      url: `${absoluteUrl(opts.path)}#adim-${i + 1}`,
    })),
  };
}

export function articleSchema(article: Article): JsonLd {
  const url = absoluteUrl(`/rehber/${article.slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    abstract: article.answerFirst,
    keywords: article.keywords.join(", "),
    articleSection: article.category,
    inLanguage: "tr-TR",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: LOGO_URL,
    isPartOf: { "@id": WEBSITE_ID },
    wordCount: estimateWordCount(article),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  dateModified?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}): JsonLd {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": absoluteUrl(opts.path),
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "tr-TR",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }): JsonLd {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Türkiye" },
  };
}

/** Birden fazla şemayı tek bir @graph altında birleştirir. */
export function graph(...schemas: JsonLd[]): JsonLd {
  return { "@context": "https://schema.org", "@graph": schemas };
}

function estimateWordCount(article: Article): number {
  const text = [
    article.answerFirst,
    ...article.body.map((b) => {
      switch (b.type) {
        case "p":
        case "h2":
        case "h3":
        case "quote":
          return b.text;
        case "callout":
          return `${b.title ?? ""} ${b.text}`;
        case "ul":
        case "ol":
          return b.items.join(" ");
        case "table":
          return b.rows.flat().join(" ");
      }
    }),
    ...article.faqs.map((f) => `${f.question} ${f.answer}`),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
