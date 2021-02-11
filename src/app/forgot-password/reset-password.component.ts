import { Component, OnInit } from '@angular/core';
import { ApiService } from '../cooldash/services/api/api.service';
import { CommonService } from '../cooldash/services/common/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
   newPassword: any;
   confirmPassword: any;
   token:any;
   isValidToken: boolean = false;
   flags = {
    isSubmit: false,
    isError: false
  };
  constructor(private api: ApiService,
    private comm: CommonService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams
    .subscribe((params) => 
      {
        this.token = params.token;
  });
    this.api.checkToken(this.token).subscribe(response => {
      if (response["response"]["success"]) {
        this.isValidToken = true;
      } else {
        this.isValidToken = false;
        this.comm.errorToast(response["response"]["message"]);
        this.router.navigateByUrl("/login");
      }
    });
  }

  onSubmit() {
    this.flags.isSubmit = true;
    if(this.newPassword == this.confirmPassword){
      var data = {
        email : this.token,
        newPassword : this.newPassword
      };
      this.api.resetPassword(data).subscribe(response => {
        if (response["response"]["success"]) {
          this.router.navigateByUrl("/login");
        } else {
          this.flags.isSubmit = false;
          this.comm.errorToast(response["response"]["message"]);
          this.flags.isError = true;
        }
      });
    }else{
      this.comm.errorToast("New password and Confirm password must match !")
    }
   
  }


}
