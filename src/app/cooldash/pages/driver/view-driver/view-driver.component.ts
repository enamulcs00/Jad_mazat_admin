import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.scss']
})
export class ViewDriverComponent implements OnInit {

  id;
  driverDetails: any;
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
      this.getRestaurantById(this.id);
    });
  }

  getRestaurantById(id) {
    this.api.getDriverById(id).subscribe(res => {
      if (res["response"]["success"]) {
        console.log(res);
        this.driverDetails = res["data"];
        this.getAllVerticleType(this.driverDetails.verticalType, this.driverDetails.vehicleTypeId)
      }
    });
  }


  getAllVerticleType(type, id) {
    const list = [];
    this.api.getAllVerticleTypes(type).subscribe(response => {
      if (response["response"]["success"]) {
        var vehicleTypes = response["data"];
        for (let list of vehicleTypes) {
          if (list['id'] == id) {
            this.driverDetails['vehicleTypeName'] = list.name;
            console.log(this.driverDetails);
          }
        }
      }
    });
  }
}
