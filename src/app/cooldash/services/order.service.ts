import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { CommonService } from "./common/common.service";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class OrderService {
  socket;

  constructor(private comm: CommonService) {
this.connectSocket();
  }

  connectSocket()
  {
    this.socket = io.connect(this.comm.imageUrl, {
      reconnection: true,
      reconnectionDelay: 30000,
      reconnectionDelayMax: 60000,
      reconnectionAttempts: Infinity,
    });
  }

  orderAccept(order) {
    this.socket.emit("acceptOrder", order);
  }

  addAdmin(data)
  {
    this.socket.emit('addAdmin',data)
    return Observable.create((observer) => {
      this.socket.removeListener("addAdmin");
      this.socket.on("addAdmin", (message) => {
        
        observer.next(message);
      });
    });
  }

  changeStatus(order) {
    this.socket.emit("adminChangeStatus", order);
    return Observable.create((observer) => {
      this.socket.removeListener("adminChangeStatus");
      this.socket.on("adminChangeStatus", (message) => {
        observer.next(message);
      });
    });
  }

  orderListener() {
    return Observable.create((observer) => {
      this.socket.removeListener("acceptOrder");
      this.socket.on("acceptOrder", (message) => {
        observer.next(message);
      });
    });
  }

  statusCahnegListener() {
    return Observable.create((observer) => {
      this.socket.removeListener("adminCheckChange");
      this.socket.on("adminCheckChange", (message) => {
        observer.next(message);
      });
    });
  }


  newRestaurtOrder() {
    return Observable.create((observer) => {
      this.socket.removeListener("restaurantOrder");
      this.socket.on("restaurantOrder", (message) => {
        observer.next(message);
      });
    });
  }


  newStoreOrder() {
    return Observable.create((observer) => {
      this.socket.removeListener("storeOrder");
      this.socket.on("storeOrder", (message) => {
        observer.next(message);
      });
    });
  }

  getVehicleTypes(lat, long) {
    this.socket.emit("nearByVehicleType", { latitude: lat, longitude: long });
    this.socket.removeListener("nearByVehicleType");
    return Observable.create((observer) => {
      this.socket.on("nearByVehicleType", (message) => {
        observer.next(message);
      });
    });
  }

  taxiBooking(body) {
    this.socket.emit("sendBooking", body);
    this.socket.removeListener("sendBooking");
    return Observable.create((observer) => {
      this.socket.on("sendBooking", (message) => {
        console.log("msg", message);
        observer.next(message);
      });
    });
  }

  assingDriver(id)
  {
    //this.socket.emit("requestDeliveryAction");
    return Observable.create((observer) => {
      this.socket.removeListener(`requestDeliveryAction_${id}`);
      this.socket.on(`requestDeliveryAction_${id}`, (message) => {
      
        observer.next(message);
      });
    });
  }
}
