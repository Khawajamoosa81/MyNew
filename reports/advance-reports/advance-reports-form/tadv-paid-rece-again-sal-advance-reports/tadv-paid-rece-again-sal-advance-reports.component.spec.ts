import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAdvPaidReceAgainSalAdvanceReportsComponent } from './tadv-paid-rece-again-sal-advance-reports.component';

describe('TAdvPaidReceAgainSalAdvanceReportsComponent', () => {
  let component: TAdvPaidReceAgainSalAdvanceReportsComponent;
  let fixture: ComponentFixture<TAdvPaidReceAgainSalAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAdvPaidReceAgainSalAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAdvPaidReceAgainSalAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
