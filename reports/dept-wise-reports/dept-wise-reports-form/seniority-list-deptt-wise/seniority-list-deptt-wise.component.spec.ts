import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorityListDepttWiseComponent } from './seniority-list-deptt-wise.component';

describe('SeniorityListDepttWiseComponent', () => {
  let component: SeniorityListDepttWiseComponent;
  let fixture: ComponentFixture<SeniorityListDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorityListDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorityListDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
