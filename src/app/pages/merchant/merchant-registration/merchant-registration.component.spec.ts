import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRegistrationComponent } from './merchant-registration.component';

describe('MerchantRegistrationComponent', () => {
  let component: MerchantRegistrationComponent;
  let fixture: ComponentFixture<MerchantRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantRegistrationComponent]
    });
    fixture = TestBed.createComponent(MerchantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
