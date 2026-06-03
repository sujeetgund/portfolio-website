import { ImageResponse } from "next/og";
import { profileData } from "@/lib/data";

export const alt = "Sujeet Gund | AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 80px",
          border: "4px solid #5e5e5e",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#76b900",
                marginRight: "20px",
              }}
            />
            <span
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "6px",
              }}
            >
              Portfolio
            </span>
          </div>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "100px",
              fontWeight: 900,
              lineHeight: 1,
              margin: 0,
              marginTop: "60px",
              maxWidth: "1000px",
            }}
          >
            {profileData.name}
          </h1>

          <p
            style={{
              color: "#76b900",
              fontSize: "48px",
              fontWeight: "bold",
              lineHeight: 1.2,
              margin: 0,
              marginTop: "16px",
              maxWidth: "900px",
            }}
          >
            AI Engineer
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "36px",
              lineHeight: 1.4,
              maxWidth: "950px",
              margin: 0,
              marginTop: "32px",
            }}
          >
            {profileData.title} <br /> {profileData.subtitle}
          </p>
        </div>

        <div style={{ display: "flex", gap: "24px" }}>
          {["Machine Learning", "LLMs", "Agentic AI", "Full Stack"].map(
            (skill, i) => (
              <div
                key={i}
                style={{
                  padding: "16px 32px",
                  background: "#1a1a1a",
                  border: "2px solid #5e5e5e",
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  display: "flex",
                }}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
