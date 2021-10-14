import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOverviewComponent } from './final-overview.component';

describe('FinalOverviewComponent', () => {
  let component: FinalOverviewComponent;
  let fixture: ComponentFixture<FinalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
