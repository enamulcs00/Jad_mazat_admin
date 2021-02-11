import { Component, OnInit, LOCALE_ID, Inject } from "@angular/core";
import { LocalStorageService } from "angular-web-storage";
import { Router } from "@angular/router";
import { OrderService } from "../../services/order.service";
import { Observable } from "rxjs";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  adminid: any;
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private orderService: OrderService,
    private toastr: ToastrManager,
    @Inject(LOCALE_ID) protected localeId: string
  ) {
    this.adminid = this.localStorage.get('id')
    this.orderService.connectSocket();
    //const data ={"adminId":this.adminid}
    //this.orderService.addAdmin(data);
  }

  language: string;
  ngOnInit() {
    this.language = localStorage.getItem("language");

    this.orderService.newStoreOrder().subscribe((res) => {
      console.log(res, res["sucess"]);
      if (res["sucess"]) {
        this.toastr.successToastr("New Store Order Received");
      }
    });

    this.orderService.newRestaurtOrder().subscribe((res) => {
      if (res["sucess"]) {
        this.toastr.successToastr("New Restaurant Order Received");
      }
    });
  }

  setLanguage(lang) {
    console.log(lang);
    localStorage.setItem("language", this.language);

    // let url = window.location.href;

    // if (lang == "English") {
    //   window.location.assign(url + "/en");
    // } else {
    //   window.location.assign(url + "/ar");
    // }

    location.reload();
  }

  logout() {
    this.localStorage.clear();
    localStorage.clear();
    document.getElementById("closeLogoutModal").click();
    this.router.navigateByUrl("/login");
  }
}
