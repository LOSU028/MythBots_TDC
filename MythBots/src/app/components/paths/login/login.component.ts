import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  authService = inject(AuthService)
  router = inject(Router);

  constructor(formBuilder: FormBuilder){
    this.loginForm = formBuilder.group({
      username:['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.pattern]]
    })
  }

  login(){
    if (this.loginForm.valid){
      console.log('Logeando...')
      this.authService.login(this.loginForm.value).subscribe({
        next:(response) =>{
          console.log(response); 
          this.router.navigate(['']);
        }
      })
    }
  }
}
