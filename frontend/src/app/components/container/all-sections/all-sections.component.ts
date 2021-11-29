import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { HttpErrorResponse } from '@angular/common/http';
import { Submission } from '../../../models/submission.model';

@Component({
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.scss'],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        position: 'above',
      },
    },
  ],
})
export class AllSectionsComponent implements OnInit {
  length: number;
  widthsArray: number[];
  sectionColoring: boolean[];
  sections: Section[];
  hide: boolean;
  nextDisabled: boolean;
  final: boolean;
  sectionsWithAnswers: Section[];
  selectedIndex: number;
  costDisplayer: boolean;
  minPrice = 0;
  maxPrice = 0;
  isEmpty = true;
  sectionsWithoutGeneralQuestions: Section[];
  filledSectionsArray: Section[] = [];
  costSpinner: boolean;
  error = false;
  cardStringControlArray: string[];
  skipStringControlArray: string[];

  constructor(private sectionService: SectionService) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    if (this.sectionService.refreshHandler) {
      event.returnValue = false;
    }
  }

  ngOnInit(): void {
    this.costDisplayer = true;
    this.selectedIndex = 0;
    this.final = true;
    this.sections = this.sectionService.getSections();
    this.widthsArray = this.sectionService.widthsArray;
    this.sectionColoring = this.sectionService.sectionColoring;
    this.length = this.sections.length + 1;
    this.sectionsWithAnswers = this.sectionService.getSectionsWithAnswers();
    this.cardStringControlArray = this.sectionService.cardStringControlArray;
    this.skipStringControlArray = this.sectionService.skipStringControlArray;
  }

  changeStatus(event: boolean): void {
    this.filledSectionsArray = this.sectionService.getFilledSections();
    if (this.filledSectionsArray.length === 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
    this.final = event;
  }
  onSubmit(finalData: Submission): void {
    this.costSpinner = true;
    this.sectionService
      .getPrices(finalData)
      .then((submission: Submission) => {
        this.sectionService.refreshHandler = false;
        this.minPrice = submission.lowerEstimate;
        this.maxPrice = submission.upperEstimate;
        this.costDisplayer = false;
        this.costSpinner = false;
      })
      .catch((error: HttpErrorResponse) => {
        this.costSpinner = false;
        this.error = true;
      });
  }
  refreshHandler(): void {
    this.sectionService.refreshHandler = !this.sectionService.refreshHandler;
  }
}
