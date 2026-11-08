import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { nav, site, telUrl } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cream-200/80 bg-cream-50/85 backdrop-blur-md">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        İçeriğe atla
      </a>
      <Container size="wide" className="flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-[0.9rem] font-medium text-ink-700 transition hover:bg-navy-50 hover:text-navy-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={telUrl}
            className="hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-navy-900 hover:bg-navy-50 xl:flex"
            aria-label={`Telefonla arayın: ${site.contact.phoneDisplay}`}
          >
            <PhoneIcon size={18} className="text-gold-600" />
            {site.contact.phoneDisplay}
          </a>
          <div className="hidden sm:block">
            <Button href="/iletisim" variant="primary">
              Ücretsiz Ön Değerlendirme
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
