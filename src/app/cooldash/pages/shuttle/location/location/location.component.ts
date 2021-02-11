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
import { MapsAPILoader } from "@agm/core";
import { PopupService } from "../../../../services/popup/popup.service";
import Swal from "sweetalert2";
declare var google: any;
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  outlet: any;
  id: any;
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
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader, private dialogService: PopupService
  ) { }

  ngOnInit() {
    this.getAllShuttleLocation();
  }

  getAllShuttleLocation() {
    var page = this.currentPage;
    this.api.getAllShuttleLocation(page).subscribe(res => {
      if (res["response"]["success"]) {
        this.outlet = res["data"]["list"];
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
    this.getAllShuttleLocation();
  }

  addLocation() {
    this.dialogService.addShuttleLocation().subscribe(res => {
      if (res == "yes") {
        this.getAllShuttleLocation();
      }
    });
  }

  onEditSelect(item) {
    this.dialogService.editShuttleLocation(item).subscribe(res => {
      if (res == "yes") {
        this.getAllShuttleLocation();
      }
    });
  }

  deleteLocation(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Location!",
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
        this.api.deleteShuttleLocation(data).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getAllShuttleLocation();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  updateStatus(item: any) {
    // this.loader = true;
    let data = { status: item.status ? 1 : 0 }
    this.api.updateShuttleLocation(item._id, data).subscribe(res => {
      // this.loader = false;
    })
  }

}
