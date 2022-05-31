import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoiningEmpListMiscReportsComponent } from './rejoining-emp-list-misc-reports.component';

describe('RejoiningEmpListMiscReportsComponent', () => {
  let component: RejoiningEmpListMiscReportsComponent;
  let fixture: ComponentFixture<RejoiningEmpListMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejoiningEmpListMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoiningEmpListMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
