import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { services } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";

const lastmod = new Date(site.lastContentUpdate);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: lastmod, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/arac-deger-kaybi"), lastModified: lastmod, changeFrequency: "monthly", priority: 0.95 },
    { url: absoluteUrl("/surec"), lastModified: lastmod, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/hizmetler"), lastModified: lastmod, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/rehber"), lastModified: lastmod, changeFrequency: "weekly", priority: 0.85 },
    { url: absoluteUrl("/sikca-sorulan-sorular"), lastModified: lastmod, changeFrequency: "monthly", priority: 0.85 },
    { url: absoluteUrl("/hakkimizda"), lastModified: lastmod, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/iletisim"), lastModified: lastmod, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/gizlilik-politikasi"), lastModified: lastmod, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/kvkk-aydinlatma-metni"), lastModified: lastmod, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: absoluteUrl(`/hizmetler/${s.slug}`),
    lastModified: lastmod,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: absoluteUrl(`/rehber/${a.slug}`),
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...articlePages];
}
