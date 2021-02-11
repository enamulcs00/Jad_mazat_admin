(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-restaurant-restaurant-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/category/category.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/category/category.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 i18n=\"@@Categories\" class=\"m-0 text-black\">Categories</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button\r\n              i18n=\"@@add_category\"\r\n              class=\"btn btn-primary\"\r\n              (click)=\"addCategory()\"\r\n            >\r\n              <span class=\"fas fa-plus\"></span> Add Category\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"filters_outer\">\r\n        <div class=\"user_filter\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            name=\"searchText\"\r\n            [(ngModel)]=\"searchText\"\r\n            placeholder=\"Search Category\"\r\n          />\r\n        </div>\r\n        <div class=\"user_serch_btn\">\r\n          <button\r\n            type=\"submit\"\r\n            i18n=\"@@Search\"\r\n            class=\"btn btn-primary pl-4 pr-4\"\r\n            (click)=\"searchRestaurant()\"\r\n          >\r\n            Search\r\n          </button>\r\n          <button\r\n            type=\"reset\"\r\n            i18n=\"@@Reset\"\r\n            class=\"btn btn-primary pl-4 pr-4 ml-2\"\r\n            (click)=\"reset()\"\r\n          >\r\n            Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body table-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th i18n=\"@@Image\">Image</th>\r\n              <th i18n=\"@@Name\">Name</th>\r\n              <th i18n=\"@@Created_Date\" style=\"min-width: 6rem\">\r\n                Created Date\r\n              </th>\r\n              <th i18n=\"@@Status\">Status</th>\r\n              <th i18n=\"@@Action\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of categoryList; let i = index\">\r\n              <td>{{ i + serialNumber + 1 }}</td>\r\n              <td>\r\n                <img\r\n                  src=\"{{ imageUrl }}{{ item.image }}\"\r\n                  width=\"70px\"\r\n                  height=\"70px\"\r\n                />\r\n              </td>\r\n              <td>{{ item.name }}</td>\r\n              <td>\r\n                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n              </td>\r\n              <td>\r\n                <ui-switch\r\n                  labelOn=\"ON\"\r\n                  switchColor=\"#4e73df\"\r\n                  id=\"Active\"\r\n                  name=\"status\"\r\n                  [(ngModel)]=\"item.status\"\r\n                  (ngModelChange)=\"updateActiveStatus(item)\"\r\n                  labelOff=\"OFF\"\r\n                ></ui-switch>\r\n              </td>\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button\r\n                    class=\"btn btn-success mr-1\"\r\n                    (click)=\"onEditSelect(item)\"\r\n                  >\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-danger\" (click)=\"deleteCategory(item)\">\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4\r\n          i18n=\"@@no_records\"\r\n          *ngIf=\"categoryList.length == 0 && !loader\"\r\n          class=\"text-center\"\r\n        >\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <!-- <pagination\r\n        *ngIf=\"categoryList.length != 0 && !loader\"\r\n        [totalItems]=\"totalItems\"\r\n        [boundaryLinks]=\"true\"\r\n        [maxSize]=\"5\"\r\n        [(ngModel)]=\"currentPage\"\r\n        (pageChanged)=\"pageChange($event)\"\r\n      ></pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/order.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/order.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 class=\"m-0 text-black\">Order</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <select [(ngModel)]=\"totalmatch\" class=\"form-control\" (change)=\"changeMatchWebsite($event)\">\r\n              <option value=\"undefined\">All</option>\r\n              <option value=\"0\">Pending</option>\r\n              <option value=\"1\">Current/Ongoing</option>\r\n              <option value=\"11\">undelivered/returned</option>\r\n              <option value=\"4\">Delivered/Skip</option>\r\n              <option value=\"7\">Payment received</option>\r\n          </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body table-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th style=\"min-width: 5rem\">Order No.</th>\r\n              <th style=\"min-width: 11rem\">Address</th>\r\n              <th style=\"min-width: 7rem\">Total Amount</th>\r\n              <th style=\"min-width: 7rem\">Notes</th>\r\n              <th style=\"min-width: 7rem\">Driver Name</th>\r\n              <th *ngIf=\"show\" style=\"min-width: 6rem;\" >AssignDriver</th>\r\n              <th style=\"min-width: 7rem\">User Name</th>\r\n              <th style=\"min-width: 8rem\">Restaurant Name</th>\r\n              <th>Items</th>\r\n              <th>Manual</th>\r\n              <th style=\"min-width: 10rem\">Status</th>\r\n              <th style=\"min-width: 8rem\">Order Type</th>\r\n              <th style=\"min-width: 7rem\">Delivery Date</th>\r\n              <th style=\"min-width: 11rem\">Order Date</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr\r\n              [ngClass]=\"{ error1: item.mins >= 0 && item.status == 1 }\"\r\n              *ngFor=\"let item of orderList | paginate: config; let i = index\">\r\n              <td>{{ (currentPage - 1) * 25 + i + 1 }}</td>\r\n              <td>\r\n                {{ item.orderNo }}\r\n              </td>\r\n              <!-- <td>\r\n                <ng-container *ngIf=\"item.address\">{{\r\n                  item.address.address\r\n                }}</ng-container>\r\n              </td> -->\r\n              <td>\r\n                <ng-container *ngIf=\"item.address\">\r\n                  {{\r\n                    item.address.address.length < 20\r\n                      ? item.address.address\r\n                      : item.address.address.slice(0, 20) + \"....\"\r\n                  }}</ng-container\r\n                >\r\n              </td>\r\n              <td>\r\n                {{ item.totalAmount | number: \"1.2-2\" }}\r\n              </td>\r\n              <td>\r\n                {{ item.note || '-' }}\r\n              </td>\r\n              <td>\r\n                <ng-container\r\n                  *ngIf=\"item.driver && item.driver.length > 0; else noDriver\"\r\n                >\r\n                  {{ item.driver[0].firstName }} {{ item.driver[0].lastName }}\r\n                </ng-container>\r\n                <ng-template #noDriver>\r\n                  N/A\r\n                  <!-- <span *ngIf=\"!item.status || item.orderType\">N/A</span> -->\r\n                  <!-- <button *ngIf=\"!item.orderType && item.status == 1 && item.driver && !item.driver.length\"\r\n                    class=\"btn btn-primary\" (click)=\"assignDriver(item)\">Assign</button> -->\r\n                </ng-template>\r\n              </td>\r\n              <td *ngIf=\"item.status == 0 && show\">\r\n                <div >\r\n               <button *ngIf=\"item._id != assignId &&  item.isManual\" (click)=\"findDriver(item.address.latitude,item.address.longitude,item._id)\">Assign Driver</button>\r\n               <div *ngIf=\"item._id == assignId \">\r\n                <select (change)=\"DriverAssign($event,item._id)\">\r\n                    <option disabled>Assign Driver</option>\r\n                    <option *ngFor=\"let item of driver\" [value]=\"item._id\">{{item.firstName}}</option>\r\n                   </select>\r\n                </div>\r\n                </div>\r\n            </td>\r\n              <td>\r\n                <ng-container *ngIf=\"item.user\">\r\n                  {{ item.user.firstName }} {{ item.user.lastName }}\r\n                </ng-container>\r\n              </td>\r\n        \r\n              <td>\r\n                <ng-container *ngIf=\"item.restaurantId\">\r\n                  {{ item.restaurantId.name }}\r\n                </ng-container>\r\n              </td>\r\n            \r\n              <td>\r\n                <span (click)=\"viewOrder(item)\" style=\"cursor: pointer\">\r\n                  <u>\r\n                    {{\r\n                      item.items && item.items.length ? item.items.length : 0\r\n                    }}\r\n                  </u>\r\n                </span>\r\n                <!-- <button class=\"btn btn-primary\" (click)=\"itemsList(item.items)\">\r\n                  Items\r\n                </button> -->\r\n              </td>\r\n              <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\"\r\n                [(ngModel)]=\"item.isManual\" (change)=\"updateActiveStatus(item._id , $event)\" labelOff=\"OFF\">\r\n            </ui-switch>\r\n            </td>\r\n              <td *ngIf=\"item.status == 0\">Pending</td>\r\n              <td *ngIf=\"item.status == 1\">Accepted</td>\r\n              <td *ngIf=\"item.status == 2\">\r\n                {{ item.orderType ? \"Prepared\" : \"Reached\" }}\r\n              </td>\r\n              <td *ngIf=\"item.status == 3\">Pick Up</td>\r\n              <td\r\n                *ngIf=\"item.status == 4 || item.status == 5 || item.status == 6\"\r\n              >\r\n                Delivered\r\n              </td>\r\n              <td *ngIf=\"item.status == 11\">Cancel By User</td>\r\n              <td *ngIf=\"item.status == 12\">Cancel By Restaurant</td>\r\n              <td>\r\n                {{ item.orderType ? \"Take away\" : \"Delivery\" }}\r\n              </td>\r\n              <td>\r\n                <ng-container\r\n                  *ngIf=\"item.deliveryDate != 0; else noDeliveryDate\"\r\n                >\r\n                  {{ item.deliveryDate | date: \"yyyy-MM-dd hh:mm a\" }}\r\n                </ng-container>\r\n                <ng-template #noDeliveryDate> - </ng-template>\r\n              </td>\r\n              <td>\r\n                {{ item.date | date: \"yyyy-MM-dd hh:mm a\" }}\r\n              </td>\r\n\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button\r\n                    class=\"btn btn-primary mr-1\"\r\n                    (click)=\"viewOrder(item)\"\r\n                  >\r\n                    <span class=\"fas fa-eye\"></span>\r\n                  </button>\r\n\r\n                  <button \r\n                    class=\"btn btn-primary mr-1\"\r\n                    *ngIf=\"item.status == 0\"\r\n                    (click)=\"orderAccept(item)\"\r\n                  >\r\n                    <span class=\"fas fa-user-check\"></span>\r\n                  </button>\r\n\r\n                  <button\r\n                    class=\"btn btn-primary mr-1\"\r\n                    *ngIf=\"\r\n                      (item.status != 0 && item.status < 4 && item.orderType) ||\r\n                      (item.status < 4 && item.driver && item.driver.length)\r\n                    \" (click)=\"changeStatus(item)\">\r\n                    {{ checkStatus(item.status, item.orderType) }}\r\n                  </button>\r\n                  <button\r\n                    class=\"btn btn-danger mr-1\"\r\n                    *ngIf=\"item.status > 0 && item.status < 3\"\r\n                    (click)=\"orderCancel(item)\"\r\n                  >\r\n                    <i class=\"fa fa-remove\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4\r\n          *ngIf=\"orderList && orderList.length == 0 && !loader\"\r\n          class=\"text-center\"\r\n        >\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <div\r\n        *ngIf=\"orderList && orderList.length != 0 && !loader\"\r\n        class=\"pagination_ui\"\r\n      >\r\n        <pagination-controls\r\n          (pageChange)=\"pageChange($event)\"\r\n          id=\"page\"\r\n          class=\"my-pagination\"\r\n        >\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"orderDetail\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h6 class=\"m-0 font-weight-bold text-primary\">View Order</h6>\n                        </div>\n                        <div class=\"col-md-6 text-right\">\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                                <span class=\"fas fa-arrow-left\"></span> Back\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div *ngIf=\"orderDetail\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Order Number</label>\n                            <input type=\"text\" name=\"Name\" value=\"{{orderDetail.orderNo}}\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>User Name</label>\n                            <input *ngIf=\"orderDetail.userId\" type=\"text\" name=\"Name\" [value]=\"orderDetail.userId.firstName +' '+ orderDetail.userId.lastName\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Restaurant Address</label>\n                            <textarea *ngIf=\"orderDetail.outletId\" type=\"text\" name=\"Name\" class=\"form-control\" disabled>{{ orderDetail.outletId.address}}\n                                </textarea>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label *ngIf=\"orderDetail.address\">User Address</label>\n                            <textarea *ngIf=\"orderDetail.address\" type=\"text\" name=\"Name\" class=\"form-control\" disabled>{{ orderDetail.address.address}}\n                                </textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Restaurant Name</label>\n                            <input type=\"text\" name=\"name\" [value]=\"orderDetail.restaurantId.name\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Prepration Time</label>\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.preprationTime\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Delivery Charges</label>\n                            <input type=\"text\" name=\"charge\" [value]=\"orderDetail.deliveryFee\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Total Discount</label>\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.totalDiscount\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"orderDetail.couponCode && orderDetail.couponDiscount \">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Coupon Code</label>\n                            <input type=\"text\" name=\"charge\" [value]=\"orderDetail.startTime\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Coupon Discount</label>\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.endTime\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Sub Total Amount</label>\n                            <input type=\"text\" name=\"subtotal\" [value]=\"orderDetail.subTotalAmount\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Total Amount</label>\n                            <input type=\"text\" name=\"totalamount\" [value]=\"orderDetail.totalAmount\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Payment Mode</label>\n                            <input type=\"text\" name=\"mode\" [value]=\"orderDetail.paymentMode\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Order Date</label>\n                            <input type=\"text\" name=\"date\" [value]=\"orderDetail.date | date: 'yyyy-MM-dd'\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Tax</label>\n                            <input type=\"text\" name=\"open-time\" [value]=\"orderDetail.tax\" class=\"form-control\"\n                                disabled />\n                        </div>\n                    </div> -->\n                </div>\n                <div class=\"row\" *ngIf=\"orderDetail?.deliveryDate\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Delivery Date</label>\n                            <input type=\"text\" name=\"deliveryDate\" [value]=\"orderDetail.deliveryDate\" class=\"form-control\" disabled />\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <div class=\"startflex\">\n                            <div class=\"form-group\">\n                                <div class=\"cont1\">\n                                    <label>Restaurant Review</label>\n                                    <div class=\"stars\">\n                                        <ngx-star-rating [rating]=\"orderDetail?.restaurantRating\" [id]=\"'rating'\" [disabled]=\"true\"></ngx-star-rating>\n                                    </div>\n                                </div>\n                                <textarea type=\"text\" name=\"subtotal\" [value]=\"(orderDetail?.restaurantReview)?orderDetail?.restaurantReview:''\" class=\"form-control\" disabled></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"col-md-6\" *ngIf=\"orderDetail?.deliveryDate\">\n                        <div class=\"startflex\">\n                            <div class=\"form-group\">\n                                <div class=\"cont1\">\n                                    <label>Driver Rating</label>\n                                    <div class=\"stars\">\n                                        <ngx-star-rating [rating]=\"orderDetail?.driverRating\" [id]=\"'rating'\" [disabled]=\"true\"></ngx-star-rating>\n                                    </div>\n                                </div>\n                                <!-- <textarea type=\"text\" name=\"subtotal\" [value]=\"orderDetail?.restaurantReview\" class=\"form-control\" disabled></textarea> -->\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card-body table-body\">\n                        <h3>Order Items</h3>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                                <thead>\n                                    <tr>\n                                        <th>#</th>\n                                        <th style=\"min-width: 5rem;\">Name</th>\n                                        <th style=\"min-width: 11rem;\">Image</th>\n                                        <th style=\"min-width: 7rem;\">Add Ons (Name & Amount)</th>\n                                        <th style=\"min-width: 7rem;\">Quantity</th>\n                                        <th style=\"min-width: 7rem;\">Amount</th>\n                                        <th style=\"min-width: 7rem;\">Total Amount</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of orderDetail.items; let i = index\">\n                                        <td>\n                                            {{i+1}}\n                                        </td>\n                                        <td>\n                                            {{item.itemId.name}}\n                                        </td>\n                                        <td>\n                                            <img src=\"{{imageUrl}}{{item.itemId.image}}\"/>\n                                        </td>\n                                        <td style=\"max-height: 120px;\n                                        overflow-y: auto;\n                                        display: list-item;\">\n                                            <div *ngFor=\"let addOn of item.addOn\">\n                                                {{item.addOn && item.addOn.length ?  addOn.name + ': ' + addOn.amount : '--'}}\n                                            </div>\n                                            <div *ngIf=\"item.addOn && !item.addOn.length\">\n                                                0\n                                            </div>\n                                        </td>\n                                        <td>\n                                            {{item.quantity}}\n                                        </td>\n                                        <td>\n                                            {{item.amount}}\n                                        </td>\n                                        <td>\n                                            {{item.totalAmount}}\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <h4 *ngIf=\"orderDetail.items && orderDetail.items.length == 0\" class=\"text-center\">\n                                No records found.\n                            </h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 class=\"m-0 text-black\" *ngIf=\"!id\">Add Restaurant</h6>\r\n            <h6 class=\"m-0 text-black\" *ngIf=\"id\">Edit Restaurant</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n              <span class=\"fas fa-arrow-left\"></span> Back\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"restaurantForm\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Name</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.name.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.required\">\r\n                Name is required\r\n              </div>\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.maxlength\">\r\n                Name can be max 16 characters long.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">اسم</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name_ar\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.name.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.required\">\r\n                Name is required\r\n              </div>\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.maxlength\">\r\n                Name can be max 16 characters long.\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n            <label for=\"category\">Address</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"outlet\" placeholder=\"\"\r\n                ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddress($event)\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.outlet.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.outlet.errors.required\">\r\n                Address is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Email</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.email.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.email.errors.required\">\r\n                Email is required\r\n              </div>\r\n              <div *ngIf=\"restaurantForm.controls.email.errors.pattern\">\r\n                Email is not valid\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n            <label for=\"category\">Password</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" id=\"name\" class=\"form-control\" formControlName=\"password\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.password.errors.required\">\r\n                Password is required\r\n              </div>\r\n              <div *ngIf=\"restaurantForm.controls.password.errors.minlength\">\r\n                Password must be atleast 8 characters\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Open Time</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" formControlName=\"openTime\" [owlDateTime]=\"dt1\" placeholder=\"Time\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt1\"><i\r\n                    class=\"fa fa-calendar\"></i></span>\r\n              </div>\r\n              <owl-date-time #dt1 [pickerType]=\"'timer'\"></owl-date-time>\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.openTime.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.openTime.errors.required\">\r\n                Open Time is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Close Time</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" formControlName=\"closeTime\" [owlDateTime]=\"dt2\" placeholder=\"Time\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt2\"><i\r\n                    class=\"fa fa-calendar\"></i></span>\r\n              </div>\r\n              <owl-date-time #dt2 [pickerType]=\"'timer'\"></owl-date-time>\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.closeTime.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.closeTime.errors.required\">\r\n                Close Time is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n          <!-- <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"body\">Description</label>\r\n            <div class=\"input-group\">\r\n              <textarea type=\"text\" row=\"3\" id=\"body\" class=\"form-control\" formControlName=\"description\"\r\n                placeholder=\"\"></textarea>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.description.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.description.errors.required\">\r\n                  Description is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.description.errors.maxlength\">\r\n                  Description can be max 250 characters long.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Discount</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" appNumberOnly id=\"discount\" class=\"form-control\" formControlName=\"discount\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.discount.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.required\">\r\n                  Discount is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.pattern\">\r\n                  Discount is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Discount Upto</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" appNumberOnly id=\"discountUpto\" class=\"form-control\"\r\n                formControlName=\"discountUpto\" placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.discountUpto.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.discountUpto.errors.required\">\r\n                  Discount Upto is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.discountUpto.errors.pattern\">\r\n                  Discount Upto is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Minimum Order Amount</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" id=\"minOrderAmount\" class=\"form-control\" formControlName=\"minOrderAmount\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"\r\n                  submitted && restaurantForm.controls.minOrderAmount.errors\r\n                \" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.minOrderAmount.errors.required\">\r\n                  Minimum Order Amount is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.minOrderAmount.errors.pattern\">\r\n                  Minimum Order Amount is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Average Order Price</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" appNumberOnly id=\"avgOrderPrice\" class=\"form-control\"\r\n                formControlName=\"avgOrderPrice\" placeholder=\"\" />\r\n              <div *ngIf=\"\r\n                  submitted && restaurantForm.controls.avgOrderPrice.errors\r\n                \" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.avgOrderPrice.errors.required\">\r\n                  Average Order Price is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.avgOrderPrice.errors.pattern\">\r\n                  Average Order Price is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"types\">Type of Food</label>\r\n            <div class=\"input-group\">\r\n              <select class=\"form-control\" formControlName=\"foodType\" *ngIf=\"foodType\">\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option *ngFor=\"let type of foodType\" [value]=\"type.value\">\r\n                  {{ type.name }}\r\n                </option>\r\n              </select>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.foodType.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.foodType.errors.required\">\r\n                  Food Type is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6 add_resurant\">\r\n            <label for=\"category\">Restaurant Category</label>\r\n            <div class=\"input-group\" *ngIf=\"categoryList && categoryList.length > 0\">\r\n              <ng-multiselect-dropdown placeholder=\"Select Category\" [data]=\"categoryList\" formControlName=\"categories\"\r\n                [settings]=\"dropDownSetting\">\r\n              </ng-multiselect-dropdown>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.categories.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.categories.errors.required\">\r\n                  Category is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6 add_resurant\">\r\n            <label for=\"category\">Restaurant Currency</label>\r\n            <div class=\"input-group\">\r\n              <select class=\"form-control\" formControlName=\"currency\">\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option\r\n                  *ngFor=\"let currency of currencyOptions\"\r\n                  [value]=\"currency.symbol\"\r\n                >\r\n                  {{ currency.code }}\r\n                </option>\r\n              </select>\r\n              <div\r\n                *ngIf=\"submitted && restaurantForm.controls.currency.errors\"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div *ngIf=\"restaurantForm.controls.currency.errors.required\">\r\n                  Currency is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Pay Bill</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" appNumberOnly id=\"payBill\" class=\"form-control\" formControlName=\"payBill\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.payBill.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.payBill.errors.required\">\r\n                  Pay Bill is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.payBill.errors.pattern\">\r\n                  Pay Bill is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Till Number</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" appNumberOnly id=\"tillNumber\" class=\"form-control\"\r\n                formControlName=\"tillNumber\" placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.tillNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.tillNumber.errors.required\">\r\n                  Till Number is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.tillNumber.errors.pattern\">\r\n                  Till Number Upto is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"types\">Image</label>\r\n            <div class=\"usr_profile_img\">\r\n              <div class=\"usr_profile_imgbx\">\r\n                <div class=\"user_img\">\r\n                  <figure *ngIf=\"categoryImage\">\r\n                    <img style=\"height: 150px; width: 150px\" [src]=\"categoryImage\" />\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n              <div class=\"user_profile_edit\">\r\n                <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event)\" />\r\n              </div>\r\n              <div *ngIf=\"submitted && !categoryImage\" class=\"invalid-feedback\">\r\n                Image is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group form-actions add_edit\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n            Add\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n            Update\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 class=\"m-0 text-black\" *ngIf=\"!itemId\">Add Food Item</h6>\r\n            <h6 class=\"m-0 text-black\" *ngIf=\"itemId\">Edit Food Item</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n              <span class=\"fas fa-arrow-left\"></span> Back\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"restaurantForm\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\"><strong>Name: </strong></label>\r\n            <div class=\"input-group\">\r\n              <input\r\n                type=\"text\"\r\n                id=\"name\"\r\n                class=\"form-control\"\r\n                formControlName=\"name\"\r\n                placeholder=\"\"\r\n              />\r\n            </div>\r\n            <div\r\n              *ngIf=\"submitted && restaurantForm.controls.name.errors\"\r\n              class=\"invalid-feedback\"\r\n            >\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.required\">\r\n                Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"types\">Type of Food</label>\r\n            <div class=\"input-group\">\r\n              <select class=\"form-control\" formControlName=\"type\" *ngIf=\"type\">\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option *ngFor=\"let data of type\" [value]=\"data.value\">\r\n                  {{ data.name }}\r\n                </option>\r\n              </select>\r\n              <div\r\n                *ngIf=\"submitted && restaurantForm.controls.type.errors\"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div *ngIf=\"restaurantForm.controls.type.errors.required\">\r\n                  Type of Food is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"body\">Description</label>\r\n            <div class=\"input-group\">\r\n              <textarea\r\n                type=\"text\"\r\n                row=\"3\"\r\n                id=\"body\"\r\n                class=\"form-control\"\r\n                formControlName=\"description\"\r\n                placeholder=\"\"\r\n              ></textarea>\r\n              <div\r\n                *ngIf=\"submitted && restaurantForm.controls.description.errors\"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div\r\n                  *ngIf=\"restaurantForm.controls.description.errors.required\"\r\n                >\r\n                  Description is required\r\n                </div>\r\n                <div\r\n                  *ngIf=\"restaurantForm.controls.description.errors.maxlength\"\r\n                >\r\n                  Description can be max 250 characters long.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Price</label>\r\n            <div class=\"input-group\">\r\n              <input\r\n                type=\"number\"\r\n                min=\"0\"\r\n                id=\"discount\"\r\n                appNumberOnly\r\n                class=\"form-control\"\r\n                formControlName=\"price\"\r\n                placeholder=\"\"\r\n              />\r\n              <div\r\n                *ngIf=\"submitted && restaurantForm.controls.price.errors\"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div *ngIf=\"restaurantForm.controls.price.errors.required\">\r\n                  Price is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.price.errors.pattern\">\r\n                  Price is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\"\r\n              >Preparation Time<small> (In Minutes)</small></label\r\n            >\r\n            <div class=\"input-group\">\r\n              <input\r\n                type=\"number\"\r\n                min=\"0\"\r\n                appNumberOnly\r\n                id=\"preprationTime\"\r\n                class=\"form-control\"\r\n                formControlName=\"preprationTime\"\r\n                placeholder=\"\"\r\n              />\r\n              <div\r\n                *ngIf=\"\r\n                  submitted && restaurantForm.controls.preprationTime.errors\r\n                \"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div\r\n                  *ngIf=\"restaurantForm.controls.preprationTime.errors.required\"\r\n                >\r\n                  Preparation Time is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Discount</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" id=\"discount\" class=\"form-control\" formControlName=\"discount\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.discount.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.required\">\r\n                  Discount is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.pattern\">\r\n                  Discount is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"types\">Food Category</label>\r\n            <div class=\"input-group\">\r\n              <select\r\n                class=\"form-control\"\r\n                formControlName=\"foodTypeId\"\r\n                *ngIf=\"foodType\"\r\n              >\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option *ngFor=\"let type of foodType\" [value]=\"type._id\">\r\n                  {{ type.name }}\r\n                </option>\r\n              </select>\r\n              <div\r\n                *ngIf=\"submitted && restaurantForm.controls.foodTypeId.errors\"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div *ngIf=\"restaurantForm.controls.foodTypeId.errors.required\">\r\n                  Food Category is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"category\">Restaurant Category</label>\r\n            <div\r\n              class=\"input-group\"\r\n              *ngIf=\"categoryList && categoryList.length > 0\"\r\n            >\r\n              <select\r\n                class=\"form-control\"\r\n                formControlName=\"foodCategoryId\"\r\n                *ngIf=\"foodType\"\r\n              >\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option *ngFor=\"let type of categoryList\" [value]=\"type._id\">\r\n                  {{ type.name }}\r\n                </option>\r\n              </select>\r\n              <div\r\n                *ngIf=\"\r\n                  submitted && restaurantForm.controls.foodCategoryId.errors\r\n                \"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div\r\n                  *ngIf=\"restaurantForm.controls.foodCategoryId.errors.required\"\r\n                >\r\n                  Restaurant Category is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <div class=\"usr_profile_img\">\r\n              <div class=\"usr_profile_imgbx\">\r\n                <label>Image</label>\r\n                <div class=\"user_img\">\r\n                  <figure *ngIf=\"categoryImage\">\r\n                    <img\r\n                      style=\"height: 150px; width: 150px\"\r\n                      [src]=\"categoryImage\"\r\n                    />\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n              <div class=\"user_profile_edit\">\r\n                <input\r\n                  type=\"file\"\r\n                  accept=\"image/*\"\r\n                  (change)=\"profilePic($event)\"\r\n                />\r\n              </div>\r\n              <div *ngIf=\"submitted && !categoryImage\" class=\"invalid-feedback\">\r\n                Image is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group form-actions add_item\">\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-sm btn-success\"\r\n            *ngIf=\"!itemId\"\r\n            (click)=\"submit()\"\r\n          >\r\n            Add\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-sm btn-success\"\r\n            *ngIf=\"itemId\"\r\n            (click)=\"update()\"\r\n          >\r\n            Update\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <!-- DataTales Example -->\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <div class=\"tittle_outer\">\n        <div class=\" user_title\">\n          <div class=\"user_title_inner\">\n            <h6 class=\"m-0 text-black\">\n              Food Item\n            </h6>\n\n          </div>\n          <div class=\"user_add_button\">\n            <button  class=\"btn btn-primary mr-4\" *ngIf=\"showfood\" (click)=\"addCategory()\">\n              <span class=\"fas fa-plus\"></span> Add Item\n          </button>\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n              <span class=\"fas fa-arrow-left\"></span> Back\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Image</th>\n              <th>Name</th>\n              <th>Type of Food</th>\n              <th>Description</th>\n              <th>Price</th>\n              <th *ngIf=\"!showfood\">Restaurant Name</th>\n              <!-- <th>Discount</th> -->\n              <th>Preparation Time</th>\n              <th>Created Date</th>\n              <th *ngIf=\"showfood\">Status</th>\n              <th *ngIf=\"showfood\">\n                Action\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of foodItem; let i = index\">\n              <td>{{ i + serialNumber + 1 }}</td>\n              <td>\n                <img  src=\"{{ imageUrl }}{{ item.image }}\" width=\"70px\" height=\"70px\" />\n                <!-- <img *ngIf=\"!showfood\" src=\"{{ imageUrl }}{{ item.restaurantId?.image }}\" width=\"70px\" height=\"70px\" /> -->\n              </td>\n              <td>{{ item.name }}</td>\n              <!-- <td *ngIf=\"!showfood\">{{ item.restaurantId?.name }}</td> -->\n              <td *ngIf=\"item.type == 0\">Veg.</td>\n              <td *ngIf=\"item.type == 1\">Non-Veg.</td>\n              <td *ngIf=\"item.type == 2\">Veg. & Non-Veg.</td>\n              <td>\n                {{ item.description == null ? \"\" : item.description.length\n                                < 18 ? item.description : item.description.slice(0, 16) + \"....\" }} </td>\n              <!-- <td>{{item.price || item.totalAmount}}</td> -->\n             <td>\n              <input type=\"number\" min=\"0\" style=\"width: 41%;\" [(ngModel)]=\"item.price\" (input)=\"updateData(item.price,item._id,item.quantity)\">\n             </td> \n              <td *ngIf=\"!showfood\">{{item.restaurantName}}</td>\n              <td>{{item.preprationTime}}</td>\n              <td>\n                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\n              </td>\n              <td *ngIf=\"showfood\">\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\" [(ngModel)]=\"item.status\"\n                  (ngModelChange)=\"updateActiveStatus(item)\" labelOff=\"OFF\">\n                </ui-switch>\n              </td>\n              <td  *ngIf=\"showfood\">\n                <div class=\"product_action\" >\n                  <!-- <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button> -->\n                  <button class=\"btn btn-danger\" (click)=\"deleteCategory(item)\">\n                    <span class=\"fas fa-fw fa-trash\"></span>\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div *ngIf=\"loader\" class=\"loader\"></div>\n        <h4 *ngIf=\"foodItem && foodItem.length == 0 && !loader\" class=\"text-center\">\n          No records found.\n        </h4>\n      </div>\n      <!-- <pagination\n          *ngIf=\"categoryList.length != 0 && !loader\"\n          [totalItems]=\"totalItems\"\n          [boundaryLinks]=\"true\"\n          [maxSize]=\"5\"\n          [(ngModel)]=\"currentPage\"\n          (pageChanged)=\"pageChange($event)\"\n        ></pagination> -->\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <!-- DataTales Example -->\n    <div class=\"card shadow mb-4\">\n\n        <div class=\"card-header py-3\">\n            <div class=\"tittle_outer\">\n                <div class=\" user_title\">\n                   <div class=\"user_title_inner\">\n                    <h6 class=\"m-0 text-black\" >\n                        Food Category\n                    </h6>\n                \n                \n                \n                </div>\n                   <div class=\"user_add_button\"> \n                    <button class=\"btn btn-primary mr-1\" (click)=\"addFoodType()\">\n                        <span class=\"fas fa-plus\"></span> Add Category\n                    </button>\n                    <button class=\"btn btn-primary btn-primary_border\" (click)=\"history.back()\">\n                        <span class=\"fas fa-arrow-left\"></span> Back\n                    </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Created Date</th>\n                            <th>Status</th>\n                            <th>\n                                Action\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of foodType; let i = index\">\n                            <td>{{ i + serialNumber + 1 }}</td>\n                            <td>{{ item.name }}</td>\n                            <td>\n                                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\n                            </td>\n                            <td>\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\"\n                                    [(ngModel)]=\"item.status\" (ngModelChange)=\"updateActiveStatus(item)\" labelOff=\"OFF\">\n                                </ui-switch>\n                            </td>\n                            <td>\n                                <div class=\"product_action\">\n                                    <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\n                                        <span class=\"fas fa-fw fa-edit\"></span>\n                                    </button>\n                                    <button class=\"btn btn-danger\" (click)=\"deleteCategory(item)\">\n                                        <span class=\"fas fa-fw fa-trash\"></span>\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div *ngIf=\"loader\" class=\"loader\"></div>\n                <h4 *ngIf=\"foodType && foodType.length == 0 && !loader\" class=\"text-center\">\n                    No records found.\n                </h4>\n            </div>\n            <!-- <pagination\n          *ngIf=\"categoryList.length != 0 && !loader\"\n          [totalItems]=\"totalItems\"\n          [boundaryLinks]=\"true\"\n          [maxSize]=\"5\"\n          [(ngModel)]=\"currentPage\"\n          (pageChanged)=\"pageChange($event)\"\n        ></pagination> -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <!-- DataTales Example -->\r\n  <div class=\"card shadow mb-4\">\r\n\r\n\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n          <div class=\" user_title\">\r\n             <div class=\"user_title_inner\">\r\n              <h6 class=\"m-0 text-black\" >\r\n                Outlet\r\n              </h6>\r\n          \r\n          \r\n          \r\n          </div>\r\n             <div class=\"user_add_button\"> \r\n              <button class=\"btn btn-primary mr-4\" (click)=\"addOutlet()\">\r\n                <span class=\"fas fa-plus\"></span> Add Outlet\r\n              </button>\r\n              <button class=\"btn btn-primary  btn-primary_border\" (click)=\"history.back()\">\r\n                <span class=\"fas fa-arrow-left\"></span> Back\r\n              </button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Address</th>\r\n              <th>\r\n                Action\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"outlet && outlet.length > 0\">\r\n            <tr *ngFor=\"let item of outlet; let i = index\">\r\n              <td>{{ i + serialNumber + 1 }}</td>\r\n              <td>{{ item.address }}</td>\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-danger\" (click)=\"deleteOutlet(item)\">\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4 *ngIf=\"outlet && outlet.length == 0 && !loader\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <!-- <pagination\r\n          *ngIf=\"categoryList.length != 0 && !loader\"\r\n          [totalItems]=\"totalItems\"\r\n          [boundaryLinks]=\"true\"\r\n          [maxSize]=\"5\"\r\n          [(ngModel)]=\"currentPage\"\r\n          (pageChanged)=\"pageChange($event)\"\r\n        ></pagination> -->\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 i18n=\"@@Restaurant\" class=\"m-0 text-black\">Restaurant</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button i18n=\"@@add_restaurant\" class=\"btn btn-primary\" (click)=\"addRestaurant()\">\r\n              <span class=\"fas fa-plus\"></span> Add Restaurant\r\n            </button>\r\n            <button i18n=\"@@add_restaurant\" class=\"btn btn-primary ml-3\" (click)=\"downloadCsv()\">\r\n              <span class=\"fas fa-download\"></span> Download CSV\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"filters_outer\">\r\n        <div class=\"user_filter\">\r\n          <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\"\r\n            placeholder=\"Search Restaurant\" />\r\n        </div>\r\n        <div class=\"user_filter user_selectfilter\">\r\n          <select class=\"form-control\" *ngIf=\"foodType\" (change)=\"onChange($event)\" [(ngModel)]=\"type\">\r\n            <!-- <option value=\"\" selected disabled hidden>Choose here</option> -->\r\n            <option *ngFor=\"let type of foodType\" [value]=\"type.value\">\r\n              {{ type.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"user_serch_btn\">\r\n          <button type=\"submit\" i18n=\"@@Search\" class=\"btn btn-primary pl-2 pr-2\" (click)=\"searchRestaurant()\">\r\n            Search\r\n          </button>\r\n          <button type=\"reset\" i18n=\"@@Reset\" class=\"btn btn-primary pl-3 pr-3 ml-2\" (click)=\"reset()\">\r\n            Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body table-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th i18n=\"@@Image\">Image</th>\r\n              <th i18n=\"@@Name\">Name</th>\r\n              <!-- <th>Description</th> -->\r\n              <th i18n=\"@@type_of_food\" style=\"min-width: 150px\">\r\n                Type of Food\r\n              </th>\r\n              <th i18n=\"@@discount\">Discount</th>\r\n              <!-- <th>Is Featured</th> -->\r\n              <th i18n=\"@@Status\">Status</th>\r\n              <th i18n=\"@@Is_Recommended\" style=\"min-width: 130px\">\r\n                Is Recommended\r\n              </th>\r\n              <th i18n=\"@@Created_Date\" style=\"min-width: 150px\">\r\n                Created Date\r\n              </th>\r\n              <th i18n=\"@@Action\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"\r\n                let item of restaurantList | paginate: config;\r\n                let i = index\r\n              \">\r\n              <td>{{ (currentPage - 1) * 25 + i + 1 }}</td>\r\n              <td>\r\n                <img src=\"{{ imageUrl }}{{ item.image }}\" width=\"70px\" height=\"70px\" />\r\n              </td>\r\n              <td>{{ item.name }}</td>\r\n              <!-- <td>\r\n                {{\r\n                  item.description == null\r\n                    ? \"\"\r\n                    : item.description.length < 18\r\n                    ? item.description\r\n                    : item.description.slice(0, 16) + \"....\"\r\n                }}\r\n              </td> -->\r\n              <td *ngIf=\"item.foodType == 0\">Veg.</td>\r\n              <td *ngIf=\"item.foodType == 1\">Non-Veg.</td>\r\n              <td *ngIf=\"item.foodType == 2\">Veg. & Non-Veg.</td>\r\n\r\n              <td>\r\n                {{ item.discount }}\r\n              </td>\r\n              <!-- <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"featured\" name=\"isFavourite\"\r\n                  [(ngModel)]=\"item.isFavourite\" (ngModelChange)=\"updateFavRes(item)\" labelOff=\"OFF\"></ui-switch>\r\n              </td> -->\r\n              <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\"\r\n                  (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\"></ui-switch>\r\n              </td>\r\n              <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"recommend\" name=\"isRecommended\"\r\n                  [(ngModel)]=\"item.isRecommended\" (ngModelChange)=\"updateRecoRes(item)\" labelOff=\"OFF\"></ui-switch>\r\n              </td>\r\n              <td>\r\n                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n              </td>\r\n\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button class=\"btn btn-warning mr-1\" (click)=\"onViewItem(item)\" title=\"View\">\r\n                    <span class=\"fas fa-fw fa-eye\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\" title=\"Edit\">\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-info mr-1\" (click)=\"getOutlet(item)\" title=\"Outlet\">\r\n                    <span class=\"fa fa-map-marker\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn_item mr-1\" (click)=\"getFoodType(item)\" title=\"Food Category\">\r\n                    <span class=\"fa fa-sitemap\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-primary mr-1\" (click)=\"getFoodItem(item)\" title=\"Food Item\">\r\n                    <span class=\"fa fa-th\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-danger mr-1\" (click)=\"deleteRestaurant(item)\">\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4 *ngIf=\"restaurantList.length == 0 && !loader\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <div *ngIf=\"restaurantList && restaurantList.length != 0 && !loader\" class=\"pagination_ui\">\r\n        <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <div class=\"tittle_outer\">\n                <div class=\" user_title\">\n                   <div class=\"user_title_inner\">   <h6 class=\"m-0 text-black\" *ngIf=\"!settings\">\n                    Add Settings\n                </h6>\n                <h6 class=\"m-0 text-black\" *ngIf=\"settings\">\n                    Edit Settings\n                </h6></div>\n                   <div class=\"user_add_button\"> \n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                        <span class=\"fas fa-arrow-left\"></span> Back\n                    </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n        <div class=\"card-body table-body\">\n            <form [formGroup]=\"restaurantForm\">\n                <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"title\">Delivery Charges</label>\n                        <div class=\"input-group\">\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"deliveryFee\" class=\"form-control\" formControlName=\"deliveryFee\" placeholder=\"\" />\n                        </div>\n                        <div *ngIf=\"submitted && restaurantForm.controls.deliveryFee.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"restaurantForm.controls.deliveryFee.errors.required\">\n                                Delivery Charges is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"price\">Tax</label>\n                        <div class=\"input-group\">\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"tax\" class=\"form-control\" formControlName=\"tax\" placeholder=\"\" />\n                            <div *ngIf=\"submitted && restaurantForm.controls.tax.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"restaurantForm.controls.tax.errors.required\">\n                                    Tax is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"price\">Service Fee</label>\n                        <div class=\"input-group\">\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"serviceFee\" class=\"form-control\" formControlName=\"serviceFee\" placeholder=\"\" />\n                            <div *ngIf=\"submitted && restaurantForm.controls.serviceFee.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"restaurantForm.controls.serviceFee.errors.required\">\n                                    Service Fee is required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group form-actions add_edit\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!settings\" (click)=\"submit()\">\n                        Add\n                    </button>\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"settings\" (click)=\"update()\">\n                        Update\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"restaurantDetail\">\r\n    <div class=\"card shadow mb-4\">\r\n\r\n\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\">\r\n                    <h6 class=\"m-0 text-black\" >\r\n                        View Restaurant\r\n                    </h6>\r\n                \r\n                \r\n                \r\n                </div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                      </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"card-body\">\r\n            <!-- Content Row -->\r\n            <div class=\"grid_name\">\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\" comman_name_grid hvrcursor\" routerLink=\"/restaurant/order\" title=\"View Orders\">\r\n                    <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">\r\n                                        Orders\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ restaurantDetail.orders }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-fw fa-user fa-2x text-gray-300\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"comman_name_grid hvrcursor\" [routerLink]=\"'/restaurant/outlet/' + id\" title=\"View Outlet\">\r\n                    <div class=\"card border-left-success shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">\r\n                                        Outlets\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ restaurantDetail.outlets }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-fw fa-list fa-2x text-gray-300\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Pending Requests Card Example -->\r\n                <div class=\" comman_name_grid hvrcursor\" [routerLink]=\"'/restaurant/food-item/' + id\" title=\"View Food Item\">\r\n                    <div class=\"card border-left-warning shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">\r\n                                        Food Items\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ restaurantDetail.items }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fa fa-shopping-cart fa-2x text-gray-300\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\" comman_name_grid hvrcursor\" [routerLink]=\"'/restaurant/food-type/' + id\" title=\"View Food Categories\">\r\n                    <div class=\"card border-left-info shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">\r\n                                        Food Categories\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ restaurantDetail.types }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fa fa-list-alt fa-2x text-gray-300 \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"restaurantDetail.detail\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Name</label>\r\n                            <input type=\"text\" name=\"Name\" [value]=\"restaurantDetail.detail.name\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Description</label>\r\n              <textarea row=\"4\" type=\"text\" class=\"form-control\" id=\"body\" [value]=\"\r\n                  restaurantDetail.detail.description\r\n                    ? restaurantDetail.detail.description\r\n                    : '-'\r\n                \" class=\"form-control\" placeholder=\"Description\" disabled></textarea>\r\n            </div>\r\n          </div> -->\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Type of Food</label>\r\n                            <input type=\"text\" name=\"Name\" [value]=\"\r\n                  restaurantDetail.detail.foodType == '0'\r\n                    ? 'Vegetrainian'\r\n                    : restaurantDetail.detail.foodType == '1'\r\n                    ? 'Non-Vegetrainian'\r\n                    : 'Vegetrainian & Non-Vegetrainian'\r\n                \" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Discount</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"restaurantDetail.detail.discount\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Open Time</label>\r\n              <input type=\"text\" name=\"open-time\" [value]=\"restaurantDetail.detail.openTime\" class=\"form-control\"\r\n                disabled />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Close Time</label>\r\n              <input type=\"text\" name=\"open-time\" [value]=\"restaurantDetail.detail.closeTime\" class=\"form-control\"\r\n                disabled />\r\n            </div>\r\n          </div> -->\r\n                    <!-- <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Minimum Order Amount</label>\r\n              <input type=\"text\" name=\"open-time\" [value]=\"restaurantDetail.detail.minOrderAmount\" class=\"form-control\"\r\n                disabled />\r\n            </div>\r\n          </div> -->\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Average Order Price</label>\r\n                            <input type=\"text\" name=\"price\" [value]=\"restaurantDetail.detail.avgOrderPrice\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Average Delivery Time</label>\r\n                            <input type=\"text\" name=\"time\" [value]=\"restaurantDetail.detail.avgDeliveryTime\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>tax</label>\r\n              <input type=\"text\" name=\"open-time\" [value]=\"restaurantDetail.detail.tax\" class=\"form-control\" disabled />\r\n            </div>\r\n          </div> -->\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Restaurant Category</label>\r\n                            <ul class=\"list-inline caticon\">\r\n                                <li *ngFor=\"let category of restaurantDetail.detail.categories\" class=\"mb-2\">\r\n                                    <i class=\"fas fa-utensils mr-1 text-primary\"></i> {{ category.name }}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Image</label>\r\n                            <div>\r\n                                <ng-container *ngIf=\"restaurantDetail.detail.image\">\r\n                                    <img [src]=\"comm.imageUrl + restaurantDetail.detail.image\" style=\"height: 150px; width: 150px;\" />\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/category/category.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/category/category.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 967px) {\n  .user_filter,\n.user_serch_btn {\n    margin-bottom: 10px;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 767px) {\n  .user_filter,\n.user_serch_btn {\n    justify-content: center;\n  }\n\n  .text-right.add_btn {\n    text-align: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7O0lBRUksbUJBQUE7SUFDQSx5QkFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJOztJQUVJLHVCQUFBO0VDQU47O0VERUU7SUFDSSw2QkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XHJcbiAgICAudXNlcl9maWx0ZXIsXHJcbiAgICAudXNlcl9zZXJjaF9idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudXNlcl9maWx0ZXIsXHJcbiAgICAudXNlcl9zZXJjaF9idG4ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQuYWRkX2J0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJAbWVkaWEgKG1heC13aWR0aDogOTY3cHgpIHtcbiAgLnVzZXJfZmlsdGVyLFxuLnVzZXJfc2VyY2hfYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudXNlcl9maWx0ZXIsXG4udXNlcl9zZXJjaF9idG4ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRleHQtcmlnaHQuYWRkX2J0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/category/category.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/category/category.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);





