import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAppointComponent } from './emp-appoint.component';

describe('EmpAppointComponent', () => {
  let component: EmpAppointComponent;
  let fixture: ComponentFixture<EmpAppointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpAppointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
