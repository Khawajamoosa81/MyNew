import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAdvReceListAdvanceReportsComponent } from './tadv-rece-list-advance-reports.component';

describe('TAdvReceListAdvanceReportsComponent', () => {
  let component: TAdvReceListAdvanceReportsComponent;
  let fixture: ComponentFixture<TAdvReceListAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAdvReceListAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAdvReceListAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
