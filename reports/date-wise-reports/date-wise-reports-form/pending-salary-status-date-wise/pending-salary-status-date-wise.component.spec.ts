import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSalaryStatusDateWiseComponent } from './pending-salary-status-date-wise.component';

describe('PendingSalaryStatusDateWiseComponent', () => {
  let component: PendingSalaryStatusDateWiseComponent;
  let fixture: ComponentFixture<PendingSalaryStatusDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingSalaryStatusDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSalaryStatusDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
