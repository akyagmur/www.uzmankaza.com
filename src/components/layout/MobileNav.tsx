"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { nav, telUrl, whatsappUrl, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/** Yalnızca mobilde kullanılan menü; sitedeki tek etkileşimli navigasyon bileşenidir. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 hover:bg-navy-50"
        aria-expanded={open}
        aria-controls={id}
        aria-label="Menüyü aç"
      >
        <MenuIcon size={24} />
      </button>

      {open && (
        <div
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Site menüsü"
          className="fixed inset-0 z-50 flex flex-col bg-navy-950 text-white"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-serif text-xl font-semibold">
              Uzman<span className="text-gold-400">Kaza</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Menüyü kapat"
            >
              <CloseIcon size={24} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobil menü">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3.5 font-serif text-2xl hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 border-t border-white/10 px-5 py-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white"
            >
              <WhatsAppIcon /> WhatsApp ile yazın
            </a>
            <a
              href={telUrl}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 font-semibold"
            >
              <PhoneIcon /> {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
