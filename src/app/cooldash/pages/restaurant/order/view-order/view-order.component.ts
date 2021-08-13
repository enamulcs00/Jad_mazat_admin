import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";
import * as moment  from 'moment';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  id;
  orderDetail: any;
  imageUrl: string;


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
      this.getStoreOrderDetail(this.id);
    });
    this.imageUrl = this.comm.imageUrl;
  }

  getStoreOrderDetail(id) {
    this.api.getRestaurantOrderDetail(id).subscribe(res => {
      if (res["response"]["success"]) {
        // console.log(res);
        if(res["data"]['deliveryDate']) res["data"]['deliveryDate'] = moment(res["data"]['deliveryDate']).format('YYYY-MM-DD hh:mm a')
        this.orderDetail = res["data"];
        // console.log(this.orderDetail);
      }
    });
  }
}
