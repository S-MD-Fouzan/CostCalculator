import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Question } from '../../../models/question.model';
import { Option } from '../../../models/question.model';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input()
  currentQuestion: Question;
  @Input()
  questionToAppendAnswers: Question;
  @Input()
  indexOfQuestion: number;
  @Output()
  public inNext = new EventEmitter<number>();
  @Output()
  public inPrev = new EventEmitter<number>();
  @Output()
  public filled = new EventEmitter();

  answersFormControl = new FormControl();
  currentOptions: Option[];
  previous: boolean;
  selectedOptions: Option[];
  selected: number;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.selectedOptions = [];
    this.previous = false;
    this.currentOptions = this.currentQuestion.options;
    if (this.questionToAppendAnswers.options.length > 0) {
      if (this.currentQuestion.multiple_allowed === true) {
        this.answersFormControl.setValue(this.questionToAppendAnswers.options);
      } else {
        this.selected = this.currentQuestion.options.indexOf(
          this.questionToAppendAnswers.options[0]
        );
      }
    } else {
      this.selected = -1;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentOptions = this.currentQuestion.options;
    if (this.questionToAppendAnswers.options.length > 0) {
      if (this.currentQuestion.multiple_allowed === true) {
        this.answersFormControl.setValue(this.questionToAppendAnswers.options);
      } else {
        this.selected = this.currentQuestion.options.indexOf(
          this.questionToAppendAnswers.options[0]
        );
      }
    } else {
      this.selected = -1;
    }
  }

  onClick(otherChip: MatChip): void {
    otherChip.toggleSelected(true);
  }

  onNext(): void {
    if (this.currentQuestion.multiple_allowed === true) {
      if (
        this.answersFormControl.value == null ||
        this.answersFormControl.value.length === 0
      ) {
        this.snackBar.open('Please select any option!', '', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 1500,
          panelClass: ['customSnackBar'],
        });
      } else {
        this.questionToAppendAnswers.options = this.answersFormControl.value;
        this.filled.emit();
        this.answersFormControl.reset();
        this.previous = true;
        this.inNext.emit(this.indexOfQuestion);
      }
    } else {
      if (this.questionToAppendAnswers.options.length === 0) {
        this.snackBar.open('Please select any option!', '', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 1500,
          panelClass: ['customSnackBar'],
        });
      } else {
        this.previous = true;
        this.filled.emit();
        this.inNext.emit(this.indexOfQuestion);
      }
    }
  }

  onPrev(): void {
    this.inPrev.emit(this.indexOfQuestion);
    if (this.indexOfQuestion - 1 === 0) {
      this.previous = false;
    }
  }

  onClicked(i: number, option: Option): void {
    this.questionToAppendAnswers.options = [option];
    this.selected = i;
  }
}
