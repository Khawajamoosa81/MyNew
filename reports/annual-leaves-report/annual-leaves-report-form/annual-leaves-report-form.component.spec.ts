import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualLeavesReportFormComponent } from './annual-leaves-report-form.component';

describe('AnnualLeavesReportFormComponent', () => {
  let component: AnnualLeavesReportFormComponent;
  let fixture: ComponentFixture<AnnualLeavesReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualLeavesReportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualLeavesReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
