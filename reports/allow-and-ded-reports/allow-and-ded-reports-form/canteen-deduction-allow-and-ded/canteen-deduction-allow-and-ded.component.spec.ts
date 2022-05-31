import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenDeductionAllowAndDedComponent } from './canteen-deduction-allow-and-ded.component';

describe('CanteenDeductionAllowAndDedComponent', () => {
  let component: CanteenDeductionAllowAndDedComponent;
  let fixture: ComponentFixture<CanteenDeductionAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenDeductionAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenDeductionAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