// import { Categories } from "src/app/models/categories";
// import { CategorymodalComponent } from "./categorymodal/categorymodal.component";
// import { Resp } from "src/app/models/Resp";

let CategoryComponent = class CategoryComponent {
    constructor(api, comm, dialogService) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.categoryList = [];
        this.searchText = '';
    }
    ngOnInit() {
        this.imageUrl = this.comm.imageUrl;
        this.getCategories();
    }
    getCategories() {
        this.api.getAllRestaurantCategories().subscribe(response => {
            console.log(response["response"]);
            if (response["response"]["success"]) {
                this.categoryList = response["response"]["message"];
                this.allData = this.categoryList;
                for (var data of this.categoryList) {
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
                // this.totalItems = response.count;
            }
            if (!response["success"])
                return;
        });
    }
    addCategory() {
        this.dialogService.addRestaurant().subscribe(res => {
            if (res == "yes") {
                this.getCategories();
            }
        });
    }
    onEditSelect(item) {
        this.dialogService.editRestaurant(item).subscribe(res => {
            if (res == "yes") {
                this.getCategories();
            }
        });
    }
    deleteCategory(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Category!",
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
                this.api.editFoodCategory(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getCategories();
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
        this.api.editFoodCategory(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getCategories();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    // pageChange(page) {
    //   this.filterBody.page = page.page - 1;
    //   this.serialNumber = this.filterBody.page * this.filterBody.limit;
    //   this.getCategories();
    // }
    searchRestaurant() {
        this.categoryList = this.allData.filter(row => row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    }
    reset() {
        this.searchText = '';
        this.getCategories();
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-category",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.scss */ "./src/app/cooldash/pages/restaurant/category/category.component.scss")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/order/order.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/order/order.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error1 {\n  background: #ff00009c;\n  color: #fff;\n}\n\n@media (max-width: 967px) {\n  .textcenter,\n.text-right.textright {\n    text-align: center !important;\n  }\n\n  .textcenter {\n    font-size: 28px;\n    margin-bottom: 11px !important;\n  }\n}\n\n@media (max-width: 360px) {\n  .text-right.textright .mr-3 {\n    margin-right: 9px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSTs7SUFFSSw2QkFBQTtFQ0NOOztFRENFO0lBQ0ksZUFBQTtJQUNBLDhCQUFBO0VDRU47QUFDRjs7QURDQTtFQUNJO0lBQ0ksNEJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcjEge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDljO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xyXG4gICAgLnRleHRjZW50ZXIsXHJcbiAgICAudGV4dC1yaWdodC50ZXh0cmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRleHRjZW50ZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgLnRleHQtcmlnaHQudGV4dHJpZ2h0IC5tci0zIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLmVycm9yMSB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDA5YztcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xuICAudGV4dGNlbnRlcixcbi50ZXh0LXJpZ2h0LnRleHRyaWdodCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dGNlbnRlciB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDExcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC50ZXh0LXJpZ2h0LnRleHRyaWdodCAubXItMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/order/order.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/order/order.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/order.service */ "./src/app/cooldash/services/order.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);










let OrderComponent = class OrderComponent {
    constructor(api, comm, dialogService, router, toastr, orderService) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.router = router;
        this.toastr = toastr;
        this.orderService = orderService;
        this.serialNumber = 0;
        this.loader = true;
        this.status = "pending";
        this.limit = 25;
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25,
        };
    }
    ngOnInit() {
        this.currentPage = 1;
        this.imageUrl = this.comm.imageUrl;
        if (this.comm.oderStatus == "pending") {
            this.pendingOrder();
        }
        else {
            this.allOrder();
        }
        this.orderService.orderListener().subscribe((res) => {
            if (res["status"] == 12) {
                this.toastr.successToastr("Order Rejected");
                if (this.comm.oderStatus == "pending") {
                    this.pendingOrder();
                }
                else {
                    this.allOrder();
                }
            }
            else if (res["status"] == 1) {
                this.toastr.successToastr("Order Accepted");
                if (this.comm.oderStatus == "pending") {
                    this.pendingOrder();
                }
                else {
                    this.allOrder();
                }
            }
        });
        this.orderService.newRestaurtOrder().subscribe((res) => {
            if (res["sucess"]) {
                this.toastr.successToastr("New Restaurant Order Received");
                if (this.router.url === "/restaurant/order") {
                    this.pendingOrder();
                }
            }
        });
        this.orderService.statusCahnegListener().subscribe((res) => {
            if (this.comm.oderStatus == "pending") {
                this.pendingOrder();
            }
            else {
                this.allOrder();
            }
        });
    }
    // pendingOrder() {
    //   this.status = "pending";
    //   this.comm.oderStatus = this.status;
    //   var status = 0;
    //   var page = this.currentPage;
    //   this.api.getPendingOrders(status, page).subscribe((response) => {
    //     if (response["response"]["success"]) {
    //       this.orderList = response["data"]["list"];
    //       console.log(this.orderList);
    //       this.loader = false;
    //       this.config = {
    //         id: "page",
    //         currentPage: this.currentPage,
    //         itemsPerPage: 25,
    //         totalItems: response["data"]["count"],
    //       };
    //     }
    //     if (!response["success"]) return;
    //   });
    // }
    changeMatchWebsite(event) {
        if (event.target.value == '0') {
            this.show = true;
        }
        else {
            this.show = false;
        }
        this.statuscode = event.target.value;
        this.pendingOrder();
    }
    pendingOrder() {
        this.status = "pending";
        this.comm.storeOderStatus = this.status;
        var status = this.statuscode;
        var page = this.currentPage;
        this.api.getPendingOrders(status, page).subscribe((response) => {
            if (response["response"]["success"]) {
                this.orderList = response["data"]["list"];
                // console.log(this.orderList);
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: page,
                    itemsPerPage: 25,
                    totalItems: response["data"]["count"],
                };
            }
            if (!response["success"])
                return;
        });
    }
    findDriver(lan, lon, id) {
        this.showdrop = true;
        this.assignId = id;
        this.api.getDrivers(lan, lon).subscribe((res) => {
            this.showdrop = false;
            this.driver = res.data.drivers;
        });
    }
    DriverAssign(event, id) {
        console.log(event.target.value);
        const data = {
            "driverId": event.target.value,
            "orderId": id
        };
        this.api.assignRDriver(data).subscribe((res) => {
            if (res.response.success) {
                console.log('getscket');
                this.adminid = localStorage.getItem('id');
                this.orderService.assingDriver(this.adminid).subscribe((res1) => {
                    this.toastr.successToastr(res1.message);
                    this.getPendingorder();
                });
            }
        });
    }
    updateActiveStatus(id, value) {
        console.log(id, value);
        const data = {
            "type": value,
            "id": id
        };
        this.api.changeRType(data).subscribe((res) => {
            // this.allOrder();
        });
    }
    orderAccept(item) {
        console.log(item);
        this.dialogService.orderAcceptModal().subscribe((res) => {
            console.log(res);
            if (res != undefined) {
                if (res["response"] == "no") {
                    var data = {
                        _id: item._id,
                        status: 12,
                        verticalType: 0,
                        time: res.time,
                    };
                    this.orderService.orderAccept(data);
                }
                else if (res["response"] == "yes" &&
                    res["time"] != "" &&
                    res["time"] != undefined) {
                    var data = {
                        _id: item._id,
                        status: 1,
                        verticalType: 0,
                        time: res.time,
                    };
                    this.orderService.orderAccept(data);
                }
            }
        });
    }
    itemsList(items) {
        this.dialogService.itemList(items);
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        if (this.status == "all") {
            this.allOrder();
        }
        else {
            this.pendingOrder();
        }
    }
    getPendingorder() {
        this.api.getAllPresturant().subscribe((response) => {
            if (response["response"]["success"]) {
                this.orderList = response["data"]["list"];
                for (let list of this.orderList) {
                    var totalTime = moment__WEBPACK_IMPORTED_MODULE_8__(list["date"]).add(list["preprationTime"], "minutes");
                    var currenntTime = moment__WEBPACK_IMPORTED_MODULE_8__();
                    list.mins = currenntTime.diff(totalTime, "minutes");
                    // console.log(list['preprationTime'],list.mins)
                }
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: this.currentPage,
                    itemsPerPage: 25,
                    totalItems: response["data"]["count"],
                };
            }
            if (!response["success"])
                return;
        });
    }
    allOrder() {
        var page = this.currentPage;
        this.status = "all";
        this.comm.oderStatus = this.status;
        this.api.getAllOrders(page).subscribe((response) => {
            if (response["response"]["success"]) {
                this.orderList = response["data"]["list"];
                for (let list of this.orderList) {
                    var totalTime = moment__WEBPACK_IMPORTED_MODULE_8__(list["date"]).add(list["preprationTime"], "minutes");
                    var currenntTime = moment__WEBPACK_IMPORTED_MODULE_8__();
                    list.mins = currenntTime.diff(totalTime, "minutes");
                    // console.log(list['preprationTime'],list.mins)
                }
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: this.currentPage,
                    itemsPerPage: 25,
                    totalItems: response["data"]["count"],
                };
            }
            if (!response["success"])
                return;
        });
    }
    checkStatus(status, orderType) {
        if (!orderType)
            return "Delivered";
        switch (status) {
            case 1:
                return "Prepared";
            case 2:
                return "Delivered";
            case 3:
                return "Delivered";
        }
    }
    changeStatus(item) {
        let title = "";
        let btntitle = "";
        let status = 2;
        switch (item.status) {
            case 1:
                title = "Mark this order Prepared";
                btntitle = "Prepared";
                break;
            case 2 || false:
                title = "Mark this order Delivered";
                btntitle = "Delivered";
                status = 4;
                break;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure?",
            text: title,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: btntitle,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                let obj = {
                    _id: item._id,
                    verticalType: item.verticalType,
                    orderType: item.orderType,
                    status: status,
                };
                this.orderService.changeStatus(obj).subscribe((res) => {
                    return (item.status = res.status);
                });
            }
        });
    }
    assignDriver(item) {
        // console.log(item)
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Select Driver",
            input: "select",
            inputOptions: {
                "1": "Tier 1",
                "2": "Tier 2",
                "3": "Tier 3",
            },
            inputPlaceholder: "required",
            inputValidator: function (value) {
                return new Promise(function (resolve, reject) {
                    if (value !== "") {
                        resolve("Success.");
                    }
                    else {
                        resolve("You need to select a Tier");
                    }
                });
            },
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Assign",
            allowOutsideClick: false,
        }).then((result) => { });
    }
    orderCancel(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure?",
            text: "Want to cancel this order",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                let obj = {
                    _id: item._id,
                    verticalType: item.verticalType,
                    orderType: item.orderType,
                    status: 12,
                };
                this.orderService.changeStatus(obj).subscribe((res) => {
                    return (item.status = res.status);
                });
            }
        });
    }
    // checkTiming(date: number, min: number, status: number) {
    //   let ordertime = moment(date).add(min, 'minutes').subtract(10, 'minutes').valueOf()
    //   if (moment().valueOf() > ordertime || status)
    //     return false
    //   else return true
    // }
    viewOrder(item) {
        this.comm.oderStatus = this.status;
        this.router.navigate([
            "restaurant/view-order/" + this.status + "/" + item._id,
        ]);
    }
};
OrderComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.scss */ "./src/app/cooldash/pages/restaurant/order/order.component.scss")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont1 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n::ng-deep .cont1 label.star {\n  padding: 0 5px !important;\n  width: inherit;\n}\n\n.cont1 .stars {\n  width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L29yZGVyL3ZpZXctb3JkZXIvdmlldy1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9vcmRlci92aWV3LW9yZGVyL3ZpZXctb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L29yZGVyL3ZpZXctb3JkZXIvdmlldy1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250MSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jb250MSBsYWJlbC5zdGFyIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLmNvbnQxIC5zdGFycyB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxufSIsIi5jb250MSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5jb250MSBsYWJlbC5zdGFyIHtcbiAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5jb250MSAuc3RhcnMge1xuICB3aWR0aDogaW5oZXJpdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderComponent", function() { return ViewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let ViewOrderComponent = class ViewOrderComponent {
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
            this.getStoreOrderDetail(this.id);
        });
        this.imageUrl = this.comm.imageUrl;
    }
    getStoreOrderDetail(id) {
        this.api.getRestaurantOrderDetail(id).subscribe(res => {
            if (res["response"]["success"]) {
                // console.log(res);
                if (res["data"]['deliveryDate'])
                    res["data"]['deliveryDate'] = moment__WEBPACK_IMPORTED_MODULE_5__(res["data"]['deliveryDate']).format('YYYY-MM-DD hh:mm a');
                this.orderDetail = res["data"];
                // console.log(this.orderDetail);
            }
        });
    }
};
ViewOrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-order.component.scss */ "./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.scss")).default]
    })
], ViewOrderComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RestaurantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantRoutingModule", function() { return RestaurantRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "./src/app/cooldash/pages/restaurant/category/category.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.ts");
/* harmony import */ var _restaurant_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant/add-restaurant/add-restaurant.component */ "./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.ts");
/* harmony import */ var _restaurant_view_restaurant_view_restaurant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurant/view-restaurant/view-restaurant.component */ "./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/order.component */ "./src/app/cooldash/pages/restaurant/order/order.component.ts");
/* harmony import */ var _restaurant_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restaurant/outlet/outlet.component */ "./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.ts");
/* harmony import */ var _restaurant_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurant/food-type/food-type.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.ts");
/* harmony import */ var _restaurant_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant/food-item/food-item.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.ts");
/* harmony import */ var _restaurant_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restaurant/food-item/add-food-item/add-food-item.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.ts");
/* harmony import */ var _restaurant_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restaurant/settings/settings.component */ "./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.ts");
/* harmony import */ var _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order/view-order/view-order.component */ "./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.ts");














