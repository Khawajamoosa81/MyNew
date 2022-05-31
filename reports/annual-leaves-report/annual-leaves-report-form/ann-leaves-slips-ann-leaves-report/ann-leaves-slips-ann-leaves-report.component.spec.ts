import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnLeavesSlipsAnnLeavesReportComponent } from './ann-leaves-slips-ann-leaves-report.component';

describe('AnnLeavesSlipsAnnLeavesReportComponent', () => {
  let component: AnnLeavesSlipsAnnLeavesReportComponent;
  let fixture: ComponentFixture<AnnLeavesSlipsAnnLeavesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnLeavesSlipsAnnLeavesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnLeavesSlipsAnnLeavesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
