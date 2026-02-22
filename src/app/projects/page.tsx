import { ProjectsPage } from "@/components/pages/projects-page";
import type { Metadata } from "next";

const siteUrl = process.env.SITE_URL || "https://sujeetgund.in";
const pagePath = "/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of projects by Sujeet Gund, an AI Engineer.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}${pagePath}`,
    title: "Projects | Sujeet Gund",
    description: "A showcase of projects by Sujeet Gund, an AI Engineer.",
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
    title: "Projects | Sujeet Gund",
    description: "A showcase of projects by Sujeet Gund, an AI Engineer.",
    images: [`${siteUrl}/sujeetgund.jpg`],
    creator: "@Sujeet_Gund",
  },
};

export default function AllProjectsPage() {
  return <ProjectsPage />;
}
