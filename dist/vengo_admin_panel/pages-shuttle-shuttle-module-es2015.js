(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shuttle-shuttle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/bookings/bookings.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/bookings/bookings.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 user_title\">\r\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Bookings</h6>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-4 user_filter\">\r\n                    <select name=\"searchType\" [(ngModel)]=\"searchType\">\r\n                        <option value=\"0\"><span class=\"plchdr\">Select Search Option</span></option>\r\n                        <option value=\"1\">Order No</option>\r\n                        <option value=\"2\">User First Name</option>\r\n                        <option value=\"7\">Driver First Name</option>\r\n                        <option value=\"3\">Shuttle</option>\r\n                        <option value=\"4\">Route</option>\r\n                        <option value=\"5\">Source</option>\r\n                        <option value=\"6\">Destination</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-4 user_filter\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"Search Name\">\r\n                </div>\r\n                <div class=\"col-md-12 col-lg-4 user_serch_btn\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" (click)=\"searchBookings()\">Search</button>\r\n                    <button type=\"reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th style=\"min-width: 6rem;\">Booking No.</th>\r\n                            <th style=\"min-width: 10rem;\">Source</th>\r\n                            <th style=\"min-width: 17rem;\">Destination</th>\r\n                            <th style=\"min-width: 7rem;\">Driver Name</th>\r\n                            <th style=\"min-width: 7rem;\">User Name</th>\r\n                            <th style=\"min-width: 8rem;\">Shuttle Name</th>\r\n                            <th style=\"min-width: 9rem;\">Shuttle Type</th>\r\n                            <th>Fare</th>\r\n                            <th style=\"min-width: 7rem;\">No Of Seat</th>\r\n                            <!-- <th>Booking From</th> -->\r\n                            <th style=\"min-width: 8rem;\">Booking Date</th>\r\n                            <th style=\"min-width: 7rem;\">Booking Status</th>\r\n                            <th>\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of orderList | paginate: config; let i = index\">\r\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\r\n                            <td>{{ item.shuttleOrderNo }}</td>\r\n                            <td>{{ item.source.address }}</td>\r\n                            <td>{{ item.destination.address }}</td>\r\n                            <td>{{ item.driverId.firstName }} {{ item.driverId.lastName }}</td>\r\n                            <td>\r\n                                <span *ngIf=\"item.userId\">{{ item.userId.firstName }} {{ item.userId.lastName }}</span>\r\n                                <span *ngIf=\"!item.userId\">{{ item.userFirstName }} {{ item.userLastName }}</span>\r\n                            </td>\r\n                            <td>{{ item.shuttleId.name }}</td>\r\n                            <td>{{ item.shuttleType }}</td>\r\n                            <td>{{ item.totalAmount }}</td>\r\n                            <td>{{ item.seatNumber.length }}</td>\r\n                            <!-- <td>{{ item.bookingType ? 'Driver' : 'User' }}</td> -->\r\n                            <td>{{ item.bookingDate }}</td>\r\n                            <td><span *ngIf=\"item.status <= 1\" class=\"text-warning\"> Upcomming</span>\r\n                                <span *ngIf=\"item.status == 3\" class=\"text-primary\"> On The Way</span>\r\n                                <span *ngIf=\"item.status == 4\" class=\"text-success\"> Completed</span>\r\n                                <span *ngIf=\"item.status == 11\" class=\"text-danger\"> Canceled</span>\r\n                            </td>\r\n                            <td class=\"product_action\">\r\n                                <button class=\"btn btn-warning mr-1 mt-1 mb-1\" (click)=\"viewBooking(item)\">\r\n                                    <span class=\"fas fa-eye\"></span>\r\n                                </button>\r\n                                <button class=\"btn btn-danger mr-1 mt-1 mb-1\" *ngIf=\"item.status <= 1 && checkDate(item.bookingEndTime)\" (click)=\"bookingCancel(item)\">\r\n                                    Cancel\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"orderList && orderList.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <div *ngIf=\"orderList && orderList.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"orderDetail\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">View Booking</h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div *ngIf=\"orderDetail\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Booking Number</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{orderDetail.shuttleOrderNo}}\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>User Name</label>\r\n                            <input *ngIf=\"orderDetail.userId\" type=\"text\" name=\"Name\" [value]=\"orderDetail.userId.firstName +' '+ orderDetail.userId.lastName\" class=\"form-control\" disabled />\r\n                            <input *ngIf=\"!orderDetail.userId\" type=\"text\" name=\"Name\" [value]=\"orderDetail.userFirstName +' '+ orderDetail.userLastName\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Source</label>\r\n                            <textarea type=\"text\" name=\"Name\" class=\"form-control\" disabled>{{ orderDetail.source.address}}\r\n                                </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Destination</label>\r\n                            <textarea type=\"text\" name=\"Name\" class=\"form-control\" disabled>{{ orderDetail.destination.address}}\r\n                                </textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name</label>\r\n                            <input type=\"text\" name=\"name\" [value]=\"orderDetail.driverId.firstName+' '+orderDetail.driverId.lastName\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Shuttle Name</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.shuttleId.name\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Route Name</label>\r\n                            <input type=\"text\" name=\"charge\" [value]=\"orderDetail.shuttleRouteId.name\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Trip Time</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.tripTime\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Booking Start Time</label>\r\n                            <input type=\"text\" name=\"charge\" [value]=\"orderDetail.startTime\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Booking End Time</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.endTime\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"orderDetail.couponCode && orderDetail.couponDiscount \">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Coupon Code</label>\r\n                            <input type=\"text\" name=\"charge\" [value]=\"orderDetail.startTime\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Coupon Discount</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.endTime\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Sub Total Amount</label>\r\n                            <input type=\"text\" name=\"subtotal\" [value]=\"orderDetail.subTotalAmount\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Amount</label>\r\n                            <input type=\"text\" name=\"totalamount\" [value]=\"orderDetail.totalAmount\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Payment Mode</label>\r\n                            <input type=\"text\" name=\"mode\" [value]=\"orderDetail.paymentMode\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Order Date</label>\r\n                            <input type=\"text\" name=\"date\" [value]=\"orderDetail.bookingDate\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Vehicle Numbers</label>\r\n                            <input type=\"text\" name=\"type\" [value]=\"orderDetail.driverId.vehicleNumber\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Shuttle Type</label>\r\n                            <input type=\"text\" name=\"type\" [value]=\"orderDetail.shuttleType == 'ac' ? 'AC' : 'Non-Ac'\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Booked Seat Numbers</label>\r\n                            <ul class=\"list-inline\">\r\n                                <li *ngFor=\"let seat of orderDetail.seatNumber\">\r\n                                    {{ seat}}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/location/location/location.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/location/location/location.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <!-- DataTales Example -->\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Locations</h6>\r\n                </div>\r\n                <div class=\"col-md-6 text-right\">\r\n                    <button class=\"btn btn-primary\" (click)=\"addLocation()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Location\r\n                    </button>\r\n                    <!-- <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Address</th>\r\n                            <th>Status</th>\r\n                            <th>\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"outlet && outlet.length > 0\">\r\n                        <tr *ngFor=\"let item of outlet | paginate: config; let i = index\">\r\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\r\n                            <td>{{ item.address }}</td>\r\n                            <td>\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\" (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\">\r\n                                </ui-switch>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-primary mr-1\" title=\"Edit\" (click)=\"onEditSelect(item)\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger\" title=\"Delete\" (click)=\"deleteLocation(item)\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"outlet && outlet.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <div *ngIf=\"outlet && outlet.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/overview/overview.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/overview/overview.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <!-- DataTales Example -->\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 user_title\">\r\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Overview</h6>\r\n                </div>\r\n                <!-- <div class=\"col-md-2 user_filter\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\"\r\n                    placeholder=\"Search Name\">\r\n                </div> -->\r\n                <div class=\"col-md-6 col-lg-4 col-8 user_filter\">\r\n                    <input class=\"form_control dtpcker\" matInput [matDatepicker]=\"startdate\" [formControl]=\"date1\" (dateInput)=\"getStartDate($event)\" placeholder=\"Select Date\" readonly>\r\n                    <mat-datepicker-toggle [for]=\"startdate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startdate></mat-datepicker>\r\n                </div>\r\n                <div class=\"col-md-3 col-lg-3 col-4 user_serch_btn\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-2 pr-2\" (click)=\"search()\">Search</button>\r\n                    <!-- <button type=\"reset\" class=\"btn btn-primary pl-3 pr-3 ml-2\" (click)=\"reset()\">Reset</button> -->\r\n                    <!-- </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th style=\"min-width: 8rem;\">Shuttle Name</th>\r\n                            <th style=\"min-width: 8rem;\">Route Name</th>\r\n                            <th style=\"min-width: 7rem;\">Total Seats</th>\r\n                            <th style=\"min-width: 7rem;\">Booked Seats</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"list && list.length > 0\">\r\n                        <tr *ngFor=\"let item of list | paginate: config; let i = index\">\r\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\r\n                            <td>{{ item.shuttleName }}</td>\r\n                            <td>{{ item.routeName }}</td>\r\n                            <td>{{ item.totalSeats }}</td>\r\n                            <td>{{ item.bookedseats }}</td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"list && list.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <div *ngIf=\"list && list.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"!id\">\r\n                                Add Shuttle Route\r\n                            </h6>\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"id\">\r\n                                Edit Shuttle Route\r\n                            </h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body add_driver_outer\">\r\n            <form [formGroup]=\"shuttleRouteForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" maxlength=\"25\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleRouteForm.controls.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleRouteForm.controls.name.errors.required\">\r\n                                Name is required\r\n                            </div>\r\n                            <!-- <div *ngIf=\"shuttleRouteForm.controls.name.errors.maxlength\">\r\n                                Name can be max 20 characters long.\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group col-md-6\">\r\n                        <label for=\"title\">Start Point</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" (change)='onOptionsSelected($event.target.value,\"startPoint\")' formControlName=\"startPoint\" *ngIf=\"outlet\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let type of outlet\" [value]=\"type._id\">\r\n                                    {{ type.address }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleRouteForm.controls.startPoint.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleRouteForm.controls.startPoint.errors.required\">\r\n                                Start Point is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Start Time</label>\r\n                        <div class=\"input-group\">\r\n                            <input readonly class=\"form-control timefld\" formControlName=\"startTime\" [owlDateTime]=\"dt1\" placeholder=\"Time\" (dateTimeChange)=\"onStartTimeChange($event)\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt1\"><i\r\n                                        class=\"fa fa-calendar\"></i></span>\r\n                            </div>\r\n                            <owl-date-time #dt1 [pickerType]=\"'timer'\" [showSecondsTimer]=\"true\" [hour12Timer]=\"false\">\r\n                            </owl-date-time>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleRouteForm.controls.startTime.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleRouteForm.controls.startTime.errors.required\">\r\n                                Start Time is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">End Time</label>\r\n                        <div class=\"input-group\">\r\n                            <input readonly class=\"form-control timefld\" [min]=\"startTime\" formControlName=\"endTime\" [owlDateTime]=\"dt2\" placeholder=\"Time\" (dateTimeChange)=\"onEndTimeChange($event)\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt2\"><i\r\n                                        class=\"fa fa-calendar\"></i></span>\r\n                            </div>\r\n                            <owl-date-time #dt2 [pickerType]=\"'timer'\" [showSecondsTimer]=\"true\" [hour12Timer]=\"false\">\r\n                            </owl-date-time>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleRouteForm.controls.endTime.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleRouteForm.controls.endTime.errors.required\">\r\n                                End Time is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div formArrayName=\"stopPoints\">\r\n                    <div class=\"row\" *ngFor=\"let item of stopPoints.controls; let pointIndex=index\">\r\n                        <div class=\"form-group col-md-12 col-lg-6\" [formGroupName]=\"pointIndex\">\r\n                            <label for=\"title\">Stop Points</label>\r\n                            <div class=\"input-group\">\r\n                                <select class=\"form-control\" (change)='onOptionsSelected($event.target.value, \"stopPoint\")' formControlName=\"coordinates\" *ngIf=\"outlet\">\r\n                                    <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                    <option *ngFor=\"let type of outlet\" [value]=\"type._id\">\r\n                                        {{ type.address }}\r\n                                    </option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted &&  item.controls.coordinates.errors\" class=\" invalid-feedback\">\r\n                                    <div *ngIf=\"item.hasError('required', 'coordinates')\"> Stop Point is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4 col-lg-2\" [formGroupName]=\"pointIndex\">\r\n                            <label for=\"title\">Fare</label>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"number\" appNumberOnly id=\"name\" class=\"form-control\" formControlName=\"fare\" placeholder=\"\" />\r\n                            </div>\r\n                            <div *ngIf=\"submitted && (item.controls.fare.errors)\" class=\" invalid-feedback\">\r\n                                <div *ngIf=\"item.hasError('required', 'fare')\"> Fare is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\" form-group col-md-4 col-lg-3\" [formGroupName]=\"pointIndex\">\r\n                            <label for=\"title\">Time</label>\r\n                            <div class=\"input-group\">\r\n                                <input readonly class=\"form-control timefld\" [min]=\"startTime\" [max]=\"endTime\" formControlName=\"time\" [owlDateTime]=\"dt3\" placeholder=\"Time\">\r\n                                <div class=\"input-group-append\">\r\n                                    <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt3\"><i class=\"fa fa-calendar\"></i></span>\r\n                                </div>\r\n                                <owl-date-time #dt3 [pickerType]=\"'timer'\" [showSecondsTimer]=\"true\" [hour12Timer]=\"false\">\r\n                                </owl-date-time>\r\n                            </div>\r\n                            <div *ngIf=\"submitted && (item.controls.time.errors)\" class=\" invalid-feedback\">\r\n                                <div *ngIf=\"item.hasError('required', 'time')\"> Time is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-2 col-lg-1 d-flex align-items-end\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" title=\"Delete Stop Point\" (click)=\"deleteStopPoint(pointIndex)\">\r\n                                <span class=\"fas fa-fw fa-trash\"></span></button>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-success mb-3\" (click)=\"addStopPoint()\">Add More Stop\r\n                        Points</button>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\" form-group col-md-6\">\r\n                        <label for=\"title\">End Point</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" (change)='onOptionsSelected($event.target.value,\"endPoint\")' formControlName=\"endPoint\" *ngIf=\"outlet\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let type of outlet\" [value]=\"type._id\">\r\n                                    {{ type.address }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleRouteForm.controls.endPoint.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleRouteForm.controls.endPoint.errors.required\">\r\n                                End Point is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Total Fare</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" appNumberOnly id=\"name\" class=\"form-control\" formControlName=\"totalFare\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleRouteForm.controls.totalFare.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleRouteForm.controls.totalFare.errors.required\">\r\n                                Total Fare is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Vender Name</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" formControlName=\"venderId\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let vender of venders\" [value]=\"vender._id\">\r\n                                    {{ vender.firstName }} {{ vender.lastName }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group form-actions add_edit\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n                        Add\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n                        Update\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <!-- DataTales Example -->\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Shuttle Routes</h6>\r\n                </div>\r\n                <div class=\"col-md-6 text-right\">\r\n                    <button class=\"btn btn-primary\" (click)=\"addShuttleRoute()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Shuttle Route\r\n                    </button>\r\n                    <!-- <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Name</th>\r\n                            <th style=\"min-width: 8rem;\">Vender Name</th>\r\n                            <th style=\"min-width: 15rem;\">Start Point</th>\r\n                            <!-- <th>Stop Point</th> -->\r\n                            <th style=\"min-width: 15rem;\">End Point</th>\r\n                            <th style=\"min-width: 5rem;\">Status</th>\r\n                            <th style=\"min-width: 8rem;\">\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"shuttleRoute && shuttleRoute.length > 0\">\r\n                        <tr *ngFor=\"let item of shuttleRoute | paginate: config; let i = index\">\r\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\r\n                            <td>{{ item.name }}</td>\r\n                            <td><span *ngIf=\"item.venderId\">{{ item.venderId.firstName }}\r\n                                    {{ item.venderId.lastName }}</span></td>\r\n                            <td *ngIf=\"item.startPoint && item.startPoint.length>0\">{{ item.startPoint[0].address }}\r\n                            </td>\r\n                            <!-- <td *ngIf=\"item.stopPoints && item.stopPoints.length>0\">\r\n                                {{ item.stopPoints[0].coordinates.address }}\r\n                            </td> -->\r\n                            <td *ngIf=\"item.endPoint && item.endPoint.length>0\">{{ item.endPoint[0].address }}</td>\r\n                            <td>\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\" (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\">\r\n                                </ui-switch>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-warning mr-1\" title=\"View Shuttle Route\" (click)=\"viewShuttleRoute(item)\" title=\"View\">\r\n                                        <span class=\"fas fa-fw fa-eye\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-primary mr-1\" (click)=\"editShuttleRoute(item)\" title=\"Edit Shuttle Route\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"deleteShuttleRoute(item)\" title=\"Delete\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"shuttleRoute && shuttleRoute.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <div *ngIf=\"shuttleRoute && shuttleRoute.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div>\r\n            <!-- <pagination\r\n            *ngIf=\"categoryList.length != 0 && !loader\"\r\n            [totalItems]=\"totalItems\"\r\n            [boundaryLinks]=\"true\"\r\n            [maxSize]=\"5\"\r\n            [(ngModel)]=\"currentPage\"\r\n            (pageChanged)=\"pageChange($event)\"\r\n          ></pagination> -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">View Shuttle Route</h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" *ngIf=\"shuttleDetail\">\r\n            <div *ngIf=\"shuttleDetail\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Name</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.name}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"form-group\" *ngIf=\"shuttleDetail.startPoint && shuttleDetail.startPoint.length>0\">\r\n                            <label>Start Point</label>\r\n                            <input type=\"text\" name=\"point\" value=\"{{shuttleDetail.startPoint[0].address}}\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Time</label>\r\n                                <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.startTime}}\" class=\"form-control\"\r\n                                    disabled />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>End Time</label>\r\n                                <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.endTime}}\" class=\"form-control\"\r\n                                    disabled />\r\n                            </div>\r\n                        </div>\r\n                        <ng-container *ngIf=\"shuttleDetail.stopPoints && shuttleDetail.stopPoints.length>0\">\r\n                            <ng-container *ngFor=\"let data of shuttleDetail.stopPoints\">\r\n                                <div class=\"col-md-7\" *ngIf=\"data.coordinates\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Stop Point</label>\r\n                                        <input type=\"text\" name=\"Email\" value=\"{{data.coordinates.address}}\"\r\n                                            class=\"form-control\" disabled />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Fare</label>\r\n                                        <input type=\"text\" name=\"Name\" value=\"{{data.fare}}\" class=\"form-control\"\r\n                                            disabled />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Time</label>\r\n                                        <input type=\"text\" name=\"Name\" value=\"{{data.time}}\" class=\"form-control\"\r\n                                            disabled />\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <div class=\"col-md-8\" *ngIf=\"shuttleDetail.endPoint && shuttleDetail.endPoint.length>0\">\r\n                            <div class=\"form-group\">\r\n                                <label>End Point</label>\r\n                                <input type=\"text\" name=\"Email\" value=\"{{shuttleDetail.endPoint[0].address}}\"\r\n                                    class=\"form-control\" disabled />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Total Fare</label>\r\n                                <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.totalFare}}\" class=\"form-control\"\r\n                                    disabled />\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"!id\">\r\n                                Add Shuttle\r\n                            </h6>\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"id\">\r\n                                Edit Shuttle\r\n                            </h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body add_driver_outer\">\r\n            <form [formGroup]=\"shuttleForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\"> Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" maxlength=\"25\"\r\n                                placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleForm.controls.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleForm.controls.name.errors.required\">\r\n                                Name is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"category\">Driver Name</label>\r\n                        <div class=\"login_email country_code_div\">\r\n                            <div class=\"loginmail_input\" *ngIf=\"driverList && driverList.length>0\">\r\n                                <ngx-select-dropdown (change)=\"selectionChanged1($event)\" formControlName=\"driver\"\r\n                                    [config]=\"config1\" [options]=\"driverList\">\r\n                                </ngx-select-dropdown>\r\n                            </div>\r\n                            <div *ngIf=\"submitted && shuttleForm.controls.driver.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"shuttleForm.controls.driver.errors.required\">\r\n                                    Driver is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Shuttle Type</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" formControlName=\"shuttleType\" *ngIf=\"shuttleType\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let type of shuttleType\" [value]=\"type.value\">\r\n                                    {{ type.name }}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"\r\n                        submitted && shuttleForm.controls.shuttleType.errors\r\n                        \" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"shuttleForm.controls.shuttleType.errors.required\">\r\n                                    Shuttle Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Accepted Currency</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" formControlName=\"currency\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let currency of currencyOptions\" [value]=\"currency.symbol\">\r\n                                    {{ currency.code }}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"\r\n                        submitted && shuttleForm.controls.currency.errors\r\n                        \" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"shuttleForm.controls.currency.errors.required\">\r\n                                    Currency is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Seat Type</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" formControlName=\"seatType\" *ngIf=\"seatType\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let data of seatType;let i = index\" [value]=\"i\">\r\n                                    {{ data }}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"\r\n                          submitted && shuttleForm.controls.seatType.errors\r\n                        \" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"shuttleForm.controls.seatType.errors.required\">\r\n                                    Seat Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"category\">Shuttle Route</label>\r\n                        <div class=\"login_email country_code_div\">\r\n                            <div class=\"loginmail_input\" *ngIf=\"shuttleRouteList && shuttleRouteList.length>0\">\r\n                                <!-- <ngx-select-dropdown (change)=\"selectionChanged2($event)\" formControlName=\"shuttleRoute\"\r\n                                    [config]=\"config2\" [options]=\"shuttleRouteList\">\r\n                                </ngx-select-dropdown> -->\r\n                                <ng-multiselect-dropdown placeholder=\"Select Shuttle Route\" [data]=\"shuttleRouteList\"\r\n                                    formControlName=\"shuttleRoute\" [settings]=\"dropDownSetting\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                            <div *ngIf=\"submitted && shuttleForm.controls.shuttleRoute.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"shuttleForm.controls.shuttleRoute.errors.required\">\r\n                                    Shuttle Route is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Vender Name</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" formControlName=\"venderId\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let vender of venders\" [value]=\"vender._id\">\r\n                                    {{ vender.firstName }} {{ vender.lastName }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Start Time</label>\r\n                        <div class=\"input-group\">\r\n                            <input readonly class=\"form-control\" formControlName=\"startTime\" [owlDateTime]=\"dt1\"\r\n                                placeholder=\"Time\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt1\"><i\r\n                                        class=\"fa fa-calendar\"></i></span>\r\n                            </div>\r\n                            <owl-date-time #dt1 [pickerType]=\"'timer'\" [showSecondsTimer]=\"true\" [hour12Timer]=\"false\">\r\n                            </owl-date-time>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleForm.controls.startTime.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleForm.controls.startTime.errors.required\">\r\n                                Start Time is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">End Time</label>\r\n                        <div class=\"input-group\">\r\n                            <input readonly class=\"form-control\" formControlName=\"endTime\" [owlDateTime]=\"dt2\"\r\n                                placeholder=\"Time\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt2\"><i\r\n                                        class=\"fa fa-calendar\"></i></span>\r\n                            </div>\r\n                            <owl-date-time #dt2 [pickerType]=\"'timer'\" [showSecondsTimer]=\"true\" [hour12Timer]=\"false\">\r\n                            </owl-date-time>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && shuttleForm.controls.endTime.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"shuttleForm.controls.endTime.errors.required\">\r\n                                Open Time is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"form-group form-actions add_edit\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n                        Add\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n                        Update\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-12 user_title\">\r\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Shuttles</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 user_filter\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\"\r\n                        placeholder=\"Search Shuttle\">\r\n                </div>\r\n                <div class=\"col-md-6 user_serch_btn\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" (click)=\"searchShuttle()\">Search</button>\r\n                    <button type=\"reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n                <div class=\"col-md-3 text-right add_btn\">\r\n                    <button class=\"btn btn-primary\" (click)=\"addShuttle()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Shuttle\r\n                    </button>\r\n                </div>\r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Shuttles</h6>\r\n                </div>\r\n                <div class=\"col-md-6 text-right\">\r\n                    <button class=\"btn btn-primary\" (click)=\"addShuttle()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Shuttle\r\n                    </button>\r\n                    <!-- <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Name</th>\r\n                            <th style=\"min-width: 7rem;\">Vender Name</th>\r\n                            <th style=\"min-width: 7rem;\">Shuttle Routes</th>\r\n                            <th style=\"min-width: 7rem;\">Driver</th>\r\n                            <th style=\"min-width: 7rem;\">Shuttle Type</th>\r\n                            <th style=\"min-width: 10rem;\">Seat Type</th>\r\n                            <th style=\"min-width: 5rem;\">Status</th>\r\n                            <!-- <th>Start Time</th>\r\n                            <th>End Time</th> -->\r\n                            <th style=\"min-width: 8rem;\">\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of shuttleList | paginate: config; let i = index\">\r\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\r\n                            <td>{{ item.name }}</td>\r\n                            <td><span *ngIf=\"item.venderId\">{{ item.venderId.firstName }}\r\n                                    {{ item.venderId.lastName }}</span></td>\r\n                            <td *ngIf=\"item.shuttleRoute\">\r\n                                {{item.shuttleRoute.length}}\r\n                            </td>\r\n                            <td *ngIf=\"item.driver\">{{item.driver.firstName}} {{item.driver.lastName}}</td>\r\n                            <td><span *ngIf=\"item.shuttleType == 'ac'\">AC</span>\r\n                                <span *ngIf=\"item.shuttleType=='non-ac'\">Non-AC</span>\r\n                            </td>\r\n                            <td>{{seatType[item.seatType]}}</td>\r\n                            <!-- <td>{{item.startTime}}</td>\r\n                            <td>\r\n                                {{ item.endTime }}\r\n                            </td> -->\r\n                            <td>\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\" (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\">\r\n                                </ui-switch>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-warning mr-1\" title=\"View Shuttle\" (click)=\"onViewShuttle(item)\" title=\"View\">\r\n                                        <span class=\"fas fa-fw fa-eye\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-primary mr-1\" title=\"Edit Shuttle\" (click)=\"onEditShuttle(item)\" title=\"Edit\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger mr-1\" title=\"Delete Shuttle\" (click)=\"deleteShuttle(item)\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"shuttleList && shuttleList.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <div *ngIf=\"shuttleList && shuttleList.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">View Shuttle</h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" *ngIf=\"shuttleDetail\">\r\n            <div *ngIf=\"shuttleDetail\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Name</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.name}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Shuttle Type</label>\r\n                            <input type=\"text\" name=\"Name\" [value]=\"shuttleDetail.shuttleType== 'ac' ? 'AC' : 'Non-AC'\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"shuttleDetail.driver\">\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Driver Name</label>\r\n                            <input type=\"text\" name=\"Name\"\r\n                                value=\"{{shuttleDetail.driver.firstName}} {{shuttleDetail.driver.lastName}}\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Vehicle Name</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.driver.vehicleName}}\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Start Time</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.startTime}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" *ngIf=\"shuttleDetail.shuttleRoute\">\r\n                        <div class=\"form-group\">\r\n                            <label>End Time</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.endTime}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <!-- <div class=\"row\">\r\n                        <div class=\"col-md-6\" *ngIf=\"shuttleDetail.shuttleRoute\">\r\n                        <div class=\"form-group\">\r\n                            <label>Shuttle Type</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.shuttleRoute.name}}\" class=\"form-control\"\r\n                            disabled />\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                <div class=\"row\" *ngIf=\"shuttleDetail.driver\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{shuttleDetail.driver.email}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Phone Number</label>\r\n                            <input type=\"text\" name=\"Email\"\r\n                                value=\"{{shuttleDetail.driver.countryCode}} {{shuttleDetail.driver.phone}}\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\" *ngIf=\"shuttleDetail.shuttleRoute\">\r\n                        <div class=\"form-group\">\r\n                            <label>Shuttle Routes</label>\r\n                            <ul>\r\n                                <li *ngFor=\"let route of shuttleDetail.shuttleRoute\">\r\n                                    {{route.name}}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"!id\">\r\n                                Add Vender\r\n                            </h6>\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"id\">\r\n                                Edit Vender\r\n                            </h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body add_driver_outer\">\r\n            <form [formGroup]=\"venderForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">First Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"firstName\" class=\"form-control\" formControlName=\"firstName\"\r\n                                maxlength=\"25\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && venderForm.controls.firstName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"venderForm.controls.firstName.errors.required\">\r\n                                First Name is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Last Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"lastName\" class=\"form-control\" formControlName=\"lastName\"\r\n                                maxlength=\"25\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && venderForm.controls.lastName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"venderForm.controls.lastName.errors.required\">\r\n                                Last Name is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Email</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && venderForm.controls.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"venderForm.controls.email.errors.required\">\r\n                                Email is required\r\n                            </div>\r\n                            <div *ngIf=\"venderForm.controls.email.errors.pattern\">\r\n                                Email is not valid\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n                        <label for=\"category\">Password</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                                placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && venderForm.controls.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"venderForm.controls.password.errors.required\">\r\n                                Password is required\r\n                            </div>\r\n                            <div *ngIf=\"venderForm.controls.password.errors.minlength\">\r\n                                Password must be atleast 8 characters\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\"> Country Code</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"countryCode\" class=\"form-control\" formControlName=\"countryCode\"\r\n                                maxlength=\"5\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && venderForm.controls.countryCode.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"venderForm.controls.countryCode.errors.required\">\r\n                                Country Code is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\"> Phone Number</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" id=\"phone\" class=\"form-control\" formControlName=\"phone\" maxlength=\"15\"\r\n                                placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && venderForm.controls.phone.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"venderForm.controls.phone.errors.required\">\r\n                                Phone Number is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\" >\r\n                        <label for=\"category\">Address</label>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"address\" placeholder=\"\"\r\n                                ngx-google-places-autocomplete #placesRef=\"ngx-places\"\r\n                                (onAddressChange)=\"handleAddress($event)\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && venderForm.controls.address.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"venderForm.controls.address.errors.required\">\r\n                                Address is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"form-group form-actions add_edit\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n                        Add\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n                        Update\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <!-- DataTales Example -->\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h6 class=\"m-0 font-weight-bold text-primary\">Venders</h6>\r\n        </div>\r\n        <div class=\"col-md-6 text-right\">\r\n          <button class=\"btn btn-primary\" (click)=\"addVender()\">\r\n            <span class=\"fas fa-plus\"></span> Add Vender\r\n          </button>\r\n          <!-- <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th style=\"min-width: 8rem\">Name</th>\r\n              <th>Email</th>\r\n              <th>Phone Number</th>\r\n              <th style=\"min-width: 20rem\">Address</th>\r\n              <th style=\"min-width: 5rem\">Status</th>\r\n              <th style=\"min-width: 6rem\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!loader && rows.length > 0\">\r\n            <tr *ngFor=\"let item of rows | paginate: config; let i = index\">\r\n              <td>{{ (currentPage - 1) * 25 + i + 1 }}</td>\r\n              <td>{{ item.firstName }} {{ item.lastName }}</td>\r\n              <td>{{ item.email }}</td>\r\n              <td>{{ item.countryCode }}{{ item.phone }}</td>\r\n              <td>{{ item.address }}</td>\r\n              <td>\r\n                <ui-switch\r\n                  labelOn=\"ON\"\r\n                  switchColor=\"#4e73df\"\r\n                  id=\"status\"\r\n                  name=\"status\"\r\n                  [(ngModel)]=\"item.status\"\r\n                  (ngModelChange)=\"updateStatus(item)\"\r\n                  labelOff=\"OFF\"\r\n                >\r\n                </ui-switch>\r\n              </td>\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button\r\n                    class=\"btn btn-primary mr-1\"\r\n                    title=\"Edit\"\r\n                    (click)=\"editVender(item._id)\"\r\n                  >\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <button\r\n                    class=\"btn btn-danger\"\r\n                    title=\"Delete\"\r\n                    (click)=\"deleteVender(item)\"\r\n                  >\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4 *ngIf=\"rows && rows.length == 0 && !loader\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <div *ngIf=\"rows && rows.length != 0 && !loader\" class=\"pagination_ui\">\r\n        <pagination-controls\r\n          (pageChange)=\"pageChange($event)\"\r\n          id=\"page\"\r\n          class=\"my-pagination\"\r\n        >\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/bookings/bookings.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/bookings/bookings.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("select {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border: 1px solid #d4d6dc;\n  color: #868484;\n}\n\n.user_filter select {\n  border-radius: 5px;\n}\n\n@media (max-width: 967px) {\n  .user_serch_btn {\n    margin-top: 10px;\n  }\n}\n\n@media (max-width: 767px) {\n  .user_filter select {\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc2h1dHRsZS9ib29raW5ncy9WOlxcamFkLWFkbWluLWdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxzaHV0dGxlXFxib29raW5nc1xcYm9va2luZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxnQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLFlBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc2h1dHRsZS9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNmRjO1xyXG4gICAgY29sb3I6ICM4Njg0ODQ7XHJcbn1cclxuXHJcbi51c2VyX2ZpbHRlciBzZWxlY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5NjdweCkge1xyXG4gICAgLnVzZXJfc2VyY2hfYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLnVzZXJfZmlsdGVyIHNlbGVjdCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG59Iiwic2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDZkYztcbiAgY29sb3I6ICM4Njg0ODQ7XG59XG5cbi51c2VyX2ZpbHRlciBzZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xuICAudXNlcl9zZXJjaF9idG4ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudXNlcl9maWx0ZXIgc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/bookings/bookings.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/bookings/bookings.component.ts ***!
  \***********************************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let BookingsComponent = class BookingsComponent {
    constructor(api, comm, dialogService, router, toastr) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.router = router;
        this.toastr = toastr;
        this.searchText = "";
        this.searchType = 0;
        this.serialNumber = 0;
        this.loader = true;
        this.limit = 25;
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25
        };
    }
    ngOnInit() {
        this.currentPage = 1;
        this.imageUrl = this.comm.imageUrl;
        this.allBookings();
    }
    allBookings() {
        var page = this.currentPage;
        this.api.getAllBookings(page, this.searchType, this.searchText).subscribe(response => {
            if (response["response"]["success"]) {
                this.orderList = response["data"]["list"];
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: this.currentPage,
                    itemsPerPage: 25,
                    totalItems: response["data"]["count"]
                };
            }
            if (!response["success"])
                return;
        });
    }
    reset() {
        this.searchText = "";
        this.searchType = 0;
        this.currentPage = 1;
        this.allBookings();
    }
    searchBookings() {
        this.currentPage = 1;
        this.allBookings();
    }
    checkDate(date) {
        if (date <= moment__WEBPACK_IMPORTED_MODULE_7__().valueOf())
            return false;
        else
            return true;
    }
    viewBooking(item) {
        this.router.navigate(['shuttle/booking/' + item._id]);
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.allBookings();
    }
    bookingCancel(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: "You want to cancel this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.value) {
                this.api.cancelBookings(item._id, { status: 11 }).subscribe(response => {
                    if (response["response"]["success"]) {
                        this.allBookings();
                    }
                });
            }
        });
    }
};
BookingsComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"] }
];
BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/bookings/bookings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookings.component.scss */ "./src/app/cooldash/pages/shuttle/bookings/bookings.component.scss")).default]
    })
], BookingsComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvYm9va2luZ3Mvdmlldy1ib29raW5nL3ZpZXctYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingComponent", function() { return ViewBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewBookingComponent = class ViewBookingComponent {
    constructor(router, route, comm, api) {
        this.router = router;
        this.route = route;
        this.comm = comm;
        this.api = api;
        this.history = window.history;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.getShuttleBookingDetail(this.id);
        });
    }
    getShuttleBookingDetail(id) {
        this.api.getShuttleBookingDetail(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.orderDetail = res["data"][0];
            }
        });
    }
};
ViewBookingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-booking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-booking.component.scss */ "./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.scss")).default]
    })
], ViewBookingComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/location/location/location.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/location/location/location.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvbG9jYXRpb24vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/location/location/location.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/location/location/location.component.ts ***!
  \********************************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);










