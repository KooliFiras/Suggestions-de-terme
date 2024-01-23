/**
 * Interface pour l'extraction de suggestions
 */
export interface ISuggestionExtractor {
    extractSuggestions(sortedArray: [string, number][], numberOfSuggestions: number): string[];
}