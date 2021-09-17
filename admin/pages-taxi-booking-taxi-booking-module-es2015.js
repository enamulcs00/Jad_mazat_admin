(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-taxi-booking-taxi-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">\r\n                                Taxi Booking\r\n                            </h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body add_driver_outer\">\r\n            <form [formGroup]=\"taxiForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">First Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && taxiForm.controls.firstName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.required\">\r\n                                First Name is required\r\n                            </div>\r\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.minlength\">\r\n                                First Name must be at least 3 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.maxlength\">\r\n                                First Name can be max 16 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.pattern\">\r\n                                Invalid character.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Last Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && taxiForm.controls.lastName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.required\">\r\n                                Last Name is required\r\n                            </div>\r\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.minlength\">\r\n                                Last Name must be at least 3 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.maxlength\">\r\n                                Last Name can be max 16 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.pattern\">\r\n                                Invalid character.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"category\">Phone Number</label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <div class=\"login_email country_code_div\">\r\n                                    <div class=\"loginmail_input\" *ngIf=\"countryCodes && countryCodes.length>0\">\r\n                                        <ngx-select-dropdown (change)=\"selectionChanged1($event)\" formControlName=\"countryCode\" [config]=\"config1\" [options]=\"countryCodes\">\r\n                                        </ngx-select-dropdown>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-8\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"phone\" placeholder=\"\" />\r\n                                </div>\r\n                                <div *ngIf=\"submitted && taxiForm.controls.phone.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.required\">\r\n                                        Phone Number is required\r\n                                    </div>\r\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.minlength\">\r\n                                        Phone Number must be at least 7 characters long.\r\n                                    </div>\r\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.maxlength\">\r\n                                        Phone Number can be max 15 characters long.\r\n                                    </div>\r\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.pattern\">\r\n                                        Phone Number not valid.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Email</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && taxiForm.controls.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"taxiForm.controls.email.errors.required\">\r\n                                Email is required\r\n                            </div>\r\n                            <div *ngIf=\"taxiForm.controls.email.errors.pattern\">\r\n                                Email is not valid\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-5 main_map_Page\">\r\n                        <div class=\"mapnew\">\r\n                            <div class=\"row \">\r\n                                <div class=\"form-group col-md-12\" formGroupName=\"source\">\r\n                                    <label for=\"category\">Source Address</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input class=\"form-control\" [attr.disabled]=\"directionStatus ? '' : null\" type=\"text\" name=\"name\" formControlName=\"address\" placeholder=\"\" ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddress($event)\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && taxiForm.controls['source'].get('address').errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"taxiForm.controls['source'].get('address').errors.required\">\r\n                                            Address is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\" formGroupName=\"destination\">\r\n                                    <label for=\"category\">Destination Address</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"address\" placeholder=\"\" [attr.disabled]=\"directionStatus ? '' : null\" ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleDestinationAddress($event)\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"submitted && taxiForm.controls['destination'].get('address').errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"taxiForm.controls['destination'].get('address').errors.required\">\r\n                                            Address is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"book-now-reset add-booking-button\" *ngIf=\"longitude && longitude1\">\r\n                                <span>\r\n                                <input *ngIf=\"!showbtn\" (click)=\"getDirections()\" type=\"submit\" class=\"save btn-info button-submit\"\r\n                                    name=\"button\" value=\"Confirmed direction\" />\r\n                                <input *ngIf=\"showbtn\" (click)=\"editDirection()\" type=\"submit\" class=\"save btn-info button-submit\"\r\n                                    name=\"button\" value=\"Edit direction\" />\r\n                            </span>\r\n                            </div>\r\n                            <div class=\"main_map_Page2\">\r\n                                <label>Note :</label>\r\n                                <textarea class=\"form-control\" name=\"note\" formControlName=\"note\" value=\"\" placeholder=\"Message\">\r\n                            </textarea>\r\n                                <div *ngIf=\"submitted && taxiForm.controls.email.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"taxiForm.controls.email.errors.required\">\r\n                                        Note is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-7 map_page_3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"types\">Vehicle Type</label>\r\n                            <div class=\"input-group\" *ngIf=\"vehicleTypes\">\r\n                                <select [attr.disabled]=\"showSelectVehicle ? '' : null\" class=\"form-control\" formControlName=\"vehicleTypeId\" (change)=\"onChange($event.target.value)\">\r\n                                    <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                    <option *ngFor=\"let type of vehicleTypes\" [value]=\"type._id\">\r\n                                        {{ type.name }}\r\n                                    </option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && taxiForm.controls.vehicleTypeId.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"taxiForm.controls.vehicleTypeId.errors.required\">\r\n                                        Vehicle Type is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n                            <div *ngIf=\"!show\">\r\n                                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEndSource($event)\"></agm-marker>\r\n                                <agm-marker [latitude]=\"latitude1\" [longitude]=\"longitude1\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEndDestination($event)\"></agm-marker>\r\n                            </div>\r\n                            <div *ngIf=\"show\">\r\n                                <agm-direction [origin]=\"dir.search\" [destination]=\"dir.destination\"></agm-direction>\r\n                            </div>\r\n                        </agm-map>\r\n                        <div class=\"total-price total-price1\">\r\n                            <b>Fare Estimation</b>\r\n                            <hr />\r\n                            <ul class=\"list-inline\">\r\n                                <li id=\"MinFare\">\r\n                                    <b>Fare</b> : <em id=\"minimum_fare_price\" name=\"fare\">{{ fare }}</em>\r\n                                </li>\r\n                                <li id=\"BaseFare\">\r\n                                    <!-- $ -->\r\n                                    <b>Base Fare</b> : <em id=\"base_fare_price\" name=\"fare\">{{ baseFare }}</em>\r\n                                </li>\r\n                                <li id=\"FixFare\" style=\"display:none\">\r\n                                    <b>Fix Fare</b> : <em id=\"fix_fare_price\"></em>\r\n                                </li>\r\n                                <li id=\"DistanceFare\">\r\n                                    <b>Distance <em id=\"dist_fare\"></em>\r\n                                    <em id=\"change_eUnit\"></em></b>:\r\n                                    <em id=\"dist_fare_price\">{{ kmDistance }}</em>\r\n                                </li>\r\n                                <li id=\"TimeFare\">\r\n                                    <b>Time<em id=\"dist_fare\"></em> </b> :\r\n                                    <em id=\"time_fare_price\"> </em>\r\n                                    <em id=\"dist_fare_price\">{{ timetaken }}</em>\r\n                                </li>\r\n                            </ul>\r\n                            <span>Total Fare<b> : \r\n                                <em id=\"total_fare_price\"> {{ fare }}</em>\r\n                                </b></span>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group form-actions add_e\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success mr-4\" [disabled]=\"isTaxiRequested\" (click)=\"submit()\">\r\n                        Book Now\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"reset()\">\r\n                        Reset\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 user_title\">\r\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Taxi Bookings</h6>\r\n                </div>\r\n                <div class=\"col-md-6 text-right add_btn\">\r\n                    <button class=\"btn btn-primary\" (click)=\"addTaxiBookings()\">\r\n            <span class=\"fas fa-plus\"></span> Create Booking\r\n          </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n                <div class=\"col-md-6 col-lg-6 col-xl-3  user_filter\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"Search Name\">\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-6 col-xl-3 user_filter\">\r\n                    <input class=\"form_control filter_inputf dtpcker\" #startdate matInput [matDatepicker]=\"startdate\" (dateInput)=\"getStartDate($event)\" placeholder=\"Start date\" readonly>\r\n                    <mat-datepicker-toggle [for]=\"startdate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startdate></mat-datepicker>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-6 col-xl-3 user_filter mt20\">\r\n                    <input class=\"form_control filter_inputf dtpcker\" #enddate matInput [matDatepicker]=\"enddate\" (dateInput)=\"getEndDate($event)\" placeholder=\"End date\" readonly>\r\n                    <mat-datepicker-toggle [for]=\"enddate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #enddate></mat-datepicker>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-6 col-xl-3 user_serch_btn mt20\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-2 pr-2\" (click)=\"searchBookings()\">Search</button>\r\n                    <button type=\"reset\" class=\"btn btn-primary pl-3 pr-3 ml-2\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th style=\"min-width: 5rem;\">Order No.</th>\r\n                            <th style=\"min-width: 6rem;\">User Name</th>\r\n                            <th style=\"min-width: 6rem;\">Driver Name</th>\r\n                            <th style=\"min-width: 13rem;\">Source Address</th>\r\n                            <th style=\"min-width: 13rem;\">Destination Address</th>\r\n                            <th>Distance</th>\r\n                            <th>Total Amount</th>\r\n                            <th style=\"min-width: 9rem;\">Booking Start Date</th>\r\n                            <th style=\"min-width: 8rem;\">Booking End Date</th>\r\n                            <th style=\"min-width: 8rem;\">Booked By</th>\r\n                            <th>Status</th>\r\n                            <th>Phone Number</th>\r\n                            <th>\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of bookingList | paginate: config  ; let i = index\">\r\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\r\n                            <td>{{ item.taxiOrderNo }}</td>\r\n                            <td>{{ item.userFirstName }} {{ item.userLastName }}</td>\r\n                            <td>{{ item.driver.firstName }} {{ item.driver.lastName }}</td>\r\n                            <td>\r\n                                {{ item.source.address.length\r\n                                < 20 ? item.source.address : item.source.address.slice(0, 20) + \"....\" }} </td>\r\n                                    <td>{{ item.destination.address.length\r\n                                        < 20 ? item.destination.address : item.destination.address.slice(0, 20) + \"....\" }} </td>\r\n                                            <td>{{item.distance}}</td>\r\n                                            <td>{{item.totalAmount}}</td>\r\n                                            <td>\r\n                                                {{ item.bookingStartDate | date: \"yyyy-MM-dd\" }}\r\n                                            </td>\r\n                                            <td>\r\n                                                {{ item.bookingEndDate | date: \"yyyy-MM-dd\" }}\r\n                                            </td>\r\n\r\n                                            <td *ngIf=\"item.bookingType == 0\">User</td>\r\n                                            <td *ngIf=\"item.bookingType == 1\">Driver</td>\r\n                                            <td *ngIf=\"item.bookingType == 2\">Admin</td>\r\n\r\n                                            <td *ngIf=\"item.status == 0\">On the way</td>\r\n                                            <td *ngIf=\"item.status == 1\">Reached</td>\r\n                                            <td *ngIf=\"item.status == 2\">Start</td>\r\n                                            <td *ngIf=\"item.status == 3\">Completed</td>\r\n                                            <td *ngIf=\"item.status == 4\">Paid</td>\r\n                                            <td *ngIf=\"item.status == 5\">Rate</td>\r\n                                            <td *ngIf=\"item.status == 6\">Skip</td>\r\n                                            <td *ngIf=\"item.status == 11\">Cancel by user</td>\r\n                                            <td *ngIf=\"item.status == 12\">Cancel by driver</td>\r\n                                            <td>{{item.countryCode}}-{{item.phone}}</td>\r\n                                            <td>\r\n                                                <div class=\"product_action\">\r\n                                                    <button class=\"btn btn-warning mr-1\" (click)=\"onViewItem(item)\" title=\"View\">\r\n                    <span class=\"fas fa-fw fa-eye\"></span>\r\n                  </button>\r\n                                                </div>\r\n                                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"bookingList.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <div *ngIf=\"bookingList && bookingList.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"bookingsDetail\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h6 class=\"m-0 font-weight-bold text-primary\">View Taxi Booking</h6>\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n              <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                <span class=\"fas fa-arrow-left\"></span> Back\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div *ngIf=\"bookingsDetail\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Taxi Order No</label>\r\n              <input type=\"text\" name=\"Name\" [value]=\"bookingsDetail.taxiOrderNo\" class=\"form-control\" disabled />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label>User Name</label>\r\n                <input type=\"text\" name=\"Name\" [value]=\"bookingsDetail.userFirstName + bookingsDetail.userLastName\" class=\"form-control\" disabled />\r\n            </div>\r\n          </div>\r\n           <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Source Address</label>\r\n              <textarea row=\"4\" type=\"text\" class=\"form-control\" id=\"body\" [value]=\"\r\n                  bookingsDetail.source.address\" class=\"form-control\" disabled></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Destination Address</label>\r\n              <textarea row=\"4\" type=\"text\" class=\"form-control\" id=\"body\" [value]=\"\r\n                  bookingsDetail.destination.address\" class=\"form-control\" disabled></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Distance</label>\r\n              <input type=\"text\" name=\"Name\" [value]=\"bookingsDetail.distance\" class=\"form-control\" disabled />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Total Booking</label>\r\n              <input type=\"text\" name=\"discount\" [value]=\"bookingsDetail.totalAmount\" class=\"form-control\"\r\n                disabled />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Payment Mode</label>\r\n              <input type=\"text\" name=\"mode\" [value]=\"bookingsDetail.paymentMode\" class=\"form-control\"\r\n                disabled />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Phone Number</label>\r\n              <input type=\"text\" name=\"number\" [value]=\"bookingsDetail.countryCode+ '-' + bookingsDetail.phone\" class=\"form-control\"\r\n                disabled />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\n.total-price1 {\n  margin: 26px 0 0px 0px;\n  width: 100%;\n}\n\n.mapnew {\n  border: 1px solid #ddd;\n  height: 100%;\n  padding: 15px;\n}\n\n.main_map_Page {\n  margin: 0;\n  padding: 0px;\n  padding: 19px 12px;\n  width: 39%;\n}\n\n.map_page_3 {\n  width: 59%;\n}\n\nagm-map {\n  height: 400px;\n}\n\n#cover-spin::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 48%;\n  top: 40%;\n  width: 40px;\n  height: 40px;\n  border-style: solid;\n  border-color: black;\n  border-top-color: transparent;\n  border-width: 4px;\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s linear infinite;\n  animation: spin 0.8s linear infinite;\n}\n\n#cover-spin {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 9999;\n  display: block;\n}\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n#cover-spin::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 48%;\n  top: 40%;\n  width: 40px;\n  height: 40px;\n  border-style: solid;\n  border-color: black;\n  border-top-color: transparent;\n  border-width: 4px;\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s linear infinite;\n  animation: spin 0.8s linear infinite;\n}\n\n.add_e button {\n  font-size: 18px;\n  padding: 7px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdGF4aS1ib29raW5nL2FkZC10YXhpL0M6XFxVc2Vyc1xccmFnaHZcXERlc2t0b3BcXERFVlxcVmVuZ29cXG1hemF0X2FkbWluX3BhbmVsL3NyY1xcYXBwXFxjb29sZGFzaFxccGFnZXNcXHRheGktYm9va2luZ1xcYWRkLXRheGlcXGFkZC10YXhpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy90YXhpLWJvb2tpbmcvYWRkLXRheGkvYWRkLXRheGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSwrQkFBQTtFQ0NOO0VEQ0U7SUFDSSxpQ0FBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLHVCQUFBO0VDQU47RURFRTtJQUNJLHlCQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdGF4aS1ib29raW5nL2FkZC10YXhpL2FkZC10YXhpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMTRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gICAgZm9udC1zaXplOiA5NSU7XHJcbiAgICBjb2xvcjogI2Y1NTM1MztcclxufVxyXG5cclxuLnRvdGFsLXByaWNlMSB7XHJcbiAgICBtYXJnaW46IDI2cHggMCAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXBuZXcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5tYWluX21hcF9QYWdlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmc6IDE5cHggMTJweDtcclxuICAgIHdpZHRoOiAzOSU7XHJcbn1cclxuXHJcbi5tYXBfcGFnZV8zIHtcclxuICAgIHdpZHRoOiA1OSU7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuI2NvdmVyLXNwaW46OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0OCU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jY292ZXItc3BpbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4jY292ZXItc3Bpbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5hZGRfZSBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XHJcbn0iLCIuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4xNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgZm9udC1zaXplOiA5NSU7XG4gIGNvbG9yOiAjZjU1MzUzO1xufVxuXG4udG90YWwtcHJpY2UxIHtcbiAgbWFyZ2luOiAyNnB4IDAgMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXBuZXcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tYWluX21hcF9QYWdlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDE5cHggMTJweDtcbiAgd2lkdGg6IDM5JTtcbn1cblxuLm1hcF9wYWdlXzMge1xuICB3aWR0aDogNTklO1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuI2NvdmVyLXNwaW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDglO1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbiNjb3Zlci1zcGluIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiNjb3Zlci1zcGluOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ4JTtcbiAgdG9wOiA0MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uYWRkX2UgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA3cHggMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddTaxiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaxiComponent", function() { return AddTaxiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/order.service */ "./src/app/cooldash/services/order.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");










let AddTaxiComponent = class AddTaxiComponent {
    constructor(formBuilder, comm, api, toastr, mapsAPILoader, router, orderService, spinner) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.mapsAPILoader = mapsAPILoader;
        this.router = router;
        this.orderService = orderService;
        this.spinner = spinner;
        this.history = window.history;
        this.submitted = false;
        this.countryStatus = true;
        this.updateAddrssStatus = false;
        this.countryStatus1 = false;
        this.show = false;
        this.directionStatus = false;
        this.showbtn = false;
        this.respons = false;
        this.showSelectVehicle = true;
        this.baseFare = 0;
        this.fare = 0;
        this.isTaxiRequested = false;
        this.getTime = (services, search, destination) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.getDistanceMatrix(services, {
                origins: [search],
                destinations: [destination],
                travelMode: 'DRIVING'
            });
            console.log("result['rows'][0].elements[0].distance", result['rows'][0].elements[0].distance);
            return {
                kmDistance: result['rows'][0].elements[0].distance.value,
                distance: result['rows'][0].elements[0].distance.text,
                time: result['rows'][0].elements[0].duration.text
            };
        });
        this.getDistanceMatrix = (service, data) => new Promise((resolve, reject) => {
            service.getDistanceMatrix(data, (response, status) => {
                if (status === 'OK') {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            });
        });
    }
    ngOnInit() {
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder();
        });
        this.taxiForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ]*$")])),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ]*$")])),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, ,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
            source: this.formBuilder.group({
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }),
            destination: this.formBuilder.group({
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }),
            vehicleTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.comm.getCountryCode().subscribe(res => {
            this.countryCodes = res["countryArray"];
            this.config1 = {
                displayKey: "Code",
                search: true,
                height: "150px",
                placeholder: "Select",
                customComparator: () => { },
                limitTo: this.countryCodes.length,
                moreText: "more",
                noResultsFound: "No results found!",
                searchPlaceholder: "Search",
                searchOnKey: "Code" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
            };
            this.taxiForm.controls["countryCode"].setValue(this.countryCodes[0]);
        });
        this.setCurrentLocation();
    }
    selectionChanged1(event) {
        if (event.value) {
            this.countryStatus1 = true;
        }
        else {
            this.countryStatus1 = false;
            this.taxiForm.controls["countryCode"].setValue("");
        }
    }
    onChange(event) {
        this.calculateDistance();
        let obj = this.vehicleTypes.find(o => o._id == event);
        if (obj) {
            const dist = Number(this.kmDistance) / 1000;
            this.distKm = dist;
            this.baseFare = obj.basefare;
            var amount = 0;
            amount = Math.round((obj.fare) * dist);
            if (amount < obj.basefare) {
                this.fare = obj.basefare;
            }
            else {
                this.fare = amount;
            }
        }
    }
    calculateDistance() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let services = new google.maps.DistanceMatrixService();
            const search = new google.maps.LatLng(this.latitude, this.longitude);
            const destination = new google.maps.LatLng(this.latitude1, this.longitude1);
            var cc = yield this.getTime(services, search, destination);
            this.timetaken = cc.time;
            console.log("cc", cc);
            this.kmDistance = cc.kmDistance;
            this.distance = cc.distance;
            return (1);
        });
    }
    handleAddress(address) {
        this.updateAddrssStatus = true;
        if (address.formatted_address) {
            this.latitude = address.geometry.location.lat();
            this.longitude = address.geometry.location.lng();
            this.source = {
                address: address.formatted_address,
                cordinates: [address.geometry.location.lat(), address.geometry.location.lng()]
            };
            this.taxiForm.controls['source'].get('address').setValue(address.formatted_address);
        }
        this.getSourceAddress(this.latitude, this.longitude);
    }
    getAllVerticleType() {
        const list = [];
        this.orderService.getVehicleTypes(this.latitude, this.longitude).subscribe(response => {
            console.log(response);
            if (response["sucess"]) {
                this.vehicleTypes = response["data"];
                // console.log(this.vehicleType)
            }
        });
    }
    handleDestinationAddress(address) {
        this.updateAddrssStatus = true;
        if (address.formatted_address) {
            this.latitude1 = address.geometry.location.lat();
            this.longitude1 = address.geometry.location.lng();
            this.destination = {
                address: address.formatted_address,
                cordinates: [address.geometry.location.lat(), address.geometry.location.lng()]
            };
            this.taxiForm.controls['destination'].get('address').setValue(address.formatted_address);
        }
        this.getDestinationAddress(this.latitude1, this.longitude1);
    }
    markerDragEndSource($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getSourceAddress(this.latitude, this.longitude);
    }
    markerDragEndDestination($event) {
        this.latitude1 = $event.coords.lat;
        this.longitude1 = $event.coords.lng;
        this.getDestinationAddress(this.latitude1, this.longitude1);
    }
    setCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 11;
                this.getAllVerticleType();
                this.getSourceAddress(this.latitude, this.longitude);
            });
        }
    }
    getSourceAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.source = {
                        address: results[0].formatted_address,
                        cordinates: [results[0].geometry.location.lat(), results[0].geometry.location.lng()]
                    };
                    this.taxiForm.controls['source'].get('address').setValue(results[0].formatted_address);
                    results[0].address_components.forEach(key => {
                        if (key.types[0] === 'country') {
                            this.sourceCountry = key.long_name;
                        }
                    });
                    this.getAllVerticleType();
                }
            }
        });
    }
    getDestinationAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.destination = {
                        address: results[0].formatted_address,
                        cordinates: [results[0].geometry.location.lat(), results[0].geometry.location.lng()]
                    };
                    this.taxiForm.controls['destination'].get('address').setValue(results[0].formatted_address);
                    results[0].address_components.forEach(key => {
                        if (key.types[0] === 'country') {
                            this.destinationCountry = key.long_name;
                        }
                    });
                }
            }
        });
    }
    getDirections() {
        if (this.sourceCountry === this.destinationCountry) {
            this.directionStatus = true;
            this.showSelectVehicle = false;
            this.calculateDistance();
            if (this.longitude && this.longitude && this.latitude1 && this.longitude1) {
                this.show = true;
                this.showbtn = true;
                this.dir = {
                    search: { lat: (this.latitude), lng: (this.longitude) },
                    destination: { lat: this.latitude1, lng: this.longitude1 }
                };
            }
        }
        else {
            this.toastr.errorToastr("Source and distination should be in same country");
        }
    }
    editDirection() {
        this.show = false;
        this.directionStatus = false;
        this.showbtn = false;
        this.showSelectVehicle = false;
        this.baseFare = '';
        this.fare = '';
        this.timetaken = '';
        this.kmDistance = '';
        this.taxiForm.controls.vehicleTypeId.setValue('');
    }
    submit() {
        this.submitted = true;
        if (this.taxiForm.valid) {
            var formData = this.taxiForm.value;
            var data = {
                vehicleTypeId: formData.vehicleTypeId,
                userFirstName: formData.firstName,
                userLastName: formData.lastName,
                countryCode: formData.countryCode.Code,
                phone: formData.phone,
                "source": {
                    "address": formData.source.address,
                    "latitude": this.latitude,
                    "longitude": this.longitude,
                    "cordinates": [this.longitude, this.latitude]
                },
                "destination": {
                    "address": formData.destination.address,
                    "latitude": this.latitude1,
                    "longitude": this.longitude1,
                    "cordinates": [this.longitude1, this.latitude1]
                },
                "note": formData.note,
                "verticalType": 2,
                "distance": this.kmDistance,
                "subTotalAmount": this.fare,
                "totalAmount": this.fare,
                "paymentMode": "Cash",
                seats: 1,
                bookingType: 2
            };
            this.requestTaxi(data);
            this.bookingInterval = setInterval(() => {
                this.requestTaxi(data);
            }, 15 * 1000);
        }
    }
    requestTaxi(data) {
        this.orderService.taxiBooking(data).subscribe(response => {
            console.log("taxi booking", response);
            if (response["sucess"]) {
                if (response["requestId"])
                    if (this.isTaxiRequested) {
                        this.toastr.successToastr("Connecting to driver");
                    }
                    else {
                        this.toastr.successToastr("Request sent successfully");
                    }
                this.isTaxiRequested = true;
            }
            else {
                clearInterval(this.bookingInterval);
                this.isTaxiRequested = false;
                this.toastr.errorToastr(response.message);
            }
        });
    }
    reset() {
        this.taxiForm.reset();
        clearInterval(this.bookingInterval);
        this.isTaxiRequested = false;
        this.comm.hideSpinner();
    }
};
AddTaxiComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
];
AddTaxiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-taxi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-taxi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-taxi.component.scss */ "./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.scss")).default]
    })
], AddTaxiComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/taxi-booking-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/taxi-booking-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: TaxiBookingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiBookingRoutingModule", function() { return TaxiBookingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taxi_booking_taxi_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxi-booking/taxi-booking.component */ "./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.ts");
/* harmony import */ var _view_taxi_booking_view_taxi_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-taxi-booking/view-taxi-booking.component */ "./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.ts");
/* harmony import */ var _add_taxi_add_taxi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-taxi/add-taxi.component */ "./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.ts");






