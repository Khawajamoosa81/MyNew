import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryReceivingListMiscReportsComponent } from './salary-receiving-list-misc-reports.component';

describe('SalaryReceivingListMiscReportsComponent', () => {
  let component: SalaryReceivingListMiscReportsComponent;
  let fixture: ComponentFixture<SalaryReceivingListMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryReceivingListMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryReceivingListMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
