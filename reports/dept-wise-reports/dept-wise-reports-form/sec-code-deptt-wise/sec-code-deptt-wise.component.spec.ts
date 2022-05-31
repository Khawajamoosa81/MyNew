import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCodeDepttWiseComponent } from './sec-code-deptt-wise.component';

describe('SecCodeDepttWiseComponent', () => {
  let component: SecCodeDepttWiseComponent;
  let fixture: ComponentFixture<SecCodeDepttWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecCodeDepttWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecCodeDepttWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
