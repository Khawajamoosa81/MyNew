import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessiContribMMiscReportsComponent } from './pessi-contrib-m-misc-reports.component';

describe('PessiContribMMiscReportsComponent', () => {
  let component: PessiContribMMiscReportsComponent;
  let fixture: ComponentFixture<PessiContribMMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessiContribMMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessiContribMMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
