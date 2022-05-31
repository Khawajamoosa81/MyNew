import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpShiftLogComponent } from './emp-shift-log.component';

describe('EmpShiftLogComponent', () => {
  let component: EmpShiftLogComponent;
  let fixture: ComponentFixture<EmpShiftLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpShiftLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpShiftLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
