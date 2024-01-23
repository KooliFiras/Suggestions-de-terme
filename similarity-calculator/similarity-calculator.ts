import {ISimilarityCalculator} from "./iSimilarity-calculator";

/**
 * Implémentation du calcul de similarité
 */
export class SimilarityCalculator implements ISimilarityCalculator {
    calculateSimilarity(term: string, choice: string): number {
        let differences = 0;
        const minLength = Math.min(term.length, choice.length);

        for (let i = 0; i < minLength; i++) {
            if (term[i] !== choice[i]) {
                differences++;
            }
        }

        return differences;
    }
}
