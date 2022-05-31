import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSalLogComponent } from './emp-sal-log.component';

describe('EmpSalLogComponent', () => {
  let component: EmpSalLogComponent;
  let fixture: ComponentFixture<EmpSalLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSalLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSalLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
