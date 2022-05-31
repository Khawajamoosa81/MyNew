import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EobiFormatMMiscReportsComponent } from './eobi-format-m-misc-reports.component';

describe('EobiFormatMMiscReportsComponent', () => {
  let component: EobiFormatMMiscReportsComponent;
  let fixture: ComponentFixture<EobiFormatMMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EobiFormatMMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EobiFormatMMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
