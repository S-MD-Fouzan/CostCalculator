import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Question } from '../../../models/question.model';
import { Option } from '../../../models/question.model';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SectionService } from '../../../services/section.service';
import { MatChip } from '@angular/material/chips';

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

  answersFormControl = new FormControl();
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

  ngOnInit(): void {
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

  onClick(otherChip: MatChip):void{
    otherChip.toggleSelected(true);
  }

  onNext(): void {
    if (this.currentQuestion.multiple_allowed == true) {
      if (this.answersFormControl.value == null || this.answersFormControl.value.length == 0) {
        this._snackBar.open('Please select any option!', '', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 1500,
          panelClass: ['customSnackBar'],
        });
      } else {
        this.questionToAppendAnswers.options = this.answersFormControl.value;
        this.sectionService.setAnswers(this.indexOfSection,this.indexOfQuestion,this.answersFormControl.value);
        this.answersFormControl.reset();
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
  
  onClicked(i: number, option: Option):void{
    this.sectionService.setAnswers(this.indexOfSection,this.indexOfQuestion,[option]);
    this.selected = i;
  }
}
