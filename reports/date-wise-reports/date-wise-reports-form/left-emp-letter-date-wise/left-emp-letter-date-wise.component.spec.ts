import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftEmpLetterDateWiseComponent } from './left-emp-letter-date-wise.component';

describe('LeftEmpLetterDateWiseComponent', () => {
  let component: LeftEmpLetterDateWiseComponent;
  let fixture: ComponentFixture<LeftEmpLetterDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftEmpLetterDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftEmpLetterDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
