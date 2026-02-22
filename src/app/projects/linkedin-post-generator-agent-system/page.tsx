import { LinkedInPostGeneratorAgentSystemPage } from "@/components/pages/linkedin-post-generator-agent-system-page";
import { projectsData } from "@/lib/data";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find(
    (p) => p.slug === "linkedin-post-generator-agent-system",
  );
  if (!project) {
    return {};
  }
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default function LinkedInPostGeneratorAgentSystemProjectPage() {
  return <LinkedInPostGeneratorAgentSystemPage />;
}
