import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  canDisplay: boolean;

  @Input()
  buttonText: string;

  @Input()
  buttonClass: string;

  @Output()
  public clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clicked.emit();
  }
}
