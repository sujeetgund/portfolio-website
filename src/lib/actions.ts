'use server';

import { generateDynamicAboutSection } from '@/ai/flows/generate-dynamic-about-section';
import { updateProjectSummaries } from '@/ai/flows/dynamically-update-project-summaries';
import type { projectsData } from './data';

export async function refineAboutAction(currentAbout: string) {
  try {
    const trendingKeywords = 'Large Language Models, Generative AI, MLOps, Retrieval-Augmented Generation, Vector Databases, Foundation Models';
    const result = await generateDynamicAboutSection({ currentAbout, trendingKeywords });
    return result;
  } catch (error) {
    console.error("Error refining about section:", error);
    throw new Error("Failed to refine content with AI. Please try again later.");
  }
}

export async function updateProjectsAction(projects: typeof projectsData) {
  try {
    const projectSummaries = projects.map(p => ({ title: p.title, description: p.description }));
    const result = await updateProjectSummaries({ projectSummaries });
    return result;
  } catch (error) {
    console.error("Error updating project summaries:", error);
    throw new Error("Failed to update projects with AI. Please try again later.");
  }
}
