(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-taxi-booking-taxi-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">\n                                Taxi Booking\n                            </h6>\n                        </div>\n                        <div class=\"col-md-6 text-right\">\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                                <span class=\"fas fa-arrow-left\"></span> Back\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body add_driver_outer\">\n            <form [formGroup]=\"taxiForm\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"title\">First Name</label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"\" />\n                        </div>\n                        <div *ngIf=\"submitted && taxiForm.controls.firstName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.required\">\n                                First Name is required\n                            </div>\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.minlength\">\n                                First Name must be at least 3 characters long.\n                            </div>\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.maxlength\">\n                                First Name can be max 16 characters long.\n                            </div>\n                            <div *ngIf=\"taxiForm.controls.firstName.errors.pattern\">\n                                Invalid character.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"title\">Last Name</label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"\" />\n                        </div>\n                        <div *ngIf=\"submitted && taxiForm.controls.lastName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.required\">\n                                Last Name is required\n                            </div>\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.minlength\">\n                                Last Name must be at least 3 characters long.\n                            </div>\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.maxlength\">\n                                Last Name can be max 16 characters long.\n                            </div>\n                            <div *ngIf=\"taxiForm.controls.lastName.errors.pattern\">\n                                Invalid character.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"category\">Phone Number</label>\n                        <div class=\"row\">\n                            <div class=\"col-4\">\n                                <div class=\"login_email country_code_div\">\n                                    <div class=\"loginmail_input\" *ngIf=\"countryCodes && countryCodes.length>0\">\n                                        <ngx-select-dropdown (change)=\"selectionChanged1($event)\" formControlName=\"countryCode\" [config]=\"config1\" [options]=\"countryCodes\">\n                                        </ngx-select-dropdown>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-8\">\n                                <div class=\"input-group\">\n                                    <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"phone\" placeholder=\"\" />\n                                </div>\n                                <div *ngIf=\"submitted && taxiForm.controls.phone.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.required\">\n                                        Phone Number is required\n                                    </div>\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.minlength\">\n                                        Phone Number must be at least 7 characters long.\n                                    </div>\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.maxlength\">\n                                        Phone Number can be max 15 characters long.\n                                    </div>\n                                    <div *ngIf=\"taxiForm.controls.phone.errors.pattern\">\n                                        Phone Number not valid.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"title\">Email</label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" />\n                        </div>\n                        <div *ngIf=\"submitted && taxiForm.controls.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"taxiForm.controls.email.errors.required\">\n                                Email is required\n                            </div>\n                            <div *ngIf=\"taxiForm.controls.email.errors.pattern\">\n                                Email is not valid\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-5 main_map_Page\">\n                        <div class=\"mapnew\">\n                            <div class=\"row \">\n                                <div class=\"form-group col-md-12\" formGroupName=\"source\">\n                                    <label for=\"category\">Source Address</label>\n                                    <div class=\"input-group\">\n                                        <input class=\"form-control\" [attr.disabled]=\"directionStatus ? '' : null\" type=\"text\" name=\"name\" formControlName=\"address\" placeholder=\"\" ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddress($event)\" />\n                                    </div>\n                                    <div *ngIf=\"submitted && taxiForm.controls['source'].get('address').errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"taxiForm.controls['source'].get('address').errors.required\">\n                                            Address is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group col-md-12\" formGroupName=\"destination\">\n                                    <label for=\"category\">Destination Address</label>\n                                    <div class=\"input-group\">\n                                        <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"address\" placeholder=\"\" [attr.disabled]=\"directionStatus ? '' : null\" ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleDestinationAddress($event)\" />\n                                    </div>\n                                    <div *ngIf=\"submitted && taxiForm.controls['destination'].get('address').errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"taxiForm.controls['destination'].get('address').errors.required\">\n                                            Address is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"book-now-reset add-booking-button\" *ngIf=\"longitude && longitude1\">\n                                <span>\n                                <input *ngIf=\"!showbtn\" (click)=\"getDirections()\" type=\"submit\" class=\"save btn-info button-submit\"\n                                    name=\"button\" value=\"Confirmed direction\" />\n                                <input *ngIf=\"showbtn\" (click)=\"editDirection()\" type=\"submit\" class=\"save btn-info button-submit\"\n                                    name=\"button\" value=\"Edit direction\" />\n                            </span>\n                            </div>\n                            <div class=\"main_map_Page2\">\n                                <label>Note :</label>\n                                <textarea class=\"form-control\" name=\"note\" formControlName=\"note\" value=\"\" placeholder=\"Message\">\n                            </textarea>\n                                <div *ngIf=\"submitted && taxiForm.controls.email.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"taxiForm.controls.email.errors.required\">\n                                        Note is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-7 map_page_3\">\n                        <div class=\"form-group\">\n                            <label for=\"types\">Vehicle Type</label>\n                            <div class=\"input-group\" *ngIf=\"vehicleTypes\">\n                                <select [attr.disabled]=\"showSelectVehicle ? '' : null\" class=\"form-control\" formControlName=\"vehicleTypeId\" (change)=\"onChange($event.target.value)\">\n                                    <option value=\"\" selected disabled hidden>Choose here</option>\n                                    <option *ngFor=\"let type of vehicleTypes\" [value]=\"type._id\">\n                                        {{ type.name }}\n                                    </option>\n                                </select>\n                                <div *ngIf=\"submitted && taxiForm.controls.vehicleTypeId.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"taxiForm.controls.vehicleTypeId.errors.required\">\n                                        Vehicle Type is required\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n                            <div *ngIf=\"!show\">\n                                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEndSource($event)\"></agm-marker>\n                                <agm-marker [latitude]=\"latitude1\" [longitude]=\"longitude1\" [markerDraggable]=\"true\" (dragEnd)=\"markerDragEndDestination($event)\"></agm-marker>\n                            </div>\n                            <div *ngIf=\"show\">\n                                <agm-direction [origin]=\"dir.search\" [destination]=\"dir.destination\"></agm-direction>\n                            </div>\n                        </agm-map>\n                        <div class=\"total-price total-price1\">\n                            <b>Fare Estimation</b>\n                            <hr />\n                            <ul class=\"list-inline\">\n                                <li id=\"MinFare\">\n                                    <b>Fare</b> : <em id=\"minimum_fare_price\" name=\"fare\">{{ fare }}</em>\n                                </li>\n                                <li id=\"BaseFare\">\n                                    <!-- $ -->\n                                    <b>Base Fare</b> : <em id=\"base_fare_price\" name=\"fare\">{{ baseFare }}</em>\n                                </li>\n                                <li id=\"FixFare\" style=\"display:none\">\n                                    <b>Fix Fare</b> : <em id=\"fix_fare_price\"></em>\n                                </li>\n                                <li id=\"DistanceFare\">\n                                    <b>Distance <em id=\"dist_fare\"></em>\n                                    <em id=\"change_eUnit\"></em></b>:\n                                    <em id=\"dist_fare_price\">{{ kmDistance }}</em>\n                                </li>\n                                <li id=\"TimeFare\">\n                                    <b>Time<em id=\"dist_fare\"></em> </b> :\n                                    <em id=\"time_fare_price\"> </em>\n                                    <em id=\"dist_fare_price\">{{ timetaken }}</em>\n                                </li>\n                            </ul>\n                            <span>Total Fare<b> : \n                                <em id=\"total_fare_price\"> {{ fare }}</em>\n                                </b></span>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group form-actions add_e\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success mr-4\" [disabled]=\"isTaxiRequested\" (click)=\"submit()\">\n                        Book Now\n                    </button>\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"reset()\">\n                        Reset\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/taxi-booking/taxi-booking.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6 user_title\">\n                    <h6 class=\"m-0 font-weight-bold text-primary\">Taxi Bookings</h6>\n                </div>\n                <div class=\"col-md-6 text-right add_btn\">\n                    <button class=\"btn btn-primary\" (click)=\"addTaxiBookings()\">\n            <span class=\"fas fa-plus\"></span> Create Booking\n          </button>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-md-6 col-lg-6 col-xl-3  user_filter\">\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"Search Name\">\n                </div>\n                <div class=\"col-md-6 col-lg-6 col-xl-3 user_filter\">\n                    <input class=\"form_control filter_inputf dtpcker\" #startdate matInput [matDatepicker]=\"startdate\" (dateInput)=\"getStartDate($event)\" placeholder=\"Start date\" readonly>\n                    <mat-datepicker-toggle [for]=\"startdate\"></mat-datepicker-toggle>\n                    <mat-datepicker #startdate></mat-datepicker>\n                </div>\n                <div class=\"col-md-6 col-lg-6 col-xl-3 user_filter mt20\">\n                    <input class=\"form_control filter_inputf dtpcker\" #enddate matInput [matDatepicker]=\"enddate\" (dateInput)=\"getEndDate($event)\" placeholder=\"End date\" readonly>\n                    <mat-datepicker-toggle [for]=\"enddate\"></mat-datepicker-toggle>\n                    <mat-datepicker #enddate></mat-datepicker>\n                </div>\n                <div class=\"col-md-6 col-lg-6 col-xl-3 user_serch_btn mt20\">\n                    <button type=\"submit\" class=\"btn btn-primary pl-2 pr-2\" (click)=\"searchBookings()\">Search</button>\n                    <button type=\"reset\" class=\"btn btn-primary pl-3 pr-3 ml-2\" (click)=\"reset()\">Reset</button>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th style=\"min-width: 5rem;\">Order No.</th>\n                            <th style=\"min-width: 6rem;\">User Name</th>\n                            <th style=\"min-width: 6rem;\">Driver Name</th>\n                            <th style=\"min-width: 13rem;\">Source Address</th>\n                            <th style=\"min-width: 13rem;\">Destination Address</th>\n                            <th>Distance</th>\n                            <th>Total Amount</th>\n                            <th style=\"min-width: 9rem;\">Booking Start Date</th>\n                            <th style=\"min-width: 8rem;\">Booking End Date</th>\n                            <th style=\"min-width: 8rem;\">Booked By</th>\n                            <th>Status</th>\n                            <th>Phone Number</th>\n                            <th>\n                                Action\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of bookingList | paginate: config  ; let i = index\">\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\n                            <td>{{ item.taxiOrderNo }}</td>\n                            <td>{{ item.userFirstName }} {{ item.userLastName }}</td>\n                            <td>{{ item.driver.firstName }} {{ item.driver.lastName }}</td>\n                            <td>\n                                {{ item.source.address.length\n                                < 20 ? item.source.address : item.source.address.slice(0, 20) + \"....\" }} </td>\n                                    <td>{{ item.destination.address.length\n                                        < 20 ? item.destination.address : item.destination.address.slice(0, 20) + \"....\" }} </td>\n                                            <td>{{item.distance}}</td>\n                                            <td>{{item.totalAmount}}</td>\n                                            <td>\n                                                {{ item.bookingStartDate | date: \"yyyy-MM-dd\" }}\n                                            </td>\n                                            <td>\n                                                {{ item.bookingEndDate | date: \"yyyy-MM-dd\" }}\n                                            </td>\n\n                                            <td *ngIf=\"item.bookingType == 0\">User</td>\n                                            <td *ngIf=\"item.bookingType == 1\">Driver</td>\n                                            <td *ngIf=\"item.bookingType == 2\">Admin</td>\n\n                                            <td *ngIf=\"item.status == 0\">On the way</td>\n                                            <td *ngIf=\"item.status == 1\">Reached</td>\n                                            <td *ngIf=\"item.status == 2\">Start</td>\n                                            <td *ngIf=\"item.status == 3\">Completed</td>\n                                            <td *ngIf=\"item.status == 4\">Paid</td>\n                                            <td *ngIf=\"item.status == 5\">Rate</td>\n                                            <td *ngIf=\"item.status == 6\">Skip</td>\n                                            <td *ngIf=\"item.status == 11\">Cancel by user</td>\n                                            <td *ngIf=\"item.status == 12\">Cancel by driver</td>\n                                            <td>{{item.countryCode}}-{{item.phone}}</td>\n                                            <td>\n                                                <div class=\"product_action\">\n                                                    <button class=\"btn btn-warning mr-1\" (click)=\"onViewItem(item)\" title=\"View\">\n                    <span class=\"fas fa-fw fa-eye\"></span>\n                  </button>\n                                                </div>\n                                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div *ngIf=\"loader\" class=\"loader\"></div>\n                <h4 *ngIf=\"bookingList.length == 0 && !loader\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n            <div *ngIf=\"bookingList && bookingList.length !=0 && !loader\" class=\"pagination_ui\">\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\n                </pagination-controls>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/taxi-booking/view-taxi-booking/view-taxi-booking.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"bookingsDetail\">\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <h6 class=\"m-0 font-weight-bold text-primary\">View Taxi Booking</h6>\n            </div>\n            <div class=\"col-md-6 text-right\">\n              <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                <span class=\"fas fa-arrow-left\"></span> Back\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div *ngIf=\"bookingsDetail\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Taxi Order No</label>\n              <input type=\"text\" name=\"Name\" [value]=\"bookingsDetail.taxiOrderNo\" class=\"form-control\" disabled />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label>User Name</label>\n                <input type=\"text\" name=\"Name\" [value]=\"bookingsDetail.userFirstName + bookingsDetail.userLastName\" class=\"form-control\" disabled />\n            </div>\n          </div>\n           <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Source Address</label>\n              <textarea row=\"4\" type=\"text\" class=\"form-control\" id=\"body\" [value]=\"\n                  bookingsDetail.source.address\" class=\"form-control\" disabled></textarea>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Destination Address</label>\n              <textarea row=\"4\" type=\"text\" class=\"form-control\" id=\"body\" [value]=\"\n                  bookingsDetail.destination.address\" class=\"form-control\" disabled></textarea>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Distance</label>\n              <input type=\"text\" name=\"Name\" [value]=\"bookingsDetail.distance\" class=\"form-control\" disabled />\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Total Booking</label>\n              <input type=\"text\" name=\"discount\" [value]=\"bookingsDetail.totalAmount\" class=\"form-control\"\n                disabled />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Payment Mode</label>\n              <input type=\"text\" name=\"mode\" [value]=\"bookingsDetail.paymentMode\" class=\"form-control\"\n                disabled />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Phone Number</label>\n              <input type=\"text\" name=\"number\" [value]=\"bookingsDetail.countryCode+ '-' + bookingsDetail.phone\" class=\"form-control\"\n                disabled />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/cooldash/pages/taxi-booking/add-taxi/add-taxi.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\n.total-price1 {\n  margin: 26px 0 0px 0px;\n  width: 100%;\n}\n\n.mapnew {\n  border: 1px solid #ddd;\n  height: 100%;\n  padding: 15px;\n}\n\n.main_map_Page {\n  margin: 0;\n  padding: 0px;\n  padding: 19px 12px;\n  width: 39%;\n}\n\n.map_page_3 {\n  width: 59%;\n}\n\nagm-map {\n  height: 400px;\n}\n\n#cover-spin::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 48%;\n  top: 40%;\n  width: 40px;\n  height: 40px;\n  border-style: solid;\n  border-color: black;\n  border-top-color: transparent;\n  border-width: 4px;\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s linear infinite;\n  animation: spin 0.8s linear infinite;\n}\n\n#cover-spin {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 9999;\n  display: block;\n}\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n#cover-spin::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 48%;\n  top: 40%;\n  width: 40px;\n  height: 40px;\n  border-style: solid;\n  border-color: black;\n  border-top-color: transparent;\n  border-width: 4px;\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s linear infinite;\n  animation: spin 0.8s linear infinite;\n}\n\n.add_e button {\n  font-size: 18px;\n  padding: 7px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy90YXhpLWJvb2tpbmcvYWRkLXRheGkvYWRkLXRheGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3RheGktYm9va2luZy9hZGQtdGF4aS9hZGQtdGF4aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLCtCQUFBO0VDQ047RURDRTtJQUNJLGlDQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksdUJBQUE7RUNBTjtFREVFO0lBQ0kseUJBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy90YXhpLWJvb2tpbmcvYWRkLXRheGkvYWRkLXRheGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDk1JTtcclxuICAgIGNvbG9yOiAjZjU1MzUzO1xyXG59XHJcblxyXG4udG90YWwtcHJpY2UxIHtcclxuICAgIG1hcmdpbjogMjZweCAwIDBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcG5ldyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLm1haW5fbWFwX1BhZ2Uge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZzogMTlweCAxMnB4O1xyXG4gICAgd2lkdGg6IDM5JTtcclxufVxyXG5cclxuLm1hcF9wYWdlXzMge1xyXG4gICAgd2lkdGg6IDU5JTtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4jY292ZXItc3Bpbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNjb3Zlci1zcGluIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjb3Zlci1zcGluOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDglO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLmFkZF9lIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcclxufSIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59XG5cbi50b3RhbC1wcmljZTEge1xuICBtYXJnaW46IDI2cHggMCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hcG5ldyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm1haW5fbWFwX1BhZ2Uge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMTlweCAxMnB4O1xuICB3aWR0aDogMzklO1xufVxuXG4ubWFwX3BhZ2VfMyB7XG4gIHdpZHRoOiA1OSU7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4jY292ZXItc3Bpbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0OCU7XG4gIHRvcDogNDAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuI2NvdmVyLXNwaW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuI2NvdmVyLXNwaW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDglO1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5hZGRfZSBidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".user_filter input {\n  width: 100%;\n}\n\n.user_filter {\n  position: relative;\n}\n\n.user_filter .mat-datepicker-toggle {\n  position: absolute;\n  right: 15px;\n}\n\n::ng-deep .user_filter .mat-datepicker-toggle button:focus {\n  outline: none !important;\n}\n\n@media (max-width: 1200px) {\n  .mt20 {\n    margin-top: 12px;\n  }\n}\n\n@media (max-width: 767px) {\n  .mt20 {\n    margin-top: 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  ::ng-deep .mat-datepicker-content .mat-calendar {\n    width: 249px !important;\n  }\n  ::ng-deep .mat-datepicker-content .mt20 {\n    margin-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy90YXhpLWJvb2tpbmcvdGF4aS1ib29raW5nL3RheGktYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdGF4aS1ib29raW5nL3RheGktYm9va2luZy90YXhpLWJvb2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxnQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLGVBQUE7RUNBTjtBQUNGOztBRElJO0VBQ0k7SUFDSSx1QkFBQTtFQ0ZWO0VESU07SUFDSSxlQUFBO0VDRlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3RheGktYm9va2luZy90YXhpLWJvb2tpbmcvdGF4aS1ib29raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJfZmlsdGVyIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlcl9maWx0ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udXNlcl9maWx0ZXIgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC51c2VyX2ZpbHRlciAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLm10MjAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm10MjAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5tYXQtY2FsZW5kYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMjQ5cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm10MjAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnVzZXJfZmlsdGVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyX2ZpbHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVzZXJfZmlsdGVyIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG46Om5nLWRlZXAgLnVzZXJfZmlsdGVyIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tdDIwIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm10MjAge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIDo6bmctZGVlcCAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyIHtcbiAgICB3aWR0aDogMjQ5cHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm10MjAge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufSJdfQ== */");

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