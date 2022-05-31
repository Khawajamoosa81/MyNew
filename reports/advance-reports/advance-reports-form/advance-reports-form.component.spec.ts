import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceReportsFormComponent } from './advance-reports-form.component';

describe('AdvanceReportsFormComponent', () => {
  let component: AdvanceReportsFormComponent;
  let fixture: ComponentFixture<AdvanceReportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceReportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
