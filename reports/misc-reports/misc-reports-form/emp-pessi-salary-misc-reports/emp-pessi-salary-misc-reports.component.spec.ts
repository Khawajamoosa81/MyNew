import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPessiSalaryMiscReportsComponent } from './emp-pessi-salary-misc-reports.component';

describe('EmpPessiSalaryMiscReportsComponent', () => {
  let component: EmpPessiSalaryMiscReportsComponent;
  let fixture: ComponentFixture<EmpPessiSalaryMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPessiSalaryMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPessiSalaryMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
