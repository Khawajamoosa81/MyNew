import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvExpectedReturnAdvanceReportsComponent } from './padv-expected-return-advance-reports.component';

describe('PAdvExpectedReturnAdvanceReportsComponent', () => {
  let component: PAdvExpectedReturnAdvanceReportsComponent;
  let fixture: ComponentFixture<PAdvExpectedReturnAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvExpectedReturnAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvExpectedReturnAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
