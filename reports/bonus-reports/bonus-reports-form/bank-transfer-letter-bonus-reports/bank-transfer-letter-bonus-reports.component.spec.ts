import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTransferLetterBonusReportsComponent } from './bank-transfer-letter-bonus-reports.component';

describe('BankTransferLetterBonusReportsComponent', () => {
  let component: BankTransferLetterBonusReportsComponent;
  let fixture: ComponentFixture<BankTransferLetterBonusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTransferLetterBonusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTransferLetterBonusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
