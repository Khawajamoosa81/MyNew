import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionFundAllowAndDedaComponent } from './union-fund-allow-and-deda.component';

describe('UnionFundAllowAndDedaComponent', () => {
  let component: UnionFundAllowAndDedaComponent;
  let fixture: ComponentFixture<UnionFundAllowAndDedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionFundAllowAndDedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionFundAllowAndDedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
