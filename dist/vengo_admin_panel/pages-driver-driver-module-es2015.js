(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-driver-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <div class=\"tittle_outer\">\n        <div class=\"user_title\">\n          <div class=\"user_title_inner\">\n            <h6 i18n=\"@@Add_Driver\" class=\"m-0 text-black\" *ngIf=\"!id\">\n              Add Driver\n            </h6>\n            <h6 i18n=\"@@Edit_Driver\" class=\"m-0 text-black\" *ngIf=\"id\">\n              Edit Driver\n            </h6>\n          </div>\n          <div class=\"user_add_button\">\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n              <span i18n=\"@@Back\" class=\"fas fa-arrow-left\"></span> Back\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body add_driver_outer\">\n      <form [formGroup]=\"driverForm\">\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label i18n=\"@@First_Name\" for=\"title\">First Name</label>\n                <div class=\"input-group\">\n                  <input\n                    type=\"text\"\n                    id=\"name\"\n                    class=\"form-control\"\n                    formControlName=\"firstName\"\n                    placeholder=\"\"\n                  />\n                </div>\n                <div\n                  *ngIf=\"submitted && driverForm.controls.firstName.errors\"\n                  class=\"invalid-feedback\"\n                >\n                  <div\n                    i18n=\"@@First_Name_Required\"\n                    *ngIf=\"driverForm.controls.firstName.errors.required\"\n                  >\n                    First Name is required\n                  </div>\n                  <div\n                    i18n=\"@@First_Name_3_chars\"\n                    *ngIf=\"driverForm.controls.firstName.errors.minlength\"\n                  >\n                    First Name must be at least 3 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@First_Name_max_16_chars\"\n                    *ngIf=\"driverForm.controls.firstName.errors.maxlength\"\n                  >\n                    First Name can be max 16 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@Invalid_chars\"\n                    *ngIf=\"driverForm.controls.firstName.errors.pattern\"\n                  >\n                    Invalid character.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label i18n=\"@@Last_Name\" for=\"title\">Last Name</label>\n                <div class=\"input-group\">\n                  <input\n                    type=\"text\"\n                    id=\"name\"\n                    class=\"form-control\"\n                    formControlName=\"lastName\"\n                    placeholder=\"\"\n                  />\n                </div>\n                <div\n                  *ngIf=\"submitted && driverForm.controls.lastName.errors\"\n                  class=\"invalid-feedback\"\n                >\n                  <div\n                    i18n=\"@@Last_Name_Required\"\n                    *ngIf=\"driverForm.controls.lastName.errors.required\"\n                  >\n                    Last Name is required\n                  </div>\n                  <div\n                    i18n=\"@@Last_Name_3_chars\"\n                    *ngIf=\"driverForm.controls.lastName.errors.minlength\"\n                  >\n                    Last Name must be at least 3 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@Last_Name_max_16\"\n                    *ngIf=\"driverForm.controls.lastName.errors.maxlength\"\n                  >\n                    Last Name can be max 16 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@Invalid_chars\"\n                    *ngIf=\"driverForm.controls.lastName.errors.pattern\"\n                  >\n                    Invalid character.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@Email\" for=\"title\">Email</label>\n            <div class=\"input-group\">\n              <input\n                type=\"text\"\n                id=\"name\"\n                class=\"form-control\"\n                formControlName=\"email\"\n                placeholder=\"\"\n              />\n            </div>\n            <div\n              *ngIf=\"submitted && driverForm.controls.email.errors\"\n              class=\"invalid-feedback\"\n            >\n              <div\n                i18n=\"@@Email_required\"\n                *ngIf=\"driverForm.controls.email.errors.required\"\n              >\n                Email is required\n              </div>\n              <div\n                i18n=\"@@Email_not_valid\"\n                *ngIf=\"driverForm.controls.email.errors.pattern\"\n              >\n                Email is not valid\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\" *ngIf=\"!id\">\n            <label i18n=\"@@Password\" for=\"category\">Password</label>\n            <div class=\"input-group\">\n              <input\n                type=\"password\"\n                id=\"name\"\n                class=\"form-control\"\n                formControlName=\"password\"\n                placeholder=\"\"\n              />\n            </div>\n            <div\n              *ngIf=\"submitted && driverForm.controls.password.errors\"\n              class=\"invalid-feedback\"\n            >\n              <div\n                i18n=\"@@Password_required\"\n                *ngIf=\"driverForm.controls.password.errors.required\"\n              >\n                Password is required\n              </div>\n              <div\n                i18n=\"@@Password_min_8\"\n                *ngIf=\"driverForm.controls.password.errors.minlength\"\n              >\n                Password must be atleast 8 characters\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\" formGroupName=\"address\">\n            <label for=\"category\" i18n=\"@@Invalid_chars\">Address</label>\n            <div class=\"input-group\">\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"name\"\n                formControlName=\"location\"\n                placeholder=\"\"\n                ngx-google-places-autocomplete\n                #placesRef=\"ngx-places\"\n                (onAddressChange)=\"handleAddress($event)\"\n              />\n            </div>\n            <div\n              *ngIf=\"\n                submitted &&\n                driverForm.controls['address'].get('location').errors\n              \"\n              class=\"invalid-feedback\"\n            >\n              <div\n                i18n=\"@@Address_Required\"\n                *ngIf=\"\n                  driverForm.controls['address'].get('location').errors.required\n                \"\n              >\n                Address is required\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" formGroupName=\"address\">\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@Street\" for=\"category\">Street</label>\n            <div class=\"input-group\">\n              <input\n                type=\"text\"\n                id=\"name\"\n                class=\"form-control\"\n                formControlName=\"address\"\n                placeholder=\"\"\n              />\n            </div>\n            <div\n              *ngIf=\"\n                submitted &&\n                driverForm.controls['address'].get('address').errors\n              \"\n              class=\"invalid-feedback\"\n            >\n              <div\n                i18n=\"@@Street_Required\"\n                *ngIf=\"\n                  driverForm.controls['address'].get('address').errors.required\n                \"\n              >\n                Street is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@Zip_Code\" for=\"category\">Zip Code</label>\n            <div class=\"input-group\">\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"name\"\n                formControlName=\"zipcode\"\n                placeholder=\"\"\n              />\n            </div>\n            <div\n              *ngIf=\"\n                submitted &&\n                driverForm.controls['address'].get('zipcode').errors\n              \"\n              class=\"invalid-feedback\"\n            >\n              <div\n                i18n=\"@@Zip_Code_Required\"\n                *ngIf=\"\n                  driverForm.controls['address'].get('zipcode').errors.required\n                \"\n              >\n                Zip Code is required\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@Phone_Number\" for=\"category\">Phone Number</label>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"login_email country_code_div\">\n                  <div\n                    class=\"loginmail_input\"\n                    *ngIf=\"countryCodes && countryCodes.length > 0\"\n                  >\n                    <ngx-select-dropdown\n                      (change)=\"selectionChanged1($event)\"\n                      formControlName=\"countryCode\"\n                      [config]=\"config1\"\n                      [options]=\"countryCodes\"\n                    >\n                    </ngx-select-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"input-group\">\n                  <input\n                    type=\"text\"\n                    id=\"name\"\n                    class=\"form-control\"\n                    formControlName=\"phone\"\n                    placeholder=\"\"\n                  />\n                </div>\n                <div\n                  *ngIf=\"submitted && driverForm.controls.phone.errors\"\n                  class=\"invalid-feedback\"\n                >\n                  <div\n                    i18n=\"@@Phone_Number_Required\"\n                    *ngIf=\"driverForm.controls.phone.errors.required\"\n                  >\n                    Phone Number is required\n                  </div>\n                  <div\n                    i18n=\"@@Phone_number_min_7\"\n                    *ngIf=\"driverForm.controls.phone.errors.minlength\"\n                  >\n                    Phone Number must be at least 7 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@phone_number_max_15\"\n                    *ngIf=\"driverForm.controls.phone.errors.maxlength\"\n                  >\n                    Phone Number can be max 15 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@phone_not_valid\"\n                    *ngIf=\"driverForm.controls.phone.errors.pattern\"\n                  >\n                    Phone Number is not valid.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\" formGroupName=\"emergencyPhone\">\n            <label i18n=\"@@Invalid_chars\" for=\"category\"\n              >Emergency Phone Number</label\n            >\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"login_email country_code_div\">\n                  <div\n                    class=\"loginmail_input\"\n                    *ngIf=\"countryCodes && countryCodes.length > 0\"\n                  >\n                    <ngx-select-dropdown\n                      (change)=\"selectionChanged2($event)\"\n                      formControlName=\"countryCode\"\n                      [config]=\"config2\"\n                      [options]=\"countryCodes\"\n                    >\n                    </ngx-select-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"input-group\">\n                  <input\n                    type=\"text\"\n                    id=\"name\"\n                    class=\"form-control\"\n                    formControlName=\"phone\"\n                    placeholder=\"\"\n                  />\n                </div>\n                <div\n                  *ngIf=\"\n                    submitted &&\n                    driverForm.controls['emergencyPhone'].get('phone').errors\n                  \"\n                  class=\"invalid-feedback\"\n                >\n                  <div\n                    i18n=\"@@Phone_Number_Required\"\n                    *ngIf=\"\n                      driverForm.controls['emergencyPhone'].get('phone').errors\n                        .required\n                    \"\n                  >\n                    Phone Number is required\n                  </div>\n                  <div\n                    i18n=\"@@Phone_number_min_7\"\n                    *ngIf=\"\n                      driverForm.controls['emergencyPhone'].get('phone').errors\n                        .minlength\n                    \"\n                  >\n                    Phone Number must be at least 7 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@phone_number_max_15\"\n                    *ngIf=\"\n                      driverForm.controls['emergencyPhone'].get('phone').errors\n                        .maxlength\n                    \"\n                  >\n                    Phone Number can be max 15 characters long.\n                  </div>\n                  <div\n                    i18n=\"@@phone_not_valid\"\n                    *ngIf=\"\n                      driverForm.controls['emergencyPhone'].get('phone').errors\n                        .pattern\n                    \"\n                  >\n                    Phone Number not valid.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@user_type\" for=\"types\">User Type</label>\n            <div class=\"input-group\">\n              <select\n                [(ngModel)]=\"byDefaultType\"\n                class=\"form-control\"\n                formControlName=\"verticalType\"\n                *ngIf=\"type\"\n                (change)=\"onChange($event)\"\n              >\n                <option i18n=\"@@choose_here\" value=\"\" selected disabled hidden>\n                  Choose here\n                </option>\n                <option *ngFor=\"let data of type\" [value]=\"data.value\">\n                  {{ data.name }}\n                </option>\n              </select>\n              <div\n                *ngIf=\"submitted && driverForm.controls.verticalType.errors\"\n                class=\"invalid-feedback\"\n              >\n                <div\n                  i18n=\"@@type_required\"\n                  *ngIf=\"driverForm.controls.verticalType.errors.required\"\n                >\n                  Type is required\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@Vehical_type\" for=\"types\">Vehicle Type</label>\n            <div class=\"input-group\">\n              <select\n                class=\"form-control\"\n                formControlName=\"vehicleTypeId\"\n                *ngIf=\"vehicleTypes\"\n              >\n                <option i18n=\"@@choose_here\" value=\"\" selected disabled hidden>\n                  Choose here\n                </option>\n                <option *ngFor=\"let type of vehicleTypes\" [value]=\"type.id\">\n                  {{ type.name }}\n                </option>\n              </select>\n              <div\n                *ngIf=\"submitted && driverForm.controls.vehicleTypeId.errors\"\n                class=\"invalid-feedback\"\n              >\n                <div\n                  i18n=\"@@vehical_type_required\"\n                  *ngIf=\"driverForm.controls.vehicleTypeId.errors.required\"\n                >\n                  Vehicle Type is required\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@vehical_name\" for=\"price\">Vehicle Name</label>\n            <div class=\"input-group\">\n              <input\n                type=\"text\"\n                id=\"vehicleName\"\n                class=\"form-control\"\n                formControlName=\"vehicleName\"\n                placeholder=\"\"\n              />\n              <div\n                *ngIf=\"submitted && driverForm.controls.vehicleName.errors\"\n                class=\"invalid-feedback\"\n              >\n                <div\n                  i18n=\"@@vehical_name_required\"\n                  *ngIf=\"driverForm.controls.vehicleName.errors.required\"\n                >\n                  Vehicle Name is required\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@vehical_number\" for=\"price\">Vehicle Number</label>\n            <div class=\"input-group\">\n              <input\n                type=\"text\"\n                id=\"vehicleNumber\"\n                class=\"form-control\"\n                formControlName=\"vehicleNumber\"\n                placeholder=\"\"\n              />\n              <div\n                *ngIf=\"submitted && driverForm.controls.vehicleNumber.errors\"\n                class=\"invalid-feedback\"\n              >\n                <div\n                  i18n=\"@@vehical_no_required\"\n                  *ngIf=\"driverForm.controls.vehicleNumber.errors.required\"\n                >\n                  Vehicle Number is required\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label i18n=\"@@Image\" for=\"types\">Image</label>\n            <div class=\"usr_profile_img\">\n              <div class=\"usr_profile_imgbx\">\n                <div class=\"user_img\">\n                  <figure *ngIf=\"driverImage\">\n                    <img\n                      style=\"height: 150px; width: 150px\"\n                      [src]=\"driverImage\"\n                    />\n                  </figure>\n                </div>\n              </div>\n              <div class=\"user_profile_edit\">\n                <input\n                  type=\"file\"\n                  accept=\"image/*\"\n                  (change)=\"profilePic($event)\"\n                />\n              </div>\n              <div\n                i18n=\"@@image_required\"\n                *ngIf=\"submitted && !driverImage\"\n                class=\"invalid-feedback\"\n              >\n                Image is required\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group form-actions add_edit\">\n          <button\n            i18n=\"@@Add\"\n            type=\"submit\"\n            class=\"btn btn-sm btn-success\"\n            *ngIf=\"!id\"\n            (click)=\"submit()\"\n          >\n            Add\n          </button>\n          <button\n            i18n=\"@@Update\"\n            type=\"submit\"\n            class=\"btn btn-sm btn-success\"\n            *ngIf=\"id\"\n            (click)=\"update()\"\n          >\n            Update\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver-document/driver-document.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver-document/driver-document.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"documents\">\n    <div class=\"card shadow mb-4\">\n\n        <div class=\"card-header py-3\">\n            <div class=\"tittle_outer\">\n                <div class=\" user_title\">\n                   <div class=\"user_title_inner\"> <h6 class=\"m-0 text-black\">Documents</h6></div>\n                   <div class=\"user_add_button\"> \n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\n                        <span class=\"fas fa-arrow-left\"></span> Back\n                    </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"card-body\">\n            <ng-container *ngIf=\"documents && documents.length>0\">\n                <div class=\"row\">\n                    <ng-container *ngFor=\"let data of documents; let i = index\">\n                        <div class=\"col-xl-3 col-lg-6\">\n                            <div class=\"card shadow mb-4\">\n                                <!-- Card Header - Dropdown -->\n                                <div\n                                    class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                                    <h6 class=\"m-0 font-weight-bold text-primary\">\n                                    <ng-container *ngIf=\"data.name == 'Licence'\">Licence\n                                    </ng-container>\n                                     <ng-container *ngIf=\"data.name == 'License'\">License\n                                    </ng-container>\n                                          <ng-container *ngIf=\"data.name == 'ID'\">ID\n                                    </ng-container>\n                                        <ng-container *ngIf=\"data.name == 'VehiclePhoto'\">Vehicle Photo\n                                    </ng-container>\n                                          <ng-container *ngIf=\"data.name == 'VehicleDocument'\">Vehicle Document\n                                    </ng-container>\n                                    </h6>\n                                </div>\n                                <!-- Card Body -->\n                                <div class=\"card-body\" *ngIf=\"data._id\">\n                                    <div class=\"chart-pie pt-4 pb-2\">\n                                        <ng-container *ngIf=\"data.image\">\n                                            <img [src]=\"comm.imageUrl + data.image\"\n                                                style=\"height: 185px; width: 100%;\" />\n                                        </ng-container>\n                                    </div>\n                                    <div *ngIf=\"data.status == 0\">\n                                        <button class=\"btn btn-info  mr-1 mt-2\" (click)=\"approved(data)\">\n                                            Approved\n                                        </button>\n                                        <button class=\"btn btn-danger mt-2\" (click)=\"disapproved(data)\">\n                                            Disapproved\n                                        </button>\n                                    </div>\n                                    <div *ngIf=\"data.status == 1\">\n                                        <button class=\"btn btn-info  mr-1\" disabled>\n                                            Approved\n                                        </button>\n                                    </div>\n                                    <div *ngIf=\"data.status == 2\">\n                                        <button class=\"btn btn-danger  mr-1\" disabled>\n                                            Disapproved\n                                        </button>\n                                    </div>\n                                    <div class=\"mt-2 pb-2\">\n                                        <button class=\"btn btn-success  mr-1\"\n                                            (click)=\"changeDocument(data)\">\n                                            Change Document\n                                        </button>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"!data._id\">\n                                    <div class=\"card-body\">\n                                        <div class=\"chart-pie pt-4 pb-2\">\n                                            <figure *ngIf=\"data.image\">\n                                                <img style=\"height: 185px; width: 100%;\" [src]=\"data.image\" />\n                                            </figure>\n                                            <div class=\"user_profile_edit\">\n                                                <input type=\"file\" accept=\"image/*\"\n                                                    (change)=\"profilePic($event, data, i )\" />\n                                            </div>\n                                        </div>\n                                        <div>\n                                            <button class=\"mat-raised-button mat-primary  mr-1\"\n                                                (click)=\"addDocuments(data, i)\">\n                                                Add Document\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <h4 *ngIf=\"documents && documents.length == 0\" class=\"text-center\">\n                        No documents found.\n                    </h4>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"documents && documents.length==0\">\n                <div class=\"row\">\n                    <div class=\"col-xl-3 col-lg-4\" *ngFor=\"let data of doucmentList; let i = index\">\n                        <div class=\"card shadow mb-4\">\n                            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                                <h6 class=\"m-0 font-weight-bold text-primary\">\n                                      <ng-container *ngIf=\"data.name == 'Licence'\">Licence\n                                    </ng-container>\n                                              <ng-container *ngIf=\"data.name == 'License'\">License\n                                    </ng-container>\n                                          <ng-container *ngIf=\"data.name == 'ID'\">ID\n                                    </ng-container>\n                                        <ng-container *ngIf=\"data.name == 'VehiclePhoto'\">Vehicle Photo\n                                    </ng-container>\n                                          <ng-container *ngIf=\"data.name == 'VehicleDocument'\">Vehicle Document\n                                    </ng-container>\n                                </h6>\n                            </div>\n\n                            <div class=\"card-body\">\n                                <div class=\"chart-pie pt-4 pb-2\">\n                                    <figure *ngIf=\"data.image\">\n                                        <img style=\"height: 185px; width: 100%;\" [src]=\"data.image\" />\n                                    </figure>\n                                    <div class=\"user_profile_edit\">\n                                        <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event, data, i )\" />\n                                    </div>\n                                </div>\n                                <div>\n                                    <button class=\"btn btn-success  mr-1\" (click)=\"addDocuments(data, i)\">\n                                        Add Document\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver/driver.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver/driver.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <div class=\"tittle_outer\">\n        <div class=\"user_title\">\n          <div class=\"user_title_inner\">\n            <h6 i18n=\"@@drivers\" class=\"m-0 text-black\">Drivers</h6>\n          </div>\n          <div class=\"user_add_button\">\n            <button i18n=\"@@add_driver\" class=\"btn btn-primary\" (click)=\"downloadCsv()\">\n              <span class=\"fas fa-download\"></span> Download CSV\n            </button>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"filters_outer\">\n        <div class=\"user_filter\">\n          <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" i18n=\"@@search_firstname\"\n            placeholder=\"Search First Name and Email\" />\n        </div>\n        <div class=\"user_serch_btn\">\n          <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" i18n=\"@@Search\" (click)=\"searchDriver()\">\n            Search\n          </button>\n          <button type=\"reset\" i18n=\"@@Reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">\n            Reset\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body table-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th i18n=\"@@Image\">Image</th>\n              <th i18n=\"@@Name\">Name</th>\n              <th i18n=\"@@Email\">Email</th>\n              <th i18n=\"@@Phone_Number\" style=\"min-width: 8rem\">\n                Phone Number\n              </th>\n              <th i18n=\"@@E_Phone_Number\" style=\"min-width: 10rem\">\n                E-Phone Number\n              </th>\n              <th i18n=\"@@Document_status\" style=\"min-width: 8rem\">\n                Document Status\n              </th>\n              <th i18n=\"@@Driver_type\" style=\"min-width: 8rem\">Driver Type</th>\n              <th i18n=\"@@Vehicle_Name\" style=\"min-width: 8rem\">\n                Vehicle Name\n              </th>\n              <th i18n=\"@@Vehical_Number\" style=\"min-width: 8rem\">\n                Vehicle Number\n              </th>\n              <th i18n=\"@@Status\" style=\"min-width: 6rem\">Status</th>\n              <th i18n=\"@@Rating\">Rating</th>\n              <th i18n=\"@@Action\" style=\"min-width: 10rem\">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of driverList | paginate: config; let i = index\">\n              <td>{{ (currentPage - 1) * 25 + i + 1 }}</td>\n              <td>\n                <ng-container *ngIf=\"item.profilePic; else noImage\">\n                  <img src=\"{{ imageUrl }}{{ item.profilePic }}\" width=\"70px\" height=\"70px\" />\n                </ng-container>\n                <ng-template #noImage>\n                  <img src=\"assets/img/default-user.png\" width=\"70px\" height=\"70px\" />\n                </ng-template>\n              </td>\n              <td>{{ item.firstName }} {{ item.lastName }}</td>\n              <td>{{ item.email }}</td>\n              <td>{{ item.countryCode }} {{ item.phone }}</td>\n              <ng-container *ngIf=\"item.emergencyPhone; else noNumber\">\n                <td>\n                  {{ item.emergencyPhone.countryCode }}\n                  {{ item.emergencyPhone.phone }}\n                </td>\n              </ng-container>\n              <ng-template #noNumber>\n                <td>-</td>\n              </ng-template>\n              <td *ngIf=\"item.profileStatus == 0\">Disapproved</td>\n              <td *ngIf=\"item.profileStatus == 1\">Approved</td>\n              <td *ngIf=\"item.verticalType == 1\">Delivery</td>\n              <td *ngIf=\"item.verticalType == 2\">Taxi</td>\n              <td *ngIf=\"item.verticalType == 3\">Shuttle</td>\n\n              <td>{{ item.vehicleName }}</td>\n              <td>{{ item.vehicleNumber }}</td>\n              <td>\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\"\n                  (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\">\n                </ui-switch>\n              </td>\n              <td>\n                <div class=\"cont\">\n                  <div class=\"stars\">\n                    <ngx-star-rating [(ngModel)]=\"item.rating\" [id]=\"'rating'\" [disabled]=\"true\"></ngx-star-rating>\n                  </div>\n                </div>\n                <!-- <star-rating-comp [starType]=\"'icon'\" [rating]=\"5\"></star-rating-comp> -->\n              </td>\n\n              <td>\n                <div class=\"product_action\">\n                  <button class=\"btn btn-warning mr-1\" title=\"View Driver\" (click)=\"onViewDriver(item)\" title=\"View\">\n                    <span class=\"fas fa-fw fa-eye\"></span>\n                  </button>\n                  <button class=\"btn btn-success mr-1\" title=\"Edit Driver\" (click)=\"onEditDriver(item)\" title=\"Edit\">\n                    <span class=\"fas fa-fw fa-edit\"></span>\n                  </button>\n                  <button class=\"btn btn-primary mr-1\" title=\"Driver Documents\" (click)=\"onViewDocument(item)\">\n                    <span class=\"fas fa-fw fa-file\"></span>\n                  </button>\n                  <button class=\"btn btn-danger mr-1\" title=\"Delete Driver\" (click)=\"deleteDriver(item)\">\n                    <span class=\"fas fa-fw fa-trash\"></span>\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div *ngIf=\"loader\" class=\"loader\"></div>\n        <h4 *ngIf=\"driverList && driverList.length == 0 && !loader\" class=\"text-center\">\n          No records found.\n        </h4>\n      </div>\n      <div *ngIf=\"driverList.length != 0 && !loader\" class=\"pagination_ui\">\n        <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\n        </pagination-controls>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/view-driver/view-driver.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/view-driver/view-driver.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <div class=\"tittle_outer\">\n        <div class=\"user_title\">\n          <div class=\"user_title_inner\">\n            <h6 class=\"m-0 text-black\">View Driver</h6>\n          </div>\n          <div class=\"user_add_button\">\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\n              <span class=\"fas fa-arrow-left\"></span> Back\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\" *ngIf=\"driverDetails\">\n      <div *ngIf=\"driverDetails\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Driver Name</label>\n              <input\n                type=\"text\"\n                name=\"Name\"\n                value=\"{{ driverDetails.firstName }} {{\n                  driverDetails.lastName\n                }}\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Email</label>\n              <input\n                type=\"text\"\n                name=\"Email\"\n                value=\"{{ driverDetails.email }}\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Phone Number</label>\n              <input\n                type=\"text\"\n                name=\"Email\"\n                value=\"{{ driverDetails.countryCode }} {{\n                  driverDetails.phone\n                }}\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\" *ngIf=\"driverDetails.emergencyPhone\">\n            <div class=\"form-group\">\n              <label>Emergency Phone Number</label>\n              <input\n                type=\"text\"\n                name=\"Email\"\n                value=\"{{ driverDetails.emergencyPhone.countryCode }} {{\n                  driverDetails.emergencyPhone.phone\n                }}\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Address</label>\n              <textarea\n                type=\"text\"\n                name=\"address\"\n                class=\"form-control\"\n                disabled\n                *ngIf=\"driverDetails.address\"\n                >{{ driverDetails.address[\"location\"] }}\n                            </textarea\n              >\n            </div>\n          </div>\n          <div class=\"col-md-6\" *ngIf=\"driverDetails.address['zipcode']\">\n            <div class=\"form-group\">\n              <label>Zip Code</label>\n              <textarea\n                type=\"text\"\n                name=\"address\"\n                class=\"form-control\"\n                disabled\n                *ngIf=\"driverDetails.address\"\n                >{{ driverDetails.address[\"zipcode\"] }}\n                            </textarea\n              >\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Street</label>\n              <input\n                type=\"text\"\n                name=\"street\"\n                [value]=\"driverDetails.address['address']\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Vehicle Name</label>\n              <input\n                type=\"text\"\n                name=\"discount\"\n                [value]=\"driverDetails.vehicleName\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Vehicle Type</label>\n              <input\n                type=\"text\"\n                name=\"discount\"\n                [value]=\"driverDetails.vehicleTypeName\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Vehicle Number</label>\n              <input\n                type=\"text\"\n                name=\"discount\"\n                [value]=\"driverDetails.vehicleNumber\"\n                class=\"form-control\"\n                disabled\n              />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Profile Status</label>\n              <ng-container *ngIf=\"driverDetails.profileStatus == 0\">\n                <input\n                  type=\"text\"\n                  name=\"open-time\"\n                  value=\"Disapproved\"\n                  class=\"form-control\"\n                  disabled\n                />\n              </ng-container>\n              <ng-container *ngIf=\"driverDetails.profileStatus == 1\">\n                <input\n                  type=\"text\"\n                  name=\"open-time\"\n                  value=\"Approved\"\n                  class=\"form-control\"\n                  disabled\n                />\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Driver Type</label>\n              <ng-container *ngIf=\"driverDetails.verticalType == 1\">\n                <input\n                  type=\"text\"\n                  name=\"open-time\"\n                  value=\"Delivery\"\n                  class=\"form-control\"\n                  disabled\n                />\n              </ng-container>\n              <ng-container *ngIf=\"driverDetails.verticalType == 2\">\n                <input\n                  type=\"text\"\n                  name=\"open-time\"\n                  value=\"Taxi\"\n                  class=\"form-control\"\n                  disabled\n                />\n              </ng-container>\n              <ng-container *ngIf=\"driverDetails.verticalType == 3\">\n                <input\n                  type=\"text\"\n                  name=\"open-time\"\n                  value=\"Shuttle\"\n                  class=\"form-control\"\n                  disabled\n                />\n              </ng-container>\n            </div>\n          </div>\n          <div\n            class=\"col-md-12\"\n            *ngIf=\"\n              driverDetails.documents && driverDetails.documents.length > 0\n            \"\n          >\n            <div class=\"form-group\">\n              <label>Documents</label>\n              <div class=\"row\">\n                <div\n                  class=\"col-xl-3 col-lg-5\"\n                  *ngFor=\"let data of driverDetails.documents\"\n                >\n                  <div class=\"card shadow mb-4\">\n                    <!-- Card Header - Dropdown -->\n                    <div\n                      class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\"\n                    >\n                      <h6 class=\"m-0 font-weight-bold text-primary\">\n                        {{ data.name }}\n                      </h6>\n                    </div>\n                    <!-- Card Body -->\n                    <div class=\"card-body\">\n                      <div class=\"pt-4 pb-2\">\n                        <ng-container *ngIf=\"data.image\">\n                          <img\n                            [src]=\"comm.imageUrl + data.image\"\n                            style=\"height: 150px; width: 100%\"\n                          />\n                        </ng-container>\n                      </div>\n                      <div *ngIf=\"data.status == 1\">\n                        <button\n                          class=\"mat-raised-button mat-primary mr-1\"\n                          disabled\n                        >\n                          Approved\n                        </button>\n                      </div>\n                      <div *ngIf=\"data.status == 2\">\n                        <button\n                          class=\"mat-raised-button mat-primary mr-1\"\n                          disabled\n                        >\n                          Disapproved\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label>Image</label>\n              <div>\n                <ng-container *ngIf=\"driverDetails.profilePic; else noImage\">\n                  <img\n                    [src]=\"comm.imageUrl + driverDetails.profilePic\"\n                    style=\"height: 150px; width: 150px\"\n                  />\n                </ng-container>\n                <ng-template #noImage>\n                  <img\n                    src=\"assets/img/default-user.png\"\n                    style=\"height: 150px; width: 150px\"\n                  />\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\n::ng-deep .ngx-dropdown-container .ngx-dropdown-button {\n  min-height: 38px !important;\n}\n\n::ng-deep .ngx-dropdown-container button .nsdicon-angle-down {\n  top: 2px;\n}\n\n::ng-deep .ngx-dropdown-container .ngx-dropdown-list-container ul li {\n  padding: 3px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9kcml2ZXIvYWRkLWVkaXQtZHJpdmVyL2FkZC1lZGl0LWRyaXZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvZHJpdmVyL2FkZC1lZGl0LWRyaXZlci9hZGQtZWRpdC1kcml2ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREdJO0VBQ0ksMkJBQUE7QUNBUjs7QURFSTtFQUNJLFFBQUE7QUNBUjs7QURFSTtFQUNJLDJCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9kcml2ZXIvYWRkLWVkaXQtZHJpdmVyL2FkZC1lZGl0LWRyaXZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbn1cclxuXHJcbiA6Om5nLWRlZXAge1xyXG4gICAgLm5neC1kcm9wZG93bi1jb250YWluZXIgLm5neC1kcm9wZG93bi1idXR0b24ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiAubnNkaWNvbi1hbmdsZS1kb3duIHtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIC5uZ3gtZHJvcGRvd24tbGlzdC1jb250YWluZXIgdWwgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59XG5cbjo6bmctZGVlcCAubmd4LWRyb3Bkb3duLWNvbnRhaW5lciAubmd4LWRyb3Bkb3duLWJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmd4LWRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24gLm5zZGljb24tYW5nbGUtZG93biB7XG4gIHRvcDogMnB4O1xufVxuOjpuZy1kZWVwIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIC5uZ3gtZHJvcGRvd24tbGlzdC1jb250YWluZXIgdWwgbGkge1xuICBwYWRkaW5nOiAzcHggOHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddEditDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditDriverComponent", function() { return AddEditDriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");








let AddEditDriverComponent = class AddEditDriverComponent {
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
        this.countryStatus = true;
        this.byDefaultType = 1;
        this.updateAddrssStatus = false;
        this.type = [
            {
                name: "Food and Grocery Delivery",
                value: 1
            },
        ];
        this.countryStatus1 = false;
        this.countryStatus2 = false;
        this.setValues = data => {
            if (data) {
                this.driverForm.patchValue({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    countryCode: data.countryCode,
                    phone: data.phone,
                    vehicleName: data.vehicleName,
                    vehicleNumber: data.vehicleNumber,
                    email: data.email,
                    vehicleTypeId: data.vehicleTypeId,
                    verticalType: data.verticalType
                });
                if (data && data.emergencyPhone) {
                    this.driverForm.controls.emergencyPhone.patchValue({
                        phone: data.emergencyPhone.phone,
                        countryCode: data.emergencyPhone.countryCode
                    });
                }
                if (data && data.address) {
                    console.log(data.address);
                    this.driverForm.controls.address.patchValue({
                        location: data.address.location,
                        latitude: data.address.latitude,
                        address: data.address.address,
                        longitude: data.address.longitude,
                        zipcode: data.address.zipcode
                    });
                    this.updateAddress = this.driverForm.controls['address'].get('location').value;
                }
                if (data.profilePic) {
                    this.driverImage = this.comm.imageUrl + data.profilePic;
                }
            }
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            if (this.id != undefined) {
                this.getDriverById(this.id);
            }
        });
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder();
        });
        this.driverForm = this.formBuilder.group({
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
            verticalType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, ,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
            emergencyPhone: this.formBuilder.group({
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]),
                countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            }),
            vehicleTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            address: this.formBuilder.group({
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            })
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
                this.driverForm.controls["countryCode"].setValue(this.countryCodes[0]);
                this.driverForm.controls['emergencyPhone'].get('countryCode').setValue(this.countryCodes[0]);
            }
        });
        if (!this.id) {
            this.driverForm.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]);
            this.driverForm.get('password').updateValueAndValidity();
            this.getAllVerticleType(this.byDefaultType);
        }
    }
    getDriverById(id) {
        this.api.getDriverById(id).subscribe(res => {
            if (res["response"]["success"]) {
                this.driverDetail = res["data"];
                this.getAllVerticleType(this.driverDetail.verticalType);
                this.setValues(this.driverDetail);
                console.log(this.driverDetail);
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
                    this.driverImage = event.target.result;
                };
            }
        });
    }
    onChange(event) {
        this.getAllVerticleType(event.target.value);
    }
    getAllVerticleType(type) {
        const list = [];
        this.api.getAllVerticleTypes(type).subscribe(response => {
            if (response["response"]["success"]) {
                this.vehicleTypes = response["data"];
            }
        });
    }
    selectionChanged1(event) {
        if (event.value) {
            this.countryStatus1 = true;
        }
        else {
            this.countryStatus1 = false;
            this.driverForm.controls["countryCode"].setValue("");
        }
    }
    selectionChanged2(event) {
        if (event.value) {
            this.countryStatus2 = true;
        }
        else {
            this.countryStatus2 = false;
            this.driverForm.controls['emergencyPhone'].get('countryCode').setValue("");
        }
    }
    update() {
        this.submitted = true;
        if (this.countryStatus1) {
            this.driverForm.controls["countryCode"].setValue(this.driverForm.controls["countryCode"].value.Code);
        }
        if (this.countryStatus2) {
            this.driverForm.controls["emergencyPhone"].value.countryCode =
                this.driverForm.controls["emergencyPhone"].value.countryCode.Code;
        }
        if ((this.driverForm.value.countryCode &&
            this.driverForm.value.countryCode.length > 0) || (this.driverForm.controls['emergencyPhone'].get('countryCode') &&
            this.driverForm.controls['emergencyPhone'].get('countryCode').value.length > 0)) {
            if (this.driverForm.controls['address'].get('location').value === this.updateAddress) {
                this.editAddressUpdate();
            }
            else if ((this.updateAddrssStatus) && (this.driverForm.controls['address'].get('latitude').value !== "" && this.driverForm.controls['address'].get('location').value !== null) && (this.driverForm.controls['address'].get('longitude').value !== "" && this.driverForm.controls['address'].get('longitude').value !== null)) {
                this.editAddressUpdate();
            }
            else if ((this.driverForm.controls['address'].get('location').value) && (this.updateAddrssStatus == false)) {
                this.toastr.errorToastr("Please select a valid address from suggestions.");
            }
        }
        else {
            this.toastr.errorToastr("Please select the country code");
        }
    }
    editAddressUpdate() {
        if (this.driverForm.valid) {
            this.countryStatus1 = false;
            this.countryStatus2 = false;
            var data = this.driverForm.value;
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("pic", this.File);
            this.api.updateDriver(formData, this.id).subscribe(res => {
                if (res["response"]["success"]) {
                    this.toastr.successToastr(res["response"]["message"]);
                    this.router.navigate(["/driver/driver"]);
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
    handleAddress(address) {
        this.updateAddrssStatus = true;
        if (address.formatted_address) {
            this.address = {
                address: address.formatted_address,
                latitude: address.geometry.location.lat(),
                longitude: address.geometry.location.lng()
            };
            address.address_components.forEach(key => {
                console.log(key);
                address.address_components.forEach(key => {
                    if (key.types[0] == 'locality') {
                        this.address['location'] = (key.long_name);
                    }
                    if (key.types[0] === 'postal_code') {
                        this.address['zipcode'] = key.long_name;
                    }
                });
            });
            this.driverForm.controls['address'].get('location').setValue(address.formatted_address);
            this.driverForm.controls['address'].get('zipcode').setValue(this.address['zipcode']);
            this.driverForm.controls['address'].get('longitude').setValue(this.address['longitude']);
            this.driverForm.controls['address'].get('latitude').setValue(this.address['longitude']);
        }
    }
    submit() {
        console.log(this.driverForm.value);
        this.submitted = true;
        this.driverForm.controls["countryCode"].setValue(this.driverForm.controls["countryCode"].value.Code);
        this.driverForm.controls['emergencyPhone'].get('countryCode').setValue(this.driverForm.controls["emergencyPhone"].value.countryCode.Code);
        if ((this.driverForm.value.countryCode &&
            this.driverForm.value.countryCode.length > 0 &&
            this.driverForm.value.phone) || (this.driverForm.controls['emergencyPhone'].get('countryCode') &&
            this.driverForm.controls['emergencyPhone'].get('countryCode').value.length > 0 &&
            this.driverForm.controls['emergencyPhone'].get('phone'))) {
            if (this.address && this.updateAddrssStatus) {
                if (this.submitted && this.driverForm.valid) {
                    var data = this.driverForm.value;
                    console.log(this.driverForm.value);
                    let formData = new FormData();
                    formData.append("data", JSON.stringify(data));
                    formData.append("pic", this.File);
                    this.api.adddriver(formData).subscribe(res => {
                        if (res["response"]["success"]) {
                            this.toastr.successToastr("Driver register successfully");
                            this.router.navigate(["/driver/driver"]);
                        }
                        else {
                            this.toastr.errorToastr(res["response"]["message"]);
                        }
                    });
                }
            }
            else if (this.driverForm['controls'].address.get('location').value && (this.updateAddrssStatus == false)) {
                this.toastr.errorToastr("Please select a valid address from suggestions.");
            }
        }
        else {
            this.toastr.errorToastr("Please select the country code");
        }
    }
};
AddEditDriverComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] }
];
AddEditDriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-driver',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit-driver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit-driver.component.scss */ "./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.scss")).default]
    })
], AddEditDriverComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/driver/driver-document/driver-document.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/driver-document/driver-document.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL2RyaXZlci9kcml2ZXItZG9jdW1lbnQvZHJpdmVyLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/driver/driver-document/driver-document.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/driver-document/driver-document.component.ts ***!
  \************************************************************************************/
