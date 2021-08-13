import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaxiBookingComponent } from './view-taxi-booking.component';

describe('ViewTaxiBookingComponent', () => {
  let component: ViewTaxiBookingComponent;
  let fixture: ComponentFixture<ViewTaxiBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaxiBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaxiBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
