import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import { Router } from "@angular/router";
import { ToastrManager } from "ng6-toastr-notifications";
import * as moment from 'moment';
import Swal from "sweetalert2";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  searchText: string = ""
  searchType: number = 0
  totalItems: number;
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  orderList: any[];
  imageUrl: string;
  limit: number = 25;
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25
  };

  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router,
    private toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;

    this.allBookings();
  }

  allBookings() {
    var page = this.currentPage;
    this.api.getAllBookings(page, this.searchType, this.searchText).subscribe(response => {
      if (response["response"]["success"]) {

        this.orderList = response["data"]["list"];
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: this.currentPage,
          itemsPerPage: 25,
          totalItems: response["data"]["count"]
        }
      }
      if (!response["success"]) return;
    });
  }

  reset() {
    this.searchText = ""
    this.searchType = 0
    this.currentPage = 1
    this.allBookings()
  }
  
  searchBookings() {
    this.currentPage = 1
    this.allBookings()
  }

  checkDate(date: number) {
    if (date <= moment().valueOf()) return false
    else return true
  }

  viewBooking(item: any) {
    this.router.navigate(['shuttle/booking/' + item._id])
  }
  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.allBookings();
  }

  bookingCancel(item: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to cancel this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!'
    }).then((result) => {
      if (result.value) {
        this.api.cancelBookings(item._id, { status: 11 }).subscribe(response => {
          if (response["response"]["success"]) {
            this.allBookings();
          }
        })
      }
    })
  }


}
