import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "../../../services/common/common.service";
import { ApiService } from "../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { MatInput } from '@angular/material';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  list: any;
  totalItems: number;
  currentPage = 1;
  config: any
  loader: boolean = true;
  date: string
  startdate: any
  history = window.history;
  date1 = new FormControl(new Date())
  //   @ViewChild('startdate', {
  //     static: false,
  //    read: MatInput
  //  }) startdate: MatInput;

  constructor(
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
  ) { }

  ngOnInit() {
    this.date = moment().format('YYYY-MM-DD')
    this.getAllShuttleOverview();
  }

  getAllShuttleOverview() {
    var page = this.currentPage;
    this.api.getAllShuttleOverview(page, this.date).subscribe(res => {
      if (res["response"]["success"]) {
        this.list = res["data"]["list"];
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: this.currentPage,
          itemsPerPage: 25,
          totalItems: res["data"]["count"]
        }
      }
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getAllShuttleOverview();
  }

  getStartDate(event) {
    this.date = moment(event.value).format('YYYY-MM-DD')
  }

  search() {
    this.currentPage = 1
    this.getAllShuttleOverview();
  }
}
