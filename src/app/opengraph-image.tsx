import { ImageResponse } from "next/og";
import { profileData } from "@/lib/data";

export const alt = "Sujeet Gund | Agentic AI Engineer";
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
          background: "#0c0c0e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 72px",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
          border: "2px solid #27272a",
          position: "relative",
        }}
      >
        {/* Top Accent Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#76b900",
          }}
        />

        {/* Top Header - Domain Only */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <span
            style={{
              color: "#76b900",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            sujeetgund.in
          </span>
        </div>

        {/* Hero Content Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "96px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            {profileData.name}
          </div>

          <div
            style={{
              color: "#76b900",
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            Agentic AI Engineer · M.Tech AI @ VIT Bhopal
          </div>

          <div
            style={{
              color: "#e4e4e7",
              fontSize: "28px",
              lineHeight: 1.45,
              maxWidth: "1050px",
              marginTop: "4px",
            }}
          >
            {profileData.subtitle}
          </div>
        </div>

        {/* Bottom Skill Pills */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {[
            "Agentic Workflows",
            "LangGraph",
            "Production RAG",
            "FastAPI & AWS",
            "Full-Stack AI",
          ].map((skill, i) => (
            <div
              key={i}
              style={{
                padding: "12px 26px",
                background: "#18181b",
                border: "1px solid #3f3f46",
                color: "#f4f4f5",
                fontSize: "22px",
                fontWeight: 600,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
