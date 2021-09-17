import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";
import { ApiService } from "../../../../cooldash/services/api/api.service";
import { CommonService } from "../../../../cooldash/services/common/common.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  id: any;
  contactForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (localStorage.getItem("admin")) {
      const data = JSON.parse(localStorage.getItem("admin"));
      if (data.id) {
        this.id = data.id;
      }
    }
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(15),
        ],
      ],
      // address: ["", [Validators.required]],
    });
    this.getContact();
  }

  save() {
    this.submitted=true;
    if (this.contactForm.valid){
      let body = {
        phone: this.contactForm.controls["phone"].value,
        email: this.contactForm.controls["email"].value,
        adminId:this.id
      };
        this.api.addCrm(body).subscribe(res => {
          if (res['response']['success']) {
            this.toastr.successToastr(res['response']['message']);
            this.getContact();
          } else {
            this.toastr.errorToastr(res['response']['message']);
          }
        });
    } else {
      this.toastr.errorToastr("Please fill the required fields");
    }
    
  }

  getContact() {
    this.api.getCrm(this.id).subscribe((res) => {
      if (res["response"]["success"]) {
        this.contactForm.controls["phone"].setValue(res["data"]["phone"]);
        this.contactForm.controls["email"].setValue(res["data"]["email"]);
      }
    });
  }

  //text only number
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  // Avoid empty Blank Space
  avoidBlankSpace(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }

  // Error Handling
  public errorHandling = (control: string, error: string) => {
    return this.contactForm.controls[control].hasError(error);
  };
}
