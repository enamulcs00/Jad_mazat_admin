(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-driver-driver-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 i18n=\"@@Add_Driver\" class=\"m-0 text-black\" *ngIf=\"!id\">\r\n              Add Driver\r\n            </h6>\r\n            <h6 i18n=\"@@Edit_Driver\" class=\"m-0 text-black\" *ngIf=\"id\">\r\n              Edit Driver\r\n            </h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n              <span i18n=\"@@Back\" class=\"fas fa-arrow-left\"></span> Back\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body add_driver_outer\">\r\n      <form [formGroup]=\"driverForm\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label i18n=\"@@First_Name\" for=\"title\">First Name</label>\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"\" />\r\n                </div>\r\n                <div *ngIf=\"submitted && driverForm.controls.firstName.errors\" class=\"invalid-feedback\">\r\n                  <div i18n=\"@@First_Name_Required\" *ngIf=\"driverForm.controls.firstName.errors.required\">\r\n                    First Name is required\r\n                  </div>\r\n                  <div i18n=\"@@First_Name_3_chars\" *ngIf=\"driverForm.controls.firstName.errors.minlength\">\r\n                    First Name must be at least 3 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@First_Name_max_16_chars\" *ngIf=\"driverForm.controls.firstName.errors.maxlength\">\r\n                    First Name can be max 16 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@Invalid_chars\" *ngIf=\"driverForm.controls.firstName.errors.pattern\">\r\n                    Invalid character.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label i18n=\"@@Last_Name\" for=\"title\">Last Name</label>\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"\" />\r\n                </div>\r\n                <div *ngIf=\"submitted && driverForm.controls.lastName.errors\" class=\"invalid-feedback\">\r\n                  <div i18n=\"@@Last_Name_Required\" *ngIf=\"driverForm.controls.lastName.errors.required\">\r\n                    Last Name is required\r\n                  </div>\r\n                  <div i18n=\"@@Last_Name_3_chars\" *ngIf=\"driverForm.controls.lastName.errors.minlength\">\r\n                    Last Name must be at least 3 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@Last_Name_max_16\" *ngIf=\"driverForm.controls.lastName.errors.maxlength\">\r\n                    Last Name can be max 16 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@Invalid_chars\" *ngIf=\"driverForm.controls.lastName.errors.pattern\">\r\n                    Invalid character.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@Email\" for=\"title\">Email</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && driverForm.controls.email.errors\" class=\"invalid-feedback\">\r\n              <div i18n=\"@@Email_required\" *ngIf=\"driverForm.controls.email.errors.required\">\r\n                Email is required\r\n              </div>\r\n              <div i18n=\"@@Email_not_valid\" *ngIf=\"driverForm.controls.email.errors.pattern\">\r\n                Email is not valid\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\" *ngIf=\"!id\">\r\n            <label i18n=\"@@Password\" for=\"category\">Password</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"password\" id=\"name\" class=\"form-control\" formControlName=\"password\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"submitted && driverForm.controls.password.errors\" class=\"invalid-feedback\">\r\n              <div i18n=\"@@Password_required\" *ngIf=\"driverForm.controls.password.errors.required\">\r\n                Password is required\r\n              </div>\r\n              <div i18n=\"@@Password_min_8\" *ngIf=\"driverForm.controls.password.errors.minlength\">\r\n                Password must be atleast 8 characters\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" formGroupName=\"address\">\r\n            <label for=\"category\" i18n=\"@@Invalid_chars\">Address</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"location\" placeholder=\"\"\r\n                ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddress($event)\" />\r\n            </div>\r\n            <div *ngIf=\"\r\n                submitted &&\r\n                driverForm.controls['address'].get('location').errors\r\n              \" class=\"invalid-feedback\">\r\n              <div i18n=\"@@Address_Required\" *ngIf=\"\r\n                  driverForm.controls['address'].get('location').errors.required\r\n                \">\r\n                Address is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" formGroupName=\"address\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@Street\" for=\"category\">Street</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"address\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"\r\n                submitted &&\r\n                driverForm.controls['address'].get('address').errors\r\n              \" class=\"invalid-feedback\">\r\n              <div i18n=\"@@Street_Required\" *ngIf=\"\r\n                  driverForm.controls['address'].get('address').errors.required\r\n                \">\r\n                Street is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@Zip_Code\" for=\"category\">Zip Code</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"zipcode\" placeholder=\"\" />\r\n            </div>\r\n            <div *ngIf=\"\r\n                submitted &&\r\n                driverForm.controls['address'].get('zipcode').errors\r\n              \" class=\"invalid-feedback\">\r\n              <div i18n=\"@@Zip_Code_Required\" *ngIf=\"\r\n                  driverForm.controls['address'].get('zipcode').errors.required\r\n                \">\r\n                Zip Code is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@Phone_Number\" for=\"category\">Phone Number</label>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <div class=\"login_email country_code_div\">\r\n                  <div class=\"loginmail_input\" *ngIf=\"countryCodes && countryCodes.length > 0\">\r\n                    <ngx-select-dropdown (change)=\"selectionChanged1($event)\" formControlName=\"countryCode\"\r\n                      [config]=\"config1\" [options]=\"countryCodes\">\r\n                    </ngx-select-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-8\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"phone\" placeholder=\"\" />\r\n                </div>\r\n                <div *ngIf=\"submitted && driverForm.controls.phone.errors\" class=\"invalid-feedback\">\r\n                  <div i18n=\"@@Phone_Number_Required\" *ngIf=\"driverForm.controls.phone.errors.required\">\r\n                    Phone Number is required\r\n                  </div>\r\n                  <div i18n=\"@@Phone_number_min_7\" *ngIf=\"driverForm.controls.phone.errors.minlength\">\r\n                    Phone Number must be at least 7 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@phone_number_max_15\" *ngIf=\"driverForm.controls.phone.errors.maxlength\">\r\n                    Phone Number can be max 15 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@phone_not_valid\" *ngIf=\"driverForm.controls.phone.errors.pattern\">\r\n                    Phone Number is not valid.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" formGroupName=\"emergencyPhone\">\r\n            <label i18n=\"@@Invalid_chars\" for=\"category\">Emergency Phone Number</label>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <div class=\"login_email country_code_div\">\r\n                  <div class=\"loginmail_input\" *ngIf=\"countryCodes && countryCodes.length > 0\">\r\n                    <ngx-select-dropdown (change)=\"selectionChanged2($event)\" formControlName=\"countryCode\"\r\n                      [config]=\"config2\" [options]=\"countryCodes\">\r\n                    </ngx-select-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-8\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"phone\" placeholder=\"\" />\r\n                </div>\r\n                <div *ngIf=\"\r\n                    submitted &&\r\n                    driverForm.controls['emergencyPhone'].get('phone').errors\r\n                  \" class=\"invalid-feedback\">\r\n                  <div i18n=\"@@Phone_Number_Required\" *ngIf=\"\r\n                      driverForm.controls['emergencyPhone'].get('phone').errors\r\n                        .required\r\n                    \">\r\n                    Phone Number is required\r\n                  </div>\r\n                  <div i18n=\"@@Phone_number_min_7\" *ngIf=\"\r\n                      driverForm.controls['emergencyPhone'].get('phone').errors\r\n                        .minlength\r\n                    \">\r\n                    Phone Number must be at least 7 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@phone_number_max_15\" *ngIf=\"\r\n                      driverForm.controls['emergencyPhone'].get('phone').errors\r\n                        .maxlength\r\n                    \">\r\n                    Phone Number can be max 15 characters long.\r\n                  </div>\r\n                  <div i18n=\"@@phone_not_valid\" *ngIf=\"\r\n                      driverForm.controls['emergencyPhone'].get('phone').errors\r\n                        .pattern\r\n                    \">\r\n                    Phone Number not valid.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@user_type\" for=\"types\">User Type</label>\r\n            <div class=\"input-group\">\r\n              <select [(ngModel)]=\"byDefaultType\" class=\"form-control\" formControlName=\"verticalType\" *ngIf=\"type\"\r\n                (change)=\"onChange($event)\">\r\n                <option i18n=\"@@choose_here\" value=\"\" selected disabled hidden>\r\n                  Choose here\r\n                </option>\r\n                <option *ngFor=\"let data of type\" [value]=\"data.value\">\r\n                  {{ data.name }}\r\n                </option>\r\n              </select>\r\n              <div *ngIf=\"submitted && driverForm.controls.verticalType.errors\" class=\"invalid-feedback\">\r\n                <div i18n=\"@@type_required\" *ngIf=\"driverForm.controls.verticalType.errors.required\">\r\n                  Type is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@Vehical_type\" for=\"types\">Vehicle Type</label>\r\n            <div class=\"input-group\">\r\n              <select class=\"form-control\" formControlName=\"vehicleTypeId\" *ngIf=\"vehicleTypes\">\r\n                <option i18n=\"@@choose_here\" value=\"\" selected disabled hidden>\r\n                  Choose here\r\n                </option>\r\n                <option *ngFor=\"let type of vehicleTypes\" [value]=\"type.id\">\r\n                  {{ type.name }}\r\n                </option>\r\n              </select>\r\n              <div *ngIf=\"submitted && driverForm.controls.vehicleTypeId.errors\" class=\"invalid-feedback\">\r\n                <div i18n=\"@@vehical_type_required\" *ngIf=\"driverForm.controls.vehicleTypeId.errors.required\">\r\n                  Vehicle Type is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@vehical_name\" for=\"price\">Vehicle Name</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"vehicleName\" class=\"form-control\" formControlName=\"vehicleName\" placeholder=\"\" />\r\n              <div *ngIf=\"submitted && driverForm.controls.vehicleName.errors\" class=\"invalid-feedback\">\r\n                <div i18n=\"@@vehical_name_required\" *ngIf=\"driverForm.controls.vehicleName.errors.required\">\r\n                  Vehicle Name is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@vehical_number\" for=\"price\">Vehicle Number</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"vehicleNumber\" class=\"form-control\" formControlName=\"vehicleNumber\"\r\n                placeholder=\"\" />\r\n              <div *ngIf=\"submitted && driverForm.controls.vehicleNumber.errors\" class=\"invalid-feedback\">\r\n                <div i18n=\"@@vehical_no_required\" *ngIf=\"driverForm.controls.vehicleNumber.errors.required\">\r\n                  Vehicle Number is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label i18n=\"@@Image\" for=\"types\">Image</label>\r\n            <div class=\"usr_profile_img\">\r\n              <div class=\"usr_profile_imgbx\">\r\n                <div class=\"user_img\">\r\n                  <figure *ngIf=\"driverImage\">\r\n                    <img style=\"height: 150px; width: 150px\" [src]=\"driverImage\" />\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n              <div class=\"user_profile_edit\">\r\n                <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event)\" />\r\n              </div>\r\n              <div i18n=\"@@image_required\" *ngIf=\"submitted && !driverImage\" class=\"invalid-feedback\">\r\n                Image is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Timings</h4>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"driverForm1\">\r\n      <div class=\"row mt-3\">\r\n        <!-- Monday -->\r\n        <div class=\"col-md-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"><label>Monday</label></div>\r\n            <div class=\"col-md-6\">\r\n              <ui-switch labelOn=\"Open\" switchColor=\"#4e73df\" id=\"status\" [ngModelOptions]=\"{ standalone: true }\"\r\n                name=\"status\" [(ngModel)]=\"IsMon\" (change)=\"monday($event)\" labelOff=\"Closed\">\r\n              </ui-switch>\r\n              <!-- <mat-slide-toggle class=\"\" (change)=\"monday($event)\" [(ngModel)]=\"IsMon\"\r\n            [ngModelOptions]=\"{ standalone: true }\" color=\"primary\">\r\n            {{ IsMon == true ? \"Open\" : \"Closed\" }}</mat-slide-toggle> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <div *ngIf=\"IsMon\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"startTimeMonday\" (change)=\"checkMonday($event)\"\r\n                  formControlName=\"mondayStart\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['mondayStart'].touched && driverForm1.controls['mondayStart'].invalid || submitted && errorHandling('mondayStart', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *Start time is required\r\n                </small>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"endTimeMonday\" (change)=\"checkMonday($event)\"\r\n                  formControlName=\"mondayEnd\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['mondayEnd'].touched && driverForm1.controls['mondayEnd'].invalid || submitted && errorHandling('mondayEnd', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *End time is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Tuesday -->\r\n        <div class=\"col-md-4 mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"><label>Tuesday</label></div>\r\n            <div class=\"col-md-6\">\r\n              <ui-switch labelOn=\"Open\" switchColor=\"#4e73df\" id=\"status\" [ngModelOptions]=\"{ standalone: true }\"\r\n                name=\"status\" [(ngModel)]=\"IsTue\" (change)=\"tuesday($event)\" labelOff=\"Closed\">\r\n              </ui-switch>\r\n              <!-- <mat-slide-toggle (change)=\"tuesday($event)\" class=\"\" [(ngModel)]=\"IsTue\" [ngModelOptions]=\"{ standalone: true }\" color=\"primary\">\r\n            {{ IsTue == true ? \"Open\" : \"Closed\" }}</mat-slide-toggle> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 mt-3\">\r\n          <div *ngIf=\"IsTue\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"startTimeTuesday\" (change)=\"checkTuesday($event)\"\r\n                  formControlName=\"tuesdayStart\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['tuesdayStart'].touched && driverForm1.controls['tuesdayStart'].invalid || submitted && errorHandling('tuesdayStart', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *Start time is required\r\n                </small>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"endTimeTuesday\" (change)=\"checkTuesday($event)\"\r\n                  formControlName=\"tuesdayEnd\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['tuesdayEnd'].touched && driverForm1.controls['tuesdayEnd'].invalid || submitted && errorHandling('tuesdayEnd', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *End time is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Wednesday -->\r\n        <div class=\"col-md-4 mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"><label>Wednesday</label></div>\r\n            <div class=\"col-md-6\">\r\n              <ui-switch labelOn=\"Open\" switchColor=\"#4e73df\" id=\"status\" [ngModelOptions]=\"{ standalone: true }\"\r\n                name=\"status\" [(ngModel)]=\"IsWed\" (change)=\"wednesday($event)\" labelOff=\"Closed\">\r\n              </ui-switch>\r\n              <!-- <mat-slide-toggle (change)=\"wednesday($event)\" class=\"\" [(ngModel)]=\"IsWed\" [ngModelOptions]=\"{ standalone: true }\" color=\"primary\">\r\n            {{ IsWed == true ? \"Open\" : \"Closed\" }}</mat-slide-toggle> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 mt-3\">\r\n          <div *ngIf=\"IsWed\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"startTimeWednesday\" (change)=\"checkWednesday($event)\"\r\n                  formControlName=\"wednesdayStart\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['wednesdayStart'].touched && driverForm1.controls['wednesdayStart'].invalid || submitted && errorHandling('wednesdayStart', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *Start time is required\r\n                </small>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"endTimeWednesday\" (change)=\"checkWednesday($event)\"\r\n                  formControlName=\"wednesdayEnd\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['wednesdayEnd'].touched && driverForm1.controls['wednesdayEnd'].invalid || submitted && errorHandling('wednesdayEnd', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *End time is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Thrusday -->\r\n        <div class=\"col-md-4 mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"><label>Thrusday</label></div>\r\n            <div class=\"col-md-6\">\r\n              <ui-switch labelOn=\"Open\" switchColor=\"#4e73df\" id=\"status\" [ngModelOptions]=\"{ standalone: true }\"\r\n                name=\"status\" [(ngModel)]=\"IsThu\" (change)=\"thrusday($event)\" labelOff=\"Closed\">\r\n              </ui-switch>\r\n              <!-- <mat-slide-toggle (change)=\"thrusday($event)\" class=\"\" [(ngModel)]=\"IsThu\" [ngModelOptions]=\"{ standalone: true }\" color=\"primary\">\r\n            {{ IsThu == true ? \"Open\" : \"Closed\" }}</mat-slide-toggle> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 mt-3\">\r\n          <div *ngIf=\"IsThu\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"startTimeThrusday\" (change)=\"checkThrusday($event)\"\r\n                  formControlName=\"thrusdayStart\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['thrusdayStart'].touched && driverForm1.controls['thrusdayStart'].invalid || submitted && errorHandling('thrusdayStart', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *Start time is required\r\n                </small>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"endTimeThrusday\" (change)=\"checkThrusday($event)\"\r\n                  formControlName=\"thrusdayEnd\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['thrusdayEnd'].touched && driverForm1.controls['thrusdayEnd'].invalid || submitted && errorHandling('thrusdayEnd', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *End time is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Friday -->\r\n        <div class=\"col-md-4 mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"><label>Friday</label></div>\r\n            <div class=\"col-md-6\">\r\n              <ui-switch labelOn=\"Open\" switchColor=\"#4e73df\" id=\"status\" [ngModelOptions]=\"{ standalone: true }\"\r\n                name=\"status\" [(ngModel)]=\"IsFri\" (change)=\"friday($event)\" labelOff=\"Closed\">\r\n              </ui-switch>\r\n              <!-- <mat-slide-toggle (change)=\"friday($event)\" class=\"\" [(ngModel)]=\"IsFri\" [ngModelOptions]=\"{ standalone: true }\" color=\"primary\">\r\n            {{ IsFri == true ? \"Open\" : \"Closed\" }}</mat-slide-toggle> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 mt-3\">\r\n          <div *ngIf=\"IsFri\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"startTimeFriday\" (change)=\"checkFriday($event)\"\r\n                  formControlName=\"fridayStart\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['fridayStart'].touched && driverForm1.controls['fridayStart'].invalid || submitted && errorHandling('fridayStart', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *Start time is required\r\n                </small>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"endTimeFriday\" (change)=\"checkFriday($event)\"\r\n                  formControlName=\"fridayEnd\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['fridayEnd'].touched && driverForm1.controls['fridayEnd'].invalid || submitted && errorHandling('fridayEnd', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *End time is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Saturday -->\r\n        <div class=\"col-md-4 mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"><label>Saturday</label></div>\r\n            <div class=\"col-md-6\">\r\n              <ui-switch labelOn=\"Open\" switchColor=\"#4e73df\" id=\"status\" [ngModelOptions]=\"{ standalone: true }\"\r\n                name=\"status\" [(ngModel)]=\"IsSat\" (change)=\"saturday($event)\" labelOff=\"Closed\">\r\n              </ui-switch>\r\n              <!-- <mat-slide-toggle (change)=\"saturday($event)\" class=\"\" [(ngModel)]=\"IsSat\" [ngModelOptions]=\"{ standalone: true }\" color=\"primary\">\r\n            {{ IsSat == true ? \"Open\" : \"Closed\" }}</mat-slide-toggle> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 mt-3\">\r\n          <div *ngIf=\"IsSat\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"startTimeSaturday\" (change)=\"checkSaturday($event)\"\r\n                  formControlName=\"saturdayStart\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['saturdayStart'].touched && driverForm1.controls['saturdayStart'].invalid || submitted && errorHandling('saturdayStart', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *Start time is required\r\n                </small>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"endTimeSaturday\" (change)=\"checkSaturday($event)\"\r\n                  formControlName=\"saturdayEnd\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['saturdayEnd'].touched && driverForm1.controls['saturdayEnd'].invalid || submitted && errorHandling('saturdayEnd', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *End time is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Sunday -->\r\n        <div class=\"col-md-4 mt-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\"><label>Sunday</label></div>\r\n            <div class=\"col-md-6\">\r\n              <ui-switch labelOn=\"Open\" switchColor=\"#4e73df\" id=\"status\" [ngModelOptions]=\"{ standalone: true }\"\r\n                name=\"status\" [(ngModel)]=\"IsSun\" (change)=\"sunday($event)\" labelOff=\"Closed\">\r\n              </ui-switch>\r\n              <!-- <mat-slide-toggle (change)=\"sunday($event)\" class=\"\" [(ngModel)]=\"IsSun\" [ngModelOptions]=\"{ standalone: true }\" color=\"primary\">\r\n            {{ IsSun == true ? \"Open\" : \"Closed\" }}</mat-slide-toggle> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 mt-3\">\r\n          <div *ngIf=\"IsSun\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"startTimeSunday\" (change)=\"checkSunday($event)\"\r\n                  formControlName=\"sundayStart\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['sundayStart'].touched && driverForm1.controls['sundayStart'].invalid || submitted && errorHandling('sundayStart', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *Start time is required\r\n                </small>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"time\" [(ngModel)]=\"endTimeSunday\" (change)=\"checkSunday($event)\"\r\n                  formControlName=\"sundayEnd\" class=\"form-control\">\r\n                <small\r\n                  *ngIf=\" driverForm1.controls['sundayEnd'].touched && driverForm1.controls['sundayEnd'].invalid || submitted && errorHandling('sundayEnd', 'required')\"\r\n                  class=\"text-danger d-inline-block pt-1\">\r\n                  *End time is required\r\n                </small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n      <div class=\"form-group form-actions add_edit mt-3\">\r\n        <button i18n=\"@@Add\" type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"!id\" (click)=\"submit()\">\r\n          Add\r\n        </button>\r\n        <button i18n=\"@@Update\" type=\"submit\" class=\"btn btn-sm btn-success\" *ngIf=\"id\" (click)=\"update()\">\r\n          Update\r\n        </button>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver-document/driver-document.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver-document/driver-document.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"documents\">\r\n    <div class=\"card shadow mb-4\">\r\n\r\n        <div class=\"card-header py-3\">\r\n            <div class=\"tittle_outer\">\r\n                <div class=\" user_title\">\r\n                   <div class=\"user_title_inner\"> <h6 class=\"m-0 text-black\">Documents</h6></div>\r\n                   <div class=\"user_add_button\"> \r\n                    <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n                        <span class=\"fas fa-arrow-left\"></span> Back\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"card-body\">\r\n            <ng-container *ngIf=\"documents && documents.length>0\">\r\n                <div class=\"row\">\r\n                    <ng-container *ngFor=\"let data of documents; let i = index\">\r\n                        <div class=\"col-xl-3 col-lg-6\">\r\n                            <div class=\"card shadow mb-4\">\r\n                                <!-- Card Header - Dropdown -->\r\n                                <div\r\n                                    class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                                    <h6 class=\"m-0 font-weight-bold text-primary\">\r\n                                    <ng-container *ngIf=\"data.name == 'Licence'\">Licence\r\n                                    </ng-container>\r\n                                     <ng-container *ngIf=\"data.name == 'License'\">License\r\n                                    </ng-container>\r\n                                          <ng-container *ngIf=\"data.name == 'ID'\">ID\r\n                                    </ng-container>\r\n                                        <ng-container *ngIf=\"data.name == 'VehiclePhoto'\">Vehicle Photo\r\n                                    </ng-container>\r\n                                          <ng-container *ngIf=\"data.name == 'VehicleDocument'\">Vehicle Document\r\n                                    </ng-container>\r\n                                    </h6>\r\n                                </div>\r\n                                <!-- Card Body -->\r\n                                <div class=\"card-body\" *ngIf=\"data._id\">\r\n                                    <div class=\"chart-pie pt-4 pb-2\">\r\n                                        <ng-container *ngIf=\"data.image\">\r\n                                            <img [src]=\"comm.imageUrl + data.image\"\r\n                                                style=\"height: 185px; width: 100%;\" />\r\n                                        </ng-container>\r\n                                    </div>\r\n                                    <div *ngIf=\"data.status == 0\">\r\n                                        <button class=\"btn btn-info  mr-1 mt-2\" (click)=\"approved(data)\">\r\n                                            Approved\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger mt-2\" (click)=\"disapproved(data)\">\r\n                                            Disapproved\r\n                                        </button>\r\n                                    </div>\r\n                                    <div *ngIf=\"data.status == 1\">\r\n                                        <button class=\"btn btn-info  mr-1\" disabled>\r\n                                            Approved\r\n                                        </button>\r\n                                    </div>\r\n                                    <div *ngIf=\"data.status == 2\">\r\n                                        <button class=\"btn btn-danger  mr-1\" disabled>\r\n                                            Disapproved\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"mt-2 pb-2\">\r\n                                        <button class=\"btn btn-success  mr-1\"\r\n                                            (click)=\"changeDocument(data)\">\r\n                                            Change Document\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"!data._id\">\r\n                                    <div class=\"card-body\">\r\n                                        <div class=\"chart-pie pt-4 pb-2\">\r\n                                            <figure *ngIf=\"data.image\">\r\n                                                <img style=\"height: 185px; width: 100%;\" [src]=\"data.image\" />\r\n                                            </figure>\r\n                                            <div class=\"user_profile_edit\">\r\n                                                <input type=\"file\" accept=\"image/*\"\r\n                                                    (change)=\"profilePic($event, data, i )\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div>\r\n                                            <button class=\"mat-raised-button mat-primary  mr-1\"\r\n                                                (click)=\"addDocuments(data, i)\">\r\n                                                Add Document\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <h4 *ngIf=\"documents && documents.length == 0\" class=\"text-center\">\r\n                        No documents found.\r\n                    </h4>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"documents && documents.length==0\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-3 col-lg-4\" *ngFor=\"let data of doucmentList; let i = index\">\r\n                        <div class=\"card shadow mb-4\">\r\n                            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                                <h6 class=\"m-0 font-weight-bold text-primary\">\r\n                                      <ng-container *ngIf=\"data.name == 'Licence'\">Licence\r\n                                    </ng-container>\r\n                                              <ng-container *ngIf=\"data.name == 'License'\">License\r\n                                    </ng-container>\r\n                                          <ng-container *ngIf=\"data.name == 'ID'\">ID\r\n                                    </ng-container>\r\n                                        <ng-container *ngIf=\"data.name == 'VehiclePhoto'\">Vehicle Photo\r\n                                    </ng-container>\r\n                                          <ng-container *ngIf=\"data.name == 'VehicleDocument'\">Vehicle Document\r\n                                    </ng-container>\r\n                                </h6>\r\n                            </div>\r\n\r\n                            <div class=\"card-body\">\r\n                                <div class=\"chart-pie pt-4 pb-2\">\r\n                                    <figure *ngIf=\"data.image\">\r\n                                        <img style=\"height: 185px; width: 100%;\" [src]=\"data.image\" />\r\n                                    </figure>\r\n                                    <div class=\"user_profile_edit\">\r\n                                        <input type=\"file\" accept=\"image/*\" (change)=\"profilePic($event, data, i )\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <button class=\"btn btn-success  mr-1\" (click)=\"addDocuments(data, i)\">\r\n                                        Add Document\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver/driver.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/driver/driver.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 i18n=\"@@drivers\" class=\"m-0 text-black\">Drivers</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button i18n=\"@@add_restaurant\" class=\"btn btn-primary\" (click)=\"addDriver()\">\r\n              <span class=\"fas fa-plus\"></span> Add Driver\r\n            </button>\r\n            <button i18n=\"@@add_driver\" class=\"btn btn-primary ml-2\" (click)=\"downloadCsv()\">\r\n              <span class=\"fas fa-download\"></span> Download CSV\r\n            </button>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"filters_outer\">\r\n        <div class=\"user_filter\">\r\n          <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" i18n=\"@@search_firstname\"\r\n            placeholder=\"Search First Name and Email\" />\r\n        </div>\r\n        <div class=\"user_serch_btn\">\r\n          <button type=\"submit\" class=\"btn btn-primary pl-4 pr-4\" i18n=\"@@Search\" (click)=\"searchDriver()\">\r\n            Search\r\n          </button>\r\n          <button type=\"reset\" i18n=\"@@Reset\" class=\"btn btn-primary pl-4 pr-4 ml-2\" (click)=\"reset()\">\r\n            Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body table-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th i18n=\"@@Image\">Image</th>\r\n              <th i18n=\"@@Name\">Name</th>\r\n              <th i18n=\"@@Email\">Email</th>\r\n              <th i18n=\"@@Phone_Number\" style=\"min-width: 8rem\">\r\n                Phone Number\r\n              </th>\r\n              <th i18n=\"@@E_Phone_Number\" style=\"min-width: 10rem\">\r\n                E-Phone Number\r\n              </th>\r\n              <th i18n=\"@@Document_status\" style=\"min-width: 8rem\" class=\"text-nowrap\">\r\n                Document Status\r\n              </th>\r\n              <th i18n=\"@@Driver_type\" style=\"min-width: 8rem\">Driver Type</th>\r\n              <th i18n=\"@@Vehicle_Name\" style=\"min-width: 8rem\">\r\n                Vehicle Name\r\n              </th>\r\n              <th i18n=\"@@Vehical_Number\" style=\"min-width: 8rem\">\r\n                Vehicle Number\r\n              </th>\r\n              <th i18n=\"@@Status\" style=\"min-width: 6rem\">Status</th>\r\n              <th i18n=\"@@Rating\">Rating</th>\r\n              <th i18n=\"@@Action\" style=\"min-width: 10rem\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of driverList | paginate: config; let i = index\">\r\n              <td>{{ (currentPage - 1) * 25 + i + 1 }}</td>\r\n              <td>\r\n                <ng-container *ngIf=\"item.profilePic; else noImage\">\r\n                  <img src=\"{{imageUrl+item.profilePic}}\" width=\"70px\" height=\"70px\" />\r\n                </ng-container>\r\n                <ng-template #noImage>\r\n                  <img src=\"assets/img/default-user.png\" width=\"70px\" height=\"70px\" />\r\n                </ng-template>\r\n              </td>\r\n              <td class=\"text-nowrap\">{{ item.firstName + \" \"+ item.lastName || \"--\"}}</td>\r\n              <td class=\"text-nowrap\">{{ item.email || \"--\"}}</td>\r\n              <td class=\"text-nowrap\">{{ item.countryCode+\"-\"+item.phone || \"--\"}}</td>\r\n              <ng-container *ngIf=\"item.emergencyPhone; else noNumber\">\r\n                <td class=\"text-nowrap\">\r\n                  {{ item.emergencyPhone.countryCode+\"-\"+item.emergencyPhone.phone || \"--\"}}\r\n                </td>\r\n              </ng-container>\r\n              <ng-template #noNumber>\r\n                <td>-</td>\r\n              </ng-template>\r\n              <td *ngIf=\"item.profileStatus == 0\">Disapproved</td>\r\n              <td *ngIf=\"item.profileStatus == 1\">Approved</td>\r\n              <td *ngIf=\"item.verticalType == 1\">Delivery</td>\r\n              <td *ngIf=\"item.verticalType == 2\">Taxi</td>\r\n              <td *ngIf=\"item.verticalType == 3\">Shuttle</td>\r\n               <td class=\"text-nowrap\">{{ item.vehicleName|| \"--\"}}</td>\r\n              <td class=\"text-nowrap\">{{ item.vehicleNumber||\"--\"}}</td>\r\n              <td>\r\n                <ui-switch labelOn=\"ON\" switchColor=\"#4e73df\" id=\"status\" name=\"status\" [(ngModel)]=\"item.status\"\r\n                  (ngModelChange)=\"updateStatus(item)\" labelOff=\"OFF\">\r\n                </ui-switch>\r\n              </td>\r\n              <td>\r\n                <div class=\"cont\">\r\n                  <div class=\"stars\">\r\n                    <ngx-star-rating [(ngModel)]=\"item.rating\" [id]=\"'rating'\" [disabled]=\"true\"></ngx-star-rating>\r\n                  </div>\r\n                </div>\r\n                <!-- <star-rating-comp [starType]=\"'icon'\" [rating]=\"5\"></star-rating-comp> -->\r\n              </td>\r\n\r\n              <td>\r\n                <div class=\"product_action\">\r\n                  <button class=\"btn btn-warning mr-1\" title=\"View Driver\" (click)=\"onViewDriver(item)\" title=\"View\">\r\n                    <span class=\"fas fa-fw fa-eye\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-success mr-1\" title=\"Edit Driver\" (click)=\"onEditDriver(item)\" title=\"Edit\">\r\n                    <span class=\"fas fa-fw fa-edit\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-primary mr-1\" title=\"Driver Documents\" (click)=\"onViewDocument(item)\">\r\n                    <span class=\"fas fa-fw fa-file\"></span>\r\n                  </button>\r\n                  <button class=\"btn btn-danger mr-1\" title=\"Delete Driver\" (click)=\"deleteDriver(item)\">\r\n                    <span class=\"fas fa-fw fa-trash\"></span>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"loader\" class=\"loader\"></div>\r\n        <h4 *ngIf=\"driverList && driverList.length == 0 && !loader\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n      <div *ngIf=\"driverList.length != 0 && !loader\" class=\"pagination_ui\">\r\n        <pagination-controls (pageChange)=\"pageChange($event)\" id=\"page\" class=\"my-pagination\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/view-driver/view-driver.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/driver/view-driver/view-driver.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"tittle_outer\">\r\n        <div class=\"user_title\">\r\n          <div class=\"user_title_inner\">\r\n            <h6 class=\"m-0 text-black\">View Driver</h6>\r\n          </div>\r\n          <div class=\"user_add_button\">\r\n            <button class=\"btn btn-primary\" (click)=\"history.back()\">\r\n              <span class=\"fas fa-arrow-left\"></span> Back\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\" *ngIf=\"driverDetails\">\r\n      <div *ngIf=\"driverDetails\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Driver Name</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"Name\"\r\n                value=\"{{ driverDetails.firstName }} {{\r\n                  driverDetails.lastName\r\n                }}\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Email</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"Email\"\r\n                value=\"{{ driverDetails.email }}\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Phone Number</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"Email\"\r\n                value=\"{{ driverDetails.countryCode }} {{\r\n                  driverDetails.phone\r\n                }}\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\" *ngIf=\"driverDetails.emergencyPhone\">\r\n            <div class=\"form-group\">\r\n              <label>Emergency Phone Number</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"Email\"\r\n                value=\"{{ driverDetails.emergencyPhone.countryCode }} {{\r\n                  driverDetails.emergencyPhone.phone\r\n                }}\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Address</label>\r\n              <textarea\r\n                type=\"text\"\r\n                name=\"address\"\r\n                class=\"form-control\"\r\n                disabled\r\n                *ngIf=\"driverDetails.address\"\r\n                >{{ driverDetails.address[\"location\"] }}\r\n                            </textarea\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\" *ngIf=\"driverDetails.address['zipcode']\">\r\n            <div class=\"form-group\">\r\n              <label>Zip Code</label>\r\n              <textarea\r\n                type=\"text\"\r\n                name=\"address\"\r\n                class=\"form-control\"\r\n                disabled\r\n                *ngIf=\"driverDetails.address\"\r\n                >{{ driverDetails.address[\"zipcode\"] }}\r\n                            </textarea\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Street</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"street\"\r\n                [value]=\"driverDetails.address['address']\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Name</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"discount\"\r\n                [value]=\"driverDetails.vehicleName\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Type</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"discount\"\r\n                [value]=\"driverDetails.vehicleTypeName\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Vehicle Number</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"discount\"\r\n                [value]=\"driverDetails.vehicleNumber\"\r\n                class=\"form-control\"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Profile Status</label>\r\n              <ng-container *ngIf=\"driverDetails.profileStatus == 0\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"open-time\"\r\n                  value=\"Disapproved\"\r\n                  class=\"form-control\"\r\n                  disabled\r\n                />\r\n              </ng-container>\r\n              <ng-container *ngIf=\"driverDetails.profileStatus == 1\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"open-time\"\r\n                  value=\"Approved\"\r\n                  class=\"form-control\"\r\n                  disabled\r\n                />\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Driver Type</label>\r\n              <ng-container *ngIf=\"driverDetails.verticalType == 1\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"open-time\"\r\n                  value=\"Delivery\"\r\n                  class=\"form-control\"\r\n                  disabled\r\n                />\r\n              </ng-container>\r\n              <ng-container *ngIf=\"driverDetails.verticalType == 2\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"open-time\"\r\n                  value=\"Taxi\"\r\n                  class=\"form-control\"\r\n                  disabled\r\n                />\r\n              </ng-container>\r\n              <ng-container *ngIf=\"driverDetails.verticalType == 3\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"open-time\"\r\n                  value=\"Shuttle\"\r\n                  class=\"form-control\"\r\n                  disabled\r\n                />\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n          <div\r\n            class=\"col-md-12\"\r\n            *ngIf=\"\r\n              driverDetails.documents && driverDetails.documents.length > 0\r\n            \"\r\n          >\r\n            <div class=\"form-group\">\r\n              <label>Documents</label>\r\n              <div class=\"row\">\r\n                <div\r\n                  class=\"col-xl-3 col-lg-5\"\r\n                  *ngFor=\"let data of driverDetails.documents\"\r\n                >\r\n                  <div class=\"card shadow mb-4\">\r\n                    <!-- Card Header - Dropdown -->\r\n                    <div\r\n                      class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\"\r\n                    >\r\n                      <h6 class=\"m-0 font-weight-bold text-primary\">\r\n                        {{ data.name }}\r\n                      </h6>\r\n                    </div>\r\n                    <!-- Card Body -->\r\n                    <div class=\"card-body\">\r\n                      <div class=\"pt-4 pb-2\">\r\n                        <ng-container *ngIf=\"data.image\">\r\n                          <img\r\n                            [src]=\"comm.imageUrl + data.image\"\r\n                            style=\"height: 150px; width: 100%\"\r\n                          />\r\n                        </ng-container>\r\n                      </div>\r\n                      <div *ngIf=\"data.status == 1\">\r\n                        <button\r\n                          class=\"mat-raised-button mat-primary mr-1\"\r\n                          disabled\r\n                        >\r\n                          Approved\r\n                        </button>\r\n                      </div>\r\n                      <div *ngIf=\"data.status == 2\">\r\n                        <button\r\n                          class=\"mat-raised-button mat-primary mr-1\"\r\n                          disabled\r\n                        >\r\n                          Disapproved\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Image</label>\r\n              <div>\r\n                <ng-container *ngIf=\"driverDetails.profilePic; else noImage\">\r\n                  <img\r\n                    [src]=\"comm.imageUrl + driverDetails.profilePic\"\r\n                    style=\"height: 150px; width: 150px\"\r\n                  />\r\n                </ng-container>\r\n                <ng-template #noImage>\r\n                  <img\r\n                    src=\"assets/img/default-user.png\"\r\n                    style=\"height: 150px; width: 150px\"\r\n                  />\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cooldash/pages/driver/add-edit-driver/add-edit-driver.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\n::ng-deep .ngx-dropdown-container .ngx-dropdown-button {\n  min-height: 38px !important;\n}\n\n::ng-deep .ngx-dropdown-container button .nsdicon-angle-down {\n  top: 2px;\n}\n\n::ng-deep .ngx-dropdown-container .ngx-dropdown-list-container ul li {\n  padding: 3px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvZHJpdmVyL2FkZC1lZGl0LWRyaXZlci9DOlxcVXNlcnNcXHJhZ2h2XFxEZXNrdG9wXFxERVZcXFZlbmdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxkcml2ZXJcXGFkZC1lZGl0LWRyaXZlclxcYWRkLWVkaXQtZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9kcml2ZXIvYWRkLWVkaXQtZHJpdmVyL2FkZC1lZGl0LWRyaXZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0k7RUFDSSwyQkFBQTtBQ0FSOztBREVJO0VBQ0ksUUFBQTtBQ0FSOztBREVJO0VBQ0ksMkJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL2RyaXZlci9hZGQtZWRpdC1kcml2ZXIvYWRkLWVkaXQtZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMTRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gICAgZm9udC1zaXplOiA5NSU7XHJcbiAgICBjb2xvcjogI2Y1NTM1MztcclxufVxyXG5cclxuIDo6bmctZGVlcCB7XHJcbiAgICAubmd4LWRyb3Bkb3duLWNvbnRhaW5lciAubmd4LWRyb3Bkb3duLWJ1dHRvbiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5neC1kcm9wZG93bi1jb250YWluZXIgYnV0dG9uIC5uc2RpY29uLWFuZ2xlLWRvd24ge1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgLm5neC1kcm9wZG93bi1jb250YWluZXIgLm5neC1kcm9wZG93bi1saXN0LWNvbnRhaW5lciB1bCBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMTRyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogOTUlO1xuICBjb2xvcjogI2Y1NTM1Mztcbn1cblxuOjpuZy1kZWVwIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIC5uZ3gtZHJvcGRvd24tYnV0dG9uIHtcbiAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZ3gtZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiAubnNkaWNvbi1hbmdsZS1kb3duIHtcbiAgdG9wOiAycHg7XG59XG46Om5nLWRlZXAgLm5neC1kcm9wZG93bi1jb250YWluZXIgLm5neC1kcm9wZG93bi1saXN0LWNvbnRhaW5lciB1bCBsaSB7XG4gIHBhZGRpbmc6IDNweCA4cHggIWltcG9ydGFudDtcbn0iXX0= */");

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
        this.IsMon = false;
        this.IsTue = false;
        this.IsThu = false;
        this.IsWed = false;
        this.IsFri = false;
        this.IsSat = false;
        this.IsSun = false;
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
                if (data.timings[0].isClosed) {
                    this.IsSun = false;
                }
                if (!data.timings[0].isClosed) {
                    this.IsSun = true;
                }
                if (this.IsSun) {
                    this.driverForm1.controls["sundayStart"].enable();
                    this.driverForm1.controls["sundayEnd"].enable();
                    this.startTimeSunday = data.timings[0].openingTime;
                    this.endTimeSunday = data.timings[0].closingTime;
                }
                if (data.timings[1].isClosed) {
                    this.IsMon = false;
                }
                if (!data.timings[1].isClosed) {
                    this.IsMon = true;
                }
                if (this.IsMon) {
                    this.driverForm1.controls["mondayStart"].enable();
                    this.driverForm1.controls["mondayEnd"].enable();
                    this.startTimeMonday = data.timings[1].openingTime;
                    this.endTimeMonday = data.timings[1].closingTime;
                }
                // Tuesday
                if (data.timings[2].isClosed) {
                    this.IsTue = false;
                }
                if (!data.timings[2].isClosed) {
                    this.IsTue = true;
                }
                if (this.IsTue) {
                    this.driverForm1.controls["tuesdayStart"].enable();
                    this.driverForm1.controls["tuesdayEnd"].enable();
                    this.startTimeTuesday = data.timings[2].openingTime;
                    this.endTimeTuesday = data.timings[2].closingTime;
                }
                if (data.timings[3].isClosed) {
                    this.IsWed = false;
                }
                if (!data.timings[3].isClosed) {
                    this.IsWed = true;
                }
                if (this.IsWed) {
                    this.driverForm1.controls["wednesdayStart"].enable();
                    this.driverForm1.controls["wednesdayEnd"].enable();
                    this.startTimeWednesday = data.timings[3].openingTime;
                    this.endTimeWednesday = data.timings[3].closingTime;
                }
                if (data.timings[4].isClosed) {
                    this.IsThu = false;
                }
                if (!data.timings[4].isClosed) {
                    this.IsThu = true;
                }
                if (this.IsThu) {
                    this.driverForm1.controls["thrusdayStart"].enable();
                    this.driverForm1.controls["thrusdayEnd"].enable();
                    this.startTimeThrusday = data.timings[4].openingTime;
                    this.endTimeThrusday = data.timings[4].closingTime;
                }
                if (data.timings[5].isClosed) {
                    this.IsFri = false;
                }
                if (!data.timings[5].isClosed) {
                    this.IsFri = true;
                }
                if (this.IsFri) {
                    this.driverForm1.controls["fridayStart"].enable();
                    this.driverForm1.controls["fridayEnd"].enable();
                    this.startTimeFriday = data.timings[5].openingTime;
                    this.endTimeFriday = data.timings[5].closingTime;
                }
                if (data.timings[6].isClosed) {
                    this.IsSat = false;
                }
                if (!data.timings[6].isClosed) {
                    this.IsSat = true;
                }
                if (this.IsSat) {
                    this.driverForm1.controls["saturdayStart"].enable();
                    this.driverForm1.controls["saturdayEnd"].enable();
                    this.startTimeSaturday = data.timings[6].openingTime;
                    this.endTimeSaturday = data.timings[6].closingTime;
                }
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
        // Error Handling
        this.errorHandling = (control, error) => {
            return this.driverForm1.controls[control].hasError(error);
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
        this.driverForm1 = this.formBuilder.group({
            mondayStart: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mondayEnd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tuesdayStart: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tuesdayEnd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            wednesdayStart: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            wednesdayEnd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            thrusdayStart: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            thrusdayEnd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fridayStart: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fridayEnd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            saturdayStart: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            saturdayEnd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sundayStart: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sundayEnd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
        this.driverForm1.controls["mondayStart"].disable();
        this.driverForm1.controls["mondayEnd"].disable();
        this.driverForm1.controls["tuesdayStart"].disable();
        this.driverForm1.controls["tuesdayEnd"].disable();
        this.driverForm1.controls["wednesdayStart"].disable();
        this.driverForm1.controls["wednesdayEnd"].disable();
        this.driverForm1.controls["thrusdayStart"].disable();
        this.driverForm1.controls["thrusdayEnd"].disable();
        this.driverForm1.controls["fridayStart"].disable();
        this.driverForm1.controls["fridayEnd"].disable();
        this.driverForm1.controls["saturdayStart"].disable();
        this.driverForm1.controls["saturdayEnd"].disable();
        this.driverForm1.controls["sundayStart"].disable();
        this.driverForm1.controls["sundayEnd"].disable();
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
        if (this.driverForm.valid && this.driverForm1.valid) {
            this.timings = [
                {
                    days: "0",
                    openingTime: this.driverForm1.value.sundayStart == undefined
                        ? ""
                        : this.driverForm1.value.sundayStart,
                    closingTime: this.driverForm1.value.sundayEnd == undefined
                        ? ""
                        : this.driverForm1.value.sundayEnd,
                    isClosed: !this.IsSun,
                },
                {
                    days: "1",
                    openingTime: this.driverForm1.value.mondayStart == undefined
                        ? ""
                        : this.driverForm1.value.mondayStart,
                    closingTime: this.driverForm1.value.mondayEnd == undefined
                        ? ""
                        : this.driverForm1.value.mondayEnd,
                    isClosed: !this.IsMon,
                },
                {
                    days: "2",
                    openingTime: this.driverForm1.value.tuesdayStart == undefined
                        ? ""
                        : this.driverForm1.value.tuesdayStart,
                    closingTime: this.driverForm1.value.tuesdayEnd == undefined
                        ? ""
                        : this.driverForm1.value.tuesdayEnd,
                    isClosed: !this.IsTue,
                },
                {
                    days: "3",
                    openingTime: this.driverForm1.value.wednesdayStart == undefined
                        ? ""
                        : this.driverForm1.value.wednesdayStart,
                    closingTime: this.driverForm1.value.wednesdayEnd == undefined
                        ? ""
                        : this.driverForm1.value.wednesdayEnd,
                    isClosed: !this.IsWed,
                },
                {
                    days: "4",
                    openingTime: this.driverForm1.value.thrusdayStart == undefined
                        ? ""
                        : this.driverForm1.value.thrusdayStart,
                    closingTime: this.driverForm1.value.thrusdayEnd == undefined
                        ? ""
                        : this.driverForm1.value.thrusdayEnd,
                    isClosed: !this.IsThu,
                },
                {
                    days: "5",
                    openingTime: this.driverForm1.value.fridayStart == undefined
                        ? ""
                        : this.driverForm1.value.fridayStart,
                    closingTime: this.driverForm1.value.fridayEnd == undefined
                        ? ""
                        : this.driverForm1.value.fridayEnd,
                    isClosed: !this.IsFri,
                },
                {
                    days: "6",
                    openingTime: this.driverForm1.value.saturdayStart == undefined
                        ? ""
                        : this.driverForm1.value.saturdayStart,
                    closingTime: this.driverForm1.value.saturdayEnd == undefined
                        ? ""
                        : this.driverForm1.value.saturdayEnd,
                    isClosed: !this.IsSat,
                },
            ];
            this.countryStatus1 = false;
            this.countryStatus2 = false;
            var data = this.driverForm.value;
            data["timings"] = this.timings;
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
        // console.log(this.driverForm.value);
        this.submitted = true;
        this.driverForm.controls["countryCode"].setValue(this.driverForm.controls["countryCode"].value.Code);
        this.driverForm.controls['emergencyPhone'].get('countryCode').setValue(this.driverForm.controls["emergencyPhone"].value.countryCode.Code);
        if ((this.driverForm.value.countryCode &&
            this.driverForm.value.countryCode.length > 0 &&
            this.driverForm.value.phone) || (this.driverForm.controls['emergencyPhone'].get('countryCode') &&
            this.driverForm.controls['emergencyPhone'].get('countryCode').value.length > 0 &&
            this.driverForm.controls['emergencyPhone'].get('phone'))) {
            if (this.address && this.updateAddrssStatus) {
                if (this.submitted && this.driverForm.valid && this.driverForm1.valid) {
                    var data = this.driverForm.value;
                    console.log("Form Value", this.driverForm.value);
                    this.timings = [
                        {
                            days: "0",
                            openingTime: this.driverForm1.value.sundayStart == undefined
                                ? ""
                                : this.driverForm1.value.sundayStart,
                            closingTime: this.driverForm1.value.sundayEnd == undefined
                                ? ""
                                : this.driverForm1.value.sundayEnd,
                            isClosed: !this.IsSun,
                        },
                        {
                            days: "1",
                            openingTime: this.driverForm1.value.mondayStart == undefined
                                ? ""
                                : this.driverForm1.value.mondayStart,
                            closingTime: this.driverForm1.value.mondayEnd == undefined
                                ? ""
                                : this.driverForm1.value.mondayEnd,
                            isClosed: !this.IsMon,
                        },
                        {
                            days: "2",
                            openingTime: this.driverForm1.value.tuesdayStart == undefined
                                ? ""
                                : this.driverForm1.value.tuesdayStart,
                            closingTime: this.driverForm1.value.tuesdayEnd == undefined
                                ? ""
                                : this.driverForm1.value.tuesdayEnd,
                            isClosed: !this.IsTue,
                        },
                        {
                            days: "3",
                            openingTime: this.driverForm1.value.wednesdayStart == undefined
                                ? ""
                                : this.driverForm1.value.wednesdayStart,
                            closingTime: this.driverForm1.value.wednesdayEnd == undefined
                                ? ""
                                : this.driverForm1.value.wednesdayEnd,
                            isClosed: !this.IsWed,
                        },
                        {
                            days: "4",
                            openingTime: this.driverForm1.value.thrusdayStart == undefined
                                ? ""
                                : this.driverForm1.value.thrusdayStart,
                            closingTime: this.driverForm1.value.thrusdayEnd == undefined
                                ? ""
                                : this.driverForm1.value.thrusdayEnd,
                            isClosed: !this.IsThu,
                        },
                        {
                            days: "5",
                            openingTime: this.driverForm1.value.fridayStart == undefined
                                ? ""
                                : this.driverForm1.value.fridayStart,
                            closingTime: this.driverForm1.value.fridayEnd == undefined
                                ? ""
                                : this.driverForm1.value.fridayEnd,
                            isClosed: !this.IsFri,
                        },
                        {
                            days: "6",
                            openingTime: this.driverForm1.value.saturdayStart == undefined
                                ? ""
                                : this.driverForm1.value.saturdayStart,
                            closingTime: this.driverForm1.value.saturdayEnd == undefined
                                ? ""
                                : this.driverForm1.value.saturdayEnd,
                            isClosed: !this.IsSat,
                        },
                    ];
                    // data["timings"] = this.timings;
                    let formData = new FormData();
                    formData.append("data", JSON.stringify(data));
                    formData.append("timings", JSON.stringify(this.timings));
                    formData.append("pic", this.File);
                    // formData.append("timings", this.timings);
                    console.log("Timings", this.timings);
                    for (var pair of formData.entries()) {
                        console.log(pair[0] + ', ' + pair[1]);
                    }
                    console.log("Data", formData);
                    // return;
                    this.api.adddriver(formData).subscribe(res => {
                        // console.log("Response",res);
                        // return
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
    monday(event) {
        if (event) {
            this.driverForm1.controls["mondayStart"].enable();
            this.driverForm1.controls["mondayEnd"].enable();
        }
        else {
            this.driverForm1.controls["mondayStart"].disable();
            this.driverForm1.controls["mondayEnd"].disable();
        }
    }
    tuesday(event) {
        if (event) {
            this.driverForm1.controls["tuesdayStart"].enable();
            this.driverForm1.controls["tuesdayEnd"].enable();
        }
        else {
            this.driverForm1.controls["tuesdayStart"].disable();
            this.driverForm1.controls["tuesdayEnd"].disable();
        }
    }
    wednesday(event) {
        if (event) {
            this.driverForm1.controls["wednesdayStart"].enable();
            this.driverForm1.controls["wednesdayEnd"].enable();
        }
        else {
            this.driverForm1.controls["wednesdayStart"].disable();
            this.driverForm1.controls["wednesdayEnd"].disable();
        }
    }
    thrusday(event) {
        if (event) {
            this.driverForm1.controls["thrusdayStart"].enable();
            this.driverForm1.controls["thrusdayEnd"].enable();
        }
        else {
            this.driverForm1.controls["thrusdayStart"].disable();
            this.driverForm1.controls["thrusdayEnd"].disable();
        }
    }
    friday(event) {
        // console.log("Event",event);
        if (event) {
            this.driverForm1.controls["fridayStart"].enable();
            this.driverForm1.controls["fridayEnd"].enable();
        }
        else {
            this.driverForm1.controls["fridayStart"].disable();
            this.driverForm1.controls["fridayEnd"].disable();
        }
    }
    saturday(event) {
        if (event) {
            this.driverForm1.controls["saturdayStart"].enable();
            this.driverForm1.controls["saturdayEnd"].enable();
        }
        else {
            this.driverForm1.controls["saturdayStart"].disable();
            this.driverForm1.controls["saturdayEnd"].disable();
        }
    }
    sunday(event) {
        if (event) {
            this.driverForm1.controls["sundayStart"].enable();
            this.driverForm1.controls["sundayEnd"].enable();
        }
        else {
            this.driverForm1.controls["sundayStart"].disable();
            this.driverForm1.controls["sundayEnd"].disable();
        }
    }
    //Check the start time & end time of Monday
    checkMonday() {
        if (this.startTimeMonday && this.endTimeMonday) {
            if (this.startTimeMonday >= this.endTimeMonday) {
                this.driverForm1.controls["mondayStart"].reset();
                this.driverForm1.controls["mondayEnd"].reset();
                this.toastr.errorToastr("Invalid End Time");
            }
        }
    }
    // Check the start time & end time of Tuesday
    checkTuesday() {
        if (this.startTimeTuesday && this.endTimeTuesday) {
            if (this.startTimeTuesday >= this.endTimeTuesday) {
                this.driverForm1.controls["tuesdayStart"].reset();
                this.driverForm1.controls["tuesdayEnd"].reset();
                this.toastr.errorToastr("Invalid End Time");
            }
        }
    }
    // Check the start time & end time of Wednesday
    checkWednesday() {
        if (this.startTimeWednesday && this.endTimeWednesday) {
            if (this.startTimeWednesday >= this.endTimeWednesday) {
                this.driverForm1.controls["wednesdayStart"].reset();
                this.driverForm1.controls["wednesdayEnd"].reset();
                this.toastr.errorToastr("Invalid End Time");
            }
        }
    }
    // Check the start time & end time of Thrusday
    checkThrusday() {
        if (this.startTimeThrusday && this.endTimeThrusday) {
            if (this.startTimeThrusday >= this.endTimeThrusday) {
                this.driverForm1.controls["thrusdayStart"].reset();
                this.driverForm1.controls["thrusdayEnd"].reset();
                this.toastr.errorToastr("Invalid End Time");
            }
        }
    }
    // Check the start time & end time of Friday
    checkFriday() {
        if (this.startTimeFriday && this.endTimeFriday) {
            if (this.startTimeFriday >= this.endTimeFriday) {
                this.driverForm1.controls["fridayStart"].reset();
                this.driverForm1.controls["fridayEnd"].reset();
                this.toastr.errorToastr("Invalid End Time");
            }
        }
    }
    // Check the start time & end time of Saturday
    checkSaturday() {
        if (this.startTimeSaturday && this.endTimeSaturday) {
            if (this.startTimeSaturday >= this.endTimeSaturday) {
                this.driverForm1.controls["saturdayStart"].reset();
                this.driverForm1.controls["saturdayEnd"].reset();
                this.toastr.errorToastr("Invalid End Time");
            }
        }
    }
    // Check the start time & end time of Sunday
    checkSunday() {
        if (this.startTimeSunday && this.endTimeSunday) {
            if (this.startTimeSunday >= this.endTimeSunday) {
                this.driverForm1.controls["sundayStart"].reset();
                this.driverForm1.controls["sundayEnd"].reset();
                this.toastr.errorToastr("Invalid End Time");
            }
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
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 967px) {\n  .adddriver {\n    margin-top: 10px;\n  }\n\n  .user_serch_btn {\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 767px) {\n  .adddriver {\n    margin-top: 0px;\n  }\n\n  .user_filter,\n.user_serch_btn {\n    justify-content: center;\n  }\n\n  .text-right.adddriver {\n    text-align: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvZHJpdmVyL2RyaXZlci9DOlxcVXNlcnNcXHJhZ2h2XFxEZXNrdG9wXFxERVZcXFZlbmdvXFxtYXphdF9hZG1pbl9wYW5lbC9zcmNcXGFwcFxcY29vbGRhc2hcXHBhZ2VzXFxkcml2ZXJcXGRyaXZlclxcZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9kcml2ZXIvZHJpdmVyL2RyaXZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZ0JBQUE7RUNDTjs7RURDRTtJQUNJLHlCQUFBO0VDRU47QUFDRjtBRENBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VEQ0U7O0lBRUksdUJBQUE7RUNFTjs7RURBRTtJQUNJLDZCQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL2RyaXZlci9kcml2ZXIvZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XHJcbiAgICAuYWRkZHJpdmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJfc2VyY2hfYnRuIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5hZGRkcml2ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC51c2VyX2ZpbHRlcixcclxuICAgIC51c2VyX3NlcmNoX2J0biB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodC5hZGRkcml2ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XG4gIC5hZGRkcml2ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAudXNlcl9zZXJjaF9idG4ge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWRkZHJpdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAudXNlcl9maWx0ZXIsXG4udXNlcl9zZXJjaF9idG4ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRleHQtcmlnaHQuYWRkZHJpdmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

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
            console.log('driverList', response);
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