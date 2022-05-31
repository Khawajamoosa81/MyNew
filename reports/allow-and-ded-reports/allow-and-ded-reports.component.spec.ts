import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowAndDedReportsComponent } from './allow-and-ded-reports.component';

describe('AllowAndDedReportsComponent', () => {
  let component: AllowAndDedReportsComponent;
  let fixture: ComponentFixture<AllowAndDedReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowAndDedReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowAndDedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
