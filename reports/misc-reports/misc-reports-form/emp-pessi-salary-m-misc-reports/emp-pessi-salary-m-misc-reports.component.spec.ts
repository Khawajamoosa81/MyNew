import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPessiSalaryMMiscReportsComponent } from './emp-pessi-salary-m-misc-reports.component';

describe('EmpPessiSalaryMMiscReportsComponent', () => {
  let component: EmpPessiSalaryMMiscReportsComponent;
  let fixture: ComponentFixture<EmpPessiSalaryMMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPessiSalaryMMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPessiSalaryMMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
