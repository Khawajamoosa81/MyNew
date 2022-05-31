import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissPicListDepttWiseComponent } from './miss-pic-list-deptt-wise.component';

describe('MissPicListDepttWiseComponent', () => {
  let component: MissPicListDepttWiseComponent;
  let fixture: ComponentFixture<MissPicListDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissPicListDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissPicListDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
