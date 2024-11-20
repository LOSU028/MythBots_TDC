import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalSoporteComponent } from '../../layout/modal-soporte/modal-soporte.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SocketService } from '../../../core/services/socket.service';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [ModalSoporteComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.scss'
})
export class SoporteComponent implements OnInit {
  form: FormGroup;
  area: string = '';
  messages: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private socketService: SocketService) {
    this.form = this.formBuilder.group({
      message: ''
    })
   }

  ngOnInit(): void {
    // Leer el parámetro de la URL cuando se carga la página
    this.route.params.subscribe(params => {
      this.area = params['area']; // Asignamos el área desde la URL
    });
    this.socketService.getMessages().subscribe((message: any) => {
      this.messages.push(message.message)
    });
  }

  // Función para regresar a la página de soporte
  regresar(): void {
    // Redirige a la ruta /soporte y recarga el sitio
    this.router.navigate(['/soporte']);
    this.area = '';
  }

  actualizarArea(area: string): void {
    this.area = area;
  }

  sendMessage(){
    this.socketService.sendMessage({
      message: this.form.controls['message'].value
    });
  }
}
