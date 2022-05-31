import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListHavingDiffJoinComponent } from './emp-list-having-diff-join.component';

describe('EmpListHavingDiffJoinComponent', () => {
  let component: EmpListHavingDiffJoinComponent;
  let fixture: ComponentFixture<EmpListHavingDiffJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListHavingDiffJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListHavingDiffJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
