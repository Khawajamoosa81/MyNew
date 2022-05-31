import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderDepttWiseComponent } from './gender-deptt-wise.component';

describe('GenderDepttWiseComponent', () => {
  let component: GenderDepttWiseComponent;
  let fixture: ComponentFixture<GenderDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
