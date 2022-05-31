import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBranchLogComponent } from './emp-branch-log.component';

describe('EmpBranchLogComponent', () => {
  let component: EmpBranchLogComponent;
  let fixture: ComponentFixture<EmpBranchLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpBranchLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpBranchLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
