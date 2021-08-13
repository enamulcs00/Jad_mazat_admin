import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVenderComponent } from './add-edit-vender.component';

describe('AddEditVenderComponent', () => {
  let component: AddEditVenderComponent;
  let fixture: ComponentFixture<AddEditVenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditVenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
