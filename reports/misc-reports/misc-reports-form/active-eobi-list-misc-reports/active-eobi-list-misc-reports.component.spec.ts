import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEobiListMiscReportsComponent } from './active-eobi-list-misc-reports.component';

describe('ActiveEobiListMiscReportsComponent', () => {
  let component: ActiveEobiListMiscReportsComponent;
  let fixture: ComponentFixture<ActiveEobiListMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveEobiListMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEobiListMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
