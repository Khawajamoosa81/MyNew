import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableEmpListComponent } from './disable-emp-list.component';

describe('DisableEmpListComponent', () => {
  let component: DisableEmpListComponent;
  let fixture: ComponentFixture<DisableEmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableEmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableEmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
