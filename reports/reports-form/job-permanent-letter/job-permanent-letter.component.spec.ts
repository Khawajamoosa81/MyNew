import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPermanentLetterComponent } from './job-permanent-letter.component';

describe('JobPermanentLetterComponent', () => {
  let component: JobPermanentLetterComponent;
  let fixture: ComponentFixture<JobPermanentLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPermanentLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPermanentLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
