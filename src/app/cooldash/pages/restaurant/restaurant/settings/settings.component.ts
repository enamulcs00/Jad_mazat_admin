import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  restaurantForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  settings: any;

  constructor(private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router) { }

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      deliveryFee: new FormControl("", Validators.compose([Validators.required])),
      tax: new FormControl("", Validators.compose([Validators.required])),
      serviceFee: new FormControl("", Validators.compose([Validators.required]))
    })
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
        } else {
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
        } else {
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
    })
  }

  setValues = data => {
    if (data) {
      this.restaurantForm.patchValue({
        deliveryFee: data.deliveryFee,
        tax: data.tax,
        serviceFee: data.serviceFee
      });
    }
  };
}
