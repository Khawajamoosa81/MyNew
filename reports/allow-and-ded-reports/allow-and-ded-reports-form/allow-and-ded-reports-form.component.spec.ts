import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowAndDedReportsFormComponent } from './allow-and-ded-reports-form.component';

describe('AllowAndDedReportsFormComponent', () => {
  let component: AllowAndDedReportsFormComponent;
  let fixture: ComponentFixture<AllowAndDedReportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowAndDedReportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowAndDedReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
