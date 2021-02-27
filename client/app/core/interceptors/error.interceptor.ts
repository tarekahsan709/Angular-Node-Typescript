import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error) {
          if (error.status === 400) {
            if (error.error.error) {
              console.error(`${error.message}, ${error.status}`);
              throw error.error;
            }
          } else {
            console.error(`${error.message}, ${error.status}`);
          }
          this.toastr.error(error.error.msg);
        }
        return throwError(error);
      })
    );
  }
}