/*! exports provided: DriverDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDocumentComponent", function() { return DriverDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let DriverDocumentComponent = class DriverDocumentComponent {
    constructor(router, route, comm, api, toastr, popupService) {
        this.router = router;
        this.route = route;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.popupService = popupService;
        this.documents = [];
        this.history = window.history;
        this.doucmentList = [
            {
                name: "Licence",
                image: "assets/dummy.png"
            },
            {
                name: "ID",
                image: "assets/dummy.png"
            },
            {
                name: "VehiclePhoto",
                image: "assets/dummy.png"
            },
            {
                name: "VehicleDocument",
                image: "assets/dummy.png"
            }
        ];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            if (this.id) {
                this.getDriverDocument(this.id);
            }
        });
    }
    getDriverDocument(id) {
        this.api.getDriverDocument(id).subscribe(res => {
            if (res["response"]["success"]) {
                var document = res["data"];
                console.log(document);
                if (document && document.length == 4) {
                    this.documents = res["data"];
                }
                else if (document && document.length == 0) {
                    this.documents = this.doucmentList;
                }
                else {
                    this.documents = document;
                    const obj1 = document.find(o => o.name === 'ID');
                    if (obj1 == undefined) {
                        var d = {
                            name: "ID",
                            image: "assets/dummy.png"
                        };
                        this.documents.push(d);
                    }
                    const obj2 = document.find(o => o.name === 'Licence');
                    if (obj2 == undefined) {
                        var d = {
                            name: "Licence",
                            image: "assets/dummy.png"
                        };
                        this.documents.push(d);
                    }
                    const obj3 = document.find(o => o.name === 'VehiclePhoto');
                    if (obj3 == undefined) {
                        var d = {
                            name: "VehiclePhoto",
                            image: "assets/dummy.png"
                        };
                        this.documents.push(d);
                    }
                    const obj4 = document.find(o => o.name === 'VehicleDocument');
                    if (obj4 == undefined) {
                        var d = {
                            name: "VehicleDocument",
                            image: "assets/dummy.png"
                        };
                        this.documents.push(d);
                    }
                }
            }
        });
    }
    approved(item) {
        var data = {
            updateId: item.id,
            driverId: this.id,
            status: 1
        };
        this.updateDocument(data);
    }
    disapproved(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: "Are you sure?",
            text: "Please Tell us a reason ",
            icon: "warning",
            input: 'text',
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            debugger;
            if (result.value) {
                var data = {
                    updateId: item.id,
                    driverId: this.id,
                    status: 2,
                    reason: result.value
                };
                // let formData = new FormData();
                // formData.append("data", JSON.stringify(data));
                this.updateDocument(data);
            }
        });
        //this.updateDocument(data);
    }
    updateDocument(data) {
        this.api.verifyDocument(data).subscribe(res => {
            if (res["response"]["success"]) {
                this.toastr.successToastr(res["response"]["message"]);
                this.getDriverDocument(this.id);
            }
        });
    }
    changeDocument(data) {
        this.popupService.editDocument(data).subscribe(res => {
            if (res == 'yes') {
                console.log(data);
                this.getDriverDocument(this.id);
            }
        });
    }
    profilePic(event, data, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (index == 0) {
                this.File = event.target.files[0];
            }
            else if (index == 1) {
                this.File1 = event.target.files[0];
            }
            else if (index == 2) {
                this.File2 = event.target.files[0];
            }
            else if (index == 3) {
                this.File3 = event.target.files[0];
            }
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                    data.image = event.target.result;
                };
            }
        });
    }
    addDocuments(data1, index) {
        var data = {
            name: data1.name
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        if (index == 0) {
            formData.append("image", this.File);
        }
        else if (index == 1) {
            formData.append("image", this.File1);
        }
        else if (index == 2) {
            formData.append("image", this.File2);
        }
        else if (index == 3) {
            formData.append("image", this.File3);
        }
        this.api.addDriverDocuments(formData, this.id).subscribe(res => {
            if (res["response"]["success"]) {
                this.toastr.successToastr(res["response"]["message"]);
                setTimeout(() => {
                    this.getDriverDocument(this.id);
                }, 0);
            }
        });
    }
};
DriverDocumentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"] },
    { type: _services_popup_popup_service__WEBPACK_IMPORTED_MODULE_6__["PopupService"] }
];
DriverDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-driver-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver-document.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver-document/driver-document.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver-document.component.scss */ "./src/app/cooldash/pages/driver/driver-document/driver-document.component.scss")).default]
    })
], DriverDocumentComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/driver/driver-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/driver-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DriverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRoutingModule", function() { return DriverRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _driver_driver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver/driver.component */ "./src/app/cooldash/pages/driver/driver/driver.component.ts");
/* harmony import */ var _driver_document_driver_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-document/driver-document.component */ "./src/app/cooldash/pages/driver/driver-document/driver-document.component.ts");
/* harmony import */ var _view_driver_view_driver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-driver/view-driver.component */ "./src/app/cooldash/pages/driver/view-driver/view-driver.component.ts");
/* harmony import */ var _add_edit_driver_add_edit_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-driver/add-edit-driver.component */ "./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.ts");




 // <-- import the module

 //
