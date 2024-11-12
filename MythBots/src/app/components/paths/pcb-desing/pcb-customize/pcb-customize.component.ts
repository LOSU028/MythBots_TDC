import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pcb-customize',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pcb-customize.component.html',
  styleUrl: './pcb-customize.component.scss'
})
export class PcbCustomizeComponent {

  descripcion: string = '';
  archivos: (File | null)[] =[null];

  //Metodo para manejar la seleccion de archivos
  onFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.archivos[index] = input.files[0];
    }
  }

  //metodo para agregar un campo de archivo nuevo
  agregarCampoArchivo(): void {
    this.archivos.push(null);
  }

  //Metodo para eliminar un archivo seleccionado
  eliminarArchivo(index: number): void {
    this.archivos.splice(index, 1);
  }

}