let LocationComponent = class LocationComponent {
    constructor(formBuilder, comm, api, toastr, router, route, mapsAPILoader, dialogService) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.dialogService = dialogService;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.categoryList = [];
        this.history = window.history;
    }
    ngOnInit() {
        this.getAllShuttleLocation();
    }
    getAllShuttleLocation() {
        var page = this.currentPage;
        this.api.getAllShuttleLocation(page).subscribe(res => {
            if (res["response"]["success"]) {
                this.outlet = res["data"]["list"];
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: this.currentPage,
                    itemsPerPage: 25,
                    totalItems: res["data"]["count"]
                };
            }
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getAllShuttleLocation();
    }
    addLocation() {
        this.dialogService.addShuttleLocation().subscribe(res => {
            if (res == "yes") {
                this.getAllShuttleLocation();
            }
        });
    }
    onEditSelect(item) {
        this.dialogService.editShuttleLocation(item).subscribe(res => {
            if (res == "yes") {
                this.getAllShuttleLocation();
            }
        });
    }
    deleteLocation(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Location!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    Id: item._id
                };
                this.api.deleteShuttleLocation(data).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getAllShuttleLocation();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    updateStatus(item) {
        // this.loader = true;
        let data = { status: item.status ? 1 : 0 };
        this.api.updateShuttleLocation(item._id, data).subscribe(res => {
            // this.loader = false;
        });
    }
};
LocationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_8__["PopupService"] }
];
LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/location/location/location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.component.scss */ "./src/app/cooldash/pages/shuttle/location/location/location.component.scss")).default]
    })
], LocationComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/overview/overview.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/overview/overview.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user_filter input {\n  width: 100%;\n}\n\n.user_filter {\n  position: relative;\n}\n\n.user_filter .mat-datepicker-toggle {\n  position: absolute;\n  right: 15px;\n}\n\n::ng-deep .user_filter .mat-datepicker-toggle button:focus {\n  outline: none !important;\n}\n\n@media (max-width: 767px) {\n  ::ng-deep .mat-datepicker-content .mat-calendar {\n    width: 249px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc2h1dHRsZS9vdmVydmlldy9WOlxcamFkLWFkbWluLWdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxzaHV0dGxlXFxvdmVydmlld1xcb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREdJO0VBQ0k7SUFDSSx1QkFBQTtFQ0FWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9zaHV0dGxlL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJfZmlsdGVyIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlcl9maWx0ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udXNlcl9maWx0ZXIgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51c2VyX2ZpbHRlciAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5tYXQtY2FsZW5kYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMjQ5cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudXNlcl9maWx0ZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXJfZmlsdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlcl9maWx0ZXIgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbjo6bmctZGVlcCAudXNlcl9maWx0ZXIgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICA6Om5nLWRlZXAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhciB7XG4gICAgd2lkdGg6IDI0OXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/overview/overview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/overview/overview.component.ts ***!
  \***********************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let OverviewComponent = class OverviewComponent {
    //   @ViewChild('startdate', {
    //     static: false,
    //    read: MatInput
    //  }) startdate: MatInput;
    constructor(comm, api, toastr) {
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.currentPage = 1;
        this.loader = true;
        this.history = window.history;
        this.date1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date());
    }
    ngOnInit() {
        this.date = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
        this.getAllShuttleOverview();
    }
    getAllShuttleOverview() {
        var page = this.currentPage;
        this.api.getAllShuttleOverview(page, this.date).subscribe(res => {
            if (res["response"]["success"]) {
                this.list = res["data"]["list"];
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: this.currentPage,
                    itemsPerPage: 25,
                    totalItems: res["data"]["count"]
                };
            }
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getAllShuttleOverview();
    }
    getStartDate(event) {
        this.date = moment__WEBPACK_IMPORTED_MODULE_6__(event.value).format('YYYY-MM-DD');
    }
    search() {
        this.currentPage = 1;
        this.getAllShuttleOverview();
    }
};
OverviewComponent.ctorParameters = () => [
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }
];
OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/overview/overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./overview.component.scss */ "./src/app/cooldash/pages/shuttle/overview/overview.component.scss")).default]
    })
], OverviewComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\n.m-2 {\n  margin-top: 11px !important;\n}\n\n.timefld {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc2h1dHRsZS9zaHV0dGxlLXJvdXRlcy9hZGQtc2h1dHRsZS1yb3V0ZS9WOlxcamFkLWFkbWluLWdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxzaHV0dGxlXFxzaHV0dGxlLXJvdXRlc1xcYWRkLXNodXR0bGUtcm91dGVcXGFkZC1zaHV0dGxlLXJvdXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9zaHV0dGxlL3NodXR0bGUtcm91dGVzL2FkZC1zaHV0dGxlLXJvdXRlL2FkZC1zaHV0dGxlLXJvdXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc2h1dHRsZS9zaHV0dGxlLXJvdXRlcy9hZGQtc2h1dHRsZS1yb3V0ZS9hZGQtc2h1dHRsZS1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgZm9udC1zaXplOiA5NSU7XHJcbiAgY29sb3I6ICNmNTUzNTM7XHJcbn1cclxuLm0tMiB7XHJcbiAgbWFyZ2luLXRvcDogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWZsZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuIiwiLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMTRyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogOTUlO1xuICBjb2xvcjogI2Y1NTM1Mztcbn1cblxuLm0tMiB7XG4gIG1hcmdpbi10b3A6IDExcHggIWltcG9ydGFudDtcbn1cblxuLnRpbWVmbGQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddShuttleRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShuttleRouteComponent", function() { return AddShuttleRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let AddShuttleRouteComponent = class AddShuttleRouteComponent {
    constructor(formBuilder, comm, api, toastr, router, route) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.history = window.history;
        this.submitted = false;
        this.locArr = [];
        this.venders = [];
        this.setValues = data => {
            if (data) {
                this.shuttleRouteForm.patchValue({
                    name: data.name,
                    startPoint: data.startPoint[0]._id,
                    endPoint: data.endPoint[0]._id,
                    totalFare: data.totalFare,
                    venderId: data.venderId._id,
                    startTime: moment__WEBPACK_IMPORTED_MODULE_7__(data.startTime, 'HH:mm:ss').toDate(),
                    endTime: moment__WEBPACK_IMPORTED_MODULE_7__(data.endTime, 'HH:mm:ss').toDate()
                });
                this.shuttleRouteForm.setControl('stopPoints', this.createArray(data.stopPoints));
                this.startTime = moment__WEBPACK_IMPORTED_MODULE_7__(data.startTime, 'HH:mm:ss').toDate();
                this.endTime = moment__WEBPACK_IMPORTED_MODULE_7__(data.endTime, 'HH:mm:ss').toDate();
            }
        };
    }
    ngOnInit() {
        this.getAllShuttleLocation();
        this.route.params.subscribe(params => {
            this.id = params["id"];
            if (this.id != undefined)
                this.getShuttleRouteById(this.id);
        });
        this.allVenders();
        this.shuttleRouteForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            startPoint: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endPoint: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            venderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            stopPoints: this.formBuilder.array([this.formBuilder.group({ coordinates: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], fare: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })]),
            totalFare: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
    get stopPoints() {
        return this.shuttleRouteForm.get('stopPoints');
    }
    getAllShuttleLocation() {
        this.api.getAllShuttleLocationAdmin().subscribe(res => {
            if (res["response"]["success"]) {
                this.outlet = res["data"];
            }
        });
    }
    onStartTimeChange(event) {
        this.startTime = (event.value);
    }
    onEndTimeChange(event) {
        this.endTime = (event.value);
    }
    getShuttleRouteById(id) {
        this.api.getShuttleRouteById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.shuttleDetail = res["data"][0];
                this.setValues(this.shuttleDetail);
            }
        });
    }
    addStopPoint() {
        this.stopPoints.push(this.formBuilder.group({ coordinates: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], fare: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }));
    }
    deleteStopPoint(index) {
        this.stopPoints.removeAt(index);
    }
    allVenders() {
        this.api.getVendersList().subscribe(res => {
            if (res["response"]["success"]) {
                this.venders = res["data"];
            }
        });
    }
    createArray(data) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](data.map(item => new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fare: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item['fare'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            coordinates: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item['coordinates']['_id'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](moment__WEBPACK_IMPORTED_MODULE_7__(item.time, 'HH:mm:ss').toDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        })));
    }
    update() {
        this.submitted = true;
        this.locArr = [];
        if (this.shuttleRouteForm.controls["startPoint"].value) {
            this.locArr.push(this.shuttleRouteForm.controls["startPoint"].value);
        }
        if (this.shuttleRouteForm.controls["endPoint"].value) {
            this.locArr.push(this.shuttleRouteForm.controls["endPoint"].value);
        }
        if (this.shuttleRouteForm.controls["stopPoints"].value && this.shuttleRouteForm.controls["stopPoints"].value.length) {
            this.shuttleRouteForm.controls["stopPoints"].value.map(val => {
                if (val.coordinates)
                    this.locArr.push(val.coordinates);
            });
        }
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
        let dup = [...new Set(findDuplicates(this.locArr))];
        if (dup.length) {
            this.toastr.errorToastr('Same stop points added multiple times');
        }
        else {
            if (this.submitted && this.shuttleRouteForm.valid) {
                this.shuttleRouteForm.controls["stopPoints"].value.forEach(function (part, index, theArray) {
                    part.time = new Date(part.time).toLocaleTimeString('it-IT');
                });
                var data = {
                    startPoint: this.shuttleRouteForm.controls["startPoint"].value,
                    endPoint: this.shuttleRouteForm.controls["endPoint"].value,
                    name: this.shuttleRouteForm.controls["name"].value,
                    stopPoints: this.shuttleRouteForm.controls["stopPoints"].value,
                    totalFare: this.shuttleRouteForm.controls["totalFare"].value,
                    startTime: new Date(this.shuttleRouteForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
                    endTime: new Date(this.shuttleRouteForm.controls["endTime"].value).toLocaleTimeString('it-IT'),
                    venderId: this.shuttleRouteForm.controls["venderId"].value
                };
                this.api.updateShuttleRoute(this.id, data).subscribe(res => {
                    if (res["response"]["success"]) {
                        this.toastr.successToastr(res["response"]["message"]);
                        this.router.navigate(["/shuttle/shuttle-route"]);
                    }
                    else {
                        this.toastr.errorToastr(res["response"]["message"]);
                    }
                });
            }
            else {
                console.log('not valid', this.shuttleRouteForm);
            }
        }
    }
    submit() {
        this.submitted = true;
        this.locArr = [];
        if (this.shuttleRouteForm.controls["startPoint"].value) {
            this.locArr.push(this.shuttleRouteForm.controls["startPoint"].value);
        }
        if (this.shuttleRouteForm.controls["endPoint"].value) {
            this.locArr.push(this.shuttleRouteForm.controls["endPoint"].value);
        }
        if (this.shuttleRouteForm.controls["stopPoints"].value && this.shuttleRouteForm.controls["stopPoints"].value.length) {
            this.shuttleRouteForm.controls["stopPoints"].value.map(val => {
                if (val.coordinates)
                    this.locArr.push(val.coordinates);
            });
        }
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
        let dup = [...new Set(findDuplicates(this.locArr))];
        console.log(this.locArr, dup);
        if (dup.length) {
            this.toastr.errorToastr('Same stop points added multiple times');
        }
        else {
            if (this.submitted && this.shuttleRouteForm.valid) {
                this.shuttleRouteForm.controls["stopPoints"].value.forEach(function (part, index, theArray) {
                    part.time = new Date(part.time).toLocaleTimeString('it-IT');
                });
                var data = {
                    startPoint: this.shuttleRouteForm.controls["startPoint"].value,
                    endPoint: this.shuttleRouteForm.controls["endPoint"].value,
                    name: this.shuttleRouteForm.controls["name"].value,
                    stopPoints: this.shuttleRouteForm.controls["stopPoints"].value,
                    totalFare: this.shuttleRouteForm.controls["totalFare"].value,
                    startTime: new Date(this.shuttleRouteForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
                    endTime: new Date(this.shuttleRouteForm.controls["endTime"].value).toLocaleTimeString('it-IT'),
                    venderId: this.shuttleRouteForm.controls["venderId"].value
                };
                this.api.addShuttleRoute(data).subscribe(res => {
                    if (res["response"]["success"]) {
                        this.toastr.successToastr(res["response"]["message"]);
                        this.router.navigate(["/shuttle/shuttle-route"]);
                    }
                    else {
                        this.toastr.errorToastr(res["response"]["message"]);
                    }
                });
            }
        }
    }
    onOptionsSelected(val, field) {
        this.locArr = [];
        if (this.shuttleRouteForm.controls["startPoint"].value) {
            this.locArr.push(this.shuttleRouteForm.controls["startPoint"].value);
        }
        if (this.shuttleRouteForm.controls["endPoint"].value) {
            this.locArr.push(this.shuttleRouteForm.controls["endPoint"].value);
        }
        if (this.shuttleRouteForm.controls["stopPoints"].value && this.shuttleRouteForm.controls["stopPoints"].value.length) {
            this.shuttleRouteForm.controls["stopPoints"].value.map(val => {
                if (val.coordinates)
                    this.locArr.push(val.coordinates);
            });
        }
        let arr = this.locArr.filter(v => v == val);
        if (arr.length >= 2) {
            if (field == 'endPoint')
                this.shuttleRouteForm.controls["endPoint"].setValue("");
            this.shuttleRouteForm.controls["startPoint"].value == "";
            this.toastr.errorToastr('This stop points already added');
        }
    }
};
AddShuttleRouteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AddShuttleRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-shuttle-route',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-shuttle-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-shuttle-route.component.scss */ "./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.scss")).default]
    })
], AddShuttleRouteComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvc2h1dHRsZS1yb3V0ZXMvc2h1dHRsZS1yb3V0ZS9zaHV0dGxlLXJvdXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ShuttleRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuttleRouteComponent", function() { return ShuttleRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let ShuttleRouteComponent = class ShuttleRouteComponent {
    constructor(formBuilder, comm, api, toastr, router, route, dialogService) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.categoryList = [];
        this.history = window.history;
    }
    ngOnInit() {
        this.getAllShuttleRoute();
    }
    getAllShuttleRoute() {
        let page = this.currentPage;
        this.api.getAllShuttleRoute(page).subscribe(res => {
            if (res["response"]["success"]) {
                this.shuttleRoute = res["data"]["list"];
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: this.currentPage,
                    itemsPerPage: 25,
                    totalItems: res["data"]["count"]
                };
            }
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getAllShuttleRoute();
    }
    addShuttleRoute() {
        this.router.navigate(['shuttle/add-route']);
    }
    viewShuttleRoute(item) {
        this.router.navigate(['shuttle/view-route', item._id]);
    }
    editShuttleRoute(item) {
        this.router.navigate(['shuttle/edit-route', item._id]);
    }
    deleteShuttleRoute(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Shuttle Route!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    Id: item._id
                };
                this.api.deleteShuttleRoute(data).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getAllShuttleRoute();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    updateStatus(item) {
        // this.loader = true;
        let data = { status: item.status ? 1 : 0 };
        this.api.updateShuttleRoute(item._id, data).subscribe(res => {
            // this.loader = false;
        });
    }
};
ShuttleRouteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"] }
];
ShuttleRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shuttle-route',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shuttle-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shuttle-route.component.scss */ "./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.scss")).default]
    })
], ShuttleRouteComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvc2h1dHRsZS1yb3V0ZXMvdmlldy1zaHV0dGxlLXJvdXRlL3ZpZXctc2h1dHRsZS1yb3V0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ViewShuttleRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewShuttleRouteComponent", function() { return ViewShuttleRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewShuttleRouteComponent = class ViewShuttleRouteComponent {
    constructor(router, route, comm, api) {
        this.router = router;
        this.route = route;
        this.comm = comm;
        this.api = api;
        this.history = window.history;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.getShuttleRouteById(this.id);
        });
    }
    getShuttleRouteById(id) {
        this.api.getShuttleRouteById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.shuttleDetail = res["data"][0];
                console.log(this.shuttleDetail);
            }
        });
    }
};
ViewShuttleRouteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewShuttleRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-shuttle-route',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-shuttle-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-shuttle-route.component.scss */ "./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.scss")).default]
    })
], ViewShuttleRouteComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ShuttleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuttleRoutingModule", function() { return ShuttleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shuttles_shuttle_shuttle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shuttles/shuttle/shuttle.component */ "./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.ts");
/* harmony import */ var _location_location_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location/location/location.component */ "./src/app/cooldash/pages/shuttle/location/location/location.component.ts");
/* harmony import */ var _shuttle_routes_shuttle_route_shuttle_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shuttle-routes/shuttle-route/shuttle-route.component */ "./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.ts");
/* harmony import */ var _shuttle_routes_add_shuttle_route_add_shuttle_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shuttle-routes/add-shuttle-route/add-shuttle-route.component */ "./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.ts");
/* harmony import */ var _shuttle_routes_view_shuttle_route_view_shuttle_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shuttle-routes/view-shuttle-route/view-shuttle-route.component */ "./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.ts");
/* harmony import */ var _shuttles_add_edit_shuttle_add_edit_shuttle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shuttles/add-edit-shuttle/add-edit-shuttle.component */ "./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.ts");
/* harmony import */ var _shuttles_view_shuttle_view_shuttle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shuttles/view-shuttle/view-shuttle.component */ "./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/cooldash/pages/shuttle/bookings/bookings.component.ts");
/* harmony import */ var _bookings_view_booking_view_booking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookings/view-booking/view-booking.component */ "./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/cooldash/pages/shuttle/overview/overview.component.ts");
/* harmony import */ var _vender_vender_list_vender_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vender/vender-list/vender-list.component */ "./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.ts");
/* harmony import */ var _vender_add_edit_vender_add_edit_vender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vender/add-edit-vender/add-edit-vender.component */ "./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.ts");















