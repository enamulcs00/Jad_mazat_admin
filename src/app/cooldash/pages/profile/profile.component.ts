import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../services/api/api.service';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  history = window.history;
  submitted = false;
  id;
  profileDetail: any;
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    if (localStorage.getItem('admin')) {
      const data = JSON.parse(localStorage.getItem('admin'));
      if (data.id) {
        this.id = data.id;
        this.getAdminProfile(this.id);
      }
    }
    this.profileForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(16)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(16)])),
      email: new FormControl('', [Validators.required, Validators.pattern(
        '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
      )]),
    });
  }

  getAdminProfile(id) {
    this.api.getAdminProfile(id).subscribe(res => {
      if (res['response']['success']) {
        localStorage.setItem('admin', JSON.stringify(res['data']));
        this.profileDetail = res['data'];
        this.setValues(this.profileDetail);
      }
    });
  }

  setValues = data => {
    if (data) {
      this.profileForm.patchValue({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
    }
  }

  update() {
    this.submitted = true;

    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      const data = this.profileForm.value;
      data.updateId = this.id;
      // const formData = new FormData();
      // formData.append('data', JSON.stringify(data));
      this.api.updateProfile(data).subscribe(res => {
        if (res['response']['success']) {
          this.toastr.successToastr(res['response']['message']);
          this.getAdminProfile(this.id);
          // this.router.navigate(['/dashboard']);
        } else {
          this.toastr.errorToastr(res['response']['message']);
        }
      });
    }
  }

}
