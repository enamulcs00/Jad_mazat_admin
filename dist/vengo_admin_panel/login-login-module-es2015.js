(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:140px\">\r\n  <!-- Outer Row -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\r\n        <div class=\"card-body p-0\">\r\n          <!-- Nested Row within Card Body -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"p-5\">\r\n                <div class=\"text-center\">\r\n                  <h1 class=\"h4 text-gray-900 mb-4\">Welcome!</h1>\r\n                </div>\r\n                <form class=\"user\" #loginForm=\"ngForm\" name=\"form\" (ngSubmit)=\"loginForm.form.valid && login()\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"email\" class=\"form-control form-control-user\" name=\"email\" id=\"exampleInputEmail\"\r\n                      [(ngModel)]=\"loginBody.email\" aria-describedby=\"emailHelp\"\r\n                      pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" placeholder=\"Enter Email Address...\" required />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"password\" class=\"form-control form-control-user\" name=\"password\"\r\n                      [(ngModel)]=\"loginBody.password\" id=\"exampleInputPassword\" placeholder=\"Password\" required />\r\n                  </div>\r\n\r\n                  <button class=\"btn btn-primary btn-user btn-block\" type=\"submit\"\r\n                    [disabled]=\"!loginForm.valid || flags.isLogin\">\r\n                    {{ flags.isLogin ? \"Hold on...\" : \"Login\" }}\r\n                  </button>\r\n\r\n\r\n\r\n\r\n                  <!-- <a\r\n                    href=\"javascript:void(0)\"\r\n                    data-toggle=\"modal\"\r\n                    data-target=\"#forgotPasswordModal\"\r\n                    >Forgot password</a\r\n                  > -->\r\n\r\n                </form>\r\n                <!-- <a  class=\"btn-forgot-password\" (click)=\"onForgotPassword()\">Forgot password</a> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-forgot-password-modal></app-forgot-password-modal> -->\r\n");

/***/ }),

/***/ "./src/app/cooldash/requests/login-body.ts":
/*!*************************************************!*\
  !*** ./src/app/cooldash/requests/login-body.ts ***!
  \*************************************************/
/*! exports provided: LoginBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBody", function() { return LoginBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoginBody {
}


/***/ }),

/***/ "./src/app/cooldash/services/popup/popup.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/cooldash/services/popup/popup.service.ts ***!
  \**********************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/restaurant/category/categorymodal/categorymodal.component */ "./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.ts");
/* harmony import */ var _pages_restaurant_order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/restaurant/order/items-modal/items-modal.component */ "./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.ts");
/* harmony import */ var _pages_restaurant_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/restaurant/order/accept-modal/accept-modal.component */ "./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.ts");
/* harmony import */ var _pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/restaurant/restaurant/outletmodal/outletmodal.component */ "./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.ts");
/* harmony import */ var _pages_store_category_storeCategoryModal_storeCategoryModal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/store/category/storeCategoryModal/storeCategoryModal.component */ "./src/app/cooldash/pages/store/category/storeCategoryModal/storeCategoryModal.component.ts");
/* harmony import */ var _pages_store_store_storeOutletModal_storeOutletModal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/store/store/storeOutletModal/storeOutletModal.component */ "./src/app/cooldash/pages/store/store/storeOutletModal/storeOutletModal.component.ts");
/* harmony import */ var _pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.ts");
/* harmony import */ var _pages_store_store_food_type_store_type_modal_store_type_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/store/store/food-type/store-type-modal/store-type-modal.component */ "./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.ts");
/* harmony import */ var _pages_driver_document_modal_document_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/driver/document-modal/document-modal.component */ "./src/app/cooldash/pages/driver/document-modal/document-modal.component.ts");
/* harmony import */ var _pages_vehicle_type_add_vehicle_modal_add_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/vehicle-type/add-vehicle-modal/add-vehicle-modal.component */ "./src/app/cooldash/pages/vehicle-type/add-vehicle-modal/add-vehicle-modal.component.ts");
/* harmony import */ var _pages_shuttle_location_add_edit_location_add_edit_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/shuttle/location/add-edit-location/add-edit-location.component */ "./src/app/cooldash/pages/shuttle/location/add-edit-location/add-edit-location.component.ts");
/* harmony import */ var src_app_forgot_password_forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/forgot-password/forgot-password-modal/forgot-password-modal.component */ "./src/app/forgot-password/forgot-password-modal/forgot-password-modal.component.ts");
/* harmony import */ var _pages_store_store_inventory_inventory_modal_inventory_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pages/store/store/inventory/inventory-modal/inventory-modal.component */ "./src/app/cooldash/pages/store/store/inventory/inventory-modal/inventory-modal.component.ts");
















