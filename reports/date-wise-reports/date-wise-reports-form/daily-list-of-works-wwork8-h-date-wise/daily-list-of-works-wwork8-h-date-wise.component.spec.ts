import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyListOfWorksWWork8HDateWiseComponent } from './daily-list-of-works-wwork8-h-date-wise.component';

describe('DailyListOfWorksWWork8HDateWiseComponent', () => {
  let component: DailyListOfWorksWWork8HDateWiseComponent;
  let fixture: ComponentFixture<DailyListOfWorksWWork8HDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyListOfWorksWWork8HDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyListOfWorksWWork8HDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
