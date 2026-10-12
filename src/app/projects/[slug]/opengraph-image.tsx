import { ImageResponse } from "next/og";
import { projectsData } from "@/lib/data";

export const alt = "Project Case Study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

function stripMarkdown(text: string): string {
  if (!text) return "";
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#0c0c0e",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "48px", fontWeight: "bold" }}>
            Project Not Found
          </span>
        </div>
      ),
      { ...size }
    );
  }

  const cleanDescription = stripMarkdown(project.description);

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
            gap: "16px",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "84px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            {project.title}
          </div>

          {project.tagline && (
            <div
              style={{
                color: "#76b900",
                fontSize: "36px",
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              {project.tagline}
            </div>
          )}

          <div
            style={{
              color: "#e4e4e7",
              fontSize: "26px",
              lineHeight: 1.45,
              maxWidth: "1050px",
              marginTop: "4px",
            }}
          >
            {cleanDescription.length > 210
              ? `${cleanDescription.substring(0, 210)}...`
              : cleanDescription}
          </div>
        </div>

        {/* Tech Stack Chips */}
        {project.tech && project.tech.length > 0 && (
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {project.tech.slice(0, 7).map((tech: string, i: number) => (
              <div
                key={i}
                style={{
                  padding: "10px 24px",
                  background: "#18181b",
                  border: "1px solid #3f3f46",
                  color: "#f4f4f5",
                  fontSize: "21px",
                  fontWeight: 600,
                  borderRadius: "8px",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
            {project.tech.length > 7 && (
              <div
                style={{
                  padding: "10px 24px",
                  background: "#18181b",
                  border: "1px solid #76b900",
                  color: "#76b900",
                  fontSize: "21px",
                  fontWeight: 700,
                  borderRadius: "8px",
                  display: "flex",
                }}
              >
                {`+${project.tech.length - 7} More`}
              </div>
            )}
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
