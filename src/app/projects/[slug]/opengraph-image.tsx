import { ImageResponse } from "next/og";
import { projectsData } from "@/lib/data";

// Route segment config
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
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "#ffffff", fontSize: "48px" }}>
          Project Not Found
        </span>
      </div>,
      { ...size },
    );
  }

  const frontmatter = {
    title: project.title,
    description: project.description,
    tech: project.tech,
  };

  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "60px",
        border: "4px solid #5e5e5e",
        fontFamily: "sans-serif",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.15,
              maxWidth: "1050px",
              borderLeft: "10px solid #76b900",
              paddingLeft: "24px",
            }}
          >
            {frontmatter.title}
          </div>
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "28px",
            lineHeight: 1.4,
            maxWidth: "1050px",
          }}
        >
          {frontmatter.description?.length > 200
            ? `${frontmatter.description.substring(0, 200)}...`
            : frontmatter.description}
        </div>
      </div>

      {frontmatter.tech && frontmatter.tech.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {frontmatter.tech.slice(0, 8).map((tech: string, i: number) => (
            <div
              key={i}
              style={{
                padding: "12px 24px",
                background: "#1a1a1a",
                border: "2px solid #5e5e5e",
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: "bold",
                borderRadius: "4px",
              }}
            >
              {tech}
            </div>
          ))}
          {frontmatter.tech.length > 8 && (
            <div
              style={{
                padding: "12px 24px",
                background: "#1a1a1a",
                border: "2px solid #5e5e5e",
                color: "#76b900",
                fontSize: "24px",
                fontWeight: "bold",
                borderRadius: "4px",
                display: "flex",
              }}
            >
              {`+${frontmatter.tech.length - 8} More`}
            </div>
          )}
        </div>
      )}
    </div>,
    {
      ...size,
    },
  );
}