const routes = [
    {
        path: "",
        data: {
            title: "Category"
        },
        children: [
            {
                path: "category",
                component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "restaurant",
                component: _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_4__["RestaurantComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add",
                component: _restaurant_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["AddRestaurantComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view/:id",
                component: _restaurant_view_restaurant_view_restaurant_component__WEBPACK_IMPORTED_MODULE_6__["ViewRestaurantComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit/:id",
                component: _restaurant_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["AddRestaurantComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "order",
                component: _order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "outlet/:id",
                component: _restaurant_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_8__["OutletComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "food-type/:id",
                component: _restaurant_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_9__["FoodTypeComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "food-item",
                component: _restaurant_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_10__["FoodItemComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add-food-item/:id",
                component: _restaurant_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_11__["AddFoodItemComponent"],
                data: {
                    title: ""
                }
            }, {
                path: "add-food-item/:id/:itemId",
                component: _restaurant_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_11__["AddFoodItemComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "settings",
                component: _restaurant_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view-order/all/:id",
                component: _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_13__["ViewOrderComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view-order/pending/:id",
                component: _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_13__["ViewOrderComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let RestaurantRoutingModule = class RestaurantRoutingModule {
};
RestaurantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RestaurantRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant.module.ts ***!
  \****************************************************************/
/*! exports provided: RestaurantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantModule", function() { return RestaurantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant-routing.module */ "./src/app/cooldash/pages/restaurant/restaurant-routing.module.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/cooldash/pages/restaurant/category/category.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");
/* harmony import */ var _restaurant_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restaurant/add-restaurant/add-restaurant.component */ "./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.ts");
/* harmony import */ var _restaurant_view_restaurant_view_restaurant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurant/view-restaurant/view-restaurant.component */ "./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/order.component */ "./src/app/cooldash/pages/restaurant/order/order.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _restaurant_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./restaurant/outlet/outlet.component */ "./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.ts");
/* harmony import */ var _restaurant_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restaurant/food-type/food-type.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.ts");
/* harmony import */ var _restaurant_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./restaurant/food-item/food-item.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.ts");
/* harmony import */ var _restaurant_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restaurant/food-item/add-food-item/add-food-item.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.ts");
/* harmony import */ var _restaurant_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./restaurant/settings/settings.component */ "./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order/view-order/view-order.component */ "./src/app/cooldash/pages/restaurant/order/view-order/view-order.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../number-module/number-module.module */ "./src/app/number-module/number-module.module.ts");
/* harmony import */ var ngx_star_rating__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-star-rating */ "./node_modules/ngx-star-rating/fesm2015/ngx-star-rating.js");


















// import { RestaurantTypeModalComponent } from './restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component';
 // <-- import the module





let RestaurantModule = class RestaurantModule {
};
RestaurantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
            _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantComponent"],
            _restaurant_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_8__["AddRestaurantComponent"],
            _restaurant_view_restaurant_view_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["ViewRestaurantComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"],
            _restaurant_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_13__["OutletComponent"],
            _restaurant_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_14__["FoodTypeComponent"],
            _restaurant_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_15__["FoodItemComponent"],
            _restaurant_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_16__["AddFoodItemComponent"],
            _restaurant_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
            _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_20__["ViewOrderComponent"]
            // RestaurantTypeModalComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _restaurant_routing_module__WEBPACK_IMPORTED_MODULE_3__["RestaurantRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(),
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["PaginationModule"].forRoot(),
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlNativeDateTimeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
            _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_22__["NumberModuleModule"],
            ngx_star_rating__WEBPACK_IMPORTED_MODULE_23__["NgxStarRatingModule"]
        ],
        exports: [
            _restaurant_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_8__["AddRestaurantComponent"]
        ],
        entryComponents: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RestaurantModule);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvYWRkLXJlc3RhdXJhbnQvYWRkLXJlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC9hZGQtcmVzdGF1cmFudC9hZGQtcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvYWRkLXJlc3RhdXJhbnQvYWRkLXJlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDk1JTtcclxuICAgIGNvbG9yOiAjZjU1MzUzO1xyXG59IiwiLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMTRyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogOTUlO1xuICBjb2xvcjogI2Y1NTM1Mztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRestaurantComponent", function() { return AddRestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");








// import currencySymbol from 'currency-symbol';
// var cc = require('currency-codes');
let AddRestaurantComponent = class AddRestaurantComponent {
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
        this.selectedCat = [];
        this.categoryBody = { type: "", list: [] };
        this.foodType = [
            {
                name: "Vegetarian",
                value: 0,
            },
            {
                name: "Non-Vegetarian",
                value: 1,
            },
            {
                name: "Both",
                value: 2,
            },
        ];
        this.updateAddrssStatus = false;
        this.currencyOptions = [];
        this.setValues = (data) => {
            if (data) {
                this.restaurantForm.patchValue({
                    name: data.detail.name,
                    name_ar: data.detail.name_ar,
                    email: data.detail.email,
                    // description: data.detail.description,
                    foodType: data.detail.foodType,
                    discount: data.detail.discount,
                    // minOrderAmount: data.detail.minOrderAmount,
                    avgOrderPrice: data.detail.avgOrderPrice,
                    discountUpto: data.detail.discountUpto,
                    categories: data.detail.categories,
                    // currency: data.detail.currency ? data.detail.currency : "K",
                    payBill: data.detail.payBill ? data.detail.payBill : 0,
                    tillNumber: data.detail.tillNumber ? data.detail.tillNumber : 0,
                });
                // this.restaurantForm.controls['openTime'].setValue(new Date(data.detail.openTime
                // ));
                // this.restaurantForm.controls['closeTime'].setValue(new Date(data.detail.closeTime));
                if (data.detail.image) {
                    this.categoryImage = this.comm.imageUrl + data.detail.image;
                }
            }
        };
    }
    ngOnInit() {
        this.currencyOptions = this.comm.currencyOptions;
        this.route.params.subscribe((params) => {
            this.id = params["id"];
            if (this.id != undefined) {
                this.getRestaurantById(this.id);
            }
        });
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder();
        });
        this.restaurantForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)])),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("notUseable"),
            // description: new FormControl(
            //   "",
            //   Validators.compose([Validators.required, Validators.maxLength(250)])
            // ),
            foodType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
            ]),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            // minOrderAmount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
            avgOrderPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[.\d]+$/),
            ]),
            discountUpto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[.\d]+$/),
            ]),
            outlet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            // openTime: new FormControl("", Validators.compose([Validators.required])),
            // closeTime: new FormControl(
            //   "",
            //   Validators.compose([Validators.required])
            // ),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            // currency: new FormControl("", Validators.compose([Validators.required])),
            payBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("notUseAble", [
            // Validators.required,
            // Validators.pattern(/^[.\d]+$/),
            ]),
            tillNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("notUseAble", [
            // Validators.required,
            // Validators.pattern(/^[.\d]+$/),
            ]),
        });
        this.dropDownSetting = this.comm.dropSetting;
        this.singleDropDownSetting = this.comm.singleDropSetting;
        if (!this.id) {
            this.restaurantForm.get("outlet").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.restaurantForm.get("outlet").updateValueAndValidity();
            this.restaurantForm
                .get("email")
                .setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
            ]);
            this.restaurantForm.get("email").updateValueAndValidity();
            this.restaurantForm
                .get("password")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
            this.restaurantForm.get("password").updateValueAndValidity();
        }
        this.getCategories();
    }
    getRestaurantById(id) {
        this.api.getResturantById(id).subscribe((res) => {
            if (res["response"]["success"]) {
                this.restaurantDetail = res["data"];
                console.log(this.restaurantDetail);
                this.setValues(this.restaurantDetail);
            }
        });
    }
    getCategories() {
        const list = [];
        this.api.getAllRestaurantCategories().subscribe((response) => {
            if (response["response"]["success"]) {
                this.categoryList = response["response"]["message"];
            }
        });
    }
    profilePic(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.File = event.target.files[0];
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                    this.categoryImage = event.target.result;
                };
            }
        });
    }
    submit() {
        this.submitted = true;
        if (this.outlet && this.updateAddrssStatus) {
            if (this.submitted && this.restaurantForm.valid) {
                var categories = [];
                for (let data of this.restaurantForm.value.categories) {
                    console.log(data);
                    categories.push(data._id);
                }
                this.restaurantForm.value.categories = categories;
                var data = this.restaurantForm.value;
                data.foodType = Number(data.foodType);
                if (this.outlet) {
                    data.outlet = this.outlet;
                }
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("image", this.File);
                this.api.addFoodRestaurant(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        this.toastr.successToastr(res["response"]["message"]);
                        this.router.navigate(["/restaurant/restaurant"]);
                    }
                    else {
                        this.toastr.errorToastr(res["response"]["message"]);
                    }
                });
            }
        }
        else if (this.restaurantForm["controls"].outlet.value &&
            this.updateAddrssStatus == false) {
            this.toastr.errorToastr("Please select a valid address from suggestions.");
        }
    }
    getAddress(lat, long) {
        this.geoCoder.geocode({ location: { lat: lat, lng: long } }, (results, status) => {
            this.addressLocation = results[0].formatted_address;
            this.outlet = {
                address: this.addressLocation,
                latitude: lat,
                longitude: long,
            };
        });
    }
    handleAddress(address) {
        this.updateAddrssStatus = true;
        if (address.formatted_address) {
            // let country = address.address_components.find(v => v.types.indexOf("country") >= 0)
            // console.log(country, cc.country(country.long_name))
            // console.log(currencySymbol.symbol(country.long_name));
            // let options = cc.country(country.long_name)
            // if (!options.length) {
            //   this.currencyOptions = [{ code: "USD" }]
            // } else
            //   this.currencyOptions = options
            this.outlet = {
                address: address.formatted_address,
                latitude: address.geometry.location.lat(),
                longitude: address.geometry.location.lng(),
            };
            this.restaurantForm.controls["outlet"].setValue(address.formatted_address);
        }
    }
    update() {
        this.submitted = true;
        if (this.restaurantForm.valid) {
            var data = this.restaurantForm.value;
            delete data.password;
            // console.log(this.outlet, data);
            if (this.outlet) {
                data.outlet = this.outlet;
            }
            data.updateId = this.id;
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("image", this.File);
            this.api.editFoodRestaurant(formData).subscribe((res) => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/restaurant/restaurant"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
    afterPickerOpen() {
        document.getElementsByTagName("html")[0].style.top = "";
    }
};
AddRestaurantComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] }
];
AddRestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-restaurant",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-restaurant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-restaurant.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/add-restaurant/add-restaurant.component.scss")).default]
    })
], AddRestaurantComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvZm9vZC1pdGVtL2FkZC1mb29kLWl0ZW0vYWRkLWZvb2QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50L2Zvb2QtaXRlbS9hZGQtZm9vZC1pdGVtL2FkZC1mb29kLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50L2Zvb2QtaXRlbS9hZGQtZm9vZC1pdGVtL2FkZC1mb29kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDk1JTtcclxuICAgIGNvbG9yOiAjZjU1MzUzO1xyXG59IiwiLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMTRyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogOTUlO1xuICBjb2xvcjogI2Y1NTM1Mztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddFoodItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodItemComponent", function() { return AddFoodItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");








