import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionDepttWiseComponent } from './religion-deptt-wise.component';

describe('ReligionDepttWiseComponent', () => {
  let component: ReligionDepttWiseComponent;
  let fixture: ComponentFixture<ReligionDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
