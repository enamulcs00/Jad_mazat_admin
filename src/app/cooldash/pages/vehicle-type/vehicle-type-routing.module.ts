import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Category"
    },
    children: [
      {
        path: "vehicle-type",
        component: VehicleTypeComponent,
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
export class VehicleTypeRoutingModule { }
