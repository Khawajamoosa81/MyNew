import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveEobiListMiscReportsComponent } from './in-active-eobi-list-misc-reports.component';

describe('InActiveEobiListMiscReportsComponent', () => {
  let component: InActiveEobiListMiscReportsComponent;
  let fixture: ComponentFixture<InActiveEobiListMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActiveEobiListMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActiveEobiListMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
