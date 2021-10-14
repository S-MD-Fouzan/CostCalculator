import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../../models/section.model';
import { Question } from '../../../models/question.model';
import { SectionService } from '../../../services/section.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input()
  indexOfSection: number;
  questionsWithSelectedOptions: Question[];
  section: Section;

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.questionsWithSelectedOptions = this.sectionService.getQuestionsForSavingAnswers(this.indexOfSection);
    this.section = this.sectionService.getSection(this.indexOfSection);
  }
  isEmpty(questions: Question[]): boolean {
    if (questions[0].options.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

}