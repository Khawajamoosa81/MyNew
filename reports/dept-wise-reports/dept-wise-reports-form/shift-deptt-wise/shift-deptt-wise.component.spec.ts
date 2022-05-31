import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftDepttWiseComponent } from './shift-deptt-wise.component';

describe('ShiftDepttWiseComponent', () => {
  let component: ShiftDepttWiseComponent;
  let fixture: ComponentFixture<ShiftDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
