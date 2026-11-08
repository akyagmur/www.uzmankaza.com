import Link from "next/link";

/** Metin tabanlı logo (PLACEHOLDER: gerçek logo SVG ile değiştirilebilir). */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Uzman Kaza ana sayfa"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg font-serif text-lg font-bold ${
          light ? "bg-gold-500 text-navy-950" : "bg-navy-900 text-gold-400"
        }`}
        aria-hidden="true"
      >
        U
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.35rem] font-semibold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
          Uzman<span className={light ? "text-gold-400" : "text-gold-600"}>Kaza</span>
        </span>
        <span className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-ink-500"}`}>
          Değer Kaybı Hukuku
        </span>
      </span>
    </Link>
  );
}
