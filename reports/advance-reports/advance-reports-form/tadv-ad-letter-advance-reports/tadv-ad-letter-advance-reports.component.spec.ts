import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAdvAdLetterAdvanceReportsComponent } from './tadv-ad-letter-advance-reports.component';

describe('TAdvAdLetterAdvanceReportsComponent', () => {
  let component: TAdvAdLetterAdvanceReportsComponent;
  let fixture: ComponentFixture<TAdvAdLetterAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAdvAdLetterAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAdvAdLetterAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
