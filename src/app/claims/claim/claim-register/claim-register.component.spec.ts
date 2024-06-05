import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimRegisterComponent } from './claim-register.component';

describe('ClaimRegisterComponent', () => {
  let component: ClaimRegisterComponent;
  let fixture: ComponentFixture<ClaimRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
