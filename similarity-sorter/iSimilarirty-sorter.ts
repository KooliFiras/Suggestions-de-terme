/**
 * Interface pour le tri des similarités
 */
export interface ISimilaritySorter {
    sortSimilarities(similarityArray: [string, number][]): [string, number][];
}