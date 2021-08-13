import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { Router } from "@angular/router";
declare var swal: any;
import Swal from "sweetalert2";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  totalItems: number;
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  userList: Array<any> = [];
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
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;
    this.getUser();
  }

  setPage() {
    this.getUser();
  }
  searchUser() {
    this.currentPage = 1;
    this.getUser()
  }
  reset() {
    this.currentPage = 1;
    this.searchText = ''
    this.getUser()
  }
  getUser() {
    var page = this.currentPage;
    this.api.getAllUser(page, this.searchText).subscribe(response => {
      console.log(response);
      if (response["data"]) {
        this.userList = response["data"]["users"];
        for (var data of this.userList) {
          data.status = data["status"] == 1 ? true : false;
        }
        console.log(this.userList);
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
    console.log(item);
    var data = {
      userId: item._id,
      firstName: item.firstName,
      lastName: item.lastName,
      status: item.status ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("pic", item.profilePic);

    this.api.updateUser(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getUser();
      }
      if (!res["response"]["success"]) return;
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getUser();
  }

  addUser() {
    this.router.navigate(['user/add']);
  }

  onViewUser(item) {
    this.router.navigate(['user/view', item._id]);
  }

  onEditUser(item) {
    this.router.navigate(['user/edit', item._id]);
  }

  deleteUser(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          userId: item._id,
          status: 2
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("pic", item.profilePic);
        this.api.updateUser(formData).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getUser();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }
}
