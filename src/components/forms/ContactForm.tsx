"use client";

import { useState, type FormEvent } from "react";

type FieldErrors = Partial<Record<"name" | "phone" | "plate" | "message" | "kvkk", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-[0.97rem] text-ink-900 placeholder:text-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 focus:outline-none aria-[invalid=true]:border-red-500";

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").replace(/\s|\(|\)|-/g, "");
  const plate = String(data.get("plate") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (name.length < 3) errors.name = "Lütfen adınızı ve soyadınızı yazın.";
  if (!/^(\+90|0)?5\d{9}$/.test(phone)) errors.phone = "Geçerli bir cep telefonu girin (örn. 05XX XXX XX XX).";
  if (plate && !/^\d{2}\s?[A-ZÇĞİÖŞÜ]{1,3}\s?\d{2,4}$/i.test(plate)) errors.plate = "Plaka formatı 34 ABC 123 şeklinde olmalıdır.";
  if (message.length < 10) errors.message = "Kazayı birkaç cümleyle anlatın (en az 10 karakter).";
  if (data.get("kvkk") !== "on") errors.kvkk = "Devam etmek için aydınlatma metnini onaylayın.";
  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Basit honeypot: botlar gizli alanı doldurur
    if (data.get("website")) return;

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Sunucu hatası");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="font-serif text-2xl text-emerald-900">Başvurunuz alındı.</p>
        <p className="mt-3 text-emerald-900/80">
          Dosyanızı aynı iş günü içinde inceleyip sizi arayacağız. Acil durumlar için WhatsApp hattımızı
          kullanabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-aciklama">
      <p id="form-aciklama" className="text-sm text-ink-500">
        Yıldızlı (*) alanlar zorunludur. Bilgileriniz yalnızca ön değerlendirme için kullanılır.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad *" id="name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        </Field>
        <Field label="Cep Telefonu *" id="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05XX XXX XX XX" required className={inputCls} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Araç Plakası" id="plate" error={errors.plate} hint="İsteğe bağlı">
          <input id="plate" name="plate" type="text" placeholder="34 ABC 123" className={`${inputCls} uppercase`} aria-invalid={!!errors.plate} aria-describedby={errors.plate ? "plate-err" : undefined} />
        </Field>
        <Field label="Kaza Tarihi" id="accidentDate" hint="İsteğe bağlı">
          <input id="accidentDate" name="accidentDate" type="date" className={inputCls} />
        </Field>
      </div>

      <Field label="Kusur Durumu" id="fault" hint="İsteğe bağlı">
        <select id="fault" name="fault" className={inputCls} defaultValue="">
          <option value="">Seçiniz</option>
          <option value="kusursuz">Kusursuzum (%0)</option>
          <option value="kismi">Kısmen kusurluyum</option>
          <option value="bilmiyorum">Bilmiyorum</option>
        </select>
      </Field>

      <Field label="Kazayı kısaca anlatın *" id="message" error={errors.message}>
        <textarea id="message" name="message" rows={4} required className={inputCls} placeholder="Kazanın nasıl olduğu, aracınızdaki hasar ve sigorta şirketiyle görüşüp görüşmediğiniz..." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Web sitesi</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-700">
          <input type="checkbox" name="kvkk" className="mt-1 h-4 w-4 rounded border-ink-300 text-navy-900 focus:ring-gold-500" aria-invalid={!!errors.kvkk} aria-describedby={errors.kvkk ? "kvkk-err" : undefined} />
          <span>
            <a href="/kvkk-aydinlatma-metni" className="underline underline-offset-2" target="_blank" rel="noopener">
              KVKK Aydınlatma Metni
            </a>
            &apos;ni okudum; bilgilerimin ön değerlendirme amacıyla işlenmesini kabul ediyorum. *
          </span>
        </label>
        {errors.kvkk && (
          <p id="kvkk-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.kvkk}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Gönderim sırasında bir sorun oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden ulaşın.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-13 w-full items-center justify-center rounded-full bg-gold-500 px-7 text-base font-semibold text-navy-950 shadow-[0_8px_24px_-8px_rgb(201_162_39/0.6)] transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Gönderiliyor…" : "Ücretsiz Ön Değerlendirme İste"}
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  hint,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-semibold text-navy-900">
        {label}
        {hint && <span className="text-xs font-normal text-ink-500">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
