import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";

@Component({
  selector: 'app-view-taxi-booking',
  templateUrl: './view-taxi-booking.component.html',
  styleUrls: ['./view-taxi-booking.component.scss']
})
export class ViewTaxiBookingComponent implements OnInit {
  id;
  bookingsDetail: any;
  history = window.history;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public comm: CommonService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getTaxiBookingById(this.id);
    });
  }

  getTaxiBookingById(id) {
    this.api.getTaxiBookingById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.bookingsDetail = res["data"];
        console.log(this.bookingsDetail)
      }
    });
  }
}
