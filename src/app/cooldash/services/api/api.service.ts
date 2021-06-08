import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { UrlService } from "../url/url.service";
import { LoginBody } from "../../requests/login-body";
import { map } from "rxjs/operators";
import { CommonService } from "../common/common.service";
import { idLocale } from "ngx-bootstrap";
import { Observable } from "rxjs";
import { stringify } from "@angular/compiler/src/util";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ApiService {
 // public tok = JSON.parse(localStorage.getItem('token'));
  countryCode: any;
  constructor(private router:Router,
    private http: HttpClient,
    private url: UrlService,
    private comm: CommonService
  ) {
    this.getCountryCode();
  }

  getCountryCode() {
    return this.http
      .get<Response>("assets/json/countryCode.json")
      .pipe(map((response) => response));
  }

  singIn(body: LoginBody) {
    return this.http.post(this.comm.baseUrl + "/admin/login", body);
  }

  forgotPasswordSendEmail(body) {
    return this.http.post(this.comm.baseUrl + "/admin/panel/forgotpass", body);
  }

  checkToken(body) {
    return this.http.post(this.comm.baseUrl + "/admin/panel/checkToken", body);
  }

  resetPassword(body) {
    return this.http.post(this.comm.baseUrl + "/admin/panel/resetpass", body);
  }

  sendToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    
    localStorage.clear();
    document.getElementById("closeLogoutModal").click();
    this.router.navigateByUrl("/login");
  }
  getAllRestaurantCategories() {
    return this.http.get(this.comm.baseUrl + "/admin/food/category");
  }

  addFoodCategory(body) {
    return this.http.post(this.comm.baseUrl + "/admin/food/category", body);
  }

  editFoodCategory(body) {
    return this.http.put(this.comm.baseUrl + "/admin/food/category", body);
  }

  getAllRestaurant(search, type, page) {
    return this.http.get(
      this.comm.baseUrl +
      "/admin/food/restaurant?name=" +
      search +
      "&type=" +
      type +
      "&page=" +
      page
    );
  }

  editFoodRestaurant(body) {
    return this.http.put(this.comm.baseUrl + "/admin/food/restaurant", body);
  }

  editDriverDocument(body, id) {
    return this.http.put(
      this.comm.baseUrl + "/admin/driver/document/" + id,
      body
    );
  }

  getResturantById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/food/restaurant/" + id);
  }

  getResturantFoodItemById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/food/itembyid/" + id);
  }

  getStoreItemById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/store/itembyid/" + id);
  }

  addFoodRestaurant(body) {
    return this.http.post(this.comm.baseUrl + "/admin/food/restaurant", body);
  }

  adddriver(body) {
    return this.http.post(this.comm.baseUrl + "/driver/register", body);
  }

  getAllOrders(page) {
    return this.http.get(
      this.comm.baseUrl + "/admin/food/orders?&page=" + page
    );
  }

  getAllPresturant()
  {
    return this.http.get(
      this.comm.baseUrl + "/admin/food/orders?status=0&page=1"
    );
  }

  downloadCsv(body): Observable<any> {
    return this.http.post<any>(this.comm.baseUrl + "/admin/getEncryptedUrl", body)
  }

  resturantCsv()
  {
    console.log('From Service',JSON.parse(localStorage.getItem('token')));
    const authorization = JSON.parse(localStorage.getItem('token'));
    const httpOptions = {
        headers: new HttpHeaders({ 'authorization': authorization })
    }
    return this.http.get<any>(this.comm.baseUrl + "/admin/food/getOrderCsvEncryptedUrl?status=4",httpOptions)
  }

  storesCsv()
  {
    const authorization = JSON.parse(localStorage.getItem('token'));
    const httpOptions = {
        headers: new HttpHeaders({ 'authorization': authorization })
    }
    return this.http.get<any>(this.comm.baseUrl + "/admin/store/getOrderCsvEncryptedUrl?status=4",httpOptions)
  }

  getPendingOrders(status, page) {
    return this.http.get(
      this.comm.baseUrl +
      "/admin/food/orders?status=" +
      status +
      "&page=" +
      page
    );
  }

  getAdminsforFilter()
  {
    return this.http.get(`${this.comm.baseUrl}/admin/store`)
  }

  getOutletById(id) {
    return this.http.get(
      this.comm.baseUrl + "/admin/food/restaurant/outlet/" + id
    );
  }

  getStoreOutletById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/store/outlet/" + id);
  }

  addInventory(data)
  {
    return this.http.post(this.comm.baseUrl + "/admin/store/manageInventory",data);
  }

  addRestaurantOutlet(body) {
    return this.http.post(
      this.comm.baseUrl + "/admin/food/restaurant/outlet",
      body);
  }

  editRestaurantOutlet(body) {
    return this.http.put(
      this.comm.baseUrl + "/admin/food/restaurant/outlet",
      body
    );
  }

  getPendingStoreOrders(status, page) {
    return this.http.get(
      this.comm.baseUrl +
      "/admin/store/orders/all?status=" +
      status +
      "&page=" +
      page
    );
  }

  getAllStoreOrders(status, page) {
    return this.http.get(
      this.comm.baseUrl + "/admin/store/orders/all?&page=" + page
    );
  }

  getPendingstatus()
  {
    return this.http.get(
      this.comm.baseUrl + "/admin/store/orders/all?status=0&page=1"
    );
  }

  getRestaurantTypeById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/food/type/" + id);
  }

  getRestaurantItemeById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/food/item/" + id);
  }

  assignDriver(data)
  {
    return this.http.post(this.comm.baseUrl + "/admin/store/assignDriver",data);
  }

  changePRice(data)
  {
    return this.http.post(this.comm.baseUrl+'/admin/food/manageInventory',data)
  }

  changeType(data)
  {
    return this.http.post(this.comm.baseUrl+'/admin/store/order/changeType',data);
  }

  assignRDriver(data)
  {
    return this.http.post(this.comm.baseUrl + "/admin/food/assignDriver",data);
  }

  changeRType(data)
  {
    return this.http.post(this.comm.baseUrl+'/admin/food/order/changeType',data);
  }

  getUpdatedItem()
  {
    return this.http.get(this.comm.baseUrl + "/admin/food/item")
  }

  getStoreUpdate()
  {
    return this.http.get(this.comm.baseUrl + "/admin/food/orders/latest")
  }

  getResturantUp()
  {
    return this.http.get(this.comm.baseUrl + "/admin/store/orders/latest")
  }

  getAllStoreCategories() {
    return this.http.get(this.comm.baseUrl + "/admin/store/category");
  }

  addStoreCategory(body) {
    return this.http.post(this.comm.baseUrl + "/admin/store/category", body);
  }

  editStoreCategory(body) {
    return this.http.put(this.comm.baseUrl + "/admin/store/category", body);
  }

  getAllStore(search, page) {
    return this.http.get(
      this.comm.baseUrl + "/admin/store?page=" + page + "&name=" + search
    );
  }

  getStoreById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/store/" + id);
  }

  addStore(body) {
    return this.http.post(this.comm.baseUrl + "/admin/store", body);
  }

  editStore(body) {
    return this.http.put(this.comm.baseUrl + "/admin/store", body);
  }

  addStoreOutlet(body) {
    return this.http.post(this.comm.baseUrl + "/admin/store/outlet", body);
  }

  editStoreOutlet(body) {
    return this.http.put(this.comm.baseUrl + "/admin/store/outlet", body);
  }

  addRestaurantFoodType(body) {
    return this.http.post(this.comm.baseUrl + "/admin/food/type", body);
  }

  addRestaurantFoodItem(body) {
    return this.http.post(this.comm.baseUrl + "/admin/food/item", body);
  }

  editRestaurantFoodType(body) {
    return this.http.put(this.comm.baseUrl + "/admin/food/type", body);
  }

  editRestaurantFoodItem(body) {
    return this.http.put(this.comm.baseUrl + "/admin/food/item", body);
  }

  addStoreFoodType(body) {
    return this.http.post(this.comm.baseUrl + "/admin/store/type", body);
  }

  addStoreFoodItem(body) {
    return this.http.post(this.comm.baseUrl + "/admin/store/item", body);
  }

  editStoreFoodType(body) {
    return this.http.put(this.comm.baseUrl + "/admin/store/type", body);
  }

  editStoreFoodItem(body) {
    return this.http.put(this.comm.baseUrl + "/admin/store/item", body);
  }

  getStoreTypeById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/store/type/" + id);
  }

  getStoreItemeById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/store/item/" + id);
  }

  getStoreItem(id)
  {
    return this.http.get(this.comm.baseUrl + `/admin/store/item?page=1&store=${id}`)
  }

  getStorerevApi(value)
  {
    const body={"type":value}
    return this.http.post(this.comm.baseUrl+'/admin/revenue/store/graph',body);
  }


  getStoreApi(value)
  {
    const body={"type":value}
    return this.http.post(this.comm.baseUrl+'/admin/order/store/graph',body);
  }

