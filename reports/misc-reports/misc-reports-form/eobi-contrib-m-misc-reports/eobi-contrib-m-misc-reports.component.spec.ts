import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EobiContribMMiscReportsComponent } from './eobi-contrib-m-misc-reports.component';

describe('EobiContribMMiscReportsComponent', () => {
  let component: EobiContribMMiscReportsComponent;
  let fixture: ComponentFixture<EobiContribMMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EobiContribMMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EobiContribMMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
