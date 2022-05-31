import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfAppFormJMDepttWiseComponent } from './perf-app-form-jm-deptt-wise.component';

describe('PerfAppFormJMDepttWiseComponent', () => {
  let component: PerfAppFormJMDepttWiseComponent;
  let fixture: ComponentFixture<PerfAppFormJMDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfAppFormJMDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfAppFormJMDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
