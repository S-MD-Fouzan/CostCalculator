import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { Section } from '../../../models/section.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  @Input()
  currentSection: Section;
  @Input()
  currentSectionWithoutOptions: Section;
  @Output()
  public atSummary = new EventEmitter<string>();
  @Output()
  public adjustWidth = new EventEmitter<number>();
  @Output()
  public filled = new EventEmitter();

  index: number;
  widthIncrement: number;
  width: number;
  currentQuestion: Question;
  currentQuestionWithoutOptions: Question;
  summary: boolean;
  constructor() {}

  ngOnInit(): void {
    this.index = 0;
    this.summary = false;
    this.widthIncrement = 100 / this.currentSection.questions.length;
    this.width = 0;
    this.questionInitializer();
  }
  questionInitializer(): void {
    this.currentQuestion = this.currentSection.questions[this.index];
    this.currentQuestionWithoutOptions =
      this.currentSectionWithoutOptions.questions[this.index];
  }
  nextIsClicked($event: number): void {
    this.width = (this.index + 1) * this.widthIncrement;
    this.adjustWidth.emit(this.width);

    if (this.index === this.currentSection.questions.length - 1) {
      this.summary = true;
      this.atSummary.emit('true');
    } else {
      this.index = $event + 1;
      this.questionInitializer();
    }
  }
  prevIsClicked($event: number): void {
    this.index = $event - 1;
    this.questionInitializer();
  }
  onAnswering(): void {
    this.filled.emit();
  }
}
