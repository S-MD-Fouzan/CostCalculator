import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../../../models/section.model';
import { SectionService } from '../../../services/section.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  index: number = 0;
  widthsArray: number[];
  WidthIncrement: number = 0;
  @Input()
  indexOfSectionFromParent: number;

  @Output()
  public atSummary = new EventEmitter<String>();
  currentSection: Section;
  summary: boolean;
  @Output()
  public adjustWidth = new EventEmitter<number>();

  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.currentSection = this.sectionService.getSection(
      this.indexOfSectionFromParent
    );
    this.index = 0;
    this.summary = false;
    var QLength = this.sectionService.getQuestionsLength(
      this.indexOfSectionFromParent
    );
    this.WidthIncrement = 100 / QLength;
    this.widthsArray = new Array(this.sectionService.getSectionsLength()).fill(
      0
    );
  }
  
  nextIsClicked($event: number): void {
    this.widthsArray[this.indexOfSectionFromParent] =(this.index+1)*this.WidthIncrement;
    this.adjustWidth.emit(this.widthsArray[this.indexOfSectionFromParent]);
    var QLength = this.sectionService.getQuestionsLength(
      this.indexOfSectionFromParent
    );

    if (this.index == QLength - 1) {
      this.summary = true;
      this.atSummary.emit('true');
    } else {
      this.index = $event + 1;
    }
  }
  prevIsClicked($event: number): void {
    this.index = $event - 1;
  }

}
