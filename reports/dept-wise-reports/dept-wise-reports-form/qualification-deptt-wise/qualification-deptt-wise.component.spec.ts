import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationDepttWiseComponent } from './qualification-deptt-wise.component';

describe('QualificationDepttWiseComponent', () => {
  let component: QualificationDepttWiseComponent;
  let fixture: ComponentFixture<QualificationDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
