import {ISuggestionExtractor} from "./iSuggestion-extractor";

/**
 * Implémentation de l'extraction de suggestions
 */
export class SuggestionExtractor implements ISuggestionExtractor {
    extractSuggestions(sortedArray: [string, number][], numberOfSuggestions: number): string[] {
        return sortedArray.slice(0, numberOfSuggestions).map(item => item[0]);
    }
}