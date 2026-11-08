import { processSteps } from "@/content/process";

/** Süreç adımları; hem ana sayfada (özet) hem de /surec sayfasında (detaylı) kullanılır. */
export function ProcessSteps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="relative space-y-6">
      {processSteps.map((step, i) => (
        <li
          key={step.name}
          id={`adim-${i + 1}`}
          className="relative grid gap-5 rounded-2xl border border-cream-200 bg-white p-6 shadow-soft sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-7"
        >
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-serif text-xl text-gold-400"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg font-bold text-navy-900">
              <span className="sr-only">Adım {i + 1}: </span>
              {step.name}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">{step.summary}</p>
            {detailed && <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{step.detail}</p>}
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-600 sm:mt-1">
            {step.duration}
          </span>
        </li>
      ))}
    </ol>
  );
}
