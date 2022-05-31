import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTrackingComponent } from './emp-tracking.component';

describe('EmpTrackingComponent', () => {
  let component: EmpTrackingComponent;
  let fixture: ComponentFixture<EmpTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
