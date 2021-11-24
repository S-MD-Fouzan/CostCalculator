import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  previous: boolean;

  @Output()
  public onClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(buttonText: string): void {
    if (buttonText == 'previous') {
      this.onClicked.emit('previous');
    } else {
      this.onClicked.emit('next');
    }
  }
}