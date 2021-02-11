import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttleRouteComponent } from './shuttle-route.component';

describe('ShuttleRouteComponent', () => {
  let component: ShuttleRouteComponent;
  let fixture: ComponentFixture<ShuttleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuttleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuttleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
