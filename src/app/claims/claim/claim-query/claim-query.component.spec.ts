import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimQueryComponent } from './claim-query.component';

describe('ClaimQueryComponent', () => {
  let component: ClaimQueryComponent;
  let fixture: ComponentFixture<ClaimQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
