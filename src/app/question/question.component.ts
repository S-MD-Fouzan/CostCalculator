import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Question } from '../shared/question';
import { Option } from '../shared/question';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SectionService } from '../services/section.service';
import { MatChip } from '@angular/material/chips';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input()
  indexOfSection: number;
  @Input()
  indexOfQuestion: number;

  @Output()
  public inNext = new EventEmitter<number>();
  @Output()
  public inPrev = new EventEmitter<number>();

  toppings = new FormControl();
  questionToAppendAnswers: Question;
  currentQuestion: Question;
  currentOptions: Option[];
  previous: boolean;
  selectedOptions: Option[];
  selected: number;

  constructor(
    private _snackBar: MatSnackBar,
    private sectionService: SectionService
  ) {}
  onClick(otherChip: MatChip) {
    otherChip.toggleSelected(true);
  }
  onNext(): void {
    if (this.currentQuestion.multiple_allowed == true) {
      if (this.toppings.value == null || this.toppings.value.length == 0) {
        this._snackBar.open('Please select any option!', '', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 1500,
          panelClass: ['customSnackBar'],
        });
      } else {
        this.questionToAppendAnswers.options = this.toppings.value;
        // Swal.fire({
        // position: 'top-end',
        // icon: 'success',
        // title: 'Your response has been saved',
        // showConfirmButton: false,
        // timer: 1000,
        // });
        this.toppings.reset();
        this.previous = true;
        this.inNext.emit(this.indexOfQuestion);
      }
    } else {
      if (this.questionToAppendAnswers.options.length == 0) {
        this._snackBar.open('Please select any option!', '', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 1500,
          panelClass: ['customSnackBar'],
        });
      } else {
        // Swal.fire({
        // position: 'top-end',
        // icon: 'success',
        // title: 'Your response has been saved',
        // showConfirmButton: false,
        // timer: 1000,
        // });
        this.previous = true;
        this.inNext.emit(this.indexOfQuestion);
      }
    }
  }
  onPrev(): void {
    this.inPrev.emit(this.indexOfQuestion);
    if (this.indexOfQuestion - 1 == 0) {
      this.previous = false;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    this.questionToAppendAnswers =
      this.sectionService.getQuestionToAppendAnswers(
        this.indexOfSection,
        this.indexOfQuestion
      );
    this.currentQuestion = this.sectionService.getQuestion(
      this.indexOfSection,
      this.indexOfQuestion
    );
    this.currentOptions = this.currentQuestion.options;
    if (this.questionToAppendAnswers.options.length > 0) {
      if (this.currentQuestion.multiple_allowed == true) {
        this.toppings.setValue(this.questionToAppendAnswers.options);
      } else {
        this.selected = this.currentQuestion.options.indexOf(
          this.questionToAppendAnswers.options[0]
        );
      }
    } else {
      this.selected = -1;
    }
  }
  ngOnInit(): void {
    console.log('In question ngOnIt');
    this.questionToAppendAnswers =
      this.sectionService.getQuestionToAppendAnswers(
        this.indexOfSection,
        this.indexOfQuestion
      );
    this.selectedOptions = [];
    this.previous = false;
    this.currentQuestion = this.sectionService.getQuestion(
      this.indexOfSection,
      this.indexOfQuestion
    );
    this.currentOptions = this.currentQuestion.options;
    if (this.questionToAppendAnswers.options.length > 0) {
      if (this.currentQuestion.multiple_allowed == true) {
        this.toppings.setValue(this.questionToAppendAnswers.options);
      } else {
        this.selected = this.currentQuestion.options.indexOf(
          this.questionToAppendAnswers.options[0]
        );
      }
    } else {
      this.selected = -1;
    }
  }
  onClicked(i: number, option: Option) {
    this.questionToAppendAnswers.options = [option];
    this.selected = i;
  }
}
