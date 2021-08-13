import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupName
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-add-edit-shuttle',
  templateUrl: './add-edit-shuttle.component.html',
  styleUrls: ['./add-edit-shuttle.component.scss']
})
export class AddEditShuttleComponent implements OnInit {

  shuttleForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  File;
  id: any;

  shuttleDetail: any;
  countryCodes: any;
  driverList: any;
  venders: any = []
  shuttleRouteList: any;
  config1: object;
  config2: object;
  countryStatus: boolean = true;
  vehicleTypes: any[];
  byDefaultType = 1;
  updateAddrssStatus: boolean = false;
  shuttleType: any = [
    {
      name: "AC",
      value: "ac"
    },
    {
      name: "Non-AC",
      value: "non-ac"
    }
  ];
  seatType: any = [
    "Type 1 –11 Seater", "Type 2 –14 Seater", "Type 3 –33 Seater", "Type 4 –49 Seater Bus", "Type 5 –62 Seater Bus"
  ]
  seatNo: any = [
    11, 14, 33, 49, 62
  ]
  updateAddress: any;
  driverStatus: boolean = false;
  shuttleRouteStatus: boolean = false;
  dropDownSetting: any;
  currencyOptions: any = []
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currencyOptions = this.comm.currencyOptions

    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id != undefined) {
        this.getShuttleById(this.id);
      }
    });

    this.allVenders()
    this.shuttleForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      driver: new FormControl("", Validators.compose([Validators.required])),
      shuttleRoute: new FormControl("", [Validators.required]),
      shuttleType: new FormControl("", [Validators.required]),
      seatType: new FormControl("", [Validators.required]),
      currency: new FormControl("", [Validators.required]),
      venderId: new FormControl("")
      // startTime: new FormControl(
      //   "",
      //   Validators.compose([Validators.required])
      // ),
      // endTime: new FormControl("", Validators.compose([Validators.required])),
    });
    this.api.getAllShuttleDriver(this.id).subscribe(res => {
      console.log("drivers",res)
      this.driverList = res["data"];
      this.driverList.map((i) => { i.fullName = i.firstName + ' ' + i.lastName; });
      this.config1 = {
        displayKey: "fullName", //if objects array passed which key to be displayed defaults to description
        search: true, //true/false for the search functionlity defaults to false,
        height: "150px", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
        customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
        limitTo: this.driverList.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
        noResultsFound: "No results found!", // text to be displayed when no items are found while searching
        searchPlaceholder: "Search", // label thats displayed in search input,
        searchOnKey: "fullName" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
      };
    });
    this.api.getAllFreeRoute(this.id).subscribe(res => {
      this.shuttleRouteList = res["data"];
    });
    this.dropDownSetting = this.comm.dropSetting;

  }

  getShuttleById(id) {
    this.api.getShuttleById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.shuttleDetail = res["data"];
        this.setValues(this.shuttleDetail);
      }
    });
  }

  allVenders() {
    this.api.getVendersList().subscribe(res => {
      if (res["response"]["success"]) {
        this.venders = res["data"];
      }
    });
  }

  setValues = data => {
    if (data) {
      if (data.driver) {
        // console.log(data.driver);
        data.driver['fullName'] = (data.driver['firstName'] + ' ' + data.driver['lastName'])
        this.shuttleForm.patchValue({
          name: data.name,
          driver: data.driver,
          shuttleRoute: data.shuttleRoute,
          shuttleType: data.shuttleType,
          seatType: data.seatType,
          currency: data.currency,
          venderId: data.venderId._id
          // startTime: moment(data.startTime, 'HH:mm:ss').toDate(),
          // endTime: moment(data.endTime, 'HH:mm:ss').toDate(),
        });
      }
    }
  };


  selectionChanged1(event) {
    if (event.value) {
      this.driverStatus = true;
    } else {
      this.driverStatus = false;
      this.shuttleForm.controls["driver"].setValue("");
    }
  }

  selectionChanged2(event) {
    if (event.value) {
      this.shuttleRouteStatus = true;
    } else {
      this.shuttleRouteStatus = false;
      this.shuttleForm.controls["shuttleRoute"].setValue("");
    }
  }

  update() {
    this.submitted = true;
    if (this.submitted && this.shuttleForm.valid) {
      var data = {
        name: this.shuttleForm.controls["name"].value,
        driver: this.shuttleForm.controls["driver"].value._id,
        shuttleRoute: this.shuttleForm.controls["shuttleRoute"].value,
        shuttleType: this.shuttleForm.controls["shuttleType"].value,
        seatType: this.shuttleForm.controls["seatType"].value,
        venderId: this.shuttleForm.controls["venderId"].value

        // startTime: new Date(this.shuttleForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
        // endTime: new Date(this.shuttleForm.controls["endTime"].value).toLocaleTimeString('it-IT')
      }
      data['seatsAvailable'] = this.seatNo[data.seatType]
      this.api.updateShuttle(this.id, data).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/shuttle/shuttle"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }


  submit() {
    this.submitted = true;
    if (this.submitted && this.shuttleForm.valid) {
      var shuttleRoute = [];
      for (let data of this.shuttleForm.value.shuttleRoute) {
        shuttleRoute.push(data._id);
      }
      var data = {
        name: this.shuttleForm.controls["name"].value,
        driver: this.shuttleForm.controls["driver"].value._id,
        shuttleRoute: shuttleRoute,
        shuttleType: this.shuttleForm.controls["shuttleType"].value,
        seatType: this.shuttleForm.controls["seatType"].value,
        venderId: this.shuttleForm.controls["venderId"].value
        // startTime: new Date(this.shuttleForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
        // endTime: new Date(this.shuttleForm.controls["endTime"].value).toLocaleTimeString('it-IT')
      }
      data['seatsAvailable'] = this.seatNo[data.seatType]
      this.api.addShuttle(data).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/shuttle/shuttle"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
}
