import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { LongForm, RelatedLinks, tocFromHeadings } from "@/components/layout/LongForm";
import { AnswerBox } from "@/components/content/AnswerBox";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FaqSection } from "@/components/content/FaqSection";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { articles, getArticle, getRelatedArticles } from "@/content/articles";
import { articleSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { formatDateTr } from "@/lib/text";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/rehber/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/rehber/${article.slug}`,
    keywords: article.keywords,
    type: "article",
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  });
}

export default async function RehberYaziPage({ params }: PageProps<"/rehber/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const headings = article.body.filter((b) => b.type === "h2").map((b) => b.text);

  return (
    <>
      <JsonLd data={graph(articleSchema(article))} />
      <PageHeader
        crumbs={[
          { name: "Rehber", path: "/rehber" },
          { name: article.seoTitle, path: `/rehber/${article.slug}` },
        ]}
        eyebrow={article.category}
        title={article.title}
        description={article.description}
      >
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/65">
          <div className="flex gap-2">
            <dt>Yayın:</dt>
            <dd>
              <time dateTime={article.datePublished}>{formatDateTr(article.datePublished)}</time>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt>Güncelleme:</dt>
            <dd>
              <time dateTime={article.dateModified}>{formatDateTr(article.dateModified)}</time>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt>Okuma:</dt>
            <dd>{article.readingMinutes} dk</dd>
          </div>
          <div className="flex gap-2">
            <dt>Yazar:</dt>
            <dd>
              <Link href="/hakkimizda" className="underline underline-offset-4 hover:text-white">
                {site.name} Hukuk Ekibi
              </Link>
            </dd>
          </div>
        </dl>
      </PageHeader>

      <LongForm
        toc={tocFromHeadings([...headings, "Sık sorulan sorular"])}
        aside={
          related.length > 0 ? (
            <RelatedLinks
              title="İlgili rehberler"
              links={related.map((r) => ({ href: `/rehber/${r.slug}`, label: r.seoTitle }))}
            />
          ) : undefined
        }
      >
        <article>
          <AnswerBox text={article.answerFirst} />
          <div className="prose-legal mt-10">
            <ContentBlocks blocks={article.body} />
          </div>
          <div className="mt-16" id="sik-sorulan-sorular">
            <FaqSection faqs={article.faqs} compact title="Sık sorulan sorular" />
          </div>
          <footer className="mt-12 rounded-2xl border border-cream-200 bg-white p-6 text-sm leading-relaxed text-ink-500">
            <p>
              <strong className="text-navy-900">Yazar:</strong> {site.name} Hukuk Ekibi — trafik kazası tazminatları ve
              sigorta hukuku alanında çalışan avukatlar tarafından hazırlanmış, {formatDateTr(article.dateModified)}{" "}
              tarihinde güncellenmiştir. Bu yazı genel bilgilendirme amaçlıdır; hukuki danışmanlık yerine geçmez.
            </p>
          </footer>
        </article>
      </LongForm>

      {related.length > 0 && (
        <section className="bg-cream-100 py-16" aria-labelledby="ilgili-baslik">
          <Container size="wide">
            <h2 id="ilgili-baslik" className="font-serif text-2xl text-navy-900">
              İlgili rehberler
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} />
              ))}
            </div>
          </Container>
        </section>
      )}
      <CtaBanner />
    </>
  );
}
