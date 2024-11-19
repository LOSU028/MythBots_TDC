import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() areaSeleccionada = new EventEmitter<string>();

  constructor(private router: Router) { }

  seleccionarArea(area: string):void {
    this.areaSeleccionada.emit(area);
  }
}
