import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "User"
    },
    children: [
      {
        path: "user",
        component: UserComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add",
        component: AddEditUserComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit/:id",
        component: AddEditUserComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view/:id",
        component: ViewComponent,
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
export class UserRoutingModule { }
