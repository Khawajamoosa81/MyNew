import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWiseEmpCountComponent } from './section-wise-emp-count.component';

describe('SectionWiseEmpCountComponent', () => {
  let component: SectionWiseEmpCountComponent;
  let fixture: ComponentFixture<SectionWiseEmpCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWiseEmpCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWiseEmpCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