let PopupService = class PopupService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    addRestaurant() {
        const dialogRef = this.dialog.open(_pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_3__["CategorymodalComponent"]);
        return dialogRef.afterClosed();
    }
    editRestaurant(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_3__["CategorymodalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    editDocument(item) {
        const dialogRef = this.dialog.open(_pages_driver_document_modal_document_modal_component__WEBPACK_IMPORTED_MODULE_11__["DocumentModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    itemList(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_4__["ItemsModalComponent"]);
        dialogRef.componentInstance.items = item;
        return dialogRef.afterClosed();
    }
    orderAcceptModal() {
        const dialogRef = this.dialog.open(_pages_restaurant_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_5__["AcceptModalComponent"]);
        return dialogRef.afterClosed();
    }
    addOutlet(id) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_6__["OutletmodalComponent"]);
        dialogRef.componentInstance.restaurantId = id;
        return dialogRef.afterClosed();
    }
    editOutlet(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_6__["OutletmodalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addShuttleLocation() {
        const dialogRef = this.dialog.open(_pages_shuttle_location_add_edit_location_add_edit_location_component__WEBPACK_IMPORTED_MODULE_13__["AddEditLocationComponent"]);
        return dialogRef.afterClosed();
    }
    editShuttleLocation(item) {
        const dialogRef = this.dialog.open(_pages_shuttle_location_add_edit_location_add_edit_location_component__WEBPACK_IMPORTED_MODULE_13__["AddEditLocationComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    // addShuttleRoute() {
    //   const dialogRef = this.dialog.open(AddShuttleRouteComponent);
    //   return dialogRef.afterClosed();
    // }
    editShuttleRoute(item) {
        const dialogRef = this.dialog.open(_pages_store_store_inventory_inventory_modal_inventory_modal_component__WEBPACK_IMPORTED_MODULE_15__["InventoryModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addStoreCategory() {
        const dialogRef = this.dialog.open(_pages_store_category_storeCategoryModal_storeCategoryModal_component__WEBPACK_IMPORTED_MODULE_7__["StoreCategoryModalComponent"]);
        return dialogRef.afterClosed();
    }
    addVehicleType() {
        const dialogRef = this.dialog.open(_pages_vehicle_type_add_vehicle_modal_add_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_12__["AddVehicleModalComponent"]);
        return dialogRef.afterClosed();
    }
    editVehicleType(item) {
        const dialogRef = this.dialog.open(_pages_vehicle_type_add_vehicle_modal_add_vehicle_modal_component__WEBPACK_IMPORTED_MODULE_12__["AddVehicleModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    editStoreCategory(item) {
        const dialogRef = this.dialog.open(_pages_store_category_storeCategoryModal_storeCategoryModal_component__WEBPACK_IMPORTED_MODULE_7__["StoreCategoryModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addStoreOutlet(id) {
        const dialogRef = this.dialog.open(_pages_store_store_storeOutletModal_storeOutletModal_component__WEBPACK_IMPORTED_MODULE_8__["StoreOutletmodalComponent"]);
        dialogRef.componentInstance.storeId = id;
        return dialogRef.afterClosed();
    }
    editStoreOutlet(item) {
        const dialogRef = this.dialog.open(_pages_store_store_storeOutletModal_storeOutletModal_component__WEBPACK_IMPORTED_MODULE_8__["StoreOutletmodalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addStoreType(id) {
        const dialogRef = this.dialog.open(_pages_store_store_food_type_store_type_modal_store_type_modal_component__WEBPACK_IMPORTED_MODULE_10__["StoreTypeModalComponent"]);
        dialogRef.componentInstance.restaurantId = id;
        return dialogRef.afterClosed();
    }
    editStoreype(item) {
        const dialogRef = this.dialog.open(_pages_store_store_food_type_store_type_modal_store_type_modal_component__WEBPACK_IMPORTED_MODULE_10__["StoreTypeModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addType(id) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantTypeModalComponent"]);
        dialogRef.componentInstance.restaurantId = id;
        return dialogRef.afterClosed();
    }
    editType(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantTypeModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    forgotPasswordsendEmail() {
        const dialogRef = this.dialog.open(src_app_forgot_password_forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordModalComponent"]);
        return dialogRef.afterClosed();
    }
};
PopupService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PopupService);



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form.user .btn-user {\n  padding: 0.75rem 4rem !important;\n  margin: auto !important;\n}\n\n.btn-block {\n  width: auto !important;\n}\n\n.btn-forgot-password {\n  cursor: pointer;\n}\n\n/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZDI4QXByaWwvbWF6YXRfYWRtaW5fcGFuZWwvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBLDhFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtLnVzZXIgLmJ0bi11c2VyIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDRyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibG9jayB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1mb3Jnb3QtcGFzc3dvcmR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovIiwiZm9ybS51c2VyIC5idG4tdXNlciB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gNHJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZm9yZ290LXBhc3N3b3JkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovIl19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cooldash_requests_login_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cooldash/requests/login-body */ "./src/app/cooldash/requests/login-body.ts");
/* harmony import */ var _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cooldash/services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _cooldash_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cooldash/services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var _cooldash_services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cooldash/services/order.service */ "./src/app/cooldash/services/order.service.ts");









let LoginComponent = class LoginComponent {
    constructor(api, localStorage, router, toastr, dialogService, orderService) {
        this.api = api;
        this.localStorage = localStorage;
        this.router = router;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.orderService = orderService;
        this.loginBody = new _cooldash_requests_login_body__WEBPACK_IMPORTED_MODULE_2__["LoginBody"]();
        this.errorMessage = "Error";
        this.flags = {
            isLogin: false,
            isError: false,
        };
    }
    ngOnInit() {
        if (localStorage.getItem("token")) {
            this.router.navigateByUrl("/dashboard");
        }
    }
    login() {
        let query;
        this.flags.isLogin = true;
        this.loginBody.vericalType = 1;
        this.api.singIn(this.loginBody).subscribe((response) => {
            if (response["response"]["success"]) {
                localStorage.setItem("token", JSON.stringify(response["data"].authToken));
                localStorage.setItem("id", response["data"]._id);
                const data = {
                    "adminId": response["data"]._id
                };
                this.orderService.addAdmin(data).subscribe((res) => {
                    this.toastr.successToastr(res.sucess);
                });
                localStorage.setItem("language", "English");
                localStorage.setItem("admin", JSON.stringify(response["data"]));
                localStorage.setItem("role", JSON.stringify(response["data"].role));
                if (response["data"].role == "SubAdmin") {
                    localStorage.setItem("access", JSON.stringify(response["data"].access));
                }
                this.router.navigateByUrl("/dashboard");
            }
            else {
                this.flags.isLogin = false;
                this.toastr.errorToastr(response["response"]["message"]);
                this.flags.isError = true;
            }
        });
    }
    onForgotPassword() {
        this.dialogService.forgotPasswordsendEmail().subscribe((res) => {
            console.log(res);
            if (res != undefined) {
                if (res["response"] == "yes" &&
                    res["email"] != "" &&
                    res["email"] != undefined) {
                    var data = {
                        email: res.email,
                        verticalType: 4,
                    };
                    this.api.forgotPasswordSendEmail(data).subscribe((response) => {
                        if (response["response"]["success"]) {
                            this.toastr.successToastr("Reset password link sent successfully");
                        }
                        else {
                            this.toastr.errorToastr(response["response"]["message"]);
                        }
                    });
                }
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"] },
    { type: _cooldash_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"] },
    { type: _cooldash_services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");






let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map