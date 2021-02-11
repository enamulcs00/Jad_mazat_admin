import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxiComponent } from './add-taxi.component';

describe('AddTaxiComponent', () => {
  let component: AddTaxiComponent;
  let fixture: ComponentFixture<AddTaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
