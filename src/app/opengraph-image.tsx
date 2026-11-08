import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} – Araç Değer Kaybı Tazminatında Hukuki Destek`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Yazı tipleri modül yüklenirken okunur; böylece görsel derleme zamanında statik üretilir.
const fraunces = await readFile(join(process.cwd(), "src/assets/fonts/Fraunces-SemiBold.ttf"));
const manrope = await readFile(join(process.cwd(), "src/assets/fonts/Manrope-Bold.ttf"));

/**
 * Site geneli Open Graph görseli (derleme zamanında üretilir).
 * PLACEHOLDER: Gerçek logo hazır olduğunda sol üstteki monogram değiştirilebilir.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #050d1a 0%, #0a1a33 55%, #173461 100%)",
          color: "#ffffff",
          fontFamily: "Manrope",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "2px solid rgba(201,162,39,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 40,
            width: 320,
            height: 320,
            borderRadius: 9999,
            border: "2px solid rgba(201,162,39,0.18)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#c9a227",
              color: "#050d1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Fraunces",
              fontSize: 38,
            }}
          >
            U
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Fraunces", fontSize: 40, display: "flex" }}>
              Uzman<span style={{ color: "#dcb94a" }}>Kaza</span>
            </div>
            <div style={{ fontSize: 16, letterSpacing: 4, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
              Değer Kaybı Hukuku
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              color: "#dcb94a",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Araç değer kaybı tazminatı
          </div>
          <div style={{ fontFamily: "Fraunces", fontSize: 64, lineHeight: 1.08, display: "flex" }}>
            Kaza sonrası aracınızın kaybettiği değeri sigortadan geri alın.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", display: "flex" }}>
            Sigorta başvurusu · Sigorta Tahkim Komisyonu · Dava takibi
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <span>www.uzmankaza.com</span>
          <span style={{ color: "#dcb94a" }}>Ücretsiz ön değerlendirme</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Manrope", data: manrope, weight: 700, style: "normal" },
      ],
    },
  );
}
