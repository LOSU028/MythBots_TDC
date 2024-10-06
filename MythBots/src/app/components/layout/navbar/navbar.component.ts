import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Definición de los elementos del menú
  menuItems: string[] = [
    '3D Print',
    'PCB Design',
    'Create Funko',
    'Courses',
    'Educational Robotics',
    'Contact'
  ];
}
