export interface Question {
    questionText: string;
    options: Option[];
    multipleAllowed: boolean;
}
export interface Option {
    text: string;
    minPrice: number;
    maxPrice: number;
}
