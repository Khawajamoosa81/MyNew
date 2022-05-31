import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualLeavesDueForSelectedMMiscReportsComponent } from './annual-leaves-due-for-selected-m-misc-reports.component';

describe('AnnualLeavesDueForSelectedMMiscReportsComponent', () => {
  let component: AnnualLeavesDueForSelectedMMiscReportsComponent;
  let fixture: ComponentFixture<AnnualLeavesDueForSelectedMMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualLeavesDueForSelectedMMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualLeavesDueForSelectedMMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