let AddFoodItemComponent = class AddFoodItemComponent {
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
        this.selectedCat = [];
        this.categoryBody = { type: "", list: [] };
        this.foodType = [];
        this.type = [
            {
                name: "Vegetarian",
                value: 0
            },
            {
                name: "Non-Vegetarian",
                value: 1
            },
            {
                name: "Both",
                value: 2
            }
        ];
        this.setValues = data => {
            if (data) {
                this.restaurantForm.patchValue({
                    name: data.name,
                    description: data.description,
                    foodTypeId: data.foodTypeId,
                    // discount: data.discount,
                    price: data.price,
                    preprationTime: data.preprationTime,
                    foodCategoryId: data.foodCategoryId,
                    restaurantId: data.restaurantId,
                    type: data.type
                });
                if (data.image) {
                    this.categoryImage = this.comm.imageUrl + data.image;
                }
            }
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.itemId = params["itemId"];
            this.getAllFoodType();
            if (this.itemId != undefined) {
                this.getFoodItemById(this.itemId);
            }
        });
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder();
        });
        this.restaurantForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            restaurantId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            foodTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            // discount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
            foodCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            preprationTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[.\d]+$/)]),
        });
        this.dropDownSetting = this.comm.dropSetting;
        this.singleDropDownSetting = this.comm.singleDropSetting;
        this.getCategories();
    }
    getAllFoodType() {
        const list = [];
        this.api.getRestaurantTypeById(this.id).subscribe(response => {
            if (response["response"]["success"]) {
                this.foodType = response["data"];
            }
        });
    }
    getFoodItemById(id) {
        this.api.getResturantFoodItemById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.restaurantDetail = res["data"];
                console.log(this.restaurantDetail);
                this.setValues(this.restaurantDetail);
            }
        });
    }
    getCategories() {
        const list = [];
        this.api.getAllRestaurantCategories().subscribe(response => {
            if (response["response"]["success"]) {
                this.categoryList = response["response"]["message"];
            }
        });
    }
    profilePic(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.File = event.target.files[0];
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                    this.categoryImage = event.target.result;
                };
            }
        });
    }
    submit() {
        this.submitted = true;
        this.restaurantForm.controls["restaurantId"].setValue(this.id);
        if (this.submitted && this.restaurantForm.valid) {
            var data = this.restaurantForm.value;
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("image", this.File);
            this.api.addRestaurantFoodItem(formData).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/restaurant/food-item", this.id]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
    update() {
        this.submitted = true;
        if (this.restaurantForm.valid) {
            var data = this.restaurantForm.value;
            data.updateId = this.itemId;
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("image", this.File);
            this.api.editRestaurantFoodItem(formData).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/restaurant/food-item", this.id]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
};
AddFoodItemComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] }
];
AddFoodItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-food-item",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-food-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-food-item.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/food-item/add-food-item/add-food-item.component.scss")).default]
    })
], AddFoodItemComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC9mb29kLWl0ZW0vZm9vZC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FoodItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemComponent", function() { return FoodItemComponent; });
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










