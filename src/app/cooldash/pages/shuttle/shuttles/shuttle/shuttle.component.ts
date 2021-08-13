import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";
import { Router } from "@angular/router";
declare var swal: any;
import Swal from "sweetalert2";
@Component({
  selector: 'app-shuttle',
  templateUrl: './shuttle.component.html',
  styleUrls: ['./shuttle.component.scss']
})
export class ShuttleComponent implements OnInit {
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  history = window.history;
  shuttleList: Array<any> = [];
  imageUrl: string;
  searchText: string = "";
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25
  };
  seatType: any = [
    "Type 1 –11 Seater", "Type 2 –14 Seater", "Type 3 –33 Seater", "Type 4 –49 Seater Bus", "Type 5 –62 Seater Bus"
  ]
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;
    this.getAllShuttle();
  }

  setPage() {
    this.getAllShuttle();
  }
  searchShuttle() {
    this.currentPage = 1;
    this.getAllShuttle()
  }
  reset() {
    this.currentPage = 1;
    this.searchText = ''
    this.getAllShuttle()
  }
  getAllShuttle() {
    var page = this.currentPage;
    this.api.getAllShuttle(page).subscribe(response => {
      if (response['response']['success']) {
        this.shuttleList = response["data"]["list"];
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: page,
          itemsPerPage: 25,
          totalItems: response["data"]["count"]
        }
      }
      if (!response['response']["success"]) return;
    });
  }


  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getAllShuttle();
  }

  addShuttle() {
    this.router.navigate(['shuttle/add-shuttle']);
  }

  onViewShuttle(item) {
    this.router.navigate(['shuttle/view-shuttle', item._id]);
  }

  onEditShuttle(item) {
    this.router.navigate(['shuttle/edit-shuttle', item._id]);
  }

  deleteShuttle(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Shuttle!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          Id: item._id
        };
        this.api.deleteShuttle(item._id, data).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getAllShuttle();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  updateStatus(item: any) {
    // this.loader = true;
    let data = { status: item.status ? 1 : 0 }
    this.api.updateShuttle(item._id, data).subscribe(res => {
      // this.loader = false;
    })
  }

}
