import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from 'src/app/models/section.model';
import { Question } from 'src/app/models/question.model';
import { Submission } from '../../../models/submission.model';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-final-overview',
  templateUrl: './final-overview.component.html',
  styleUrls: ['./final-overview.component.scss'],
})
export class FinalOverviewComponent implements OnInit {
  step: number = 0;

  @Input()
  isEmpty: boolean;
  @Input()
  costSpinner: boolean;
  @Input()
  error: boolean;
  @Input()
  costDisplayer: boolean;
  @Input()
  minPrice: number;
  @Input()
  maxPrice: number;
  @Input()
  filledSectionsArray: Section[];
  @Output()
  public submission = new EventEmitter<Submission>();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);
  matcher = new MyErrorStateMatcher();
  arrayOfQuestionsWithAnswers: Question[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log('In final');
  }

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  onSubmit(): void {
    if (this.emailFormControl.valid) {
      let finalData: Submission = <Submission>{};
      finalData.email = this.emailFormControl.value;
      finalData.lowerEstimate = 0;
      finalData.upperEstimate = 0;
      for (let i = 0; i < this.filledSectionsArray.length; i++) {
        this.arrayOfQuestionsWithAnswers = [
          ...this.filledSectionsArray[i].questions,
          ...this.arrayOfQuestionsWithAnswers,
        ];
      }
      finalData.questions = this.arrayOfQuestionsWithAnswers;
      this.submission.emit(finalData);
    }
  }
}
