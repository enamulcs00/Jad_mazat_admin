import { Component, OnInit } from '@angular/core';
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
declare var google: any;
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: 'app-add-edit-vender',
  templateUrl: './add-edit-vender.component.html',
  styleUrls: ['./add-edit-vender.component.scss']
})
export class AddEditVenderComponent implements OnInit {

  venderForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  File;
  id;
  venderDetail: any;
  geoCoder: any;
  address: any;
  addressLocation: any;
  updateAddrssStatus: boolean = false;
  latitude: number
  longitude: number

  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id != undefined) {
        this.getVenderById(this.id);
      }
    });
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.venderForm = this.formBuilder.group({
      firstName: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(25)])),
      lastName: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(25)])),
      countryCode: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(6)])),
      phone: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(15)])),
      address: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    });
    if (!this.id) {
      this.venderForm.get('address').setValidators([Validators.required]);
      this.venderForm.get('address').updateValueAndValidity();
      this.venderForm.get('email').setValidators([Validators.required, Validators.pattern(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      )]);
      this.venderForm.get('email').updateValueAndValidity();
      this.venderForm.get('password').setValidators([Validators.required, Validators.minLength(8)]);
      this.venderForm.get('password').updateValueAndValidity();
    }

  }

  getVenderById(id) {
    this.api.getVenderById(id).subscribe(res => {
      if (res["response"]["success"]) {
        console.log(res)
        this.venderDetail = res["data"];
        this.setValues(res["data"]);
      }
    });
  }

  setValues = data => {
    if (data) {
      this.latitude = data.detail.latitude
      this.longitude = data.detail.longitude
      this.address = data.detail.address
      this.venderForm.patchValue({
        firstName: data.detail.firstName,
        lastName: data.detail.lastName,
        email: data.detail.email,
        countryCode: data.detail.countryCode,
        phone: data.detail.phone,
        address: data.detail.address
      });
    }
  };

  // getAddress(lat, long) {
  //   this.geoCoder.geocode(
  //     { location: { lat: lat, lng: long } },
  //     (results, status) => {
  //       this.addressLocation = results[0].formatted_address;
  //       this.address = {
  //         address: this.addressLocation,
  //         latitude: lat,
  //         longitude: long
  //       };
  //     }
  //   );
  // }

  handleAddress(address) {
    this.updateAddrssStatus = true;
    if (address.formatted_address) {
      // console.log(address.formatted_address, address.geometry.location.lat(), address.geometry.location.lng())
      this.address = address.formatted_address
      this.latitude = address.geometry.location.lat()
      this.longitude = address.geometry.location.lng()
      this.venderForm.controls["address"].setValue(
        address.formatted_address
      );
    }
  }


  submit() {
    this.submitted = true;
    if (this.address && this.updateAddrssStatus) {
      if (this.submitted && this.venderForm.valid) {
        var data = this.venderForm.value;
        // delete data.password
        if (this.address) {
          console.log(this.address)
          data.address = this.address;
          data.latitude = this.latitude;
          data.longitude = this.longitude;
        }

        this.api.addVender(data).subscribe(res => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.router.navigate(["/shuttle/vender"]);
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
          }
        });
      }
    } else if (this.venderForm['controls'].outlet.value && (this.updateAddrssStatus == false)) {
      this.toastr.errorToastr("Please select a valid address from suggestions.");
    }
  }


  update() {
    this.submitted = true;
    if (this.venderForm.valid) {
      var data = this.venderForm.value;
      delete data.password
      if (this.address) {
        data.address = this.address;
        data.latitude = this.latitude;
        data.longitude = this.longitude;
      }
      this.api.updateVender(this.id, data).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/shuttle/vender"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }

}
