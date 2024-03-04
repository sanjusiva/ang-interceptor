import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/authService';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
    // localStorage.setItem('token','somesecretcode')
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getToken();
    console.log("int req: ",req," next: ",next)
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    if(!this.auth.isAuthenticated()){
      alert("Token expired")
    }
    return next.handle(authReq);
  }
}