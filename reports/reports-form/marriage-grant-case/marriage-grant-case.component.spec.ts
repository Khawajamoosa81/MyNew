import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageGrantCaseComponent } from './marriage-grant-case.component';

describe('MarriageGrantCaseComponent', () => {
  let component: MarriageGrantCaseComponent;
  let fixture: ComponentFixture<MarriageGrantCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageGrantCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageGrantCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
