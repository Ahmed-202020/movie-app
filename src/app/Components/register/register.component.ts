import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private _Router: Router) { }
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
      this._Router.navigate(["/login"]);
    }
  }
}
