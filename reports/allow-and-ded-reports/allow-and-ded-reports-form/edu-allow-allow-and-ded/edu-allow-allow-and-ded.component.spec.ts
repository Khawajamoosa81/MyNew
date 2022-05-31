import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduAllowAllowAndDedComponent } from './edu-allow-allow-and-ded.component';

describe('EduAllowAllowAndDedComponent', () => {
  let component: EduAllowAllowAndDedComponent;
  let fixture: ComponentFixture<EduAllowAllowAndDedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduAllowAllowAndDedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduAllowAllowAndDedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
