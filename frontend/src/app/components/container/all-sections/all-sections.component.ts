import { Component, HostListener, OnInit } from '@angular/core';
import {
  StepperSelectionEvent,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog } from '@angular/material/dialog';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

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
  indices: number[];
  cardStringControl: string = '';
  skipStringControl: string = '';
  costDisplayer: boolean;

  constructor(
    private sectionService: SectionService,
    private dialog: MatDialog
  ) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    if (this.sectionService.refreshHandler) {
      event.returnValue = false;
    }
  }

  ngOnInit(): void {
    this.costDisplayer = true;
    this.selectedIndex = 0;
    this.final = true;
    this.nextDisabled = true;
    this.hide = false;
    this.sections = this.sectionService.getSections();
    this.widthsArray = this.sectionService.widthsArray;
    this.sectionColoring = this.sectionService.sectionColoring;
    this.cardStringControl = this.sectionService.cardStringControlArray[0];
    this.skipStringControl = this.sectionService.skipStringControlArray[0];
    this.length = this.sections.length + 1;
    this.sectionsWithAnswers = this.sectionService.getSectionsWithAnswers();
  }

  sectionChange(index: number): void {
    if (this.widthsArray[index] > 0) {
      this.sectionService.cardStringControlArray[index] = 'Edit Section';
      this.cardStringControl =
        this.sectionService.cardStringControlArray[index];
      this.sectionService.skipStringControlArray[index] = 'Clear';
      this.skipStringControl =
        this.sectionService.skipStringControlArray[index];
    } else {
      this.sectionService.cardStringControlArray[index] = 'Get Started';
      this.cardStringControl =
        this.sectionService.cardStringControlArray[index];
      this.sectionService.skipStringControlArray[index] = 'Skip';
      this.skipStringControl =
        this.sectionService.skipStringControlArray[index];
    }
    if (this.widthsArray[this.selectedIndex] > 99) {
      this.sectionColoring[this.selectedIndex] = true;
    } else {
      this.sectionColoring[this.selectedIndex] = false;
    }
    this.selectedIndex = index;
  }
  buttonToggler($event: string): void {
    if ($event == 'true') {
      this.nextDisabled = false;
    }
  }
  adjustingWidth($event: number, index: number): void {
    this.widthsArray[index] = $event;
  }
  switchIt(stepper: MatStepper, check: boolean): void {
    if (
      this.sectionsWithAnswers[stepper.selectedIndex].questions[0].options
        .length > 0 &&
      check == true
    ) {
      const dialogRef = this.dialog.open(AlertBoxComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          for (
            let i = 0;
            i <
            this.sectionsWithAnswers[stepper.selectedIndex].questions.length;
            i++
          ) {
            this.sectionsWithAnswers[stepper.selectedIndex].questions[
              i
            ].options = [];
          }
          this.widthsArray[stepper.selectedIndex] = 0;
          this.sectionColoring[stepper.selectedIndex] = true;
          if (
            stepper.selectedIndex ===
            this.sectionService.getSectionsLength() - 1
          ) {
            this.final = false;
            this.sectionColoring[this.selectedIndex] = true;
            this.sectionsWithAnswers =
              this.sectionService.getSectionsWithAnswers();
          } else {
            stepper.next();
            this.sectionChange(stepper.selectedIndex);
          }
        }
        this.selectedIndex = stepper.selectedIndex;
      });
    } else {
      if (
        stepper.selectedIndex ===
        this.sectionService.getSectionsLength() - 1
      ) {
        this.final = false;
        this.sectionColoring[this.selectedIndex] = true;
        this.sectionsWithAnswers = this.sectionService.getSectionsWithAnswers();
      } else {
        this.sectionColoring[stepper.selectedIndex] = true;
        stepper.next();
        this.sectionChange(stepper.selectedIndex);
        this.selectedIndex = stepper.selectedIndex;
      }
    }
  }
  OnStep(event: StepperSelectionEvent): void {
    this.nextDisabled = true;
    this.hide = false;
    this.selectedIndex = event.selectedIndex;
  }
  ToHide(): void {
    this.hide = true;
  }
}
