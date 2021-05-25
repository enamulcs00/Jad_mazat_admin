import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";

// import { ChartsModule } from 'ng2-charts';
import "hammerjs";
import { MaterialModule } from "./cooldash/pages/material/material.module";
import { CategorymodalComponent } from "./cooldash/pages/restaurant/category/categorymodal/categorymodal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ng6-toastr-notifications";
import { AngularWebStorageModule } from "angular-web-storage";
import { ItemsModalComponent } from "./cooldash/pages/restaurant/order/items-modal/items-modal.component";
import { AcceptModalComponent } from "./cooldash/pages/restaurant/order/accept-modal/accept-modal.component";
import { AuthGuard } from "./commonservice/auth.guard";
import { AuthguardGuardGuard } from "./commonservice/authguard-guard.guard";
import { OrderService } from "./cooldash/services/order.service";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
import { OutletmodalComponent } from "./cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component";
import { StoreCategoryModalComponent } from "./cooldash/pages/store/category/storeCategoryModal/storeCategoryModal.component";
import { StoreOutletmodalComponent } from "./cooldash/pages/store/store/storeOutletModal/storeOutletModal.component";
import { RestaurantTypeModalComponent } from "./cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component";
import { StoreTypeModalComponent } from "./cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component";
import { DocumentModalComponent } from "./cooldash/pages/driver/document-modal/document-modal.component";
import { AddVehicleModalComponent } from "./cooldash/pages/vehicle-type/add-vehicle-modal/add-vehicle-modal.component";
import { NumberModuleModule } from "./number-module/number-module.module";
import { AddEditLocationComponent } from "./cooldash/pages/shuttle/location/add-edit-location/add-edit-location.component";
import { ResetPasswordComponent } from "./forgot-password/reset-password.component";
import { ForgotPasswordModalComponent } from "./forgot-password/forgot-password-modal/forgot-password-modal.component";
import { NgxStarRatingModule } from "ngx-star-rating";
import { StarRatingModule } from "angular-star-rating";
import { InventoryModalComponent } from "./cooldash/pages/store/store/inventory/inventory-modal/inventory-modal.component";
import { ThemeService } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    CategorymodalComponent,
    ItemsModalComponent,
    AcceptModalComponent,
    OutletmodalComponent,
    StoreCategoryModalComponent,
    StoreOutletmodalComponent,
    RestaurantTypeModalComponent,
    StoreTypeModalComponent,
    DocumentModalComponent,
    AddVehicleModalComponent,
    AddEditLocationComponent,
    InventoryModalComponent,
    ResetPasswordComponent,
    ForgotPasswordModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularWebStorageModule,
    HttpClientModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmDirectionModule,
    GooglePlaceModule,
    NumberModuleModule,
    NgxStarRatingModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDgWqhXSfEh-y2eBPFEH3mJ4wqcWsV4EJ8",
      libraries: ["geometry", "places", "drawing"],
    }),
  ],
  providers: [AuthGuard, AuthguardGuardGuard, OrderService,ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [
    CategorymodalComponent,
    ItemsModalComponent,
    AcceptModalComponent,
    OutletmodalComponent,
    StoreCategoryModalComponent,
    InventoryModalComponent,
    StoreOutletmodalComponent,
    RestaurantTypeModalComponent,
    StoreTypeModalComponent,
    DocumentModalComponent,
    AddVehicleModalComponent,
    AddEditLocationComponent,
    ForgotPasswordModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
