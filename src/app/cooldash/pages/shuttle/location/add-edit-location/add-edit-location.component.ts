import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { MapsAPILoader } from "@agm/core";
declare var google: any
declare var $: any;

@Component({
  selector: 'app-add-edit-location',
  templateUrl: './add-edit-location.component.html',
  styleUrls: ['./add-edit-location.component.scss']
})
export class AddEditLocationComponent implements OnInit {
  outletForm: FormGroup;
  item: any;
  restaurantId;
  submitted: boolean = false;
  updateAddrssStatus: boolean = false;
  updateAddress: any;
  latitude: number;
  longitude: number;
  zoom: number;
  addressLocation: any;
  geoCoder: any;
  constructor(
    private dialog: MatDialogRef<AddEditLocationComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private mapsAPILoader: MapsAPILoader,
  ) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.outletForm = this.formBuilder.group({
      address: new FormControl("", Validators.compose([Validators.required])),
      latitude: new FormControl("", Validators.compose([Validators.required])),
      longitude: new FormControl("", Validators.compose([Validators.required]))
    });
    if (this.item) {
      this.setValues();
    }else{
      this.setCurrentLocation()
    }
  }

  setCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 11;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        this.addressLocation = results[0].formatted_address;
        this.outletForm.patchValue({
          address: this.addressLocation,
          latitude: latitude,
          longitude: longitude
        });
        console.log(this.addressLocation);
      }
    );
  }

  setValues = () => {
    if (this.item) {
      this.outletForm.patchValue({
        address: this.item.address,
        latitude: this.item.coordinates[0],
        longitude: this.item.coordinates[1]
      });
    }
    this.latitude = this.item.coordinates[0],
      this.longitude = this.item.coordinates[1],
      this.updateAddress = this.outletForm.controls['address'].value;
  };

  onSubmit() {
    this.submitted = true;
    if ((this.outletForm['controls'].latitude.value !== "" && this.outletForm['controls'].latitude.value !== null) && (this.outletForm['controls'].longitude.value !== "" && this.outletForm['controls'].longitude.value !== null)) {
      if (this.submitted && this.outletForm.valid) {
        var coordinates = [];
        coordinates.push(this.outletForm['controls'].latitude.value);
        coordinates.push(this.outletForm['controls'].longitude.value);
        var data = {
          address: this.outletForm.controls['address'].value,
          coordinates: coordinates
        }
        this.api.addShuttleLocation(data).subscribe(res => {
          if (res["response"]["success"]) {
            this.toastr.successToastr(res["response"]["message"]);
            this.dialog.close("yes");
          } else {
            this.toastr.errorToastr(res["response"]["message"]);
            this.dialog.close("no");
          }
        });
      }
    }
    else if (this.outletForm['controls'].address.value) {
      this.toastr.errorToastr("Please select a valid address from suggestions.");
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.outletForm.controls[control].hasError(error);
  };

  close() {
    this.dialog.close();
  }

  onUpdate() {
    this.submitted = true;
    if (this.outletForm.valid && this.submitted) {
      if (this.outletForm['controls'].address.value === this.updateAddress) {
        this.editRestaurantOutlet();
      } else if ((this.updateAddrssStatus) && (this.outletForm['controls'].latitude.value !== "" && this.outletForm['controls'].latitude.value !== null) && (this.outletForm['controls'].longitude.value !== "" && this.outletForm['controls'].longitude.value !== null)) {
        this.editRestaurantOutlet();
      } else if ((this.outletForm['controls'].address.value) && (this.updateAddrssStatus == false)) {
        this.toastr.errorToastr("Please select a valid address from suggestions.");
      }
    }
  }

  editRestaurantOutlet() {
    if (this.outletForm.valid && this.submitted) {
      var coordinates = [];
      coordinates.push(this.outletForm['controls'].latitude.value);
      coordinates.push(this.outletForm['controls'].longitude.value);
      var data = {
        address: this.outletForm.controls['address'].value,
        coordinates: coordinates
      }
      this.api.updateShuttleLocation(this.item._id, data).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.dialog.close("yes");
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
          this.dialog.close("no");
        }
      });
    }
    else if (this.outletForm['controls'].address.value) {
      this.toastr.errorToastr("Please select a valid address from suggestions.");
    }
  }

  
  handleAddress(address) {
    this.updateAddrssStatus = true;
    if (address.formatted_address) {
      var outlet = {
        address: address.formatted_address,
        latitude: address.geometry.location.lat(),
        longitude: address.geometry.location.lng()
      };
      this.outletForm.controls["address"].setValue(
        address.formatted_address
      );
      this.outletForm.controls["latitude"].setValue(
        address.geometry.location.lat()
      );
      this.outletForm.controls["longitude"].setValue(
        address.geometry.location.lng()
      );
      this.latitude = address.geometry.location.lat();
      this.longitude = address.geometry.location.lng();
    }
  }

  markerDragEnds(event: MouseEvent) {
    this.latitude = event['coords'].lat;
    this.longitude = event['coords'].lng;
    this.getAddress(this.latitude, this.longitude);
    this.updateAddrssStatus = true;
  }
}
