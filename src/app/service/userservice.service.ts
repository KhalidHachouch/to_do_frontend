import { Observer } from 'rxjs';
import { Userinterface } from './../interface/userinterface';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService implements Userinterface {

  httpUrl: string='http://localhost:8089';

  constructor(private http:HttpClient) { }
  Login(email:string,password:string): any {
    return this.http.get(`${this.httpUrl}/login?email=${email}&password=${password}`);
  }
  signup(user:any):any {
    return this.http.post(`${this.httpUrl}/saveuser`,user);
  }
}
