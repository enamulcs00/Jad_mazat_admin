import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../../services/common/common.service";
import { ApiService } from "../../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";

declare var $: any;
@Component({
  selector: 'app-restaurant-type-modal',
  templateUrl: './restaurant-type-modal.component.html',
  styleUrls: ['./restaurant-type-modal.component.scss']
})
export class RestaurantTypeModalComponent implements OnInit {

  categoryForm: FormGroup;
  categoryImage: any;
  File;
  submitted: boolean = false;
  item: any;
  restaurantId;

  constructor(
    private dialog: MatDialogRef<RestaurantTypeModalComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required]))
    });
    if (this.item) {
      this.setValues();
    }
  }

  setValues = () => {
    if (this.item) {
      this.categoryForm.patchValue({
        name: this.item.name
      });
    }
  };

  onSubmit() {
    this.submitted = true;
    if (this.categoryForm.valid && this.submitted) {
      var data = {
        name: this.categoryForm.controls["name"].value,
        restaurantId: this.restaurantId
      };
      this.api.addRestaurantFoodType(data).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.dialog.close("yes");
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
          this.dialog.close("no");
        }
      });
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.categoryForm.controls[control].hasError(error);
  };

  close() {
    this.dialog.close();
  }

  onUpdate() {
    this.submitted = true;
    if (this.categoryForm.valid && this.submitted) {
      var data = {
        name: this.categoryForm.controls["name"].value,
        updateId: this.item._id,
        restaurantId: this.item.restaurantId
      };
      this.api.editRestaurantFoodType(data).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.dialog.close("yes");
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
          this.dialog.close("no");
        }
      });
    }
  }
}