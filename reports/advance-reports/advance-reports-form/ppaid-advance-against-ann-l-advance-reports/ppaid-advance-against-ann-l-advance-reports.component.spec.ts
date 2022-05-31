import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPaidAdvanceAgainstAnnLAdvanceReportsComponent } from './ppaid-advance-against-ann-l-advance-reports.component';

describe('PPaidAdvanceAgainstAnnLAdvanceReportsComponent', () => {
  let component: PPaidAdvanceAgainstAnnLAdvanceReportsComponent;
  let fixture: ComponentFixture<PPaidAdvanceAgainstAnnLAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPaidAdvanceAgainstAnnLAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPaidAdvanceAgainstAnnLAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
