import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAdvPaidAdvanceReportsComponent } from './tadv-paid-advance-reports.component';

describe('TAdvPaidAdvanceReportsComponent', () => {
  let component: TAdvPaidAdvanceReportsComponent;
  let fixture: ComponentFixture<TAdvPaidAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAdvPaidAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAdvPaidAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
