import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver/driver.component';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DriverDocumentComponent } from './driver-document/driver-document.component';
import { ViewDriverComponent } from './view-driver/view-driver.component';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component';
// import { DocumentModalComponent } from './document-modal/document-modal.component'; // <-- import the module
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { UiSwitchModule } from "ngx-ui-switch";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {StarRatingModule} from 'angular-star-rating';
@NgModule({
  declarations: [DriverComponent, DriverDocumentComponent, ViewDriverComponent, AddEditDriverComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    UiSwitchModule,
    GooglePlaceModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxStarRatingModule,
    StarRatingModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DriverModule { }
