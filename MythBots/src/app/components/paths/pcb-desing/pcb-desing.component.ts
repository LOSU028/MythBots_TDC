import { Component, Type } from '@angular/core';
import { PcbBasicComponent } from './pcb-basic/pcb-basic.component';
import { PcbCustomizeComponent } from './pcb-customize/pcb-customize.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pcb-desing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pcb-desing.component.html',
  styleUrl: './pcb-desing.component.scss'
})
export class PcbDesingComponent {

  // Banner
  banner = {
    titulo: 'PCB Desing',
    descripcion: 'Agregar una descripción del servicio de diseño de PCB.',
    imagenUrl: 'resources/pcbDesing/PCBDesingTarjeta.png'
  };

  // Opciones de paquete
  paquetes = [
    { id: 'basico', titulo: 'Básico', componente: PcbBasicComponent },
    { id: 'personalizado', titulo: 'Personalizado', componente: PcbCustomizeComponent },
  ];

  //Paquete seleccionado
  paqueteSeleccionado: string | null = null;
  componenteSeleccionado: Type<any> | null = null;

  //Seleccionar o deseleccionar el paquete
  seleccionarPaquete(id: string) {
    const paquete = this.paquetes.find(p => p.id === id);
    if (this.paqueteSeleccionado === id) {
      // si se vuelve a hacer clic, se deselecciona
      this.paqueteSeleccionado = null;
      this.componenteSeleccionado = null;
    } else {
      //Selecciona el paquete y componente correspondiente
      this.paqueteSeleccionado = id;
      this.componenteSeleccionado = paquete?.componente || null;
    }
  }

  // Campos del formulario
  camposFormulario = [
    { id: 'nombre', titulo: 'Nombre(s)', type: 'text', placeholder: 'Escribe tu nombre', requerido: true },
    { id: 'apellido', titulo: 'Apellido(s)', type: 'text', placeholder: 'Escribe tu apellido', requerido: true },
    { id: 'email', titulo: 'Email', type: 'email', placeholder: 'Escribe tu correo electronico', requerido: true },
    { id: 'phone', titulo: 'Telefono', type: 'number', placeholder: 'Escribe tu numero telefonico', requerido: true }
  ];


  //formulario reactivo
  cotizacionForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      ...this.camposFormulario.reduce<{ [key: string]: any[]}>((controls, campo) => {
        controls[campo.id] = [
          '',
          campo.requerido ? [Validators.required] : []
        ];
        return controls;
      }, {}),
      decripcion: [''],
      archivos: [this.archivos] //Ref. a archivos
    });

    //Escuchar cambios del formulario
    this.cotizacionForm.statusChanges.subscribe((status) => {
      this.botonHabilitado = this.cotizacionForm.valid;
    });
  }

  //Boton enviar deshabilitado por default
  botonHabilitado = false;

  //Lista para almacenar archivos dinamicamente
  archivos: { id: string }[] = [{ id: 'archivo1' }];

  // Añadir un archivo al formulario
  addArchivo() {
    const nuevoArchivo = { id: `archivo${this.archivos.length + 1}` };
    this.archivos.push(nuevoArchivo);

    //Actualizar el control de reactivo por archivos
    this.cotizacionForm.patchValue({ archivos: this.archivos });
  }

  // Eliminar un archivo del formulario
  deleteArchivo(index: number) {
    this.archivos.splice(index, 1);

    this.cotizacionForm.patchValue({ archivos: this.archivos });
  }

  // Manejo del envío del formulario
  enviarFormulario(): void {
    if (this.cotizacionForm.valid) {
      const datosFormulario = this.cotizacionForm.value;
      console.log('Datos del formulario:', datosFormulario);
    } else {
      console.log('Formulario no válido');
    }
  }
}
