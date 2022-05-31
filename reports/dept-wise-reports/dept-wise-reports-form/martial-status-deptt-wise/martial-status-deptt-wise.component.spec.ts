import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartialStatusDepttWiseComponent } from './martial-status-deptt-wise.component';

describe('MartialStatusDepttWiseComponent', () => {
  let component: MartialStatusDepttWiseComponent;
  let fixture: ComponentFixture<MartialStatusDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartialStatusDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartialStatusDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
