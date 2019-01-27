import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustominterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url !== '/api/v1/user/login') {
      const header = new HttpHeaders().set("access-token",
      sessionStorage.getItem('userToken'));
      const request = req.clone({ headers: header });
      return next.handle(request);
    }
    return next.handle(req);
  }
}
