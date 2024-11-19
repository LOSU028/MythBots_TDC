import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-soporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-soporte.component.html',
  styleUrl: './modal-soporte.component.scss'
})
export class ModalSoporteComponent {

  // Áreas dinámicas para seleccionar
  areas: string[] = ['3D Print', 'PCB Desing', 'Create Funko', 'Cursos', 'Educational Robotics', 'Otro'];


  constructor(private router: Router) { }

  // Método para manejar la selección de área
  seleccionarArea(area: string): void {
    const ruta = `/soporte/${this.convertirRuta(area)}`;
    this.router.navigate([ruta]);
    console.log(`Área seleccionada: ${area}`);
  }

  //convertir el nombre del area en formato valido par aURL
  private convertirRuta(area: string): string {
    return area
      .toLowerCase()
      .replace(/\s+/g, '-')         // Reemplaza espacios por guiones
      .replace(/[^a-z0-9\-]/g, ''); // Elimina caracteres no válidos
  }

}
