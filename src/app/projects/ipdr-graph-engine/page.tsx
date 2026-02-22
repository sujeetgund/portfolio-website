import { IpdrGraphEnginePage } from "@/components/pages/ipdr-graph-engine-page";
import { projectsData } from "@/lib/data";
import { buildProjectMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === "ipdr-graph-engine");
  if (!project) {
    return {};
  }
  return buildProjectMetadata(project);
}

export default function IpdrGraphEngineProjectPage() {
  return <IpdrGraphEnginePage />;
}
