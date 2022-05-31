import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarySlipsMiscReportsComponent } from './salary-slips-misc-reports.component';

describe('SalarySlipsMiscReportsComponent', () => {
  let component: SalarySlipsMiscReportsComponent;
  let fixture: ComponentFixture<SalarySlipsMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarySlipsMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarySlipsMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
