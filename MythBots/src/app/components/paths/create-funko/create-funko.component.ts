import { Component, OnInit } from '@angular/core';
import { CustomizeFunkoComponent } from './customize-funko/customize-funko.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-funko',
  standalone: true,
  imports: [CustomizeFunkoComponent, RouterLink, CommonModule],
  templateUrl: './create-funko.component.html',
  styleUrl: './create-funko.component.scss'
})
export class CreateFunkoComponent {

  // Datos dinámicos para el banner
  bannerData = {
    title: '¡Crea el tuyo!',
    instructions: [
      'Selecciona el tipo de funko que deseas crear.',
      'Personaliza los detalles de tu funko.',
      'Confirma y añade al carrito.'
    ],
    buttons: [
      { text: 'Ver trabajos', ruta: '/create-funko#trabajos' },
      { text: 'Crear Funko', ruta: '/create-funko#crear' }
    ]
  };

  // Datos para trabajos con imagen opcional
  trabajos = [
    { title: 'Proyecto 1', imageUrl: '/resources/work1.png' },
    { title: 'Proyecto 2',imageUrl: '' }, //En caso de que no haya imagen
    { title: 'Proyecto 3',imageUrl: '/resources/work2.png' },
    { title: 'Proyecto 4',imageUrl: '/resources/work.png' },
  ];

  // Opciones dinámicas para tipos de Funko
  funkoOptions = [
    { id: 'individual', name: 'Individual', img: '/resources/individual.png' },
    { id: 'pareja', name: 'En Pareja', img: '/resources/pareja.png' },
    //{ id: 'mascotas', name: 'mascotas', img: '/resources/mascotas.png' }
  ];

  // Botón de continuar con atributos dinámicos
  continueButton = {
    text: 'Continuar',
    ruta: '/customize'
  };
}
