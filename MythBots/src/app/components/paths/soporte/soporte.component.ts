import { Component } from '@angular/core';
import { ModalSoporteComponent } from '../../layout/modal-soporte/modal-soporte.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [ModalSoporteComponent, CommonModule],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.scss'
})
export class SoporteComponent {

  area: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.area = params['area'] || 'Otro';
    })
  }

}
