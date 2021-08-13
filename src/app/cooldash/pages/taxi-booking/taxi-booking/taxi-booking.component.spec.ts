import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiBookingComponent } from './taxi-booking.component';

describe('TaxiBookingComponent', () => {
  let component: TaxiBookingComponent;
  let fixture: ComponentFixture<TaxiBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