const routes = [
    {
        path: "",
        data: {
            title: "Taxi Booking"
        },
        children: [
            {
                path: "taxi-booking",
                component: _taxi_booking_taxi_booking_component__WEBPACK_IMPORTED_MODULE_3__["TaxiBookingComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view/:id",
                component: _view_taxi_booking_view_taxi_booking_component__WEBPACK_IMPORTED_MODULE_4__["ViewTaxiBookingComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add",
                component: _add_taxi_add_taxi_component__WEBPACK_IMPORTED_MODULE_5__["AddTaxiComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let TaxiBookingRoutingModule = class TaxiBookingRoutingModule {
};
TaxiBookingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TaxiBookingRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/taxi-booking.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/taxi-booking.module.ts ***!
  \********************************************************************/
/*! exports provided: TaxiBookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiBookingModule", function() { return TaxiBookingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _taxi_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxi-booking-routing.module */ "./src/app/cooldash/pages/taxi-booking/taxi-booking-routing.module.ts");
/* harmony import */ var _taxi_booking_taxi_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxi-booking/taxi-booking.component */ "./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/material/material.module */ "./src/app/cooldash/pages/material/material.module.ts");
/* harmony import */ var _view_taxi_booking_view_taxi_booking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-taxi-booking/view-taxi-booking.component */ "./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.ts");
/* harmony import */ var _add_taxi_add_taxi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-taxi/add-taxi.component */ "./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm2015/agm-direction.js");





 // <-- import the module









// import { AgmOverlays } from "agm-overlays";
let TaxiBookingModule = class TaxiBookingModule {
};
TaxiBookingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_taxi_booking_taxi_booking_component__WEBPACK_IMPORTED_MODULE_4__["TaxiBookingComponent"], _view_taxi_booking_view_taxi_booking_component__WEBPACK_IMPORTED_MODULE_9__["ViewTaxiBookingComponent"], _add_taxi_add_taxi_component__WEBPACK_IMPORTED_MODULE_10__["AddTaxiComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _taxi_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaxiBookingRoutingModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _pages_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_11__["SelectDropDownModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"],
            agm_direction__WEBPACK_IMPORTED_MODULE_14__["AgmDirectionModule"],
        ]
    })
], TaxiBookingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user_filter input {\n  width: 100%;\n}\n\n.user_filter {\n  position: relative;\n}\n\n.user_filter .mat-datepicker-toggle {\n  position: absolute;\n  right: 15px;\n}\n\n::ng-deep .user_filter .mat-datepicker-toggle button:focus {\n  outline: none !important;\n}\n\n@media (max-width: 1200px) {\n  .mt20 {\n    margin-top: 12px;\n  }\n}\n\n@media (max-width: 767px) {\n  .mt20 {\n    margin-top: 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  ::ng-deep .mat-datepicker-content .mat-calendar {\n    width: 249px !important;\n  }\n  ::ng-deep .mat-datepicker-content .mt20 {\n    margin-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdGF4aS1ib29raW5nL3RheGktYm9va2luZy9DOlxcVXNlcnNcXHJhZ2h2XFxEZXNrdG9wXFxERVZcXFZlbmdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFx0YXhpLWJvb2tpbmdcXHRheGktYm9va2luZ1xcdGF4aS1ib29raW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy90YXhpLWJvb2tpbmcvdGF4aS1ib29raW5nL3RheGktYm9va2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGdCQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksZUFBQTtFQ0FOO0FBQ0Y7O0FESUk7RUFDSTtJQUNJLHVCQUFBO0VDRlY7RURJTTtJQUNJLGVBQUE7RUNGVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdGF4aS1ib29raW5nL3RheGktYm9va2luZy90YXhpLWJvb2tpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcl9maWx0ZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyX2ZpbHRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51c2VyX2ZpbHRlciAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVzZXJfZmlsdGVyIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubXQyMCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubXQyMCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgLm1hdC1jYWxlbmRhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNDlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXQyMCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudXNlcl9maWx0ZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXJfZmlsdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlcl9maWx0ZXIgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbjo6bmctZGVlcCAudXNlcl9maWx0ZXIgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm10MjAge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubXQyMCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXIge1xuICAgIHdpZHRoOiAyNDlweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItY29udGVudCAubXQyMCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.ts ***!
  \************************************************************************************/
/*! exports provided: TaxiBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiBookingComponent", function() { return TaxiBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let TaxiBookingComponent = class TaxiBookingComponent {
    constructor(api, comm, dialogService, router) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.router = router;
        this.startDate = '';
        this.endDate = '';
        this.serialNumber = 0;
        this.loader = true;
        this.bookingList = [];
        this.limit = 25;
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25
        };
        this.searchText = '';
    }
    ngOnInit() {
        this.currentPage = 1;
        this.getTaxiBookings();
    }
    getTaxiBookings() {
        var page = this.currentPage;
        this.api.getTaxiBooking(page, this.searchText, this.startDate, this.endDate).subscribe(response => {
            if (response["response"]["success"]) {
                this.bookingList = response["data"]["bookings"];
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: page,
                    itemsPerPage: 25,
                    totalItems: response["data"]["count"]
                };
            }
            if (!response["success"])
                return;
        });
    }
    getStartDate(ev) {
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(ev.value).valueOf();
    }
    getEndDate(ev) {
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(ev.value).valueOf();
    }
    addTaxiBookings() {
        this.router.navigate(["/taxi/add"]);
    }
    onViewItem(item) {
        this.router.navigate(["/taxi/view", item._id]);
    }
    searchBookings() {
        this.currentPage = 1;
        this.getTaxiBookings();
    }
    reset() {
        this.currentPage = 1;
        this.searchText = '';
        this.endDate = '';
        this.startDate = '';
        this.startdate.value = null;
        this.enddate.value = null;
        this.getTaxiBookings();
    }
    updateStatus(item) {
        console.log(item);
        var data = {
            name: item.name,
            updateId: item._id,
            status: item.status ? 1 : 0
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.editFoodRestaurant(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getTaxiBookings();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getTaxiBookings();
    }
};
TaxiBookingComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('enddate', {
        read: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInput"], static: false,
    })
], TaxiBookingComponent.prototype, "enddate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('startdate', {
        static: false,
        read: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInput"]
    })
], TaxiBookingComponent.prototype, "startdate", void 0);
TaxiBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-taxi-booking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taxi-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taxi-booking.component.scss */ "./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.scss")).default]
    })
], TaxiBookingComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3RheGktYm9va2luZy92aWV3LXRheGktYm9va2luZy92aWV3LXRheGktYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewTaxiBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaxiBookingComponent", function() { return ViewTaxiBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewTaxiBookingComponent = class ViewTaxiBookingComponent {
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
            this.getTaxiBookingById(this.id);
        });
    }
    getTaxiBookingById(id) {
        this.api.getTaxiBookingById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.bookingsDetail = res["data"];
                console.log(this.bookingsDetail);
            }
        });
    }
};
ViewTaxiBookingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewTaxiBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-taxi-booking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-taxi-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-taxi-booking.component.scss */ "./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.scss")).default]
    })
], ViewTaxiBookingComponent);



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
//# sourceMappingURL=pages-taxi-booking-taxi-booking-module-es2015.js.map