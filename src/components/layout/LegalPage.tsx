import type { ContentBlock } from "@/content/types";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { JsonLd } from "@/components/JsonLd";
import { graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { formatDateTr } from "@/lib/text";

export function LegalPage({
  path,
  title,
  description,
  blocks,
}: {
  path: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
}) {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path, name: title, description, dateModified: site.lastContentUpdate }))} />
      <PageHeader crumbs={[{ name: title, path }]} title={title} description={description} />
      <Container size="narrow" className="py-14 lg:py-20">
        <p className="mb-8 text-sm text-ink-500">Son güncelleme: {formatDateTr(site.lastContentUpdate)}</p>
        <div className="prose-legal">
          <ContentBlocks blocks={blocks} />
        </div>
      </Container>
    </>
  );
}
