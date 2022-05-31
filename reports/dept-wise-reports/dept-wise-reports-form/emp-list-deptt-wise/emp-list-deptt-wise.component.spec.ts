import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListDepttWiseComponent } from './emp-list-deptt-wise.component';

describe('EmpListDepttWiseComponent', () => {
  let component: EmpListDepttWiseComponent;
  let fixture: ComponentFixture<EmpListDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
