import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDepttWiseComponent } from './employment-deptt-wise.component';

describe('EmploymentDepttWiseComponent', () => {
  let component: EmploymentDepttWiseComponent;
  let fixture: ComponentFixture<EmploymentDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
