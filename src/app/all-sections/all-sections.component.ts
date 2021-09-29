import { Component, OnInit, ViewChild } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SectionService } from '../services/section.service';
import { Section } from '../shared/Section';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
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
  FinalSectionsWithAnswers: Section[];
  selectedIndex: number;
  minPrice: number;
  maxPrice: number;
  sectionsFromOneToFour: Section[];
  FilledSectionsArray: Section[] = [];
  indices: number[];

  constructor(private sectionService: SectionService) {}

  step = 0;
  currentStep = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  buttonToggler($event: any) {
    if ($event == 'true') {
      this.nextDisabled = false;
    }
  }
  adjustingWidth($event: any, index: number) {
    this.widthsArray[index] = $event;
    console.log('all', this.widthsArray);
  }
  switchIt(stepper: MatStepper) {
    this.widthsArray[stepper.selectedIndex + 1] = 100;
    this.sectionColoring[stepper.selectedIndex + 1] = true;
    if (stepper.selectedIndex !== 3) {
      stepper.next();
      this.selectedIndex = stepper.selectedIndex;
    } else {
      this.final = false;
      this.FinalSectionsWithAnswers =
        this.sectionService.getSectionsWithAnswers();
      var dict = this.sectionService.getPrices();
      this.minPrice = dict.totalMin;
      this.maxPrice = dict.totalMax;
      this.FilledSectionsArray = this.sectionService.getFilledSections();
      this.indices = this.sectionService.getIndices();
    }
  }
  OnStep(event: any): void {
    this.nextDisabled = true;
    this.hide = false;
    this.selectedIndex = event.selectedIndex;
  }
  ToHide(): void {
    this.hide = true;
  }

  ngOnInit(): void {
    this.selectedIndex = 0;
    this.final = true;
    this.nextDisabled = true;
    this.hide = false;
    this.sections = this.sectionService.getSections();
    this.sectionsFromOneToFour = this.sections.slice(1);
    this.widthsArray = new Array(this.sections.length).fill(0);
    this.sectionColoring = new Array(this.sections.length).fill(false);
    this.sectionColoring[0] = true;
    this.length = this.sectionsFromOneToFour.length;
  }
}
