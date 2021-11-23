import { Component, OnInit } from '@angular/core';
import { SectionService } from './services/section.service';
import { Section } from './models/section.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'cost-calculator';
  spinner: boolean;
  error:boolean;
  sections: Section[];
  constructor(private sectionService: SectionService) {}

  async ngOnInit() {
    this.spinner = true;
    try{
    this.sections = await this.sectionService.getSectionsFromServer();
    this.sectionService.sendData(this.sections);
    this.spinner = false;
    this.error=false;
    }
    catch(error){
       console.log(error);
       this.spinner=false;
       this.error=true;
    }
  }
}
