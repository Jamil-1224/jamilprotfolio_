import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.95), rgba(15,23,42,0.98) 52%, rgba(2,6,23,1) 100%)",
        }}
      >
        <div
          style={{
            width: 420,
            height: 420,
            borderRadius: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.22)",
            background: "rgba(255,255,255,0.08)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              color: "white",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            <div
              style={{
                fontSize: 180,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.08em",
              }}
            >
              RJ
            </div>
            <div
              style={{
                fontSize: 34,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Jamil
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}