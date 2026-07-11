import type { Metadata } from "next";
import { siteConfig } from "./data";

type ProjectSeoInput = {
  title: string;
  description: string;
  slug: string;
  tech?: string[];
};

export function buildProjectMetadata(project: ProjectSeoInput): Metadata {
  const projectPath = `/projects/${project.slug}`;
  const projectUrl = `${siteConfig.siteUrl}${projectPath}`;

  return {
    title: `${project.title}`,
    description: project.description,
    keywords: [
      project.title,
      ...(project.tech || []),
      ...siteConfig.defaultKeywords,
    ],
    alternates: {
      canonical: projectPath,
    },
    openGraph: {
      type: "article",
      url: projectUrl,
      title: `${project.title} | Case Study`,
      description: project.description,
      siteName: siteConfig.title,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study`,
      description: project.description,
      creator: siteConfig.twitterHandle,
    },
  };
}