let FoodItemComponent = class FoodItemComponent {
    constructor(formBuilder, comm, api, toastr, router, route, mapsAPILoader, dialogService) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.dialogService = dialogService;
        this.history = window.history;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.categoryList = [];
        this.showfood = false;
    }
    ngOnInit() {
        this.imageUrl = this.comm.imageUrl;
        this.route.queryParams.subscribe(params => {
            debugger;
            this.id = params["id"];
            if (this.id != 'fooditem') {
                this.showfood = true;
                this.getFoodItem(this.id);
            }
            ;
            if (this.id == 'fooditem') {
                this.showfood = false;
                this.updatedFood();
            }
        });
    }
    updatedFood() {
        this.api.getUpdatedItem().subscribe((res) => {
            if (res["response"]["success"]) {
                this.foodItem = res["data"];
                for (var data of this.foodItem) {
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
            }
        });
    }
    getFoodItem(id) {
        this.api.getRestaurantItemeById(id).subscribe(res => {
            console.log(res);
            if (res["response"]["success"]) {
                this.foodItem = res["data"];
                for (var data of this.foodItem) {
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
            }
        });
    }
    addCategory() {
        this.router.navigate(['restaurant/add-food-item', this.id]);
        // this.dialogService.addRestaurantItem().subscribe(res => {
        //   if (res == "yes") {
        //     this.getFoodItem(this.id);
        //   }
        // });
    }
    updateData(price, id, quantity) {
        const data = {
            "id": id,
            "quantity": quantity,
            "price": price
        };
        this.api.changePRice(data).subscribe((res) => {
            console.log(res);
        });
    }
    onEditSelect(item) {
        this.router.navigate(['restaurant/add-food-item', this.id, item._id]);
    }
    deleteCategory(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Food Item!",
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
                this.api.editRestaurantFoodItem(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getFoodItem(this.id);
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
        this.api.editRestaurantFoodItem(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getFoodItem(this.id);
            }
            if (!res["response"]["success"])
                return;
        });
    }
};
FoodItemComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_8__["PopupService"] }
];
FoodItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-item.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/food-item/food-item.component.scss")).default]
    })
], FoodItemComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC9mb29kLXR5cGUvZm9vZC10eXBlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FoodTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodTypeComponent", function() { return FoodTypeComponent; });
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










