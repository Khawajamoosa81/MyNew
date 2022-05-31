import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDepLogComponent } from './emp-dep-log.component';

describe('EmpDepLogComponent', () => {
  let component: EmpDepLogComponent;
  let fixture: ComponentFixture<EmpDepLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDepLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDepLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
