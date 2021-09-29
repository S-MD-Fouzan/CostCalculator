import { Injectable } from '@angular/core';
import { sections } from '../shared/sections';
import { Section } from '../shared/Section';
import { sectionsWithoutOptions } from '../shared/sections';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  indices: number[];
  constructor() {}
  getSectionsWithAnswers(): Section[] {
    return sectionsWithoutOptions;
  }
  getSections(): Section[] {
    return sections;
  }
  getSection(id: number): Section {
    return sections[id];
  }
  getQuestionsForSavingAnswers(id: number) {
    return sectionsWithoutOptions[id].questions;
  }
  getPrices(): any {
    let minP = 0;
    let maxP = 0;
    sectionsWithoutOptions.forEach((section) => {
      section.questions.forEach((question) => {
        question.options.forEach((option) => {
          minP += option.min_price;
          maxP += option.max_price;
        });
      });
    });
    return { totalMin: minP, totalMax: maxP };
  }
  getQuestionToAppendAnswers(indexOfSection: number, indexOfQuestion: number) {
    return sectionsWithoutOptions[indexOfSection].questions[indexOfQuestion];
  }
  getQuestion(indexOfSection: number, indexOfQuestion: number) {
    return sections[indexOfSection].questions[indexOfQuestion];
  }
  getQuestionsLength(indexOfSection: number) {
    return sections[indexOfSection].questions.length;
  }
  getFilledSections() {
    this.indices = [];
    let filledSections: Section[] = [];
    for (let i = 0; i < sectionsWithoutOptions.length; i++) {
      if (sectionsWithoutOptions[i].questions[0].options.length > 0) {
        filledSections.push(sectionsWithoutOptions[i]);
        this.indices.push(i);
      }
    }

    return filledSections;
  }
  getIndices() {
    return this.indices;
  }
}
