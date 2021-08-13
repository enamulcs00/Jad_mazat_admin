import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CouponComponent } from './coupon/coupon.component';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Coupon"
    },
    children: [
      {
        path: "coupon",
        component: CouponComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add",
        component: AddEditCouponComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit/:id",
        component: AddEditCouponComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view/:id",
        component: ViewCouponComponent,
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
export class CouponRoutingModule { }
