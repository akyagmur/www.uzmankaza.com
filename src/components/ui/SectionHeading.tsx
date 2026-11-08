import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  const center = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${center}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-serif text-3xl leading-[1.15] tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/75" : "text-ink-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
