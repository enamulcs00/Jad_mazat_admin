import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTypeRoutingModule } from './vehicle-type-routing.module';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiSwitchModule } from "ngx-ui-switch";
// import { NumberOnlyDirective } from '../directives/number-only/number-only.directive';

@NgModule({
  declarations: [VehicleTypeComponent],
  imports: [
    CommonModule,
    VehicleTypeRoutingModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
    UiSwitchModule
  ]
})
export class VehicleTypeModule { }
