import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAllowAllowAndDedComponent } from './travel-allow-allow-and-ded.component';

describe('TravelAllowAllowAndDedComponent', () => {
  let component: TravelAllowAllowAndDedComponent;
  let fixture: ComponentFixture<TravelAllowAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAllowAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAllowAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
