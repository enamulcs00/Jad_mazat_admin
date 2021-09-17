(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vehicle-type-vehicle-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <!-- DataTales Example -->\r\n    <div class=\"card shadow mb-4\">\r\n\r\n\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\"> <h6 class=\"m-0 text-black\">Vehicle Types</h6></div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"addVehicleType()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Vehicle Type\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"filters_outer\">\r\n                <div class=\"user_filter\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"Search Vehicle Type\">\r\n                </div>\r\n                <div class=\"user_serch_btn\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" (click)=\"searchVehicleType()\">Search</button>\r\n                    <button type=\"reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"card-body table-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Image</th>\r\n                            <th>Name</th>\r\n                            <th style=\"min-width: 5rem;\">Min Fare</th>\r\n                            <th style=\"min-width: 5rem;\">Fare</th>\r\n                            <th>Seats</th>\r\n                            <!-- <th>Seat Type</th> -->\r\n                            <th style=\"min-width: 7rem;\">Vertical Type</th>\r\n                            <th style=\"min-width: 8rem;\">Created Date</th>\r\n                            <th style=\"min-width: 5rem;\">Status</th>\r\n                            <th style=\"min-width: 6rem;\">\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of vehicleList; let i = index\">\r\n                            <td>{{ i + serialNumber + 1 }}</td>\r\n                            <td>\r\n                                <img src=\"{{ imageUrl }}{{ item.image }}\" width=\"70px\" height=\"70px\" />\r\n                            </td>\r\n                            <td>{{ item.name }}</td>\r\n                            <td>{{ item.basefare }}</td>\r\n                            <td>{{ item.fare }}</td>\r\n                            <td>{{ item.seats }}</td>\r\n                            <!-- <td>{{ item.seatType }}</td> -->\r\n                            <td *ngIf=\"item.verticalType ==1\">Delivery</td>\r\n                            <td *ngIf=\"item.verticalType ==2\">Taxi</td>\r\n                            <td *ngIf=\"item.verticalType ==3\">Shuttle</td>\r\n                            <td>\r\n                                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n                            </td>\r\n                            <td>\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\" [(ngModel)]=\"item.status\" (ngModelChange)=\"updateActiveStatus(item)\" labelOff=\"OFF\">\r\n                                </ui-switch>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"deleteVehicle(item)\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"vehicleList && vehicleList.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <!-- <pagination\r\n          *ngIf=\"categoryList.length != 0 && !loader\"\r\n          [totalItems]=\"totalItems\"\r\n          [boundaryLinks]=\"true\"\r\n          [maxSize]=\"5\"\r\n          [(ngModel)]=\"currentPage\"\r\n          (pageChanged)=\"pageChange($event)\"\r\n        ></pagination> -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/cooldash/pages/vehicle-type/vehicle-type-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cooldash/pages/vehicle-type/vehicle-type-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: VehicleTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeRoutingModule", function() { return VehicleTypeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicle_type_vehicle_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-type/vehicle-type.component */ "./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.ts");




const routes = [
    {
        path: "",
        data: {
            title: "Category"
        },
        children: [
            {
                path: "vehicle-type",
                component: _vehicle_type_vehicle_type_component__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let VehicleTypeRoutingModule = class VehicleTypeRoutingModule {
};
VehicleTypeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VehicleTypeRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/vehicle-type/vehicle-type.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/cooldash/pages/vehicle-type/vehicle-type.module.ts ***!
  \********************************************************************/
/*! exports provided: VehicleTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeModule", function() { return VehicleTypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _vehicle_type_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-type-routing.module */ "./src/app/cooldash/pages/vehicle-type/vehicle-type-routing.module.ts");
/* harmony import */ var _vehicle_type_vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-type/vehicle-type.component */ "./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");





 // <-- import the module



// import { NumberOnlyDirective } from '../directives/number-only/number-only.directive';
let VehicleTypeModule = class VehicleTypeModule {
};
VehicleTypeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vehicle_type_vehicle_type_component__WEBPACK_IMPORTED_MODULE_4__["VehicleTypeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vehicle_type_routing_module__WEBPACK_IMPORTED_MODULE_3__["VehicleTypeRoutingModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"]
        ]
    })
], VehicleTypeModule);



