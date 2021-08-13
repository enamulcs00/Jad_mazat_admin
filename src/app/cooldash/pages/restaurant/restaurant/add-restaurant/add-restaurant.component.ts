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
// import currencySymbol from 'currency-symbol';

// var cc = require('currency-codes');

@Component({
  selector: "app-add-restaurant",
  templateUrl: "./add-restaurant.component.html",
  styleUrls: ["./add-restaurant.component.scss"],
})
export class AddRestaurantComponent implements OnInit {
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
  foodType: any = [
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
  restaurantDetail: any;
  geoCoder: any;
  outlet: any;
  addressLocation: any;
  updateAddrssStatus: boolean = false;
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
      name: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.maxLength(16)])
      ),
      name_ar: new FormControl(
        "notUseable",

      ),
      // description: new FormControl(
      //   "",
      //   Validators.compose([Validators.required, Validators.maxLength(250)])
      // ),
      foodType: new FormControl("", Validators.compose([Validators.required])),
      discount: new FormControl("", [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
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
      // openTime: new FormControl("", Validators.compose([Validators.required])),
      // closeTime: new FormControl(
      //   "",
      //   Validators.compose([Validators.required])
      // ),
      password: new FormControl(""),
      // currency: new FormControl("", Validators.compose([Validators.required])),
      payBill: new FormControl("notUseAble", [
        // Validators.required,
        // Validators.pattern(/^[.\d]+$/),
      ]),
      tillNumber: new FormControl("notUseAble", [
        // Validators.required,
        // Validators.pattern(/^[.\d]+$/),
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
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
          }
        });
      }
    } else if (
      this.restaurantForm["controls"].outlet.value &&
      this.updateAddrssStatus == false
    ) {
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
      this.restaurantForm.controls["outlet"].setValue(
        address.formatted_address
      );
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
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }

  afterPickerOpen() {
    document.getElementsByTagName("html")[0].style.top = "";
  }
}
