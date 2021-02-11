import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
import { PopupService } from "../../../../services/popup/popup.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-shuttle-route',
  templateUrl: './shuttle-route.component.html',
  styleUrls: ['./shuttle-route.component.scss']
})
export class ShuttleRouteComponent implements OnInit {
  id: any;
  shuttleRoute: any;
  totalItems: number;
  currentPage = 1;
  config: any
  serialNumber = 0;
  loader: boolean = true;
  categoryList: Array<any> = [];
  imageUrl: string;
  tokenVal;
  role: any;
  history = window.history;
  access: any;
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute, private dialogService: PopupService
  ) { }

  ngOnInit() {
    this.getAllShuttleRoute();
  }

  getAllShuttleRoute() {
    let page = this.currentPage
    this.api.getAllShuttleRoute(page).subscribe(res => {
      if (res["response"]["success"]) {
        this.shuttleRoute = res["data"]["list"];
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: this.currentPage,
          itemsPerPage: 25,
          totalItems: res["data"]["count"]
        }
      }
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getAllShuttleRoute();
  }

  addShuttleRoute() {
    this.router.navigate(['shuttle/add-route']);
  }

  viewShuttleRoute(item) {
    this.router.navigate(['shuttle/view-route', item._id]);
  }

  editShuttleRoute(item) {
    this.router.navigate(['shuttle/edit-route', item._id]);
  }


  deleteShuttleRoute(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Shuttle Route!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          Id: item._id
        };
        this.api.deleteShuttleRoute(data).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getAllShuttleRoute();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }


  updateStatus(item: any) {
    // this.loader = true;
    let data = { status: item.status ? 1 : 0 }
    this.api.updateShuttleRoute(item._id, data).subscribe(res => {
      // this.loader = false;
    })
  }

}
