import { SubscriptionTrackerPage } from '@/components/subscription-tracker-page';
import { projectsData } from '@/lib/data';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find(p => p.slug === 'subscription-tracker');
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

export default function SubscriptionTrackerProjectPage() {
  return <SubscriptionTrackerPage />;
}
