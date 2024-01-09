import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private toast: ToastrService, private router: Router) {}
//TODO.HandleEroors
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          const base = error.error;
          switch (base.statsCode) {
            case 404:
              this.router.navigateByUrl('/notFound');
              this.toast.error(base?.message);
              break;
              case 500:
                this.router.navigateByUrl('/ServerError');
                this.toast.error(base?.message);
                break;
            default:
              this.router.navigateByUrl('/ServerError');
              this.toast.error(base?.message);
              break;
          }
        }
        return throwError(() => {
          return error;
        });
      })
    );
  }
}
//this method for version 15<=
// export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
