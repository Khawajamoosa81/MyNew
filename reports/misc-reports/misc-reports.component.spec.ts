import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscReportsComponent } from './misc-reports.component';

describe('MiscReportsComponent', () => {
  let component: MiscReportsComponent;
  let fixture: ComponentFixture<MiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
