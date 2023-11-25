import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRegistrationFormComponent } from './merchant-registration-form.component';

describe('MerchantRegistrationFormComponent', () => {
  let component: MerchantRegistrationFormComponent;
  let fixture: ComponentFixture<MerchantRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(MerchantRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
