import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGLogComponent } from './emp-glog.component';

describe('EmpGLogComponent', () => {
  let component: EmpGLogComponent;
  let fixture: ComponentFixture<EmpGLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpGLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
