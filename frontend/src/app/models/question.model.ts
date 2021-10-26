export interface Question {
    q_text: string;
    options: Option[];
    multiple_allowed: boolean;
}
export interface Option {
    text: string;
    min_price: number;
    max_price: number;
}