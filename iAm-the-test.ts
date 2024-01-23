export interface IAmTheTest {
    GetSuggestions(term: string, choices: string[], numberOfSuggestions: number): string[];
}