import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvanceReceAdvanceReportsComponent } from './padvance-rece-advance-reports.component';

describe('PAdvanceReceAdvanceReportsComponent', () => {
  let component: PAdvanceReceAdvanceReportsComponent;
  let fixture: ComponentFixture<PAdvanceReceAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvanceReceAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvanceReceAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
