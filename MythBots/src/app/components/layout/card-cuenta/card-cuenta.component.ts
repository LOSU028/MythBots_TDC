import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-cuenta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-cuenta.component.html',
  styleUrl: './card-cuenta.component.scss'
})
export class CardCuentaComponent {

  //Datos del usuario
  usuario = {
    nombre: 'Nombre usuario',
    fotoPerfil: 'resources/mythbots_logo.png'
  };

  // Opciones del menú
  admin = { icono: 'fa-solid fa-shield' ,texto:'Panel Administracion'};

  // Opciones del menú
  opciones = [
    { icono: 'fa-solid fa-user', texto: 'Perfil' },
    { icono: 'fa-solid fa-book', texto: 'Mis Cursos' },
    { icono: 'fa-solid fa-key', texto: 'Mis Licencias' }
  ];

  //opcin de cerrar sesion
  cerrarSesion = { icono: 'fa-solid fa-right-from-bracket', texto: 'Cerrar Sesión' };

  //Simulacion del rol admin (Un futuro se implementara middleware)
  isAdmin = false;
}
