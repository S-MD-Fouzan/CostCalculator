import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStepperComponent } from './section-stepper.component';

describe('SectionStepperComponent', () => {
  let component: SectionStepperComponent;
  let fixture: ComponentFixture<SectionStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
