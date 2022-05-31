import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDeductionAllowAndDedComponent } from './rent-deduction-allow-and-ded.component';

describe('RentDeductionAllowAndDedComponent', () => {
  let component: RentDeductionAllowAndDedComponent;
  let fixture: ComponentFixture<RentDeductionAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentDeductionAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDeductionAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
