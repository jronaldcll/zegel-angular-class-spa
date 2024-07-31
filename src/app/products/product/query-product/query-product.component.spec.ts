import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryProductComponent } from './query-product.component';

describe('QueryProductComponent', () => {
  let component: QueryProductComponent;
  let fixture: ComponentFixture<QueryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
