import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCardCopyComponent } from './emp-card-copy.component';

describe('EmpCardCopyComponent', () => {
  let component: EmpCardCopyComponent;
  let fixture: ComponentFixture<EmpCardCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCardCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCardCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
