import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { Section } from '../../../models/section.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  index: number = 0;
  WidthIncrement: number = 0;
  @Input()
  currentSection: Section;
  @Input()
  currentSectionWithoutOptions: Section;
  @Output()
  public atSummary = new EventEmitter<string>();
  summary: boolean;
  @Output()
  public adjustWidth = new EventEmitter<number>();
  @Output()
  public filled = new EventEmitter();
  width: number;
  currentQuestion: Question;
  currentQuestionWithoutOptions: Question;

  constructor() {}

  ngOnInit(): void {
    this.index = 0;
    this.summary = false;
    this.WidthIncrement = 100 / this.currentSection.questions.length;
    this.width = 0;
    this.currentQuestion = this.currentSection.questions[this.index];
    this.currentQuestionWithoutOptions =
      this.currentSectionWithoutOptions.questions[this.index];
  }

  nextIsClicked($event: number): void {
    this.width = (this.index + 1) * this.WidthIncrement;
    this.adjustWidth.emit(this.width);

    if (this.index == this.currentSection.questions.length - 1) {
      this.summary = true;
      this.atSummary.emit('true');
    } else {
      this.index = $event + 1;
      this.currentQuestion = this.currentSection.questions[this.index];
      this.currentQuestionWithoutOptions =
        this.currentSectionWithoutOptions.questions[this.index];
    }
  }
  prevIsClicked($event: number): void {
    this.index = $event - 1;
    this.currentQuestion = this.currentSection.questions[this.index];
    this.currentQuestionWithoutOptions =
      this.currentSectionWithoutOptions.questions[this.index];
  }
  refreshHandler(): void{
    this.filled.emit();
  }
}