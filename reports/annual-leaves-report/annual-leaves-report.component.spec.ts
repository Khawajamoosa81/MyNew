import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualLeavesReportComponent } from './annual-leaves-report.component';

describe('AnnualLeavesReportComponent', () => {
  let component: AnnualLeavesReportComponent;
  let fixture: ComponentFixture<AnnualLeavesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualLeavesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualLeavesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
