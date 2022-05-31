import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EobiReportWebSiteMiscReportsComponent } from './eobi-report-web-site-misc-reports.component';

describe('EobiReportWebSiteMiscReportsComponent', () => {
  let component: EobiReportWebSiteMiscReportsComponent;
  let fixture: ComponentFixture<EobiReportWebSiteMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EobiReportWebSiteMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EobiReportWebSiteMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
