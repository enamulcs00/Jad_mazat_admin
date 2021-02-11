import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";
import * as moment from 'moment';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {
  id;
  orderDetail: any;
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
      this.getShuttleBookingDetail(this.id);
    });
  }

  getShuttleBookingDetail(id: number) {
    this.api.getShuttleBookingDetail(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.orderDetail = res["data"][0];
      }
    });
  }

}
