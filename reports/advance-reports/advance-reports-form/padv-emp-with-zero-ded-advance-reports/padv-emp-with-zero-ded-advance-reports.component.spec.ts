import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvEmpWithZeroDedAdvanceReportsComponent } from './padv-emp-with-zero-ded-advance-reports.component';

describe('PAdvEmpWithZeroDedAdvanceReportsComponent', () => {
  let component: PAdvEmpWithZeroDedAdvanceReportsComponent;
  let fixture: ComponentFixture<PAdvEmpWithZeroDedAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvEmpWithZeroDedAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvEmpWithZeroDedAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
