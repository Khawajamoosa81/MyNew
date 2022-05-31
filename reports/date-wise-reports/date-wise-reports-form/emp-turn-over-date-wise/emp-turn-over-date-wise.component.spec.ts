import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTurnOverDateWiseComponent } from './emp-turn-over-date-wise.component';

describe('EmpTurnOverDateWiseComponent', () => {
  let component: EmpTurnOverDateWiseComponent;
  let fixture: ComponentFixture<EmpTurnOverDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTurnOverDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTurnOverDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
