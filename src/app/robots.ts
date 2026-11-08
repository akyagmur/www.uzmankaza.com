import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Arama motorları ve yapay zeka tarayıcıları için robots.txt.
 * LLM tarayıcılarına açıkça izin verilir: içeriğin ChatGPT, Perplexity, Claude, Gemini
 * gibi asistanların cevaplarında kaynak gösterilmesi hedeflenir.
 */
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "DuckAssistBot",
  "meta-externalagent",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiCrawlers.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
