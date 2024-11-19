import { Component } from '@angular/core';
import { PcbBasicComponent } from './pcb-basic/pcb-basic.component';
import { PcbCustomizeComponent } from './pcb-customize/pcb-customize.component';
import { FileUploadService } from '../../../core/services/file-upload.service';

@Component({
  selector: 'app-pcb-desing',
  standalone: true,
  imports: [PcbBasicComponent, PcbCustomizeComponent],
  templateUrl: './pcb-desing.component.html',
  styleUrl: './pcb-desing.component.scss'
})
export class PcbDesingComponent {
  selectedFile : File | any;
  constructor(private fileUploadService: FileUploadService) {}

  onFileUpload() {
    this.fileUploadService.FileUpload(this.selectedFile).subscribe({
      next:(response) =>{
        console.log(response);
      }
    });
  }

  onFileSelected(event: Event): void {
    console.log("File selected")
    const FILE = (event.target as HTMLInputElement).files?.[0];
    this.selectedFile = FILE;
    console.log(this.selectedFile)
    
  }
}
