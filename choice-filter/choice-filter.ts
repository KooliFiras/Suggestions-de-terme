import {IChoiceFilter} from "./iChoice-filter";

/**
 * Implémentation du filtrage des choix
 */
export class ChoiceFilter implements IChoiceFilter {
    filterChoices(term: string, choices: string[]): string[] {
        return choices.filter(choice => choice.length >= term.length);
    }
}