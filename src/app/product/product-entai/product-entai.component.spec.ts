import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEntaiComponent } from './product-entai.component';

describe('ProductEntaiComponent', () => {
  let component: ProductEntaiComponent;
  let fixture: ComponentFixture<ProductEntaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEntaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEntaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
