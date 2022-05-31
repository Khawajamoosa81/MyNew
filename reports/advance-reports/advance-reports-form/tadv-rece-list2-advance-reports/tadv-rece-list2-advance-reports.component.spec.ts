import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAdvReceList2AdvanceReportsComponent } from './tadv-rece-list2-advance-reports.component';

describe('TAdvReceList2AdvanceReportsComponent', () => {
  let component: TAdvReceList2AdvanceReportsComponent;
  let fixture: ComponentFixture<TAdvReceList2AdvanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAdvReceList2AdvanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAdvReceList2AdvanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
