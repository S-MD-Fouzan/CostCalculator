import { Injectable } from '@angular/core';
import { Section } from '../models/section.model';
import { HttpClient } from '@angular/common/http';
import {Option, Question} from '../models/question.model';
import {environment} from '../../environments/environment';
import { Submission } from '../models/submission.model';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  url:string=environment.API_URL;
  indices: number[];
  sections:Section[]=[];
  widthsArray: number[]=[];
  sectionColoring: boolean[]=[];
  sectionsWithoutOptions:Section[]=[];
  cardStringControlArray: string[]=[];
  skipStringControlArray: string[]=[];
  refreshHandler: boolean = false;
  constructor(private http:HttpClient) {}
  getSectionsFromServer():Promise<Section[]>{
    return new Promise((resolve,reject)=>{
      this.http.get<Section[]>(this.url+'/sections').subscribe(
        (data)=>{
          resolve(data);
        },
        (err)=>{
          reject(err);
        }
      );
    })
  }
  sendData(prods:Section[]):void{
    this.widthsArray = new Array(this.sections.length+1).fill(0);
    this.sectionColoring = new Array(this.sections.length+1).fill(false);
    this.sectionColoring[0] = true;
    for(let i=0;i<prods.length;i++){
      this.cardStringControlArray[i]='Get Started';
      this.skipStringControlArray[i]='Skip';
    }
    this.sections=prods;
    if(this.sectionsWithoutOptions.length===0){
      for(let i=0;i<this.sections.length;i++){
        this.sectionsWithoutOptions.push(JSON.parse(JSON.stringify(this.sections[i])));
      }
      for (let i = 0; i < this.sections.length; i++) {
        this.sectionsWithoutOptions[i].questions.forEach((question) =>{
          question.options = [];
        });
      }
    }
  }
  getSectionsWithAnswers(): Section[] {
    return this.sectionsWithoutOptions;
  }
  getSections(): Section[] {
   return this.sections;
  }
  getSectionsLength():number{
    return this.sections.length;
  }
  getSection(id: number): Section {
    return this.sections[id];
  }
  getQuestionsForSavingAnswers(id: number):Question[]{
    return this.sectionsWithoutOptions[id].questions;
  }
  getPrices(finalData:Submission): Promise<Submission> {
    return new Promise((resolve,reject)=>{
      this.http.post<Submission>(this.url+'/submissions', finalData).subscribe(
        (data)=>{
          resolve(data);
        },
        (err)=>{
          reject(err);
        }
      );
    }); 
  }
  getQuestionToAppendAnswers(indexOfSection: number, indexOfQuestion: number):Question {
    return this.sectionsWithoutOptions[indexOfSection].questions[indexOfQuestion];
  }
  getQuestion(indexOfSection: number, indexOfQuestion: number):Question{
    return this.sections[indexOfSection].questions[indexOfQuestion];
  }
  getQuestionsLength(indexOfSection: number):number {
    return this.sections[indexOfSection].questions.length;
  }
  getFilledSections():Section[] {
    this.indices = [];
    let filledSections: Section[] = [];
    for (let i = 0; i < this.sectionsWithoutOptions.length; i++) {
      if (this.sectionsWithoutOptions[i].questions[0].options.length > 0) {
        filledSections.push(this.sectionsWithoutOptions[i]);
        this.indices.push(i);
      }
    }
    return filledSections;
  }
  getIndices():number[] {
    return this.indices;
  }
  setAnswers(sectionIndex:number,questionIndex:number,answers:Option[]):void{
    this.refreshHandler=true;
    this.sectionsWithoutOptions[sectionIndex].questions[questionIndex].options=answers;
  }
}
