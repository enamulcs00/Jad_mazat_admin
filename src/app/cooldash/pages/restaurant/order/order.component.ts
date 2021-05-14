import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import { Router } from "@angular/router";
import { OrderService } from "../../../services/order.service";
import { ToastrManager } from "ng6-toastr-notifications";
import * as moment from "moment";
import Swal from "sweetalert2";
import { saveAs } from 'file-saver';

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  totalItems: number;
  currentPage: number;
  serialNumber = 0;
  loader: boolean = true;
  orderList: any[];
  totalmatch:any;
  imageUrl: string;
  acceptOrder: string;
  status: string = "pending";
  minutes: number;
  limit: number = 25;
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25,
  };
  statuscode: any;
  showdrop: boolean;
  assignId: any;
  driver: any;
  adminid: string;
  show: boolean;
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router,
    private toastr: ToastrManager,
    private orderService: OrderService
  ) {}
  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;
    if (this.comm.oderStatus == "pending") {
      this.pendingOrder();
    } else {
      this.allOrder();
    }
    this.orderService.orderListener().subscribe((res) => {
      if (res["status"] == 12) {
        this.toastr.successToastr("Order Rejected");
        if (this.comm.oderStatus == "pending") {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      } else if (res["status"] == 1) {
        this.toastr.successToastr("Order Accepted");
        if (this.comm.oderStatus == "pending") {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      }
    });
    this.orderService.newRestaurtOrder().subscribe((res) => {
      if (res["sucess"]) {
        this.toastr.successToastr("New Restaurant Order Received");
        if (this.router.url === "/restaurant/order") {
          this.pendingOrder();
        }
      }
    });
    this.orderService.statusCahnegListener().subscribe((res) => {
      if (this.comm.oderStatus == "pending") {
        this.pendingOrder();
      } else {
        this.allOrder();
      }
    });
  }

  // pendingOrder() {
  //   this.status = "pending";
  //   this.comm.oderStatus = this.status;
  //   var status = 0;
  //   var page = this.currentPage;
  //   this.api.getPendingOrders(status, page).subscribe((response) => {
  //     if (response["response"]["success"]) {
  //       this.orderList = response["data"]["list"];
  //       console.log(this.orderList);
  //       this.loader = false;
  //       this.config = {
  //         id: "page",
  //         currentPage: this.currentPage,
  //         itemsPerPage: 25,
  //         totalItems: response["data"]["count"],
  //       };
  //     }
  //     if (!response["success"]) return;
  //   });
  // }


  changeMatchWebsite(event)
  {
    if(event.target.value == '0') {
      this.show = true;
    }else{
      this.show = false;
    }
    this.statuscode = event.target.value;
    this.pendingOrder()
  }


  pendingOrder() {
    this.status = "pending";
    this.comm.storeOderStatus = this.status;
    var status = this.statuscode;
    var page = this.currentPage;
    this.api.getPendingOrders(status, page).subscribe((response) => {
      if (response["response"]["success"]) {
        this.orderList = response["data"]["list"];
        // console.log(this.orderList);
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: page,
          itemsPerPage: 25,
          totalItems: response["data"]["count"],
        };
      }
      if (!response["success"]) return;
    });
  }

  findDriver(lan,lon,id)
  {
    this.showdrop = true;
    this.assignId = id;
    this.api.getDrivers(lan,lon).subscribe((res:any)=>
    {
      this.showdrop = false;
      this.driver = res.data.drivers
    })
  }

  DriverAssign(event,id)
  {
   console.log(event.target.value)
   const data =
   {
     "driverId":event.target.value,
     "orderId":id
   }
   this.api.assignRDriver(data).subscribe((res:any)=>
   {
     if(res.response.success)
     {
       console.log('getscket')
       this.adminid = localStorage.getItem('id')
       this.orderService.assingDriver(this.adminid).subscribe((res1:any)=>
       {
         this.toastr.successToastr(res1.message);
       this.getPendingorder();
        });
       
     }
   })
  }

  updateActiveStatus(id,value)
  {
    console.log(id,value);
    const data =
    {
      "type":value,
      "id":id
    }
    this.api.changeRType(data).subscribe((res:any)=>
    {
    // this.allOrder();
    })
  }
  orderAccept(item) {
    console.log(item);
    this.dialogService.orderAcceptModal().subscribe((res) => {
      console.log(res);
      if (res != undefined) {
        if (res["response"] == "no") {
          var data = {
            _id: item._id,
            status: 12,
            verticalType: 0,
            time: res.time,
          };
          this.orderService.orderAccept(data);
        } else if (
          res["response"] == "yes" &&
          res["time"] != "" &&
          res["time"] != undefined
        ) {
          var data = {
            _id: item._id,
            status: 1,
            verticalType: 0,
            time: res.time,
          };
          this.orderService.orderAccept(data);
        }
      }
    });
  }

  itemsList(items) {
    this.dialogService.itemList(items);
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    if (this.status == "all") {
      this.allOrder();
    } else {
      this.pendingOrder();
    }
  }

  getPendingorder()
  {
    this.api.getAllPresturant().subscribe((response:any)=>
    {
      if (response["response"]["success"]) {
        this.orderList = response["data"]["list"];
        for (let list of this.orderList) {
          var totalTime = moment(list["date"]).add(
            list["preprationTime"],
            "minutes"
          );
          var currenntTime = moment();
          list.mins = currenntTime.diff(totalTime, "minutes");
          // console.log(list['preprationTime'],list.mins)
        }
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: this.currentPage,
          itemsPerPage: 25,
          totalItems: response["data"]["count"],
        };
      }
      if (!response["success"]) return;
    })
  }

  allOrder() {
    var page = this.currentPage;
    this.status = "all";
    this.comm.oderStatus = this.status;
    this.api.getAllOrders(page).subscribe((response) => {
      if (response["response"]["success"]) {
        this.orderList = response["data"]["list"];
        for (let list of this.orderList) {
          var totalTime = moment(list["date"]).add(
            list["preprationTime"],
            "minutes"
          );
          var currenntTime = moment();
          list.mins = currenntTime.diff(totalTime, "minutes");
          // console.log(list['preprationTime'],list.mins)
        }
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: this.currentPage,
          itemsPerPage: 25,
          totalItems: response["data"]["count"],
        };
      }
      if (!response["success"]) return;
    });
  }

  checkStatus(status: number, orderType: number) {
    if (!orderType) return "Delivered";
    switch (status) {
      case 1:
        return "Prepared";

      case 2:
        return "Delivered";

      case 3:
        return "Delivered";
    }
  }

  changeStatus(item: any) {
    let title = "";
    let btntitle = "";
    let status = 2;

    switch (item.status) {
      case 1:
        title = "Mark this order Prepared";
        btntitle = "Prepared";
        break;
      case 2 || 3:
        title = "Mark this order Delivered";
        btntitle = "Delivered";
        status = 4;
        break;
    }

    Swal.fire({
      title: "Are you sure?",
      text: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: btntitle,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        let obj = {
          _id: item._id,
          verticalType: item.verticalType,
          orderType: item.orderType,
          status: status,
        };
        this.orderService.changeStatus(obj).subscribe((res: any) => {
          return (item.status = res.status);
        });
      }
    });
  }

  assignDriver(item: any) {
    // console.log(item)
    Swal.fire({
      title: "Select Driver",
      input: "select",
      inputOptions: {
        "1": "Tier 1",
        "2": "Tier 2",
        "3": "Tier 3",
      },
      inputPlaceholder: "required",
      inputValidator: function (value) {
        return new Promise(function (resolve, reject) {
          if (value !== "") {
            resolve("Success.");
          } else {
            resolve("You need to select a Tier");
          }
        });
      },
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Assign",
      allowOutsideClick: false,
    }).then((result) => {});
  }

  orderCancel(item: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "Want to cancel this order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        let obj = {
          _id: item._id,
          verticalType: item.verticalType,
          orderType: item.orderType,
          status: 12,
        };
        this.orderService.changeStatus(obj).subscribe((res: any) => {
          return (item.status = res.status);
        });
      }
    });
  }
  
  getresturantOrder()
  {
    this.api.resturantCsv().subscribe((res:any)=>
    {
      saveAs(res.url, "Resturantorder.csv");
      
    })
  }

  // checkTiming(date: number, min: number, status: number) {
  //   let ordertime = moment(date).add(min, 'minutes').subtract(10, 'minutes').valueOf()
  //   if (moment().valueOf() > ordertime || status)
  //     return false
  //   else return true

  // }

  viewOrder(item) {
    this.comm.oderStatus = this.status;
    this.router.navigate([
      "restaurant/view-order/" + this.status + "/" + item._id,
    ]);
  }
}
