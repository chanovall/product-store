import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private router: Router){
    this.myForm = new FormGroup({
      "login": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
    });
    
  }

  goToAdmin() {
    if(this.myForm.valid){
      this.router.navigate(['admin'])
    }
  }
}