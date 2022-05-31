import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerAdvanceReportsComponent } from './ledger-advance-reports.component';

describe('LedgerAdvanceReportsComponent', () => {
  let component: LedgerAdvanceReportsComponent;
  let fixture: ComponentFixture<LedgerAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
