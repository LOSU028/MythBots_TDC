import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  //Datos
  secciones = [
    {
      titulo: '3D Print',
      descripcion: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique elit viverra tristique ad quam aliquet. Potenti vulputate hac torquent ad ultrices, hendrerit vehicula ligula? Id quis vitae nostra, rhoncus sodales hendrerit. Eget sed curabitur a felis donec facilisis placerat. Magna mauris pellentesque lacus curabitur pulvinar ad torquent nulla. Blandit potenti porta arcu interdum ridiculus placerat finibus. Mus nibh habitasse potenti tempor semper netus hac non. Justo lacinia posuere donec fusce consequat lobortis; aenean mattis netus! Phasellus bibendum erat auctor posuere tincidunt sit. Eleifend ad aenean cras luctus taciti eros arcu eu. Mattis suspendisse parturient felis parturient aptent. Vitae ligula ante efficitur integer ullamcorper natoque metus pulvinar. Arcu blandit varius quam a massa augue. Accumsan eleifend proin aenean volutpat ad sodales. Netus praesent ipsum dolor dapibus sapien non.',
      imagen: '',
      botonTexto: 'Conocer más',
      botonRuta: '/ruta'
    },
    {
      titulo: 'PCB Desing',
      descripcion: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique elit viverra tristique ad quam aliquet. Potenti vulputate hac torquent ad ultrices, hendrerit vehicula ligula? Id quis vitae nostra, rhoncus sodales hendrerit. Eget sed curabitur a felis donec facilisis placerat. Magna mauris pellentesque lacus curabitur pulvinar ad torquent nulla. Blandit potenti porta arcu interdum ridiculus placerat finibus. Mus nibh habitasse potenti tempor semper netus hac non. Justo lacinia posuere donec fusce consequat lobortis; aenean mattis netus! Phasellus bibendum erat auctor posuere tincidunt sit. Eleifend ad aenean cras luctus taciti eros arcu eu. Mattis suspendisse parturient felis parturient aptent. Vitae ligula ante efficitur integer ullamcorper natoque metus pulvinar. Arcu blandit varius quam a massa augue. Accumsan eleifend proin aenean volutpat ad sodales. Netus praesent ipsum dolor dapibus sapien non.',
      imagen: '',
      botonTexto: 'Conocer más',
      botonRuta: '/ruta'
    },
    {
      titulo: 'Create Funko',
      descripcion: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique elit viverra tristique ad quam aliquet. Potenti vulputate hac torquent ad ultrices, hendrerit vehicula ligula? Id quis vitae nostra, rhoncus sodales hendrerit. Eget sed curabitur a felis donec facilisis placerat. Magna mauris pellentesque lacus curabitur pulvinar ad torquent nulla. Blandit potenti porta arcu interdum ridiculus placerat finibus. Mus nibh habitasse potenti tempor semper netus hac non. Justo lacinia posuere donec fusce consequat lobortis; aenean mattis netus! Phasellus bibendum erat auctor posuere tincidunt sit. Eleifend ad aenean cras luctus taciti eros arcu eu. Mattis suspendisse parturient felis parturient aptent. Vitae ligula ante efficitur integer ullamcorper natoque metus pulvinar. Arcu blandit varius quam a massa augue. Accumsan eleifend proin aenean volutpat ad sodales. Netus praesent ipsum dolor dapibus sapien non.',
      imagen: '/resources/Funko.png',
      botonTexto: 'Conocer más',
      botonRuta: '/create-funko'
    },
    {
      titulo: 'Courses',
      descripcion: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique elit viverra tristique ad quam aliquet. Potenti vulputate hac torquent ad ultrices, hendrerit vehicula ligula? Id quis vitae nostra, rhoncus sodales hendrerit. Eget sed curabitur a felis donec facilisis placerat. Magna mauris pellentesque lacus curabitur pulvinar ad torquent nulla. Blandit potenti porta arcu interdum ridiculus placerat finibus. Mus nibh habitasse potenti tempor semper netus hac non. Justo lacinia posuere donec fusce consequat lobortis; aenean mattis netus! Phasellus bibendum erat auctor posuere tincidunt sit. Eleifend ad aenean cras luctus taciti eros arcu eu. Mattis suspendisse parturient felis parturient aptent. Vitae ligula ante efficitur integer ullamcorper natoque metus pulvinar. Arcu blandit varius quam a massa augue. Accumsan eleifend proin aenean volutpat ad sodales. Netus praesent ipsum dolor dapibus sapien non.',
      imagen: '',
      botonTexto: 'Conocer más',
      botonRuta: '/ruta'
    },
    {
      titulo: 'Educational Robotics',
      descripcion: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique elit viverra tristique ad quam aliquet. Potenti vulputate hac torquent ad ultrices, hendrerit vehicula ligula? Id quis vitae nostra, rhoncus sodales hendrerit. Eget sed curabitur a felis donec facilisis placerat. Magna mauris pellentesque lacus curabitur pulvinar ad torquent nulla. Blandit potenti porta arcu interdum ridiculus placerat finibus. Mus nibh habitasse potenti tempor semper netus hac non. Justo lacinia posuere donec fusce consequat lobortis; aenean mattis netus! Phasellus bibendum erat auctor posuere tincidunt sit. Eleifend ad aenean cras luctus taciti eros arcu eu. Mattis suspendisse parturient felis parturient aptent. Vitae ligula ante efficitur integer ullamcorper natoque metus pulvinar. Arcu blandit varius quam a massa augue. Accumsan eleifend proin aenean volutpat ad sodales. Netus praesent ipsum dolor dapibus sapien non.',
      imagen: '',
      botonTexto: 'Conocer más',
      botonRuta: '/ruta'
    },
    {
      titulo: 'Contact',
      descripcion: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique elit viverra tristique ad quam aliquet. Potenti vulputate hac torquent ad ultrices, hendrerit vehicula ligula? Id quis vitae nostra, rhoncus sodales hendrerit. Eget sed curabitur a felis donec facilisis placerat. Magna mauris pellentesque lacus curabitur pulvinar ad torquent nulla. Blandit potenti porta arcu interdum ridiculus placerat finibus. Mus nibh habitasse potenti tempor semper netus hac non. Justo lacinia posuere donec fusce consequat lobortis; aenean mattis netus! Phasellus bibendum erat auctor posuere tincidunt sit. Eleifend ad aenean cras luctus taciti eros arcu eu. Mattis suspendisse parturient felis parturient aptent. Vitae ligula ante efficitur integer ullamcorper natoque metus pulvinar. Arcu blandit varius quam a massa augue. Accumsan eleifend proin aenean volutpat ad sodales. Netus praesent ipsum dolor dapibus sapien non.',
      imagen: '',
      botonTexto: 'Conocer más',
      botonRuta: '/ruta'
    }
    //Añadir mas en caso de que se ocupe
  ];

}
