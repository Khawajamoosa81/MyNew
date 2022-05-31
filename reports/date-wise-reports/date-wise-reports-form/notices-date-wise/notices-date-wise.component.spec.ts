import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesDateWiseComponent } from './notices-date-wise.component';

describe('NoticesDateWiseComponent', () => {
  let component: NoticesDateWiseComponent;
  let fixture: ComponentFixture<NoticesDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
