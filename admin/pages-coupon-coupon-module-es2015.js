(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coupon-coupon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\">\r\n                \r\n                    <h6 class=\"m-0 text-black\" *ngIf=\"!id\">\r\n                        Add Coupon\r\n                    </h6>\r\n                    <h6 class=\"m-0 text-black\" *ngIf=\"id\">\r\n                        Edit Coupon\r\n                    </h6>\r\n                \r\n                </div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"couponForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && couponForm.controls.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"couponForm.controls.name.errors.required\">\r\n                                Name is required\r\n                            </div>\r\n                            <div *ngIf=\"couponForm.controls.name.errors.maxlength\">\r\n                                Name can be max 15 characters long.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group col-md-6\">\r\n                        <label for=\"title\">Code</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"code\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && couponForm.controls.code.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"couponForm.controls.code.errors.required\">\r\n                                Code is required\r\n                            </div>\r\n                            <div *ngIf=\"couponForm.controls.code.errors.maxlength\">\r\n                                Code can be max 15 characters long.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"body\">Description</label>\r\n                        <div class=\"input-group\">\r\n                            <textarea type=\"text\" row=\"3\" id=\"body\" class=\"form-control\" formControlName=\"description\" placeholder=\"\"></textarea>\r\n                            <div *ngIf=\"submitted && couponForm.controls.description.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.description.errors.required\">\r\n                                    Description is required\r\n                                </div>\r\n                                <div *ngIf=\"couponForm.controls.description.errors.maxlength\">\r\n                                    Description can be max 250 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group col-md-6\">\r\n                        <label for=\"price\">Per Day Limit</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" appNumberOnly min=\"0\" id=\"perDayLimit\" class=\"form-control\"\r\n                                formControlName=\"perDayLimit\" placeholder=\"\" />\r\n                            <div *ngIf=\"submitted && couponForm.controls.perDayLimit.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.perDayLimit.errors.required\">\r\n                                    Per Day Limit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div class=\"form-group col-md-6\">\r\n                        <label for=\"price\">Minimum Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" min=\"0\" id=\"minAmountToApply\" class=\"form-control\"\r\n                                formControlName=\"minAmountToApply\" appNumberOnly placeholder=\"\" />\r\n                            <div *ngIf=\"submitted && couponForm.controls.minAmountToApply.errors\"\r\n                                class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.minAmountToApply.errors.required\">\r\n                                    Minimum Amont is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Start Date</label>\r\n                        <div class=\"input-group\">\r\n                            <input (dateTimeInput)=\"emitValue($event)\" class=\"form-control\" readonly [min]=\"startMinDate\" formControlName=\"startDate\" [owlDateTime]=\"dt1\" placeholder=\"Date\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text trigger\" pickerType=\"calendar\" [owlDateTimeTrigger]=\"dt1\"><i class=\"fa fa-calendar\"></i></span>\r\n                            </div>\r\n                            <owl-date-time #dt1 [pickerType]=\"'calendar'\"></owl-date-time>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && couponForm.controls.startDate.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"couponForm.controls.startDate.errors.required\">\r\n                                Start Date is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">End Date</label>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" readonly [min]=\"endMinDate\" formControlName=\"endDate\" [owlDateTime]=\"dt2\" placeholder=\"Date\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text trigger\" pickerType=\"calendar\" [owlDateTimeTrigger]=\"dt2\"><i class=\"fa fa-calendar\"></i></span>\r\n                            </div>\r\n                            <owl-date-time #dt2 [pickerType]=\"'calendar'\"></owl-date-time>\r\n                        </div>\r\n                        <div *ngIf=\"submitted && couponForm.controls.endDate.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"couponForm.controls.endDate.errors.required\">\r\n                                End Date is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"price\">Discount (%)</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\" formControlName=\"discount\"/>\r\n                            <div *ngIf=\"submitted && couponForm.controls.discount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.discount.errors.required\">\r\n                                    Discount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"price\">Max Discount (Flat)</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" appNumberOnly min=\"0\" id=\"maxDiscount\" class=\"form-control\" formControlName=\"maxDiscount\" placeholder=\"\"/>\r\n                            <div *ngIf=\"submitted && couponForm.controls.maxDiscount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.maxDiscount.errors.required\">\r\n                                    Max Discount is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"form-group col-md-6\">\r\n                        <label for=\"price\">Limit</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" appNumberOnly min=\"0\" id=\"useLimit\" class=\"form-control\"\r\n                                formControlName=\"useLimit\" placeholder=\"\" />\r\n                            <div *ngIf=\"submitted && couponForm.controls.useLimit.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.useLimit.errors.required\">\r\n                                    Limit is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Discount Type</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" formControlName=\"type\" *ngIf=\"discountType\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let type of discountType\" [value]=\"type.value\">\r\n                                    {{ type.name }}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"\r\n                          submitted && couponForm.controls.type.errors\r\n                        \" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.type.errors.required\">\r\n                                    Coupon Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Module Type</label>\r\n                        <div class=\"input-group\">\r\n                            <select class=\"form-control\" formControlName=\"verticalType\" *ngIf=\"verticalTypes\">\r\n                                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                                <option *ngFor=\"let type of verticalTypes\" [value]=\"type.value\">\r\n                                    {{ type.name }}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"\r\n                          submitted && couponForm.controls.verticalType.errors\r\n                        \" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"couponForm.controls.verticalType.errors.required\">\r\n                                    Vertical Type is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group form-actions add_edit\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n                        Add\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n                        Update\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/coupon/coupon.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/coupon/coupon.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\"> <h6 class=\"m-0 text-black\">Coupons</h6></div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"addCoupon()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Coupon\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 user_filter\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"Search Coupon By Name\">\r\n                </div>\r\n                <div class=\"col-md-6 user_serch_btn\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" (click)=\"searchCoupon()\">Search</button>\r\n                    <button type=\"reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n                <!-- <div class=\"col-md-3 text-right add_btn\">\r\n                </div> -->\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-3 user_filter\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\"\r\n                    placeholder=\"Search Coupon\">\r\n                </div>\r\n                <div class=\"user_serch_btn\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" (click)=\"searchCoupon()\">Search</button>\r\n                    <button type=\"reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"card-body table-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <!-- <th>Image</th> -->\r\n                            <th style=\"min-width: 7rem;\">Name</th>\r\n                            <th style=\"min-width: 6rem;\">Code</th>\r\n                            <th style=\"min-width: 8rem;\">Description</th>\r\n                            <th>Type</th>\r\n                            <th style=\"min-width: 6rem;\">Discount (%)</th>\r\n                            <th style=\"min-width: 10rem;\">Max. Discount (Flat)</th>\r\n                            <!-- <th>Limit</th> -->\r\n                            <!-- <th>Max Amount</th> -->\r\n                            <th style=\"min-width: 7rem;\">Start Date</th>\r\n                            <th style=\"min-width: 7rem;\">End Date</th>\r\n                            <!-- <th>Per Day Limit</th> -->\r\n                            <th style=\"min-width: 7rem;\">Module Type</th>\r\n                            <th style=\"min-width: 5rem;\"> Status</th>\r\n                            <th style=\"min-width: 8rem;\">\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of couponList; let i = index\">\r\n                            <td>{{ i + serialNumber + 1 }}</td>\r\n                            <!-- <td>\r\n                                <img src=\"{{ imageUrl }}{{ item.profilePic }}\" width=\"70px\" height=\"70px\" />\r\n                            </td> -->\r\n                            <td>{{ item.name }}</td>\r\n                            <td>{{item.code}}</td>\r\n                            <td>\r\n                                {{ item.description == null ? \"\" : item.description.length\r\n                                < 18 ? item.description : item.description.slice(0, 16) + \"....\" }} </td>\r\n                                    <td *ngIf=\"item.type== 0\">Percentage</td>\r\n                                    <td *ngIf=\"item.type== 1\">Flat</td>\r\n                                    <td *ngIf=\"item.type== 2\">Percentage & Flat</td>\r\n                                    <td>{{item.discount}}\r\n                                    </td>\r\n                                    <td>{{item.maxDiscount}}\r\n                                    </td>\r\n                                    <!-- <td>{{item.useLimit}} -->\r\n                                    <!-- </td> -->\r\n                                    <!-- <td>{{item.minAmountToApply}} -->\r\n                                    <!-- </td> -->\r\n                                    <td>\r\n                                        {{ item.startDate| date: \"yyyy-MM-dd\"}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{ item.endDate| date: \"yyyy-MM-dd\"}}\r\n                                    </td>\r\n                                    <!-- <td>\r\n                                {{item.perDayLimit}}\r\n                            </td> -->\r\n\r\n                                    <td *ngIf=\"item.verticalType ==0\">Restaurant</td>\r\n                                    <td *ngIf=\"item.verticalType ==1\">Store</td>\r\n                                    <td *ngIf=\"item.verticalType ==2\">Taxi</td>\r\n                                    <td *ngIf=\"item.verticalType ==3\">Shuttle</td>\r\n\r\n                                    <td>\r\n                                        <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\" (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\">\r\n                                        </ui-switch>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"product_action\">\r\n                                            <button class=\"btn btn-warning mr-1\" title=\"View Coupon\" (click)=\"onViewCoupon(item)\" title=\"View\">\r\n                                        <span class=\"fas fa-fw fa-eye\"></span>\r\n                                    </button>\r\n                                            <button class=\"btn btn-success mr-1\" title=\"Edit Coupon\" (click)=\"onEditCoupon(item)\" title=\"Edit\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                            <button class=\"btn btn-danger mr-1\" title=\"Delete Coupon\" (click)=\"deleteCoupon(item)\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button>\r\n                                        </div>\r\n                                    </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"couponList && couponList.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <!-- <div *ngIf=\"couponList.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\">\r\n                \r\n                    <h6 class=\"m-0 text-black\">\r\n                        View Coupon\r\n                    </h6>\r\n                \r\n                </div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"card-body\" *ngIf=\"couponDetails\">\r\n            <div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label> Name</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{couponDetails.name}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Code</label>\r\n                            <input type=\"text\" name=\"Email\" value=\"{{couponDetails.code}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Discount (%)</label>\r\n                            <input type=\"text\" name=\"Email\" value=\"{{couponDetails.discount}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" *ngIf=\"couponDetails.maxDiscount\">\r\n                        <div class=\"form-group\">\r\n                            <label>Max Discount (Flat)</label>\r\n                            <input type=\"text\" name=\"Email\" value=\"{{couponDetails.maxDiscount}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Description</label>\r\n                            <textarea type=\"text\" name=\"address\" class=\"form-control\" disabled\r\n                                *ngIf=\"couponDetails.description\">{{couponDetails.description}}\r\n                            </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Minimum Amount</label>\r\n                            <input type=\"text\" name=\"minAmountToApply\" [value]=\"couponDetails.minAmountToApply\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" *ngIf=\"couponDetails.useLimit\">\r\n                        <div class=\"form-group\">\r\n                            <label>Limit</label>\r\n                            <input type=\"text\" name=\"street\" [value]=\"couponDetails.useLimit\" class=\"\r\n                                form-control\" disabled />\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div class=\"col-md-6\" *ngIf=\"couponDetails.perDayLimit\">\r\n                        <div class=\"form-group\">\r\n                            <label>Per Day Limit</label>\r\n                            <input type=\"text\" name=\"street\" [value]=\"couponDetails.perDayLimit\" class=\"\r\n                                form-control\" disabled />\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Module Type</label>\r\n                            <input type=\"text\" name=\"Name\" [value]=\"\r\n                            couponDetails.verticalType == '0'\r\n                            ? 'Restaurant' :\r\n                            couponDetails.verticalType == '1'\r\n                                  ? 'Store'\r\n                                  : couponDetails.verticalType == '2'\r\n                                  ? 'Taxi'\r\n                                  : 'Shuttle'\r\n                              \" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Discount Type</label>\r\n                            <input type=\"text\" name=\"Name\" [value]=\"\r\n                          couponDetails.type == '0'\r\n                                ? 'Percentage'\r\n                                : couponDetails.type == '1'\r\n                                ? 'Flat'\r\n                                : 'Percentage & Flat'\r\n                            \" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Start Date</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"couponDetails.startDate  | date: 'yyyy-MM-dd'\"\r\n                                class=\" form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>End Date</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"couponDetails.endDate | date: 'yyyy-MM-dd'\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvY291cG9uL2FkZC1lZGl0LWNvdXBvbi9DOlxcVXNlcnNcXHJhZ2h2XFxEZXNrdG9wXFxERVZcXFZlbmdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxjb3Vwb25cXGFkZC1lZGl0LWNvdXBvblxcYWRkLWVkaXQtY291cG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9jb3Vwb24vYWRkLWVkaXQtY291cG9uL2FkZC1lZGl0LWNvdXBvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9jb3Vwb24vYWRkLWVkaXQtY291cG9uL2FkZC1lZGl0LWNvdXBvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbiAgfVxyXG4gICIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddEditCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditCouponComponent", function() { return AddEditCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let AddEditCouponComponent = class AddEditCouponComponent {
    constructor(formBuilder, comm, api, toastr, router, route) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.history = window.history;
        this.submitted = false;
        this.startMinDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).subtract(1, 'd').format('YYYY-MM-DD');
        this.endMinDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).subtract(1, 'd').format('YYYY-MM-DD');
        this.discountType = [
            {
                name: "Percentage",
                value: 0
            },
            {
                name: "Flat",
                value: 1
            },
        ];
        this.verticalTypes = [
            {
                name: "Restaurant",
                value: 0
            },
            {
                name: "Store",
                value: 1
            },
        ];
        this.setValues = data => {
            if (data) {
                this.couponForm.patchValue({
                    name: data.name,
                    code: data.code,
                    description: data.description,
                    type: data.type,
                    discount: data.discount,
                    maxDiscount: data.maxDiscount,
                    // useLimit: data.useLimit,
                    // minAmountToApply: data.minAmountToApply,
                    startDate: new Date(data.startDate),
                    endDate: new Date(data.endDate),
                    // perDayLimit: data.perDayLimit,
                    verticalType: data.verticalType
                });
            }
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            if (this.id != undefined) {
                this.getCouponByID(this.id);
            }
        });
        this.couponForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)])),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            maxDiscount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            // useLimit: new FormControl("", Validators.compose([Validators.required])),
            // minAmountToApply: new FormControl("", Validators.compose([Validators.required])),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            // perDayLimit: new FormControl("", Validators.compose([Validators.required])),
            verticalType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
    getCouponByID(id) {
        this.api.getPromocodeById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.couponDetail = res["data"];
                this.setValues(this.couponDetail);
            }
        });
    }
    update() {
        this.submitted = true;
        console.log(this.couponForm, this.couponForm.value, 'Valid', this.couponForm.valid);
        if (this.couponForm.valid) {
            this.couponForm.controls['endDate'].setValue((new Date(this.couponForm.controls['endDate'].value).getTime()));
            this.couponForm.controls['startDate'].setValue(new Date(this.couponForm.controls['startDate'].value).getTime());
            var data = this.couponForm.value;
            data['updateId'] = this.id;
            this.api.updatePromoCode(data).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/coupon/coupon"]);
                }
                else {
                    this.submitted = false;
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
        else {
            this.couponForm.controls['endDate'].reset();
            this.couponForm.controls['startDate'].reset();
        }
    }
    submit() {
        this.submitted = true;
        console.log('Form status', this.couponForm.valid, 'submit frm', this.couponForm.value);
        if (this.couponForm.valid) {
            // const date1 = new Date(this.couponForm.controls['startDate'].value);
            // const date2 = new Date(this.couponForm.controls['endDate'].value);
            // if (date1.getTime() == date2.getTime()) return this.toastr.errorToastr('Please select valid Date')
            this.couponForm.controls['endDate'].setValue((new Date(this.couponForm.controls['endDate'].value).getTime()));
            this.couponForm.controls['startDate'].setValue(new Date(this.couponForm.controls['startDate'].value).getTime());
            this.api.addPromoCode(this.couponForm.value).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/coupon/coupon"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                    this.submitted = false;
                }
            });
        }
        else {
            this.couponForm.controls['endDate'].reset();
            this.couponForm.controls['startDate'].reset();
        }
    }
    afterPickerOpen() {
        document.getElementsByTagName('html')[0].style.top = '';
    }
    emitValue(e) {
        this.endMinDate = moment__WEBPACK_IMPORTED_MODULE_7__(e.value).subtract(1, 'd').format('YYYY-MM-DD');
    }
};
AddEditCouponComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AddEditCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit-coupon.component.scss */ "./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.scss")).default]
    })
], AddEditCouponComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/coupon/coupon-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/coupon-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CouponRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponRoutingModule", function() { return CouponRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon/coupon.component */ "./src/app/cooldash/pages/coupon/coupon/coupon.component.ts");
/* harmony import */ var _view_coupon_view_coupon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-coupon/view-coupon.component */ "./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.ts");
/* harmony import */ var _add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-coupon/add-edit-coupon.component */ "./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.ts");






