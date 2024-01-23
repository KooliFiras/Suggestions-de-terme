import {ISimilaritySorter} from "./iSimilarirty-sorter";

/**
 * Implémentation du tri des similarités
 */
export class SimilaritySorter implements ISimilaritySorter {
    sortSimilarities(similarityArray: [string, number][]): [string, number][] {
        return similarityArray.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0].length - b[0].length;
            }
            return a[1] - b[1];
        });
    }
}