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
import * as moment from 'moment';
@Component({
  selector: 'app-add-edit-coupon',
  templateUrl: './add-edit-coupon.component.html',
  styleUrls: ['./add-edit-coupon.component.scss']
})

export class AddEditCouponComponent implements OnInit {
  couponForm: FormGroup;
  IsFlat:boolean = false
  IsPercentage:boolean = false
  history = window.history;
  submitted: boolean = false;
  id: any;
  couponDetail: any;
  startMinDate = moment(new Date()).subtract(1, 'd').format('YYYY-MM-DD')
  endMinDate = moment(new Date()).subtract(1, 'd').format('YYYY-MM-DD')
  discountType: any = [
    {
      name: "Percentage",
      value: 0
    },
    {
      name: "Flat",
      value: 1
    },
    {
      name: "Both",
      value: 2
    }
  ];

  verticalTypes: any = [
    {
      name: "Restaurant",
      value: 0
    },
    {
      name: "Store",
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
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id != undefined) {
        this.getCouponByID(this.id);
      }
    });
    this.couponForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(15)])),
      code: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(15)])),
      description: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.maxLength(250)])
      ),
      type: new FormControl("", Validators.compose([Validators.required])),
      discount: new FormControl("", Validators.compose([Validators.required])),
      maxDiscount: new FormControl("", Validators.compose([Validators.required])),
      // useLimit: new FormControl("", Validators.compose([Validators.required])),
      // minAmountToApply: new FormControl("", Validators.compose([Validators.required])),
      startDate: new FormControl("", Validators.compose([Validators.required])),
      endDate: new FormControl("", Validators.compose([Validators.required])),
      // perDayLimit: new FormControl("", Validators.compose([Validators.required])),
      verticalType: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  getCouponByID(id) {
    this.api.getPromocodeById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.couponDetail = res["data"];
        this.setValues(this.couponDetail);
      }
    });
  }

  setValues = data => {
    if (data) {
      this.couponForm.patchValue({
        name: data.name,
        code: data.code,
        description: data.description,
        type: data.type,
        discount: data.discount,
        maxDiscount: data.maxDiscount,
        // useLimit: data.useLimit,
        // minAmountToApply: data.minAmountToApply,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        // perDayLimit: data.perDayLimit,
        verticalType: data.verticalType
      });
    }
  };

  update() {
    this.submitted = true;
    console.log(this.couponForm, this.couponForm.value);
    if (this.couponForm.valid) {
      this.couponForm.controls['endDate'].setValue((new Date(this.couponForm.controls['endDate'].value).getTime()))
      this.couponForm.controls['startDate'].setValue(new Date(this.couponForm.controls['startDate'].value).getTime())
      var data = this.couponForm.value;
      data['updateId'] = this.id;
      this.api.updatePromoCode(data).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/coupon/coupon"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }

  submit() {
    this.submitted = true;
    if (this.submitted && this.couponForm.valid) {
      // const date1 = new Date(this.couponForm.controls['startDate'].value);
      // const date2 = new Date(this.couponForm.controls['endDate'].value);
      // if (date1.getTime() == date2.getTime()) return this.toastr.errorToastr('Please select valid Date')
      this.couponForm.controls['endDate'].setValue((new Date(this.couponForm.controls['endDate'].value).getTime()))
      this.couponForm.controls['startDate'].setValue(new Date(this.couponForm.controls['startDate'].value).getTime())
      this.api.addPromoCode(this.couponForm.value).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/coupon/coupon"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
  afterPickerOpen() {
    document.getElementsByTagName('html')[0].style.top = '';
  }

  emitValue(e) {
    this.endMinDate = moment(e.value).subtract(1, 'd').format('YYYY-MM-DD')
  }
  onChangeDiscType(e){
    console.log('Type',e);
    if(e==0){
      this.IsFlat = false
      this.IsPercentage = true
      this.couponForm.controls['maxDiscount'].reset()
      this.couponForm.controls['maxDiscount'].clearValidators()
      this.couponForm.controls['maxDiscount'].updateValueAndValidity();
      this.couponForm.controls['discount'].setValidators(Validators.required)
      this.couponForm.controls['discount'].updateValueAndValidity();
    }else if(e==1){
      this.IsFlat = true
      this.IsPercentage = false
      this.couponForm.controls['discount'].reset()
      this.couponForm.controls['discount'].clearValidators()
      this.couponForm.controls['discount'].updateValueAndValidity();
      this.couponForm.controls['maxDiscount'].setValidators(Validators.required)
      this.couponForm.controls['maxDiscount'].updateValueAndValidity();
    }else if(e==2){
      this.IsFlat = false
      this.IsPercentage = false
      this.couponForm.controls['maxDiscount'].setValidators(Validators.required)
      this.couponForm.controls['maxDiscount'].updateValueAndValidity();
      this.couponForm.controls['discount'].setValidators(Validators.required)
      this.couponForm.controls['discount'].updateValueAndValidity();
    }
  }
} 
