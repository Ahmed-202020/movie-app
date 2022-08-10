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
  errorMessage: string = "";
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null , [Validators.email , Validators.required]),
    password: new FormControl(null , [Validators.pattern("^[A-Z][a-z]{3,12}") , Validators.required]),
  })
  submitRegisterForm() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message === "success") {
            this.isLoading = false;
            localStorage.setItem("userToken", res.token);
            this._AuthService.saveUserData();
            this._Router.navigate(["/home"]);
          } else {
            this.errorMessage = res.message;
            this.isLoading = false;
          }
        }
      })
    }
  }
}
