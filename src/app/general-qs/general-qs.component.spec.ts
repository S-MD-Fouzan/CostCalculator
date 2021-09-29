import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralQsComponent } from './general-qs.component';

describe('GeneralQsComponent', () => {
  let component: GeneralQsComponent;
  let fixture: ComponentFixture<GeneralQsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralQsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
