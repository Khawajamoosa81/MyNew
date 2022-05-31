import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCCertificateComponent } from './emp-ccertificate.component';

describe('EmpCCertificateComponent', () => {
  let component: EmpCCertificateComponent;
  let fixture: ComponentFixture<EmpCCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
