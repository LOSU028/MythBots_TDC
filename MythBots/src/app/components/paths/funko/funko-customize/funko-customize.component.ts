import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-funko-customize',
  standalone: true,
  imports: [RouterLink, CommonModule, AppComponent],
  templateUrl: './funko-customize.component.html',
  styleUrl: './funko-customize.component.scss'
})
export class FunkoCustomizeComponent {

  //Lista de categorias
  categories: string[] = [
    'Color', 'Cuerpo', 'Cabello', 'Camisa', 'Pantalones', 'Ojos', 'Accesorios'
  ];

  // Opciones dinámicas de personalización
  options: { image: string, description: string }[] = [
    { image: 'assets/imgs/option1.png', description: 'Opción 1' },
    { image: 'assets/imgs/option2.png', description: 'Opción 2' },
    { image: 'assets/imgs/option3.png', description: 'Opción 3' },
    { image: 'assets/imgs/option4.png', description: 'Opción 4' },
    { image: 'assets/imgs/option5.png', description: 'Opción 5' },
    { image: 'assets/imgs/option6.png', description: 'Opción 6' },
  ];
}
