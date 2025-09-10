'use server';

/**
 * @fileOverview A flow to generate a dynamic "About" section for a portfolio,
 *  refined using trending keywords in the AI/ML field.
 *
 * - generateDynamicAboutSection - A function that generates the about section.
 * - GenerateDynamicAboutSectionInput - The input type for the function.
 * - GenerateDynamicAboutSectionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicAboutSectionInputSchema = z.object({
  currentAbout: z
    .string()
    .describe('The current about section content to be refined.'),
  trendingKeywords: z
    .string()
    .describe(
      'Comma-separated list of trending keywords in the AI/ML field.'
    ),
});
export type GenerateDynamicAboutSectionInput = z.infer<
  typeof GenerateDynamicAboutSectionInputSchema
>;

const GenerateDynamicAboutSectionOutputSchema = z.object({
  refinedAbout: z
    .string()
    .describe('The refined about section content incorporating trending keywords.'),
});
export type GenerateDynamicAboutSectionOutput = z.infer<
  typeof GenerateDynamicAboutSectionOutputSchema
>;

export async function generateDynamicAboutSection(
  input: GenerateDynamicAboutSectionInput
): Promise<GenerateDynamicAboutSectionOutput> {
  return generateDynamicAboutSectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDynamicAboutSectionPrompt',
  input: {schema: GenerateDynamicAboutSectionInputSchema},
  output: {schema: GenerateDynamicAboutSectionOutputSchema},
  prompt: `You are a content refinement expert specializing in creating compelling "About" sections for professional portfolios.

  Given the current "About" section and a list of trending keywords in the AI/ML field, refine the content to make it more current and relevant.

  Current "About" Section: {{{currentAbout}}}

  Trending Keywords: {{{trendingKeywords}}}

  Refined "About" Section:`,
});

const generateDynamicAboutSectionFlow = ai.defineFlow(
  {
    name: 'generateDynamicAboutSectionFlow',
    inputSchema: GenerateDynamicAboutSectionInputSchema,
    outputSchema: GenerateDynamicAboutSectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
