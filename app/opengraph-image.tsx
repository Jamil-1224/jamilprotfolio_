import { ImageResponse } from "next/og";
import { personalData } from "@/lib/data/personal-data";

export const runtime = "edge";

const siteUrl = "https://rousonjamil.vercel.app";

export const alt = `${personalData.full_name} portfolio preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(59,130,246,0.42), transparent 30%), radial-gradient(circle at bottom right, rgba(16,185,129,0.3), transparent 28%), linear-gradient(135deg, #0b1020 0%, #111827 52%, #0f172a 100%)",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.28,
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 72px",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.08)",
                  padding: "10px 18px",
                  fontSize: 24,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Portfolio
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div
                  style={{
                    fontSize: 70,
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {personalData.full_name}
                </div>
                <div
                  style={{
                    fontSize: 42,
                    lineHeight: 1.1,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    maxWidth: 860,
                  }}
                >
                  {personalData.post}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  maxWidth: 760,
                  fontSize: 28,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <div>{personalData.post_description}</div>
                <div>Backend development, competitive programming, mentoring, and problem solving.</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignItems: "flex-end",
                fontSize: 20,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 999,
                  background: "rgba(34,197,94,0.16)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  color: "#bbf7d0",
                  fontWeight: 700,
                }}
              >
                Open to mentoring
              </div>
              <div>{siteUrl.replace("https://", "")}</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              alignItems: "center",
              fontSize: 24,
            }}
          >
            {personalData.interests.map((interest) => (
              <div
                key={interest}
                style={{
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px 18px",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}