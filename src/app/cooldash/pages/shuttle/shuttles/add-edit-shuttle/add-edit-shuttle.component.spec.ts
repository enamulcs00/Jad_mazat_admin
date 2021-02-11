import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditShuttleComponent } from './add-edit-shuttle.component';

describe('AddEditShuttleComponent', () => {
  let component: AddEditShuttleComponent;
  let fixture: ComponentFixture<AddEditShuttleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditShuttleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditShuttleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
