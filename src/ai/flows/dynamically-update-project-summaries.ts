'use server';
/**
 * @fileOverview A flow to dynamically update project summaries based on trending summaries.
 *
 * - updateProjectSummaries - A function that updates project summaries using generative AI.
 * - UpdateProjectSummariesInput - The input type for the updateProjectSummaries function.
 * - UpdateProjectSummariesOutput - The return type for the updateProjectSummaries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UpdateProjectSummariesInputSchema = z.object({
  projectSummaries: z.array(
    z.object({
      title: z.string().describe('The title of the project.'),
      description: z.string().describe('The current description of the project.'),
    })
  ).describe('An array of project summaries to update.'),
});
export type UpdateProjectSummariesInput = z.infer<typeof UpdateProjectSummariesInputSchema>;

const UpdateProjectSummariesOutputSchema = z.array(
  z.object({
    title: z.string().describe('The title of the project.'),
    updatedDescription: z.string().describe('The updated description of the project based on trending summaries.'),
  })
);
export type UpdateProjectSummariesOutput = z.infer<typeof UpdateProjectSummariesOutputSchema>;

export async function updateProjectSummaries(input: UpdateProjectSummariesInput): Promise<UpdateProjectSummariesOutput> {
  return updateProjectSummariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'updateProjectSummariesPrompt',
  input: {schema: UpdateProjectSummariesInputSchema},
  output: {schema: UpdateProjectSummariesOutputSchema},
  prompt: `You are an expert at writing engaging project summaries based on trending topics.

  Given the following project summaries, update the descriptions to be more engaging and reflect current industry language.

  Project Summaries:
  {{#each projectSummaries}}
  Title: {{this.title}}
  Description: {{this.description}}
  {{/each}}

  Return the updated project summaries with the updated descriptions.
  Output should be a JSON array where each object contains the original title, and the updatedDescription.
  `, 
});

const updateProjectSummariesFlow = ai.defineFlow(
  {
    name: 'updateProjectSummariesFlow',
    inputSchema: UpdateProjectSummariesInputSchema,
    outputSchema: UpdateProjectSummariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
