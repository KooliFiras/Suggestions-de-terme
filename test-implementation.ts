import {IAmTheTest} from "./iAm-the-test";
import {ISimilarityCalculator} from "./similarity-calculator/iSimilarity-calculator";
import {IChoiceFilter} from "./choice-filter/iChoice-filter";
import {ISimilaritySorter} from "./similarity-sorter/iSimilarirty-sorter";
import {ISuggestionExtractor} from "./suggestion-extractor/iSuggestion-extractor";

/**
 * Classe principale implémentant le test
 */
export class TestImplementation implements IAmTheTest {
    private similarityCalculator: ISimilarityCalculator;
    private choiceFilter: IChoiceFilter;
    private similaritySorter: ISimilaritySorter;
    private suggestionExtractor: ISuggestionExtractor;

    constructor(similarityCalculator: ISimilarityCalculator,
                choiceFilter: IChoiceFilter,
                similaritySorter: ISimilaritySorter,
                suggestionExtractor: ISuggestionExtractor) {
        this.similarityCalculator = similarityCalculator;
        this.choiceFilter = choiceFilter;
        this.similaritySorter = similaritySorter;
        this.suggestionExtractor = suggestionExtractor;
    }

    GetSuggestions = (term: string, choices: string[], numberOfSuggestions: number): string[] => {
        const filteredChoices = this.choiceFilter.filterChoices(term, choices);

        const similarityArray: [string, number][] = filteredChoices.map(choice => [
            choice,
            this.similarityCalculator.calculateSimilarity(term, choice)
        ]);

        const sortedArray = this.similaritySorter.sortSimilarities(similarityArray);

        return this.suggestionExtractor.extractSuggestions(sortedArray, numberOfSuggestions);
    }
}