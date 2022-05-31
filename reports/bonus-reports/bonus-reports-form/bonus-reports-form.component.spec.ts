import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusReportsFormComponent } from './bonus-reports-form.component';

describe('BonusReportsFormComponent', () => {
  let component: BonusReportsFormComponent;
  let fixture: ComponentFixture<BonusReportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusReportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
