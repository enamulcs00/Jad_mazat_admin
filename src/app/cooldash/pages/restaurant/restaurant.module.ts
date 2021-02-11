import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RestaurantRoutingModule } from "./restaurant-routing.module";
import { CategoryComponent } from "./category/category.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { UiSwitchModule } from "ngx-ui-switch";
import { AddRestaurantComponent } from "./restaurant/add-restaurant/add-restaurant.component";
import { ViewRestaurantComponent } from "./restaurant/view-restaurant/view-restaurant.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { OrderComponent } from "./order/order.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { OutletComponent } from './restaurant/outlet/outlet.component';
import { FoodTypeComponent } from './restaurant/food-type/food-type.component';
import { FoodItemComponent } from './restaurant/food-item/food-item.component';
import { AddFoodItemComponent } from './restaurant/food-item/add-food-item/add-food-item.component';
import { SettingsComponent } from './restaurant/settings/settings.component';
// import { RestaurantTypeModalComponent } from './restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { PaginationModule } from 'ngx-bootstrap';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NumberModuleModule } from '../../../number-module/number-module.module';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    CategoryComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    ViewRestaurantComponent,
    OrderComponent,
    OutletComponent,
    FoodTypeComponent,
    FoodItemComponent,
    AddFoodItemComponent,
    SettingsComponent,
    ViewOrderComponent
    // RestaurantTypeModalComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    NgMultiSelectDropDownModule.forRoot(),
    GooglePlaceModule,
    PaginationModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxPaginationModule,
    NumberModuleModule,
    NgxStarRatingModule
  ],
  exports: [
    AddRestaurantComponent
  ],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RestaurantModule { }
