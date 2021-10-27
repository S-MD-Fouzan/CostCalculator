import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Section } from '../../../models/section.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sections:Section[];
  constructor(private sectionService:SectionService) { }

  ngOnInit(): void {
    this.sections=this.sectionService.getSections().slice(1);
  }

}
