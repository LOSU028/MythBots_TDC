import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  //footer_image
  footerLogotipo = '/resources/mythbots_logo.png';

  //Apartado de Eslogan
  slogan: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. t enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris.`;

  //Apartado de Historia
  historyItems= [
    { text: 'Acerca de nosotros', link: '/acerca-de'},
    { text: 'Historia', link: '/Historia'}
  ];

  //Apartado de Servicios
  serviceItems = [
    { text: '3D Print', link: '/3d-print' },
    { text: 'PCB Desing', link: '/pcbDesing' },
    { text: 'Create Funko', link: '/funko' },
    { text: 'Courses', link: '/courses' },
    { text: 'Educational Robotics', link: '/educational-robotics' },
    { text: 'Contactanos', link: '/contact' },
  ];

  //Apartado de Contactos
  contacts = [
    { icon: 'fab fa-whatsapp', text: '+52 123 123 123', url: 'https://wa.me/52123123123' },
    { icon: 'fas fa-envelope', text: 'Mythbots@example.com', url: 'mailto:correo@example.com' },
    { icon: 'fa-solid fa-map-location-dot', text: 'Av Niños Héroes 2267-int. 208, Col Americana, Barrera, 44190 Guadalajara, Jal.', url: 'https://maps.app.goo.gl/vFG3NnMvYJKkkUoj9'}
];

  //Apartado de Redes sociales
  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com', color: '#0077B5' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com', color: '#C13584' },
    { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.com', color: '#7289DA' }
  ];


}
