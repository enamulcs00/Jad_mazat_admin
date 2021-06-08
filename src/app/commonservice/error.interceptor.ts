import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../cooldash/services/api/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: ApiService,private toastr:ToastrManager) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        return next.handle(request).pipe(tap((evt:any) => {
          if (evt instanceof HttpResponse) {
            if ([401, 403].includes(evt.status)) {
              this.toastr.errorToastr('Please login','Session expired',{
                timeOut: 3000,
              })
              this.accountService.logout();
              
          }else if(![401, 403,200].includes(evt.status)){
            this.toastr.errorToastr(evt.body.message || evt.statusText)
          }
       }}))
    }
}
