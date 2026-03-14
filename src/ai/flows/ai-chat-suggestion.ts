'use server';
/**
 * @fileOverview Un flux Genkit pour générer des suggestions de messages de contact alimentées par l'IA.
 *
 * - aiChatSuggestion - Une fonction qui génère des suggestions de messages basées sur le contenu du portfolio.
 * - AIChatSuggestionInput - Le type d'entrée pour la fonction aiChatSuggestion.
 * - AIChatSuggestionOutput - Le type de retour pour la fonction aiChatSuggestion.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatSuggestionInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('Le contenu complet du portfolio sur lequel baser les suggestions.'),
});
export type AIChatSuggestionInput = z.infer<typeof AIChatSuggestionInputSchema>;

const AIChatSuggestionOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('Un tableau de suggestions de messages générées par l\'IA.'),
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
  prompt: `Vous êtes un assistant IA conçu pour aider les visiteurs à rédiger des messages pour le propriétaire d'un portfolio.

Sur la base du contenu du portfolio suivant, générez 3 à 5 suggestions concises et engageantes qu'un visiteur pourra utiliser pour contacter le propriétaire. Les suggestions doivent refléter différentes raisons courantes de contact, telles que des demandes d'emploi, des opportunités de collaboration ou des commentaires généraux.

Assurez-vous que les suggestions sont pertinentes par rapport au contenu du portfolio fourni et sont conçues pour aider le visiteur à exprimer son intérêt efficacement. 

IMPORTANT : Les suggestions doivent être impérativement rédigées en FRANÇAIS. Formatez la sortie sous forme d'un tableau JSON de chaînes de caractères.

Contenu du Portfolio: {{{portfolioContent}}}`,
});

const aiChatSuggestionFlow = ai.defineFlow(
  {
    name: 'aiChatSuggestionFlow',
    inputSchema: AIChatSuggestionInputSchema,
    outputSchema: AIChatSuggestionOutputSchema,
  },
  async input => {
    try {
      const {output} = await prompt(input);
      return output!;
    } catch (error) {
      console.error("Gemini API Error (Quota or Network):", error);
      // Fallback suggestions in French when the API is exhausted
      return {
        suggestions: [
          "Bonjour Thierno, j'aimerais discuter d'un projet web avec vous.",
          "Seriez-vous disponible pour une mission en freelance ?",
          "J'ai vu vos projets et j'apprécie beaucoup votre travail !",
          "Quelles sont vos disponibilités pour un entretien technique ?"
        ]
      };
    }
  }
);
