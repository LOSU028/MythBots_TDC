import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.scss'
})
export class ContactanosComponent {

  contactForm!: FormGroup;
  errorArchivo: string | null = null;

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
        'image/jpeg',
        'image/png',
        'image/jpg',
        'video/mp4',
        'application/zip',
        'model/gltf+json',
        'model/3mf',
      ];
      const maxSize = 25 * 1024 * 1024; // 25 MB

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

  // Enviar formulario
  enviarFormulario(): void {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')?.value);
      formData.append('email', this.contactForm.get('email')?.value);
      if (this.contactForm.get('file')?.value) {
        formData.append('file', this.contactForm.get('file')?.value);
      }
      formData.append('message', this.contactForm.get('message')?.value);

      //Proximamente - implementar el envío a una API
      console.log('Formulario enviado:', formData);
      alert('Formulario enviado con éxito.');
      this.contactForm.reset();
    } else {
      console.log('Formulario inválido.');
    }
  }
}
