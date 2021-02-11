import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.scss']
})
export class ViewCouponComponent implements OnInit {

  id;
  couponDetails: any;
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
      this.getPromoCodebyId(this.id);
    });
  }

  getPromoCodebyId(id) {
    this.api.getPromocodeById(id).subscribe(res => {
      if (res["response"]["success"]) {
        console.log(res);
        this.couponDetails = res["data"];
      }
    });
  }
}
