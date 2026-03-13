'use server';
/**
 * @fileOverview A Genkit flow for generating AI-powered contact message suggestions.
 *
 * - aiChatSuggestion - A function that generates contact message suggestions based on portfolio content.
 * - AIChatSuggestionInput - The input type for the aiChatSuggestion function.
 * - AIChatSuggestionOutput - The return type for the aiChatSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatSuggestionInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The entire portfolio content to base suggestions on.'),
});
export type AIChatSuggestionInput = z.infer<typeof AIChatSuggestionInputSchema>;

const AIChatSuggestionOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of AI-generated message suggestions.'),
});
export type AIChatSuggestionOutput = z.infer<typeof AIChatSuggestionOutputSchema>;

export async function aiChatSuggestion(
  input: AIChatSuggestionInput
): Promise<AIChatSuggestionOutput> {
  return aiChatSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatSuggestionPrompt',
  input: {schema: AIChatSuggestionInputSchema},
  output: {schema: AIChatSuggestionOutputSchema},
  prompt: `You are an AI assistant designed to help visitors compose messages for a portfolio owner.

Based on the following portfolio content, generate 3 to 5 concise and engaging suggestions for a visitor to use when contacting the portfolio owner. The suggestions should reflect different common reasons for contact, such as job inquiries, collaboration opportunities, or general feedback.

Ensure the suggestions are relevant to the provided portfolio content and are designed to help the visitor express their interest effectively. Format the output as a JSON array of strings.

Portfolio Content: {{{portfolioContent}}}`,
});

const aiChatSuggestionFlow = ai.defineFlow(
  {
    name: 'aiChatSuggestionFlow',
    inputSchema: AIChatSuggestionInputSchema,
    outputSchema: AIChatSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
