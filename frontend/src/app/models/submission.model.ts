import { Question } from './question.model';

export interface Submission {
  email:string;
  lowerEstimate:number;
  upperEstimate:number;
  questions: Question[];
}