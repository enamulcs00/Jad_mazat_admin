import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import { Router } from "@angular/router";
declare var swal: any;
import Swal from "sweetalert2";
@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  storeList: Array<any> = [];
  imageUrl: string;
  type = 0;
  foodType: any = [
    {
      name: "Vegetarian",
      value: 0,
    },
    {
      name: "Non-Vegetarian",
      value: 1,
    },
    {
      name: "Both",
      value: 2,
    },
  ];
  searchText: string = "";
  limit: number = 25;
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25,
  };
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageUrl = this.comm.imageUrl;
    this.getStore();
  }

  getStore() {
    this.api.getAllStore(this.searchText, 1).subscribe((response) => {
      console.log(response["response"]);
      if (response["response"]["success"]) {
        this.storeList = response["data"]["list"];
        for (var data of this.storeList) {
          data.isRecommended = data["isRecommended"] == 1 ? true : false;
          data.isFavourite = data["isFavourite"] == 1 ? true : false;
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
      }
      if (!response["success"]) return;
    });
  }

  searchStore() {
    this.getStore();
  }
  reset() {
    this.searchText = "";
    this.getStore();
  }

  updateFavRes(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      isFavourite: item.isFavourite ? 1 : 0,
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editStore(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getStore();
      }
      if (!res["response"]["success"]) return;
    });
  }


  downloadCsv() {
    let body = {
      modelName: 'store'
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

  updateStatus(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      status: item.status ? 1 : 0,
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editStore(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getStore();
      }
      if (!res["response"]["success"]) return;
    });
  }

  updateRecoRes(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      isRecommended: item.isRecommended ? 1 : 0,
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editStore(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getStore();
      }
      if (!res["response"]["success"]) return;
    });
  }

  addRestaurant() {
    this.router.navigate(["/store/add"]);
  }

  onViewItem(item) {
    this.router.navigate(["/store/view", item._id]);
  }

  onChange(event) {
    console.log(event);
    this.type = event.target.value;
    this.getStore();
  }
  onEditSelect(item) {
    this.router.navigate(["/store/edit", item._id]);
  }

  deleteStore(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Store!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",

      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        var data = {
          name: item.name,
          updateId: item._id,
          status: 2,
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", item.image);
        this.api.editStore(formData).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success",
            });
            this.getStore();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  getOutlet(item) {
    console.log(item);
    this.router.navigate(["/store/outlet", item._id]);
  }

  getFoodType(item) {
    this.router.navigate(["/store/food-type", item._id]);
  }

  getFoodItem(item) {
    this.router.navigate(["/store/food-item"],{queryParams:{'id':item._id}});
  }

  pageChange(event) { }
}
