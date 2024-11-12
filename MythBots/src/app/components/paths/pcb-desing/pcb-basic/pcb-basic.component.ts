import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-pcb-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pcb-basic.component.html',
  styleUrl: './pcb-basic.component.scss'
})

export class PcbBasicComponent {
  filas = [
    {
      id: 1,
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      seleccionado: false,
      editable: true,
      valor: null,
      unidad: "pzas"
    },
    {
      id: 2,
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      seleccionado: false,
      editable: true,
      valor: null,
      unidad: "pzas"
    },
    {
      id: 3,
      texto: 'Text3',
      seleccionado: false,
      editable: true,
      valor: null,
      unidad: "pzas"
    },
    {
      id: 4,
      texto: 'Text4',
      seleccionado: true,
      editable: false,
      valor: 5,
      unidad: "pzas"
    },
  ];

  //Metodo para manejar el cambio de seleccion del checkbox.
  toggleSeleccion(index: number): void {
    //Estado de checkbox
    if (this.filas[index].editable) {
      this.filas[index].seleccionado = !this.filas[index].seleccionado;
    }

    //Si el checkbox se desmarca, limpiar el valor del input
    if (!this.filas[index].seleccionado) {
      this.filas[index].valor = null;
    }
  }

  //Obtener el color (Blanco, gris)
  getFilaColor(index: number): string {
    return index % 2 === 0 ? 'fila-blanca' : 'fila-gris';
  }

}
