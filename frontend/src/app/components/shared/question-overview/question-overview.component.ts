import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-question-overview',
  templateUrl: './question-overview.component.html',
  styleUrls: ['./question-overview.component.scss'],
})
export class QuestionOverviewComponent implements OnInit {
  @Input()
  question: Question;

  constructor() {}

  ngOnInit(): void {}
}
