import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShuttleComponent } from './view-shuttle.component';

describe('ViewShuttleComponent', () => {
  let component: ViewShuttleComponent;
  let fixture: ComponentFixture<ViewShuttleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShuttleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShuttleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
