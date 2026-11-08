import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

/** Sayfa bazlı metadata üretir: canonical, Open Graph, Twitter kartı ve robots. */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex,
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  // Alt segmentlerde openGraph tanımlanınca dosya tabanlı görsel miras alınmaz; açıkça veriyoruz.
  const images = [
    {
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
      alt: `${site.name} – ${site.tagline}`,
    },
  ];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images,
      ...(type === "article" ? { publishedTime, modifiedTime, authors: [site.name] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images[0].url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
  };
}
