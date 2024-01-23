import {SimilarityCalculator} from "./similarity-calculator/similarity-calculator";
import {ChoiceFilter} from "./choice-filter/choice-filter";
import {SimilaritySorter} from "./similarity-sorter/similarity-sorter";
import {SuggestionExtractor} from "./suggestion-extractor/suggestion-extractor";
import {TestImplementation} from "./test-implementation";

const similarityCalculator = new SimilarityCalculator();
const choiceFilter = new ChoiceFilter();
const similaritySorter = new SimilaritySorter();
const suggestionExtractor = new SuggestionExtractor();

const testInstance = new TestImplementation(similarityCalculator, choiceFilter, similaritySorter, suggestionExtractor);

const result = testInstance.GetSuggestions("gros", ["gros", "gras", "graisse", "agressif", "go"], 2);
console.log(result);
