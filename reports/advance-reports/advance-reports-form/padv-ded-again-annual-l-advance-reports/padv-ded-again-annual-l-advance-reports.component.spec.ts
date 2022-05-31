import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvDedAgainAnnualLAdvanceReportsComponent } from './padv-ded-again-annual-l-advance-reports.component';

describe('PAdvDedAgainAnnualLAdvanceReportsComponent', () => {
  let component: PAdvDedAgainAnnualLAdvanceReportsComponent;
  let fixture: ComponentFixture<PAdvDedAgainAnnualLAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvDedAgainAnnualLAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvDedAgainAnnualLAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
