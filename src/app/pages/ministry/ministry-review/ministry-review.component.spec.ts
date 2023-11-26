import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryReviewComponent } from './ministry-review.component';

describe('MinistryReviewComponent', () => {
  let component: MinistryReviewComponent;
  let fixture: ComponentFixture<MinistryReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinistryReviewComponent]
    });
    fixture = TestBed.createComponent(MinistryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
