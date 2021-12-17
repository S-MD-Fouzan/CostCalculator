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

  step = 0;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {}

  ngOnInit(): void {}

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
      const finalData: Submission = {} as Submission;
      finalData.email = this.emailFormControl.value;
      finalData.lowerEstimate = 0;
      finalData.upperEstimate = 0;
      finalData.questions = [] as Question[];
      for (const section of this.filledSectionsArray) {
        section.questions.forEach((question) => {
          if (question.options.length > 0) {
            finalData.questions.push(question);
          }
        });
      }
      this.submission.emit(finalData);
    }
  }
}
