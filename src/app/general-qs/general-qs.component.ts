import { Component, OnInit } from '@angular/core';
import { SectionService } from '../services/section.service';
import { Section } from '../shared/Section';
import { Question } from '../shared/question';

@Component({
  selector: 'app-general-qs',
  templateUrl: './general-qs.component.html',
  styleUrls: ['./general-qs.component.scss'],
})
export class GeneralQsComponent implements OnInit {
  width: number = 0;
  hide: boolean;
  sectionIndex: number;
  sectionOne: Section;

  constructor(private sectionService: SectionService) {}
  ngOnInit(): void {
    this.hide = true;
    this.sectionIndex = 0;
    this.sectionOne = this.sectionService.getSection(this.sectionIndex);
  }
  buttonToggler($event: any): void {
    if ($event == 'true') {
      this.hide = false;
    }
  }
  adjustingWidth($event: any, index: any) {
    this.width = $event;
  }
}
