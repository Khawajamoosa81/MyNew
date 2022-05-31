import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSlipsBonusReportsComponent } from './bonus-slips-bonus-reports.component';

describe('BonusSlipsBonusReportsComponent', () => {
  let component: BonusSlipsBonusReportsComponent;
  let fixture: ComponentFixture<BonusSlipsBonusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusSlipsBonusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSlipsBonusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
