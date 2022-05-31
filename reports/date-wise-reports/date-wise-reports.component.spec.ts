import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseReportsComponent } from './date-wise-reports.component';

describe('DateWiseReportsComponent', () => {
  let component: DateWiseReportsComponent;
  let fixture: ComponentFixture<DateWiseReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateWiseReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
