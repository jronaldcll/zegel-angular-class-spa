import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimNotificationComponent } from './claim-notification.component';

describe('ClaimNotificationComponent', () => {
  let component: ClaimNotificationComponent;
  let fixture: ComponentFixture<ClaimNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
