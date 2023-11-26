import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryDashboardContentComponent } from './ministry-dashboard-content.component';

describe('MinistryDashboardContentComponent', () => {
  let component: MinistryDashboardContentComponent;
  let fixture: ComponentFixture<MinistryDashboardContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinistryDashboardContentComponent]
    });
    fixture = TestBed.createComponent(MinistryDashboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
