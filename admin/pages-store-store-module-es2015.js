(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-store-store-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/category/category.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/category/category.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n       <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\"> <h6 class=\"m-0 text-black\">Category</h6></div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"addCategory()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Category\r\n                      </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"filters_outer\">\r\n                <div class=\"user_filter\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"Search Category\">\r\n                </div>\r\n                <div class=\"user_serch_btn\">\r\n                    <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" (click)=\"searchRestaurant()\">Search</button>\r\n                    <button type=\"reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">Reset</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body table-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Image</th>\r\n                            <th>Name</th>\r\n                            <th>Created Date</th>\r\n                            <th>Status</th>\r\n                            <th>\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of categoryList; let i = index\">\r\n                            <td>{{ i + serialNumber + 1 }}</td>\r\n                            <td>\r\n                                <img src=\"{{ imageUrl }}{{ item.image }}\" width=\"70px\" height=\"70px\" />\r\n                            </td>\r\n                            <td>{{ item.name }}</td>\r\n                            <td>\r\n                                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n                            </td>\r\n                            <td>\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\" [(ngModel)]=\"item.status\" (ngModelChange)=\"updateActiveStatus(item)\" labelOff=\"OFF\"></ui-switch>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"deleteCategory(item)\">\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"categoryList.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <!-- <pagination\r\n        *ngIf=\"categoryList.length != 0 && !loader\"\r\n        [totalItems]=\"totalItems\"\r\n        [boundaryLinks]=\"true\"\r\n        [maxSize]=\"5\"\r\n        [(ngModel)]=\"currentPage\"\r\n        (pageChanged)=\"pageChange($event)\"\r\n      ></pagination> -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/items-modal/items-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/items-modal/items-modal.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"items && items.length > 0\">\r\n  <h2 mat-dialog-title>Order Items</h2>\r\n  <mat-dialog-content>\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Name</th>\r\n              <th>Qunatity</th>\r\n              <th>Amount</th>\r\n              <th>Total Amount</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of items; let i = index\">\r\n              <td>{{ i + serialNumber + 1 }}</td>\r\n              <td>\r\n                {{ item._id }}\r\n              </td>\r\n              <td>{{ item.quantity }}</td>\r\n              <td>\r\n                {{ item.amount }}\r\n              </td>\r\n              <td>{{ item.totalAmount }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <h4 *ngIf=\"items.length == 0\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/order.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/order.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\"> <h6 class=\"m-0 text-black\">Order</h6></div>\r\n                   <button i18n=\"@@add_restaurant\" class=\"btn btn-primary ml-3\" (click)=\"getresturantOrder()\">\r\n                    <span class=\"fas fa-download\"></span> Download CSV\r\n                  </button>\r\n                   <div class=\"user_add_button\"> \r\n                    <!-- <button class=\"btn btn-primary mr-1\" (click)=\"allOrder()\" [ngClass]=\"{'btn-highlight': status == 'all'}\">\r\n                        All Orders\r\n                      </button> -->\r\n                     <!-- <button class=\"btn btn-primary  btn-primary_border\" (click)=\"pendingOrder()\" [ngClass]=\"{'btn-highlight': status == 'pending'}\">\r\n                        Pending Orders\r\n                      </button> -->\r\n                      <select [(ngModel)]=\"totalmatch\" class=\"form-control\" (change)=\"changeMatchWebsite($event)\">\r\n                        <option value=\"undefined\">All</option>\r\n                        <option value=\"0\">Pending</option>\r\n                        <option value=\"1\">Current/Ongoing</option>\r\n                        <option value=\"11\">undelivered/returned</option>\r\n                        <option value=\"4\">Delivered/Skip</option>\r\n                        <option value=\"7\">Payment received</option>\r\n                    </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-body table-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th style=\"min-width: 6rem;\">Order No.</th>\r\n                            <th style=\"min-width: 10rem;\">Address</th>\r\n                            <th style=\"min-width: 6rem;\">Total Amount</th>\r\n                            <th style=\"min-width: 6rem;\">Notes</th>\r\n                            <th style=\"min-width: 6rem;\">Driver Name</th>\r\n                            <th  *ngIf=\"show\" style=\"min-width: 6rem;\" >AssignDriver</th>\r\n                            <th style=\"min-width: 7rem;\">User Name</th>\r\n                            <th style=\"min-width: 7rem;\">Store Name</th>\r\n                            <th style=\"min-width: 7rem\">Delivery Instruction</th>\r\n                            <th >Items</th>\r\n                            <th>Manual</th>\r\n                            <th style=\"min-width: 7rem;\">Status</th>\r\n                            <th style=\"min-width: 7rem;\">Order Type</th>\r\n                            <th style=\"min-width: 10rem;\">Delivery Date</th>\r\n                            <th style=\"min-width: 10rem;\">Order Date</th>\r\n                            <th>\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <!-- <ng-container > -->\r\n                        <tr [ngClass]=\"{'error1': (item.mins >= 0 && item.status == 1)}\" *ngFor=\"let item of orderList| paginate: config  ; let i = index\">\r\n                            <td>{{ (currentPage - 1) * 25 + i +1 }}</td>\r\n                            <td>\r\n                                {{ item.orderNumber }}\r\n                            </td>\r\n                            <td>\r\n                                <ng-container *ngIf=\"item.address\">\r\n                                    {{ item.address.address.length\r\n                                    < 20 ? item.address.address : item.address.address.slice(0, 16) + \"....\" }}</ng-container>\r\n                            </td>\r\n                            <td>\r\n                                {{ item.totalAmount | number : '1.2-2'}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.note || '-'}}\r\n                            </td>\r\n                            <td>\r\n                                <ng-container *ngIf=\"item.driver && item.driver.length>0; else noDriver\">\r\n                                    {{ item.driver[0].firstName }} {{ item.driver[0].lastName }}\r\n                                </ng-container>\r\n                                <ng-template #noDriver>\r\n                                    N/A\r\n                                </ng-template>\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 0 && show\">\r\n                                <div >\r\n                               <button *ngIf=\"item._id != assignId &&  item.isManual\" (click)=\"findDriver(item.address.latitude,item.address.longitude,item._id)\">Assign Driver</button>\r\n                               <div *ngIf=\"item._id == assignId \">\r\n                                <select (change)=\"DriverAssign($event,item._id)\">\r\n                                    <option disabled>Assign Driver</option>\r\n                                    <option *ngFor=\"let item of driver\" [value]=\"item._id\">{{item.firstName}}</option>\r\n                                   </select>\r\n                                </div>\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                <ng-container *ngIf=\"item.user\">\r\n                                    {{ item.user.firstName }} {{ item.user.lastName }}\r\n                                </ng-container>\r\n                            </td>\r\n                            <td>\r\n                                <ng-container *ngIf=\"item.storeId\">\r\n                                    {{ item.storeId.name }}\r\n                                </ng-container>\r\n                            </td>\r\n                            <td>{{item.deliveryInstructions}}</td>\r\n                            <td>\r\n                                <ng-container *ngIf=\"item.items && item.items.length > 0\">{{ item.items.length }}\r\n                                </ng-container>\r\n                                <!-- <button class=\"btn btn-primary\" (click)=\"itemsList(item.items)\">\r\n                  Items\r\n                </button> -->\r\n                            </td>\r\n                            <td>\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\"\r\n                                [(ngModel)]=\"item.isManual\" (change)=\"updateActiveStatus(item._id , $event)\" labelOff=\"OFF\">\r\n                            </ui-switch>\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 0\">\r\n                                Pending\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 1\">\r\n                                Accepted\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 2\">\r\n                                {{item.orderType?'Prepared':'Reached'}}\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 3\">\r\n                                Pick Up\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 4\">\r\n                                Delivered\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 5\">\r\n                                Rate\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 6\">\r\n                                Skip\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 11\">\r\n                                Cancel By User\r\n                            </td>\r\n                            <td *ngIf=\"item.status == 12\">\r\n                                Cancel By Store\r\n                            </td>\r\n                            <td>\r\n                                {{item.orderType ? 'Take away' : 'Delivery'}}\r\n                            </td>\r\n                            <td>\r\n                                <ng-container *ngIf=\"item.deliveryDate!=0; else noDeliveryDate\">\r\n                                    {{ item.deliveryDate | date: \"yyyy-MM-dd hh:mm a\" }}\r\n                                </ng-container>\r\n                                <ng-template #noDeliveryDate>\r\n                                    -\r\n                                </ng-template>\r\n                            </td>\r\n                            <td>\r\n                                {{ item.date | date: \"yyyy-MM-dd hh:mm a\" }}\r\n                            </td>\r\n\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-primary mr-1\" (click)=\"viewOrder(item)\">\r\n                      <span class=\"fas fa-eye\"></span>\r\n                    </button>\r\n                                    <button *ngIf=\"item.status == 0 \" class=\"btn btn-primary mr-1\" (click)=\"orderAccept(item)\">\r\n                      <span class=\"fas fa-user-check\"></span>\r\n                    </button>\r\n                                    <button class=\"btn btn-primary mr-1\" *ngIf=\"(item.status != 0 && item.status < 4 && item.orderType ) || (item.status < 4 && item.driver && item.driver.length)\" (click)=\"changeStatus(item)\">\r\n                    {{checkStatus(item.status,item.orderType)}}\r\n                  </button>\r\n                                    <button class=\"btn btn-danger mr-1\" *ngIf=\"item.status > 0 && item.status < 3\" (click)=\"orderCancel(item)\">\r\n                                        <i class=\"fa fa-remove\"></i>\r\n                  </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <!-- </ng-container> -->\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"orderList.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <div *ngIf=\"orderList && orderList.length !=0 && !loader\" class=\"pagination_ui\">\r\n                <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n                </pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/view-order/view-order.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/view-order/view-order.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"orderDetail\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">View Order</h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div *ngIf=\"orderDetail\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Order Number</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{orderDetail.orderNumber}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>User Name</label>\r\n                            <input *ngIf=\"orderDetail.userId\" type=\"text\" name=\"Name\"\r\n                                [value]=\"orderDetail.userId.firstName +' '+ orderDetail.userId.lastName\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Store Address</label>\r\n                            <textarea *ngIf=\"orderDetail.outletId\" type=\"text\" name=\"Name\" class=\"form-control\"\r\n                                disabled>{{ orderDetail.outletId.address}}\r\n                                </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label *ngIf=\"orderDetail.address\">User Address</label>\r\n                            <textarea *ngIf=\"orderDetail.address\" type=\"text\" name=\"Name\" class=\"form-control\" disabled>{{ orderDetail.address.address}}\r\n                                </textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Store Name</label>\r\n                            <input type=\"text\" name=\"name\" [value]=\"orderDetail.storeId.name\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Prepration Time</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.preprationTime\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Delivery Charges</label>\r\n                            <input type=\"text\" name=\"charges\" [value]=\"orderDetail.deliveryFee\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Discount</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.totalDiscount\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"orderDetail.couponCode && orderDetail.couponDiscount \">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Coupon Code</label>\r\n                            <input type=\"text\" name=\"charge\" [value]=\"orderDetail.startTime\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Coupon Discount</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"orderDetail.endTime\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Sub Total Amount</label>\r\n                            <input type=\"text\" name=\"subtotal\" [value]=\"orderDetail.subTotalAmount\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Total Amount</label>\r\n                            <input type=\"text\" name=\"totalamount\" [value]=\"orderDetail.totalAmount\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Payment Mode</label>\r\n                            <input type=\"text\" name=\"mode\" [value]=\"orderDetail.paymentMode\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Service fee</label>\r\n                            <input type=\"text\" name=\"open-time\" [value]=\"orderDetail.serviceFee\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Order Date</label>\r\n                            <input type=\"text\" name=\"orderdate\"\r\n                                [value]=\"orderDetail.date | date: 'yyyy-MM-dd hh:mm:ss a'\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\"  *ngIf=\"orderDetail.deliveryDate\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Delivery Date</label>\r\n                            <input type=\"text\" name=\"deliverydate\"\r\n                                [value]=\"orderDetail.deliveryDate | date: 'yyyy-MM-dd hh:mm:ss a'\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"cont1\">\r\n                                <label>Store Review</label>\r\n                                <div class=\"stars\">\r\n                                    <ngx-star-rating [rating]=\"orderDetail?.storeRating\" [id]=\"'rating'\" [disabled]=\"true\"></ngx-star-rating>\r\n                                </div>\r\n                            </div>\r\n                            <textarea type=\"text\" name=\"subtotal\" [value]=\"(orderDetail?.storeReview)?orderDetail?.storeReview:''\" class=\"form-control\" disabled></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\" *ngIf=\"orderDetail?.deliveryDate\">\r\n                        <div class=\"startflex\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"cont1\">\r\n                                    <label>Driver Rating</label>\r\n                                    <div class=\"stars\">\r\n                                        <ngx-star-rating [rating]=\"orderDetail?.driverRating\" [id]=\"'rating'\" [disabled]=\"true\"></ngx-star-rating>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Items</label>\r\n                            <ul>\r\n                                <li *ngFor=\"let category of orderDetail.items\">\r\n                                    {{ category.itemId.name }}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/add-store/add-store.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/add-store/add-store.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 class=\"m-0 text-black\" *ngIf=\"!id\">Add Store</h6>\r\n            <h6 class=\"m-0 text-black\" *ngIf=\"id\">Edit Store</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n              <span class=\"fas fa-arrow-left\"></span> Back\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"restaurantForm\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Name</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.name.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.required\">\r\n                Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">اسم</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name_ar\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.name.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.required\">\r\n                Name is required\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n            <label for=\"category\">Address</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"outlet\"\r\n                ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddress($event)\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.outlet.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.outlet.errors.required\">\r\n                  Address is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n            <label for=\"title\">Email</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.email.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.email.errors.required\">\r\n                Email is required\r\n              </div>\r\n              <div *ngIf=\"restaurantForm.controls.email.errors.pattern\">\r\n                Email is not valid\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n            <label for=\"category\">Password</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" id=\"name\" class=\"form-control\" formControlName=\"password\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.password.errors.required\">\r\n                Password is required\r\n              </div>\r\n              <div *ngIf=\"restaurantForm.controls.password.errors.minlength\">\r\n                Password must be atleast 8 characters\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Open Time</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" formControlName=\"openTime\" [owlDateTime]=\"dt1\" placeholder=\"Time\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt1\"><i\r\n                    class=\"fa fa-calendar\"></i></span>\r\n              </div>\r\n              <owl-date-time #dt1 [pickerType]=\"'timer'\"></owl-date-time>\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.openTime.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.openTime.errors.required\">\r\n                Open Time is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Close Time</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" formControlName=\"closeTime\" [owlDateTime]=\"dt2\" placeholder=\"Time\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text trigger\" pickerType=\"timer\" [owlDateTimeTrigger]=\"dt2\"><i\r\n                    class=\"fa fa-calendar\"></i></span>\r\n              </div>\r\n              <owl-date-time #dt2 [pickerType]=\"'timer'\"></owl-date-time>\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.closeTime.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.closeTime.errors.required\">\r\n                Close Time is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n          <!-- <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"body\">Description</label>\r\n            <div class=\"input-group\">\r\n              <textarea type=\"text\" row=\"3\" id=\"body\" class=\"form-control\" formControlName=\"description\"\r\n                placeholder=\"\"></textarea>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.description.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.description.errors.required\">\r\n                  Description is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.description.errors.maxlength\">\r\n                  Description can be max 250 characters long.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Discount</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" id=\"discount\" appNumberOnly class=\"form-control\" formControlName=\"discount\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.discount.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.required\">\r\n                  Discount is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.pattern\">\r\n                  Discount is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Discount Upto</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" id=\"discountUpto\" min=\"0\" appNumberOnly class=\"form-control\"\r\n                formControlName=\"discountUpto\" placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.discountUpto.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.discountUpto.errors.required\">\r\n                  Discount Upto is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.discountUpto.errors.pattern\">\r\n                  Discount Upto is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Minimum Order Amount</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" id=\"minOrderAmount\" class=\"form-control\" formControlName=\"minOrderAmount\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"\r\n                  submitted && restaurantForm.controls.minOrderAmount.errors\r\n                \" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.minOrderAmount.errors.required\">\r\n                  Minimum Order Amount is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.minOrderAmount.errors.pattern\">\r\n                  Minimum Order Amount is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Average Order Price</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" id=\"avgOrderPrice\" min=\"0\" appNumberOnly class=\"form-control\"\r\n                formControlName=\"avgOrderPrice\" placeholder=\"\" />\r\n              <div *ngIf=\"\r\n                  submitted && restaurantForm.controls.avgOrderPrice.errors\r\n                \" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.avgOrderPrice.errors.required\">\r\n                  Average Order Price is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.avgOrderPrice.errors.pattern\">\r\n                  Average Order Price is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 add_resurant\">\r\n            <label for=\"category\">Store Category</label>\r\n            <div class=\"input-group\" *ngIf=\"categoryList && categoryList.length > 0\">\r\n              <ng-multiselect-dropdown [placeholder]=\"'Select Category'\" [data]=\"categoryList\"\r\n                formControlName=\"categories\" [settings]=\"dropDownSetting\">\r\n              </ng-multiselect-dropdown>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.categories.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.categories.errors.required\">\r\n                  Store Category is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--\r\n          <div class=\"form-group col-md-6 add_resurant\">\r\n            <label for=\"category\">Store Currency</label>\r\n            <div class=\"input-group\">\r\n              <select class=\"form-control\" formControlName=\"currency\">\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option\r\n                  *ngFor=\"let currency of currencyOptions\"\r\n                  [value]=\"currency.symbol\"\r\n                >\r\n                  {{ currency.code }}\r\n                </option>\r\n              </select>\r\n              <div\r\n                *ngIf=\"submitted && restaurantForm.controls.currency.errors\"\r\n                class=\"invalid-feedback\"\r\n              >\r\n                <div *ngIf=\"restaurantForm.controls.currency.errors.required\">\r\n                  Currency is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Pay Bill</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" appNumberOnly id=\"payBill\" class=\"form-control\" formControlName=\"payBill\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.payBill.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.payBill.errors.required\">\r\n                  Pay Bill is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.payBill.errors.pattern\">\r\n                  Pay Bill is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Till Number</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" min=\"0\" appNumberOnly id=\"tillNumber\" class=\"form-control\"\r\n                formControlName=\"tillNumber\" placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.tillNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.tillNumber.errors.required\">\r\n                  Till Number is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.tillNumber.errors.pattern\">\r\n                  Till Number Upto is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Instagram </label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"instagram\" maxlength=\"50\" class=\"form-control\" formControlName=\"instagram\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.instagram.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.instagram.errors.required\">\r\n                  Instagram ID is required\r\n                </div>\r\n                <!-- <div *ngIf=\"restaurantForm.controls.instagram.errors.pattern\">\r\n                  Instagram ID is not valid\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <div class=\"usr_profile_img\">\r\n              <div class=\"usr_profile_imgbx\">\r\n                <label>Image </label>\r\n                <div class=\"user_img\">\r\n                  <figure *ngIf=\"categoryImage\">\r\n                    <img style=\"height: 150px; width: 150px\" [src]=\"categoryImage\" />\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n              <div class=\"user_profile_edit\">\r\n                <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event)\" />\r\n              </div>\r\n              <div *ngIf=\"submitted && !categoryImage\" class=\"invalid-feedback\">\r\n                Image is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group form-actions add_edit\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n            Add\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n            Update\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n          <div class=\" user_title\">\r\n             <div class=\"user_title_inner\">\r\n              <h6 class=\"m-0 text-black\" *ngIf=\"!itemId\">\r\n                Add Store Item\r\n              </h6>\r\n              <h6 class=\"m-0 text-black\" *ngIf=\"itemId\">\r\n                Edit Store Item\r\n              </h6>\r\n          </div>\r\n             <div class=\"user_add_button\"> \r\n              <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                <span class=\"fas fa-arrow-left\"></span> Back\r\n              </button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"restaurantForm\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\"><strong>Name: </strong></label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && restaurantForm.controls.name.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"restaurantForm.controls.name.errors.required\">\r\n                Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"body\">Description</label>\r\n            <div class=\"input-group\">\r\n              <textarea type=\"text\" row=\"3\" id=\"body\" class=\"form-control\" formControlName=\"description\"\r\n                placeholder=\"\"></textarea>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.description.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.description.errors.required\">\r\n                  Description is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.description.errors.maxlength\">\r\n                  Description can be max 250 characters long.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Price</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" id=\"discount\" min=\"0\" appNumberOnly class=\"form-control\" formControlName=\"price\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.price.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.price.errors.required\">\r\n                  Price is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.price.errors.pattern\">\r\n                  Price is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Packing Time</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"packingTime\" min=\"0\" appNumberOnly class=\"form-control\"\r\n                formControlName=\"packingTime\" placeholder=\"\" />\r\n              <div *ngIf=\"\r\n                  submitted && restaurantForm.controls.packingTime.errors\r\n                \" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.packingTime.errors.required\">\r\n                  Packing Time is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"price\">Discount</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" id=\"discount\" class=\"form-control\" formControlName=\"discount\" placeholder=\"\" />\r\n              <div *ngIf=\"submitted && restaurantForm.controls.discount.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.required\">\r\n                  Discount is required\r\n                </div>\r\n                <div *ngIf=\"restaurantForm.controls.discount.errors.pattern\">\r\n                  Discount is not valid\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"types\">Store Type</label>\r\n            <div class=\"input-group\">\r\n              <select class=\"form-control\" formControlName=\"storeItemTypeId\" *ngIf=\"foodType\">\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option *ngFor=\"let type of foodType\" [value]=\"type._id\">\r\n                  {{ type.name }}\r\n                </option>\r\n              </select>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.storeItemTypeId.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.storeItemTypeId.errors.required\">\r\n                  Store Type is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"category\">Store Category</label>\r\n            <div class=\"input-group\" *ngIf=\"categoryList && categoryList.length > 0\">\r\n              <select class=\"form-control\" formControlName=\"storeCategoryId\" *ngIf=\"foodType\">\r\n                <option value=\"\" selected disabled hidden>Choose here</option>\r\n                <option *ngFor=\"let type of categoryList\" [value]=\"type._id\">\r\n                  {{ type.name }}\r\n                </option>\r\n              </select>\r\n              <div *ngIf=\"submitted && restaurantForm.controls.storeCategoryId.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"restaurantForm.controls.storeCategoryId.errors.required\">\r\n                  Store Category is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <div class=\"usr_profile_img\">\r\n              <div class=\"usr_profile_imgbx\">\r\n                <label>Image</label>\r\n                <div class=\"user_img\">\r\n                  <figure *ngIf=\"categoryImage\">\r\n                    <img style=\"height: 150px;width: 150px\" [src]=\"categoryImage\" />\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"user_profile_edit\">\r\n                <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event)\" />\r\n              </div>\r\n              <div *ngIf=\"submitted && !categoryImage\" class=\"invalid-feedback\">\r\n                Image is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group form-actions add_edit\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!itemId\" (click)=\"submit()\">\r\n            Add\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"itemId\" (click)=\"update()\">\r\n            Update\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-item/food-item.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-item/food-item.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <!-- DataTales Example -->\r\n    <div class=\"card shadow mb-4\">\r\n\r\n\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\">\r\n                    <h6 class=\"m-0 text-black\">\r\n                        Store Item\r\n                    </h6>\r\n                </div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button *ngIf=\"showorder\" class=\"btn btn-primary mr-4\" (click)=\"addCategory()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Item\r\n                    </button>\r\n                    <button class=\"btn btn-primary btn-primary_border\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Image</th>\r\n                            <th>Name</th>\r\n                            <th *ngIf=\"showorder\">Description</th>\r\n                            <th>Price</th>\r\n                            <th>Store Name</th>\r\n                            <th>Packing Time</th>\r\n                            <th>Created Date</th>\r\n                            <th *ngIf=\"showorder\">Status</th>\r\n                            <th *ngIf=\"showorder\">\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of foodItem; let i = index\">\r\n                            <td>{{ i + serialNumber + 1 }}</td>\r\n                            <td>\r\n                                <img src=\"{{ imageUrl }}{{ item.image }}\" width=\"70px\" height=\"70px\" />\r\n                            </td>\r\n                            <td>{{ item.name }}</td>\r\n                            <td *ngIf=\"showorder\">\r\n                                {{\r\n                                  item.description == null\r\n                                    ? \"\"\r\n                                    : item.description.length < 18\r\n                                    ? item.description\r\n                                    : item.description.slice(0, 16) + \"....\"\r\n                                }}\r\n                            </td>\r\n                            <td>{{item.price || item.totalAmount}}</td>\r\n                            <td>{{item.storeName}}</td>\r\n                            <td>{{item.packingTime}}</td>\r\n                            <td>\r\n                                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n                            </td>\r\n                            <td *ngIf=\"showorder\">\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\"\r\n                                    [(ngModel)]=\"item.status\" (ngModelChange)=\"updateActiveStatus(item)\" labelOff=\"OFF\">\r\n                                </ui-switch>\r\n                            </td>\r\n                            <td *ngIf=\"showorder\">\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"deleteCategory(item)\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"foodItem && foodItem.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <!-- <pagination\r\n          *ngIf=\"categoryList.length != 0 && !loader\"\r\n          [totalItems]=\"totalItems\"\r\n          [boundaryLinks]=\"true\"\r\n          [maxSize]=\"5\"\r\n          [(ngModel)]=\"currentPage\"\r\n          (pageChanged)=\"pageChange($event)\"\r\n        ></pagination> -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-type/food-type.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-type/food-type.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <!-- DataTales Example -->\r\n    <div class=\"card shadow mb-4\">\r\n\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\">\r\n                    <h6 class=\"m-0 text-black\">\r\n                      Store Type\r\n                    </h6>\r\n                </div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary mr-4\" (click)=\"addFoodType()\">\r\n                        <span class=\"fas fa-plus\"></span> Add Type\r\n                    </button>\r\n                    <button class=\"btn btn-primary  btn-primary_border\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Name</th>\r\n                            <th>Created Date</th>\r\n                            <th>Status</th>\r\n                            <th>\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of foodType; let i = index\">\r\n                            <td>{{ i + serialNumber + 1 }}</td>\r\n                            <td>{{ item.name }}</td>\r\n                            <td>\r\n                                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n                            </td>\r\n                            <td>\r\n                                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"Active\" name=\"status\"\r\n                                    [(ngModel)]=\"item.status\" (ngModelChange)=\"updateActiveStatus(item)\" labelOff=\"OFF\">\r\n                                </ui-switch>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"deleteCategory(item)\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"foodType && foodType.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <!-- <pagination\r\n          *ngIf=\"categoryList.length != 0 && !loader\"\r\n          [totalItems]=\"totalItems\"\r\n          [boundaryLinks]=\"true\"\r\n          [maxSize]=\"5\"\r\n          [(ngModel)]=\"currentPage\"\r\n          (pageChanged)=\"pageChange($event)\"\r\n        ></pagination> -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/inventory/inventory.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/inventory/inventory.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <select [(ngModel)]=\"totalmatch\" class=\"form-control\" (change)=\"getStoreItem($event.target.value)\">\r\n                    <option value=\"\">All</option>\r\n                    <option [value]=\"item.id\" *ngFor=\"let item of storelist\">{{item.name}}</option>\r\n                </select>\r\n                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Image</th>\r\n                            <th>Name</th>\r\n                            <th>Store</th>\r\n                            <th *ngIf=\"showorder\">Description</th>\r\n                            <th>Price</th>\r\n                            <th>Quantity</th>\r\n                            <th>Packing Time</th>\r\n                            <th>Created Date</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of foodItem; let i = index\">\r\n                            <td>{{ i + serialNumber + 1 }}</td>\r\n                            <td>\r\n                                <img src=\"{{ imageUrl }}{{ item.image }}\" width=\"70px\" height=\"70px\" />\r\n                            </td>\r\n                            <td>{{ item.name }}</td>\r\n                            <td>{{ item.storeName }}</td>\r\n                            <td *ngIf=\"showorder\">\r\n                                {{ item.description == null\r\n                                    ? \"\"\r\n                                    : item.description.length < 18\r\n                                    ? item.description\r\n                                    : item.description.slice(0, 16) + \"....\"\r\n                                }}\r\n                            </td>\r\n                            <!-- {{item.price || item.totalAmount}} -->\r\n                            <td>\r\n                                <input type=\"number\" min=\"0\" style=\"width: 40%;\" [(ngModel)]=\"item.price\" (input)=\"updateData(item.price,item._id,'price')\">\r\n                            </td>\r\n                            <!-- {{item.quantity}} -->\r\n                            <td>\r\n                                <input type=\"number\" min=\"0\" style=\"width: 40%;\" [(ngModel)]=\"item.quantity\" (input)=\"updateData(item.quantity,item._id,'quantity')\">\r\n                            </td>\r\n                            <td>{{item.packingTime}}</td>\r\n                            <td>\r\n                                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"product_action\">\r\n                                    <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\r\n                                        <span class=\"fas fa-fw fa-edit\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <div *ngIf=\"loader\" class=\"loader\"></div>\r\n                <h4 *ngIf=\"foodItem && foodItem.length == 0 && !loader\" class=\"text-center\">\r\n                    No records found.\r\n                </h4>\r\n            </div>\r\n            <!-- <pagination\r\n          *ngIf=\"categoryList.length != 0 && !loader\"\r\n          [totalItems]=\"totalItems\"\r\n          [boundaryLinks]=\"true\"\r\n          [maxSize]=\"5\"\r\n          [(ngModel)]=\"currentPage\"\r\n          (pageChanged)=\"pageChange($event)\"\r\n        ></pagination> -->\r\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/outlet/outlet.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/outlet/outlet.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <!-- DataTales Example -->\r\n  <div class=\"card shadow mb-4\">\r\n\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n          <div class=\" user_title\">\r\n             <div class=\"user_title_inner\">\r\n              <h6 class=\"m-0 text-black\">\r\n                Outlet\r\n              </h6>\r\n          </div>\r\n             <div class=\"user_add_button\"> \r\n              <button class=\"btn btn-primary mr-4\" (click)=\"addOutlet()\">\r\n                <span class=\"fas fa-plus\"></span> Add Outlet\r\n              </button>\r\n              <button class=\"btn btn-primary btn-primary_border\" (click)=\"history.back()\">\r\n                <span class=\"fas fa-arrow-left\"></span> Back\r\n              </button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Address</th>\r\n              <th>\r\n                Action\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"outlet && outlet.length > 0\">\r\n            <tr *ngFor=\"let item of outlet; let i = index\">\r\n              <td>{{ i + serialNumber + 1 }}</td>\r\n              <td>{{ item.address }}</td>\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\">\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-danger\" (click)=\"deleteOutlet(item)\">\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4 *ngIf=\"outlet && outlet.length == 0 && !loader\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <!-- <pagination\r\n          *ngIf=\"categoryList.length != 0 && !loader\"\r\n          [totalItems]=\"totalItems\"\r\n          [boundaryLinks]=\"true\"\r\n          [maxSize]=\"5\"\r\n          [(ngModel)]=\"currentPage\"\r\n          (pageChanged)=\"pageChange($event)\"\r\n        ></pagination> -->\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/settings/settings.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/settings/settings.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"!settings\">\r\n                                Add Settings\r\n                            </h6>\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\" *ngIf=\"settings\">\r\n                                Edit Settings\r\n                            </h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                                <span class=\"fas fa-arrow-left\"></span> Back\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"restaurantForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Delivery Charges</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"deliveryFee\" class=\"form-control\" formControlName=\"deliveryFee\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && restaurantForm.controls.deliveryFee.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"restaurantForm.controls.deliveryFee.errors.required\">\r\n                                Delivery Charges is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"price\">Tax</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"tax\" class=\"form-control\" formControlName=\"tax\" placeholder=\"\" />\r\n                            <div *ngIf=\"submitted && restaurantForm.controls.tax.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"restaurantForm.controls.tax.errors.required\">\r\n                                    Tax is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"price\">Service Fee</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"number\" min=\"0\" appNumberOnly id=\"serviceFee\" class=\"form-control\" formControlName=\"serviceFee\" placeholder=\"\" />\r\n                            <div *ngIf=\"submitted && restaurantForm.controls.serviceFee.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"restaurantForm.controls.serviceFee.errors.required\">\r\n                                    Service Fee is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group form-actions add_edit\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!settings\" (click)=\"submit()\">\r\n                        Add\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"settings\" (click)=\"update()\">\r\n                        Update\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/store.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/store.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 class=\"m-0 text-black\">Manage Store</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button class=\"btn btn-primary\" (click)=\"addRestaurant()\">\r\n              <span class=\"fas fa-plus\"></span> Add Store\r\n            </button>\r\n            <button class=\"btn btn-primary ml-3\" (click)=\"downloadCsv()\">\r\n              <span class=\"fas fa-download\"></span> Download CSV\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"filters_outer\">\r\n        <div class=\"user_filter\">\r\n          <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\"\r\n            placeholder=\"Search Store\" />\r\n        </div>\r\n        <div class=\"user_serch_btn\">\r\n          <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" (click)=\"searchStore()\">\r\n            Search\r\n          </button>\r\n          <button type=\"reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">\r\n            Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body table-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Image</th>\r\n              <th>Name</th>\r\n              <!-- <th>Description</th> -->\r\n              <th>Discount</th>\r\n              <!-- <th>Is Featured</th> -->\r\n              <th>Status</th>\r\n              <th>Is Recommended</th>\r\n              <th>Created Date</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of storeList | paginate: config; let i = index\">\r\n              <td>{{ i + serialNumber + 1 }}</td>\r\n              <td>\r\n                <img src=\"{{ imageUrl }}{{ item.image }}\" width=\"70px\" height=\"70px\" />\r\n              </td>\r\n              <td>{{ item.name }}</td>\r\n              <!-- <td>\r\n                {{\r\n                  item.description == null\r\n                    ? \"\"\r\n                    : item.description.length < 18\r\n                    ? item.description\r\n                    : item.description.slice(0, 16) + \"....\"\r\n                }}\r\n              </td> -->\r\n              <td>\r\n                {{ item.discount }}\r\n              </td>\r\n              <!-- <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"featured\" name=\"isFavourite\"\r\n                  [(ngModel)]=\"item.isFavourite\" (ngModelChange)=\"updateFavRes(item)\" labelOff=\"OFF\"></ui-switch>\r\n              </td> -->\r\n              <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\"\r\n                  (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\"></ui-switch>\r\n              </td>\r\n              <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"recommend\" name=\"isRecommended\"\r\n                  [(ngModel)]=\"item.isRecommended\" (ngModelChange)=\"updateRecoRes(item)\" labelOff=\"OFF\"></ui-switch>\r\n              </td>\r\n              <td>\r\n                {{ item.createdAt | date: \"yyyy-MM-dd\" }}\r\n              </td>\r\n\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button class=\"btn btn-warning mr-1\" (click)=\"onViewItem(item)\" title=\"View\">\r\n                    <span class=\"fas fa-fw fa-eye\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-success mr-1\" (click)=\"onEditSelect(item)\" title=\"Edit\">\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-info mr-1\" (click)=\"getOutlet(item)\" title=\"Outlet\">\r\n                    <span class=\"fa fa-map-marker\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn_item mr-1\" (click)=\"getFoodType(item)\" title=\"Store Type\">\r\n                    <span class=\"fa fa-sitemap\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-primary mr-1\" (click)=\"getFoodItem(item)\" title=\"Store Item\">\r\n                    <span class=\"fa fa-th\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-danger mr-1\" (click)=\"deleteStore(item)\">\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4 *ngIf=\"storeList.length == 0 && !loader\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <div *ngIf=\"storeList && storeList.length != 0 && !loader\" class=\"pagination_ui\">\r\n        <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/view-store/view-store.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/view-store/view-store.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"storeDetail\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">View Store</h6>\r\n                        </div>\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                <span class=\"fas fa-arrow-left\"></span> Back\r\n              </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <!-- Content Row -->\r\n            <div class=\"grid-5 gridipad\">\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\" mb-4 hvrcursor\" routerLink=\"/store/order\" title=\"View Order\">\r\n                    <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">\r\n                                        Orders\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ storeDetail.orders }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-fw fa-user fa-2x text-gray-300\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\" mb-4 hvrcursor\" [routerLink]=\"'/store/outlet/' + id\" title=\"View Outlet\">\r\n                    <div class=\"card border-left-success shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">\r\n                                        Outlets\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ storeDetail.outlets }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-fw fa-list fa-2x text-gray-300\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Pending Requests Card Example -->\r\n                <div class=\" mb-4 hvrcursor\" [routerLink]=\"'/store/food-item/' + id\" title=\"View Store Items\">\r\n                    <div class=\"card border-left-warning shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">\r\n                                        Store Items\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ storeDetail.items }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fa fa-shopping-cart fa-2x text-gray-300\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\" mb-4 hvrcursor\" [routerLink]=\"'/store/food-type/' + id\" title=\"View Store Types\">\r\n                    <div class=\"card border-left-info shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">\r\n                                        Store Types\r\n                                    </div>\r\n                                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">\r\n                                        {{ storeDetail.types }}\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fa fa-list-alt fa-2x text-gray-300 \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"storeDetail.detail\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Name</label>\r\n                            <input type=\"text\" name=\"Name\" [value]=\"storeDetail.detail.name\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Description</label>\r\n              <textarea row=\"4\" type=\"text\" class=\"form-control\" id=\"body\" [value]=\"\r\n              storeDetail.detail.description\r\n                    ? storeDetail.detail.description\r\n                    : '-'\r\n                \" class=\"form-control\" placeholder=\"Description\" disabled></textarea>\r\n            </div>\r\n          </div> -->\r\n                    <!-- <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Food Type</label>\r\n              <input type=\"text\" name=\"Name\" [value]=\"\r\n              storeDetail.detail.foodType == '0'\r\n                    ? 'Vegetrainian'\r\n                    : storeDetail.detail.foodType == '1'\r\n                    ? 'Non-Vegetrainian'\r\n                    : 'Vegetrainian & Non-Vegetrainian'\r\n                \" class=\"form-control\" disabled />\r\n            </div>\r\n          </div> -->\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Discount</label>\r\n                            <input type=\"text\" name=\"discount\" [value]=\"storeDetail.detail.discount\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Average Order Price</label>\r\n                            <input type=\"text\" name=\"price\" [value]=\"storeDetail.detail.avgOrderPrice\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Average Delivery Time</label>\r\n                            <input type=\"text\" name=\"time\" [value]=\"storeDetail.detail.avgDeliveryTime\" class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Store Category</label>\r\n                            <ul class=\"list-inline\">\r\n                                <li *ngFor=\"let category of storeDetail.detail.categories\" class=\"mb-2\">\r\n                                    <i class=\"fas fa-utensils mr-1 text-primary\"></i> {{ category.name }}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Image</label>\r\n                            <div>\r\n                                <ng-container *ngIf=\"storeDetail.detail.image\">\r\n                                    <img [src]=\"comm.imageUrl + storeDetail.detail.image\" style=\"height: 150px; width: 150px;\" />\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/cooldash/pages/store/category/category.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/cooldash/pages/store/category/category.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 967px) {\n  .user_filter,\n.user_serch_btn {\n    margin-bottom: 10px;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 767px) {\n  .user_filter,\n.user_serch_btn {\n    justify-content: center;\n  }\n\n  .text-right.add_btn {\n    text-align: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvY2F0ZWdvcnkvQzpcXFVzZXJzXFxyYWdodlxcRGVza3RvcFxcREVWXFxWZW5nb1xcbWF6YXRfYWRtaW5fcGFuZWwvc3JjXFxhcHBcXGNvb2xkYXNoXFxwYWdlc1xcc3RvcmVcXGNhdGVnb3J5XFxjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7SUFFSSxtQkFBQTtJQUNBLHlCQUFBO0VDQ047QUFDRjtBREVBO0VBQ0k7O0lBRUksdUJBQUE7RUNBTjs7RURFRTtJQUNJLDZCQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XHJcbiAgICAudXNlcl9maWx0ZXIsXHJcbiAgICAudXNlcl9zZXJjaF9idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudXNlcl9maWx0ZXIsXHJcbiAgICAudXNlcl9zZXJjaF9idG4ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQuYWRkX2J0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJAbWVkaWEgKG1heC13aWR0aDogOTY3cHgpIHtcbiAgLnVzZXJfZmlsdGVyLFxuLnVzZXJfc2VyY2hfYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudXNlcl9maWx0ZXIsXG4udXNlcl9zZXJjaF9idG4ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRleHQtcmlnaHQuYWRkX2J0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/category/category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cooldash/pages/store/category/category.component.ts ***!
  \*********************************************************************/
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
        this.searchText = "";
    }
    ngOnInit() {
        this.imageUrl = this.comm.imageUrl;
        this.getCategories();
    }
    getCategories() {
        this.api.getAllStoreCategories().subscribe(response => {
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
        this.dialogService.addStoreCategory().subscribe(res => {
            if (res == "yes") {
                this.getCategories();
            }
        });
    }
    onEditSelect(item) {
        this.dialogService.editStoreCategory(item).subscribe(res => {
            if (res == "yes") {
                this.getCategories();
            }
        });
    }
    searchRestaurant() {
        this.categoryList = this.allData.filter(row => row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    }
    reset() {
        this.searchText = '';
        this.getCategories();
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
                this.api.editStoreCategory(formData).subscribe((res) => {
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
        this.api.editStoreCategory(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getCategories();
            }
            if (!res["response"]["success"])
                return;
        });
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.scss */ "./src/app/cooldash/pages/store/category/category.component.scss")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/order/items-modal/items-modal.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/order/items-modal/items-modal.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL29yZGVyL2l0ZW1zLW1vZGFsL2l0ZW1zLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/order/items-modal/items-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/order/items-modal/items-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ItemsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModalComponent", function() { return ItemsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItemsModalComponent = class ItemsModalComponent {
    constructor() {
        this.serialNumber = 0;
    }
    ngOnInit() { }
};
ItemsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-items-modal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./items-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/items-modal/items-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./items-modal.component.scss */ "./src/app/cooldash/pages/store/order/items-modal/items-modal.component.scss")).default]
    })
], ItemsModalComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/order/order.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cooldash/pages/store/order/order.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error1 {\n  background: #ff00009c;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvb3JkZXIvQzpcXFVzZXJzXFxyYWdodlxcRGVza3RvcFxcREVWXFxWZW5nb1xcbWF6YXRfYWRtaW5fcGFuZWwvc3JjXFxhcHBcXGNvb2xkYXNoXFxwYWdlc1xcc3RvcmVcXG9yZGVyXFxvcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yMXtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA5YztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59IiwiLmVycm9yMSB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDA5YztcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/order/order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cooldash/pages/store/order/order.component.ts ***!
  \***************************************************************/
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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");












let OrderComponent = class OrderComponent {
    constructor(localStorage, api, comm, dialogService, router, toastr, orderService) {
        this.localStorage = localStorage;
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.router = router;
        this.toastr = toastr;
        this.orderService = orderService;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.orderList = [];
        this.status = "pending";
        this.limit = 25;
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25,
        };
        this.showdrop = true;
    }
    ngOnInit() {
        this.currentPage = 1;
        this.imageUrl = this.comm.imageUrl;
        if (this.comm.storeOderStatus == "pending") {
            this.pendingOrder();
        }
        else {
            this.allOrder();
        }
        this.acceptOrder = "acceptOrder";
        this.orderService.orderListener().subscribe((res) => {
            if (res["status"] == 12) {
                this.toastr.successToastr("Order Rejected");
                if (this.comm.storeOderStatus == "pending") {
                    this.pendingOrder();
                }
                else {
                    this.allOrder();
                }
            }
            else if (res["status"] == 1) {
                this.toastr.successToastr("Order Accepted");
                if (this.comm.storeOderStatus == "pending") {
                    this.pendingOrder();
                }
                else {
                    this.allOrder();
                }
            }
        });
        this.orderService.newStoreOrder().subscribe((res) => {
            console.log(res, res["sucess"]);
            if (res["sucess"]) {
                this.toastr.successToastr("New Store Order Received");
                if (this.router.url === "/store/order") {
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
    findDriver(lan, lon, id) {
        this.showdrop = true;
        this.assignId = id;
        this.api.getDriversStore(lan, lon, id).subscribe((res) => {
            this.showdrop = false;
            this.driver = res.data.drivers;
        });
    }
    pendingOrder() {
        this.status = "pending";
        this.comm.storeOderStatus = this.status;
        var status = this.statuscode;
        var page = this.currentPage;
        this.api.getPendingStoreOrders(status, page).subscribe((response) => {
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
    orderAccept(item) {
        console.log(item);
        this.adminid = localStorage.getItem('id');
        this.dialogService.orderAcceptModal().subscribe((res) => {
            console.log(res);
            if (res != undefined) {
                if (res["response"] == "no") {
                    var data = {
                        _id: item._id,
                        status: 12,
                        verticalType: 1,
                        time: res.time,
                        adminId: this.adminid
                    };
                    this.orderService.orderAccept(data);
                }
                else if (res["response"] == "yes" &&
                    res["time"] != "" &&
                    res["time"] != undefined) {
                    var data = {
                        _id: item._id,
                        status: 1,
                        verticalType: 1,
                        time: res.time,
                        adminId: this.adminid
                    };
                    this.orderService.orderAccept(data);
                }
            }
        });
    }
    DriverAssign(event, id) {
        console.log(event.target.value);
        const data = {
            "driverId": event.target.value,
            "orderId": id
        };
        this.api.assignDriver(data).subscribe((res) => {
            if (res.response.success) {
                console.log('getscket');
                this.adminid = localStorage.getItem('id');
                this.orderService.assingDriver(this.adminid).subscribe((res1) => {
                    this.toastr.successToastr(res1.message);
                    this.getpendingOrder();
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
        this.api.changeType(data).subscribe((res) => {
            // this.allOrder();
        });
    }
    changeMatchWebsite(event) {
        if (event.target.value == '0') {
            this.show = true;
        }
        else {
            this.show = false;
        }
        console.log('change', event.target.value);
        this.statuscode = event.target.value;
        this.pendingOrder();
    }
    itemsList(items) {
        this.dialogService.itemList(items);
    }
    viewOrder(item) {
        this.comm.storeOderStatus = this.status;
        this.router.navigate(["store/view-order/" + this.status + "/" + item._id]);
    }
    getpendingOrder() {
        this.api.getPendingstatus().subscribe((response) => {
            if (response["response"]["success"]) {
                this.orderList = response["data"]["list"];
                // console.log(this.orderList);
                for (let list of this.orderList) {
                    var totalTime = moment__WEBPACK_IMPORTED_MODULE_8__(list["date"]).add(list["preprationTime"], "minutes");
                    var currenntTime = moment__WEBPACK_IMPORTED_MODULE_8__();
                    list.mins = currenntTime.diff(totalTime, "minutes");
                    // console.log(list.mins)
                    // console.log(list.mins, mins, hh, currenntTime, totalTime, orderDate)
                }
                this.loader = false;
                this.config = {
                    id: "page",
                    currentPage: 10,
                    itemsPerPage: 25,
                    totalItems: response["data"]["count"],
                };
            }
            if (!response["success"])
                return;
        });
    }
    allOrder() {
        this.comm.storeOderStatus = this.status;
        var status = this.statuscode;
        var page = this.currentPage;
        this.api.getAllStoreOrders(status, page).subscribe((response) => {
            if (response["response"]["success"]) {
                this.orderList = response["data"]["list"];
                // console.log(this.orderList);
                for (let list of this.orderList) {
                    var totalTime = moment__WEBPACK_IMPORTED_MODULE_8__(list["date"]).add(list["preprationTime"], "minutes");
                    var currenntTime = moment__WEBPACK_IMPORTED_MODULE_8__();
                    list.mins = currenntTime.diff(totalTime, "minutes");
                    // console.log(list.mins)
                    // console.log(list.mins, mins, hh, currenntTime, totalTime, orderDate)
                }
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
    pageChange(newPage) {
        this.currentPage = newPage;
        if (this.status == "all") {
            this.allOrder();
        }
        else {
            this.pendingOrder();
        }
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
    getresturantOrder() {
        this.api.storesCsv().subscribe((res) => {
            if (res.sucess == true) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(res.url, "Storesorder.csv");
            }
            else {
                this.toastr.errorToastr('Something went wrong');
            }
        }, err => {
            this.toastr.errorToastr('Token is invalid please relogin');
            this.localStorage.clear();
            localStorage.clear();
            this.router.navigateByUrl("/login");
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
                        resolve("Driver Declared.");
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
};
OrderComponent.ctorParameters = () => [
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"] },
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.scss */ "./src/app/cooldash/pages/store/order/order.component.scss")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/order/view-order/view-order.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/order/view-order/view-order.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont1 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n::ng-deep .cont1 label.star {\n  padding: 0 5px !important;\n  width: inherit;\n}\n\n.cont1 .stars {\n  width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvb3JkZXIvdmlldy1vcmRlci9DOlxcVXNlcnNcXHJhZ2h2XFxEZXNrdG9wXFxERVZcXFZlbmdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxzdG9yZVxcb3JkZXJcXHZpZXctb3JkZXJcXHZpZXctb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL29yZGVyL3ZpZXctb3JkZXIvdmlldy1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL29yZGVyL3ZpZXctb3JkZXIvdmlldy1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250MSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jb250MSBsYWJlbC5zdGFyIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLmNvbnQxIC5zdGFycyB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxufSIsIi5jb250MSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5jb250MSBsYWJlbC5zdGFyIHtcbiAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5jb250MSAuc3RhcnMge1xuICB3aWR0aDogaW5oZXJpdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/order/view-order/view-order.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/order/view-order/view-order.component.ts ***!
  \*******************************************************************************/
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
    }
    getStoreOrderDetail(id) {
        this.api.getStoreOrderDetail(id).subscribe(res => {
            if (res["response"]["success"]) {
                // if(res["data"]['deliveryDate']) res["data"]['deliveryDate'] = moment(res["data"]['deliveryDate']).format('YYYY-MM-DD hh:mm a')
                this.orderDetail = res["data"];
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/order/view-order/view-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-order.component.scss */ "./src/app/cooldash/pages/store/order/view-order/view-order.component.scss")).default]
    })
], ViewOrderComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: StoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRoutingModule", function() { return StoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/order.component */ "./src/app/cooldash/pages/store/order/order.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/cooldash/pages/store/category/category.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/store.component */ "./src/app/cooldash/pages/store/store/store.component.ts");
/* harmony import */ var _store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/add-store/add-store.component */ "./src/app/cooldash/pages/store/store/add-store/add-store.component.ts");
/* harmony import */ var _store_view_store_view_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/view-store/view-store.component */ "./src/app/cooldash/pages/store/store/view-store/view-store.component.ts");
/* harmony import */ var _store_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/outlet/outlet.component */ "./src/app/cooldash/pages/store/store/outlet/outlet.component.ts");
/* harmony import */ var _store_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/food-type/food-type.component */ "./src/app/cooldash/pages/store/store/food-type/food-type.component.ts");
/* harmony import */ var _store_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/food-item/food-item.component */ "./src/app/cooldash/pages/store/store/food-item/food-item.component.ts");
/* harmony import */ var _store_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/food-item/add-food-item/add-food-item.component */ "./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.ts");
/* harmony import */ var _store_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/settings/settings.component */ "./src/app/cooldash/pages/store/store/settings/settings.component.ts");
/* harmony import */ var _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order/view-order/view-order.component */ "./src/app/cooldash/pages/store/order/view-order/view-order.component.ts");
/* harmony import */ var _store_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/inventory/inventory.component */ "./src/app/cooldash/pages/store/store/inventory/inventory.component.ts");















const routes = [
    {
        path: "",
        data: {
            title: ""
        },
        children: [
            {
                path: "order",
                component: _order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "category",
                component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "store",
                component: _store_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "inventory",
                component: _store_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_14__["InventoryComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view/:id",
                component: _store_view_store_view_store_component__WEBPACK_IMPORTED_MODULE_7__["ViewStoreComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "outlet/:id",
                component: _store_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_8__["OutletComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "food-type/:id",
                component: _store_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_9__["FoodTypeComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "food-item",
                component: _store_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_10__["FoodItemComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit/:id",
                component: _store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_6__["AddStoreComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add",
                component: _store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_6__["AddStoreComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit-food-item/:id/:itemId",
                component: _store_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_11__["AddFoodItemComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add-food-item/:id",
                component: _store_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_11__["AddFoodItemComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "settings",
                component: _store_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
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
let StoreRoutingModule = class StoreRoutingModule {
};
StoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StoreRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store.module.ts":
/*!******************************************************!*\
  !*** ./src/app/cooldash/pages/store/store.module.ts ***!
  \******************************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order.component */ "./src/app/cooldash/pages/store/order/order.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store-routing.module */ "./src/app/cooldash/pages/store/store-routing.module.ts");
/* harmony import */ var _order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order/items-modal/items-modal.component */ "./src/app/cooldash/pages/store/order/items-modal/items-modal.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/category.component */ "./src/app/cooldash/pages/store/category/category.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/store.component */ "./src/app/cooldash/pages/store/store/store.component.ts");
/* harmony import */ var _store_view_store_view_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/view-store/view-store.component */ "./src/app/cooldash/pages/store/store/view-store/view-store.component.ts");
/* harmony import */ var _store_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/outlet/outlet.component */ "./src/app/cooldash/pages/store/store/outlet/outlet.component.ts");
/* harmony import */ var _store_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/food-type/food-type.component */ "./src/app/cooldash/pages/store/store/food-type/food-type.component.ts");
/* harmony import */ var _store_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/food-item/food-item.component */ "./src/app/cooldash/pages/store/store/food-item/food-item.component.ts");
/* harmony import */ var _store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/add-store/add-store.component */ "./src/app/cooldash/pages/store/store/add-store/add-store.component.ts");
/* harmony import */ var _store_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/food-item/add-food-item/add-food-item.component */ "./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.ts");
/* harmony import */ var _store_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/settings/settings.component */ "./src/app/cooldash/pages/store/store/settings/settings.component.ts");
/* harmony import */ var _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order/view-order/view-order.component */ "./src/app/cooldash/pages/store/order/view-order/view-order.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../number-module/number-module.module */ "./src/app/number-module/number-module.module.ts");
/* harmony import */ var ngx_star_rating__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-star-rating */ "./node_modules/ngx-star-rating/fesm2015/ngx-star-rating.js");
/* harmony import */ var _store_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/inventory/inventory.component */ "./src/app/cooldash/pages/store/store/inventory/inventory.component.ts");





















 // <-- import the module




// import { InventoryModalComponent } from './store/inventory/inventory-modal/inventory-modal.component';
let StoreModule = class StoreModule {
};
StoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_store_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"], _store_food_item_add_food_item_add_food_item_component__WEBPACK_IMPORTED_MODULE_17__["AddFoodItemComponent"], _store_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_16__["AddStoreComponent"], _store_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_13__["OutletComponent"], _store_food_item_food_item_component__WEBPACK_IMPORTED_MODULE_15__["FoodItemComponent"], _store_food_type_food_type_component__WEBPACK_IMPORTED_MODULE_14__["FoodTypeComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"], _order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_9__["ItemsModalComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"], _store_view_store_view_store_component__WEBPACK_IMPORTED_MODULE_12__["ViewStoreComponent"], _order_view_order_view_order_component__WEBPACK_IMPORTED_MODULE_19__["ViewOrderComponent"], _store_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_25__["InventoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _store_routing_module__WEBPACK_IMPORTED_MODULE_8__["StoreRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot(),
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__["GooglePlaceModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlNativeDateTimeModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["PaginationModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
            _number_module_number_module_module__WEBPACK_IMPORTED_MODULE_23__["NumberModuleModule"],
            ngx_star_rating__WEBPACK_IMPORTED_MODULE_24__["NgxStarRatingModule"]
        ],
        entryComponents: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], StoreModule);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/add-store/add-store.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/add-store/add-store.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvYWRkLXN0b3JlL0M6XFxVc2Vyc1xccmFnaHZcXERlc2t0b3BcXERFVlxcVmVuZ29cXG1hemF0X2FkbWluX3BhbmVsL3NyY1xcYXBwXFxjb29sZGFzaFxccGFnZXNcXHN0b3JlXFxzdG9yZVxcYWRkLXN0b3JlXFxhZGQtc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL2FkZC1zdG9yZS9hZGQtc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvYWRkLXN0b3JlL2FkZC1zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbiAgfVxyXG4gICIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/add-store/add-store.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/add-store/add-store.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStoreComponent", function() { return AddStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");








let AddStoreComponent = class AddStoreComponent {
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
        this.currencyOptions = [];
        this.setValues = (data) => {
            if (data) {
                console.log(data.detail);
                this.restaurantForm.patchValue({
                    name: data.detail.name,
                    name_ar: data.detail.name_ar,
                    // description: data.detail.description,
                    discount: data.detail.discount,
                    // minOrderAmount: data.detail.minOrderAmount,
                    avgOrderPrice: data.detail.avgOrderPrice,
                    discountUpto: data.detail.discountUpto,
                    instagram: data.detail.instagram,
                    categories: data.detail.categories,
                    currency: data.detail.currency ? data.detail.currency : "K",
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
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("notUseable"),
            // description: new FormControl(
            //   "",
            //   Validators.compose([Validators.required, Validators.maxLength(250)])
            // ),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[.\d]+$/),
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
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            // currency: new FormControl("", Validators.compose([Validators.required])),
            // openTime: new FormControl("", Validators.compose([Validators.required])),
            // closeTime: new FormControl(
            //   "",
            //   Validators.compose([Validators.required])
            // )
            payBill: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[.\d]+$/),
            ]),
            tillNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[.\d]+$/),
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
        this.api.getStoreById(id).subscribe((res) => {
            if (res["response"]["success"]) {
                this.restaurantDetail = res["data"];
                this.setValues(this.restaurantDetail);
            }
        });
    }
    getCategories() {
        const list = [];
        this.api.getAllStoreCategories().subscribe((response) => {
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
        if (this.outlet) {
            if (this.submitted && this.restaurantForm.valid) {
                var categories = [];
                for (let data of this.restaurantForm.value.categories) {
                    categories.push(data._id);
                }
                this.restaurantForm.value.categories = categories;
                var data = this.restaurantForm.value;
                if (this.outlet) {
                    data.outlet = this.outlet;
                }
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("image", this.File);
                this.api.addStore(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        this.toastr.successToastr(res["response"]["message"]);
                        this.router.navigate(["/store/store"]);
                    }
                    else {
                        this.toastr.errorToastr(res["response"]["message"]);
                    }
                });
            }
        }
        else if (this.restaurantForm["controls"].outlet.value) {
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
        if (address.formatted_address) {
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
            data.updateId = this.id;
            delete data.password;
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("image", this.File);
            this.api.editStore(formData).subscribe((res) => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/store/store"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
};
AddStoreComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] }
];
AddStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-store",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-store.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/add-store/add-store.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-store.component.scss */ "./src/app/cooldash/pages/store/store/add-store/add-store.component.scss")).default]
    })
], AddStoreComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvZm9vZC1pdGVtL2FkZC1mb29kLWl0ZW0vQzpcXFVzZXJzXFxyYWdodlxcRGVza3RvcFxcREVWXFxWZW5nb1xcbWF6YXRfYWRtaW5fcGFuZWwvc3JjXFxhcHBcXGNvb2xkYXNoXFxwYWdlc1xcc3RvcmVcXHN0b3JlXFxmb29kLWl0ZW1cXGFkZC1mb29kLWl0ZW1cXGFkZC1mb29kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL2Zvb2QtaXRlbS9hZGQtZm9vZC1pdGVtL2FkZC1mb29kLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvZm9vZC1pdGVtL2FkZC1mb29kLWl0ZW0vYWRkLWZvb2QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbiAgfVxyXG4gIiwiLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMTRyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogOTUlO1xuICBjb2xvcjogI2Y1NTM1Mztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.ts ***!
  \***********************************************************************************************/
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
        this.setValues = data => {
            if (data) {
                this.restaurantForm.patchValue({
                    name: data.name,
                    description: data.description,
                    storeItemTypeId: data.storeItemTypeId,
                    // discount: data.discount,
                    price: data.price,
                    packingTime: data.packingTime,
                    storeCategoryId: data.storeCategoryId,
                    storeId: data.storeId
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
            storeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            storeItemTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            // discount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
            storeCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            packingTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[.\d]+$/)]),
        });
        this.dropDownSetting = this.comm.dropSetting;
        this.singleDropDownSetting = this.comm.singleDropSetting;
        this.getCategories();
    }
    getAllFoodType() {
        const list = [];
        this.api.getStoreTypeById(this.id).subscribe(response => {
            if (response["response"]["success"]) {
                this.foodType = response["data"];
            }
        });
    }
    getFoodItemById(id) {
        this.api.getStoreItemById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.restaurantDetail = res["data"];
                console.log(this.restaurantDetail);
                this.setValues(this.restaurantDetail);
            }
        });
    }
    getCategories() {
        const list = [];
        this.api.getAllStoreCategories().subscribe(response => {
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
        this.restaurantForm.controls["storeId"].setValue(this.id);
        if (this.submitted && this.restaurantForm.valid) {
            var data = this.restaurantForm.value;
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("image", this.File);
            this.api.addStoreFoodItem(formData).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/store/food-item", this.id]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
    update() {
        this.submitted = true;
        if (this.submitted && this.restaurantForm.valid) {
            var data = this.restaurantForm.value;
            data.updateId = this.itemId;
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("image", this.File);
            this.api.editStoreFoodItem(formData).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/store/food-item", this.id]);
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-food-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-food-item.component.scss */ "./src/app/cooldash/pages/store/store/food-item/add-food-item/add-food-item.component.scss")).default]
    })
], AddFoodItemComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-item/food-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-item/food-item.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL2Zvb2QtaXRlbS9mb29kLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-item/food-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-item/food-item.component.ts ***!
  \*****************************************************************************/
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
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.categoryList = [];
        this.showorder = true;
        this.history = window.history;
    }
    ngOnInit() {
        this.imageUrl = this.comm.imageUrl;
        this.route.queryParams.subscribe(params => {
            this.id = params["id"];
            if (this.id != 'storeitem')
                this.getFoodItem(this.id);
            if (this.id == 'storeitem')
                this.getStoreItem();
        });
    }
    getStoreItem() {
        this.api.getStoreItem('').subscribe((res) => {
            this.showorder = false;
            if (res["response"]["success"]) {
                debugger;
                this.foodItem = res.response.message.data;
                for (var data of this.foodItem) {
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
            }
        });
    }
    getFoodItem(id) {
        this.api.getStoreItemeById(id).subscribe(res => {
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
        this.router.navigate(['store/add-food-item', this.id]);
    }
    onEditSelect(item) {
        this.router.navigate(['store/edit-food-item', this.id, item._id]);
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
                this.api.editStoreFoodItem(formData).subscribe((res) => {
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
        this.api.editStoreFoodItem(formData).subscribe((res) => {
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-item/food-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-item.component.scss */ "./src/app/cooldash/pages/store/store/food-item/food-item.component.scss")).default]
    })
], FoodItemComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-type/food-type.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-type/food-type.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL2Zvb2QtdHlwZS9mb29kLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-type/food-type.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-type/food-type.component.ts ***!
  \*****************************************************************************/
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
        this.history = window.history;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.categoryList = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            this.getFoodType(this.id);
        });
    }
    getFoodType(id) {
        this.api.getStoreTypeById(id).subscribe(res => {
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
        this.api.editStoreFoodType(data).subscribe((res) => {
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
                    storeId: this.id,
                    status: 2
                };
                this.api.editStoreFoodType(data).subscribe((res) => {
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
        this.dialogService.addStoreType(this.id).subscribe(res => {
            if (res == "yes") {
                this.getFoodType(this.id);
            }
        });
    }
    onEditSelect(item) {
        this.dialogService.editStoreype(item).subscribe(res => {
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-type/food-type.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-type.component.scss */ "./src/app/cooldash/pages/store/store/food-type/food-type.component.scss")).default]
    })
], FoodTypeComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/inventory/inventory.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/inventory/inventory.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/inventory/inventory.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/inventory/inventory.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cooldash/services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var src_app_cooldash_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cooldash/services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var src_app_cooldash_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cooldash/services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");





let InventoryComponent = class InventoryComponent {
    constructor(api, comm, dialogService) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.serialNumber = 0;
    }
    ngOnInit() {
        this.imageUrl = this.comm.imageUrl;
        this.getStoreItem('');
        this.getStorelist();
    }
    getStorelist() {
        this.api.getAdminsforFilter().subscribe((res) => {
            this.storelist = res.data.list;
        });
    }
    getStoreItem(id) {
        console.log(id);
        this.api.getStoreItem(id).subscribe((res) => {
            this.showorder = false;
            if (res["response"]["success"]) {
                this.foodItem = res.response.message.data;
                for (var data of this.foodItem) {
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
            }
        });
    }
    onEditSelect(item) {
        console.log('item', item._id);
        this.dialogService.editShuttleRoute(item._id).subscribe(res => {
            this.getStoreItem('');
        });
    }
    updateData(value, id, key) {
        if (key == 'price') {
            const data = {
                "id": id,
                "price": value
            };
            this.api.addInventory(data).subscribe((res) => {
                this.getStoreItem('');
            });
        }
        if (key == 'quantity') {
            const data = {
                "id": id,
                "quantity": value
            };
            this.api.addInventory(data).subscribe((res) => {
                this.getStoreItem('');
            });
        }
    }
};
InventoryComponent.ctorParameters = () => [
    { type: src_app_cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_cooldash_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: src_app_cooldash_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] }
];
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/inventory/inventory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory.component.scss */ "./src/app/cooldash/pages/store/store/inventory/inventory.component.scss")).default]
    })
], InventoryComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/outlet/outlet.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/outlet/outlet.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL291dGxldC9vdXRsZXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/outlet/outlet.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/outlet/outlet.component.ts ***!
  \***********************************************************************/
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
        this.api.getStoreOutletById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.outlet = res["data"];
                console.log(this.outlet);
                this.loader = false;
            }
        });
    }
    addOutlet() {
        this.dialogService.addStoreOutlet(this.id).subscribe(res => {
            if (res == "yes") {
                this.getOutlettById(this.id);
            }
        });
    }
    onEditSelect(item) {
        this.dialogService.editStoreOutlet(item).subscribe(res => {
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
                this.api.editStoreOutlet(data).subscribe((res) => {
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./outlet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/outlet/outlet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./outlet.component.scss */ "./src/app/cooldash/pages/store/store/outlet/outlet.component.scss")).default]
    })
], OutletComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/settings/settings.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/settings/settings.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvc2V0dGluZ3MvQzpcXFVzZXJzXFxyYWdodlxcRGVza3RvcFxcREVWXFxWZW5nb1xcbWF6YXRfYWRtaW5fcGFuZWwvc3JjXFxhcHBcXGNvb2xkYXNoXFxwYWdlc1xcc3RvcmVcXHN0b3JlXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMTRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gICAgZm9udC1zaXplOiA5NSU7XHJcbiAgICBjb2xvcjogI2Y1NTM1MztcclxuICB9XHJcbiAgIiwiLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMTRyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogOTUlO1xuICBjb2xvcjogI2Y1NTM1Mztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/settings/settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/settings/settings.component.ts ***!
  \***************************************************************************/
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
            this.api.editStoreSettings(data).subscribe(res => {
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
            this.api.addStoreSettings(data).subscribe(res => {
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
        this.api.getStoreSettings().subscribe(res => {
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/cooldash/pages/store/store/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/store.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/store.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 967px) {\n  .user_filter,\n.user_serch_btn {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvQzpcXFVzZXJzXFxyYWdodlxcRGVza3RvcFxcREVWXFxWZW5nb1xcbWF6YXRfYWRtaW5fcGFuZWwvc3JjXFxhcHBcXGNvb2xkYXNoXFxwYWdlc1xcc3RvcmVcXHN0b3JlXFxzdG9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7SUFFSSxtQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9zdG9yZS9zdG9yZS9zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xyXG4gICAgLnVzZXJfZmlsdGVyLFxyXG4gICAgLnVzZXJfc2VyY2hfYnRuIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XG4gIC51c2VyX2ZpbHRlcixcbi51c2VyX3NlcmNoX2J0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/store.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/store.component.ts ***!
  \***************************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let StoreComponent = class StoreComponent {
    constructor(api, comm, dialogService, router) {
        this.api = api;
        this.comm = comm;
        this.dialogService = dialogService;
        this.router = router;
        this.currentPage = 1;
        this.serialNumber = 0;
        this.loader = true;
        this.storeList = [];
        this.type = 0;
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
        this.searchText = "";
        this.limit = 25;
        this.config = {
            id: "page",
            currentPage: 1,
            itemsPerPage: 25,
        };
    }
    ngOnInit() {
        this.imageUrl = this.comm.imageUrl;
        this.getStore();
    }
    getStore() {
        this.api.getAllStore(this.searchText, 1).subscribe((response) => {
            console.log(response["response"]);
            if (response["response"]["success"]) {
                this.storeList = response["data"]["list"];
                for (var data of this.storeList) {
                    data.isRecommended = data["isRecommended"] == 1 ? true : false;
                    data.isFavourite = data["isFavourite"] == 1 ? true : false;
                    data.status = data["status"] == 1 ? true : false;
                }
                this.loader = false;
            }
            if (!response["success"])
                return;
        });
    }
    searchStore() {
        this.getStore();
    }
    reset() {
        this.searchText = "";
        this.getStore();
    }
    updateFavRes(item) {
        console.log(item);
        var data = {
            name: item.name,
            updateId: item._id,
            isFavourite: item.isFavourite ? 1 : 0,
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.editStore(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getStore();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    downloadCsv() {
        let body = {
            modelName: 'store'
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
    updateStatus(item) {
        console.log(item);
        var data = {
            name: item.name,
            updateId: item._id,
            status: item.status ? 1 : 0,
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.editStore(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getStore();
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
            isRecommended: item.isRecommended ? 1 : 0,
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.editStore(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getStore();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    addRestaurant() {
        this.router.navigate(["/store/add"]);
    }
    onViewItem(item) {
        this.router.navigate(["/store/view", item._id]);
    }
    onChange(event) {
        console.log(event);
        this.type = event.target.value;
        this.getStore();
    }
    onEditSelect(item) {
        this.router.navigate(["/store/edit", item._id]);
    }
    deleteStore(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Store!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                var data = {
                    name: item.name,
                    updateId: item._id,
                    status: 2,
                };
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("image", item.image);
                this.api.editStore(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success",
                        });
                        this.getStore();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
    getOutlet(item) {
        console.log(item);
        this.router.navigate(["/store/outlet", item._id]);
    }
    getFoodType(item) {
        this.router.navigate(["/store/food-type", item._id]);
    }
    getFoodItem(item) {
        this.router.navigate(["/store/food-item"], { queryParams: { 'id': item._id } });
    }
    pageChange(event) { }
};
StoreComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-store",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/store.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store.component.scss */ "./src/app/cooldash/pages/store/store/store.component.scss")).default]
    })
], StoreComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/store/store/view-store/view-store.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/view-store/view-store.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-5.gridipad .card-body {\n  flex: 1 1 auto;\n  padding: 0.875rem 1rem;\n}\n\n@media (max-width: 1280px) {\n  .grid-5.gridipad .card-body {\n    padding: 0.575rem;\n  }\n\n  .grid-5.gridipad .text-xs {\n    font-size: 0.6rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  .grid-5.gridipad .card-body {\n    padding: 0.2rem;\n  }\n}\n\n@media (max-width: 967px) {\n  .grid-5.gridipad {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media (max-width: 767px) {\n  .grid-5.gridipad {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .grid-5.gridipad .card-body {\n    padding: 0.475rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvdmlldy1zdG9yZS9DOlxcVXNlcnNcXHJhZ2h2XFxEZXNrdG9wXFxERVZcXFZlbmdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxzdG9yZVxcc3RvcmVcXHZpZXctc3RvcmVcXHZpZXctc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL3ZpZXctc3RvcmUvdmlldy1zdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxpQkFBQTtFQ0NOOztFRENFO0lBQ0ksaUJBQUE7RUNFTjtBQUNGOztBRENBO0VBQ0k7SUFDSSxlQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksa0NBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSw4QkFBQTtFQ0ROOztFREdFO0lBQ0ksaUJBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvdmlldy1zdG9yZS92aWV3LXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtNS5ncmlkaXBhZCAuY2FyZC1ib2R5IHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5ncmlkLTUuZ3JpZGlwYWQgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMC41NzVyZW07XHJcbiAgICB9XHJcbiAgICAuZ3JpZC01LmdyaWRpcGFkIC50ZXh0LXhzIHtcclxuICAgICAgICBmb250LXNpemU6IC42cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZ3JpZC01LmdyaWRpcGFkIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XHJcbiAgICAuZ3JpZC01LmdyaWRpcGFkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ncmlkLTUuZ3JpZGlwYWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIH1cclxuICAgIC5ncmlkLTUuZ3JpZGlwYWQgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMC40NzVyZW07XHJcbiAgICB9XHJcbn0iLCIuZ3JpZC01LmdyaWRpcGFkIC5jYXJkLWJvZHkge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuZ3JpZC01LmdyaWRpcGFkIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDAuNTc1cmVtO1xuICB9XG5cbiAgLmdyaWQtNS5ncmlkaXBhZCAudGV4dC14cyB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmdyaWQtNS5ncmlkaXBhZCAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xuICAuZ3JpZC01LmdyaWRpcGFkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmdyaWQtNS5ncmlkaXBhZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG5cbiAgLmdyaWQtNS5ncmlkaXBhZCAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwLjQ3NXJlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/view-store/view-store.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/view-store/view-store.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStoreComponent", function() { return ViewStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewStoreComponent = class ViewStoreComponent {
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
            this.getStoreById(this.id);
        });
    }
    getStoreById(id) {
        this.api.getStoreById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.storeDetail = res["data"];
            }
        });
    }
};
ViewStoreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-store",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-store.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/view-store/view-store.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-store.component.scss */ "./src/app/cooldash/pages/store/store/view-store/view-store.component.scss")).default]
    })
], ViewStoreComponent);



/***/ })

}]);
//# sourceMappingURL=pages-store-store-module-es2015.js.map