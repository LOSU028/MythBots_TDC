import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.scss'
})
export class ContactanosComponent {

  contactForm!: FormGroup;
  errorArchivo: string | null = null;


  //contact-info
  contacts = [
    {
      icon: 'fas fa-envelope',
      text: 'Mythbots@outlook.com',
      link: 'mailto:mythbots-soporte@outlook.com'
    },
    {
      icon: 'fab fa-whatsapp',
      text: 'Whatsapp',
      link: 'https://wa.me/123456789'
    },
    {
      icon: 'fas fa-phone',
      text: '+52 123 123 1234',
      link: 'tel:+123456789',
    },
  ]

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      file: [null],
      message: ['']
    });
  }
  // Getters para los controles del formulario
  get nombreControl() {
    return this.contactForm.get('name');
  }

  get correoControl() {
    return this.contactForm.get('email');
  }

  // Validar archivo
  validarArchivo(event: Event): void {
    this.errorArchivo = null; // Resetear error
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (file) {
      const validExtensions = [
        'application/pdf',
        'application/zip',
        'image/jpeg',
        'image/png',
        'image/jpg',
        'video/mp4',
        'model/gltf+json',
        'model/3mf',
      ];
      //Tamaño 25MB
      const maxSize = 25 * 1024 * 1024; // 25 MB

      //Validar extensiones
      if (!validExtensions.includes(file.type)) {
        this.errorArchivo = 'Formato de archivo no permitido.';
        this.contactForm.get('file')?.setValue(null);
      } else if (file.size > maxSize) {
        this.errorArchivo = 'El archivo excede el límite de 25 MB.';
        this.contactForm.get('file')?.setValue(null);
      } else {
        this.contactForm.get('file')?.setValue(file);
      }
    }
  }

  //limpiar archivo
  limpiarArchivo(): void {
    this.contactForm.get('file')?.setValue(null);
    this.errorArchivo = null; // Resetear mensaje de error
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Limpiar el campo
    }
  }



  // Enviar formulario
  enviarFormulario(): void {
    if (this.contactForm.valid) {
      const formData = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        file: this.contactForm.get('file')?.value,
        message: this.contactForm.get('message')?.value,
      };

      //Proximamente - implementar el envío a una API
      console.log('Formulario enviado:', formData);
      alert('Formulario enviado con éxito.');
      this.contactForm.reset();
    } else {
      console.log('Formulario inválido.');
    }
  }
}
