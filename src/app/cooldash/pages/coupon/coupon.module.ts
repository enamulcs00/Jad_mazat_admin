import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponComponent } from './coupon/coupon.component';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';
import { CouponRoutingModule } from './coupon-routing.module';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { UiSwitchModule } from "ngx-ui-switch";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NumberModuleModule } from '../../../number-module/number-module.module';

@NgModule({
  declarations: [CouponComponent, ViewCouponComponent, AddEditCouponComponent],
  imports: [
    CommonModule,
    CouponRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    UiSwitchModule,
    GooglePlaceModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PaginationModule.forRoot(),
    NumberModuleModule
  ]
})
export class CouponModule { }
