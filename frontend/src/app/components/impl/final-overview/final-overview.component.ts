import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';
import { Question } from 'src/app/models/question.model';
import { Submission } from '../../../models/submission.model';

@Component({
  selector: 'app-final-overview',
  templateUrl: './final-overview.component.html',
  styleUrls: ['./final-overview.component.scss']
})
export class FinalOverviewComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  sectionsWithoutGeneralQuestions : Section[];
  filledSectionsArray: Section[] = [];
  indices: number[];
  costSpinner:boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  costDisplayer: boolean;
  arrayOfQuestionsWithAnswers: Question[] = [];
  step:number = 0;
  constructor(private sectionService:SectionService) { }

  ngOnInit(): void {
    this.costDisplayer = true;
    this.filledSectionsArray=this.sectionService.getFilledSections();
    this.indices=this.sectionService.getIndices();
  }

  setStep(index: number):void {
    this.step = index;
  }

  nextStep():void {
    this.step++;
  }

  prevStep():void {
    this.step--;
  }
  
  onSubmit():void {
    if(this.emailFormControl.valid){
      this.costSpinner=true;
      let finalData:Submission=<Submission>{};
      finalData.email=this.emailFormControl.value;
      finalData.lowerEstimate=0;
      finalData.upperEstimate=0;
      for (let i = 0; i < this.filledSectionsArray.length; i++) {
        this.arrayOfQuestionsWithAnswers= [...this.filledSectionsArray[i].questions, ...this.arrayOfQuestionsWithAnswers];
      }
      finalData.questions = this.arrayOfQuestionsWithAnswers;
      this.sectionService.getPrices(finalData).then((submission: Submission) => {
        this.minPrice = submission.lowerEstimate;
        this.maxPrice = submission.upperEstimate;
        this.costDisplayer = false;
        this.costSpinner=false;
      }).catch((err:any)=>{
        console.log(err);
      })
    }
  }

}
