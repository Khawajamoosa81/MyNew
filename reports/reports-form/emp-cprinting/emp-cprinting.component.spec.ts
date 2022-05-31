import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCPrintingComponent } from './emp-cprinting.component';

describe('EmpCPrintingComponent', () => {
  let component: EmpCPrintingComponent;
  let fixture: ComponentFixture<EmpCPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
