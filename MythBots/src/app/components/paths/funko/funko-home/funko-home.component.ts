import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../../../app.component';
import { FunkoCustomizeComponent } from '../funko-customize/funko-customize.component';

@Component({
  selector: 'app-funko-home',
  standalone: true,
  imports: [FunkoCustomizeComponent, RouterLink, CommonModule, AppComponent],
  templateUrl: './funko-home.component.html',
  styleUrl: './funko-home.component.scss'
})
export class FunkoHomeComponent {


  // Datos dinámicos para el banner
  bannerData = {
    title: '¡Crea el tuyo!',
    instructions: [
      'Selecciona el tipo de funko que deseas crear.',
      'Personaliza los detalles de tu funko.',
      'Confirma y añade al carrito.'
    ],
    buttons: [
      { text: 'Ver trabajos', ruta: '/funko/home#trabajos' },
      { text: 'Crear Funko', ruta: '/funko/home#crear' }
    ]
  };

  // Datos para trabajos con imagen opcional
  trabajos = [
    { title: 'Proyecto 1', imageUrl: '/resources/funko/CreateFunko.png' },
    { title: 'Proyecto 2', imageUrl: '' }, // En caso de que no haya imagen
    { title: 'Proyecto 3', imageUrl: '/resources/home/PCBDesing.jpg' },
    { title: 'Proyecto 4', imageUrl: '/resources/funko/CreateFunko.png' },
  ];

  // Array duplicado para lograr el efecto infinito
  trabajosDuplicados = [...this.trabajos, ...this.trabajos];

  // Opciones dinámicas para tipos de Funko
  funkoOptions = [
    { id: 'individual', name: 'Individual', img: '/resources/individual.png' },
    { id: 'pareja', name: 'En Pareja', img: '/resources/pareja.png' },
    //{ id: 'mascotas', name: 'mascotas', img: '/resources/mascotas.png' }
  ];

  // Botón de continuar con atributos dinámicos
  continueButton = {
    text: 'Continuar',
    ruta: '/funko/customize'
  };
}