const routes = [
    {
        path: "",
        data: {
            title: "Driver"
        },
        children: [
            {
                path: "driver",
                component: _driver_driver_component__WEBPACK_IMPORTED_MODULE_3__["DriverComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "document/:id",
                component: _driver_document_driver_document_component__WEBPACK_IMPORTED_MODULE_4__["DriverDocumentComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "add",
                component: _add_edit_driver_add_edit_driver_component__WEBPACK_IMPORTED_MODULE_6__["AddEditDriverComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "edit/:id",
                component: _add_edit_driver_add_edit_driver_component__WEBPACK_IMPORTED_MODULE_6__["AddEditDriverComponent"],
                data: {
                    title: ""
                }
            },
            {
                path: "view/:id",
                component: _view_driver_view_driver_component__WEBPACK_IMPORTED_MODULE_5__["ViewDriverComponent"],
                data: {
                    title: ""
                }
            }
        ]
    }
];
let DriverRoutingModule = class DriverRoutingModule {
};
DriverRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DriverRoutingModule);



/***/ }),

/***/ "./src/app/cooldash/pages/driver/driver.module.ts":
/*!********************************************************!*\
  !*** ./src/app/cooldash/pages/driver/driver.module.ts ***!
  \********************************************************/
/*! exports provided: DriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverModule", function() { return DriverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _driver_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-routing.module */ "./src/app/cooldash/pages/driver/driver-routing.module.ts");
/* harmony import */ var _driver_driver_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver/driver.component */ "./src/app/cooldash/pages/driver/driver/driver.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _driver_document_driver_document_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./driver-document/driver-document.component */ "./src/app/cooldash/pages/driver/driver-document/driver-document.component.ts");
/* harmony import */ var _view_driver_view_driver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-driver/view-driver.component */ "./src/app/cooldash/pages/driver/view-driver/view-driver.component.ts");
/* harmony import */ var _add_edit_driver_add_edit_driver_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-edit-driver/add-edit-driver.component */ "./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es2015.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_star_rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-star-rating */ "./node_modules/ngx-star-rating/fesm2015/ngx-star-rating.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm2015/angular-star-rating.js");










