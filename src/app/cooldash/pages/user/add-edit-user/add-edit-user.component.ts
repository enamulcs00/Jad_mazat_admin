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

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  userForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  File;
  id: any;
  userImage: any;
  userDetail: any;
  countryCodes: any;
  config1: object;
  config2: object;
  countryStatus: boolean = true;
  countryStatus1: boolean = false;
  countryStatus2: boolean = false;
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
        this.getUserById(this.id);
      }
    });
    this.userForm = this.formBuilder.group({
      firstName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3),
      Validators.maxLength(18),
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
      email: new FormControl("", Validators.compose([Validators.required, ,
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      emergencyPhone: this.formBuilder.group({
        phone: new FormControl("", [Validators.required, Validators.maxLength(15),
        Validators.minLength(7),
        Validators.pattern("^[0-9]*$")]),
        countryCode: new FormControl("", [Validators.required])
      }),
      password: new FormControl(""),
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
        this.userForm.controls["countryCode"].setValue(this.countryCodes[0]);
        this.userForm.controls['emergencyPhone'].get('countryCode').setValue(this.countryCodes[0]);
        this.userForm.get('password').setValidators([Validators.required, Validators.minLength(8)]);
        this.userForm.get('password').updateValueAndValidity();
      }
    });
  }

  getUserById(id) {
    this.api.getUserById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.userDetail = res["data"];
        this.setValues(this.userDetail);
      }
    });
  }

  async profilePic(event) {
    this.File = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.userImage = event.target.result;
      };
    }
  }

  setValues = data => {
    if (data) {
      this.userForm.patchValue({
        firstName: data.firstName,
        lastName: data.lastName,
        countryCode: data.countryCode,
        phone: data.phone,
        email: data.email
      });
      if (data && data.emergencyPhone) {
        this.userForm.controls.emergencyPhone.patchValue({
          phone: data.emergencyPhone.phone,
          countryCode: data.emergencyPhone.countryCode
        })
      }
      if (data.profilePic) {
        this.userImage = this.comm.imageUrl + data.profilePic;
      }
    }
  };

  selectionChanged1(event) {
    if (event.value) {
      this.countryStatus1 = true;
    } else {
      this.countryStatus1 = false;
      this.userForm.controls["countryCode"].setValue("");
    }
  }

  selectionChanged2(event) {
    if (event.value) {
      this.countryStatus2 = true;
    } else {
      this.countryStatus2 = false;
      this.userForm.controls['emergencyPhone'].get('countryCode').setValue("");
    }
  }

  update() {
    this.submitted = true;
    if (this.countryStatus1) {
      this.userForm.controls["countryCode"].setValue(this.userForm.controls["countryCode"].value.Code);
    }
    if (this.countryStatus2) {
      this.userForm.controls["emergencyPhone"].value.countryCode =
        this.userForm.controls["emergencyPhone"].value.countryCode.Code;
    }
    if ((
      this.userForm.value.countryCode &&
      this.userForm.value.countryCode.length > 0) || (
        this.userForm.controls['emergencyPhone'].get('countryCode') &&
        this.userForm.controls['emergencyPhone'].get('countryCode').value.length > 0)
    ) {
      if (this.userForm.valid) {
        this.countryStatus1 = false;
        this.countryStatus2 = false;
        var data = this.userForm.value;
        data['userId'] = this.id;
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("pic", this.File);
        this.api.updateUser(formData).subscribe(res => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.router.navigate(["/user/user"]);
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
          }
        });
      }
    }
    else {
      this.toastr.errorToastr("Please select the country code");
    }
  }

  submit() {
    console.log(this.userForm.value);
    this.submitted = true;
    this.userForm.controls["countryCode"].setValue(this.userForm.controls["countryCode"].value.Code);
    this.userForm.controls['emergencyPhone'].get('countryCode').setValue(this.userForm.controls["emergencyPhone"].value.countryCode.Code);
    if ((
      this.userForm.value.countryCode &&
      this.userForm.value.countryCode.length > 0 &&
      this.userForm.value.phone) || (
        this.userForm.controls['emergencyPhone'].get('countryCode') &&
        this.userForm.controls['emergencyPhone'].get('countryCode').value.length > 0 &&
        this.userForm.controls['emergencyPhone'].get('phone'))
    ) {
      if (this.submitted && this.userForm.valid) {
        var data = this.userForm.value;
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("pic", this.File);
        this.api.addUser(formData).subscribe(res => {
          if (res["response"]["success"]) {
            this.toastr.successToastr("User register successfully");
            this.router.navigate(["/user/user"]);
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
          }
        });
      }
    }
    else {
      this.toastr.errorToastr("Please select the country code");
    }
  }
}