const routes = [
    {
        path: "",
        data: {
            title: "Shuttle"
        },
        children: [
            {
                path: "vender",
                component: _vender_vender_list_vender_list_component__WEBPACK_IMPORTED_MODULE_13__["VenderListComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add-vender",
                component: _vender_add_edit_vender_add_edit_vender_component__WEBPACK_IMPORTED_MODULE_14__["AddEditVenderComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit-vender/:id",
                component: _vender_add_edit_vender_add_edit_vender_component__WEBPACK_IMPORTED_MODULE_14__["AddEditVenderComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "shuttle",
                component: _shuttles_shuttle_shuttle_component__WEBPACK_IMPORTED_MODULE_3__["ShuttleComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add-shuttle",
                component: _shuttles_add_edit_shuttle_add_edit_shuttle_component__WEBPACK_IMPORTED_MODULE_8__["AddEditShuttleComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit-shuttle/:id",
                component: _shuttles_add_edit_shuttle_add_edit_shuttle_component__WEBPACK_IMPORTED_MODULE_8__["AddEditShuttleComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "location",
                component: _location_location_location_component__WEBPACK_IMPORTED_MODULE_4__["LocationComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "shuttle-route",
                component: _shuttle_routes_shuttle_route_shuttle_route_component__WEBPACK_IMPORTED_MODULE_5__["ShuttleRouteComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add-route",
                component: _shuttle_routes_add_shuttle_route_add_shuttle_route_component__WEBPACK_IMPORTED_MODULE_6__["AddShuttleRouteComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit-route/:id",
                component: _shuttle_routes_add_shuttle_route_add_shuttle_route_component__WEBPACK_IMPORTED_MODULE_6__["AddShuttleRouteComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view-route/:id",
                component: _shuttle_routes_view_shuttle_route_view_shuttle_route_component__WEBPACK_IMPORTED_MODULE_7__["ViewShuttleRouteComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view-shuttle/:id",
                component: _shuttles_view_shuttle_view_shuttle_component__WEBPACK_IMPORTED_MODULE_9__["ViewShuttleComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "bookings",
                component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_10__["BookingsComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "booking/:id",
                component: _bookings_view_booking_view_booking_component__WEBPACK_IMPORTED_MODULE_11__["ViewBookingComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "overview",
                component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_12__["OverviewComponent"],
                data: {
                    title: ""
                }
            },
        ]
    }
];
let ShuttleRoutingModule = class ShuttleRoutingModule {
};
ShuttleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShuttleRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttle.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttle.module.ts ***!
  \**********************************************************/
/*! exports provided: MY_NATIVE_FORMATS, ShuttleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_NATIVE_FORMATS", function() { return MY_NATIVE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuttleModule", function() { return ShuttleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");
/* harmony import */ var _shuttles_shuttle_shuttle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shuttles/shuttle/shuttle.component */ "./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.ts");
/* harmony import */ var _shuttle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shuttle-routing.module */ "./src/app/cooldash/pages/shuttle/shuttle-routing.module.ts");
/* harmony import */ var _location_location_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location/location/location.component */ "./src/app/cooldash/pages/shuttle/location/location/location.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shuttle_routes_shuttle_route_shuttle_route_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shuttle-routes/shuttle-route/shuttle-route.component */ "./src/app/cooldash/pages/shuttle/shuttle-routes/shuttle-route/shuttle-route.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shuttle_routes_add_shuttle_route_add_shuttle_route_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shuttle-routes/add-shuttle-route/add-shuttle-route.component */ "./src/app/cooldash/pages/shuttle/shuttle-routes/add-shuttle-route/add-shuttle-route.component.ts");
/* harmony import */ var _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../number-module/number-module.module */ "./src/app/number-module/number-module.module.ts");
/* harmony import */ var _shuttle_routes_view_shuttle_route_view_shuttle_route_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shuttle-routes/view-shuttle-route/view-shuttle-route.component */ "./src/app/cooldash/pages/shuttle/shuttle-routes/view-shuttle-route/view-shuttle-route.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _pages_material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pages/material/material.module */ "./src/app/cooldash/pages/material/material.module.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _shuttles_add_edit_shuttle_add_edit_shuttle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shuttles/add-edit-shuttle/add-edit-shuttle.component */ "./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.ts");
/* harmony import */ var _shuttles_view_shuttle_view_shuttle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shuttles/view-shuttle/view-shuttle.component */ "./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/cooldash/pages/shuttle/bookings/bookings.component.ts");
/* harmony import */ var _bookings_view_booking_view_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bookings/view-booking/view-booking.component */ "./src/app/cooldash/pages/shuttle/bookings/view-booking/view-booking.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/cooldash/pages/shuttle/overview/overview.component.ts");
/* harmony import */ var _vender_vender_list_vender_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vender/vender-list/vender-list.component */ "./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.ts");
/* harmony import */ var _vender_add_edit_vender_add_edit_vender_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./vender/add-edit-vender/add-edit-vender.component */ "./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.ts");













 // <-- import the module












const MY_NATIVE_FORMATS = {
    fullPickerInput: {
        year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
    },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false },
    timePickerInput: { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};
let ShuttleModule = class ShuttleModule {
};
ShuttleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shuttles_shuttle_shuttle_component__WEBPACK_IMPORTED_MODULE_4__["ShuttleComponent"], _location_location_location_component__WEBPACK_IMPORTED_MODULE_6__["LocationComponent"], _shuttle_routes_shuttle_route_shuttle_route_component__WEBPACK_IMPORTED_MODULE_8__["ShuttleRouteComponent"], _shuttle_routes_add_shuttle_route_add_shuttle_route_component__WEBPACK_IMPORTED_MODULE_10__["AddShuttleRouteComponent"], _shuttle_routes_view_shuttle_route_view_shuttle_route_component__WEBPACK_IMPORTED_MODULE_12__["ViewShuttleRouteComponent"], _shuttles_add_edit_shuttle_add_edit_shuttle_component__WEBPACK_IMPORTED_MODULE_18__["AddEditShuttleComponent"], _shuttles_view_shuttle_view_shuttle_component__WEBPACK_IMPORTED_MODULE_19__["ViewShuttleComponent"], _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_21__["BookingsComponent"], _bookings_view_booking_view_booking_component__WEBPACK_IMPORTED_MODULE_22__["ViewBookingComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_23__["OverviewComponent"], _vender_vender_list_vender_list_component__WEBPACK_IMPORTED_MODULE_24__["VenderListComponent"], _vender_add_edit_vender_add_edit_vender_component__WEBPACK_IMPORTED_MODULE_25__["AddEditVenderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shuttle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShuttleRoutingModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__["GooglePlaceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_11__["NumberModuleModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlNativeDateTimeModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_17__["SelectDropDownModule"],
            _pages_material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["NgMultiSelectDropDownModule"].forRoot()
        ],
        providers: [
            { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OWL_DATE_TIME_FORMATS"], useValue: MY_NATIVE_FORMATS },
        ]
    })
], ShuttleModule);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc2h1dHRsZS9zaHV0dGxlcy9hZGQtZWRpdC1zaHV0dGxlL1Y6XFxqYWQtYWRtaW4tZ29cXG1hemF0X2FkbWluX3BhbmVsL3NyY1xcYXBwXFxjb29sZGFzaFxccGFnZXNcXHNodXR0bGVcXHNodXR0bGVzXFxhZGQtZWRpdC1zaHV0dGxlXFxhZGQtZWRpdC1zaHV0dGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9zaHV0dGxlL3NodXR0bGVzL2FkZC1lZGl0LXNodXR0bGUvYWRkLWVkaXQtc2h1dHRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9zaHV0dGxlL3NodXR0bGVzL2FkZC1lZGl0LXNodXR0bGUvYWRkLWVkaXQtc2h1dHRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbiAgfVxyXG4gIFxyXG4iLCIuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4xNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgZm9udC1zaXplOiA5NSU7XG4gIGNvbG9yOiAjZjU1MzUzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddEditShuttleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditShuttleComponent", function() { return AddEditShuttleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AddEditShuttleComponent = class AddEditShuttleComponent {
    constructor(formBuilder, comm, api, toastr, router, route) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.history = window.history;
        this.submitted = false;
        this.venders = [];
        this.countryStatus = true;
        this.byDefaultType = 1;
        this.updateAddrssStatus = false;
        this.shuttleType = [
            {
                name: "AC",
                value: "ac"
            },
            {
                name: "Non-AC",
                value: "non-ac"
            }
        ];
        this.seatType = [
            "Type 1 –11 Seater", "Type 2 –14 Seater", "Type 3 –33 Seater", "Type 4 –49 Seater Bus", "Type 5 –62 Seater Bus"
        ];
        this.seatNo = [
            11, 14, 33, 49, 62
        ];
        this.driverStatus = false;
        this.shuttleRouteStatus = false;
        this.currencyOptions = [];
        this.setValues = data => {
            if (data) {
                if (data.driver) {
                    // console.log(data.driver);
                    data.driver['fullName'] = (data.driver['firstName'] + ' ' + data.driver['lastName']);
                    this.shuttleForm.patchValue({
                        name: data.name,
                        driver: data.driver,
                        shuttleRoute: data.shuttleRoute,
                        shuttleType: data.shuttleType,
                        seatType: data.seatType,
                        currency: data.currency,
                        venderId: data.venderId._id
                        // startTime: moment(data.startTime, 'HH:mm:ss').toDate(),
                        // endTime: moment(data.endTime, 'HH:mm:ss').toDate(),
                    });
                }
            }
        };
    }
    ngOnInit() {
        this.currencyOptions = this.comm.currencyOptions;
        this.route.params.subscribe(params => {
            this.id = params["id"];
            if (this.id != undefined) {
                this.getShuttleById(this.id);
            }
        });
        this.allVenders();
        this.shuttleForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            driver: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            shuttleRoute: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            shuttleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            seatType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            venderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
            // startTime: new FormControl(
            //   "",
            //   Validators.compose([Validators.required])
            // ),
            // endTime: new FormControl("", Validators.compose([Validators.required])),
        });
        this.api.getAllShuttleDriver(this.id).subscribe(res => {
            console.log("drivers", res);
            this.driverList = res["data"];
            this.driverList.map((i) => { i.fullName = i.firstName + ' ' + i.lastName; });
            this.config1 = {
                displayKey: "fullName",
                search: true,
                height: "150px",
                placeholder: "Select",
                customComparator: () => { },
                limitTo: this.driverList.length,
                moreText: "more",
                noResultsFound: "No results found!",
                searchPlaceholder: "Search",
                searchOnKey: "fullName" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
            };
        });
        this.api.getAllFreeRoute(this.id).subscribe(res => {
            this.shuttleRouteList = res["data"];
        });
        this.dropDownSetting = this.comm.dropSetting;
    }
    getShuttleById(id) {
        this.api.getShuttleById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.shuttleDetail = res["data"];
                this.setValues(this.shuttleDetail);
            }
        });
    }
    allVenders() {
        this.api.getVendersList().subscribe(res => {
            if (res["response"]["success"]) {
                this.venders = res["data"];
            }
        });
    }
    selectionChanged1(event) {
        if (event.value) {
            this.driverStatus = true;
        }
        else {
            this.driverStatus = false;
            this.shuttleForm.controls["driver"].setValue("");
        }
    }
    selectionChanged2(event) {
        if (event.value) {
            this.shuttleRouteStatus = true;
        }
        else {
            this.shuttleRouteStatus = false;
            this.shuttleForm.controls["shuttleRoute"].setValue("");
        }
    }
    update() {
        this.submitted = true;
        if (this.submitted && this.shuttleForm.valid) {
            var data = {
                name: this.shuttleForm.controls["name"].value,
                driver: this.shuttleForm.controls["driver"].value._id,
                shuttleRoute: this.shuttleForm.controls["shuttleRoute"].value,
                shuttleType: this.shuttleForm.controls["shuttleType"].value,
                seatType: this.shuttleForm.controls["seatType"].value,
                venderId: this.shuttleForm.controls["venderId"].value
                // startTime: new Date(this.shuttleForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
                // endTime: new Date(this.shuttleForm.controls["endTime"].value).toLocaleTimeString('it-IT')
            };
            data['seatsAvailable'] = this.seatNo[data.seatType];
            this.api.updateShuttle(this.id, data).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/shuttle/shuttle"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
    submit() {
        this.submitted = true;
        if (this.submitted && this.shuttleForm.valid) {
            var shuttleRoute = [];
            for (let data of this.shuttleForm.value.shuttleRoute) {
                shuttleRoute.push(data._id);
            }
            var data = {
                name: this.shuttleForm.controls["name"].value,
                driver: this.shuttleForm.controls["driver"].value._id,
                shuttleRoute: shuttleRoute,
                shuttleType: this.shuttleForm.controls["shuttleType"].value,
                seatType: this.shuttleForm.controls["seatType"].value,
                venderId: this.shuttleForm.controls["venderId"].value
                // startTime: new Date(this.shuttleForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
                // endTime: new Date(this.shuttleForm.controls["endTime"].value).toLocaleTimeString('it-IT')
            };
            data['seatsAvailable'] = this.seatNo[data.seatType];
            this.api.addShuttle(data).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/shuttle/shuttle"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
};
AddEditShuttleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AddEditShuttleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-shuttle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit-shuttle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit-shuttle.component.scss */ "./src/app/cooldash/pages/shuttle/shuttles/add-edit-shuttle/add-edit-shuttle.component.scss")).default]
    })
], AddEditShuttleComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvc2h1dHRsZXMvc2h1dHRsZS9zaHV0dGxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShuttleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuttleComponent", function() { return ShuttleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let ShuttleComponent = class ShuttleComponent {
    constructor(api, comm, router) {
        this.api = api;
        this.comm = comm;
        this.router = router;
        this.serialNumber = 0;
        this.loader = true;
        this.history = window.history;
        this.shuttleList = [];
        this.searchText = "";
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25
        };
        this.seatType = [
            "Type 1 –11 Seater", "Type 2 –14 Seater", "Type 3 –33 Seater", "Type 4 –49 Seater Bus", "Type 5 –62 Seater Bus"
        ];
    }
    ngOnInit() {
        this.currentPage = 1;
        this.imageUrl = this.comm.imageUrl;
        this.getAllShuttle();
    }
    setPage() {
        this.getAllShuttle();
    }
    searchShuttle() {
        this.currentPage = 1;
        this.getAllShuttle();
    }
    reset() {
        this.currentPage = 1;
        this.searchText = '';
        this.getAllShuttle();
    }
    getAllShuttle() {
        var page = this.currentPage;
        this.api.getAllShuttle(page).subscribe(response => {
            if (response['response']['success']) {
                this.shuttleList = response["data"]["list"];
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: page,
                    itemsPerPage: 25,
                    totalItems: response["data"]["count"]
                };
            }
            if (!response['response']["success"])
                return;
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getAllShuttle();
    }
    addShuttle() {
        this.router.navigate(['shuttle/add-shuttle']);
    }
    onViewShuttle(item) {
        this.router.navigate(['shuttle/view-shuttle', item._id]);
    }
    onEditShuttle(item) {
        this.router.navigate(['shuttle/edit-shuttle', item._id]);
    }
    deleteShuttle(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Shuttle!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    Id: item._id
                };
                this.api.deleteShuttle(item._id, data).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getAllShuttle();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    updateStatus(item) {
        // this.loader = true;
        let data = { status: item.status ? 1 : 0 };
        this.api.updateShuttle(item._id, data).subscribe(res => {
            // this.loader = false;
        });
    }
};
ShuttleComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ShuttleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shuttle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shuttle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shuttle.component.scss */ "./src/app/cooldash/pages/shuttle/shuttles/shuttle/shuttle.component.scss")).default]
    })
], ShuttleComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvc2h1dHRsZXMvdmlldy1zaHV0dGxlL3ZpZXctc2h1dHRsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewShuttleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewShuttleComponent", function() { return ViewShuttleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewShuttleComponent = class ViewShuttleComponent {
    constructor(router, route, comm, api) {
        this.router = router;
        this.route = route;
        this.comm = comm;
        this.api = api;
        this.history = window.history;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.getShuttleById(this.id);
        });
    }
    getShuttleById(id) {
        this.api.getShuttleById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.shuttleDetail = res["data"];
            }
        });
    }
};
ViewShuttleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewShuttleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-shuttle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-shuttle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-shuttle.component.scss */ "./src/app/cooldash/pages/shuttle/shuttles/view-shuttle/view-shuttle.component.scss")).default]
    })
], ViewShuttleComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvdmVuZGVyL2FkZC1lZGl0LXZlbmRlci9hZGQtZWRpdC12ZW5kZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddEditVenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditVenderComponent", function() { return AddEditVenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");