// import { DocumentModalComponent } from './document-modal/document-modal.component'; // <-- import the module






let DriverModule = class DriverModule {
};
DriverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_driver_driver_component__WEBPACK_IMPORTED_MODULE_4__["DriverComponent"], _driver_document_driver_document_component__WEBPACK_IMPORTED_MODULE_7__["DriverDocumentComponent"], _view_driver_view_driver_component__WEBPACK_IMPORTED_MODULE_8__["ViewDriverComponent"], _add_edit_driver_add_edit_driver_component__WEBPACK_IMPORTED_MODULE_9__["AddEditDriverComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _driver_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriverRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_10__["SelectDropDownModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_11__["UiSwitchModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlNativeDateTimeModule"],
            ngx_star_rating__WEBPACK_IMPORTED_MODULE_14__["NgxStarRatingModule"],
            angular_star_rating__WEBPACK_IMPORTED_MODULE_15__["StarRatingModule"].forRoot()
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], DriverModule);



/***/ }),

/***/ "./src/app/cooldash/pages/driver/driver/driver.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/driver/driver.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 967px) {\n  .adddriver {\n    margin-top: 10px;\n  }\n\n  .user_serch_btn {\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 767px) {\n  .adddriver {\n    margin-top: 0px;\n  }\n\n  .user_filter,\n.user_serch_btn {\n    justify-content: center;\n  }\n\n  .text-right.adddriver {\n    text-align: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rvd25sb2Fkcy9qYWQtdXBkYXRlZC9lMmUvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9kcml2ZXIvZHJpdmVyL2RyaXZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvZHJpdmVyL2RyaXZlci9kcml2ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGdCQUFBO0VDQ047O0VEQ0U7SUFDSSx5QkFBQTtFQ0VOO0FBQ0Y7QURDQTtFQUNJO0lBQ0ksZUFBQTtFQ0NOOztFRENFOztJQUVJLHVCQUFBO0VDRU47O0VEQUU7SUFDSSw2QkFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9kcml2ZXIvZHJpdmVyL2RyaXZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xyXG4gICAgLmFkZGRyaXZlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC51c2VyX3NlcmNoX2J0biB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuYWRkZHJpdmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAudXNlcl9maWx0ZXIsXHJcbiAgICAudXNlcl9zZXJjaF9idG4ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQuYWRkZHJpdmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xuICAuYWRkZHJpdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLnVzZXJfc2VyY2hfYnRuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFkZGRyaXZlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgLnVzZXJfZmlsdGVyLFxuLnVzZXJfc2VyY2hfYnRuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC50ZXh0LXJpZ2h0LmFkZGRyaXZlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/cooldash/pages/driver/driver/driver.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/driver/driver.component.ts ***!
  \******************************************************************/
