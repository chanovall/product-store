import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({

      "login": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
    });
  }

  submit() {
    console.log(this.myForm);
  }
}