import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";

@Component({
  selector: 'app-view-shuttle',
  templateUrl: './view-shuttle.component.html',
  styleUrls: ['./view-shuttle.component.scss']
})
export class ViewShuttleComponent implements OnInit {
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
      this.getShuttleById(this.id);
    });
  }

  getShuttleById(id) {
    this.api.getShuttleById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.shuttleDetail = res["data"];
      }
    });
  }

}
