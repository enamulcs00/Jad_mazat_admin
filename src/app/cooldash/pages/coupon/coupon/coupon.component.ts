import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { Router } from "@angular/router";
declare var swal: any;
import Swal from "sweetalert2";
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  totalItems: number;
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  couponList: Array<any> = [];
  imageUrl: string;
  searchText: string = "";
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25
  };
  allData: any[];
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;
    this.getCoupon();
  }

  setPage() {
    this.getCoupon();
  }
  searchCoupon() {
    this.couponList = this.allData.filter(
      row => row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
  }
  reset() {
    this.currentPage = 1;
    this.searchText = '';
    this.getCoupon();
  }

  getCoupon() {
    var page = this.currentPage;
    this.api.getAllPromoCode().subscribe(response => {
      console.log(response);
      if (response["data"]) {
        this.couponList = response["data"];
        this.allData = this.couponList
        for (var data of this.couponList) {
          data.status = data["status"] == 1 ? true : false;
        }
        console.log(this.couponList);
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
      updateId: item._id,
      name: item.name,
      status: item.status ? 1 : 0
    };
    this.api.updatePromoCode(data).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getCoupon();
      }
      if (!res["response"]["success"]) return;
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getCoupon();
  }

  addCoupon() {
    this.router.navigate(['coupon/add']);
  }

  onViewCoupon(item) {
    this.router.navigate(['coupon/view', item._id]);
  }

  onEditCoupon(item) {
    this.router.navigate(['coupon/edit', item._id]);
  }

  deleteCoupon(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Coupon!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          updateId: item._id,
          status: 2
        };
        this.api.updatePromoCode(data).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getCoupon();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }
}
