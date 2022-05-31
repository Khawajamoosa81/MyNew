import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEvalFormComponent } from './emp-eval-form.component';

describe('EmpEvalFormComponent', () => {
  let component: EmpEvalFormComponent;
  let fixture: ComponentFixture<EmpEvalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpEvalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpEvalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
