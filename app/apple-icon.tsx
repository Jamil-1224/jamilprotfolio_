import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%)",
            color: "white",
            fontSize: 78,
            fontWeight: 800,
            letterSpacing: "-0.08em",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          RJ
        </div>
      </div>
    ),
    size,
  );
}