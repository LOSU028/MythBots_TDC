import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, ],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.scss'
})
export class RegistrarseComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      username:['', [Validators.required, Validators.minLength(8)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]]
    })
  }

  registrar(){
    if (this.form.valid){
      console.log('Registrando usuario...')
    }
  }
}
