import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { BusyService } from '../services/busy.service';

// export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
@Injectable()
export class loadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.show();
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Sent) {
          //send request
        }
        if (event.type === HttpEventType.Response) {
          //get response
          this.busyService.hide();
        }
      }),
      catchError((error) => {
        this.busyService.hide();
        return throwError(() => {
          return error;
        });
      })
    );
  }
}
