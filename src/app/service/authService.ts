import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  public getToken(): any {
    
    let token=localStorage.getItem('token')
    console.log("token: ",token)
    return token;
  }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token==='somesecretcode'?true:false;
  }
}
