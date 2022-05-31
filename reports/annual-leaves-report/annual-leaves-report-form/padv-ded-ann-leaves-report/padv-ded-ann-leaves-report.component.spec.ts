import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvDedAnnLeavesReportComponent } from './padv-ded-ann-leaves-report.component';

describe('PAdvDedAnnLeavesReportComponent', () => {
  let component: PAdvDedAnnLeavesReportComponent;
  let fixture: ComponentFixture<PAdvDedAnnLeavesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvDedAnnLeavesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvDedAnnLeavesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
