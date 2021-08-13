import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxiBookingRoutingModule } from './taxi-booking-routing.module';
import { TaxiBookingComponent } from './taxi-booking/taxi-booking.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../pages/material/material.module";
import { ViewTaxiBookingComponent } from './view-taxi-booking/view-taxi-booking.component';
import { AddTaxiComponent } from './add-taxi/add-taxi.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { GooglePlaceModule} from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';

import { AgmDirectionModule } from 'agm-direction';
// import { AgmOverlays } from "agm-overlays";
@NgModule({
  declarations: [TaxiBookingComponent, ViewTaxiBookingComponent, AddTaxiComponent],
  imports: [
    CommonModule,
    TaxiBookingRoutingModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    GooglePlaceModule,
    AgmCoreModule,
    AgmDirectionModule,
    // AgmOverlays,

    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyDgWqhXSfEh-y2eBPFEH3mJ4wqcWsV4EJ8",
    //   libraries: ["geometry", "places", "drawing"]
    // })
  ]
})
export class TaxiBookingModule { }
