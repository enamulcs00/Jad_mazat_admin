import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";

declare var $: any;
@Component({
  selector: "app-categorymodal",
  templateUrl: "./categorymodal.component.html",
  styleUrls: ["./categorymodal.component.scss"],
})
export class CategorymodalComponent implements OnInit {
  categoryForm: FormGroup;
  categoryImage: any;
  File;
  submitted: boolean = false;
  item: any;

  constructor(
    private dialog: MatDialogRef<CategorymodalComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(".*\\S.*[a-zA-z0-9 ]"),
        // Validators.pattern(
        //   "^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$"
        // ),
      ]),

      name_ar: new FormControl("notUseable", [

        // Validators.pattern(".*\\S.*[a-zA-z0-9 ]"),

        // Validators.pattern("^[\u0621-\u064A\u0660-\u0669 ]+$"),

        // Validators.pattern(
        //   "^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$"
        // ),
      ]),
    });
    if (this.item) {
      console.log(this.item);
      this.setValues();
    }
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

  setValues = () => {
    if (this.item) {
      this.categoryForm.patchValue({
        name: this.item.name,
        name_ar: this.item.name_ar,
      });
      if (this.item.image) {
        this.categoryImage = this.comm.imageUrl + this.item.image;
      }
    }
  };

  onSubmit() {
    this.submitted = true;
    if (this.File) {
      if (this.categoryForm.valid && this.submitted) {
        var data = {
          name: this.categoryForm.controls["name"].value.trim(),
          name_ar: this.categoryForm.controls["name_ar"].value.trim(),
        };
        console.log(data);
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", this.File);
        this.api.addFoodCategory(formData).subscribe((res) => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.dialog.close("yes");
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
            this.dialog.close("no");
          }
        });
      }
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.categoryForm.controls[control].hasError(error);
  };

  close() {
    this.dialog.close();
  }

  onUpdate() {
    this.submitted = true;
    if (this.File || this.item.image) {
      if (this.categoryForm.valid && this.submitted) {
        var data = {
          name: this.categoryForm.controls["name"].value.trim(),
          name_ar: this.categoryForm.controls["name_ar"].value.trim(),
          updateId: this.item._id,
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        if (this.File) {
          formData.append("image", this.File);
        } else {
          formData.append("image", this.item.image);
        }
        this.api.editFoodCategory(formData).subscribe((res) => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.dialog.close("yes");
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
            this.dialog.close("no");
          }
        });
      }
    }
  }
}
