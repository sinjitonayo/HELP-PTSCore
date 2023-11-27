import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantReviewModalComponent } from './merchant-review-modal.component';

describe('MerchantReviewModalComponent', () => {
  let component: MerchantReviewModalComponent;
  let fixture: ComponentFixture<MerchantReviewModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantReviewModalComponent]
    });
    fixture = TestBed.createComponent(MerchantReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
