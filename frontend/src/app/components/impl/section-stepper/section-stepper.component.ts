import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from 'src/app/models/section.model';

@Component({
  selector: 'app-section-stepper',
  templateUrl: './section-stepper.component.html',
  styleUrls: ['./section-stepper.component.scss']
})
export class SectionStepperComponent implements OnInit {
  @Input()
  sections:Section[];
  @Input()
  selectedIndex:number;
  @Input()
  widthsArray:number[];
  @Input()
  sectionColoring:boolean[];
  @Input()
  length:number;
  @Output()
  public sectionChangeIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  sectionChangeHandler(index:number):void{
    this.sectionChangeIndex.emit(index);
  }

}