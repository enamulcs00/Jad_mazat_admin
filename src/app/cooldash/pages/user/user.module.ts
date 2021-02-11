import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { UiSwitchModule } from "ngx-ui-switch";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ViewComponent } from './view/view.component';
@NgModule({
  declarations: [UserComponent, AddEditUserComponent, ViewComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    UiSwitchModule,
    GooglePlaceModule,
    PaginationModule.forRoot()
  ]
})
export class UserModule { }
