import { SubscriptionTrackerPage } from "@/components/pages/subscription-tracker-page";
import { projectsData } from "@/lib/data";
import { buildProjectMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === "subscription-tracker");
  if (!project) {
    return {};
  }
  return buildProjectMetadata(project);
}

export default function SubscriptionTrackerProjectPage() {
  return <SubscriptionTrackerPage />;
}
