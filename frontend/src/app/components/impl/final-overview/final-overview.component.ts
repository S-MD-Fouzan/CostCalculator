import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';

@Component({
  selector: 'app-final-overview',
  templateUrl: './final-overview.component.html',
  styleUrls: ['./final-overview.component.scss']
})
export class FinalOverviewComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  sectionsWithoutGeneralQuestions : Section[];
  FilledSectionsArray: Section[] = [];
  indices: number[];
  costSpinner:boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  costDisplayer: boolean;
  step:number = 0;
  constructor(private sectionService:SectionService) { }

  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  onSubmit() {
    if(this.emailFormControl.valid){
      this.costSpinner=true;
      this.sectionService.getPrices(this.emailFormControl.value, this.FilledSectionsArray).then((submission: any) => {
        this.minPrice = submission.lowerEstimate;
        this.maxPrice = submission.upperEstimate;
        this.costDisplayer = false;
        this.costSpinner=false;
      }).catch((err:any)=>{
        console.log(err);
      })
    }
  }
  ngOnInit(): void {
    this.costDisplayer = true;
    this.FilledSectionsArray=this.sectionService.getFilledSections();
    this.indices=this.sectionService.getIndices();
  }

}
