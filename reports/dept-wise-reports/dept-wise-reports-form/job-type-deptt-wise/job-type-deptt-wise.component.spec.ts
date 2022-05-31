import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTypeDepttWiseComponent } from './job-type-deptt-wise.component';

describe('JobTypeDepttWiseComponent', () => {
  let component: JobTypeDepttWiseComponent;
  let fixture: ComponentFixture<JobTypeDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTypeDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTypeDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
