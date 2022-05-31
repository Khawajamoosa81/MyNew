import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoiningDateWiseComponent } from './new-joining-date-wise.component';

describe('NewJoiningDateWiseComponent', () => {
  let component: NewJoiningDateWiseComponent;
  let fixture: ComponentFixture<NewJoiningDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJoiningDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJoiningDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
