import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Register, Login } from '../Interfaces/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ls:any = localStorage.getItem("login");
  login:boolean = JSON.parse(this.ls)  ;
  isLogin: any = new BehaviorSubject(this.login);
  constructor(private _HttpClient: HttpClient , private _Router:Router) { }
  signUp(formData:Register):Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", formData);
  }
  signIn() {
    this.login = true;
    this.isLogin.next(this.login);
    localStorage.setItem("login", this.isLogin.getValue());
  }
  signOut() {
    this.login = false;
    this.isLogin.next(this.login);
    console.log(this.isLogin.getValue());
    localStorage.setItem("login", this.isLogin.getValue());
    this._Router.navigate(["/login"]);
  }
}
