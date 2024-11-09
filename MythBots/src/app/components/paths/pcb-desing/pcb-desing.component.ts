import { Component } from '@angular/core';
import { PcbBasicComponent } from './pcb-basic/pcb-basic.component';
import { PcbCustomizeComponent } from './pcb-customize/pcb-customize.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pcb-desing',
  standalone: true,
  imports: [PcbBasicComponent, PcbCustomizeComponent, CommonModule],
  templateUrl: './pcb-desing.component.html',
  styleUrl: './pcb-desing.component.scss'
})
export class PcbDesingComponent {

  // Banner
  banner = {
    titulo: 'PCB Desing',
    descripcion: 'Agregar una descripción del servicio de diseño de PCB.',
    imagenUrl: 'ruta/img.jpg'
  };

  // Opciones de paquete
  paquetes = [
    { id: 'basico', titulo: 'Básico' },
    { id: 'personalizado', titulo: 'Personalizado' }
  ];

  // Campos del formulario
  camposFormulario = [
    { id: 'nombre', titulo: 'Nombre(s)', type: 'text', placeholder: 'Escribe tu nombre', requerido: true },
    { id: 'apellido', titulo: 'Apellido(s)', type: 'text', placeholder: 'Escribe tu apellido', requerido: true },
    { id: 'email', titulo: 'Email', type: 'email', placeholder: 'Escribe tu correo electronico', requerido: true },
    { id: 'phone', titulo: 'Telefono', type: 'number', placeholder: 'Escribe tu numero telefonico', requerido: true }
  ];

  //Lista para almacenar archivos dinamicamente
  archivos: { id: string }[] = [{ id: 'archivo1' }];

  // Añadir un archivo al formulario
  addArchivo() {
    const nuevoArchivo = { id: `archivo${this.archivos.length + 1}` };
    this.archivos.push(nuevoArchivo);
  }

  // Eliminar un archivo del formulario
  deleteArchivo(index: number) {
    this.archivos.splice(index, 1);
  }

  // Manejo del envío del formulario
  enviarFormulario() {
    console.log("Formulario enviado.");
  }
}
