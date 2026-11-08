export type Faq = {
  question: string;
  answer: string;
  category?: "genel" | "sartlar" | "hesaplama" | "sure" | "surec" | "ucret";
};

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title?: string; text: string; tone?: "info" | "warning" | "tip" }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  /** Arama sonuçlarında görünen kısa başlık (≤60 karakter) */
  seoTitle: string;
  description: string;
  /** Makalenin en üstünde yer alan, doğrudan ve alıntılanabilir cevap paragrafı */
  answerFirst: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  category: "Rehber" | "Hesaplama" | "Süreç" | "Hukuk";
  body: ContentBlock[];
  faqs: Faq[];
  related: string[];
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  answerFirst: string;
  icon: "shield" | "scale" | "gavel" | "document" | "calculator" | "clock";
  highlights: string[];
  body: ContentBlock[];
  faqs: Faq[];
};
