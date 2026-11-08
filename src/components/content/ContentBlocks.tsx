import type { ContentBlock } from "@/content/types";
import { RichText } from "./RichText";
import { slugify } from "@/lib/text";

const calloutTone = {
  info: "border-navy-600/30 bg-navy-50 text-navy-900",
  warning: "border-gold-500/50 bg-gold-100 text-navy-900",
  tip: "border-emerald-500/40 bg-emerald-50 text-emerald-950",
};

const calloutLabel = { info: "Bilgi", warning: "Dikkat", tip: "İpucu" };

/** İçerik bloklarını semantik HTML'e dönüştürür. */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <RichText text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={block.id ?? slugify(block.text)} className="scroll-mt-28">
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-cream-200 bg-white shadow-soft">
                <table>
                  {block.caption && (
                    <caption className="px-4 py-3 text-left text-sm text-ink-500 border-b border-cream-200">
                      {block.caption}
                    </caption>
                  )}
                  <thead>
                    <tr>
                      {block.head.map((h, j) => (
                        <th key={j} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row" className="!bg-transparent !normal-case !tracking-normal !text-[0.95rem] font-semibold">
                              <RichText text={cell} />
                            </th>
                          ) : (
                            <td key={c}>
                              <RichText text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout": {
            const tone = block.tone ?? "info";
            return (
              <aside
                key={i}
                role="note"
                className={`rounded-xl border-l-4 px-5 py-4 text-[0.97rem] leading-relaxed ${calloutTone[tone]}`}
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wider opacity-70">
                  {block.title ?? calloutLabel[tone]}
                </p>
                <p className="!mt-0">
                  <RichText text={block.text} />
                </p>
              </aside>
            );
          }
          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-gold-500 pl-5 italic text-navy-900">
                {block.text}
              </blockquote>
            );
        }
      })}
    </>
  );
}
