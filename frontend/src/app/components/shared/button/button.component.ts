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
  public onClickedOne = new EventEmitter();

  @Output()
  public onClickedTwo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickOne(){
    this.onClickedOne.emit();
  }
  onClickTwo(){
    this.onClickedTwo.emit();
  }
}