import { LinkedInPostGeneratorAgentSystemPage } from "@/components/pages/linkedin-post-generator-agent-system-page";
import { projectsData } from "@/lib/data";
import { buildProjectMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find(
    (p) => p.slug === "linkedin-post-generator-agent-system",
  );
  if (!project) {
    return {};
  }

  return buildProjectMetadata(project);
}

export default function LinkedInPostGeneratorAgentSystemProjectPage() {
  return <LinkedInPostGeneratorAgentSystemPage />;
}
