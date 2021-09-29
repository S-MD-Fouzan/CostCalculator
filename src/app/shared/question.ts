
export interface Question {
    id: string;
    q_text: string;
    options: Option[];
    multiple_allowed: boolean;
}
export interface Option {
    id: string;
    text: string;
    min_price: number;
    max_price: number;
}

