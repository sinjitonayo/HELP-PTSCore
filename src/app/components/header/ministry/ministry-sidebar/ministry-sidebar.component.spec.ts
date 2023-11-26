import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrySidebarComponent } from './ministry-sidebar.component';

describe('MinistrySidebarComponent', () => {
  let component: MinistrySidebarComponent;
  let fixture: ComponentFixture<MinistrySidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinistrySidebarComponent]
    });
    fixture = TestBed.createComponent(MinistrySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
