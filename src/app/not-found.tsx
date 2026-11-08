import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { articles } from "@/content/articles";

export const metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container size="narrow" className="text-center">
        <p className="font-serif text-7xl text-gold-500">404</p>
        <h1 className="mt-4 font-serif text-3xl text-navy-900 sm:text-4xl">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-4 text-lg text-ink-500">
          Sayfa taşınmış veya adres yanlış yazılmış olabilir. Aşağıdaki bağlantılar yardımcı olabilir.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Ana sayfaya dön</Button>
          <Button href="/arac-deger-kaybi" variant="ghost">
            Araç değer kaybı rehberi
          </Button>
        </div>
        <nav aria-label="Popüler rehberler" className="mt-14 text-left">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Popüler rehberler</h2>
          <ul className="mt-4 divide-y divide-cream-200 rounded-2xl border border-cream-200 bg-white">
            {articles.slice(0, 4).map((a) => (
              <li key={a.slug}>
                <Link href={`/rehber/${a.slug}`} className="block px-5 py-3.5 text-navy-900 hover:bg-cream-50">
                  {a.seoTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
