import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverTimePreCalDateWiseComponent } from './over-time-pre-cal-date-wise.component';

describe('OverTimePreCalDateWiseComponent', () => {
  let component: OverTimePreCalDateWiseComponent;
  let fixture: ComponentFixture<OverTimePreCalDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverTimePreCalDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverTimePreCalDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
