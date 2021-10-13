import { Question } from './question.model';

export interface Section {
  name: string;
  stepLabel: string;

  icon: string;
  content: string;
  questions: Question[];
}