/*! exports provided: DriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverComponent", function() { return DriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let DriverComponent = class DriverComponent {
    constructor(api, comm, router) {
        this.api = api;
        this.comm = comm;
        this.router = router;
        this.serialNumber = 0;
        this.loader = true;
        this.driverList = [];
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
        this.rating = 4;
    }
    ngOnInit() {
        this.currentPage = 1;
        this.imageUrl = this.comm.imageUrl;
        this.getDriver();
    }
    setPage() {
        this.getDriver();
    }
    searchDriver() {
        this.currentPage = 1;
        this.getDriver();
    }
    reset() {
        this.currentPage = 1;
        this.searchText = '';
        this.getDriver();
    }
    downloadCsv() {
        let body = {
            modelName: 'driver'
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
    getDriver() {
        var page = this.currentPage;
        this.api.getDriverList(page, this.searchText).subscribe(response => {
            console.log(response);
            if (response["data"]) {
                this.driverList = response["data"]["drivers"];
                for (var data of this.driverList) {
                    data.status = data["status"] == 1 ? true : false;
                }
                console.log(this.driverList);
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
        console.log(item, "383dewd");
        var data = {
            status: item.status ? 1 : 0
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.updateDriver(formData, item._id).subscribe((res) => {
            if (res["response"]["success"]) {
                this.getDriver();
            }
            if (!res["response"]["success"])
                return;
        });
    }
    onViewDocument(item) {
        this.router.navigate(['driver/document/', item.id]);
    }
    pageChange(newPage) {
        this.currentPage = newPage;
        this.getDriver();
    }
    addDriver() {
        this.router.navigate(['driver/add']);
    }
    onViewDriver(item) {
        this.router.navigate(['driver/view', item._id]);
    }
    onEditDriver(item) {
        this.router.navigate(['driver/edit', item._id]);
    }
    deleteDriver(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Driver!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            allowOutsideClick: false
        }).then(result => {
            if (result.value) {
                var data = {
                    status: 2
                };
                let formData = new FormData();
                formData.append("data", JSON.stringify(data));
                this.api.updateDriver(formData, item._id).subscribe((res) => {
                    if (res["response"]["success"]) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: "Deleted!",
                            text: res["response"]["message"],
                            icon: "success"
                        });
                        this.getDriver();
                    }
                    if (!res["response"]["success"])
                        return;
                });
            }
        });
    }
};
DriverComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-driver',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver/driver.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver.component.scss */ "./src/app/cooldash/pages/driver/driver/driver.component.scss")).default]
    })
], DriverComponent);



