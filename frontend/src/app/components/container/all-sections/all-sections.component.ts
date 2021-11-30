import { Component, HostListener, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Submission } from '../../../models/submission.model';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { MatStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.scss']
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
  filledSectionsArray: Section[] = [];
  costSpinner: boolean;
  error: boolean;
  cardStringControl: string;
  skipStringControl: string;

  constructor(private sectionService: SectionService, private dialog: MatDialog) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    if (this.sectionService.canRefresh) {
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
    this.nextDisabled = true;
    this.hide = false;
    this.cardStringControl = this.sectionService.cardStringControlArray[0];
    this.skipStringControl = this.sectionService.skipStringControlArray[0];
    this.minPrice = 0;
    this.maxPrice = 0;
    this.error = false;
    this.isEmpty = true;
  }

  changeStatus(): void {
    this.filledSectionsArray = this.sectionService.getFilledSections();
    if (this.filledSectionsArray.length === 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
    this.final = false;
  }
  onSubmit(finalData: Submission): void {
    this.costSpinner = true;
    this.sectionService
      .getPrices(finalData)
      .then((submission: Submission) => {
        this.sectionService.canRefresh = false;
        this.minPrice = submission.lowerEstimate;
        this.maxPrice = submission.upperEstimate;
        this.costDisplayer = false;
        this.costSpinner = false;
      })
      .catch((error: HttpErrorResponse) => {
        this.costSpinner = false;
        this.error = true;
      });
  }
  onAnswering(): void {
    this.sectionService.canRefresh = true;
  }
  switchIt(stepper: MatStepper, check: boolean): void {
    if (
      this.sectionsWithAnswers[stepper.selectedIndex].questions[0].options
        .length > 0 &&
      check === true
    ) {
      const dialogRef = this.dialog.open(AlertBoxComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          for (const question of this.sectionsWithAnswers[stepper.selectedIndex]
            .questions) {
            question.options = [];
          }
          this.widthsArray[stepper.selectedIndex] = 0;
          let flag = 0;
          for (const value of this.widthsArray) {
            if (value !== 0) {
              flag=1;
              this.sectionService.canRefresh = true;
              break;
            }
          }
          if(flag === 0){
            this.sectionService.canRefresh = false;
          }
          this.sectionColoring[stepper.selectedIndex] = true;
          if (stepper.selectedIndex === this.length - 2) {
            this.changeStatus();
            this.sectionColoring[this.selectedIndex] = true;
          } else {
            stepper.next();
            this.sectionChange(stepper.selectedIndex);
          }
        }
      });
    } else {
      if (stepper.selectedIndex === this.length - 2) {
        this.changeStatus();
        this.sectionColoring[this.selectedIndex] = true;
      } else {
        this.sectionColoring[stepper.selectedIndex] = true;
        stepper.next();
        this.sectionChange(stepper.selectedIndex);
      }
    }
  }
  onStep(event: StepperSelectionEvent): void {
    this.nextDisabled = true;
    this.hide = false;
    this.selectedIndex = event.selectedIndex;
  }
  buttonToggler($event: string): void {
    if ($event === 'true') {
      this.nextDisabled = false;
    }
  }
  adjustingWidth($event: number, index: number): void {
    this.widthsArray[index] = $event;
  }
  toHide(): void {
    this.hide = true;
  }
  sectionChange(index: number): void {
    if (index > -1) {
      if(this.widthsArray[index]>0){
        this.sectionService.cardStringControlArray[index]='Edit Section';
        this.sectionService.skipStringControlArray[index]='Clear';
      }else{
        this.sectionService.cardStringControlArray[index]='Get Started';
        this.sectionService.skipStringControlArray[index]='Skip';
      }
      this.cardStringControl=this.sectionService.cardStringControlArray[index];
      this.skipStringControl=this.sectionService.skipStringControlArray[index];
      if(this.widthsArray[this.selectedIndex]>99){
        this.sectionColoring[this.selectedIndex]=true;
      }else{
        this.sectionColoring[this.selectedIndex]=false;
      }
      this.selectedIndex=index;
    }
  }
}
