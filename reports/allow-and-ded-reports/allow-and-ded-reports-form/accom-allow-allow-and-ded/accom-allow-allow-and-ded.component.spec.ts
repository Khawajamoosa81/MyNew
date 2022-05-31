import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomAllowAllowAndDedComponent } from './accom-allow-allow-and-ded.component';

describe('AccomAllowAllowAndDedComponent', () => {
  let component: AccomAllowAllowAndDedComponent;
  let fixture: ComponentFixture<AccomAllowAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomAllowAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomAllowAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
