import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListMissingPessiCardsMiscReportsComponent } from './emp-list-missing-pessi-cards-misc-reports.component';

describe('EmpListMissingPessiCardsMiscReportsComponent', () => {
  let component: EmpListMissingPessiCardsMiscReportsComponent;
  let fixture: ComponentFixture<EmpListMissingPessiCardsMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListMissingPessiCardsMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListMissingPessiCardsMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
