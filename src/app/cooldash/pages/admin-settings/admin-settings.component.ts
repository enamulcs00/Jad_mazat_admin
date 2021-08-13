import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormGroupName,
} from "@angular/forms";

@Component({
  selector: "app-admin-settings",
  templateUrl: "./admin-settings.component.html",
  styleUrls: ["./admin-settings.component.scss"],
})
export class AdminSettingsComponent implements OnInit {
  senderId: string;

  adminForm: FormGroup;
  constructor(
    private api: ApiService,
    public toastr: ToastrManager,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getAdminSettings();

    this.adminForm = this.formBuilder.group({
      senderId: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(1)])
      ),
    });
  }

  updateAdminSettings() {
    console.log(this.senderId);
    let id = localStorage.getItem("id");
    var data = {
      adminId: id,
      senderId: this.senderId,
    };
    // let formData = new FormData();
    // formData.append("data", JSON.stringify(data));
    // formData.append("pic", item.profilePic);

    this.api.updateAdminSettings(data).subscribe((res: any) => {
      if (res["response"]["success"]) {
        console.log("Successfully  Updated.");
        console.log(res);

        this.toastr.successToastr(res["response"]["message"]);
        this.getAdminSettings();
      }
      if (!res["response"]["success"]) {
        console.log("Error.");

        this.toastr.errorToastr(res["response"]["message"]);
        return;
      }
    });
  }

  getAdminSettings() {
    let id = localStorage.getItem("id");

    this.api.getAdminSettings(id).subscribe((res: any) => {
      if (res["response"]["success"]) {
        console.log("Admin Settings =>");
        console.log(res);
        this.senderId = res.data.senderId;
        return;
      }
      if (!res["response"]["success"]) {
        console.log("Error", res);
        this.toastr.errorToastr(res["response"]["message"]);
        return;
      }
    });
  }
}
