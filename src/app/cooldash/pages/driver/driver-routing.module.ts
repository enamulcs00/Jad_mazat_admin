import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DriverComponent } from './driver/driver.component';
import { DriverDocumentComponent } from './driver-document/driver-document.component'; // <-- import the module
import { ViewDriverComponent } from './view-driver/view-driver.component';
import { AddEditDriverComponent } from './add-edit-driver/add-edit-driver.component'; //
const routes: Routes = [
  {
    path: "",
    data: {
      title: "Driver"
    },
    children: [
      {
        path: "driver",
        component: DriverComponent,
        data: {
          title: ""
        }
      },
      {
        path: "document/:id",
        component: DriverDocumentComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add",
        component: AddEditDriverComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit/:id",
        component: AddEditDriverComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view/:id",
        component: ViewDriverComponent,
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
export class DriverRoutingModule { }
