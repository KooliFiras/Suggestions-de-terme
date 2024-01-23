/**
 * Interface pour le calcul de similarité
 */
export interface ISimilarityCalculator {
    calculateSimilarity(term: string, choice: string): number;
}