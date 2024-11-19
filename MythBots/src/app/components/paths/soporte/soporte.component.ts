import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router } from '@angular/router';
import { ModalSoporteComponent } from '../../layout/modal-soporte/modal-soporte.component';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [ModalSoporteComponent, CommonModule],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.scss'
})
export class SoporteComponent {

  area: string = '';

  constructor(private router: Router) { }

  actualizarArea(area: string):void {
    this.area = area;
  }
}
