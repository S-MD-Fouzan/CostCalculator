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
  public onStart = new EventEmitter();
  @Output()
  public onSkip = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  onSectionStart(): void {
    this.onStart.emit();
  }
  onSectionSkip(): void {
    this.onSkip.emit(true);
  }
}
