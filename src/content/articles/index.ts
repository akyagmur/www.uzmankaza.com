import type { Article } from "../types";
import { nasilAlinir } from "./nasil-alinir";
import { hesaplama } from "./hesaplama";
import { zamanasimi } from "./zamanasimi";
import { odemiyor } from "./odemiyor";
import { kusurOrani } from "./kusur-orani";
import { tahkim } from "./tahkim";
import { belgeler } from "./belgeler";
import { alinamaz } from "./alinamaz";

export const articles: Article[] = [
  nasilAlinir,
  hesaplama,
  zamanasimi,
  odemiyor,
  kusurOrani,
  tahkim,
  belgeler,
  alinamaz,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.related
    .map((slug) => getArticle(slug))
    .filter((a): a is Article => Boolean(a));
}

export const featuredArticles = articles.slice(0, 3);
