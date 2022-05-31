import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCertificateComponent } from './service-certificate.component';

describe('ServiceCertificateComponent', () => {
  let component: ServiceCertificateComponent;
  let fixture: ComponentFixture<ServiceCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
