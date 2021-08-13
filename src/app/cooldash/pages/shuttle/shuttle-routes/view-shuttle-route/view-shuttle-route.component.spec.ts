import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShuttleRouteComponent } from './view-shuttle-route.component';

describe('ViewShuttleRouteComponent', () => {
  let component: ViewShuttleRouteComponent;
  let fixture: ComponentFixture<ViewShuttleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShuttleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShuttleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
