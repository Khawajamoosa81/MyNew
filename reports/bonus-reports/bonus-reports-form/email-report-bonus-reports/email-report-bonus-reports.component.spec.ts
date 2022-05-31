import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReportBonusReportsComponent } from './email-report-bonus-reports.component';

describe('EmailReportBonusReportsComponent', () => {
  let component: EmailReportBonusReportsComponent;
  let fixture: ComponentFixture<EmailReportBonusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailReportBonusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReportBonusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
