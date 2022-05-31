import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpEligAnnLeaveAnnLeavesReportComponent } from './list-emp-elig-ann-leave-ann-leaves-report.component';

describe('ListEmpEligAnnLeaveAnnLeavesReportComponent', () => {
  let component: ListEmpEligAnnLeaveAnnLeavesReportComponent;
  let fixture: ComponentFixture<ListEmpEligAnnLeaveAnnLeavesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpEligAnnLeaveAnnLeavesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpEligAnnLeaveAnnLeavesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
