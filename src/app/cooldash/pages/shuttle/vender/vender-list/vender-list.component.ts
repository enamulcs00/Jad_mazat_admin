import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
declare var google: any;
@Component({
  selector: "app-vender-list",
  templateUrl: "./vender-list.component.html",
  styleUrls: ["./vender-list.component.scss"],
})
export class VenderListComponent implements OnInit {
  rows: [];
  loader: boolean = true;
  currentPage = 1;
  config: any;
  serialNumber = 0;
  searchText: string = "";

  constructor(
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllVenders();
  }

  getAllVenders() {
    var page = this.currentPage;
    this.api.getAllVenders(page, this.searchText).subscribe((res) => {
      if (res["response"]["success"]) {
        console.log(res);
        this.rows = res["data"]["list"];
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: this.currentPage,
          itemsPerPage: 25,
          totalItems: res["data"]["count"],
        };
      }
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    this.getAllVenders();
  }

  addVender() {
    this.router.navigate(["shuttle/add-vender"]);
  }

  editVender(id) {
    this.router.navigate(["shuttle/edit-vender/" + id]);
  }

  deleteVender(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Vender!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        this.api.deleteVender(item._id).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: "Vender deleted Successfully",
              icon: "success",
            });
            this.getAllVenders();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  viewVender() {
    this.router.navigate(["shuttle/view-vender"]);
  }

  updateStatus(event) {}
}
