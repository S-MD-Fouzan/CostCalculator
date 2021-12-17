import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-preview-card',
  templateUrl: './section-preview-card.component.html',
  styleUrls: ['./section-preview-card.component.scss'],
})
export class SectionPreviewCardComponent implements OnInit {
  @Input()
  sectionName: string;
  @Input()
  sectionContent: string;
  @Input()
  cardStringControl: string;
  @Input()
  skipStringControl: string;

  @Output()
  public startClicked = new EventEmitter();
  @Output()
  public skipClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  onSectionStart(): void {
    this.startClicked.emit();
  }
  onSectionSkip(): void {
    this.skipClicked.emit(true);
  }
}
