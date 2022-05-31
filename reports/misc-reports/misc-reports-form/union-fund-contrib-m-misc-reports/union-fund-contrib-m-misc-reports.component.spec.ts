import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionFundContribMMiscReportsComponent } from './union-fund-contrib-m-misc-reports.component';

describe('UnionFundContribMMiscReportsComponent', () => {
  let component: UnionFundContribMMiscReportsComponent;
  let fixture: ComponentFixture<UnionFundContribMMiscReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionFundContribMMiscReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionFundContribMMiscReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
