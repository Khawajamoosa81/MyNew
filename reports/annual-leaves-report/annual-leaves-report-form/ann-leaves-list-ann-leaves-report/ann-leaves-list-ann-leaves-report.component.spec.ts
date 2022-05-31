import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnLeavesListAnnLeavesReportComponent } from './ann-leaves-list-ann-leaves-report.component';

describe('AnnLeavesListAnnLeavesReportComponent', () => {
  let component: AnnLeavesListAnnLeavesReportComponent;
  let fixture: ComponentFixture<AnnLeavesListAnnLeavesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnLeavesListAnnLeavesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnLeavesListAnnLeavesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
