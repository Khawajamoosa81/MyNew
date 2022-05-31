import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessiContribFormatMiscReportsComponent } from './pessi-contrib-format-misc-reports.component';

describe('PessiContribFormatMiscReportsComponent', () => {
  let component: PessiContribFormatMiscReportsComponent;
  let fixture: ComponentFixture<PessiContribFormatMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessiContribFormatMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessiContribFormatMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
