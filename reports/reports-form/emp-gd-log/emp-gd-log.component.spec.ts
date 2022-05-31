import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGdLogComponent } from './emp-gd-log.component';

describe('EmpGdLogComponent', () => {
  let component: EmpGdLogComponent;
  let fixture: ComponentFixture<EmpGdLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpGdLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGdLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
