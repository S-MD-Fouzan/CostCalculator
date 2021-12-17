import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from 'src/app/models/section.model';

@Component({
  selector: 'app-section-stepper',
  templateUrl: './section-stepper.component.html',
  styleUrls: ['./section-stepper.component.scss'],
})
export class SectionStepperComponent implements OnInit {
  @Input()
  selectedIndex: number;
  @Input()
  sections: Section[];
  @Input()
  widthsArray: number[];
  @Input()
  sectionColoring: boolean[];
  @Input()
  length: number;
  @Output()
  public changeStatus = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  sectionChange(i: number): void{
    this.changeStatus.emit(i);
  }
}
