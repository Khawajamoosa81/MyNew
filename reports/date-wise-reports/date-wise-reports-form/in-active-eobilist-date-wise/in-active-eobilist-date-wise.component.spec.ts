import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveEOBIListDateWiseComponent } from './in-active-eobilist-date-wise.component';

describe('InActiveEOBIListDateWiseComponent', () => {
  let component: InActiveEOBIListDateWiseComponent;
  let fixture: ComponentFixture<InActiveEOBIListDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActiveEOBIListDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActiveEOBIListDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
