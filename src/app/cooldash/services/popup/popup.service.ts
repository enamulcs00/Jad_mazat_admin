import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CategorymodalComponent } from "../../pages/restaurant/category/categorymodal/categorymodal.component";
import { ItemsModalComponent } from "../../pages/restaurant/order/items-modal/items-modal.component";
import { AcceptModalComponent } from "../../pages/restaurant/order/accept-modal/accept-modal.component";
import { OutletmodalComponent } from "../../pages/restaurant/restaurant/outletmodal/outletmodal.component";
import { StoreCategoryModalComponent } from '../../pages/store/category/storeCategoryModal/storeCategoryModal.component';
import { StoreOutletmodalComponent } from '../../pages/store/store/storeOutletModal/storeOutletModal.component';
import { RestaurantTypeModalComponent } from '../../pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component';
import { StoreTypeModalComponent } from '../../pages/store/store/food-type/store-type-modal/store-type-modal.component';
import { DocumentModalComponent } from '../../pages/driver/document-modal/document-modal.component';
import { AddVehicleModalComponent } from '../../pages/vehicle-type/add-vehicle-modal/add-vehicle-modal.component';
import { AddEditLocationComponent } from '../../pages/shuttle/location/add-edit-location/add-edit-location.component';
import { ShuttleRouteComponent } from '../../pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component';
import { AddShuttleRouteComponent } from '../../pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component';
import { ForgotPasswordModalComponent } from 'src/app/forgot-password/forgot-password-modal/forgot-password-modal.component';
import { InventoryModalComponent } from "../../pages/store/store/inventory/inventory-modal/inventory-modal.component";

@Injectable({
  providedIn: "root"
})
export class PopupService {
  constructor(public dialog: MatDialog) { }

  addRestaurant() {
    const dialogRef = this.dialog.open(CategorymodalComponent);
    return dialogRef.afterClosed();
  }

  editRestaurant(item) {
    const dialogRef = this.dialog.open(CategorymodalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  editDocument(item) {
    const dialogRef = this.dialog.open(DocumentModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  itemList(item) {
    const dialogRef = this.dialog.open(ItemsModalComponent);
    dialogRef.componentInstance.items = item;
    return dialogRef.afterClosed();
  }

  orderAcceptModal() {
    const dialogRef = this.dialog.open(AcceptModalComponent);
    return dialogRef.afterClosed();
  }

  addOutlet(id) {
    const dialogRef = this.dialog.open(OutletmodalComponent);
    dialogRef.componentInstance.restaurantId = id;
    return dialogRef.afterClosed();
  }

  editOutlet(item) {
    const dialogRef = this.dialog.open(OutletmodalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addShuttleLocation() {
    const dialogRef = this.dialog.open(AddEditLocationComponent);
    return dialogRef.afterClosed();
  }

  editShuttleLocation(item) {
    const dialogRef = this.dialog.open(AddEditLocationComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  // addShuttleRoute() {
  //   const dialogRef = this.dialog.open(AddShuttleRouteComponent);
  //   return dialogRef.afterClosed();
  // }

  editShuttleRoute(item) {
    const dialogRef = this.dialog.open(InventoryModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addStoreCategory() {
    const dialogRef = this.dialog.open(StoreCategoryModalComponent);
    return dialogRef.afterClosed();
  }

  addVehicleType() {
    const dialogRef = this.dialog.open(AddVehicleModalComponent);
    return dialogRef.afterClosed();
  }

  editVehicleType(item) {
    const dialogRef = this.dialog.open(AddVehicleModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  editStoreCategory(item) {
    const dialogRef = this.dialog.open(StoreCategoryModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addStoreOutlet(id) {
    const dialogRef = this.dialog.open(StoreOutletmodalComponent);
    dialogRef.componentInstance.storeId = id;
    return dialogRef.afterClosed();
  }

  editStoreOutlet(item) {
    const dialogRef = this.dialog.open(StoreOutletmodalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addStoreType(id) {
    const dialogRef = this.dialog.open(StoreTypeModalComponent);
    dialogRef.componentInstance.restaurantId = id;
    return dialogRef.afterClosed();
  }

  editStoreype(item) {
    const dialogRef = this.dialog.open(StoreTypeModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addType(id) {
    const dialogRef = this.dialog.open(RestaurantTypeModalComponent);
    dialogRef.componentInstance.restaurantId = id;
    return dialogRef.afterClosed();
  }

  editType(item) {
    const dialogRef = this.dialog.open(RestaurantTypeModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  
  forgotPasswordsendEmail() {
    const dialogRef = this.dialog.open(ForgotPasswordModalComponent);
    return dialogRef.afterClosed();
  }
}
