import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePessiListMiscReportsComponent } from './active-pessi-list-misc-reports.component';

describe('ActivePessiListMiscReportsComponent', () => {
  let component: ActivePessiListMiscReportsComponent;
  let fixture: ComponentFixture<ActivePessiListMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePessiListMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePessiListMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
