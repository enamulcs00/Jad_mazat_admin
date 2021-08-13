import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../services/common/common.service";
import { ApiService } from "../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-document-modal',
  templateUrl: './document-modal.component.html',
  styleUrls: ['./document-modal.component.scss']
})
export class DocumentModalComponent implements OnInit {
  categoryImage: any;
  File;
  submitted: boolean = false;
  item: any;

  constructor(
    private dialog: MatDialogRef<DocumentModalComponent>,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    if (this.item) {
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
      console.log(this.item)
      if (this.item.image) {
        this.categoryImage = this.comm.imageUrl + this.item.image;
      }
    }
  };

  close() {
    this.dialog.close();
  }

  onUpdate() {
    this.submitted = true;
    if (this.File) {
      let formData = new FormData();
      if (this.File) {
        formData.append("image", this.File);
        this.api.editDriverDocument(formData, this.item._id).subscribe(res => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.dialog.close("yes");
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
            this.dialog.close("no");
          }
        });
      }
    } else {
      this.dialog.close("no");
    }
  }
}