/***/ }),

/***/ "./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 967px) {\n  .user_filter,\n.user_serch_btn {\n    margin-bottom: 10px;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 767px) {\n  .user_filter,\n.user_serch_btn {\n    justify-content: center;\n  }\n\n  .text-right.add_btn {\n    text-align: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdmVoaWNsZS10eXBlL3ZlaGljbGUtdHlwZS9DOlxcVXNlcnNcXHJhZ2h2XFxEZXNrdG9wXFxERVZcXFZlbmdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFx2ZWhpY2xlLXR5cGVcXHZlaGljbGUtdHlwZVxcdmVoaWNsZS10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy92ZWhpY2xlLXR5cGUvdmVoaWNsZS10eXBlL3ZlaGljbGUtdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztJQUVJLG1CQUFBO0lBQ0EseUJBQUE7RUNDTjtBQUNGO0FERUE7RUFDSTs7SUFFSSx1QkFBQTtFQ0FOOztFREVFO0lBQ0ksNkJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdmVoaWNsZS10eXBlL3ZlaGljbGUtdHlwZS92ZWhpY2xlLXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogOTY3cHgpIHtcclxuICAgIC51c2VyX2ZpbHRlcixcclxuICAgIC51c2VyX3NlcmNoX2J0biB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC51c2VyX2ZpbHRlcixcclxuICAgIC51c2VyX3NlcmNoX2J0biB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodC5hZGRfYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xuICAudXNlcl9maWx0ZXIsXG4udXNlcl9zZXJjaF9idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51c2VyX2ZpbHRlcixcbi51c2VyX3NlcmNoX2J0biB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAudGV4dC1yaWdodC5hZGRfYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.ts ***!
  \************************************************************************************/
/*! exports provided: VehicleTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeComponent", function() { return VehicleTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let VehicleTypeComponent = class VehicleTypeComponent {
    constructor(api, comm, dialogService) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.vehicleList = [];
        this.searchText = "";
    }
    ngOnInit() {
        this.imageUrl = this.comm.imageUrl;
        this.getVehicleTypes();
    }
    getVehicleTypes() {
        this.api.getAllVehicle().subscribe(response => {
            console.log(response["response"]);
            if (response["response"]["success"]) {
                this.vehicleList = response["data"];
                this.allData = this.vehicleList;
                for (var data of this.vehicleList) {
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
                // this.totalItems = response.count;
            }
            if (!response["success"])
                return;
        });
    }
    searchVehicleType() {
        this.vehicleList = this.allData.filter(row => row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    }
    onEditSelect(item) {
        this.dialogService.editVehicleType(item).subscribe(res => {
            if (res == "yes") {
                this.getVehicleTypes();
            }
        });
    }
    reset() {
        this.searchText = '';
        this.getVehicleTypes();
    }
    addVehicleType() {
        this.dialogService.addVehicleType().subscribe(res => {
            if (res == "yes") {
                this.getVehicleTypes();
            }
        });
    }
    deleteVehicle(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Vehicle Type!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    name: item.name,
                    updateId: item._id,
                    status: 2
                };
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("image", item.image);
                this.api.updateVehicle(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getVehicleTypes();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    updateActiveStatus(item) {
        var data = {
            name: item.name,
            updateId: item._id,
            status: item.status ? 1 : 0
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.updateVehicle(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getVehicleTypes();
            }
            if (!res["response"]["success"])
                return;
        });
    }
};
VehicleTypeComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] }
];
VehicleTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-type.component.scss */ "./src/app/cooldash/pages/vehicle-type/vehicle-type/vehicle-type.component.scss")).default]
    })
], VehicleTypeComponent);



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



/***/ })

}]);
//# sourceMappingURL=pages-vehicle-type-vehicle-type-module-es2015.js.map