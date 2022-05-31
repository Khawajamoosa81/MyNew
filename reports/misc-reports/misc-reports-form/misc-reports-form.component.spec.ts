import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscReportsFormComponent } from './misc-reports-form.component';

describe('MiscReportsFormComponent', () => {
  let component: MiscReportsFormComponent;
  let fixture: ComponentFixture<MiscReportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscReportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