const routes = [
    {
        path: "",
        data: {
            title: "Coupon"
        },
        children: [
            {
                path: "coupon",
                component: _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_3__["CouponComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add",
                component: _add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__["AddEditCouponComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit/:id",
                component: _add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__["AddEditCouponComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view/:id",
                component: _view_coupon_view_coupon_component__WEBPACK_IMPORTED_MODULE_4__["ViewCouponComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let CouponRoutingModule = class CouponRoutingModule {
};
CouponRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CouponRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/coupon/coupon.module.ts":
/*!********************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/coupon.module.ts ***!
  \********************************************************/
/*! exports provided: CouponModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponModule", function() { return CouponModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon/coupon.component */ "./src/app/cooldash/pages/coupon/coupon/coupon.component.ts");
/* harmony import */ var _view_coupon_view_coupon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-coupon/view-coupon.component */ "./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.ts");
/* harmony import */ var _add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-coupon/add-edit-coupon.component */ "./src/app/cooldash/pages/coupon/add-edit-coupon/add-edit-coupon.component.ts");
/* harmony import */ var _coupon_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupon-routing.module */ "./src/app/cooldash/pages/coupon/coupon-routing.module.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../number-module/number-module.module */ "./src/app/number-module/number-module.module.ts");















let CouponModule = class CouponModule {
};
CouponModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_coupon_coupon_component__WEBPACK_IMPORTED_MODULE_3__["CouponComponent"], _view_coupon_view_coupon_component__WEBPACK_IMPORTED_MODULE_4__["ViewCouponComponent"], _add_edit_coupon_add_edit_coupon_component__WEBPACK_IMPORTED_MODULE_5__["AddEditCouponComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _coupon_routing_module__WEBPACK_IMPORTED_MODULE_6__["CouponRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_7__["SelectDropDownModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlNativeDateTimeModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(),
            _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_14__["NumberModuleModule"]
        ]
    })
], CouponModule);



/***/ }),

