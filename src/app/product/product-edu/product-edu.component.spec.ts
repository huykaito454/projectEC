import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEduComponent } from './product-edu.component';

describe('ProductEduComponent', () => {
  let component: ProductEduComponent;
  let fixture: ComponentFixture<ProductEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
