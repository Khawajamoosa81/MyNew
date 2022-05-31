import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessiContribM2MiscReportsComponent } from './pessi-contrib-m2-misc-reports.component';

describe('PessiContribM2MiscReportsComponent', () => {
  let component: PessiContribM2MiscReportsComponent;
  let fixture: ComponentFixture<PessiContribM2MiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessiContribM2MiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessiContribM2MiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
