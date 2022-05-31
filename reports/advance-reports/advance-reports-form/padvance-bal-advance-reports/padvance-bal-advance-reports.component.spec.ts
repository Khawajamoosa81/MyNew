import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvanceBalAdvanceReportsComponent } from './padvance-bal-advance-reports.component';

describe('PAdvanceBalAdvanceReportsComponent', () => {
  let component: PAdvanceBalAdvanceReportsComponent;
  let fixture: ComponentFixture<PAdvanceBalAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvanceBalAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvanceBalAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
