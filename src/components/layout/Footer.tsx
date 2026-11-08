import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { articles } from "@/content/articles";
import { services } from "@/content/services";
import { site, telUrl } from "@/lib/site";
import { Logo } from "./Logo";

const corporate = [
  { href: "/arac-deger-kaybi", label: "Araç Değer Kaybı Nedir?" },
  { href: "/surec", label: "Süreç Nasıl İşler?" },
  { href: "/sikca-sorulan-sorular", label: "Sık Sorulan Sorular" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <Container size="wide" className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">{site.description}</p>
          <address className="mt-6 space-y-3 text-sm not-italic">
            <a href={telUrl} className="flex items-start gap-3 hover:text-white">
              <PhoneIcon className="mt-0.5 shrink-0 text-gold-400" size={18} />
              <span>{site.contact.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 hover:text-white">
              <MailIcon className="mt-0.5 shrink-0 text-gold-400" size={18} />
              <span>{site.contact.email}</span>
            </a>
            <p className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 shrink-0 text-gold-400" size={18} />
              <span>
                {site.contact.address.streetAddress}
                <br />
                {site.contact.address.addressLocality}, Türkiye
              </span>
            </p>
          </address>
        </div>

        <FooterColumn title="Kurumsal" links={corporate} />
        <FooterColumn
          title="Hizmetler"
          links={services.map((s) => ({ href: `/hizmetler/${s.slug}`, label: s.shortTitle }))}
        />
        <FooterColumn
          title="Rehber"
          links={articles.slice(0, 6).map((a) => ({ href: `/rehber/${a.slug}`, label: a.seoTitle }))}
          wide
        />
      </Container>

      <div className="border-t border-white/10">
        <Container size="wide" className="flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/gizlilik-politikasi" className="hover:text-white">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link href="/kvkk-aydinlatma-metni" className="hover:text-white">
                KVKK Aydınlatma Metni
              </Link>
            </li>
            <li>
              <a href="/llms.txt" className="hover:text-white">
                llms.txt
              </a>
            </li>
          </ul>
        </Container>
        <Container size="wide" className="pb-8">
          <p className="text-[0.7rem] leading-relaxed text-white/40">
            Bu sitede yer alan bilgiler genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz ve
            avukat-müvekkil ilişkisi kurmaz. Her dosya kendi koşullarına göre değerlendirilir; sonuç ve tutar
            garanti edilemez. Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği hükümleri saklıdır.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  wide = false,
}: {
  title: string;
  links: { href: string; label: string }[];
  wide?: boolean;
}) {
  return (
    <nav aria-label={title} className={wide ? "lg:col-span-3" : "lg:col-span-2"}>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">{title}</h2>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/70 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
