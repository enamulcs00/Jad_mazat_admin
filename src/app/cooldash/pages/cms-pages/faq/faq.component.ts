import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";
import { ApiService } from "../../../../cooldash/services/api/api.service";
import { CommonService } from "../../../../cooldash/services/common/common.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  data: FormArray;
  faqForm: FormGroup;
  faqData: any;
  submitted: boolean=false;
  dummyData: any;
  faqFlag: any;
  id: any;
  showRemove:any;

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

    this.faqForm = formBuilder.group({
      data: new FormArray([],[Validators.required]),
    });
  }

  ngOnInit() {
    this.getFaqData();
    this.dummyData = [
      {
        question: "",
        answer: "",
      },
    ];
  }

  getFaqData() {
    this.api.getCrm(this.id).subscribe((res: any) => {
      if (res["response"]["success"]) {
        if (res["data"]["faqs"]) {
          this.faqData = res["data"]["faqs"];
          if (this.faqData.length) {
            this.setSpecifications(this.faqData);
            this.showRemove = true;
          }
          if (!this.faqData.length) {
            this.setSpecifications(this.dummyData);
            this.showRemove = false;
          }
        } else {
          this.toastr.errorToastr("Failed to retrieve FAQ's from Server");
          this.setSpecifications(this.dummyData);
          this.showRemove = false;
        }
      }
    });
  }

  setSpecifications(item) {
    const formArray = new FormArray([]);
    for (let x of item) {
      // console.log(x);
      formArray.push(
        this.formBuilder.group({
          question: x.question,
          answer: x.answer,
        })
      );
    }
    this.faqForm.setControl("data", formArray);
  }

  // Avoid empty Blank Space
  avoidBlankSpace(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }

  saveFaq() {
    this.submitted = true;
    if (this.faqForm.valid) {
      let body = {
        faqs: this.faqForm.get("data").value,
        adminId: this.id,
      };
      // console.log(body, "FAQ");
      // return;
      this.api.addCrm(body).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.getFaqData();
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    } else {
      this.faqForm.markAllAsTouched()
      this.toastr.errorToastr("Please fill the required fields");
    }
  }

  addNewSpecification() {
    this.showRemove = true;
    this.specification().push(this.newSpecifiaction());
  }
  removeSpecification(i: number) {
    this.specification().removeAt(i);
  }

  newSpecifiaction(): FormGroup {
    return this.formBuilder.group({
      question: new FormControl("", [Validators.required]),
      answer: new FormControl("", [Validators.required]),
    });
  }

  specification(): FormArray {
    return this.faqForm.get("data") as FormArray;
  }

  public errorHandling = (control: string, error: string) => {
    return this.faqForm.controls[control].hasError(error);
  };

  add() {
    let row = document.createElement("div");
    row.className = "bg-light p-3 mb-3";
    row.innerHTML = `
      <div class="form-group">
      <input type="text" class="form-control" placeholder="Add Quetions">
      </div>
      <div class="">
      <textarea class="form-control" rows="3" placeholder="Add Answer here"></textarea>
      </div>
      `;
    document.querySelector(".showInputField").appendChild(row);
  }
}
