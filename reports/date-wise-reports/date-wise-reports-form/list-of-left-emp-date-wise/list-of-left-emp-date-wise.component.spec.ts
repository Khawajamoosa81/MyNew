import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLeftEmpDateWiseComponent } from './list-of-left-emp-date-wise.component';

describe('ListOfLeftEmpDateWiseComponent', () => {
  let component: ListOfLeftEmpDateWiseComponent;
  let fixture: ComponentFixture<ListOfLeftEmpDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfLeftEmpDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfLeftEmpDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
