import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusListBonusReportsComponent } from './bonus-list-bonus-reports.component';

describe('BonusListBonusReportsComponent', () => {
  let component: BonusListBonusReportsComponent;
  let fixture: ComponentFixture<BonusListBonusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusListBonusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusListBonusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
