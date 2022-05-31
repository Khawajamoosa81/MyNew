import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSummaryBonusReportsComponent } from './bonus-summary-bonus-reports.component';

describe('BonusSummaryBonusReportsComponent', () => {
  let component: BonusSummaryBonusReportsComponent;
  let fixture: ComponentFixture<BonusSummaryBonusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusSummaryBonusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSummaryBonusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
