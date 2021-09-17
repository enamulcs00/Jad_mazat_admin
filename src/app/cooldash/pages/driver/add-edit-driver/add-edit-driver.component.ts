import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupName
} from "@angular/forms";
import { CommonService } from "../../../services/common/common.service";
import { ApiService } from "../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
declare var google: any;
import { MapsAPILoader } from "@agm/core";
@Component({
  selector: 'app-add-edit-driver',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.scss']
})
export class AddEditDriverComponent implements OnInit {
  driverForm: FormGroup;
  driverForm1: FormGroup;
  IsMon = false;
  IsTue = false;
  IsThu = false;
  IsWed = false;
  IsFri = false;
  IsSat = false;
  IsSun = false;
  startTimeMonday: any;
  endTimeMonday: any;
  startTimeTuesday: any;
  endTimeTuesday: any;
  startTimeWednesday: any;
  endTimeWednesday: any;
  startTimeThrusday: any;
  endTimeThrusday: any;
  startTimeFriday: any;
  endTimeFriday: any;
  startTimeSaturday: any;
  endTimeSaturday: any;
  startTimeSunday: any;
  endTimeSunday: any;
  history = window.history;
  submitted: boolean = false;
  File;
  id: any;
  driverImage: any;
  driverDetail: any;
  countryCodes: any;
  config1: object;
  config2: object;
  countryStatus: boolean = true;
  vehicleTypes: any[];
  geoCoder: any;
  addressLocation: any;
  byDefaultType = 1;
  updateAddrssStatus: boolean = false;
  type: any = [
    {
      name: "Food and Grocery Delivery",
      value: 1
    },
    // {
    //   name: "Taxi",
    //   value: 2
    // },
    // {
    //   name: "Shuttle",
    //   value: 3
    // }
  ];
  updateAddress: any;
  countryStatus1: boolean = false;
  countryStatus2: boolean = false;
  address: { address: any; latitude: any; longitude: any; };
  timings: any;
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
        this.getDriverById(this.id);
      }
    });
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.driverForm = this.formBuilder.group({
      firstName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3),
      Validators.maxLength(16),
      Validators.pattern("^[a-zA-Z ]*$")])),
      lastName: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern("^[a-zA-Z ]*$")])
      ),
      countryCode: new FormControl("", Validators.compose([Validators.required])),
      phone: new FormControl("", [Validators.required, Validators.maxLength(15),
      Validators.minLength(7),
      Validators.pattern("^[0-9]*$")]),
      verticalType: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      vehicleName: new FormControl("", Validators.compose([Validators.required])),
      vehicleNumber: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl("", Validators.compose([Validators.required, ,
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      emergencyPhone: this.formBuilder.group({
        phone: new FormControl("", [Validators.required, Validators.maxLength(15),
        Validators.minLength(7),
        Validators.pattern("^[0-9]*$")]),
        countryCode: new FormControl("", [Validators.required])
      }),
      vehicleTypeId: new FormControl("", Validators.required),
      password: new FormControl(""),
      
      address: this.formBuilder.group({
        address: new FormControl("", Validators.required),
        latitude: new FormControl("", Validators.required),
        longitude: new FormControl("", Validators.required),
        location: new FormControl("", Validators.required),
        zipcode: new FormControl("", Validators.required)
      })

    });

    this.driverForm1 = this.formBuilder.group({
      
      mondayStart: ["", [Validators.required]],
      mondayEnd: ["", [Validators.required]],
      tuesdayStart: ["", [Validators.required]],
      tuesdayEnd: ["", [Validators.required]],
      wednesdayStart: ["", [Validators.required]],
      wednesdayEnd: ["", [Validators.required]],
      thrusdayStart: ["", [Validators.required]],
      thrusdayEnd: ["", [Validators.required]],
      fridayStart: ["", [Validators.required]],
      fridayEnd: ["", [Validators.required]],
      saturdayStart: ["", [Validators.required]],
      saturdayEnd: ["", [Validators.required]],
      sundayStart: ["", [Validators.required]],
      sundayEnd: ["", [Validators.required]],
    });
    this.comm.getCountryCode().subscribe(res => {
      this.countryCodes = res["countryArray"];
      this.config1 = {
        displayKey: "Code", //if objects array passed which key to be displayed defaults to description
        search: true, //true/false for the search functionlity defaults to false,
        height: "150px", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
        customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
        limitTo: this.countryCodes.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
        noResultsFound: "No results found!", // text to be displayed when no items are found while searching
        searchPlaceholder: "Search", // label thats displayed in search input,
        searchOnKey: "Code" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
      };
      this.config2 = {
        displayKey: "Code", //if objects array passed which key to be displayed defaults to description
        search: true, //true/false for the search functionlity defaults to false,
        height: "150px", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
        customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
        limitTo: this.countryCodes.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
        noResultsFound: "No results found!", // text to be displayed when no items are found while searching
        searchPlaceholder: "Search", // label thats displayed in search input,
        searchOnKey: "Code" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
      };
      if (!this.id) {
        this.driverForm.controls["countryCode"].setValue(this.countryCodes[0]);
        this.driverForm.controls['emergencyPhone'].get('countryCode').setValue(this.countryCodes[0]);
      }
    });
    if (!this.id) {
      this.driverForm.get('password').setValidators([Validators.required, Validators.minLength(8)]);
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

  async profilePic(event) {
    this.File = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.driverImage = event.target.result;
      };
    }
  }

  setValues = data => {
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
        })
      }
      if (data && data.address) {
        console.log(data.address)
        this.driverForm.controls.address.patchValue({
          location: data.address.location,
          latitude: data.address.latitude,
          address: data.address.address,
          longitude: data.address.longitude,
          zipcode: data.address.zipcode
        })
        this.updateAddress = this.driverForm.controls['address'].get('location').value;
      }
      if (data.profilePic) {
        this.driverImage = this.comm.imageUrl + data.profilePic;
      }
    }
  };

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
    } else {
      this.countryStatus1 = false;
      this.driverForm.controls["countryCode"].setValue("");
    }
  }

  selectionChanged2(event) {
    if (event.value) {
      this.countryStatus2 = true;
    } else {
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
    if ((
      this.driverForm.value.countryCode &&
      this.driverForm.value.countryCode.length > 0) || (
        this.driverForm.controls['emergencyPhone'].get('countryCode') &&
        this.driverForm.controls['emergencyPhone'].get('countryCode').value.length > 0)
    ) {
      if (this.driverForm.controls['address'].get('location').value === this.updateAddress) {
        this.editAddressUpdate();
      } else if ((this.updateAddrssStatus) && (this.driverForm.controls['address'].get('latitude').value !== "" && this.driverForm.controls['address'].get('location').value !== null) && (this.driverForm.controls['address'].get('longitude').value !== "" && this.driverForm.controls['address'].get('longitude').value !== null)) {
        this.editAddressUpdate();
      } else if ((this.driverForm.controls['address'].get('location').value) && (this.updateAddrssStatus == false)) {
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
        } else {
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
        console.log(key)
        address.address_components.forEach(key => {
          if (key.types[0] == 'locality') {
            this.address['location'] = (key.long_name);
          }
          if (key.types[0] === 'postal_code') {
            this.address['zipcode'] = key.long_name
          }
        })
      })
      this.driverForm.controls['address'].get('location').setValue(
        address.formatted_address
      );
      this.driverForm.controls['address'].get('zipcode').setValue(
        this.address['zipcode']
      );
      this.driverForm.controls['address'].get('longitude').setValue(
        this.address['longitude']
      );
      this.driverForm.controls['address'].get('latitude').setValue(
        this.address['longitude']
      );
    }
  }

  submit() {
    // console.log(this.driverForm.value);
    this.submitted = true;
    this.driverForm.controls["countryCode"].setValue(this.driverForm.controls["countryCode"].value.Code);
    this.driverForm.controls['emergencyPhone'].get('countryCode').setValue(this.driverForm.controls["emergencyPhone"].value.countryCode.Code);
    if ((
      this.driverForm.value.countryCode &&
      this.driverForm.value.countryCode.length > 0 &&
      this.driverForm.value.phone) || (
        this.driverForm.controls['emergencyPhone'].get('countryCode') &&
        this.driverForm.controls['emergencyPhone'].get('countryCode').value.length > 0 &&
        this.driverForm.controls['emergencyPhone'].get('phone'))
    ) {
      if (this.address && this.updateAddrssStatus) {
        if (this.submitted && this.driverForm.valid && this.driverForm1.valid) {
          var data = this.driverForm.value;
          // console.log("Form Value",this.driverForm.value);

          this.timings= [
            {
              days: "0",
              openingTime:
                this.driverForm1.value.sundayStart == undefined
                  ? ""
                  : this.driverForm1.value.sundayStart,
              closingTime:
                this.driverForm1.value.sundayEnd == undefined
                  ? ""
                  : this.driverForm1.value.sundayEnd,
              isClosed: !this.IsSun,
            },
            {
              days: "1",
              openingTime:
                this.driverForm1.value.mondayStart == undefined
                  ? ""
                  : this.driverForm1.value.mondayStart,
              closingTime:
                this.driverForm1.value.mondayEnd == undefined
                  ? ""
                  : this.driverForm1.value.mondayEnd,
              isClosed: !this.IsMon,
            },
            {
              days: "2",
              openingTime:
                this.driverForm1.value.tuesdayStart == undefined
                  ? ""
                  : this.driverForm1.value.tuesdayStart,
              closingTime:
                this.driverForm1.value.tuesdayEnd == undefined
                  ? ""
                  : this.driverForm1.value.tuesdayEnd,
              isClosed: !this.IsTue,
            },
            {
              days: "3",
              openingTime:
                this.driverForm1.value.wednesdayStart == undefined
                  ? ""
                  : this.driverForm1.value.wednesdayStart,
              closingTime:
                this.driverForm1.value.wednesdayEnd == undefined
                  ? ""
                  : this.driverForm1.value.wednesdayEnd,
              isClosed: !this.IsWed,
            },
            {
              days: "4",
              openingTime:
                this.driverForm1.value.thrusdayStart == undefined
                  ? ""
                  : this.driverForm1.value.thrusdayStart,
              closingTime:
                this.driverForm1.value.thrusdayEnd == undefined
                  ? ""
                  : this.driverForm1.value.thrusdayEnd,
              isClosed: !this.IsThu,
            },
            {
              days: "5",
              openingTime:
                this.driverForm1.value.fridayStart == undefined
                  ? ""
                  : this.driverForm1.value.fridayStart,
              closingTime:
                this.driverForm1.value.fridayEnd == undefined
                  ? ""
                  : this.driverForm1.value.fridayEnd,
              isClosed: !this.IsFri,
            },
            {
              days: "6",
              openingTime:
                this.driverForm1.value.saturdayStart == undefined
                  ? ""
                  : this.driverForm1.value.saturdayStart,
              closingTime:
                this.driverForm1.value.saturdayEnd == undefined
                  ? ""
                  : this.driverForm1.value.saturdayEnd,
              isClosed: !this.IsSat,
            },
          ];
          let formData = new FormData();
          formData.append("data", JSON.stringify(data));
          formData.append("pic", this.File);
          formData.append("timings", this.timings);
          // console.log("Timings",this.timings);
        //   for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
          // console.log("Data",formData);
          // return;
          this.api.adddriver(formData).subscribe(res => {
            // console.log("Response",res);
            // return
            if (res["response"]["success"]) {
              this.toastr.successToastr("Driver register successfully");
              this.router.navigate(["/driver/driver"]);
            } else {
              this.toastr.errorToastr(res["response"]["message"]);
            }
          });
        }
      } else if (this.driverForm['controls'].address.get('location').value && (this.updateAddrssStatus == false)) {
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
    } else {
      this.driverForm1.controls["mondayStart"].disable();
      this.driverForm1.controls["mondayEnd"].disable();
    }
  }

  tuesday(event) {
    if (event) {
      this.driverForm1.controls["tuesdayStart"].enable();
      this.driverForm1.controls["tuesdayEnd"].enable();
    } else {
      this.driverForm1.controls["tuesdayStart"].disable();
      this.driverForm1.controls["tuesdayEnd"].disable();
    }
  }

  wednesday(event) {
    if (event) {
      this.driverForm1.controls["wednesdayStart"].enable();
      this.driverForm1.controls["wednesdayEnd"].enable();
    } else {
      this.driverForm1.controls["wednesdayStart"].disable();
      this.driverForm1.controls["wednesdayEnd"].disable();
    }
  }

  thrusday(event) {
    if (event) {
      this.driverForm1.controls["thrusdayStart"].enable();
      this.driverForm1.controls["thrusdayEnd"].enable();
    } else {
      this.driverForm1.controls["thrusdayStart"].disable();
      this.driverForm1.controls["thrusdayEnd"].disable();
    }
  }

  friday(event) {
    // console.log("Event",event);
    if (event) {
      this.driverForm1.controls["fridayStart"].enable();
      this.driverForm1.controls["fridayEnd"].enable();
    } else {
      this.driverForm1.controls["fridayStart"].disable();
      this.driverForm1.controls["fridayEnd"].disable();
    }
  }

  saturday(event) {
    if (event) {
      this.driverForm1.controls["saturdayStart"].enable();
      this.driverForm1.controls["saturdayEnd"].enable();
    } else {
      this.driverForm1.controls["saturdayStart"].disable();
      this.driverForm1.controls["saturdayEnd"].disable();
    }
  }

  sunday(event) {
    if (event) {
      this.driverForm1.controls["sundayStart"].enable();
      this.driverForm1.controls["sundayEnd"].enable();
    } else {
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

  // Error Handling
  public errorHandling = (control: string, error: string) => {
    return this.driverForm1.controls[control].hasError(error);
  };

}
