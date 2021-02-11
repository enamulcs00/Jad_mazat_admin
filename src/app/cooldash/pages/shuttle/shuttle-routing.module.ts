import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShuttleComponent } from './shuttles/shuttle/shuttle.component';
import { LocationComponent } from './location/location/location.component';
import { ShuttleRouteComponent } from './shuttle-routes/shuttle-route/shuttle-route.component';
import { AddShuttleRouteComponent } from './shuttle-routes/add-shuttle-route/add-shuttle-route.component';
import { ViewShuttleRouteComponent } from './shuttle-routes/view-shuttle-route/view-shuttle-route.component';
import { AddEditShuttleComponent } from './shuttles/add-edit-shuttle/add-edit-shuttle.component';
import { ViewShuttleComponent } from './shuttles/view-shuttle/view-shuttle.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ViewBookingComponent } from './bookings/view-booking/view-booking.component';
import { OverviewComponent } from './overview/overview.component';
import { VenderListComponent } from './vender/vender-list/vender-list.component';
import { AddEditVenderComponent } from './vender/add-edit-vender/add-edit-vender.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Shuttle"
    },
    children: [
      {
        path: "vender",
        component: VenderListComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add-vender",
        component: AddEditVenderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit-vender/:id",
        component: AddEditVenderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "shuttle",
        component: ShuttleComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add-shuttle",
        component: AddEditShuttleComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit-shuttle/:id",
        component: AddEditShuttleComponent,
        data: {
          title: ""
        }
      },
      {
        path: "location",
        component: LocationComponent,
        data: {
          title: ""
        }
      },
      {
        path: "shuttle-route",
        component: ShuttleRouteComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add-route",
        component: AddShuttleRouteComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit-route/:id",
        component: AddShuttleRouteComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-route/:id",
        component: ViewShuttleRouteComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-shuttle/:id",
        component: ViewShuttleComponent,
        data: {
          title: ""
        }
      },
      {
        path: "bookings",
        component: BookingsComponent,
        data: {
          title: ""
        }
      },
      {
        path: "booking/:id",
        component: ViewBookingComponent,
        data: {
          title: ""
        }
      },
      {
        path: "overview",
        component: OverviewComponent,
        data: {
          title: ""
        }
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuttleRoutingModule { }
