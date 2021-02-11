import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrManager } from "ng6-toastr-notifications";
// import { ApiService } from "../api/api.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  oderStatus: string = "pending";
  storeOderStatus: string = "pending";
  dropSetting = {
    singleSelection: false,
    idField: "_id",
    textField: "name",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  singleDropSetting = {
    enableCheckAll: false,
    singleSelection: true,
    idField: "_id",
    textField: "name",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  currencyOptions = [
    { code: "INR", symbol: "₹" },
    { code: "KES", symbol: "K" },
    { code: "USD", symbol: "$" },
  ];

  baseUrl = "http://15.207.74.128:9029/v1";
  imageUrl = "http://15.207.74.128:9029";

  // For Testing

  // baseUrl = "http://192.168.1.158:9079/v1";
  // imageUrl = "http://192.168.1.158:9079";

  shuttleBaseUrl = "http://15.207.74.128:9029/v1";
  stuttleImageUrl = "http://15.207.74.128:9029";
  // https://appgrowthcompany.com:3000/
  //http://192.168.1.98:3000
  constructor(
    private spinner: NgxSpinnerService,
    private toaster: ToastrManager,
    // private api: ApiService,
    private http: HttpClient
  ) {
    this.getCountryCode();
  }

  getCountryCode() {
    return this.http
      .get<Response>("assets/json/countryCode.json")
      .pipe(map((response) => response));
  }

  showSpinner() {
    this.spinner.show();
  }
  hideSpinner() {
    this.spinner.hide();
  }
  successToast(message) {
    this.toaster.successToastr(message, "", {
      maxShown: 1,
    });
  }
  errorToast(message) {
    this.toaster.errorToastr(message);
  }
  //   getCategories() {
  //     var tokenval = JSON.parse(localStorage.getItem("token"));
  //     return new Promise((resolve, reject) => {
  //       this.api.getCategories(tokenval).subscribe((response: Resp) => {
  //         if (!response.success) return;
  //         return resolve(response);
  //       });
  //     });
  //   }

  //   getSubCategories(id: string) {
  //     var tokenval = JSON.parse(localStorage.getItem("token"));
  //     return new Promise((resolve, reject) => {
  //       this.api
  //         .getSubCatWithoutPagination(id, tokenval)
  //         .subscribe((response: Resp) => {
  //           if (!response.success) return;
  //           return resolve(response);
  //         });
  //     });
  //   }
  //   getProductBySubCat(id) {
  //     var tokenval = JSON.parse(localStorage.getItem("token"));
  //     this.api
  //       .getProduct({ category: id }, tokenval)
  //       .subscribe((response: Resp) => {
  //         if (!response.success) return;
  //       });
  //   }
  //   getProduct(id, tokenvalue) {
  //     var reqHeader = new HttpHeaders({
  //       "Content-Type": "application/json; charset=utf-8",
  //       Authorization: tokenvalue
  //     });
  //     return this.http.post(
  //       `${this.baseUrl}/api/b2b/admin/product/get_product_filter`,
  //       id,
  //       { headers: reqHeader }
  //     );
  //   }
  //   async getSubCatDetails(id: string) {
  //     return new Promise((resolve, reject) => {
  //       this.api.getSubCatDetails(id).subscribe((response: Resp) => {
  //         if (!response.success) return;
  //         return resolve(response.data);
  //       });
  //     });
  //   }
  //   async getProductDetails(id: string) {
  //     var tokenval = JSON.parse(localStorage.getItem("token"));
  //     return new Promise((resolve, reject) => {
  //       this.api.getProductDetail(id, tokenval).subscribe((response: Resp) => {
  //         if (!response.success) return;
  //         return resolve(response.data);
  //       });
  //     });
  //   }
}
