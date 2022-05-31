import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealAllowAllowAndDedComponent } from './meal-allow-allow-and-ded.component';

describe('MealAllowAllowAndDedComponent', () => {
  let component: MealAllowAllowAndDedComponent;
  let fixture: ComponentFixture<MealAllowAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealAllowAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealAllowAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
