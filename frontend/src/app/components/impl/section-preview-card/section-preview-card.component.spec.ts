import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPreviewCardComponent } from './section-preview-card.component';

describe('SectionPreviewCardComponent', () => {
  let component: SectionPreviewCardComponent;
  let fixture: ComponentFixture<SectionPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
