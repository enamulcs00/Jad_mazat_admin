import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id;
  userDetail: any;
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
      this.getUserById(this.id);
    });
  }

  getUserById(id) {
    this.api.getUserById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.userDetail = res["data"];
      }
    });
  }
}
