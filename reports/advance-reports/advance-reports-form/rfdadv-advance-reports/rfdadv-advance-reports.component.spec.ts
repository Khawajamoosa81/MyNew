import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFDAdvAdvanceReportsComponent } from './rfdadv-advance-reports.component';

describe('RFDAdvAdvanceReportsComponent', () => {
  let component: RFDAdvAdvanceReportsComponent;
  let fixture: ComponentFixture<RFDAdvAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFDAdvAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFDAdvAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
