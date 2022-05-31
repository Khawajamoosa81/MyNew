import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpExLetterComponent } from './emp-ex-letter.component';

describe('EmpExLetterComponent', () => {
  let component: EmpExLetterComponent;
  let fixture: ComponentFixture<EmpExLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpExLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpExLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
