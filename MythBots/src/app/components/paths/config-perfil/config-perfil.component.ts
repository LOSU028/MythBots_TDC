import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-config-perfil',
  templateUrl: './config-perfil.component.html',
  styleUrls: ['./config-perfil.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ConfigPerfilComponent {
  activeTab: string = 'perfil'; user = {
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    estado: '',
    cp: ''
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  reset() {
    if(confirm("¿Esta seguro de que desea eliminar sus cambios?")) {
      console.log("Implementar pop up de confirmacion");
    }
  }

  save() {
    
  }
}
