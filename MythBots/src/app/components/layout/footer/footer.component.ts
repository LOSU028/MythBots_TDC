import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  //Apartado de Eslogan
  slogan: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. t enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris.`;

  //Apartado de Historia
  historyItems: string[] = ['Acerca de', 'Historia', 'Quienes somos'];

  //Apartado de Servicios
  serviceItems: string[] = ['Productos', 'Servicios', 'Cursos'];

  //Apartado de Contactos
  contacts = [
    { icon: '📞', text: '+52 123 123 123' },
    { icon: '📧', text: 'correogmail.com' }
  ];

  //Apartado de Redes sociales
  socialLinks = [
    {
      icon: '../../../../../public/resources/facebook.png',
      url: 'https://www.facebook.com'
    },
    {
      icon: '../../../../../public/resources/twitter.png',
      url: 'https://www.twitter.com'
    },
    {
      icon: '../../../../../public/resources/instagram.png',
      url: 'https://www.instagram.com'
    },
    {
      icon: '../../../../../public/resources/linkedin.png',
      url: 'https://www.linkedin.com'
    }
  ];


}
