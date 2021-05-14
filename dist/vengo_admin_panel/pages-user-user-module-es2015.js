(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\">\r\n                    <h6 class=\"m-0 text-black\" *ngIf=\"!id\">\r\n                        Add User\r\n                    </h6>\r\n                    <h6 class=\"m-0 text-black\" *ngIf=\"id\">\r\n                        Edit User\r\n                    </h6>\r\n                \r\n                \r\n                \r\n                </div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"userForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">First Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"firstName\"\r\n                                placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && userForm.controls.firstName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userForm.controls.firstName.errors.required\">\r\n                                First Name is required\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.firstName.errors.minlength\">\r\n                                First Name must be at least 3 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.firstName.errors.maxlength\">\r\n                                First Name can be max 16 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.firstName.errors.pattern\">\r\n                                Invalid character.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" form-group col-md-6\">\r\n                        <label for=\"title\">Last Name</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"lastName\"\r\n                                placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && userForm.controls.lastName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userForm.controls.lastName.errors.required\">\r\n                                Last Name is required\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.lastName.errors.minlength\">\r\n                                Last Name must be at least 3 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.lastName.errors.maxlength\">\r\n                                Last Name can be max 16 characters long.\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.lastName.errors.pattern\">\r\n                                Invalid character.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"title\">Email</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && userForm.controls.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userForm.controls.email.errors.required\">\r\n                                Email is required\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.email.errors.pattern\">\r\n                                Email is not valid\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n                        <label for=\"category\">Password</label>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"password\" id=\"name\" class=\"form-control\" formControlName=\"password\"\r\n                                placeholder=\"\" />\r\n                        </div>\r\n                        <div *ngIf=\"submitted && userForm.controls.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"userForm.controls.password.errors.required\">\r\n                                Password is required\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls.password.errors.minlength\">\r\n                                Password must be atleast 8 characters\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"category\">Phone Number</label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <div class=\"login_email country_code_div\">\r\n                                    <div class=\"loginmail_input\" *ngIf=\"countryCodes && countryCodes.length>0\">\r\n                                        <ngx-select-dropdown (change)=\"selectionChanged1($event)\"\r\n                                            formControlName=\"countryCode\" [config]=\"config1\" [options]=\"countryCodes\">\r\n                                        </ngx-select-dropdown>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-8\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"phone\"\r\n                                        placeholder=\"\" />\r\n                                </div>\r\n                                <div *ngIf=\"submitted && userForm.controls.phone.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"userForm.controls.phone.errors.required\">\r\n                                        Phone Number is required\r\n                                    </div>\r\n                                    <div *ngIf=\"userForm.controls.phone.errors.minlength\">\r\n                                        Phone Number must be at least 7 characters long.\r\n                                    </div>\r\n                                    <div *ngIf=\"userForm.controls.phone.errors.maxlength\">\r\n                                        Phone Number can be max 15 characters long.\r\n                                    </div>\r\n                                    <div *ngIf=\"userForm.controls.phone.errors.pattern\">\r\n                                        Phone Number not valid.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" formGroupName=\"emergencyPhone\">\r\n                        <label for=\"category\">Emergency Phone Number</label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <div class=\"login_email country_code_div\">\r\n                                    <div class=\"loginmail_input\" *ngIf=\"countryCodes && countryCodes.length>0\">\r\n                                        <ngx-select-dropdown (change)=\"selectionChanged2($event)\"\r\n                                            formControlName=\"countryCode\" [config]=\"config2\" [options]=\"countryCodes\">\r\n                                        </ngx-select-dropdown>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-8\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"phone\"\r\n                                        placeholder=\"\" />\r\n                                </div>\r\n                                <div *ngIf=\"submitted && userForm.controls['emergencyPhone'].get('phone').errors\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"userForm.controls['emergencyPhone'].get('phone').errors.required\">\r\n                                        Phone Number is required\r\n                                    </div>\r\n                                    <div *ngIf=\"userForm.controls['emergencyPhone'].get('phone').errors.minlength\">\r\n                                        Phone Number must be at least 7 characters long.\r\n                                    </div>\r\n                                    <div *ngIf=\"userForm.controls['emergencyPhone'].get('phone').errors.maxlength\">\r\n                                        Phone Number can be max 15 characters long.\r\n                                    </div>\r\n                                    <div *ngIf=\"userForm.controls['emergencyPhone'].get('phone').errors.pattern\">\r\n                                        Phone Number not valid.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"types\">Image</label>\r\n                        <div class=\"usr_profile_img\">\r\n                            <div class=\"usr_profile_imgbx\">\r\n                                <div class=\"user_img\">\r\n                                    <figure *ngIf=\"userImage\">\r\n                                        <img style=\"height: 150px;width: 150px\" [src]=\"userImage\" />\r\n                                    </figure>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"user_profile_edit\">\r\n                                <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event)\" />\r\n                            </div>\r\n                            <div *ngIf=\"submitted && !userImage\" class=\"invalid-feedback\">\r\n                                Image is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group form-actions add_edit\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n                        Add\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n                        Update\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/user/user.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/user/user.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 i18n=\"@@Users\" class=\"m-0 text-black\">Users</h6>\r\n          </div>\r\n          <!--<div class=\"user_add_button\">\r\n                        <button class=\"btn btn-primary\" (click)=\"addUser()\">\r\n                            <span class=\"fas fa-plus\"></span> Add User\r\n                        </button>\r\n                    </div>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"filters_outer\">\r\n        <div class=\"user_filter\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            name=\"searchText\"\r\n            [(ngModel)]=\"searchText\"\r\n            placeholder=\"Search User\"\r\n          />\r\n        </div>\r\n        <div class=\"user_serch_btn\">\r\n          <button\r\n            i18n=\"@@Search\"\r\n            type=\"submit\"\r\n            class=\"btn btn-primary pl-4 pr-4\"\r\n            (click)=\"searchUser()\"\r\n          >\r\n            Search\r\n          </button>\r\n          <button\r\n            i18n=\"@@Reset\"\r\n            type=\"reset\"\r\n            class=\"btn btn-primary pl-4 pr-4 ml-2\"\r\n            (click)=\"reset()\"\r\n          >\r\n            Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body table-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th i18n=\"@@Image\">Image</th>\r\n              <th i18n=\"@@Name\">Name</th>\r\n              <th i18n=\"@@Email\">Email</th>\r\n              <th i18n=\"@@Phone_Number\">Phone Number</th>\r\n              <th i18n=\"@@E_Phone_Number\" style=\"min-width: 10rem\">\r\n                E-Phone Number\r\n              </th>\r\n              <th i18n=\"@@Status\" style=\"min-width: 6rem\">Status</th>\r\n              <th i18n=\"@@Action\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of userList | paginate: config; let i = index\">\r\n              <td>{{ (currentPage - 1) * 25 + i + 1 }}</td>\r\n              <td>\r\n                <ng-container *ngIf=\"item.profilePic; else noImage\">\r\n                  <img\r\n                    src=\"{{ imageUrl }}{{ item.profilePic }}\"\r\n                    width=\"70px\"\r\n                    height=\"70px\"\r\n                  />\r\n                </ng-container>\r\n                <ng-template #noImage>\r\n                  <img\r\n                    src=\"assets/img/default-user.png\"\r\n                    width=\"70px\"\r\n                    height=\"70px\"\r\n                  />\r\n                </ng-template>\r\n              </td>\r\n              <td>{{ item.firstName }} {{ item.lastName }}</td>\r\n              <td>{{ item.email }}</td>\r\n              <td>{{ item.countryCode }} {{ item.phone }}</td>\r\n              <ng-container *ngIf=\"item.emergencyPhone; else noNumber\">\r\n                <td>\r\n                  {{ item.emergencyPhone.countryCode }}\r\n                  {{ item.emergencyPhone.phone }}\r\n                </td>\r\n              </ng-container>\r\n              <ng-template #noNumber>\r\n                <td>-</td>\r\n              </ng-template>\r\n              <td>\r\n                <ui-switch\r\n                  labelOn=\"ON\"\r\n                  switchColor=\"#4e73df\"\r\n                  id=\"status\"\r\n                  name=\"status\"\r\n                  [(ngModel)]=\"item.status\"\r\n                  (ngModelChange)=\"updateStatus(item)\"\r\n                  labelOff=\"OFF\"\r\n                >\r\n                </ui-switch>\r\n              </td>\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button\r\n                    class=\"btn btn-warning mr-1\"\r\n                    title=\"View User\"\r\n                    (click)=\"onViewUser(item)\"\r\n                    title=\"View\"\r\n                  >\r\n                    <span class=\"fas fa-fw fa-eye\"></span>\r\n                  </button>\r\n                  <button\r\n                    class=\"btn btn-success mr-1\"\r\n                    title=\"Edit User\"\r\n                    (click)=\"onEditUser(item)\"\r\n                    title=\"Edit\"\r\n                  >\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <!-- <button class=\"btn btn-danger mr-1\" title=\"Delete User\" (click)=\"deleteUser(item)\">\r\n                                        <span class=\"fas fa-fw fa-trash\"></span>\r\n                                    </button> -->\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4\r\n          *ngIf=\"userList && userList.length == 0 && !loader\"\r\n          class=\"text-center\"\r\n        >\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <div *ngIf=\"userList.length != 0 && !loader\" class=\"pagination_ui\">\r\n        <pagination-controls\r\n          (pageChange)=\"pageChange($event)\"\r\n          id=\"page\"\r\n          class=\"my-pagination\"\r\n        >\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/view/view.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/view/view.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"card shadow mb-4\">\r\n\r\n\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\">\r\n                    <h6 class=\"m-0 text-black\">\r\n                        View User\r\n                    </h6>\r\n                </div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"card-body\" *ngIf=\"userDetail\">\r\n            <div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>User Name</label>\r\n                            <input type=\"text\" name=\"Name\" value=\"{{userDetail.firstName}} {{userDetail.lastName}}\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input type=\"text\" name=\"Email\" value=\"{{userDetail.email}}\" class=\"form-control\"\r\n                                disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Phone Number</label>\r\n                            <input type=\"text\" name=\"Email\" value=\"{{userDetail.countryCode}} {{userDetail.phone}}\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" *ngIf=\"userDetail.emergencyPhone\">\r\n                        <div class=\"form-group\">\r\n                            <label>Emergency Phone Number</label>\r\n                            <input type=\"text\" name=\"Email\"\r\n                                value=\"{{userDetail.emergencyPhone.countryCode}} {{userDetail.emergencyPhone.phone}}\"\r\n                                class=\"form-control\" disabled />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Image</label>\r\n                            <div>\r\n                                <ng-container *ngIf=\"userDetail.profilePic; else noImage\">\r\n                                    <img [src]=\"comm.imageUrl + userDetail.profilePic\"\r\n                                        style=\"height: 150px; width: 150px;\" />\r\n                                </ng-container>\r\n                                 <ng-template #noImage>\r\n                                    <img src=\"assets/img/default-user.png\"  style=\"height: 150px; width: 150px;\"/>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\n::ng-deep .ngx-dropdown-container .ngx-dropdown-button {\n  min-height: 38px !important;\n}\n\n::ng-deep .ngx-dropdown-container button .nsdicon-angle-down {\n  top: 2px;\n}\n\n::ng-deep .ngx-dropdown-container .ngx-dropdown-list-container ul li {\n  padding: 3px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdXNlci9hZGQtZWRpdC11c2VyL1Y6XFxqYWQtYWRtaW4tZ29cXG1hemF0X2FkbWluX3BhbmVsL3NyY1xcYXBwXFxjb29sZGFzaFxccGFnZXNcXHVzZXJcXGFkZC1lZGl0LXVzZXJcXGFkZC1lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3VzZXIvYWRkLWVkaXQtdXNlci9hZGQtZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURHSTtFQUNJLDJCQUFBO0FDQVI7O0FERUk7RUFDSSxRQUFBO0FDQVI7O0FERUk7RUFDSSwyQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvdXNlci9hZGQtZWRpdC11c2VyL2FkZC1lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDk1JTtcclxuICAgIGNvbG9yOiAjZjU1MzUzO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gICAgLm5neC1kcm9wZG93bi1jb250YWluZXIgLm5neC1kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiAubnNkaWNvbi1hbmdsZS1kb3duIHtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIC5uZ3gtZHJvcGRvd24tbGlzdC1jb250YWluZXIgdWwgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59XG5cbjo6bmctZGVlcCAubmd4LWRyb3Bkb3duLWNvbnRhaW5lciAubmd4LWRyb3Bkb3duLWJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmd4LWRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24gLm5zZGljb24tYW5nbGUtZG93biB7XG4gIHRvcDogMnB4O1xufVxuOjpuZy1kZWVwIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIC5uZ3gtZHJvcGRvd24tbGlzdC1jb250YWluZXIgdWwgbGkge1xuICBwYWRkaW5nOiAzcHggOHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUserComponent", function() { return AddEditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AddEditUserComponent = class AddEditUserComponent {
    constructor(formBuilder, comm, api, toastr, router, route) {
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.history = window.history;
        this.submitted = false;
        this.countryStatus = true;
        this.countryStatus1 = false;
        this.countryStatus2 = false;
        this.setValues = data => {
            if (data) {
                this.userForm.patchValue({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    countryCode: data.countryCode,
                    phone: data.phone,
                    email: data.email
                });
                if (data && data.emergencyPhone) {
                    this.userForm.controls.emergencyPhone.patchValue({
                        phone: data.emergencyPhone.phone,
                        countryCode: data.emergencyPhone.countryCode
                    });
                }
                if (data.profilePic) {
                    this.userImage = this.comm.imageUrl + data.profilePic;
                }
            }
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            if (this.id != undefined) {
                this.getUserById(this.id);
            }
        });
        this.userForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(18),
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
            emergencyPhone: this.formBuilder.group({
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]),
                countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
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
            this.config2 = {
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
            if (!this.id) {
                this.userForm.controls["countryCode"].setValue(this.countryCodes[0]);
                this.userForm.controls['emergencyPhone'].get('countryCode').setValue(this.countryCodes[0]);
                this.userForm.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
                this.userForm.get('password').updateValueAndValidity();
            }
        });
    }
    getUserById(id) {
        this.api.getUserById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.userDetail = res["data"];
                this.setValues(this.userDetail);
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
                    this.userImage = event.target.result;
                };
            }
        });
    }
    selectionChanged1(event) {
        if (event.value) {
            this.countryStatus1 = true;
        }
        else {
            this.countryStatus1 = false;
            this.userForm.controls["countryCode"].setValue("");
        }
    }
    selectionChanged2(event) {
        if (event.value) {
            this.countryStatus2 = true;
        }
        else {
            this.countryStatus2 = false;
            this.userForm.controls['emergencyPhone'].get('countryCode').setValue("");
        }
    }
    update() {
        this.submitted = true;
        if (this.countryStatus1) {
            this.userForm.controls["countryCode"].setValue(this.userForm.controls["countryCode"].value.Code);
        }
        if (this.countryStatus2) {
            this.userForm.controls["emergencyPhone"].value.countryCode =
                this.userForm.controls["emergencyPhone"].value.countryCode.Code;
        }
        if ((this.userForm.value.countryCode &&
            this.userForm.value.countryCode.length > 0) || (this.userForm.controls['emergencyPhone'].get('countryCode') &&
            this.userForm.controls['emergencyPhone'].get('countryCode').value.length > 0)) {
            if (this.userForm.valid) {
                this.countryStatus1 = false;
                this.countryStatus2 = false;
                var data = this.userForm.value;
                data['userId'] = this.id;
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("pic", this.File);
                this.api.updateUser(formData).subscribe(res => {
                    if (res["response"]["success"]) {
                        this.toastr.successToastr(res["response"]["message"]);
                        this.router.navigate(["/user/user"]);
                    }
                    else {
                        this.toastr.errorToastr(res["response"]["message"]);
                    }
                });
            }
        }
        else {
            this.toastr.errorToastr("Please select the country code");
        }
    }
    submit() {
        console.log(this.userForm.value);
        this.submitted = true;
        this.userForm.controls["countryCode"].setValue(this.userForm.controls["countryCode"].value.Code);
        this.userForm.controls['emergencyPhone'].get('countryCode').setValue(this.userForm.controls["emergencyPhone"].value.countryCode.Code);
        if ((this.userForm.value.countryCode &&
            this.userForm.value.countryCode.length > 0 &&
            this.userForm.value.phone) || (this.userForm.controls['emergencyPhone'].get('countryCode') &&
            this.userForm.controls['emergencyPhone'].get('countryCode').value.length > 0 &&
            this.userForm.controls['emergencyPhone'].get('phone'))) {
            if (this.submitted && this.userForm.valid) {
                var data = this.userForm.value;
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("pic", this.File);
                this.api.addUser(formData).subscribe(res => {
                    if (res["response"]["success"]) {
                        this.toastr.successToastr("User register successfully");
                        this.router.navigate(["/user/user"]);
                    }
                    else {
                        this.toastr.errorToastr(res["response"]["message"]);
                    }
                });
            }
        }
        else {
            this.toastr.errorToastr("Please select the country code");
        }
    }
};
AddEditUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AddEditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit-user.component.scss */ "./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.scss")).default]
    })
], AddEditUserComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/user/user-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/cooldash/pages/user/user-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/cooldash/pages/user/user/user.component.ts");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/cooldash/pages/user/view/view.component.ts");






