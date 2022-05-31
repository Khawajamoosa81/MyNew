import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListAllInfoComponent } from './emp-list-all-info.component';

describe('EmpListAllInfoComponent', () => {
  let component: EmpListAllInfoComponent;
  let fixture: ComponentFixture<EmpListAllInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListAllInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
