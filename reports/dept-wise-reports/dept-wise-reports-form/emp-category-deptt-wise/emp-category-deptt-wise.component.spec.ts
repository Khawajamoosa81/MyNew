import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCategoryDepttWiseComponent } from './emp-category-deptt-wise.component';

describe('EmpCategoryDepttWiseComponent', () => {
  let component: EmpCategoryDepttWiseComponent;
  let fixture: ComponentFixture<EmpCategoryDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCategoryDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCategoryDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
