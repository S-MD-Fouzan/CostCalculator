import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { SectionForHome } from '../../../models/section.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sections: SectionForHome[];
  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.sections = this.sectionService.getSectionsForHomeComponent().slice(1);
  }
}
