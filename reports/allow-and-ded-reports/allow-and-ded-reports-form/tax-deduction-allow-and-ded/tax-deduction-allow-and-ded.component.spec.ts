import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDeductionAllowAndDedComponent } from './tax-deduction-allow-and-ded.component';

describe('TaxDeductionAllowAndDedComponent', () => {
  let component: TaxDeductionAllowAndDedComponent;
  let fixture: ComponentFixture<TaxDeductionAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDeductionAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDeductionAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
