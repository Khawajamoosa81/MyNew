import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListForInsuranceMiscReportsComponent } from './emp-list-for-insurance-misc-reports.component';

describe('EmpListForInsuranceMiscReportsComponent', () => {
  let component: EmpListForInsuranceMiscReportsComponent;
  let fixture: ComponentFixture<EmpListForInsuranceMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListForInsuranceMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListForInsuranceMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
