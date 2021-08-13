import { Component, OnInit } from "@angular/core";
import * as js from "../../../../assets/js/custom";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  dashboard: any;

  language;

  menuItems = [];
  user: any;
  category: any;
  subcategory: any;
  order: any;
  Merchant: any;
  product: any;
  setting: any;
  SubAdmin: any;
  businessType: any;
  inventory: any;
  location: string;
  driver: string;
  banner: string;
  merchant: string;
  role: any;
  access: any;
  subadmin: string;
  constructor() {
    (this.dashboard = "assets/icon/dashboard.png"),
      (this.user = "assets/icon/user.png");
    this.category = "assets/icon/category.png";
    this.product = "assets/icon/product.png";
    this.inventory = "assets/icon/inventory.png";
    this.subcategory = "assets/icon/sub-category.png";
    this.order = "assets/icon/order.png";
    this.businessType = "assets/icon/business.png";
    this.setting = "assets/icon/gear.png";
    this.location = "assets/icon/location.png";
    this.subadmin = "assets/icon/driver.png";
    this.driver = "assets/icon/driver-icon.png";
    this.banner = "assets/icon/banner.png";
    this.merchant = "assets/icon/admin-icon.png";
  }

  ngOnInit() {
    js.customScript();

    this.language = localStorage.getItem("language");

    console.log("Dashboard ############", this.language);

    this.menuItems = [
      {
        path: "/dashboard",
        title: "Dashboard",
        icon: "assets/icon/dashboard.svg",
        class: "sub",
        id: 1,
      },
      {
        path: "/user/user",
        title: "User",
        icon: "assets/icon/user.svg",
        class: "sub",
        id: 3,
      },
      {
        path: "/driver/driver",
        title: "Driver",
        icon: "assets/icon/driver.svg",
        class: "sub",
        id: 2,
      },
      {
        path: "",
        title: "Restaurant",
        icon: "assets/icon/restaurant.svg",
        class: "subchild",
        id: 3,
        children: [
          {
            path: "/restaurant/category",
            title: "Category",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/restaurant/restaurant",
            title: "Restaurant",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/restaurant/order",
            title: "Order",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/restaurant/settings",
            title: "Settings",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
        ],
      },
      {
        path: "",
        title: "Store",
        icon: "assets/icon/store.svg",
        class: "subchild",
        id: 4,
        children: [
          {
            path: "/store/category",
            title: "Category",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/store/store",
            title: "Manage Store",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/store/order",
            title: "Order",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/store/settings",
            title: "Settings",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/store/inventory",
            title: "Inventory",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
        ],
      },
      {
        path: "/vehicle-type/vehicle-type",
        title: "Vehicle Type",
        icon: "assets/icon/truck.svg",
        class: "sub",
        id: 2,
      },
      {
        path: "/coupon/coupon",
        title: "Coupon",
        icon: "assets/icon/coupon.svg",
        class: "sub",
        id: 4,
      },
      // {
      //   path: "",
      //   title: "Shuttle",
      //   icon: "assets/icon/shuttle.png",
      //   class: "subchild",
      //   id: 5,
      //   children: [
      //     {
      //       path: "/shuttle/vender",
      //       title: "Venders",
      //       icon: "assets/icon/shuttle.png",
      //       class: "child"
      //     },
      //     {
      //       path: "/shuttle/location",
      //       title: "Location",
      //       icon: "assets/icon/shuttle.png",
      //       class: "child"
      //     },
      //     {
      //       path: "/shuttle/shuttle-route",
      //       title: "Shuttle Route",
      //       icon: "assets/icon/dashboard.png",
      //       class: "child"
      //     },
      //     {
      //       path: "/shuttle/shuttle",
      //       title: "Shuttle",
      //       icon: "assets/icon/dashboard.png",
      //       class: "child"
      //     },
      //     {
      //       path: "/shuttle/bookings",
      //       title: "Bookings",
      //       icon: "assets/icon/dashboard.png",
      //       class: "child"
      //     },
      //     {
      //       path: "/shuttle/overview",
      //       title: "Overview",
      //       icon: "assets/icon/dashboard.png",
      //       class: "child"
      //     }
      //   ]
      // },
      // {
      //   path: "/taxi/taxi-booking",
      //   title: "Taxi Bookings",
      //   icon: "assets/icon/taxi-booking.png",
      //   class: "sub",
      //   id: 6
      // },
      {
        path: "",
        title: "CMS Pages",
        icon: "assets/icon/cms.svg",
        class: "subchild",
        id: 7,
        children: [
          {
            path: "/cms/term&conditions",
            title: "Term and conditions",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
          {
            path: "/cms/privacypolicy",
            title: "Privacy Policy",
            icon: "assets/icon/dashboard.png",
            class: "child",
          },
        ],
      },
      {
        path: "/profile",
        title: "Profile",
        icon: "assets/icon/business.png",
        class: "sub",
      },
      {
        path: "/change-password",
        title: "Change Password",
        icon: "assets/icon/password.png",
        class: "sub",
      },
      // {
      //   path: "/adminSettings",
      //   title: "Admin Settings",
      //   icon: "assets/icon/gear.png",
      //   class: "sub",
      //   id: 8,
      // },
    ];

    // if (this.language == "English") {
    //   this.menuItems = [
    //     {
    //       path: "/dashboard",
    //       title: "Dashboard",
    //       icon: "assets/icon/dashboard.svg",
    //       class: "sub",
    //       id: 1,
    //     },
    //     {
    //       path: "/user/user",
    //       title: "User",
    //       icon: "assets/icon/user.svg",
    //       class: "sub",
    //       id: 3,
    //     },
    //     {
    //       path: "/driver/driver",
    //       title: "Driver",
    //       icon: "assets/icon/driver.svg",
    //       class: "sub",
    //       id: 2,
    //     },
    //     {
    //       path: "",
    //       title: "Restaurant",
    //       icon: "assets/icon/restaurant.svg",
    //       class: "subchild",
    //       id: 3,
    //       children: [
    //         {
    //           path: "/restaurant/category",
    //           title: "Category",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/restaurant/restaurant",
    //           title: "Restaurant",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/restaurant/order",
    //           title: "Order",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/restaurant/settings",
    //           title: "Settings",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //       ],
    //     },
    //     {
    //       path: "",
    //       title: "Store",
    //       icon: "assets/icon/store.svg",
    //       class: "subchild",
    //       id: 4,
    //       children: [
    //         {
    //           path: "/store/category",
    //           title: "Category",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/store/store",
    //           title: "Manage Store",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/store/order",
    //           title: "Order",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/store/settings",
    //           title: "Settings",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //       ],
    //     },
    //     {
    //       path: "/vehicle-type/vehicle-type",
    //       title: "Vehicle Type",
    //       icon: "assets/icon/truck.svg",
    //       class: "sub",
    //       id: 2,
    //     },
    //     {
    //       path: "/coupon/coupon",
    //       title: "Coupon",
    //       icon: "assets/icon/coupon.svg",
    //       class: "sub",
    //       id: 4,
    //     },
    //     // {
    //     //   path: "",
    //     //   title: "Shuttle",
    //     //   icon: "assets/icon/shuttle.png",
    //     //   class: "subchild",
    //     //   id: 5,
    //     //   children: [
    //     //     {
    //     //       path: "/shuttle/vender",
    //     //       title: "Venders",
    //     //       icon: "assets/icon/shuttle.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/location",
    //     //       title: "Location",
    //     //       icon: "assets/icon/shuttle.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/shuttle-route",
    //     //       title: "Shuttle Route",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/shuttle",
    //     //       title: "Shuttle",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/bookings",
    //     //       title: "Bookings",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/overview",
    //     //       title: "Overview",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     }
    //     //   ]
    //     // },
    //     // {
    //     //   path: "/taxi/taxi-booking",
    //     //   title: "Taxi Bookings",
    //     //   icon: "assets/icon/taxi-booking.png",
    //     //   class: "sub",
    //     //   id: 6
    //     // },
    //     {
    //       path: "",
    //       title: "CMS Pages",
    //       icon: "assets/icon/cms.svg",
    //       class: "subchild",
    //       id: 7,
    //       children: [
    //         {
    //           path: "/cms/term&conditions",
    //           title: "Term and conditions",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/cms/privacypolicy",
    //           title: "Privacy Policy",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //       ],
    //     },
    //     {
    //       path: "/profile",
    //       title: "Profile",
    //       icon: "assets/icon/business.png",
    //       class: "sub",
    //     },
    //     {
    //       path: "/change-password",
    //       title: "Change Password",
    //       icon: "assets/icon/password.png",
    //       class: "sub",
    //     },
    //     {
    //       path: "/adminSettings",
    //       title: "Admin Settings",
    //       icon: "assets/icon/gear.png",
    //       class: "sub",
    //       id: 8,
    //     },
    //   ];
    // } else {
    //   this.menuItems = [
    //     {
    //       path: "/dashboard",
    //       title: "لوحة القيادة",
    //       icon: "assets/icon/dashboard.svg",
    //       class: "sub",
    //       id: 1,
    //     },
    //     {
    //       path: "/user/user",
    //       title: "المستعمل",
    //       icon: "assets/icon/user.svg",
    //       class: "sub",
    //       id: 3,
    //     },
    //     {
    //       path: "/driver/driver",
    //       title: "سائق",
    //       icon: "assets/icon/driver.svg",
    //       class: "sub",
    //       id: 2,
    //     },
    //     {
    //       path: "",
    //       title: "مطعم",
    //       icon: "assets/icon/restaurant.svg",
    //       class: "subchild",
    //       id: 3,
    //       children: [
    //         {
    //           path: "/restaurant/category",
    //           title: "الفئة",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/restaurant/restaurant",
    //           title: "مطعم",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/restaurant/order",
    //           title: "طلب",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/restaurant/settings",
    //           title: "إعدادات",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //       ],
    //     },
    //     {
    //       path: "",
    //       title: "متجر",
    //       icon: "assets/icon/store.svg",
    //       class: "subchild",
    //       id: 4,
    //       children: [
    //         {
    //           path: "/store/category",
    //           title: "الفئة",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/store/store",
    //           title: "إدارة مخزن",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/store/order",
    //           title: "طلب",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/store/settings",
    //           title: "إعدادات",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //       ],
    //     },
    //     {
    //       path: "/vehicle-type/vehicle-type",
    //       title: "نوع السيارة",
    //       icon: "assets/icon/truck.svg",
    //       class: "sub",
    //       id: 2,
    //     },
    //     {
    //       path: "/coupon/coupon",
    //       title: "كوبون",
    //       icon: "assets/icon/coupon.svg",
    //       class: "sub",
    //       id: 4,
    //     },
    //     // {
    //     //   path: "",
    //     //   title: "Shuttle",
    //     //   icon: "assets/icon/shuttle.png",
    //     //   class: "subchild",
    //     //   id: 5,
    //     //   children: [
    //     //     {
    //     //       path: "/shuttle/vender",
    //     //       title: "Venders",
    //     //       icon: "assets/icon/shuttle.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/location",
    //     //       title: "Location",
    //     //       icon: "assets/icon/shuttle.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/shuttle-route",
    //     //       title: "Shuttle Route",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/shuttle",
    //     //       title: "Shuttle",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/bookings",
    //     //       title: "Bookings",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     },
    //     //     {
    //     //       path: "/shuttle/overview",
    //     //       title: "Overview",
    //     //       icon: "assets/icon/dashboard.png",
    //     //       class: "child"
    //     //     }
    //     //   ]
    //     // },
    //     // {
    //     //   path: "/taxi/taxi-booking",
    //     //   title: "Taxi Bookings",
    //     //   icon: "assets/icon/taxi-booking.png",
    //     //   class: "sub",
    //     //   id: 6
    //     // },
    //     {
    //       path: "",
    //       title: "صفحات CMS",
    //       icon: "assets/icon/cms.svg",
    //       class: "subchild",
    //       id: 7,
    //       children: [
    //         {
    //           path: "/cms/term&conditions",
    //           title: "شروط وأحكام",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //         {
    //           path: "/cms/privacypolicy",
    //           title: "سياسة خاصة",
    //           icon: "assets/icon/dashboard.png",
    //           class: "child",
    //         },
    //       ],
    //     },
    //     {
    //       path: "/profile",
    //       title: "الملف الشخصي",
    //       icon: "assets/icon/business.png",
    //       class: "sub",
    //     },
    //     {
    //       path: "/change-password",
    //       title: "غير كلمة السر",
    //       icon: "assets/icon/password.png",
    //       class: "sub",
    //     },
    //     {
    //       path: "/adminSettings",
    //       title: "اعدادات المشرف",
    //       icon: "assets/icon/gear.png",
    //       class: "sub",
    //       id: 8,
    //     },
    //   ];
    // }

    if (JSON.stringify(localStorage.getItem("role"))) {
      this.role = JSON.parse(localStorage.getItem("role"));
      this.access = JSON.parse(localStorage.getItem("access"));
    }
  }

  onItemSelect() {
    var e = document.getElementsByClassName("show")[0];
    if (e) {
      e.classList.remove("show");
    }
  }
}
