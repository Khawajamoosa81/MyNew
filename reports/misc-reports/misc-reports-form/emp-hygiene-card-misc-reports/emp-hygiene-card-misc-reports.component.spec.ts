import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpHygieneCardMiscReportsComponent } from './emp-hygiene-card-misc-reports.component';

describe('EmpHygieneCardMiscReportsComponent', () => {
  let component: EmpHygieneCardMiscReportsComponent;
  let fixture: ComponentFixture<EmpHygieneCardMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpHygieneCardMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpHygieneCardMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
