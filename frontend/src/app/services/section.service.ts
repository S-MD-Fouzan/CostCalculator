import { Injectable } from '@angular/core';
import { Section } from '../models/section.model';
import { HttpClient } from '@angular/common/http';
import {Option, Question} from '../models/question.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  url:string=environment.API_URL;
  indices: number[];
  sections:Section[]=[];
  cardStringControl: string = "";
  widthsArray: number[]=[];
  sectionColoring: boolean[]=[];
  sectionsWithoutOptions:Section[]=[];
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
  sendData(prods:Section[]){
    this.widthsArray = new Array(this.sections.length+1).fill(0);
    this.sectionColoring = new Array(this.sections.length+1).fill(false);
    this.sectionColoring[0] = true;
    this.cardStringControl='Get Started';
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
  getQuestionsForSavingAnswers(id: number) {
    return this.sectionsWithoutOptions[id].questions;
  }
  getPrices(input:string,filledSections:Section[]): any {
    let finalData = {
      email: input,
      lowerEstimate: 0,
      upperEstimate: 0,
      questions: Array<Question>(),
    };
    let arr: Question[] = [];
    for (let i = 0; i < filledSections.length; i++) {
      arr = [...filledSections[i].questions, ...arr];
    }
    finalData['questions'] = arr;
    return new Promise((resolve,reject)=>{
      this.http.post(this.url+'/submissions', finalData).subscribe(
        (data)=>{
          resolve(data);
        },
        (err)=>{
          reject(err);
        }
      );
    }); 
  }
  getQuestionToAppendAnswers(indexOfSection: number, indexOfQuestion: number) {
    return this.sectionsWithoutOptions[indexOfSection].questions[indexOfQuestion];
  }
  getQuestion(indexOfSection: number, indexOfQuestion: number) {
    return this.sections[indexOfSection].questions[indexOfQuestion];
  }
  getQuestionsLength(indexOfSection: number) {
    return this.sections[indexOfSection].questions.length;
  }
  getFilledSections() {
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
  getIndices() {
    return this.indices;
  }
  setAnswers(sectionIndex:number,questionIndex:number,answers:Option[]){
    this.sectionsWithoutOptions[sectionIndex].questions[questionIndex].options=answers;
  }
}
