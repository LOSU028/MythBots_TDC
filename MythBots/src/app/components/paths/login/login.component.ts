import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder){
    this.loginForm = formBuilder.group({
      username:['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.pattern]]
    })
  }

  login(){
    if (this.loginForm.valid){
      console.log('Logeando...')
    }
  }
}
