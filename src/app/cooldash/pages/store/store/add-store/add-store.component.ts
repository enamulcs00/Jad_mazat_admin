import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
declare var google: any;
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-add-store",
  templateUrl: "./add-store.component.html",
  styleUrls: ["./add-store.component.scss"],
})
export class AddStoreComponent implements OnInit {
  restaurantForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  categoryList: any;
  selectedCat: Array<any> = [];
  categoryImage: any;
  File;
  dropDownSetting: any;
  singleDropDownSetting: any;
  id;
  categoryBody = { type: "", list: [] };
  restaurantDetail: any;
  geoCoder: any;
  outlet: any;
  addressLocation: any;
  currencyOptions: any = [];

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
      name: new FormControl("", Validators.compose([Validators.required])),
      name_ar: new FormControl("notUseable"),
      // description: new FormControl(
      //   "",
      //   Validators.compose([Validators.required, Validators.maxLength(250)])
      // ),
      discount: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[.\d]+$/),
      ]),
      categories: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      // minOrderAmount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      avgOrderPrice: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[.\d]+$/),
      ]),
      discountUpto: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[.\d]+$/),
      ]),
      outlet: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      instagram: new FormControl("",[Validators.required]),
      // currency: new FormControl("", Validators.compose([Validators.required])),
      // openTime: new FormControl("", Validators.compose([Validators.required])),
      // closeTime: new FormControl(
      //   "",
      //   Validators.compose([Validators.required])
      // )
      payBill: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[.\d]+$/),
      ]),
      tillNumber: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[.\d]+$/),
      ]),
    });
    this.dropDownSetting = this.comm.dropSetting;
    this.singleDropDownSetting = this.comm.singleDropSetting;
    if (!this.id) {
      this.restaurantForm.get("outlet").setValidators([Validators.required]);
      this.restaurantForm.get("outlet").updateValueAndValidity();
      this.restaurantForm
        .get("email")
        .setValidators([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ]);
      this.restaurantForm.get("email").updateValueAndValidity();
      this.restaurantForm
        .get("password")
        .setValidators([Validators.required, Validators.minLength(8)]);
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

  async profilePic(event) {
    this.File = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.categoryImage = event.target.result;
      };
    }
  }

  setValues = (data) => {
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
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
          }
        });
      }
    } else if (this.restaurantForm["controls"].outlet.value) {
      this.toastr.errorToastr(
        "Please select a valid address from suggestions."
      );
    }
  }

  getAddress(lat, long) {
    this.geoCoder.geocode(
      { location: { lat: lat, lng: long } },
      (results, status) => {
        this.addressLocation = results[0].formatted_address;
        this.outlet = {
          address: this.addressLocation,
          latitude: lat,
          longitude: long,
        };
      }
    );
  }

  handleAddress(address) {
    if (address.formatted_address) {
      this.outlet = {
        address: address.formatted_address,
        latitude: address.geometry.location.lat(),
        longitude: address.geometry.location.lng(),
      };
      this.restaurantForm.controls["outlet"].setValue(
        address.formatted_address
      );
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
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
}
