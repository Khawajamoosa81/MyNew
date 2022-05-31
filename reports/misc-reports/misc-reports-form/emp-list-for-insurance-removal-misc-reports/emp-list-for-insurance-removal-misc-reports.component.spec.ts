import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListForInsuranceRemovalMiscReportsComponent } from './emp-list-for-insurance-removal-misc-reports.component';

describe('EmpListForInsuranceRemovalMiscReportsComponent', () => {
  let component: EmpListForInsuranceRemovalMiscReportsComponent;
  let fixture: ComponentFixture<EmpListForInsuranceRemovalMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListForInsuranceRemovalMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListForInsuranceRemovalMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
