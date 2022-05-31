import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAgeAtTheTimeOfJoinMiscReportsComponent } from './emp-age-at-the-time-of-join-misc-reports.component';

describe('EmpAgeAtTheTimeOfJoinMiscReportsComponent', () => {
  let component: EmpAgeAtTheTimeOfJoinMiscReportsComponent;
  let fixture: ComponentFixture<EmpAgeAtTheTimeOfJoinMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpAgeAtTheTimeOfJoinMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAgeAtTheTimeOfJoinMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
