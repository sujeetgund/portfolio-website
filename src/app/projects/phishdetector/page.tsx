import { PhishDetectorPage } from "@/components/pages/phishdetector-page";
import { projectsData } from "@/lib/data";
import { buildProjectMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === "phishdetector");
  if (!project) {
    return {};
  }
  return buildProjectMetadata(project);
}

export default function PhishDetectorProjectPage() {
  return <PhishDetectorPage />;
}
