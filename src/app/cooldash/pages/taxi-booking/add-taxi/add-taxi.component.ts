import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupName
} from "@angular/forms";
import { CommonService } from "../../../services/common/common.service";
import { ApiService } from "../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
declare var google: any;
import { MapsAPILoader, MouseEvent } from "@agm/core";
import { OrderService } from "../../../services/order.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-taxi',
  templateUrl: './add-taxi.component.html',
  styleUrls: ['./add-taxi.component.scss']
})
export class AddTaxiComponent implements OnInit {
  taxiForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  countryCodes: any;
  config1: object;
  countryStatus: boolean = true;
  geoCoder: any;
  addressLocation: any;
  destination: { address: any; cordinates: any[]};
  updateAddrssStatus: boolean = false;
  countryStatus1: boolean = false;
  latitude: number;
  longitude: number;
  latitude1: number;
  longitude1: number;
  zoom: number;
  source: { address: any; cordinates: any[]};
  sourceCountry: any;
  destinationCountry: any;
  show: boolean = false;
  directionStatus:boolean=false
  dir: { search: { lat: any; lng: any; }; destination: { lat: any; lng: any; }; };
  showbtn: boolean = false
  respons: boolean = false;
  vehicleTypes: any[];
  showSelectVehicle: boolean = true;
  baseFare: any = 0;
  minFare: any;
  distance: any;
  fare: any = 0;
  kmDistance:any;
  distKm: any;
  timetaken: any;
  isTaxiRequested : boolean = false;
  bookingInterval : any;
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private mapsAPILoader: MapsAPILoader,
    private router: Router,
    private orderService: OrderService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.taxiForm = this.formBuilder.group({
      firstName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3),
      Validators.maxLength(16),
      Validators.pattern("^[a-zA-Z ]*$")])),
      lastName: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern("^[a-zA-Z ]*$")])
      ),
      countryCode: new FormControl("", Validators.compose([Validators.required])),
      phone: new FormControl("", [Validators.required, Validators.maxLength(15),
      Validators.minLength(7),
      Validators.pattern("^[0-9]*$")]),
      email: new FormControl("", Validators.compose([Validators.required, ,
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      source: this.formBuilder.group({
        address: new FormControl("", Validators.required)
      }),
      destination: this.formBuilder.group({
        address: new FormControl("", Validators.required)
      }),
      vehicleTypeId: new FormControl("", Validators.required),
      note: new FormControl("", Validators.required)
    });
    this.comm.getCountryCode().subscribe(res => {
      this.countryCodes = res["countryArray"];
      this.config1 = {
        displayKey: "Code", //if objects array passed which key to be displayed defaults to description
        search: true, //true/false for the search functionlity defaults to false,
        height: "150px", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
        customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
        limitTo: this.countryCodes.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
        noResultsFound: "No results found!", // text to be displayed when no items are found while searching
        searchPlaceholder: "Search", // label thats displayed in search input,
        searchOnKey: "Code" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
      };
      this.taxiForm.controls["countryCode"].setValue(this.countryCodes[0]);
    });
    this.setCurrentLocation();
  }

  selectionChanged1(event) {
    if (event.value) {
      this.countryStatus1 = true;
    } else {
      this.countryStatus1 = false;
      this.taxiForm.controls["countryCode"].setValue("");
    }
  }

   onChange(event) {
    this.calculateDistance();
    let obj = this.vehicleTypes.find(o => o._id == event);
    if (obj) {
      const dist = Number(this.kmDistance) / 1000
      this.distKm = dist
      this.baseFare = obj.basefare
      var amount = 0;
      amount =  Math.round((obj.fare) * dist);
      if(amount < obj.basefare)   {
        this.fare=obj.basefare;
      }
      else {
        this.fare= amount;
      }
    }
  }

  async calculateDistance() {
    let services = new google.maps.DistanceMatrixService();
    const search = new google.maps.LatLng(this.latitude, this.longitude);
    const destination = new google.maps.LatLng(this.latitude1, this.longitude1);
    var cc = await this.getTime(services, search, destination)
    this.timetaken = cc.time
    console.log("cc", cc)
    this.kmDistance = cc.kmDistance
    this.distance = cc.distance
    return (1)
  }

  handleAddress(address) {
    this.updateAddrssStatus = true;
    if (address.formatted_address) {
      this.latitude = address.geometry.location.lat();
      this.longitude = address.geometry.location.lng();
      this.source = {
        address: address.formatted_address,
        cordinates:[address.geometry.location.lat(),address.geometry.location.lng()]
      };
      this.taxiForm.controls['source'].get('address').setValue(
        address.formatted_address
      );
    }
    this.getSourceAddress(this.latitude, this.longitude)
  }

  
  getAllVerticleType() {
    const list = [];
    this.orderService.getVehicleTypes(this.latitude, this.longitude).subscribe(response => {
        console.log(response)
      if (response["sucess"]) {
        this.vehicleTypes = response["data"];
        // console.log(this.vehicleType)
      }
    });
  }

  
  getTime = async (services, search, destination) => {
    const result = await this.getDistanceMatrix(
      services,
      {
        origins: [search],
        destinations: [destination],
        travelMode: 'DRIVING'
      }
    )
    console.log("result['rows'][0].elements[0].distance", result['rows'][0].elements[0].distance)
    return {
      kmDistance:result['rows'][0].elements[0].distance.value,
      distance: result['rows'][0].elements[0].distance.text,
      time: result['rows'][0].elements[0].duration.text
    }
  };

  getDistanceMatrix = (service, data) => new Promise((resolve, reject) => {
    service.getDistanceMatrix(data, (response, status) => {
      if (status === 'OK') {
        resolve(response)
      } else {
        reject(response);
      }
    })
  });
  handleDestinationAddress(address){
    this.updateAddrssStatus = true;
    if (address.formatted_address) {
      this.latitude1 = address.geometry.location.lat();
      this.longitude1 = address.geometry.location.lng();
      this.destination = {
        address: address.formatted_address,
        cordinates:[address.geometry.location.lat(),address.geometry.location.lng()]
      };
      this.taxiForm.controls['destination'].get('address').setValue(
        address.formatted_address
      );
    }
    this.getDestinationAddress(this.latitude1, this.longitude1)
  }

  markerDragEndSource($event: MouseEvent) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getSourceAddress(this.latitude, this.longitude);
  }

  markerDragEndDestination($event: MouseEvent) {
    this.latitude1 = $event.coords.lat;
    this.longitude1 = $event.coords.lng;
    this.getDestinationAddress(this.latitude1, this.longitude1);
  }

  setCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 11;
        this.getAllVerticleType();
        this.getSourceAddress(this.latitude, this.longitude);
      });
    }
  }

  getSourceAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.source = {
            address: results[0].formatted_address,
            cordinates:[results[0].geometry.location.lat(),results[0].geometry.location.lng()]
          };
          this.taxiForm.controls['source'].get('address').setValue(
            results[0].formatted_address
          );
          results[0].address_components.forEach(key => {
            if (key.types[0] === 'country') {
              this.sourceCountry = key.long_name
            }
          })
          this.getAllVerticleType();
        }
      }
    });
  }

  getDestinationAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.destination = {
            address: results[0].formatted_address,
            cordinates:[results[0].geometry.location.lat(),results[0].geometry.location.lng()]
          };
          this.taxiForm.controls['destination'].get('address').setValue(
            results[0].formatted_address
          );
          results[0].address_components.forEach(key => {
            if (key.types[0] === 'country') {
              this.destinationCountry = key.long_name
            }
          })
        }
      }
    });
  }

  getDirections() {
    if(this.sourceCountry===this.destinationCountry){
      this.directionStatus=true;
      this.showSelectVehicle = false;
      this.calculateDistance();
      if (this.longitude && this.longitude && this.latitude1 && this.longitude1) {
        this.show = true
        this.showbtn = true
        this.dir = {
          search: { lat: (this.latitude), lng: (this.longitude) },
          destination: { lat: this.latitude1, lng: this.longitude1 }
        }
    }} else {
      this.toastr.errorToastr("Source and distination should be in same country")
    }
  }

  editDirection() {
    this.show = false;
    this.directionStatus=false;
    this.showbtn = false;
    this.showSelectVehicle = false;
    this.baseFare = '';
    this.fare = '';
    this.timetaken = '';
    this.kmDistance = '';
    this.taxiForm.controls.vehicleTypeId.setValue('');
  }

  submit() {
    this.submitted = true;
    if(this.taxiForm.valid){
      var formData = this.taxiForm.value;
      var data = {
        vehicleTypeId: formData.vehicleTypeId,
        userFirstName: formData.firstName,
        userLastName: formData.lastName,
        countryCode: formData.countryCode.Code,
        phone: formData.phone,
        "source":{
          "address": formData.source.address,
          "latitude":this.latitude,
          "longitude": this.longitude,
          "cordinates":[this.longitude,this.latitude]
        },
        "destination":{
          "address": formData.destination.address,
          "latitude":this.latitude1,
          "longitude": this.longitude1,
          "cordinates":[this.longitude1,this.latitude1]
        },
        "note":formData.note,
        "verticalType":2,
        "distance":this.kmDistance,
        "subTotalAmount":this.fare,
        "totalAmount":this.fare,
        "paymentMode":"Cash",
        seats: 1,
        bookingType:2
      }
      this.requestTaxi(data);
      this.bookingInterval = setInterval(() => {
      this.requestTaxi(data);
    }, 15 * 1000);
    }
  }

  requestTaxi(data){
    this.orderService.taxiBooking(data).subscribe(response => {
      console.log("taxi booking",response);
      if (response["sucess"]) {
        if(response["requestId"]) 
        if(this.isTaxiRequested){
          this.toastr.successToastr("Connecting to driver")
        }else{
          this.toastr.successToastr("Request sent successfully")
        }
        this.isTaxiRequested = true;
      }else{
        clearInterval(this.bookingInterval);
        this.isTaxiRequested = false
        this.toastr.errorToastr(response.message)
      }
    });
  }
  
  reset() {
    this.taxiForm.reset();
    clearInterval(this.bookingInterval);
    this.isTaxiRequested = false;
    this.comm.hideSpinner();
  }
}
