import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPaidAdvanceAdvanceReportsComponent } from './ppaid-advance-advance-reports.component';

describe('PPaidAdvanceAdvanceReportsComponent', () => {
  let component: PPaidAdvanceAdvanceReportsComponent;
  let fixture: ComponentFixture<PPaidAdvanceAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPaidAdvanceAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPaidAdvanceAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
