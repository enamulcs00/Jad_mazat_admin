import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaxiBookingComponent } from './taxi-booking/taxi-booking.component';
import { ViewTaxiBookingComponent } from './view-taxi-booking/view-taxi-booking.component';
import { AddTaxiComponent } from './add-taxi/add-taxi.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Taxi Booking"
    },
    children: [
      {
        path: "taxi-booking",
        component: TaxiBookingComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view/:id",
        component: ViewTaxiBookingComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add",
        component: AddTaxiComponent,
        data: {
          title: ""
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxiBookingRoutingModule { }
