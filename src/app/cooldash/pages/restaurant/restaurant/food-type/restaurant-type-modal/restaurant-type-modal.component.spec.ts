import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTypeModalComponent } from './restaurant-type-modal.component';

describe('RestaurantTypeModalComponent', () => {
  let component: RestaurantTypeModalComponent;
  let fixture: ComponentFixture<RestaurantTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
