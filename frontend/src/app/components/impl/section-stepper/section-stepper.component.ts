import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Section } from 'src/app/models/section.model';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-section-stepper',
  templateUrl: './section-stepper.component.html',
  styleUrls: ['./section-stepper.component.scss'],
})
export class SectionStepperComponent implements OnInit {
  selectedIndex: number = 0;
  hide: boolean;
  nextDisabled: boolean;
  cardStringControl: string = '';
  skipStringControl: string = '';

  @Input()
  sections: Section[];
  @Input()
  sectionsWithAnswers: Section[];
  @Input()
  widthsArray: number[];
  @Input()
  sectionColoring: boolean[];
  @Input()
  length: number;
  @Input()
  cardStringControlArray: string[];
  @Input()
  skipStringControlArray: string[];
  @Output()
  public changeStatus = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.nextDisabled = true;
    this.hide = false;
    this.cardStringControl = this.cardStringControlArray[0];
    this.skipStringControl = this.skipStringControlArray[0];
  }
  OnStep(event: StepperSelectionEvent): void {
    this.nextDisabled = true;
    this.hide = false;
    this.selectedIndex = event.selectedIndex;
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
          if (stepper.selectedIndex === this.length - 1) {
            this.changeStatus.emit(false);
            this.sectionColoring[this.selectedIndex] = true;
          } else {
            stepper.next();
            this.sectionChange(stepper.selectedIndex);
          }
        }
      });
    } else {
      if (stepper.selectedIndex === this.length - 1) {
        this.changeStatus.emit(false);
        this.sectionColoring[this.selectedIndex] = true;
      } else {
        this.sectionColoring[stepper.selectedIndex] = true;
        stepper.next();
        this.sectionChange(stepper.selectedIndex);
      }
    }
  }
  ToHide(): void {
    this.hide = true;
  }
  sectionChange(index: number): void {
    if (index > -1) {
      if (this.widthsArray[index] > 0) {
        this.cardStringControlArray[index] = 'Edit Section';
        this.skipStringControlArray[index] = 'Clear';
      } else {
        this.cardStringControlArray[index] = 'Get Started';
        this.skipStringControlArray[index] = 'Skip';
      }
      if (this.widthsArray[this.selectedIndex] > 99) {
        this.sectionColoring[this.selectedIndex] = true;
      } else {
        this.sectionColoring[this.selectedIndex] = false;
      }
      this.cardStringControl = this.cardStringControlArray[index];
      this.skipStringControl = this.skipStringControlArray[index];
      this.selectedIndex = index;
    }
  }
}