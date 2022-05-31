import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptWiseReportsComponent } from './dept-wise-reports.component';

describe('DeptWiseReportsComponent', () => {
  let component: DeptWiseReportsComponent;
  let fixture: ComponentFixture<DeptWiseReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptWiseReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptWiseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
