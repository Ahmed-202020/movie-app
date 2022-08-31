import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null , [Validators.email , Validators.required]),
    password: new FormControl(null , [Validators.pattern("^[A-Z][a-z]{3,12}") , Validators.required]),
  })
  submitLoginForm() {
    if (this.loginForm.valid) {
      this._Router.navigate(["/home"]);
      this._AuthService.signIn()
    }
  }
}
