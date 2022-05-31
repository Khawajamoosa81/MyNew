import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpiryDateWiseComponent } from './card-expiry-date-wise.component';

describe('CardExpiryDateWiseComponent', () => {
  let component: CardExpiryDateWiseComponent;
  let fixture: ComponentFixture<CardExpiryDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExpiryDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExpiryDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
