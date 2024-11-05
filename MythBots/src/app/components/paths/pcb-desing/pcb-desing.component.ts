import { Component } from '@angular/core';
import { PcbBasicComponent } from './pcb-basic/pcb-basic.component';
import { PcbCustomizeComponent } from './pcb-customize/pcb-customize.component';

@Component({
  selector: 'app-pcb-desing',
  standalone: true,
  imports: [PcbBasicComponent, PcbCustomizeComponent],
  templateUrl: './pcb-desing.component.html',
  styleUrl: './pcb-desing.component.scss'
})
export class PcbDesingComponent {

}
