import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverTimePreCalcSummaryDateWiseComponent } from './over-time-pre-calc-summary-date-wise.component';

describe('OverTimePreCalcSummaryDateWiseComponent', () => {
  let component: OverTimePreCalcSummaryDateWiseComponent;
  let fixture: ComponentFixture<OverTimePreCalcSummaryDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverTimePreCalcSummaryDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverTimePreCalcSummaryDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
