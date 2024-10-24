import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardCuentaComponent } from "../card-cuenta/card-cuenta.component";
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, CardCuentaComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  //Logotipo
  logotipo = '/resources/mythbots_logo.png';
  logotipoRuta = '/home'

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

  //card Cuenta
  cardVisible: boolean = false;
  toogleCardCuenta() {
    this.cardVisible = !this.cardVisible;
  }

  //Funcion para validar si la tarjeta esta en visible
  isCardVisible(): boolean {
    return this.cardVisible;
  }

  // Detectar clics fuera del componente
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const accountElement = document.querySelector('.navbar-account');
    const cardCuentaElement = document.querySelector('app-card-cuenta');

    // Verificar si el clic fue fuera del icono de cuenta y de la tarjeta de cuenta
    if (this.cardVisible && !accountElement?.contains(targetElement) && !cardCuentaElement?.contains(targetElement)) {
      this.cardVisible = false; // Ocultar tarjeta
    }
  }
}
