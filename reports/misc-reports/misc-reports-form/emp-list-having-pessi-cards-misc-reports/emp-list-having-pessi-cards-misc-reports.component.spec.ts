import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListHavingPessiCardsMiscReportsComponent } from './emp-list-having-pessi-cards-misc-reports.component';

describe('EmpListHavingPessiCardsMiscReportsComponent', () => {
  let component: EmpListHavingPessiCardsMiscReportsComponent;
  let fixture: ComponentFixture<EmpListHavingPessiCardsMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListHavingPessiCardsMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListHavingPessiCardsMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