/***/ "./src/app/cooldash/pages/coupon/coupon/coupon.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/coupon/coupon.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL2NvdXBvbi9jb3Vwb24vY291cG9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/coupon/coupon/coupon.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/coupon/coupon.component.ts ***!
  \******************************************************************/
/*! exports provided: CouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponComponent", function() { return CouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let CouponComponent = class CouponComponent {
    constructor(api, comm, router) {
        this.api = api;
        this.comm = comm;
        this.router = router;
        this.serialNumber = 0;
        this.loader = true;
        this.couponList = [];
        this.searchText = "";
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25
        };
    }
    ngOnInit() {
        this.currentPage = 1;
        this.imageUrl = this.comm.imageUrl;
        this.getCoupon();
    }
    setPage() {
        this.getCoupon();
    }
    searchCoupon() {
        this.couponList = this.allData.filter(row => row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    }
    reset() {
        this.currentPage = 1;
        this.searchText = '';
        this.getCoupon();
    }
    getCoupon() {
        var page = this.currentPage;
        this.api.getAllPromoCode().subscribe(response => {
            console.log(response);
            if (response["data"]) {
                this.couponList = response["data"];
                this.allData = this.couponList;
                for (var data of this.couponList) {
                    data.status = data["status"] == 1 ? true : false;
                }
                console.log(this.couponList);
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
    updateStatus(item) {
        console.log(item);
        var data = {
            updateId: item._id,
            name: item.name,
            status: item.status ? 1 : 0
        };
        this.api.updatePromoCode(data).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getCoupon();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getCoupon();
    }
    addCoupon() {
        this.router.navigate(['coupon/add']);
    }
    onViewCoupon(item) {
        this.router.navigate(['coupon/view', item._id]);
    }
    onEditCoupon(item) {
        this.router.navigate(['coupon/edit', item._id]);
    }
    deleteCoupon(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Coupon!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    updateId: item._id,
                    status: 2
                };
                this.api.updatePromoCode(data).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getCoupon();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
};
CouponComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/coupon/coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupon.component.scss */ "./src/app/cooldash/pages/coupon/coupon/coupon.component.scss")).default]
    })
], CouponComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL2NvdXBvbi92aWV3LWNvdXBvbi92aWV3LWNvdXBvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCouponComponent", function() { return ViewCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewCouponComponent = class ViewCouponComponent {
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
            this.getPromoCodebyId(this.id);
        });
    }
    getPromoCodebyId(id) {
        this.api.getPromocodeById(id).subscribe(res => {
            if (res["response"]["success"]) {
                console.log(res);
                this.couponDetails = res["data"];
            }
        });
    }
};
ViewCouponComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-coupon.component.scss */ "./src/app/cooldash/pages/coupon/view-coupon/view-coupon.component.scss")).default]
    })
], ViewCouponComponent);



/***/ })

}]);
//# sourceMappingURL=pages-coupon-coupon-module-es2015.js.map