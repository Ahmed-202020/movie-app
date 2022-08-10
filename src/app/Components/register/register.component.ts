import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = "";
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  ngOnInit(): void {
  }
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
    last_name: new FormControl(null , [Validators.minLength(3) , Validators.maxLength(10) , Validators.required]),
    email: new FormControl(null , [Validators.email , Validators.required]),
    password: new FormControl(null , [Validators.pattern("^[A-Z][a-z]{3,12}") , Validators.required]),
    age: new FormControl(null , [Validators.min(16) , Validators.max(80) , Validators.required]),
  })
  submitRegisterForm() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this._AuthService.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          if (res.message === "success") {
            this._Router.navigate(["/login"]);
            this.isLoading = false;
          } else {
            this.errorMessage = res.message;
            this.isLoading = false;
          }
        }
      })
    }
  }
}
