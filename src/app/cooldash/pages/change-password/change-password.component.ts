import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  confirmPassword;
  submitted = false;
  id: any;

  constructor(
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    if (localStorage.getItem('admin')) {
      const data = JSON.parse(localStorage.getItem('admin'));
      if (data.id) {
        this.id = data.id;
      }
    }
    this.resetPasswordForm = this.formBuilder.group(
      {
        oldPassword: new FormControl('', Validators.compose([
          Validators.required
        ])
        ),
        newPassword: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25)
        ])
        ),
        confirmPassword: ['']
      }, { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('newPassword').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }


  update() {
    this.submitted = true;
    if (this.submitted && this.resetPasswordForm.valid) {
      const data = {
        id: this.id,
        oldPassword: this.resetPasswordForm.controls['oldPassword'].value,
        newPassword: this.resetPasswordForm.controls['newPassword'].value,
        verticalType: 0
      };
      this.api.changePassword(data).subscribe(res => {
        if (res['response']['success']) {
          this.toastr.successToastr(res['response']['message']);
          this.router.navigate(['dashboard']);
        } else {
          this.toastr.warningToastr(res['response']['message']);
        }
      }, err => {
        console.log(err);
      });
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }

}
