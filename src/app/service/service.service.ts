import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
    localStorage.setItem('token','somesecretcode')
  }
  setToken(){
    return this.http.get('https://run.mocky.io/v3/b8efe9c1-6b48-47e6-987f-10abb9dc8391')
  }
}
