import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptWiseReportsFormComponent } from './dept-wise-reports-form.component';

describe('DeptWiseReportsFormComponent', () => {
  let component: DeptWiseReportsFormComponent;
  let fixture: ComponentFixture<DeptWiseReportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptWiseReportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptWiseReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
