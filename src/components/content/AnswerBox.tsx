/**
 * "Cevap-önce" kutusu: Sayfanın en üstünde, doğrudan ve alıntılanabilir kısa cevap.
 * Arama motorlarının öne çıkan snippet'leri ve LLM asistanları bu paragrafı hedefler.
 */
export function AnswerBox({ text, label = "Kısa cevap" }: { text: string; label?: string }) {
  return (
    <div className="relative rounded-2xl border border-gold-500/40 bg-gradient-to-br from-gold-100/70 to-white p-6 shadow-soft sm:p-7">
      <span className="absolute -top-3 left-6 rounded-full bg-navy-900 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-gold-400">
        {label}
      </span>
      <p className="text-[1.08rem] font-medium leading-relaxed text-navy-900">{text}</p>
    </div>
  );
}
