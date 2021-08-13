import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import Swal from "sweetalert2";
declare var swal: any;

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss']
})
export class VehicleTypeComponent implements OnInit {
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  vehicleList: Array<any> = [];
  imageUrl: string;
  searchText: string = "";
  allData: any[];

  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService
  ) { }

  ngOnInit() {
    this.imageUrl = this.comm.imageUrl;
    this.getVehicleTypes();
  }

  getVehicleTypes() {
    this.api.getAllVehicle().subscribe(response => {
      console.log(response["response"]);
      if (response["response"]["success"]) {
        this.vehicleList = response["data"];
        this.allData = this.vehicleList
        for (var data of this.vehicleList) {
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
        // this.totalItems = response.count;
      }
      if (!response["success"]) return;
    });
  }

  searchVehicleType() {
    this.vehicleList = this.allData.filter(
      row => row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
  }

  onEditSelect(item) {
    this.dialogService.editVehicleType(item).subscribe(res => {
      if (res == "yes") {
        this.getVehicleTypes();
      }
    });
  }
  reset() {
    this.searchText = ''
    this.getVehicleTypes()
  }

  addVehicleType() {
    this.dialogService.addVehicleType().subscribe(res => {
      if (res == "yes") {
        this.getVehicleTypes();
      }
    });
  }

  deleteVehicle(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Vehicle Type!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          name: item.name,
          updateId: item._id,
          status: 2
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", item.image);
        this.api.updateVehicle(formData).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getVehicleTypes();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  updateActiveStatus(item) {
    var data = {
      name: item.name,
      updateId: item._id,
      status: item.status ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.updateVehicle(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getVehicleTypes();
      }
      if (!res["response"]["success"]) return;
    });
  }
}
