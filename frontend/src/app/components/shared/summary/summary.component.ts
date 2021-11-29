import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @Input()
  questionsWithSelectedOptions: Question[];

  constructor() {}

  ngOnInit(): void {}

  isEmpty(questions: Question[]): boolean {
    if (questions[0].options.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
