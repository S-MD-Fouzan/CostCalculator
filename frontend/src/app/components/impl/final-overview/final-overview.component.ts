import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section.model';

@Component({
  selector: 'app-final-overview',
  templateUrl: './final-overview.component.html',
  styleUrls: ['./final-overview.component.scss'],
})
export class FinalOverviewComponent implements OnInit {
 step:number=0;
  @Input()
  filledSectionsArray:Section[];
  constructor() {}

  ngOnInit(): void {
  }

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

}
