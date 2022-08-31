import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // userInfo: any = {};
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService) {
  }
  ngOnInit(): void {
    if (this._AuthService.ls) {
      this.isLogin = JSON.parse(this._AuthService.ls)
    }
    this._AuthService.isLogin.subscribe(() => {
      if (this._AuthService.isLogin.getValue() === true) {
        this.isLogin = this._AuthService.isLogin.getValue();
      }
    })
  }
  logOut() {
    this._AuthService.signOut();
    this._AuthService.isLogin.subscribe(() => {
      if (this._AuthService.isLogin.getValue() === false) {
        this.isLogin = this._AuthService.isLogin.getValue();
      }
    })
  }
}
