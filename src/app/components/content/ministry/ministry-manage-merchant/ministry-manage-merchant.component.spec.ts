import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryManageMerchantComponent } from './ministry-manage-merchant.component';

describe('MinistryManageMerchantComponent', () => {
  let component: MinistryManageMerchantComponent;
  let fixture: ComponentFixture<MinistryManageMerchantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinistryManageMerchantComponent]
    });
    fixture = TestBed.createComponent(MinistryManageMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
