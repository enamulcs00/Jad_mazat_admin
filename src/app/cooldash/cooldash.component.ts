import { Component, OnInit } from "@angular/core";
declare var $:any;

@Component({
  selector: "app-cool-dash",
  templateUrl: "./cooldash.component.html",
  styleUrls: ["./cooldash.component.scss"]
})
export class CoolDashComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }
}
