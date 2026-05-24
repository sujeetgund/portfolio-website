import { ProjectsPage } from "@/components/pages/projects-page";
import type { Metadata } from "next";

const siteUrl = process.env.SITE_URL || "https://sujeetgund.in";
const pagePath = "/projects";

export const metadata: Metadata = {
  title: "Featured Projects",
  description: "Explore a collection of intelligent systems, AI agents, and modular applications built by Sujeet Gund.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}${pagePath}`,
    title: "Featured Projects | Sujeet Gund",
    description: "Explore a collection of intelligent systems, AI agents, and modular applications built by Sujeet Gund.",
    siteName: "Sujeet Gund Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Projects | Sujeet Gund",
    description: "Explore a collection of intelligent systems, AI agents, and modular applications built by Sujeet Gund.",
    creator: "@Sujeet_Gund",
  },
};

export default function AllProjectsPage() {
  return <ProjectsPage />;
}