getDrivers(lan,lon,id)
{
  return this.http.get(this.comm.baseUrl+`/admin/store/getNearbyDrivers?latitude=${lan}&longitude=${lon}&id=${id}`)
}
  
  getResturantrevApi(value)
  {
    const body={"type":value}
    return this.http.post(this.comm.baseUrl+'/admin/revenue/restaurant/graph',body);
  }


  getResturantApi(value)
  {
    const body={"type":value}
    return this.http.post(this.comm.baseUrl+'/admin/order/restaurant/graph',body);
  }

  addRestaurantSettings(body) {
    return this.http.post(this.comm.baseUrl + "/admin/food/setting", body);
  }

  editRestaurantSettings(body) {
    return this.http.put(this.comm.baseUrl + "/admin/food/setting", body);
  }

  getRestaurantSettings() {
    return this.http.get(this.comm.baseUrl + "/admin/food/setting");
  }

  addStoreSettings(body) {
    return this.http.post(
      this.comm.baseUrl + "/admin/store/common/setting",
      body
    );
  }

  editStoreSettings(body) {
    return this.http.put(
      this.comm.baseUrl + "/admin/store/common/setting",
      body
    );
  }

  getStoreSettings() {
    return this.http.get(this.comm.baseUrl + "/admin/store/common/setting");
  }

  getDriverList(page, name) {
    return this.http.get(
      this.comm.baseUrl + "/admin/driver/all?page=" + page + "&name=" + name
    );
  }

  getDriverDocument(id) {
    return this.http.get(this.comm.baseUrl + "/admin/driver/document/" + id);
  }

  updateDriverDocument(body, id) {
    return this.http.put(
      this.comm.baseUrl + "/admin/driver/document/" + id,
      body
    );
  }

  verifyDocument(body) {
    return this.http.put(
      this.comm.baseUrl + "/admin/driver/verifydocument",
      body
    );
  }

  updateDriver(body, id) {
    return this.http.put(
      this.comm.baseUrl + "/admin/driver/detail/" + id,
      body
    );
  }

  getStoreOrderDetail(id) {
    return this.http.get(this.comm.baseUrl + "/admin/store/order/" + id);
  }

  getRestaurantOrderDetail(id) {
    return this.http.get(this.comm.baseUrl + "/admin/food/order/" + id);
  }

  getDriverById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/driver/detail/" + id);
  }

  getAllVerticleTypes(type) {
    return this.http.get(
      this.comm.baseUrl + "/driver/vehicletypes?type=" + type
    );
  }

  addDriverDocuments(body, id) {
    return this.http.post(
      this.comm.baseUrl + "/admin/driver/document/" + id,
      body
    );
  }

  getAllVehicle() {
    return this.http.get(this.comm.baseUrl + "/admin/vehicletype");
  }

  updateVehicle(body) {
    return this.http.put(this.comm.baseUrl + "/admin/vehicletype", body);
  }

  addVehicle(body) {
    return this.http.post(this.comm.baseUrl + "/admin/vehicletype", body);
  }

  getAllPromoCode() {
    return this.http.get(this.comm.baseUrl + "/admin/promocode");
  }

  updatePromoCode(body) {
    return this.http.put(this.comm.baseUrl + "/admin/promocode", body);
  }

  addPromoCode(body) {
    return this.http.post(this.comm.baseUrl + "/admin/promocode", body);
  }

  getPromocodeById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/promocode/" + id);
  }

  getAllUser(page, name) {
    return this.http.get(
      this.comm.baseUrl + "/admin/user?page=" + page + "&name=" + name
    );
  }

  updateUser(body) {
    return this.http.put(this.comm.baseUrl + "/admin/user", body);
  }

  addUser(body) {
    return this.http.post(this.comm.baseUrl + "/admin/user", body);
  }

  getUserById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/user/" + id);
  }

  getVendersList() {
    return this.http.get(this.comm.baseUrl + "/shuttle/vender/getall");
  }

  getAllVenders(page, searchText) {
    return this.http.get(
      this.comm.baseUrl +
      "/shuttle/vender/get?page=" +
      page +
      "&text=" +
      searchText
    );
  }

  getVenderById(id) {
    return this.http.get(this.comm.baseUrl + "/shuttle/vender/get/" + id);
  }

  updateVender(id, body) {
    return this.http.put(
      this.comm.baseUrl + "/shuttle/vender/update/" + id,
      body
    );
  }

  deleteVender(id) {
    return this.http.put(
      this.comm.baseUrl + "/shuttle/vender/delete/" + id,
      {}
    );
  }

  addVender(body) {
    return this.http.post(this.comm.baseUrl + "/shuttle/vender/add", body);
  }

  getAllShuttle(page) {
    return this.http.get(this.comm.baseUrl + "/shuttle/getAll?page=" + page);
  }

  getShuttleById(id) {
    return this.http.get(this.comm.baseUrl + "/shuttle/getById?Id=" + id);
  }

  updateShuttle(id, body) {
    return this.http.put(this.comm.baseUrl + "/shuttle/update/" + id, body);
  }

  deleteShuttle(id, body) {
    return this.http.put(this.comm.baseUrl + "/shuttle/delete?Id=" + id, body);
  }

  addShuttle(body) {
    return this.http.post(this.comm.baseUrl + "/shuttle/add", body);
  }

  getAllShuttleLocation(page) {
    return this.http.get(
      this.comm.baseUrl + "/shuttle/location/getAll?page=" + page
    );
  }

  getAllShuttleLocationAdmin() {
    return this.http.get(this.comm.baseUrl + "/shuttle/location/getAll/admin");
  }

  updateShuttleLocation(id, body) {
    return this.http.put(
      this.comm.baseUrl + "/shuttle/location/update/" + id,
      body
    );
  }

  deleteShuttleLocation(body) {
    return this.http.put(this.comm.baseUrl + "/shuttle/location/delete", body);
  }

  addShuttleLocation(body) {
    return this.http.post(this.comm.baseUrl + "/shuttle/location/add", body);
  }

  getAllShuttleRoute(page) {
    return this.http.get(
      this.comm.baseUrl + "/shuttle/route/getAll?page=" + page
    );
  }

  getAllFreeRoute(id) {
    return this.http.get(
      this.comm.baseUrl + "/shuttle/route/shuttlefree/" + id
    );
  }

  updateShuttleRoute(id, body) {
    return this.http.put(
      this.comm.baseUrl + "/shuttle/route/update/" + id,
      body
    );
  }

  deleteShuttleRoute(body) {
    return this.http.put(this.comm.baseUrl + "/shuttle/route/delete", body);
  }

  addShuttleRoute(body) {
    return this.http.post(this.comm.baseUrl + "/shuttle/route/add", body);
  }

  getShuttleRouteById(id) {
    return this.http.get(this.comm.baseUrl + "/shuttle/route/getById?Id=" + id);
  }

  getAllShuttleDriver(id) {
    return this.http.get(this.comm.baseUrl + "/admin/driver/all/shuttle/" + id);
  }

  getDashboard() {
    return this.http.get(this.comm.baseUrl + "/admin/dashboard");
  }

  getRestaurantBookingAnalytic() {
    return this.http.get(this.comm.baseUrl + "/admin/revenue/restaurant");
  }

  getRevenueTaxi() {
    return this.http.get(this.comm.baseUrl + "/admin/revenue/taxi");
  }

  getRevenueStore() {
    return this.http.get(this.comm.baseUrl + "/admin/revenue/store");
  }

  getRevenueShuttle() {
    return this.http.get(this.comm.baseUrl + "/admin/revenue/shuttle");
  }

  getTaxiBooking(page, search, startDate, endDate) {
    return this.http.get(
      this.comm.baseUrl +
      "/admin/taxi/bookings?page=" +
      page +
      "&name=" +
      search +
      "&startDate=" +
      startDate +
      "&endDate=" +
      endDate
    );
  }

  getTaxiBookingById(id) {
    return this.http.get(this.comm.baseUrl + "/admin/taxi/booking/" + id);
  }

  getAllBookings(page, searhType, searchText) {
    return this.http.get(
      this.comm.baseUrl +
      "/shuttle/booking/admin?page=" +
      page +
      "&searchType=" +
      searhType +
      "&searchText=" +
      searchText
    );
  }

  getShuttleBookingDetail(id) {
    return this.http.get(this.comm.baseUrl + "/shuttle/booking/admin/" + id);
  }
  cancelBookings(id, data) {
    return this.http.put(
      this.comm.baseUrl + "/shuttle/booking/admin/cancel/" + id,
      data
    );
  }
  getAllShuttleOverview(page, date) {
    return this.http.get(
      this.comm.baseUrl +
      "/shuttle/booking/seatstats?page=" +
      page +
      "&date=" +
      date
    );
  }

  changePassword(body) {
    return this.http.post(this.comm.baseUrl + "/admin/adminChangePass", body);
  }

  getAdminProfile(id) {
    return this.http.get(this.comm.baseUrl + "/admin/getAdminProfile/" + id);
  }

  updateProfile(body) {
    return this.http.put(this.comm.baseUrl + "/admin/updateProfile", body);
  }

  getCrm(id) {
    return this.http.get(this.comm.baseUrl + "/admin/getCrm/" + id);
  }

  addCrm(body) {
    return this.http.post(this.comm.baseUrl + "/admin/addCrm", body);
  }

  updateAdminSettings(data) {
    return this.http.post(this.comm.baseUrl + "/admin/setSetting", data);
  }

  getAdminSettings(id) {
    console.log(this.comm.baseUrl + "/admin/getSetting/" + id);
    return this.http.get(this.comm.baseUrl + "/admin/getSetting/" + id);
  }
}
