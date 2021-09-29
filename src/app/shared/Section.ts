import { Question } from './question';

export interface Section {
  id: string;
  name: string;
  stepLabel: string;

  icon: string;
  content: string;
  questions: Question[];
}
