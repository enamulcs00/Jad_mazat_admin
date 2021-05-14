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
  currentPage: number = 1;
  serialNumber = 0;
  totalmatch:any;
  loader: boolean = true;
  orderList: Array<any> = [];
  imageUrl: string;
  acceptOrder: string;
  status: string = "pending";
  limit: number = 25;
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25,
  };
  statuscode: any;
  driver: any;
  assignId: any;
  showdrop: boolean = true;
  show: boolean;
  adminid: string;
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
    if (this.comm.storeOderStatus == "pending") {
      this.pendingOrder();
    } else {
      this.allOrder();
    }
    this.acceptOrder = "acceptOrder";
    this.orderService.orderListener().subscribe((res) => {
      if (res["status"] == 12) {
        this.toastr.successToastr("Order Rejected");
        if (this.comm.storeOderStatus == "pending") {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      } else if (res["status"] == 1) {
        this.toastr.successToastr("Order Accepted");
        if (this.comm.storeOderStatus == "pending") {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      }
    });

    this.orderService.newStoreOrder().subscribe((res) => {
      console.log(res, res["sucess"]);
      if (res["sucess"]) {
        this.toastr.successToastr("New Store Order Received");
        if (this.router.url === "/store/order") {
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

  pendingOrder() {
    this.status = "pending";
    this.comm.storeOderStatus = this.status;
    var status = this.statuscode;
    var page = this.currentPage;
    this.api.getPendingStoreOrders(status, page).subscribe((response) => {
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

  orderAccept(item) {
    console.log(item);
    this.adminid = localStorage.getItem('id')
    this.dialogService.orderAcceptModal().subscribe((res) => {
      console.log(res);
      if (res != undefined) {
        if (res["response"] == "no") {
          var data = {
            _id: item._id,
            status: 12,
            verticalType: 1,
            time: res.time,
            adminId: this.adminid
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
            verticalType: 1,
            time: res.time,
            adminId: this.adminid
          };
          this.orderService.orderAccept(data);
        }
      }
    });
  }
  
 DriverAssign(event,id)
 {
  console.log(event.target.value)
  const data =
  {
    "driverId":event.target.value,
    "orderId":id
  }
  this.api.assignDriver(data).subscribe((res:any)=>
  {
    if(res.response.success)
    {
      console.log('getscket')
      this.adminid = localStorage.getItem('id')
      this.orderService.assingDriver(this.adminid).subscribe((res1:any)=>
      {
        this.toastr.successToastr(res1.message);
        this.getpendingOrder()
      })
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
   this.api.changeType(data).subscribe((res:any)=>
   {
   // this.allOrder();
   })
 }

  changeMatchWebsite(event)
  {
    if(event.target.value == '0') {
      this.show = true;
    }else{
      this.show = false;
    }
   console.log('change',event.target.value)
   this.statuscode = event.target.value;
   this.pendingOrder()
  }

  itemsList(items) {
    this.dialogService.itemList(items);
  }

  viewOrder(item) {
    this.comm.storeOderStatus = this.status;
    this.router.navigate(["store/view-order/" + this.status + "/" + item._id]);
  }

  getpendingOrder()
  {
    this.api.getPendingstatus().subscribe((response:any) =>
    {
      if (response["response"]["success"]) {
        this.orderList = response["data"]["list"];
        // console.log(this.orderList);
        for (let list of this.orderList) {
          var totalTime = moment(list["date"]).add(
            list["preprationTime"],
            "minutes"
          );
          var currenntTime = moment();
          list.mins = currenntTime.diff(totalTime, "minutes");
          // console.log(list.mins)
          // console.log(list.mins, mins, hh, currenntTime, totalTime, orderDate)
        }
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: 10,
          itemsPerPage: 25,
          totalItems: response["data"]["count"],
        };
      }
      if (!response["success"]) return;
    })
  }

  allOrder() {
  
    this.comm.storeOderStatus = this.status;
    var status = this.statuscode;
    var page = this.currentPage;
    this.api.getAllStoreOrders(status, page).subscribe((response) => {
      if (response["response"]["success"]) {
        this.orderList = response["data"]["list"];
        // console.log(this.orderList);
        for (let list of this.orderList) {
          var totalTime = moment(list["date"]).add(
            list["preprationTime"],
            "minutes"
          );
          var currenntTime = moment();
          list.mins = currenntTime.diff(totalTime, "minutes");
          // console.log(list.mins)
          // console.log(list.mins, mins, hh, currenntTime, totalTime, orderDate)
        }
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

  pageChange(newPage: number) {
    this.currentPage = newPage;
    if (this.status == "all") {
      this.allOrder();
    } else {
      this.pendingOrder();
    }
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


   
  getresturantOrder()
  {
    this.api.storesCsv().subscribe((res:any)=>
    {
      saveAs(res.url, "Storesorder.csv");
      
    })
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
            resolve("Driver Declared.");
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
}
