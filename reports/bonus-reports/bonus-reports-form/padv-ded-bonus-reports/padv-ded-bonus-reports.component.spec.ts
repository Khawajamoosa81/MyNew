import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdvDedBonusReportsComponent } from './padv-ded-bonus-reports.component';

describe('PAdvDedBonusReportsComponent', () => {
  let component: PAdvDedBonusReportsComponent;
  let fixture: ComponentFixture<PAdvDedBonusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdvDedBonusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdvDedBonusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
