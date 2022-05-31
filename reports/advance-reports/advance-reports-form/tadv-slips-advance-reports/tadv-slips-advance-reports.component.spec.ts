import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAdvSlipsAdvanceReportsComponent } from './tadv-slips-advance-reports.component';

describe('TAdvSlipsAdvanceReportsComponent', () => {
  let component: TAdvSlipsAdvanceReportsComponent;
  let fixture: ComponentFixture<TAdvSlipsAdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAdvSlipsAdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAdvSlipsAdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
