import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodGroupDepttWiseComponent } from './blood-group-deptt-wise.component';

describe('BloodGroupDepttWiseComponent', () => {
  let component: BloodGroupDepttWiseComponent;
  let fixture: ComponentFixture<BloodGroupDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodGroupDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodGroupDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
