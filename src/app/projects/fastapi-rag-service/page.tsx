import { FastApiRagServicePage } from "@/components/pages/fastapi-rag-service-page";
import { projectsData } from "@/lib/data";
import { buildProjectMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === "fastapi-rag-service");
  if (!project) {
    return {};
  }
  return buildProjectMetadata(project);
}

export default function FastApiRagServiceProjectPage() {
  return <FastApiRagServicePage />;
}