const routes = [
    {
        path: "",
        data: {
            title: "User"
        },
        children: [
            {
                path: "user",
                component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add",
                component: _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["AddEditUserComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit/:id",
                component: _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["AddEditUserComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view/:id",
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/user/user.module.ts":
/*!****************************************************!*\
  !*** ./src/app/cooldash/pages/user/user.module.ts ***!
  \****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/cooldash/pages/user/user/user.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/cooldash/pages/user/user-routing.module.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/cooldash/pages/user/add-edit-user/add-edit-user.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/view.component */ "./src/app/cooldash/pages/user/view/view.component.ts");













let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["AddEditUserComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_5__["SelectDropDownModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__["GooglePlaceModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot()
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/cooldash/pages/user/user/user.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cooldash/pages/user/user/user.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3VzZXIvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/user/user/user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cooldash/pages/user/user/user.component.ts ***!
  \************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let UserComponent = class UserComponent {
    constructor(api, comm, router) {
        this.api = api;
        this.comm = comm;
        this.router = router;
        this.serialNumber = 0;
        this.loader = true;
        this.userList = [];
        this.limit = 25;
        this.maxSize = 5;
        this.bigCurrentPage = 1;
        this.numPages = 0;
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
        this.getUser();
    }
    setPage() {
        this.getUser();
    }
    searchUser() {
        this.currentPage = 1;
        this.getUser();
    }
    reset() {
        this.currentPage = 1;
        this.searchText = '';
        this.getUser();
    }
    getUser() {
        var page = this.currentPage;
        this.api.getAllUser(page, this.searchText).subscribe(response => {
            console.log(response);
            if (response["data"]) {
                this.userList = response["data"]["users"];
                for (var data of this.userList) {
                    data.status = data["status"] == 1 ? true : false;
                }
                console.log(this.userList);
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
            userId: item._id,
            firstName: item.firstName,
            lastName: item.lastName,
            status: item.status ? 1 : 0
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("pic", item.profilePic);
        this.api.updateUser(formData).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getUser();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getUser();
    }
    addUser() {
        this.router.navigate(['user/add']);
    }
    onViewUser(item) {
        this.router.navigate(['user/view', item._id]);
    }
    onEditUser(item) {
        this.router.navigate(['user/edit', item._id]);
    }
    deleteUser(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this User!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    userId: item._id,
                    status: 2
                };
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("pic", item.profilePic);
                this.api.updateUser(formData).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getUser();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/cooldash/pages/user/user/user.component.scss")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/user/view/view.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cooldash/pages/user/view/view.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3VzZXIvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/user/view/view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cooldash/pages/user/view/view.component.ts ***!
  \************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewComponent = class ViewComponent {
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
            this.getUserById(this.id);
        });
    }
    getUserById(id) {
        this.api.getUserById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.userDetail = res["data"];
            }
        });
    }
};
ViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/user/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/cooldash/pages/user/view/view.component.scss")).default]
    })
], ViewComponent);



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module-es2015.js.map