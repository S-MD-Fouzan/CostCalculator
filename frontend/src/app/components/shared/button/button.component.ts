import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  previous: boolean;

  @Input()
  buttonTextOne: string;

  @Input()
  buttonTextTwo: string;

  @Output()
  public clickedOne = new EventEmitter();

  @Output()
  public clickedTwo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickOne() {
    this.clickedOne.emit();
  }
  onClickTwo() {
    this.clickedTwo.emit();
  }
}
