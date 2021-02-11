import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupName,
  FormArray
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-add-shuttle-route',
  templateUrl: './add-shuttle-route.component.html',
  styleUrls: ['./add-shuttle-route.component.scss']
})
export class AddShuttleRouteComponent implements OnInit {
  shuttleRouteForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  id: any;
  shuttleDetail: any;
  loctionList: any[];
  outlet: any;
  startTime: any;
  endTime: any;
  locArr = []
  venders: any = []

  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getAllShuttleLocation();
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id != undefined)
        this.getShuttleRouteById(this.id);
    });
    this.allVenders()
    this.shuttleRouteForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      startPoint: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      endPoint: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      venderId: new FormControl(""),
      stopPoints: this.formBuilder.array([this.formBuilder.group({ coordinates: ['', Validators.required], fare: ['', Validators.required], time: ['', Validators.required] })]),
      totalFare: new FormControl("", Validators.compose([Validators.required])),
      startTime: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      endTime: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  get stopPoints() {
    return this.shuttleRouteForm.get('stopPoints') as FormArray;
  }

  getAllShuttleLocation() {
    this.api.getAllShuttleLocationAdmin().subscribe(res => {
      if (res["response"]["success"]) {
        this.outlet = res["data"];
      }
    });
  }

  onStartTimeChange(event) {
    this.startTime = (event.value);
  }

  onEndTimeChange(event) {
    this.endTime = (event.value);
  }

  getShuttleRouteById(id) {
    this.api.getShuttleRouteById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.shuttleDetail = res["data"][0];
        this.setValues(this.shuttleDetail);
      }
    });
  }

  addStopPoint() {
    this.stopPoints.push(this.formBuilder.group({ coordinates: ['', Validators.required], fare: ['', Validators.required], time: ['', Validators.required] }));
  }

  deleteStopPoint(index) {
    this.stopPoints.removeAt(index);
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
      this.shuttleRouteForm.patchValue({
        name: data.name,
        startPoint: data.startPoint[0]._id,
        endPoint: data.endPoint[0]._id,
        totalFare: data.totalFare,
        venderId: data.venderId._id,
        startTime: moment(data.startTime, 'HH:mm:ss').toDate(),
        endTime: moment(data.endTime, 'HH:mm:ss').toDate()
      })

      this.shuttleRouteForm.setControl('stopPoints', this.createArray(data.stopPoints));
      this.startTime = moment(data.startTime, 'HH:mm:ss').toDate();
      this.endTime = moment(data.endTime, 'HH:mm:ss').toDate();
    }
  };

  createArray(data: any[]): FormArray {
    return new FormArray(data.map(item => new FormGroup({
      fare: new FormControl(item['fare'], Validators.required),
      coordinates: new FormControl(item['coordinates']['_id'], Validators.required),
      time: new FormControl(moment(item.time, 'HH:mm:ss').toDate(), Validators.required),
    })));
  }

  update() {
    this.submitted = true;
    this.locArr = []
    if (this.shuttleRouteForm.controls["startPoint"].value) {
      this.locArr.push(this.shuttleRouteForm.controls["startPoint"].value)
    }
    if (this.shuttleRouteForm.controls["endPoint"].value) {
      this.locArr.push(this.shuttleRouteForm.controls["endPoint"].value)
    }
    if (this.shuttleRouteForm.controls["stopPoints"].value && this.shuttleRouteForm.controls["stopPoints"].value.length) {
      this.shuttleRouteForm.controls["stopPoints"].value.map(val => {
        if (val.coordinates) this.locArr.push(val.coordinates)
      })
    }
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    let dup = [...new Set(findDuplicates(this.locArr))]

    if (dup.length) {
      this.toastr.errorToastr('Same stop points added multiple times');
    } else {
      if (this.submitted && this.shuttleRouteForm.valid) {
        this.shuttleRouteForm.controls["stopPoints"].value.forEach(function (part, index, theArray) {
          part.time = new Date(part.time).toLocaleTimeString('it-IT')
        })
        var data = {
          startPoint: this.shuttleRouteForm.controls["startPoint"].value,
          endPoint: this.shuttleRouteForm.controls["endPoint"].value,
          name: this.shuttleRouteForm.controls["name"].value,
          stopPoints: this.shuttleRouteForm.controls["stopPoints"].value,
          totalFare: this.shuttleRouteForm.controls["totalFare"].value,
          startTime: new Date(this.shuttleRouteForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
          endTime: new Date(this.shuttleRouteForm.controls["endTime"].value).toLocaleTimeString('it-IT'),
          venderId: this.shuttleRouteForm.controls["venderId"].value

        }
        this.api.updateShuttleRoute(this.id, data).subscribe(res => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.router.navigate(["/shuttle/shuttle-route"]);
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
          }
        });
      } else {
        console.log('not valid', this.shuttleRouteForm)
      }
    }
  }

  submit() {
    this.submitted = true;
    this.locArr = []
    if (this.shuttleRouteForm.controls["startPoint"].value) {
      this.locArr.push(this.shuttleRouteForm.controls["startPoint"].value)
    }
    if (this.shuttleRouteForm.controls["endPoint"].value) {
      this.locArr.push(this.shuttleRouteForm.controls["endPoint"].value)
    }
    if (this.shuttleRouteForm.controls["stopPoints"].value && this.shuttleRouteForm.controls["stopPoints"].value.length) {
      this.shuttleRouteForm.controls["stopPoints"].value.map(val => {
        if (val.coordinates) this.locArr.push(val.coordinates)
      })
    }


    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    let dup = [...new Set(findDuplicates(this.locArr))]
    console.log(this.locArr, dup)

    if (dup.length) {
      this.toastr.errorToastr('Same stop points added multiple times');
    } else {
      if (this.submitted && this.shuttleRouteForm.valid) {
        this.shuttleRouteForm.controls["stopPoints"].value.forEach(function (part, index, theArray) {
          part.time = new Date(part.time).toLocaleTimeString('it-IT')
        })
        var data = {
          startPoint: this.shuttleRouteForm.controls["startPoint"].value,
          endPoint: this.shuttleRouteForm.controls["endPoint"].value,
          name: this.shuttleRouteForm.controls["name"].value,
          stopPoints: this.shuttleRouteForm.controls["stopPoints"].value,
          totalFare: this.shuttleRouteForm.controls["totalFare"].value,
          startTime: new Date(this.shuttleRouteForm.controls["startTime"].value).toLocaleTimeString('it-IT'),
          endTime: new Date(this.shuttleRouteForm.controls["endTime"].value).toLocaleTimeString('it-IT'),
          venderId: this.shuttleRouteForm.controls["venderId"].value
        }
        this.api.addShuttleRoute(data).subscribe(res => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.router.navigate(["/shuttle/shuttle-route"]);
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
          }
        });
      }
    }
  }

  onOptionsSelected(val: any, field: any) {
    this.locArr = []
    if (this.shuttleRouteForm.controls["startPoint"].value) {
      this.locArr.push(this.shuttleRouteForm.controls["startPoint"].value)
    }
    if (this.shuttleRouteForm.controls["endPoint"].value) {
      this.locArr.push(this.shuttleRouteForm.controls["endPoint"].value)
    }
    if (this.shuttleRouteForm.controls["stopPoints"].value && this.shuttleRouteForm.controls["stopPoints"].value.length) {
      this.shuttleRouteForm.controls["stopPoints"].value.map(val => {
        if (val.coordinates) this.locArr.push(val.coordinates)
      })
    }
    let arr = this.locArr.filter(v => v == val)
    if (arr.length >= 2) {
      if(field == 'endPoint') this.shuttleRouteForm.controls["endPoint"].setValue("");
      this.shuttleRouteForm.controls["startPoint"].value == ""
      this.toastr.errorToastr('This stop points already added');
    }
  }
}
