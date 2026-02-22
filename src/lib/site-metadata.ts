import type { Metadata } from "next";

export const siteMetadata = {
  title:
    "AI Engineering Student specializing in Machine Learning, LLMs, and intelligent system development.",
};

type ProjectSeoInput = {
  title: string;
  description: string;
  slug: string;
  tech?: string[];
};

const siteUrl = process.env.SITE_URL || "https://sujeetgund.in";

export function buildProjectMetadata(project: ProjectSeoInput): Metadata {
  const projectPath = `/projects/${project.slug}`;
  const projectUrl = `${siteUrl}${projectPath}`;

  return {
    title: project.title,
    description: project.description,
    keywords: [
      project.title,
      ...(project.tech || []),
      "AI Projects",
      "Sujeet Gund",
    ],
    alternates: {
      canonical: projectPath,
    },
    openGraph: {
      type: "article",
      url: projectUrl,
      title: project.title,
      description: project.description,
      siteName: "Sujeet Gund Portfolio",
      images: [
        {
          url: `${siteUrl}/sujeetgund.jpg`,
          width: 800,
          height: 600,
          alt: "Sujeet Gund",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`${siteUrl}/sujeetgund.jpg`],
      creator: "@Sujeet_Gund",
    },
  };
}
