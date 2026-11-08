import { NextResponse } from "next/server";

/**
 * İletişim formu için stub uç nokta.
 * TODO (yayın öncesi): Resend / SMTP / CRM entegrasyonu ekleyin.
 * Ortam değişkeni örneği: CONTACT_WEBHOOK_URL — tanımlıysa gönderim bu adrese iletilir.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek" }, { status: 400 });
  }

  if (payload.website) {
    // Honeypot dolu: bot; sessizce başarılı dön
    return NextResponse.json({ ok: true });
  }

  const name = String(payload.name ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const message = String(payload.message ?? "").trim();
  if (name.length < 3 || phone.length < 10 || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Eksik alanlar" }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "uzmankaza.com", ...payload }),
      });
    } catch (err) {
      console.error("[iletisim] webhook hatası", err);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } else {
    console.info("[iletisim] yeni başvuru (stub)", { name, phone });
  }

  return NextResponse.json({ ok: true });
}
