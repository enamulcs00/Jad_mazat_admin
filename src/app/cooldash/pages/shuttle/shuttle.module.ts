import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from "ngx-ui-switch";
import { ShuttleComponent } from './shuttles/shuttle/shuttle.component';
import { ShuttleRoutingModule } from './shuttle-routing.module';
import { LocationComponent } from './location/location/location.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ShuttleRouteComponent } from './shuttle-routes/shuttle-route/shuttle-route.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddShuttleRouteComponent } from './shuttle-routes/add-shuttle-route/add-shuttle-route.component';
import { NumberModuleModule } from '../../../number-module/number-module.module';
import { ViewShuttleRouteComponent } from './shuttle-routes/view-shuttle-route/view-shuttle-route.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { PaginationModule } from 'ngx-bootstrap';
import { MaterialModule } from "../../pages/material/material.module";
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { AddEditShuttleComponent } from './shuttles/add-edit-shuttle/add-edit-shuttle.component';
import { ViewShuttleComponent } from './shuttles/view-shuttle/view-shuttle.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { BookingsComponent } from './bookings/bookings.component';
import { ViewBookingComponent } from './bookings/view-booking/view-booking.component';
import { OverviewComponent } from './overview/overview.component';
import { VenderListComponent } from './vender/vender-list/vender-list.component';
import { AddEditVenderComponent } from './vender/add-edit-vender/add-edit-vender.component';

export const MY_NATIVE_FORMATS = {
  fullPickerInput: {
    year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
  },
  datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false },
  timePickerInput: { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false },
  monthYearLabel: { year: 'numeric', month: 'short' },
  dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
  monthYearA11yLabel: { year: 'numeric', month: 'long' },
};

@NgModule({
  declarations: [ShuttleComponent, LocationComponent, ShuttleRouteComponent, AddShuttleRouteComponent, ViewShuttleRouteComponent, AddEditShuttleComponent, ViewShuttleComponent, BookingsComponent, ViewBookingComponent, OverviewComponent, VenderListComponent, AddEditVenderComponent],
  imports: [
    CommonModule,
    ShuttleRoutingModule,
    GooglePlaceModule,
    FormsModule, ReactiveFormsModule,
    NumberModuleModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SelectDropDownModule,
    MaterialModule,
    UiSwitchModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS },
  ]
})
export class ShuttleModule { }
