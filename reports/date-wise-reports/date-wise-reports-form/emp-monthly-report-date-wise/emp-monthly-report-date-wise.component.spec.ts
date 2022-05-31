import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMonthlyReportDateWiseComponent } from './emp-monthly-report-date-wise.component';

describe('EmpMonthlyReportDateWiseComponent', () => {
  let component: EmpMonthlyReportDateWiseComponent;
  let fixture: ComponentFixture<EmpMonthlyReportDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMonthlyReportDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMonthlyReportDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
