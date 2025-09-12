import { FastApiRagServicePage } from '@/components/fastapi-rag-service-page';
import { projectsData } from '@/lib/data';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const project = projectsData.find(p => p.slug === 'fastapi-rag-service');
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

export default function FastApiRagServiceProjectPage() {
  return <FastApiRagServicePage />;
}
