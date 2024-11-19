import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalSoporteComponent } from '../../layout/modal-soporte/modal-soporte.component';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [ModalSoporteComponent, CommonModule],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.scss'
})
export class SoporteComponent implements OnInit {

  area: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Leer el parámetro de la URL cuando se carga la página
    this.route.params.subscribe(params => {
      this.area = params['area']; // Asignamos el área desde la URL
    });
  }

  // Función para regresar a la página de soporte
  regresar(): void {
    // Redirige a la ruta /soporte y recarga el sitio
    this.router.navigate(['/soporte']);
    this.area = '';
  }

  actualizarArea(area: string): void {
    this.area = area;
  }
}
