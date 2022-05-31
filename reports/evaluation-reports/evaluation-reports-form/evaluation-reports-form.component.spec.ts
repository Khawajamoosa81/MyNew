import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationReportsFormComponent } from './evaluation-reports-form.component';

describe('EvaluationReportsFormComponent', () => {
  let component: EvaluationReportsFormComponent;
  let fixture: ComponentFixture<EvaluationReportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationReportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
