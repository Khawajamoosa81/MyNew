import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationEndDateWiseComponent } from './probation-end-date-wise.component';

describe('ProbationEndDateWiseComponent', () => {
  let component: ProbationEndDateWiseComponent;
  let fixture: ComponentFixture<ProbationEndDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationEndDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationEndDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
