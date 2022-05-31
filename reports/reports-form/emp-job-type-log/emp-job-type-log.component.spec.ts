import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpJobTypeLogComponent } from './emp-job-type-log.component';

describe('EmpJobTypeLogComponent', () => {
  let component: EmpJobTypeLogComponent;
  let fixture: ComponentFixture<EmpJobTypeLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpJobTypeLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpJobTypeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
