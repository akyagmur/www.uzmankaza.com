import type { JsonLd as JsonLdData } from "@/lib/schema";

/** JSON-LD'yi XSS'e karşı güvenli biçimde <script type="application/ld+json"> olarak basar. */
export function JsonLd({ data }: { data: JsonLdData }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