let AddEditVenderComponent = class AddEditVenderComponent {
    constructor(formBuilder, comm, api, toastr, router, route, mapsAPILoader) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.history = window.history;
        this.submitted = false;
        this.updateAddrssStatus = false;
        this.setValues = data => {
            if (data) {
                this.latitude = data.detail.latitude;
                this.longitude = data.detail.longitude;
                this.address = data.detail.address;
                this.venderForm.patchValue({
                    firstName: data.detail.firstName,
                    lastName: data.detail.lastName,
                    email: data.detail.email,
                    countryCode: data.detail.countryCode,
                    phone: data.detail.phone,
                    address: data.detail.address
                });
            }
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            if (this.id != undefined) {
                this.getVenderById(this.id);
            }
        });
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder();
        });
        this.venderForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)])),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)])),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)])),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
        if (!this.id) {
            this.venderForm.get('address').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.venderForm.get('address').updateValueAndValidity();
            this.venderForm.get('email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]);
            this.venderForm.get('email').updateValueAndValidity();
            this.venderForm.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
            this.venderForm.get('password').updateValueAndValidity();
        }
    }
    getVenderById(id) {
        this.api.getVenderById(id).subscribe(res => {
            if (res["response"]["success"]) {
                console.log(res);
                this.venderDetail = res["data"];
                this.setValues(res["data"]);
            }
        });
    }
    // getAddress(lat, long) {
    //   this.geoCoder.geocode(
    //     { location: { lat: lat, lng: long } },
    //     (results, status) => {
    //       this.addressLocation = results[0].formatted_address;
    //       this.address = {
    //         address: this.addressLocation,
    //         latitude: lat,
    //         longitude: long
    //       };
    //     }
    //   );
    // }
    handleAddress(address) {
        this.updateAddrssStatus = true;
        if (address.formatted_address) {
            // console.log(address.formatted_address, address.geometry.location.lat(), address.geometry.location.lng())
            this.address = address.formatted_address;
            this.latitude = address.geometry.location.lat();
            this.longitude = address.geometry.location.lng();
            this.venderForm.controls["address"].setValue(address.formatted_address);
        }
    }
    submit() {
        this.submitted = true;
        if (this.address && this.updateAddrssStatus) {
            if (this.submitted && this.venderForm.valid) {
                var data = this.venderForm.value;
                // delete data.password
                if (this.address) {
                    console.log(this.address);
                    data.address = this.address;
                    data.latitude = this.latitude;
                    data.longitude = this.longitude;
                }
                this.api.addVender(data).subscribe(res => {
                    if (res["response"]["success"]) {
                        this.toastr.successToastr(res["response"]["message"]);
                        this.router.navigate(["/shuttle/vender"]);
                    }
                    else {
                        this.toastr.errorToastr(res["response"]["message"]);
                    }
                });
            }
        }
        else if (this.venderForm['controls'].outlet.value && (this.updateAddrssStatus == false)) {
            this.toastr.errorToastr("Please select a valid address from suggestions.");
        }
    }
    update() {
        this.submitted = true;
        if (this.venderForm.valid) {
            var data = this.venderForm.value;
            delete data.password;
            if (this.address) {
                data.address = this.address;
                data.latitude = this.latitude;
                data.longitude = this.longitude;
            }
            this.api.updateVender(this.id, data).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/shuttle/vender"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
};
AddEditVenderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] }
];
AddEditVenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-vender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit-vender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit-vender.component.scss */ "./src/app/cooldash/pages/shuttle/vender/add-edit-vender/add-edit-vender.component.scss")).default]
    })
], AddEditVenderComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3NodXR0bGUvdmVuZGVyL3ZlbmRlci1saXN0L3ZlbmRlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: VenderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderListComponent", function() { return VenderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let VenderListComponent = class VenderListComponent {
    constructor(comm, api, toastr, router, route) {
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.loader = true;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.searchText = "";
    }
    ngOnInit() {
        this.getAllVenders();
    }
    getAllVenders() {
        var page = this.currentPage;
        this.api.getAllVenders(page, this.searchText).subscribe((res) => {
            if (res["response"]["success"]) {
                console.log(res);
                this.rows = res["data"]["list"];
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: this.currentPage,
                    itemsPerPage: 25,
                    totalItems: res["data"]["count"],
                };
            }
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getAllVenders();
    }
    addVender() {
        this.router.navigate(["shuttle/add-vender"]);
    }
    editVender(id) {
        this.router.navigate(["shuttle/edit-vender/" + id]);
    }
    deleteVender(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Vender!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                this.api.deleteVender(item._id).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: "Deleted!",
                            text: "Vender deleted Successfully",
                            icon: "success",
                        });
                        this.getAllVenders();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    viewVender() {
        this.router.navigate(["shuttle/view-vender"]);
    }
    updateStatus(event) { }
};
VenderListComponent.ctorParameters = () => [
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
VenderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vender-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vender-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vender-list.component.scss */ "./src/app/cooldash/pages/shuttle/vender/vender-list/vender-list.component.scss")).default]
    })
], VenderListComponent);



/***/ })

}]);
//# sourceMappingURL=pages-shuttle-shuttle-module-es2015.js.map