import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryDashboardComponent } from './ministry-dashboard.component';

describe('MinistryDashboardComponent', () => {
  let component: MinistryDashboardComponent;
  let fixture: ComponentFixture<MinistryDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinistryDashboardComponent]
    });
    fixture = TestBed.createComponent(MinistryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
