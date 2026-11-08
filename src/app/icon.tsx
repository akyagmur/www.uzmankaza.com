import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon (PLACEHOLDER: gerçek logo ile değiştirilebilir). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1a33",
          color: "#dcb94a",
          borderRadius: 7,
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "serif",
        }}
      >
        U
      </div>
    ),
    size,
  );
}
