import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Definición de los elementos del menú

  authService = inject(AuthService);
  menuItems = [
    { title: '3D Print', path: '/3d-print' },
    { title: 'PCB Desing', path: '/pcb-desing' },
    { title: 'Create Funko', path: '/create-funko' },
    { title: 'Courses', path: '/courses' },
    { title: 'Educational Robotics', path: '/educational-robotics' },
    { title: 'Contact', path: '/contact' },
  ];

  // Acción al hacer clic en el icono de hamburguesa
  logout(){
    this.authService.logout();
  }
  onHamburgerClick(): void {
    console.log('Hamburguesa clickeada'); // Simulación del sidebar
  }
}
