import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input()
  i: number;
  @Input()
  selectedIndex: number;
  @Input()
  widthValue: number;
  @Input()
  sectionColoringValue: boolean;
  @Input()
  sectionIcon: string;
  @Input()
  sectionName: string;

  @Output()
  public sectionChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    this.sectionChange.emit(this.i);
  }
}
