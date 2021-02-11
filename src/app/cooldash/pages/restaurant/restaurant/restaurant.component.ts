import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import { Router } from "@angular/router";
declare var swal: any;
import Swal from "sweetalert2";
@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"]
})
export class RestaurantComponent implements OnInit {
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  restaurantList: Array<any> = [];
  imageUrl: string;
  type = 2;
  limit: number = 25;
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25
  };
  foodType: any = [
    {
      name: "Vegetarian",
      value: 0
    },
    {
      name: "Non-Vegetarian",
      value: 1
    },
    {
      name: "Both",
      value: 2
    }
  ];

  searchText: string = '';
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;
    this.getRestaurant();
  }

  getRestaurant() {
    var page = this.currentPage;
    console.log(page);
    this.api.getAllRestaurant(this.searchText, this.type, page).subscribe(response => {
      console.log(response["response"]);
      if (response["response"]["success"]) {
        this.restaurantList = response["data"]["list"];
        for (var data of this.restaurantList) {
          data.isRecommended = data["isRecommended"] == 1 ? true : false;
          // data.isFavourite = data["isFavourite"] == 1 ? true : false;
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: page,
          itemsPerPage: 25,
          totalItems: response["data"]["count"]
        }
      }
      if (!response["success"]) return;
    });
  }

  onChange(event) {
    this.currentPage = 1;
    this.type = event.target.value;
    this.getRestaurant();
  }


  downloadCsv() {
    debugger
    let body = {
      modelName: 'restaurant'
    }
    this.api.downloadCsv(body).subscribe(res => {
      console.log(res);
      if (res.sucess) {
        //  this.downloadLink = res.url
        let newWin = window.open(res.url)
        newWin.document.body.innerHTML = " <iframe id='inlineFrameExample' title='Inline Frame Example' width='300' height='200' src=downloadLink>< /iframe>";

      }

    })


  }

  updateFavRes(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      isFavourite: item.isFavourite ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editFoodRestaurant(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getRestaurant();
      }
      if (!res["response"]["success"]) return;
    });
  }

  updateRecoRes(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      isRecommended: item.isRecommended ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editFoodRestaurant(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getRestaurant();
      }
      if (!res["response"]["success"]) return;
    });
  }

  addRestaurant() {
    this.router.navigate(["/restaurant/add"]);
  }

  onViewItem(item) {
    this.router.navigate(["/restaurant/view", item._id]);
  }

  onEditSelect(item) {
    this.router.navigate(["/restaurant/edit", item._id]);
  }

  deleteRestaurant(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Restaurant!",
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
          status: 2
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", item.image);
        this.api.editFoodRestaurant(formData).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getRestaurant();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  getOutlet(item) {
    this.router.navigate(["/restaurant/outlet", item._id]);
  }

  getFoodType(item) {
    this.router.navigate(["/restaurant/food-type", item._id]);
  }

  getFoodItem(item) {
    this.router.navigate(["/restaurant/food-item"],{queryParams:{'id':item._id}});
  }

  searchRestaurant() {
    this.currentPage = 1;
    this.getRestaurant()
  }
  reset() {
    this.currentPage = 1;
    this.searchText = ''
    this.getRestaurant()
  }

  updateStatus(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      status: item.status ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editFoodRestaurant(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getRestaurant();
      }
      if (!res["response"]["success"]) return;
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getRestaurant();
  }
}
