import { Component, Type, ChangeDetectorRef, OnInit } from '@angular/core';
import { PcbBasicComponent } from './pcb-basic/pcb-basic.component';
import { Router } from '@angular/router';
import { PcbCustomizeComponent } from './pcb-customize/pcb-customize.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pcb-desing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pcb-desing.component.html',
  styleUrl: './pcb-desing.component.scss'
})
export class PcbDesingComponent implements OnInit {

  // === Variables inicializadas con datos estáticos ===

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

  // === Variables dinámicas ===

  //Paquete seleccionado
  paqueteSeleccionado: string | null = null;
  componenteSeleccionado: Type<any> | null = null;

  //formulario reactivo
  formularioHabilitado = false;
  cotizacionForm!: FormGroup;

  archivoSubido: boolean = true;

  //Boton enviar deshabilitado por default
  botonHabilitado = false;

  //Lista para almacenar archivos dinamicamente
  //archivos: { id: string }[] = [{ id: 'archivo1' }];

  constructor(private fb: FormBuilder, private router: Router) { }

  // === Ciclo de vida de Angular ===

  //Inicializar formulario
  ngOnInit(): void {
    this.inicializarFormulario();
  }

  // === Métodos públicos ===

  inicializarFormulario(): void {
    this.cotizacionForm = this.fb.group({
      paqueteSeleccionado: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      descripcion: ['', [Validators.required]],
      archivos: this.fb.array([])
    });
  }

  //Seleccionar o deseleccionar el paquete
  seleccionarPaquete(id: string): void {
    const paquete = this.paquetes.find((p) => p.id === id);

    if (this.paqueteSeleccionado === id) {
      this.paqueteSeleccionado = null;
      this.componenteSeleccionado = null;
      this.formularioHabilitado = false;

      this.cotizacionForm.get('paqueteSeleccionado')?.setValue('');
    } else {
      this.paqueteSeleccionado = id;
      this.componenteSeleccionado = paquete?.componente || null;
      this.formularioHabilitado = true;

      this.cotizacionForm.get('paqueteSeleccionado')?.setValue(id);
    }
  }

  // Método para redirigir a la ruta '/soporte' al hacer clic
  soporte(): void {
    window.open('/soporte', '_blank');
  }

  // === Métodos para manejo de archivos ===

  // Método para obtener el FormArray 'archivos'
  get archivos(): FormArray {
    return this.cotizacionForm.get('archivos') as FormArray;
  }

  addArchivo(): void {
    if (this.archivos.length < 5) {
      this.archivoSubido = false; // Bloqueamos el botón hasta que se suba un archivo
      const archivoControl = this.fb.control(null, Validators.required); // Control con validación obligatoria
      this.archivos.push(archivoControl); // Añadimos el nuevo control al FormArray
    }
  }

  // Eliminar un archivo del formulario
  deleteArchivo(index: number) {
    this.archivos.removeAt(index);
    this.archivoSubido = true; //Habilitar btn añadir mas
  }

  // Validar el archivo antes de cargarlo
  validarArchivo(event: Event, index: number): void {
    const archivoInput = event.target as HTMLInputElement;
    const archivo = archivoInput?.files?.[0];

    if (archivo) {
      if (archivo.size > 25 * 1024 * 1024) {
        alert('El archivo excede el tamaño máximo permitido de 25MB.');
        archivoInput.value = ''; // Limpiar el input
        this.archivoSubido = false;
      } else if (!['.jpg', '.jpeg', '.png', '.mp4', '.mov', '.zip', '.pdf', '.docx', '.dwg', '.stl']
        .some(ext => archivo.name.toLowerCase().endsWith(ext))) {
        alert('El archivo no tiene un formato válido.');
        archivoInput.value = ''; // Limpiar el input
        this.archivoSubido = false;
      } else {
        this.archivoSubido = true; // Desbloqueamos el botón de añadir mas
      }
    }
  }

  // Manejo del envío del formulario
  enviarFormulario(): void {
    if (this.cotizacionForm.valid) {
      const datosFormulario = this.cotizacionForm.value;
      console.log('Datos del formulario:', datosFormulario);
      console.log('Paquete Seleccionado:', datosFormulario.paqueteSeleccionado);
    } else {
      console.log('Formulario no válido');
    }
  }
}
