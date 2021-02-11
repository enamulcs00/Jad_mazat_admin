import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShuttleRouteComponent } from './add-shuttle-route.component';

describe('AddShuttleRouteComponent', () => {
  let component: AddShuttleRouteComponent;
  let fixture: ComponentFixture<AddShuttleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShuttleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShuttleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
