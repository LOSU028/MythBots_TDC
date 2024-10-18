import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  //Logotipo
  logotipo = '/resources/mythbots_logo.png';
  logotipoRuta = '/home'

  // Definición de los elementos del menú
  menuItems = [
    { title: '3D Print', path: '/3d-print' },
    { title: 'PCB Desing', path: '/pcb-desing' },
    { title: 'Create Funko', path: '/create-funko' },
    { title: 'Courses', path: '/courses' },
    { title: 'Educational Robotics', path: '/educational-robotics' },
    { title: 'Contact', path: '/contact' },
  ];

  // Acción al hacer clic en el icono de hamburguesa
  onHamburgerClick(): void {
    console.log('Hamburguesa clickeada'); // Simulación del sidebar
  }
}
