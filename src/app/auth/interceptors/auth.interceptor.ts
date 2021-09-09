import { LoginService } from './../../component/services/login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.loginService.isLoggedIn()) {
      return next.handle(request);
    }
    const cloneRequest = request.clone({headers : new HttpHeaders().set('Authorization', localStorage.getItem('userToken'))});
    return next.handle(cloneRequest)
  }

}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass : AuthInterceptor,
  multi: true
}
