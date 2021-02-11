import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
import { MapsAPILoader } from "@agm/core";
import { PopupService } from "../../../../services/popup/popup.service";
import Swal from "sweetalert2";
declare var google: any;

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.scss']
})
export class FoodTypeComponent implements OnInit {

  foodType: any;
  id: any;
  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  categoryList: Array<any> = [];
  imageUrl: string;
  tokenVal;
  role: any;
  access: any;
  history = window.history;
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader, private dialogService: PopupService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getFoodType(this.id);
    });
  }

  getFoodType(id) {
    this.api.getRestaurantTypeById(id).subscribe(res => {
      console.log(res);
      if (res["response"]["success"]) {
        this.foodType = res["data"];
        for (var data of this.foodType) {
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
      }
    });
  }

  updateActiveStatus(item) {
    var data = {
      name: item.name,
      updateId: item._id,
      status: item.status ? 1 : 0,
      restaurantId: this.id
    };
    this.api.editRestaurantFoodType(data).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getFoodType(this.id);
      }
      if (!res["response"]["success"]) return;
    });
  }

  deleteCategory(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Food Type!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          name: item.name,
          updateId: item._id,
          restaurantId: this.id,
          status: 2
        };
        this.api.editRestaurantFoodType(data).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getFoodType(this.id);
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  addFoodType() {
    this.dialogService.addType(this.id).subscribe(res => {
      if (res == "yes") {
        this.getFoodType(this.id);
      }
    });
  }

  onEditSelect(item) {
    this.dialogService.editType(item).subscribe(res => {
      if (res == "yes") {
        this.getFoodType(this.id);
      }
    });
  }
}
