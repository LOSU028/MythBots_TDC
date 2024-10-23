import { Component } from '@angular/core';
import { CustomizeFunkoComponent } from './customize-funko/customize-funko.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-funko',
  standalone: true,
  imports: [CustomizeFunkoComponent, RouterLink],
  templateUrl: './create-funko.component.html',
  styleUrl: './create-funko.component.scss'
})
export class CreateFunkoComponent {

}
