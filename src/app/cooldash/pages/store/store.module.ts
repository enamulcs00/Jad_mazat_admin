import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiSwitchModule } from "ngx-ui-switch";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { OrderComponent } from "./order/order.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { StoreRoutingModule } from "./store-routing.module";
import { ItemsModalComponent } from "./order/items-modal/items-modal.component";
import { CategoryComponent } from "./category/category.component";
import { StoreComponent } from './store/store.component';
import { ViewStoreComponent } from "./store/view-store/view-store.component";
import { OutletComponent } from "./store/outlet/outlet.component";
import { FoodTypeComponent } from './store/food-type/food-type.component';
import { FoodItemComponent } from './store/food-item/food-item.component';
import { AddStoreComponent } from "./store/add-store/add-store.component";
import { AddFoodItemComponent } from './store/food-item/add-food-item/add-food-item.component';
import { SettingsComponent } from './store/settings/settings.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { PaginationModule } from 'ngx-bootstrap';
import { NumberModuleModule } from '../../../number-module/number-module.module';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { InventoryComponent } from './store/inventory/inventory.component';
// import { InventoryModalComponent } from './store/inventory/inventory-modal/inventory-modal.component';
@NgModule({
  declarations: [SettingsComponent, AddFoodItemComponent, AddStoreComponent, OutletComponent, FoodItemComponent, FoodTypeComponent, OrderComponent, ItemsModalComponent, CategoryComponent, StoreComponent, ViewStoreComponent, ViewOrderComponent, InventoryComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    NgMultiSelectDropDownModule.forRoot(),
    GooglePlaceModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    NumberModuleModule,
    NgxStarRatingModule
  ],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StoreModule { }
