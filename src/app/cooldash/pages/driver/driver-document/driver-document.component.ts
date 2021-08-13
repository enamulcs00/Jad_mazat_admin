import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { PopupService } from '../../../services/popup/popup.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-driver-document',
  templateUrl: './driver-document.component.html',
  styleUrls: ['./driver-document.component.scss']
})
export class DriverDocumentComponent implements OnInit {

  id;
  documents: any = [];
  history = window.history;
  driverImage: any;
  doucmentList: any = [
    {
      name: "Licence",
      image: "assets/dummy.png"
    },
    {
      name: "ID",
      image: "assets/dummy.png"
    },
    {
      name: "VehiclePhoto",
      image: "assets/dummy.png"
    },
    {
      name: "VehicleDocument",
      image: "assets/dummy.png"
    }
  ]
  File: any;
  File1: any;
  File2: any;
  File3: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public comm: CommonService,
    private api: ApiService,
    public toastr: ToastrManager,
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id) {
        this.getDriverDocument(this.id);
      }
    });
  }

  getDriverDocument(id) {
    this.api.getDriverDocument(id).subscribe(res => {
      if (res["response"]["success"]) {
        var document = res["data"];
        console.log(document)
        if (document && document.length == 4) {
          this.documents = res["data"];
        } else if (document && document.length == 0) {
          this.documents = this.doucmentList
        } else {
          this.documents = document;

          const obj1 = document.find(
            o => o.name === 'ID'
          );
          if (obj1 == undefined) {
            var d = {
              name: "ID",
              image: "assets/dummy.png"
            }
            this.documents.push(d)
          }
          const obj2 = document.find(
            o => o.name === 'Licence'
          );
          if (obj2 == undefined) {
            var d = {
              name: "Licence",
              image: "assets/dummy.png"
            }
            this.documents.push(d)
          }
          const obj3 = document.find(
            o => o.name === 'VehiclePhoto'
          );
          if (obj3 == undefined) {
            var d = {
              name: "VehiclePhoto",
              image: "assets/dummy.png"
            }
            this.documents.push(d)
          }
          const obj4 = document.find(
            o => o.name === 'VehicleDocument'
          );
          if (obj4 == undefined) {
            var d = {
              name: "VehicleDocument",
              image: "assets/dummy.png"
            }
            this.documents.push(d)
          }
        }
      }
    });
  }

  approved(item) {
    var data = {
      updateId: item.id,
      driverId: this.id,
      status: 1
    }
    this.updateDocument(data);
  }

  disapproved(item) {

    Swal.fire({
      title: "Are you sure?",
      text: "Please Tell us a reason ",
      icon: "warning",
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      debugger
      if (result.value) {
        var data = {
          updateId: item.id,
          driverId: this.id,
          status: 2,
          reason: result.value
        }
        // let formData = new FormData();
        // formData.append("data", JSON.stringify(data));
        this.updateDocument(data);

      }
    });


    //this.updateDocument(data);

  }

  updateDocument(data) {
    this.api.verifyDocument(data).subscribe(res => {
      if (res["response"]["success"]) {
        this.toastr.successToastr(res["response"]["message"]);
        this.getDriverDocument(this.id);
      }
    });
  }

  changeDocument(data) {
    this.popupService.editDocument(data).subscribe(res => {
      if (res == 'yes') {
        console.log(data);
        this.getDriverDocument(this.id);
      }
    })
  }

  async profilePic(event, data, index) {
    if (index == 0) {
      this.File = event.target.files[0];
    } else if (index == 1) {
      this.File1 = event.target.files[0];
    } else if (index == 2) {
      this.File2 = event.target.files[0];
    }
    else if (index == 3) {
      this.File3 = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        data.image = event.target.result;
      };
    }
  }

  addDocuments(data1, index) {
    var data = {
      name: data1.name
    }
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    if (index == 0) {
      formData.append("image", this.File);
    } else if (index == 1) {
      formData.append("image", this.File1);
    } else if (index == 2) {
      formData.append("image", this.File2);
    }
    else if (index == 3) {
      formData.append("image", this.File3);
    }
    this.api.addDriverDocuments(formData, this.id).subscribe(res => {
      if (res["response"]["success"]) {
        this.toastr.successToastr(res["response"]["message"]);
        setTimeout(() => {

          this.getDriverDocument(this.id);
        }, 0)
      }
    });
  }

}

