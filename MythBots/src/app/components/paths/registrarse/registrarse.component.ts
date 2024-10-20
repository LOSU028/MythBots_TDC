import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
 
@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.scss'
})
export class RegistrarseComponent {
  form: FormGroup;
  authService = inject(AuthService)
  router = inject(Router);

  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      username:['', [Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]]
    })
  }

  registrar(){
    if (this.form.valid){
      console.log('Registrando...')
      this.authService.register(this.form.value).subscribe({
        next:(response) =>{
          console.log(response);
          this.router.navigate(['login']);
        }
      })
    }
  }
}
