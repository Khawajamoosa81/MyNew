import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvPaidAgainBonusAdvanceReportsComponent } from './padv-paid-again-bonus-advance-reports.component';

describe('PAdvPaidAgainBonusAdvanceReportsComponent', () => {
  let component: PAdvPaidAgainBonusAdvanceReportsComponent;
  let fixture: ComponentFixture<PAdvPaidAgainBonusAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvPaidAgainBonusAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvPaidAgainBonusAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
