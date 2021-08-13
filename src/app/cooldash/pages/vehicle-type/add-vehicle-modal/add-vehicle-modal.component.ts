import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../services/common/common.service";
import { ApiService } from "../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: 'app-add-vehicle-modal',
  templateUrl: './add-vehicle-modal.component.html',
  styleUrls: ['./add-vehicle-modal.component.scss']
})
export class AddVehicleModalComponent implements OnInit {
  vehicleForm: FormGroup;
  vehicleImage: any;
  File;
  submitted: boolean = false;
  item: any;
  // seatType: any = [
  //   "Type 1 –14 Seater", "Type 2 –10 Seater (Shuttle)", "Type 3 –29 Seater (Mini Bus)", "Type 4 –33 Seater (Mini Bus)", "Type 5 –49 Seater Bus",
  //   "Type 6 –45 Seater Bus with VIP", "Type 7 –36 Seater Bus with VIP", "Type 8 –62 Seater Bus"
  // ]
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
  constructor(
    private dialog: MatDialogRef<AddVehicleModalComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.vehicleForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]),
      verticalType: new FormControl("1",),
      fare: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      basefare: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      seats: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      // seatType: new FormControl("", [Validators.required])
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
        this.vehicleImage = event.target.result;
      };
    }
  }

  setValues = () => {
    if (this.item) {
      this.vehicleForm.patchValue({
        name: this.item.name,
        seats: this.item.seats,
        basefare: this.item.basefare,
        fare: this.item.fare,
        verticalType: this.item.verticalType
        // seatType: this.item.seatType
      });
      if (this.item.image) {
        this.vehicleImage = this.comm.imageUrl + this.item.image;
      }
    }
  };

  onSubmit() {
    this.submitted = true;
    if (this.File) {
      if (this.vehicleForm.valid && this.submitted) {
        var data = {
          name: this.vehicleForm.controls["name"].value.trim(),
          seats: this.vehicleForm.controls["seats"].value,
          basefare: this.vehicleForm.controls["basefare"].value,
          fare: this.vehicleForm.controls["fare"].value,
          verticalType: this.vehicleForm.controls["verticalType"].value,
          // seatType: this.vehicleForm.controls["seatType"].value
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", this.File);
        this.api.addVehicle(formData).subscribe(res => {
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
    return this.vehicleForm.controls[control].hasError(error);
  };

  close() {
    this.dialog.close();
  }

  onUpdate() {
    this.submitted = true;
    if (this.File || this.item.image) {
      if (this.vehicleForm.valid && this.submitted) {
        var data = {
          name: this.vehicleForm.controls["name"].value.trim(),
          seats: this.vehicleForm.controls["seats"].value,
          basefare: this.vehicleForm.controls["basefare"].value,
          fare: this.vehicleForm.controls["fare"].value,
          verticalType: this.vehicleForm.controls["verticalType"].value,
          updateId: this.item._id,
          // seatType: this.vehicleForm.controls["seatType"].value
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        if (this.File) {
          formData.append("image", this.File);
        } else {
          formData.append("image", this.item.image);
        }
        this.api.updateVehicle(formData).subscribe(res => {
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
