import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpcomingComponent } from './product-upcoming.component';

describe('ProductUpcomingComponent', () => {
  let component: ProductUpcomingComponent;
  let fixture: ComponentFixture<ProductUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