/***/ }),

/***/ "./src/app/cooldash/pages/driver/view-driver/view-driver.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/view-driver/view-driver.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL2RyaXZlci92aWV3LWRyaXZlci92aWV3LWRyaXZlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/cooldash/pages/driver/view-driver/view-driver.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/view-driver/view-driver.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDriverComponent", function() { return ViewDriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");





let ViewDriverComponent = class ViewDriverComponent {
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
        this.api.getDriverById(id).subscribe(res => {
            if (res["response"]["success"]) {
                console.log(res);
                this.driverDetails = res["data"];
                this.getAllVerticleType(this.driverDetails.verticalType, this.driverDetails.vehicleTypeId);
            }
        });
    }
    getAllVerticleType(type, id) {
        const list = [];
        this.api.getAllVerticleTypes(type).subscribe(response => {
            if (response["response"]["success"]) {
                var vehicleTypes = response["data"];
                for (let list of vehicleTypes) {
                    if (list['id'] == id) {
                        this.driverDetails['vehicleTypeName'] = list.name;
                        console.log(this.driverDetails);
                    }
                }
            }
        });
    }
};
ViewDriverComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ViewDriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-driver',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-driver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/view-driver/view-driver.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-driver.component.scss */ "./src/app/cooldash/pages/driver/view-driver/view-driver.component.scss")).default]
    })
], ViewDriverComponent);



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
//# sourceMappingURL=pages-driver-driver-module-es2015.js.map