import { Question } from './question.model';

export interface Section {
  name: string;
  stepLabel: string;
  icon: string;
  content: string;
  questions: Question[];
}
export interface SectionForHome {
  name: string;
  icon: string;
  content: string;
}
