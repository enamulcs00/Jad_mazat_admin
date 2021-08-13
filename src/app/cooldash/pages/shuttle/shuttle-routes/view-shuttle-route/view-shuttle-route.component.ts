import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";

@Component({
  selector: 'app-view-shuttle-route',
  templateUrl: './view-shuttle-route.component.html',
  styleUrls: ['./view-shuttle-route.component.scss']
})
export class ViewShuttleRouteComponent implements OnInit {
  id;
  shuttleDetail: any;
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
      this.getShuttleRouteById(this.id);
    });
  }

  getShuttleRouteById(id) {
    this.api.getShuttleRouteById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.shuttleDetail = res["data"][0];
        console.log(this.shuttleDetail);
      }
    });
  }
}
