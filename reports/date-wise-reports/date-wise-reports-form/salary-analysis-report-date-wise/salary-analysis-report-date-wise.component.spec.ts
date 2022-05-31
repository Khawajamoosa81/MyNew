import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAnalysisReportDateWiseComponent } from './salary-analysis-report-date-wise.component';

describe('SalaryAnalysisReportDateWiseComponent', () => {
  let component: SalaryAnalysisReportDateWiseComponent;
  let fixture: ComponentFixture<SalaryAnalysisReportDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryAnalysisReportDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryAnalysisReportDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
