import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActivePessiListMiscReportsComponent } from './in-active-pessi-list-misc-reports.component';

describe('InActivePessiListMiscReportsComponent', () => {
  let component: InActivePessiListMiscReportsComponent;
  let fixture: ComponentFixture<InActivePessiListMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActivePessiListMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActivePessiListMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
