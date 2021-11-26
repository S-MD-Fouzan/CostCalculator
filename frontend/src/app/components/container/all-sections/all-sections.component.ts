import { Component, HostListener, OnInit } from '@angular/core';
import {
  StepperSelectionEvent,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';
import { MatStepper } from '@angular/material/stepper';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
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
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        position: 'above',
      },
    },
  ],
})
export class AllSectionsComponent implements OnInit {
  length: number;
  widthsArray: number[];
  sectionColoring: boolean[];
  sections: Section[];
  hide: boolean;
  nextDisabled: boolean;
  final: boolean;
  sectionsWithAnswers: Section[];
  selectedIndex: number;
  costDisplayer: boolean;
  minPrice: number;
  maxPrice: number;
  isEmpty: boolean;
  sectionsWithoutGeneralQuestions: Section[];
  filledSectionsArray: Section[] = [];
  costSpinner: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);
  matcher = new MyErrorStateMatcher();
  arrayOfQuestionsWithAnswers: Question[] = [];
  step: number = 0;
  error: boolean = false;
  cardStringControlArray: string[];
  skipStringControlArray: string[];

  constructor(private sectionService: SectionService) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    if (this.sectionService.refreshHandler) {
      event.returnValue = false;
    }
  }

  ngOnInit(): void {
    this.costDisplayer = true;
    this.selectedIndex = 0;
    this.final = true;
    this.sections = this.sectionService.getSections();
    this.widthsArray = this.sectionService.widthsArray;
    this.sectionColoring = this.sectionService.sectionColoring;
    this.length = this.sections.length + 1;
    this.sectionsWithAnswers = this.sectionService.getSectionsWithAnswers();
    this.cardStringControlArray = this.sectionService.cardStringControlArray;
    this.skipStringControlArray = this.sectionService.skipStringControlArray;
  }
  changeStatus(): void {
    this.final = false;
    this.filledSectionsArray = this.sectionService.getFilledSections();
    if (this.filledSectionsArray.length == 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
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
