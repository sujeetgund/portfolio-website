import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  profileData,
  aboutData,
  experienceData,
  projectsData,
  skillsData,
  certificationsData,
  educationData,
} from "@/lib/data";

function getHomepageMarkdown(): string {
  const experiencesMd = experienceData
    .flatMap((exp) =>
      exp.roles.map((role) => {
        const bulletPointsList = (role.bulletPoints || []).map(
          (b) => `  - ${b}`
        );
        const bulletsList = (role.bullets || []).map(
          (b) => `  - ${b.text}`
        );
        const allBullets = [...bulletPointsList, ...bulletsList].join("\n");
        const bulletsSection = allBullets ? `\n- **Key Contributions**:\n${allBullets}` : "";

        return `### ${role.title} — [${exp.company}](${exp.companyUrl || "#"})
- **Duration**: ${role.startDate} – ${role.endDate || "Present"}
- **Location**: ${exp.location || "N/A"}
- **Overview**: ${role.description || ""}${bulletsSection}`;
      })
    )
    .join("\n\n");

  const projectsMd = projectsData
    .map((p) => {
      const liveLink = p.live ? ` | [Live Demo](${p.live})` : "";
      return `### [${p.title}](/projects/${p.slug})
*${p.tagline}*
- **Description**: ${p.description}
- **Tech Stack**: ${p.tech.join(", ")}
- **GitHub**: [${p.github}](${p.github})${liveLink}`;
    })
    .join("\n\n");

  const skillsMd = skillsData
    .map((cat) => `- **${cat.category}**: ${cat.skills.join(", ")}`)
    .join("\n");

  const certsMd = certificationsData
    .map((c) => `- [${c.name}](${c.url}) — **${c.issuer}** (${c.date})`)
    .join("\n");

  const eduMd = educationData
    .map(
      (e) =>
        `- **${e.degree}** @ ${e.institution} (${e.startDate.slice(0, 4)} – ${e.endDate.slice(0, 4)}) — *${e.details}*`
    )
    .join("\n");

  const email = profileData.contacts.find((c) => c.label === "Email")?.value.replace("mailto:", "");
  const linkedin = profileData.contacts.find((c) => c.label === "LinkedIn")?.value;
  const github = profileData.contacts.find((c) => c.label === "GitHub")?.value;

  return `# ${profileData.name} — ${profileData.title}

> ${profileData.subtitle}

- **Location**: ${profileData.location}
- **Email**: ${email}
- **LinkedIn**: ${linkedin}
- **GitHub**: ${github}
- **Machine Index**: /llms.txt

---

## About
${aboutData.paragraphs.join("\n\n")}

### Key Highlights
${aboutData.stats.map((s) => `- **${s.label}**: ${s.value}`).join("\n")}

---

## Work Experience
${experiencesMd}

---

## Featured Projects
${projectsMd}

---

## Technical Skills
${skillsMd}

---

## Education & Certifications
### Education
${eduMd}

### Certifications
${certsMd}
`;
}

function getProjectsPageMarkdown(): string {
  const projectsList = projectsData
    .map((p) => {
      const liveLink = p.live ? `\n- **Live Demo**: ${p.live}` : "";
      return `## [${p.title}](/projects/${p.slug})
*${p.tagline}*

${p.description}

- **Tech Stack**: ${p.tech.join(", ")}
- **GitHub**: ${p.github}${liveLink}
- **Deep-Dive Case Study**: /projects/${p.slug}`;
    })
    .join("\n\n---\n\n");

  return `# Projects | Sujeet Gund

Agentic AI systems, production RAG pipelines, and open-source LLM tools.

---

${projectsList}
`;
}

function getProjectDetailMarkdown(slug: string): string | null {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return null;

  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`
  );

  let mdxBody = "";
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);
    mdxBody = content;
  } catch (error) {
    // optional MDX content fallback
  }

  const liveLink = project.live ? `\n- **Live Demo**: ${project.live}` : "";

  return `# ${project.title}
*${project.tagline}*

${project.description}

- **Tech Stack**: ${project.tech.join(", ")}
- **GitHub Repository**: ${project.github}${liveLink}

---

${mdxBody || "Full case study details are available on GitHub."}
`;
}

function getResumeMarkdown(): string {
  return getHomepageMarkdown();
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawPath = searchParams.get("path") || "/";

  // Normalize path
  const reqPath = rawPath.toLowerCase().replace(/\/$/, "") || "/";

  let markdown: string | null = null;

  if (reqPath === "/" || reqPath === "/index") {
    markdown = getHomepageMarkdown();
  } else if (reqPath === "/projects") {
    markdown = getProjectsPageMarkdown();
  } else if (reqPath.startsWith("/projects/")) {
    const slug = reqPath.replace("/projects/", "");
    markdown = getProjectDetailMarkdown(slug);
  } else if (reqPath === "/resume") {
    markdown = getResumeMarkdown();
  }

  if (!markdown) {
    return new NextResponse("# 404 - Page Not Found\n\nThe requested route does not exist.", {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept",
        "Cache-Control": "no-store",
      },
    });
  }

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate",
    },
  });
}
