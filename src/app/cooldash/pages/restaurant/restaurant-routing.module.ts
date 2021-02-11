import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { AddRestaurantComponent } from "./restaurant/add-restaurant/add-restaurant.component";
import { ViewRestaurantComponent } from "./restaurant/view-restaurant/view-restaurant.component";
import { OrderComponent } from "./order/order.component";
import { OutletComponent } from "./restaurant/outlet/outlet.component";
import { FoodTypeComponent } from './restaurant/food-type/food-type.component';
import { FoodItemComponent } from './restaurant/food-item/food-item.component';
import { AddFoodItemComponent } from './restaurant/food-item/add-food-item/add-food-item.component';
import { SettingsComponent } from './restaurant/settings/settings.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Category"
    },
    children: [
      {
        path: "category",
        component: CategoryComponent,
        data: {
          title: ""
        }
      },
      {
        path: "restaurant",
        component: RestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add",
        component: AddRestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view/:id",
        component: ViewRestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit/:id",
        component: AddRestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "order",
        component: OrderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "outlet/:id",
        component: OutletComponent,
        data: {
          title: ""
        }
      },
      {
        path: "food-type/:id",
        component: FoodTypeComponent,
        data: {
          title: ""
        }
      },
      {
        path: "food-item",
        component: FoodItemComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add-food-item/:id",
        component: AddFoodItemComponent,
        data: {
          title: ""
        }
      }, {
        path: "add-food-item/:id/:itemId",
        component: AddFoodItemComponent,
        data: {
          title: ""
        }
      },
      {
        path: "settings",
        component: SettingsComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-order/all/:id",
        component: ViewOrderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-order/pending/:id",
        component: ViewOrderComponent,
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
export class RestaurantRoutingModule { }
