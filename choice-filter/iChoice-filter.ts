/**
 * Interface pour le filtrage des choix
 */
export interface IChoiceFilter {
    filterChoices(term: string, choices: string[]): string[];
}
