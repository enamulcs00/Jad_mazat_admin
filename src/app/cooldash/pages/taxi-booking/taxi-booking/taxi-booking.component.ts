import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import { Router } from "@angular/router";
import { MatInput } from '@angular/material';
declare var swal: any;
import Swal from "sweetalert2";
import * as moment from 'moment';

@Component({
  selector: 'app-taxi-booking',
  templateUrl: './taxi-booking.component.html',
  styleUrls: ['./taxi-booking.component.scss']
})
export class TaxiBookingComponent implements OnInit {
  startDate: any ='';
  endDate: any = '';
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  bookingList: Array<any> = [];
  limit: number = 25;
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25
  };
  searchText: string = '';
  @ViewChild('enddate',{
    read: MatInput, static: false,
  }) enddate: MatInput;
  @ViewChild('startdate', {
     static: false,
    read: MatInput
  }) startdate: MatInput;
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.getTaxiBookings();
  }

  getTaxiBookings() {
    var page = this.currentPage;
    this.api.getTaxiBooking(page, this.searchText, this.startDate, this.endDate).subscribe(response => {
      if (response["response"]["success"]) {
        this.bookingList = response["data"]["bookings"];
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

  getStartDate(ev) {
    this.startDate = moment(ev.value).valueOf();
  }
  
  getEndDate(ev) {
    this.endDate = moment(ev.value).valueOf();
  }

  addTaxiBookings() {
    this.router.navigate(["/taxi/add"]);
  }

  onViewItem(item) {
    this.router.navigate(["/taxi/view", item._id]);
  }


  searchBookings() {
    this.currentPage = 1;
    this.getTaxiBookings()
  }

  reset() {
    this.currentPage = 1;
    this.searchText = '';
    this.endDate='';
    this.startDate = '';
    this.startdate.value = null;
    this.enddate.value = null;
    this.getTaxiBookings()
  }

  updateStatus(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      status: item.status ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editFoodRestaurant(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getTaxiBookings();
      }
      if (!res["response"]["success"]) return;
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getTaxiBookings();
  }
}
