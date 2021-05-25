import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { Router } from "@angular/router";
declare var swal: any;
import Swal from "sweetalert2";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  totalItems: number;
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  driverList: Array<any> = [];
  imageUrl: string;
  limit: number = 25;
  maxSize: number = 5;
  bigTotalItems: number;
  bigCurrentPage: number = 1;
  numPages: number = 0;
  searchText: string = "";
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25
  };
  rating = 4;
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;
    this.getDriver();
  }

  setPage() {
    this.getDriver();
  }

  searchDriver() {
    this.currentPage = 1;
    this.getDriver()
  }
  reset() {
    this.currentPage = 1;
    this.searchText = ''
    this.getDriver()
  }


  downloadCsv() {

    let body = {
      modelName: 'driver'
    }

    this.api.downloadCsv(body).subscribe(res => {
      console.log(res);
      if (res.sucess) {
        //  this.downloadLink = res.url
        let newWin = window.open(res.url)
        newWin.document.body.innerHTML = " <iframe id='inlineFrameExample' title='Inline Frame Example' width='300' height='200' src=downloadLink>< /iframe>";

      }

    })
  }

  getDriver() {
    var page = this.currentPage;
    this.api.getDriverList(page, this.searchText).subscribe(response => {
      console.log('driverList',response);
      if (response["data"]) {
        this.driverList = response["data"]["drivers"];
        for (var data of this.driverList) {
          data.status = data["status"] == 1 ? true : false;
        }
        console.log(this.driverList);
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: page,
          itemsPerPage: 25,
          totalItems: response["data"]["count"]
        }
      }
      if (!response["success"]) return;
    });
  }

  updateStatus(item) {
    console.log(item, "383dewd");
    var data = {
      status: item.status ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.updateDriver(formData, item._id).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getDriver();
      }
      if (!res["response"]["success"]) return;
    });
  }

  onViewDocument(item) {
    this.router.navigate(['driver/document/', item.id])
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getDriver();
  }

  addDriver() {
    this.router.navigate(['driver/add']);
  }

  onViewDriver(item) {
    this.router.navigate(['driver/view', item._id]);
  }

  onEditDriver(item) {
    this.router.navigate(['driver/edit', item._id]);
  }

  deleteDriver(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Driver!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          status: 2
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        this.api.updateDriver(formData, item._id).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getDriver();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }
}
