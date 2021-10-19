import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog } from '@angular/material/dialog';
import { AlertBoxComponent } from '../../shared/alert-box/alert-box.component';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

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
        position : 'above'  
      }
    }
  ]
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
  sectionsWithoutGeneralQuestions: Section[];
  FilledSectionsArray: Section[] = [];
  indices: number[];
  cardStringControl: string = "";
  costDisplayer: boolean;

  constructor(private sectionService: SectionService,private dialog: MatDialog) {}


  sectionChange(index:number){
    console.log(this.widthsArray+" "+this.sectionColoring);
    if(this.widthsArray[index]>0){
      this.cardStringControl='Edit section';
      this.sectionService.cardStringControl='Edit Section';
    }else{
      this.cardStringControl='Get Started';
      this.sectionService.cardStringControl='Get Started';
    }
    if(this.widthsArray[this.selectedIndex]>99){
      this.sectionColoring[this.selectedIndex]=true;
    }else{
      this.sectionColoring[this.selectedIndex]=false;
    }
    this.selectedIndex=index;
  }
  buttonToggler($event: any) {
    if ($event == 'true') {
      this.nextDisabled = false;
    }
  }
  adjustingWidth($event: any, index: number) {
    this.widthsArray[index] = $event;
  }
  switchIt(stepper: MatStepper,check:boolean) {
    if (stepper.selectedIndex !== this.sectionService.getSectionsLength()-1) {
      if(this.FinalSectionsWithAnswers[stepper.selectedIndex].questions[0].options.length>0 && check==true){
        const dialogRef = this.dialog.open(AlertBoxComponent);
        dialogRef.afterClosed().subscribe(result => {
          if(result){
            for(let i=0;i<this.FinalSectionsWithAnswers[stepper.selectedIndex].questions.length;i++){
              this.FinalSectionsWithAnswers[stepper.selectedIndex].questions[i].options=[];
            }
            this.widthsArray[stepper.selectedIndex] = 0;
            this.sectionColoring[stepper.selectedIndex] = true;
            stepper.next();
            this.sectionChange(stepper.selectedIndex);
          }
          this.selectedIndex = stepper.selectedIndex;
        });
      }
      else{
        this.sectionColoring[stepper.selectedIndex] = true;
        stepper.next();
        this.sectionChange(stepper.selectedIndex);
        this.selectedIndex=stepper.selectedIndex;
      }
    } else {
      this.final = false;
      this.FinalSectionsWithAnswers = this.sectionService.getSectionsWithAnswers();
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
    this.costDisplayer = true;
    this.selectedIndex = 0;
    this.final = true;
    this.nextDisabled = true;
    this.hide = false;
    this.sections=this.sectionService.getSections();
    this.widthsArray = this.sectionService.widthsArray;
    this.sectionColoring = this.sectionService.sectionColoring;
    this.cardStringControl=this.sectionService.cardStringControl;
    this.length = this.sections.length+1;
    this.FinalSectionsWithAnswers=this.sectionService.getSectionsWithAnswers();
  }
}
