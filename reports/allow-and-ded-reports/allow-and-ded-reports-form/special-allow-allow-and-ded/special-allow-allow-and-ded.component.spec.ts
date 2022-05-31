import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAllowAllowAndDedComponent } from './special-allow-allow-and-ded.component';

describe('SpecialAllowAllowAndDedComponent', () => {
  let component: SpecialAllowAllowAndDedComponent;
  let fixture: ComponentFixture<SpecialAllowAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialAllowAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAllowAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
