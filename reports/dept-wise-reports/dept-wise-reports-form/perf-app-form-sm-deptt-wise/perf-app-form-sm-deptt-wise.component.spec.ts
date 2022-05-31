import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfAppFormSMDepttWiseComponent } from './perf-app-form-sm-deptt-wise.component';

describe('PerfAppFormSMDepttWiseComponent', () => {
  let component: PerfAppFormSMDepttWiseComponent;
  let fixture: ComponentFixture<PerfAppFormSMDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfAppFormSMDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfAppFormSMDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
