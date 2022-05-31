import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeDepttWiseComponent } from './grade-deptt-wise.component';

describe('GradeDepttWiseComponent', () => {
  let component: GradeDepttWiseComponent;
  let fixture: ComponentFixture<GradeDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