let FoodTypeComponent = class FoodTypeComponent {
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
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.getFoodType(this.id);
        });
    }
    getFoodType(id) {
        this.api.getRestaurantTypeById(id).subscribe(res => {
            console.log(res);
            if (res["response"]["success"]) {
                this.foodType = res["data"];
                for (var data of this.foodType) {
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
            }
        });
    }
    updateActiveStatus(item) {
        var data = {
            name: item.name,
            updateId: item._id,
            status: item.status ? 1 : 0,
            restaurantId: this.id
        };
        this.api.editRestaurantFoodType(data).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getFoodType(this.id);
            }
            if (!res["response"]["success"])
                return;
        });
    }
    deleteCategory(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Food Type!",
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
                    restaurantId: this.id,
                    status: 2
                };
                this.api.editRestaurantFoodType(data).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getFoodType(this.id);
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    addFoodType() {
        this.dialogService.addType(this.id).subscribe(res => {
            if (res == "yes") {
                this.getFoodType(this.id);
            }
        });
    }
    onEditSelect(item) {
        this.dialogService.editType(item).subscribe(res => {
            if (res == "yes") {
                this.getFoodType(this.id);
            }
        });
    }
};
FoodTypeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_8__["PopupService"] }
];
FoodTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-type.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/food-type/food-type.component.scss")).default]
    })
], FoodTypeComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC9vdXRsZXQvb3V0bGV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletComponent", function() { return OutletComponent; });
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










