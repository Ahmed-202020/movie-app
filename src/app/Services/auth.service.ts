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
  userData: any = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient , private _Router:Router) { }
  signUp(formData:Register):Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", formData);
  }
  signIn(formData:Login):Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", formData);
  }
  signOut() {
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._Router.navigate(["/login"]);
  }
  saveUserData() {
    let incodedToken = JSON.stringify(localStorage.getItem("userToken"));
    let decodedToken = jwtDecode(incodedToken);
    this.userData.next(decodedToken);
  }
}
