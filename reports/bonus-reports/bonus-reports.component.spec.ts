import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusReportsComponent } from './bonus-reports.component';

describe('BonusReportsComponent', () => {
  let component: BonusReportsComponent;
  let fixture: ComponentFixture<BonusReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