let OutletComponent = class OutletComponent {
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
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.getOutlettById(this.id);
        });
    }
    getOutlettById(id) {
        this.api.getOutletById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.outlet = res["data"];
                console.log(this.outlet);
                this.loader = false;
            }
        });
    }
    addOutlet() {
        this.dialogService.addOutlet(this.id).subscribe(res => {
            if (res == "yes") {
                this.getOutlettById(this.id);
            }
        });
    }
    onEditSelect(item) {
        this.dialogService.editOutlet(item).subscribe(res => {
            if (res == "yes") {
                this.getOutlettById(this.id);
            }
        });
    }
    deleteOutlet(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Outlet!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    address: item.address,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    updateId: item._id,
                    restaurantId: item.restaurantId,
                    status: 2
                };
                this.api.editRestaurantOutlet(data).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getOutlettById(this.id);
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
};
OutletComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_8__["PopupService"] }
];
OutletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-outlet",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./outlet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./outlet.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/outlet/outlet.component.scss")).default]
    })
], OutletComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 967px) {\n  .user_filter,\n.user_serch_btn {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50L3Jlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7SUFFSSxtQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xyXG4gICAgLnVzZXJfZmlsdGVyLFxyXG4gICAgLnVzZXJfc2VyY2hfYnRuIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XG4gIC51c2VyX2ZpbHRlcixcbi51c2VyX3NlcmNoX2J0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.ts ***!
  \******************************************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let RestaurantComponent = class RestaurantComponent {
    constructor(api, comm, dialogService, router) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.router = router;
        this.serialNumber = 0;
        this.loader = true;
        this.restaurantList = [];
        this.type = 2;
        this.limit = 25;
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25
        };
        this.foodType = [
            {
                name: "Vegetarian",
                value: 0
            },
            {
                name: "Non-Vegetarian",
                value: 1
            },
            {
                name: "Both",
                value: 2
            }
        ];
        this.searchText = '';
    }
    ngOnInit() {
        this.currentPage = 1;
        this.imageUrl = this.comm.imageUrl;
        this.getRestaurant();
    }
    getRestaurant() {
        var page = this.currentPage;
        console.log(page);
        this.api.getAllRestaurant(this.searchText, this.type, page).subscribe(response => {
            console.log(response["response"]);
            if (response["response"]["success"]) {
                this.restaurantList = response["data"]["list"];
                for (var data of this.restaurantList) {
                    data.isRecommended = data["isRecommended"] == 1 ? true : false;
                    // data.isFavourite = data["isFavourite"] == 1 ? true : false;
                    data.status = data["status"] == 1 ? true : false;
                }
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
    onChange(event) {
        this.currentPage = 1;
        this.type = event.target.value;
        this.getRestaurant();
    }
    downloadCsv() {
        debugger;
        let body = {
            modelName: 'restaurant'
        };
        this.api.downloadCsv(body).subscribe(res => {
            console.log(res);
            if (res.sucess) {
                //  this.downloadLink = res.url
                let newWin = window.open(res.url);
                newWin.document.body.innerHTML = " <iframe id='inlineFrameExample' title='Inline Frame Example' width='300' height='200' src=downloadLink>< /iframe>";
            }
        });
    }
    updateFavRes(item) {
        console.log(item);
        var data = {
            name: item.name,
            updateId: item._id,
            isFavourite: item.isFavourite ? 1 : 0
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.editFoodRestaurant(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getRestaurant();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    updateRecoRes(item) {
        console.log(item);
        var data = {
            name: item.name,
            updateId: item._id,
            isRecommended: item.isRecommended ? 1 : 0
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.editFoodRestaurant(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getRestaurant();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    addRestaurant() {
        this.router.navigate(["/restaurant/add"]);
    }
    onViewItem(item) {
        this.router.navigate(["/restaurant/view", item._id]);
    }
    onEditSelect(item) {
        this.router.navigate(["/restaurant/edit", item._id]);
    }
    deleteRestaurant(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Restaurant!",
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
                this.api.editFoodRestaurant(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getRestaurant();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    getOutlet(item) {
        this.router.navigate(["/restaurant/outlet", item._id]);
    }
    getFoodType(item) {
        this.router.navigate(["/restaurant/food-type", item._id]);
    }
    getFoodItem(item) {
        this.router.navigate(["/restaurant/food-item"], { queryParams: { 'id': item._id } });
    }
    searchRestaurant() {
        this.currentPage = 1;
        this.getRestaurant();
    }
    reset() {
        this.currentPage = 1;
        this.searchText = '';
        this.getRestaurant();
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
                this.getRestaurant();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getRestaurant();
    }
};
RestaurantComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-restaurant",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restaurant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restaurant.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/restaurant.component.scss")).default]
    })
], RestaurantComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDk1JTtcclxuICAgIGNvbG9yOiAjZjU1MzUzO1xyXG4gIH1cclxuICAiLCIuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4xNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgZm9udC1zaXplOiA5NSU7XG4gIGNvbG9yOiAjZjU1MzUzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let SettingsComponent = class SettingsComponent {
    constructor(formBuilder, comm, api, toastr, router) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.history = window.history;
        this.submitted = false;
        this.setValues = data => {
            if (data) {
                this.restaurantForm.patchValue({
                    deliveryFee: data.deliveryFee,
                    tax: data.tax,
                    serviceFee: data.serviceFee
                });
            }
        };
    }
    ngOnInit() {
        this.restaurantForm = this.formBuilder.group({
            deliveryFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            tax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            serviceFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.getSettings();
    }
    update() {
        this.submitted = true;
        if (this.submitted && this.restaurantForm.valid) {
            var data = this.restaurantForm.value;
            data.updateId = this.settings._id;
            this.api.editRestaurantSettings(data).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/restaurant/restaurant"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
    submit() {
        this.submitted = true;
        if (this.submitted && this.restaurantForm.valid) {
            var data = this.restaurantForm.value;
            this.api.addRestaurantSettings(data).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/restaurant/restaurant"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
    getSettings() {
        this.api.getRestaurantSettings().subscribe(res => {
            if (res["response"]["success"]) {
                this.settings = res["data"];
                this.setValues(this.settings);
            }
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-body {\n  padding: 0.875rem 0.875rem;\n}\n\n@media (max-width: 1280px) {\n  .card-body {\n    padding: 0.575rem;\n  }\n}\n\n@media (max-width: 997px) {\n  .grid_name {\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  .comman_name_grid {\n    width: 48%;\n    margin: 0 0 15px 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .card-body {\n    padding: 0.475rem;\n  }\n\n  .comman_name_grid .text-xs {\n    font-size: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvdmlldy1yZXN0YXVyYW50L3ZpZXctcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50L3ZpZXctcmVzdGF1cmFudC92aWV3LXJlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxpQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLGVBQUE7SUFDQSw4QkFBQTtFQ0FOOztFREVFO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksaUJBQUE7RUNBTjs7RURFRTtJQUNJLGlCQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC92aWV3LXJlc3RhdXJhbnQvdmlldy1yZXN0YXVyYW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAwLjg3NXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMC41NzVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTdweCkge1xyXG4gICAgLmdyaWRfbmFtZSB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5jb21tYW5fbmFtZV9ncmlkIHtcclxuICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAwLjQ3NXJlbTtcclxuICAgIH1cclxuICAgIC5jb21tYW5fbmFtZV9ncmlkIC50ZXh0LXhzIHtcclxuICAgICAgICBmb250LXNpemU6IC41cmVtO1xyXG4gICAgfVxyXG59IiwiLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDAuODc1cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDAuNTc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTk3cHgpIHtcbiAgLmdyaWRfbmFtZSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5jb21tYW5fbmFtZV9ncmlkIHtcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDAuNDc1cmVtO1xuICB9XG5cbiAgLmNvbW1hbl9uYW1lX2dyaWQgLnRleHQteHMge1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ViewRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRestaurantComponent", function() { return ViewRestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewRestaurantComponent = class ViewRestaurantComponent {
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
            this.getRestaurantById(this.id);
        });
    }
    getRestaurantById(id) {
        this.api.getResturantById(id).subscribe(res => {
            if (res["response"]["success"]) {
                console.log(res);
                this.restaurantDetail = res["data"];
                // this.restaurantDetail.detail.openTime = new Date(this.restaurantDetail.detail.openTime).toLocaleTimeString('en-US');
                // this.restaurantDetail.detail.closeTime = new Date(this.restaurantDetail.detail.closeTime).toLocaleTimeString('en-US');
            }
        });
    }
};
ViewRestaurantComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewRestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-restaurant",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-restaurant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-restaurant.component.scss */ "./src/app/cooldash/pages/restaurant/restaurant/view-restaurant/view-restaurant.component.scss")).default]
    })
], ViewRestaurantComponent);



/***/ })

}]);
//# sourceMappingURL=pages-restaurant-restaurant-module-es2015.js.map