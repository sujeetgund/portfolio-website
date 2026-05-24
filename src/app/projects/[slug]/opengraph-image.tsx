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
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
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
        </div>
      ),
      { ...size }
    );
  }

  const frontmatter = {
    title: project.title,
    description: project.description,
    tech: project.tech,
  };

  return new ImageResponse(
    (
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#76b900",
                marginRight: "16px",
              }}
            />
            <span
              style={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              Case Study
            </span>
          </div>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: "1000px",
            }}
          >
            {frontmatter.title}
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "32px",
              lineHeight: 1.4,
              maxWidth: "1000px",
              margin: 0,
            }}
          >
            {frontmatter.description?.length > 140
              ? `${frontmatter.description.substring(0, 140)}...`
              : frontmatter.description}
          </p>
        </div>

        {frontmatter.tech && frontmatter.tech.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {frontmatter.tech.slice(0, 5).map((tech: string, i: number) => (
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
            {frontmatter.tech.length > 5 && (
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
                {`+${frontmatter.tech.length - 5} More`}
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
