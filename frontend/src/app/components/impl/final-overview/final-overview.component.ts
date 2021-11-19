import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';
import { Question } from 'src/app/models/question.model';
import { Submission } from '../../../models/submission.model';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpErrorResponse } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
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
  minPrice: number;
  maxPrice: number;
  isEmpty: boolean;
  sectionsWithoutGeneralQuestions: Section[];
  filledSectionsArray: Section[] = [];
  indices: number[];
  costSpinner: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);
  matcher = new MyErrorStateMatcher();
  costDisplayer: boolean;
  arrayOfQuestionsWithAnswers: Question[] = [];
  step: number = 0;
  error: boolean = false;
  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.costDisplayer = true;
    this.filledSectionsArray = this.sectionService.getFilledSections();
    this.indices = this.sectionService.getIndices();
    if (this.filledSectionsArray.length == 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
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
      this.costSpinner = true;
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
      this.sectionService
        .getPrices(finalData)
        .then((submission: Submission) => {
          this.sectionService.refreshHandler = false;
          this.minPrice = submission.lowerEstimate;
          this.maxPrice = submission.upperEstimate;
          this.costDisplayer = false;
          this.costSpinner = false;
        })
        .catch((error: HttpErrorResponse) => {
          this.costSpinner = false;
          this.error = true;
          console.log(error);
        });
    }
  }
}
