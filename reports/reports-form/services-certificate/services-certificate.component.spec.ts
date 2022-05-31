import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCertificateComponent } from './services-certificate.component';

describe('ServicesCertificateComponent', () => {
  let component: ServicesCertificateComponent;
  let fixture: ComponentFixture<ServicesCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
