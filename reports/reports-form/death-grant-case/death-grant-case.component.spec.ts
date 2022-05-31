import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathGrantCaseComponent } from './death-grant-case.component';

describe('DeathGrantCaseComponent', () => {
  let component: DeathGrantCaseComponent;
  let fixture: ComponentFixture<DeathGrantCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathGrantCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathGrantCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
